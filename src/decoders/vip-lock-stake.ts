import type { DecodedMessage, MessageDecoder } from "@/interfaces";
import type { Log, Message } from "@/schema";

import { ApiClient } from "@/api";
import { LOCK_STAKING_MODULE_ADDRESS } from "@/constants";
import { zDepositDelegationEvent, zMsgVipLockStake } from "@/schema";
import { findMoveEvent } from "@/utils";

export const vipLockStakeDecoder: MessageDecoder = {
  check: (message: Message, _log: Log) =>
    zMsgVipLockStake.safeParse(message).success,
  decode: async (message: Message, log: Log, apiClient: ApiClient) => {
    const parsed = zMsgVipLockStake.safeParse(message);
    if (!parsed.success) {
      throw new Error("Invalid VIP lock stake message");
    }
    const { sender } = parsed.data;
    const depositDelegationEvent = findMoveEvent(
      log.events,
      `${LOCK_STAKING_MODULE_ADDRESS}::lock_staking::DepositDelegationEvent`,
      zDepositDelegationEvent
    );
    if (!depositDelegationEvent) {
      throw new Error(
        "Deposit delegation event not found in VIP lock stake message"
      );
    }

    const denom = await apiClient.findDenomFromMetadataAddr(
      depositDelegationEvent.metadata
    );

    if (!denom) {
      throw new Error(
        `Denom not found for deposit delegation event in VIP lock stake message from metadata address: ${depositDelegationEvent.metadata}`
      );
    }

    const vipLockStakeCoin = {
      amount: depositDelegationEvent.locked_share,
      denom,
    };

    const validator = await apiClient.findValidator(
      depositDelegationEvent.validator
    );

    const decodedMessage: DecodedMessage = {
      action: "delegate",
      data: {
        coins: [vipLockStakeCoin],
        delegatorAddress: sender,
        releaseTimestamp: depositDelegationEvent.release_time,
        validator,
        validatorAddress: depositDelegationEvent.validator,
      },
      isIbc: false,
      isOp: false,
    };

    return decodedMessage;
  },
};
