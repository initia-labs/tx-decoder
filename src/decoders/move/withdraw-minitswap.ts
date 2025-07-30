import type { DecodedMessage, MessageDecoder } from "@/interfaces";
import type { Log, Message } from "@/schema";

import { ApiClient } from "@/api";
import { zMsgWithdrawMinitswap } from "@/schema";
import {
  zMinitswapUnbondEvent,
  zWithdrawEvent,
  zBurnEvent,
} from "@/schema/events";
import { findMoveEvent } from "@/utils";

export const withdrawMinitswapDecoder: MessageDecoder = {
  check: (message: Message, _log: Log) =>
    zMsgWithdrawMinitswap.safeParse(message).success,

  decode: async (message: Message, log: Log, apiClient: ApiClient) => {
    const parsed = zMsgWithdrawMinitswap.parse(message);
    const { sender } = parsed;

    // Find the UnbondEvent to get the amounts and release time
    const unbondEvent = findMoveEvent(
      log.events,
      "0x1::minitswap::UnbondEvent",
      zMinitswapUnbondEvent
    );
    if (!unbondEvent) {
      throw new Error("UnbondEvent not found");
    }

    // Find the WithdrawEvent to get the share token being withdrawn
    const withdrawEvent = findMoveEvent(
      log.events,
      "0x1::fungible_asset::WithdrawEvent",
      zWithdrawEvent
    );
    if (!withdrawEvent) {
      throw new Error("WithdrawEvent not found");
    }

    // Find the BurnEvent to get the burned share token metadata
    const burnEvent = findMoveEvent(
      log.events,
      "0x1::fungible_asset::BurnEvent",
      zBurnEvent
    );
    if (!burnEvent) {
      throw new Error("BurnEvent not found");
    }

    // Get denomination data for withdrawn share tokens
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
        amountWithdrawn: unbondEvent.share_amount,
        amountReceived: unbondEvent.withdraw_amount,
        denomWithdrawn: shareTokenDenom,
        from: sender,
        releaseTime: unbondEvent.release_time,
      },
      isIbc: false,
      isOp: false,
    };

    return decodedMessage;
  },
};
