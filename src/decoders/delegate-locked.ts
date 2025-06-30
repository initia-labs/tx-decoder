import type { DecodedMessage, MessageDecoder } from "@/interfaces";
import type { Log, Message } from "@/schema";

import { ApiClient } from "@/api";
import { LOCK_STAKING_MODULE_ADDRESS } from "@/constants";
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
      `${LOCK_STAKING_MODULE_ADDRESS}::lock_staking::DepositDelegationEvent`,
      zDelegateLockedEvent
    );
    if (!delegateLockedEvent) {
      throw new Error("Delegate locked event not found");
    }

    const denom = await apiClient.findDenomFromMetadataAddr(
      delegateLockedEvent.metadata
    );

    if (!denom) {
      throw new Error("Denom not found for delegate locked event");
    }

    const delegateLockedCoin = {
      amount: delegateLockedEvent.locked_share,
      denom,
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
        validatorAddress: delegateLockedEvent.validator,
      },
      isIbc: false,
      isOp: false,
    };

    return decodedMessage;
  },
};
