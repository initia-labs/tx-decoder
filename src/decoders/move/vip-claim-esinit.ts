import type { DecodedMessage, MessageDecoder } from "@/interfaces";
import type { Log, Message } from "@/schema";

import { ApiClient } from "@/api";
import { INITIA_VAULT_MODULE_ADDRESS } from "@/constants";
import { zMsgVipClaimEsinit } from "@/schema";
import { zDepositEvent, zUserVestingCreateEvent } from "@/schema/events";
import { findMoveEvent } from "@/utils";

export const vipClaimEsinitDecoder: MessageDecoder = {
  check: (message: Message, _log: Log) =>
    zMsgVipClaimEsinit.safeParse(message).success,

  decode: async (message: Message, log: Log, apiClient: ApiClient) => {
    const parsed = zMsgVipClaimEsinit.parse(message);
    const { sender } = parsed;
    const denom = "uinit";

    // Find the DepositEvent - should be the reward deposit to the user
    const depositEvent = findMoveEvent(
      log.events,
      "0x1::fungible_asset::DepositEvent",
      zDepositEvent
    );

    const userVestingCreateEvent = findMoveEvent(
      log.events,
      `${INITIA_VAULT_MODULE_ADDRESS}::vesting::UserVestingCreateEvent`,
      zUserVestingCreateEvent
    );
    if (!userVestingCreateEvent) {
      throw new Error("UserVestingCreateEvent not found");
    }

    const srcChainId = await apiClient.findRollupChainId(
      userVestingCreateEvent.bridge_id
    );
    if (!srcChainId) {
      throw new Error(
        `Source chain ID not found for bridge ID: ${userVestingCreateEvent.bridge_id}`
      );
    }

    if (!depositEvent) {
      const decodedMessage: DecodedMessage = {
        action: "vip_claim_esinit",
        data: {
          amount: "0",
          chainId: srcChainId,
          denom,
          from: sender
        },
        isIbc: false,
        isOp: false
      };
      return decodedMessage;
    }

    const decodedMessage: DecodedMessage = {
      action: "vip_claim_esinit",
      data: {
        amount: depositEvent.amount,
        chainId: srcChainId,
        denom,
        from: sender
      },
      isIbc: false,
      isOp: false
    };

    return decodedMessage;
  }
};
