import { ApiClient } from "@/api";
import { DecodedMessage, MessageDecoder } from "@/interfaces";
import {
  Log,
  Message,
  zMsgMoveExecute,
  zDepositDelegationEvent,
  zWithdrawDelegationEvent,
} from "@/schema";
import { findMoveEvent } from "@/utils";

const LOCK_STAKING_MODULE_ADDRESS =
  "0x3a886b32a802582f2e446e74d4a24d1d7ed01adf46d2a8f65c5723887e708789";

export const extendLiquidityDecoder: MessageDecoder = {
  check: (message: Message, _log: Log) => {
    if (!zMsgMoveExecute.safeParse(message).success) return false;

    const parsed = zMsgMoveExecute.parse(message);
    return (
      parsed.function_name === "extend" &&
      parsed.module_name === "lock_staking" &&
      parsed.module_address === LOCK_STAKING_MODULE_ADDRESS
    );
  },
  decode: async (message: Message, log: Log, apiClient: ApiClient) => {
    const parsed = zMsgMoveExecute.parse(message);
    const { sender } = parsed;

    // Find the WithdrawDelegationEvent to get initial release time
    const withdrawDelegationEvent = findMoveEvent(
      log.events,
      `${LOCK_STAKING_MODULE_ADDRESS}::lock_staking::WithdrawDelegationEvent`,
      zWithdrawDelegationEvent
    );
    if (!withdrawDelegationEvent) {
      throw new Error("WithdrawDelegationEvent not found");
    }

    // Find the DepositDelegationEvent to get new release time
    const depositDelegationEvent = findMoveEvent(
      log.events,
      `${LOCK_STAKING_MODULE_ADDRESS}::lock_staking::DepositDelegationEvent`,
      zDepositDelegationEvent
    );
    if (!depositDelegationEvent) {
      throw new Error("DepositDelegationEvent not found");
    }

    const [liquidityDenom, validatorData] = await Promise.all([
      apiClient.findDenomFromMetadataAddr(depositDelegationEvent.metadata),
      apiClient.findValidator(depositDelegationEvent.validator),
    ]);

    if (!liquidityDenom) {
      throw new Error(
        `Liquidity denom not found for metadata ${depositDelegationEvent.metadata}`
      );
    }

    const decodedMessage: DecodedMessage = {
      action: "extend_liquidity",
      data: {
        from: sender,
        liquidity: depositDelegationEvent.locked_share,
        liquidityDenom,
        initialReleaseTimestamp: withdrawDelegationEvent.release_time,
        newReleaseTimestamp: depositDelegationEvent.release_time,
        validator: validatorData,
        validatorAddress: depositDelegationEvent.validator,
      },
      isIbc: false,
      isOp: false,
    };

    return decodedMessage;
  },
};
