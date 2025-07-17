import type { DecodedMessage, MessageDecoder } from "@/interfaces";
import type { Log, Message } from "@/schema";

import { ApiClient } from "@/api";
import { LOCK_STAKING_MODULE_ADDRESS } from "@/constants";
import {
  zDepositDelegationEvent,
  zMsgRedelegateLocked,
  zWithdrawDelegationEvent,
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

    const withdrawDelegationEvent = findMoveEvent(
      log.events,
      `${LOCK_STAKING_MODULE_ADDRESS}::lock_staking::WithdrawDelegationEvent`,
      zWithdrawDelegationEvent
    );
    if (!withdrawDelegationEvent) {
      throw new Error(
        "Withdraw delegation event not found in redelegate message"
      );
    }

    const delegateLockedEvent = findMoveEvent(
      log.events,
      `${LOCK_STAKING_MODULE_ADDRESS}::lock_staking::DepositDelegationEvent`,
      zDepositDelegationEvent
    );
    if (!delegateLockedEvent) {
      throw new Error("Delegate locked event not found in redelegate message");
    }

    const denom = await apiClient.findDenomFromMetadataAddr(
      withdrawDelegationEvent.metadata
    );

    if (!denom) {
      throw new Error(
        `Denom not found for redelegate locked event from metadata address: ${withdrawDelegationEvent.metadata}`
      );
    }

    const redelegateLockedCoin = {
      amount: withdrawDelegationEvent.locked_share,
      denom,
    };

    const [validatorDst, validatorSrc] = await Promise.all([
      apiClient.findValidator(delegateLockedEvent.validator),
      apiClient.findValidator(withdrawDelegationEvent.validator),
    ]);

    const decodedMessage: DecodedMessage = {
      action: "redelegate",
      data: {
        coins: [redelegateLockedCoin],
        delegatorAddress: sender,
        validatorDst,
        validatorDstAddress: delegateLockedEvent.validator,
        validatorSrc,
        validatorSrcAddress: withdrawDelegationEvent.validator,
      },
      isIbc: false,
      isOp: false,
    };

    return decodedMessage;
  },
};
