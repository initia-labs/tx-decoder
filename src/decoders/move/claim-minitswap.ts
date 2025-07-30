import type { DecodedMessage, MessageDecoder } from "@/interfaces";
import type { Log, Message } from "@/schema";

import { ApiClient } from "@/api";
import { zMsgClaimMinitswap } from "@/schema";
import {
  zMinitswapWithdrawUnbondEvent,
  zWithdrawEvent,
  zDepositEvent,
} from "@/schema/events";
import { findMoveEvent } from "@/utils";

export const claimMinitswapDecoder: MessageDecoder = {
  check: (message: Message, _log: Log) =>
    zMsgClaimMinitswap.safeParse(message).success,

  decode: async (message: Message, log: Log, apiClient: ApiClient) => {
    const parsed = zMsgClaimMinitswap.parse(message);
    const { sender } = parsed;

    // Find the WithdrawUnbondEvent to get the amounts
    const withdrawUnbondEvent = findMoveEvent(
      log.events,
      "0x1::minitswap::WithdrawUnbondEvent",
      zMinitswapWithdrawUnbondEvent
    );
    if (!withdrawUnbondEvent) {
      throw new Error("WithdrawUnbondEvent not found");
    }

    // Find the WithdrawEvent from the pool to identify the underlying token
    const withdrawEvent = findMoveEvent(
      log.events,
      "0x1::fungible_asset::WithdrawEvent",
      zWithdrawEvent
    );
    if (!withdrawEvent) {
      throw new Error("WithdrawEvent not found");
    }

    // Find the DepositEvent to user's account
    const depositEvent = findMoveEvent(
      log.events,
      "0x1::fungible_asset::DepositEvent",
      zDepositEvent
    );
    if (!depositEvent) {
      throw new Error("DepositEvent not found");
    }

    // Get denomination for received tokens
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
        amount: withdrawUnbondEvent.withdraw_amount,
        denom: receivedDenom,
        from: sender,
      },
      isIbc: false,
      isOp: false,
    };

    return decodedMessage;
  },
};