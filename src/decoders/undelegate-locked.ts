import type { DecodedMessage, MessageDecoder } from "@/interfaces";
import type { Log, Message } from "@/schema";

import { ApiClient } from "@/api";
import { LOCK_STAKING_MODULE_ADDRESS } from "@/constants";
import { zMsgUndelegateLocked, zWithdrawDelegationEvent } from "@/schema";
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
      `${LOCK_STAKING_MODULE_ADDRESS}::lock_staking::WithdrawDelegationEvent`,
      zWithdrawDelegationEvent
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
        validatorAddress: undelegateLockedEvent.validator,
      },
      isIbc: false,
      isOp: false,
    };

    return decodedMessage;
  },
};
