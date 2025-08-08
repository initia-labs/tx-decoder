import big from "big.js";

import { ApiClient } from "@/api";
import { INITIA_VAULT_MODULE_ADDRESS } from "@/constants";
import { DecodedMessage, MessageDecoder } from "@/interfaces";
import {
  Log,
  Message,
  zDepositDelegationEvent,
  zMsgMergeLiquidity,
  zWithdrawDelegationEvent
} from "@/schema";
import { findAllMoveEvents, findMoveEvent } from "@/utils";

export const mergeLiquidityDecoder: MessageDecoder = {
  check: (message: Message, _log: Log) =>
    zMsgMergeLiquidity.safeParse(message).success,
  decode: async (message: Message, log: Log, apiClient: ApiClient) => {
    const parsed = zMsgMergeLiquidity.parse(message);
    const { sender } = parsed;

    // Find the all WithdrawDelegationEvents to get initial release time and initial amount of each position
    const withdrawDelegationEvents = findAllMoveEvents(
      log.events,
      `${INITIA_VAULT_MODULE_ADDRESS}::lock_staking::WithdrawDelegationEvent`,
      zWithdrawDelegationEvent
    );
    if (withdrawDelegationEvents.length === 0) {
      throw new Error("WithdrawDelegationEvent not found");
    }
    const initialPositions = withdrawDelegationEvents.map((event) => ({
      amount: event.locked_share,
      initialReleaseTimestamp: event.release_time
    }));

    const mergedLiquidity = withdrawDelegationEvents.reduce(
      (acc, event) => big(acc).plus(event.locked_share).toString(),
      "0"
    );

    // Find the DepositDelegationEvent to get new release time, validator and liquidity denom
    const depositDelegationEvent = findMoveEvent(
      log.events,
      `${INITIA_VAULT_MODULE_ADDRESS}::lock_staking::DepositDelegationEvent`,
      zDepositDelegationEvent
    );
    if (!depositDelegationEvent) {
      throw new Error("DepositDelegationEvent not found");
    }

    const [liquidityDenom, validatorData] = await Promise.all([
      apiClient.findDenomFromMetadataAddr(depositDelegationEvent.metadata),
      apiClient.findValidator(depositDelegationEvent.validator)
    ]);

    if (!liquidityDenom) {
      throw new Error(
        `Liquidity denom not found for metadata ${depositDelegationEvent.metadata}`
      );
    }

    const decodedMessage: DecodedMessage = {
      action: "merge_liquidity",
      data: {
        from: sender,
        initialPositions,
        liquidityDenom,
        mergedLiquidity,
        newReleaseTimestamp: depositDelegationEvent.release_time,
        validator: validatorData,
        validatorAddress: depositDelegationEvent.validator
      },
      isIbc: false,
      isOp: false
    };

    return decodedMessage;
  }
};
