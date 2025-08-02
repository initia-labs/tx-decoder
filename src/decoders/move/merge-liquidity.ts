import { ApiClient } from "@/api";
import { INITIA_VAULT_MODULE_ADDRESS } from "@/constants";
import { DecodedMessage, MessageDecoder } from "@/interfaces";
import {
  Log,
  Message,
  zDepositDelegationEvent,
  zMsgMergeLiquidity,
  zWithdrawDelegationEvent,
} from "@/schema";
import { findMoveEvent } from "@/utils";

export const mergeLiquidityDecoder: MessageDecoder = {
  check: (message: Message, _log: Log) =>
    zMsgMergeLiquidity.safeParse(message).success,
  decode: async (message: Message, log: Log, apiClient: ApiClient) => {
    const parsed = zMsgMergeLiquidity.parse(message);
    const { sender } = parsed;

    // Find the WithdrawDelegationEvent to get initial release time
    const withdrawDelegationEvent = findMoveEvent(
      log.events,
      `${INITIA_VAULT_MODULE_ADDRESS}::lock_staking::WithdrawDelegationEvent`,
      zWithdrawDelegationEvent
    );
    if (!withdrawDelegationEvent) {
      throw new Error("WithdrawDelegationEvent not found");
    }

    // Find the DepositDelegationEvent to get new release time
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
      apiClient.findValidator(depositDelegationEvent.validator),
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
        initialReleaseTimestamp: withdrawDelegationEvent.release_time,
        liquidity: depositDelegationEvent.locked_share,
        liquidityDenom,
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
