import type { DecodedMessage, MessageDecoder } from "@/interfaces";
import type { Log, Message } from "@/schema";

import { ApiClient } from "@/api";
import { zMsgVipClaimEsinit } from "@/schema";
import { zDepositEvent } from "@/schema/events";
import { findMoveEvent } from "@/utils";

export const vipClaimEsinitDecoder: MessageDecoder = {
  check: (message: Message, _log: Log) =>
    zMsgVipClaimEsinit.safeParse(message).success,

  decode: async (message: Message, log: Log, _: ApiClient) => {
    const parsed = zMsgVipClaimEsinit.parse(message);
    const { sender } = parsed;

    // Find the DepositEvent - should be the reward deposit to the user
    const depositEvent = findMoveEvent(
      log.events,
      "0x1::fungible_asset::DepositEvent",
      zDepositEvent
    );

    if (!depositEvent) {
      const decodedMessage: DecodedMessage = {
        action: "vip_claim_esinit",
        data: {
          amount: "0",
          denom: "uinit",
          from: sender,
        },
        isIbc: false,
        isOp: false,
      };
      return decodedMessage;
    }

    const decodedMessage: DecodedMessage = {
      action: "vip_claim_esinit",
      data: {
        amount: depositEvent.amount,
        denom: "uinit",
        from: sender,
      },
      isIbc: false,
      isOp: false,
    };

    return decodedMessage;
  },
};
