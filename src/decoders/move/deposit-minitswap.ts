import type { DecodedMessage, MessageDecoder } from "@/interfaces";
import type { Log, Message } from "@/schema";

import { ApiClient } from "@/api";
import { zMsgDepositMinitswap } from "@/schema";
import {
  zMinitswapProvideEvent,
  zMintEvent,
  zWithdrawEvent
} from "@/schema/events";
import { findMoveEvent } from "@/utils";

export const depositMinitswapDecoder: MessageDecoder = {
  check: (message: Message, _log: Log) =>
    zMsgDepositMinitswap.safeParse(message).success,

  decode: async (message: Message, log: Log, apiClient: ApiClient) => {
    const parsed = zMsgDepositMinitswap.parse(message);
    const { sender } = parsed;

    // Find the ProvideEvent to get the amounts
    const provideEvent = findMoveEvent(
      log.events,
      "0x1::minitswap::ProvideEvent",
      zMinitswapProvideEvent
    );
    if (!provideEvent) {
      throw new Error("ProvideEvent not found");
    }

    // Find the WithdrawEvent to get the deposited token metadata
    const withdrawEvent = findMoveEvent(
      log.events,
      "0x1::fungible_asset::WithdrawEvent",
      zWithdrawEvent
    );
    if (!withdrawEvent) {
      throw new Error("WithdrawEvent not found");
    }

    // Find the MintEvent to get the received share token metadata
    const mintEvent = findMoveEvent(
      log.events,
      "0x1::fungible_asset::MintEvent",
      zMintEvent
    );
    if (!mintEvent) {
      throw new Error("MintEvent not found");
    }

    // Get denomination data for deposited and received tokens
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
