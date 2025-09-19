import { ApiClient } from "@/api";
import { DecodedMessage, MessageDecoder } from "@/interfaces";
import {
  Log,
  Message,
  TxResponse,
  zMsgClaimMinitswap,
  zMsgDepositMinitswap,
  zMsgWithdrawMinitswap
} from "@/schema";
import {
  zBurnEvent,
  zDepositEvent,
  zMinitswapProvideEvent,
  zMinitswapUnbondEvent,
  zMinitswapWithdrawUnbondEvent,
  zMintEvent,
  zWithdrawEvent
} from "@/schema/events";
import { findMoveEvent } from "@/utils";

export const claimMinitswapDecoder: MessageDecoder = {
  check: (message: Message, _log: Log) =>
    zMsgClaimMinitswap.safeParse(message).success,
  decode: async (
    message: Message,
    log: Log,
    apiClient: ApiClient,
    _txResponse: TxResponse
  ) => {
    const parsed = zMsgClaimMinitswap.parse(message);
    const { sender } = parsed;

    const withdrawUnbondEvent = findMoveEvent(
      log.events,
      "0x1::minitswap::WithdrawUnbondEvent",
      zMinitswapWithdrawUnbondEvent
    );
    if (!withdrawUnbondEvent) {
      throw new Error("WithdrawUnbondEvent not found");
    }

    const depositEvent = findMoveEvent(
      log.events,
      "0x1::fungible_asset::DepositEvent",
      zDepositEvent
    );
    if (!depositEvent) {
      throw new Error("DepositEvent not found");
    }

    const receivedDenom = await apiClient.findDenomFromMetadataAddr(
      depositEvent.metadata_addr
    );

    if (!receivedDenom) {
      throw new Error(
        `Received denom not found for metadata ${depositEvent.metadata_addr}`
      );
    }

    const decodedMessage: DecodedMessage = {
      action: "claim_minitswap",
      data: {
        amountReceived: withdrawUnbondEvent.withdraw_amount,
        amountWithdrawn: withdrawUnbondEvent.share_amount,
        denomReceived: receivedDenom,
        denomWithdrawn: "uoinit",
        from: sender
      },
      isIbc: false,
      isOp: false
    };

    return decodedMessage;
  }
};

export const depositMinitswapDecoder: MessageDecoder = {
  check: (message: Message, _log: Log) =>
    zMsgDepositMinitswap.safeParse(message).success,
  decode: async (
    message: Message,
    log: Log,
    apiClient: ApiClient,
    _txResponse: TxResponse
  ) => {
    const parsed = zMsgDepositMinitswap.parse(message);
    const { sender } = parsed;

    const provideEvent = findMoveEvent(
      log.events,
      "0x1::minitswap::ProvideEvent",
      zMinitswapProvideEvent
    );
    if (!provideEvent) {
      throw new Error("ProvideEvent not found");
    }

    const withdrawEvent = findMoveEvent(
      log.events,
      "0x1::fungible_asset::WithdrawEvent",
      zWithdrawEvent
    );
    if (!withdrawEvent) {
      throw new Error("WithdrawEvent not found");
    }

    const mintEvent = findMoveEvent(
      log.events,
      "0x1::fungible_asset::MintEvent",
      zMintEvent
    );
    if (!mintEvent) {
      throw new Error("MintEvent not found");
    }

    const [depositedDenom, receivedDenom] = await Promise.all([
      apiClient.findDenomFromMetadataAddr(withdrawEvent.metadata_addr),
      apiClient.findDenomFromMetadataAddr(mintEvent.metadata_addr)
    ]);

    if (!depositedDenom) {
      throw new Error(
        `Deposited denom not found for metadata ${withdrawEvent.metadata_addr}`
      );
    }

    if (!receivedDenom) {
      throw new Error(
        `Received denom not found for metadata ${mintEvent.metadata_addr}`
      );
    }

    const decodedMessage: DecodedMessage = {
      action: "deposit_minitswap",
      data: {
        amountDeposited: provideEvent.provide_amount,
        amountReceived: provideEvent.share_amount,
        denomDeposited: depositedDenom,
        denomReceived: receivedDenom,
        from: sender
      },
      isIbc: false,
      isOp: false
    };

    return decodedMessage;
  }
};

export const withdrawMinitswapDecoder: MessageDecoder = {
  check: (message: Message, _log: Log) =>
    zMsgWithdrawMinitswap.safeParse(message).success,
  decode: async (
    message: Message,
    log: Log,
    apiClient: ApiClient,
    _txResponse: TxResponse
  ) => {
    const parsed = zMsgWithdrawMinitswap.parse(message);
    const { sender } = parsed;

    const unbondEvent = findMoveEvent(
      log.events,
      "0x1::minitswap::UnbondEvent",
      zMinitswapUnbondEvent
    );
    if (!unbondEvent) {
      throw new Error("UnbondEvent not found");
    }

    const burnEvent = findMoveEvent(
      log.events,
      "0x1::fungible_asset::BurnEvent",
      zBurnEvent
    );
    if (!burnEvent) {
      throw new Error("BurnEvent not found");
    }

    const shareTokenDenom = await apiClient.findDenomFromMetadataAddr(
      burnEvent.metadata_addr
    );

    if (!shareTokenDenom) {
      throw new Error(
        `Share token denom not found for metadata ${burnEvent.metadata_addr}`
      );
    }

    const decodedMessage: DecodedMessage = {
      action: "withdraw_minitswap",
      data: {
        amountReceived: unbondEvent.withdraw_amount,
        amountWithdrawn: unbondEvent.share_amount,
        denomReceived: "uinit",
        denomWithdrawn: shareTokenDenom,
        from: sender,
        releaseTimestamp: unbondEvent.release_time
      },
      isIbc: false,
      isOp: false
    };

    return decodedMessage;
  }
};
