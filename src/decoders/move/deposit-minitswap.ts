import type { DecodedMessage, MessageDecoder } from "@/interfaces";
import type { Log, Message } from "@/schema";

import { ApiClient } from "@/api";
import { zMsgMoveExecute } from "@/schema";
import {
  zMinitswapProvideEvent,
  zWithdrawEvent,
  zMintEvent,
} from "@/schema/events";
import { findMoveEvent } from "@/utils";

export const depositMinitswapDecoder: MessageDecoder = {
  check: (message: Message, _log: Log) => {
    const parsed = zMsgMoveExecute.safeParse(message);
    if (!parsed.success) return false;
    return (
      parsed.data.function_name === "provide" &&
      parsed.data.module_name === "minitswap" &&
      parsed.data.module_address === "0x1"
    );
  },

  decode: async (message: Message, log: Log, apiClient: ApiClient) => {
    const parsed = zMsgMoveExecute.safeParse(message);
    if (!parsed.success) {
      throw new Error("Invalid move execute message");
    }

    const { sender } = parsed.data;

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
      apiClient.findDenomFromMetadataAddr(mintEvent.metadata_addr),
    ]);

    const decodedMessage: DecodedMessage = {
      action: "deposit_minitswap",
      data: {
        amountDeposited: provideEvent.provide_amount,
        amountReceived: provideEvent.share_amount,
        denomDeposited: depositedDenom || withdrawEvent.metadata_addr,
        denomReceived: receivedDenom || mintEvent.metadata_addr,
        from: sender,
      },
      isIbc: false,
      isOp: false,
    };

    return decodedMessage;
  },
};
