import type { DecodedMessage, MessageDecoder } from "@/interfaces";
import type { Log, Message } from "@/schema";

import { ApiClient } from "@/api";
import { zMsgVipClaimEsinit } from "@/schema";
import { zDepositEvent } from "@/schema/events";
import { findAllMoveEvents } from "@/utils";

export const vipClaimEsinitDecoder: MessageDecoder = {
  check: (message: Message, _log: Log) =>
    zMsgVipClaimEsinit.safeParse(message).success,

  decode: async (message: Message, log: Log, apiClient: ApiClient) => {
    const parsed = zMsgVipClaimEsinit.parse(message);
    const { sender } = parsed;

    // Find all DepositEvents - the last one should be the reward deposit to the user
    const depositEvents = findAllMoveEvents(
      log.events,
      "0x1::fungible_asset::DepositEvent",
      zDepositEvent
    );

    if (depositEvents.length === 0) {
      throw new Error("No DepositEvent found");
    }

    // The last DepositEvent should be the reward deposit to the user
    const rewardDepositEvent = depositEvents[depositEvents.length - 1];

    // Get denomination for the reward
    const rewardDenom = await apiClient.findDenomFromMetadataAddr(
      rewardDepositEvent.metadata_addr
    );

    if (!rewardDenom) {
      throw new Error(
        `Reward denom not found for metadata ${rewardDepositEvent.metadata_addr}`
      );
    }

    const decodedMessage: DecodedMessage = {
      action: "vip_claim_esinit",
      data: {
        amount: rewardDepositEvent.amount,
        denom: rewardDenom,
        from: sender,
      },
      isIbc: false,
      isOp: false,
    };

    return decodedMessage;
  },
};