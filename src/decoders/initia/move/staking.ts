import { ApiClient } from "@/api";
import { INITIA_VAULT_MODULE_ADDRESS } from "@/constants";
import { DecodedMessage, MessageDecoder } from "@/interfaces";
import {
  Log,
  Message,
  TxResponse,
  zDepositDelegationEvent,
  zMsgDelegateLocked,
  zMsgRedelegateLocked,
  zMsgUndelegateLocked,
  zMsgWithdrawDelegatorRewardLocked,
  zWithdrawDelegationEvent
} from "@/schema";
import { findMoveEvent, parseCoins } from "@/utils";

export const delegateLockedDecoder: MessageDecoder = {
  check: (message: Message, _log: Log) =>
    zMsgDelegateLocked.safeParse(message).success,
  decode: async (
    message: Message,
    log: Log,
    apiClient: ApiClient,
    _txResponse: TxResponse
  ) => {
    const parsed = zMsgDelegateLocked.safeParse(message);
    if (!parsed.success) {
      throw new Error("Invalid delegate locked message");
    }
    const { sender } = parsed.data;
    const delegateLockedEvent = findMoveEvent(
      log.events,
      `${INITIA_VAULT_MODULE_ADDRESS}::lock_staking::DepositDelegationEvent`,
      zDepositDelegationEvent
    );
    if (!delegateLockedEvent) {
      throw new Error("Delegate locked event not found");
    }

    const denom = await apiClient.findDenomFromMetadataAddr(
      delegateLockedEvent.metadata
    );

    if (!denom) {
      throw new Error(
        `Denom not found for delegate locked event from metadata address: ${delegateLockedEvent.metadata}`
      );
    }

    const delegateLockedCoin = {
      amount: delegateLockedEvent.locked_share,
      denom
    };

    const validator = await apiClient.findValidator(
      delegateLockedEvent.validator
    );

    const decodedMessage: DecodedMessage = {
      action: "delegate",
      data: {
        coins: [delegateLockedCoin],
        delegatorAddress: sender,
        releaseTimestamp: delegateLockedEvent.release_time,
        validator,
        validatorAddress: delegateLockedEvent.validator
      },
      isIbc: false,
      isOp: false
    };

    return decodedMessage;
  }
};

export const undelegateLockedDecoder: MessageDecoder = {
  check: (message: Message, _log: Log) =>
    zMsgUndelegateLocked.safeParse(message).success,
  decode: async (
    message: Message,
    log: Log,
    apiClient: ApiClient,
    _txResponse: TxResponse
  ) => {
    const parsed = zMsgUndelegateLocked.safeParse(message);
    if (!parsed.success) {
      throw new Error("Invalid undelegate locked message");
    }
    const { sender } = parsed.data;
    const undelegateLockedEvent = findMoveEvent(
      log.events,
      `${INITIA_VAULT_MODULE_ADDRESS}::lock_staking::WithdrawDelegationEvent`,
      zWithdrawDelegationEvent
    );
    if (!undelegateLockedEvent) {
      throw new Error("Undelegate locked event not found");
    }

    const denom = await apiClient.findDenomFromMetadataAddr(
      undelegateLockedEvent.metadata
    );

    if (!denom) {
      throw new Error(
        `Denom not found in undelegate locked event from metadata address: ${undelegateLockedEvent.metadata}`
      );
    }

    const undelegateLockedCoin = {
      amount: undelegateLockedEvent.locked_share,
      denom
    };

    const validator = await apiClient.findValidator(
      undelegateLockedEvent.validator
    );

    const decodedMessage: DecodedMessage = {
      action: "undelegate",
      data: {
        coins: [undelegateLockedCoin],
        delegatorAddress: sender,
        unlockTimestamp: undelegateLockedEvent.release_time,
        validator,
        validatorAddress: undelegateLockedEvent.validator
      },
      isIbc: false,
      isOp: false
    };

    return decodedMessage;
  }
};

export const redelegateLockedDecoder: MessageDecoder = {
  check: (message: Message, _log: Log) =>
    zMsgRedelegateLocked.safeParse(message).success,
  decode: async (
    message: Message,
    log: Log,
    apiClient: ApiClient,
    _txResponse: TxResponse
  ) => {
    const parsed = zMsgRedelegateLocked.safeParse(message);
    if (!parsed.success) {
      throw new Error("Invalid redelegate locked message");
    }
    const { sender } = parsed.data;

    const withdrawDelegationEvent = findMoveEvent(
      log.events,
      `${INITIA_VAULT_MODULE_ADDRESS}::lock_staking::WithdrawDelegationEvent`,
      zWithdrawDelegationEvent
    );
    if (!withdrawDelegationEvent) {
      throw new Error(
        "Withdraw delegation event not found in redelegate message"
      );
    }

    const delegateLockedEvent = findMoveEvent(
      log.events,
      `${INITIA_VAULT_MODULE_ADDRESS}::lock_staking::DepositDelegationEvent`,
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
      denom
    };

    const [validatorDst, validatorSrc] = await Promise.all([
      apiClient.findValidator(delegateLockedEvent.validator),
      apiClient.findValidator(withdrawDelegationEvent.validator)
    ]);

    const decodedMessage: DecodedMessage = {
      action: "redelegate",
      data: {
        coins: [redelegateLockedCoin],
        delegatorAddress: sender,
        validatorDst,
        validatorDstAddress: delegateLockedEvent.validator,
        validatorSrc,
        validatorSrcAddress: withdrawDelegationEvent.validator
      },
      isIbc: false,
      isOp: false
    };

    return decodedMessage;
  }
};

export const withdrawDelegatorRewardLockedDecoder: MessageDecoder = {
  check: (message: Message, _log: Log) =>
    zMsgWithdrawDelegatorRewardLocked.safeParse(message).success,
  decode: async (
    message: Message,
    log: Log,
    apiClient: ApiClient,
    _txResponse: TxResponse
  ) => {
    const parsed = zMsgWithdrawDelegatorRewardLocked.safeParse(message);
    if (!parsed.success) {
      throw new Error("Invalid withdraw delegator reward locked message");
    }
    const { sender } = parsed.data;

    const withdrawRewardsAttributes = log.events.find(
      (event) => event.type === "withdraw_rewards"
    )?.attributes;

    const validatorAddress = withdrawRewardsAttributes?.find(
      (attr) => attr.key === "validator"
    )?.value;

    if (!validatorAddress) {
      throw new Error("Validator address not found");
    }

    const validator = await apiClient.findValidator(validatorAddress);

    const amount = withdrawRewardsAttributes?.find(
      (attr) => attr.key === "amount"
    )?.value;

    if (!amount) {
      throw new Error("Amount not found");
    }

    const coins = parseCoins(amount);

    const decodedMessage: DecodedMessage = {
      action: "withdraw_delegator_reward",
      data: {
        coins,
        delegatorAddress: sender,
        validator,
        validatorAddress
      },
      isIbc: false,
      isOp: false
    };

    return decodedMessage;
  }
};
