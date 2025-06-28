import type { DecodedMessage, MessageDecoder } from "@/interfaces";
import type { Log, Message } from "@/schema";

import { ApiClient } from "@/api";
import {
  zDelegateLockedEvent,
  zMsgRedelegateLocked,
  zUndelegateLockedEvent,
} from "@/schema";
import { findMoveEvent } from "@/utils";

export const redelegateLockedDecoder: MessageDecoder = {
  check: (message: Message, _log: Log) =>
    zMsgRedelegateLocked.safeParse(message).success,
  decode: async (message: Message, log: Log, apiClient: ApiClient) => {
    const parsed = zMsgRedelegateLocked.safeParse(message);
    if (!parsed.success) {
      throw new Error("Invalid redelegate locked message");
    }
    const { sender } = parsed.data;

    const undelegateLockedEvent = findMoveEvent(
      log.events,
      "0x3a886b32a802582f2e446e74d4a24d1d7ed01adf46d2a8f65c5723887e708789::lock_staking::WithdrawDelegationEvent",
      zUndelegateLockedEvent
    );
    if (!undelegateLockedEvent) {
      throw new Error(
        "Undelegate locked event not found in redelegate message"
      );
    }

    const delegateLockedEvent = findMoveEvent(
      log.events,
      "0x3a886b32a802582f2e446e74d4a24d1d7ed01adf46d2a8f65c5723887e708789::lock_staking::DepositDelegationEvent",
      zDelegateLockedEvent
    );
    if (!delegateLockedEvent) {
      throw new Error("Delegate locked event not found in redelegate message");
    }

    const denom = await apiClient.findDenomFromMetadataAddr(
      undelegateLockedEvent.metadata
    );

    if (!denom) {
      throw new Error("Denom not found for redelegate locked event");
    }

    const redelegateLockedCoin = {
      amount: undelegateLockedEvent.locked_share,
      denom,
    };

    const [validatorDst, validatorSrc] = await Promise.all([
      apiClient.findValidator(delegateLockedEvent.validator),
      apiClient.findValidator(undelegateLockedEvent.validator),
    ]);

    const decodedMessage: DecodedMessage = {
      action: "redelegate",
      data: {
        coins: [redelegateLockedCoin],
        delegatorAddress: sender,
        validatorDst,
        validatorSrc,
      },
      isIbc: false,
      isOp: false,
    };

    return decodedMessage;
  },
};
