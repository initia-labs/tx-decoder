import type { DecodedMessage, MessageDecoder } from "@/interfaces";
import type { Log, Message } from "@/schema";

import { ApiClient } from "@/api";
import { zMsgUndelegateLocked, zUndelegateLockedEvent } from "@/schema";
import { findMoveEvent } from "@/utils";

export const undelegateLockedDecoder: MessageDecoder = {
  check: (message: Message, _log: Log) =>
    zMsgUndelegateLocked.safeParse(message).success,
  decode: async (message: Message, log: Log, apiClient: ApiClient) => {
    const parsed = zMsgUndelegateLocked.safeParse(message);
    if (!parsed.success) {
      throw new Error("Invalid undelegate locked message");
    }
    const { sender } = parsed.data;
    const undelegateLockedEvent = findMoveEvent(
      log.events,
      "0x3a886b32a802582f2e446e74d4a24d1d7ed01adf46d2a8f65c5723887e708789::lock_staking::WithdrawDelegationEvent",
      zUndelegateLockedEvent
    );
    if (!undelegateLockedEvent) {
      throw new Error("Undelegate locked event not found");
    }

    const undelegateLockedCoin = {
      amount: undelegateLockedEvent.locked_share,
      denom: `move/${undelegateLockedEvent.metadata.slice(2)}`,
    };

    const validator = await apiClient.findValidator(
      undelegateLockedEvent.validator
    );

    const decodedMessage: DecodedMessage = {
      action: "undelegate",
      data: {
        coins: [undelegateLockedCoin],
        delegatorAddress: sender,
        validator,
      },
      isIbc: false,
      isOp: false,
    };

    return decodedMessage;
  },
};
