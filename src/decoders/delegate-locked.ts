import type { DecodedMessage, MessageDecoder } from "@/interfaces";
import type { Log, Message } from "@/schema";

import { ApiClient } from "@/api";
import { zDelegateLockedEvent, zMsgDelegateLocked } from "@/schema";
import { findMoveEvent } from "@/utils";

export const delegateLockedDecoder: MessageDecoder = {
  check: (message: Message, _log: Log) =>
    zMsgDelegateLocked.safeParse(message).success,
  decode: async (message: Message, log: Log, apiClient: ApiClient) => {
    const parsed = zMsgDelegateLocked.safeParse(message);
    if (!parsed.success) {
      throw new Error("Invalid delegate locked message");
    }
    const { sender } = parsed.data;
    const delegateLockedEvent = findMoveEvent(
      log.events,
      "0x3a886b32a802582f2e446e74d4a24d1d7ed01adf46d2a8f65c5723887e708789::lock_staking::DepositDelegationEvent",
      zDelegateLockedEvent
    );
    if (!delegateLockedEvent) {
      throw new Error("Delegate locked event not found");
    }

    const delegateLockedCoin = {
      amount: delegateLockedEvent.locked_share,
      denom: "uinit",
    };

    const validator = await apiClient.findValidator(
      delegateLockedEvent.validator
    );

    const decodedMessage: DecodedMessage = {
      action: "delegate",
      data: {
        coins: [delegateLockedCoin],
        delegatorAddress: sender,
        validator,
      },
      isIbc: false,
      isOp: false,
    };

    return decodedMessage;
  },
};
