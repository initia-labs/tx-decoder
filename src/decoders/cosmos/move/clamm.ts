import { ApiClient } from "@/api";
import { CLAMM_MODULE_ADDRESSES } from "@/constants";
import { DecodedMessage, MessageDecoder, VmType } from "@/interfaces";
import {
  Log,
  Message,
  TxResponse,
  zClammClaimTokenEvent,
  zClammCollectFeesEvent,
  zClammIncreaseLiquidityEvent,
  zClammRemoveLiquidityEvent,
  zClammStakeEvent,
  zClammUnstakeEvent,
  zMsgClammClaimTokenReward,
  zMsgClammCollectFees,
  zMsgClammIncreaseLiquidity,
  zMsgClammRemoveLiquidity,
  zMsgClammStakeEntry,
  zMsgClammStakeTokenToAll,
  zMsgClammUnstakeThenWithdraw,
  zMsgMoveExecute,
  zMsgMoveScript
} from "@/schema";
import { findAllMoveEvents, findMoveEvent } from "@/utils";

export const clammIncreaseLiquidityDecoder: MessageDecoder = {
  check: (message: Message, _log: Log) =>
    zMsgClammIncreaseLiquidity.safeParse(message).success,
  decode: async (
    message: Message,
    log: Log,
    apiClient: ApiClient,
    _txResponse: TxResponse,
    _vm: VmType
  ) => {
    const parsed = zMsgClammIncreaseLiquidity.parse(message);
    const { module_address, sender } = parsed;

    const event = findMoveEvent(
      log.events,
      `${module_address}::pool::IncreaseLiquidityEvent`,
      zClammIncreaseLiquidityEvent
    );
    if (!event) {
      throw new Error("IncreaseLiquidityEvent not found");
    }

    const [denom0, denom1] = await Promise.all([
      apiClient.findDenomFromMetadataAddr(event.metadata_0),
      apiClient.findDenomFromMetadataAddr(event.metadata_1)
    ]);

    const decodedMessage: DecodedMessage = {
      action: "clamm_increase_liquidity",
      data: {
        amount0: event.amount_0,
        amount1: event.amount_1,
        denom0: denom0 ?? event.metadata_0,
        denom1: denom1 ?? event.metadata_1,
        from: sender,
        liquidity: event.liquidity
      },
      isIbc: false,
      isOp: false
    };

    return decodedMessage;
  }
};

export const clammRemoveLiquidityDecoder: MessageDecoder = {
  check: (message: Message, _log: Log) =>
    zMsgClammRemoveLiquidity.safeParse(message).success,
  decode: async (
    message: Message,
    log: Log,
    apiClient: ApiClient,
    _txResponse: TxResponse,
    _vm: VmType
  ) => {
    const parsed = zMsgClammRemoveLiquidity.parse(message);
    const { module_address, sender } = parsed;

    const event = findMoveEvent(
      log.events,
      `${module_address}::pool::RemoveLiquidityEvent`,
      zClammRemoveLiquidityEvent
    );
    if (!event) {
      throw new Error("RemoveLiquidityEvent not found");
    }

    const [denom0, denom1] = await Promise.all([
      apiClient.findDenomFromMetadataAddr(event.metadata_0),
      apiClient.findDenomFromMetadataAddr(event.metadata_1)
    ]);

    const decodedMessage: DecodedMessage = {
      action: "clamm_remove_liquidity",
      data: {
        amount0: event.amount_0,
        amount1: event.amount_1,
        denom0: denom0 ?? event.metadata_0,
        denom1: denom1 ?? event.metadata_1,
        from: sender,
        liquidityDelta: event.liquidity_delta
      },
      isIbc: false,
      isOp: false
    };

    return decodedMessage;
  }
};

export const clammCollectFeesDecoder: MessageDecoder = {
  check: (message: Message, _log: Log) =>
    zMsgClammCollectFees.safeParse(message).success,
  decode: async (
    message: Message,
    log: Log,
    _apiClient: ApiClient,
    _txResponse: TxResponse,
    _vm: VmType
  ) => {
    const parsed = zMsgClammCollectFees.parse(message);
    const { module_address, sender } = parsed;

    const event = findMoveEvent(
      log.events,
      `${module_address}::pool::CollectFeesEvent`,
      zClammCollectFeesEvent
    );

    // ADR: CollectFeesEvent may not be in the per-message log when collect_fees
    // is part of a compound tx — the event can end up in a different msg_index's log.
    // CollectFeesEvent also only contains amounts without metadata (no denom info).
    const decodedMessage: DecodedMessage = {
      action: "clamm_collect_fees",
      data: {
        amount0: event?.amount_0 ?? "0",
        amount1: event?.amount_1 ?? "0",
        from: sender
      },
      isIbc: false,
      isOp: false
    };

    return decodedMessage;
  }
};

export const clammUnstakeThenWithdrawDecoder: MessageDecoder = {
  check: (message: Message, _log: Log) =>
    zMsgClammUnstakeThenWithdraw.safeParse(message).success,
  decode: async (
    message: Message,
    log: Log,
    apiClient: ApiClient,
    _txResponse: TxResponse,
    _vm: VmType
  ) => {
    const parsed = zMsgClammUnstakeThenWithdraw.parse(message);
    const { module_address, sender } = parsed;

    const unstakeEvent = findMoveEvent(
      log.events,
      `${module_address}::farming::UnstakeEvent`,
      zClammUnstakeEvent
    );
    if (!unstakeEvent) {
      throw new Error("UnstakeEvent not found");
    }

    const claimEvents = findAllMoveEvents(
      log.events,
      `${module_address}::farming::ClaimTokenEvent`,
      zClammClaimTokenEvent
    );

    // Resolve reward denom from metadata, consistent with claimTokenRewardDecoder.
    // Fallback to raw metadata if denom resolution fails — unlike dex/liquidity decoders
    // which throw, because claimed rewards with amount "0" may have unresolvable metadata.
    const claimedRewards = await Promise.all(
      claimEvents.map(async (e) => {
        const denom = await apiClient.findDenomFromMetadataAddr(
          e.reward_asset_metadata
        );
        return {
          amount: e.amount,
          denom: denom ?? e.reward_asset_metadata
        };
      })
    );

    const decodedMessage: DecodedMessage = {
      action: "clamm_unstake_withdraw",
      data: {
        claimedRewards,
        from: sender,
        rewardAmount: unstakeEvent.reward_amount,
        tokenObj: unstakeEvent.token_obj
      },
      isIbc: false,
      isOp: false
    };

    return decodedMessage;
  }
};

// stakeEntry and stakeTokenToAll share decode logic — both emit StakeEvent
// and produce the same decoded output. Only the check (function_name) differs.
const decodeClammStake = async (
  message: Message,
  log: Log,
  _apiClient: ApiClient,
  _txResponse: TxResponse,
  _vm: VmType
): Promise<DecodedMessage> => {
  const parsed = zMsgMoveExecute.parse(message);
  const { module_address, sender } = parsed;

  const stakeEvents = findAllMoveEvents(
    log.events,
    `${module_address}::farming::StakeEvent`,
    zClammStakeEvent
  );
  if (stakeEvents.length === 0) {
    throw new Error("StakeEvent not found");
  }

  return {
    action: "clamm_stake",
    data: {
      from: sender,
      stakes: stakeEvents.map((e) => ({
        liquidity: e.liquidity,
        tokenObj: e.token_obj
      }))
    },
    isIbc: false,
    isOp: false
  } as DecodedMessage;
};

export const clammStakeEntryDecoder: MessageDecoder = {
  check: (message: Message, _log: Log) =>
    zMsgClammStakeEntry.safeParse(message).success,
  decode: decodeClammStake
};

export const clammStakeTokenToAllDecoder: MessageDecoder = {
  check: (message: Message, _log: Log) =>
    zMsgClammStakeTokenToAll.safeParse(message).success,
  decode: decodeClammStake
};

export const clammClaimTokenRewardDecoder: MessageDecoder = {
  check: (message: Message, _log: Log) =>
    zMsgClammClaimTokenReward.safeParse(message).success,
  decode: async (
    message: Message,
    log: Log,
    apiClient: ApiClient,
    _txResponse: TxResponse,
    _vm: VmType
  ) => {
    const parsed = zMsgClammClaimTokenReward.parse(message);
    const { module_address, sender } = parsed;

    const claimEvents = findAllMoveEvents(
      log.events,
      `${module_address}::farming::ClaimTokenEvent`,
      zClammClaimTokenEvent
    );
    if (claimEvents.length === 0) {
      throw new Error("ClaimTokenEvent not found");
    }

    // ADR: Fallback to raw metadata if denom resolution fails — rewards with
    // amount "0" may reference metadata that no longer resolves to a denom.
    const rewards = await Promise.all(
      claimEvents.map(async (e) => {
        const denom = await apiClient.findDenomFromMetadataAddr(
          e.reward_asset_metadata
        );
        return {
          amount: e.amount,
          denom: denom ?? e.reward_asset_metadata
        };
      })
    );

    const decodedMessage: DecodedMessage = {
      action: "clamm_claim_reward",
      data: {
        from: sender,
        rewards
      },
      isIbc: false,
      isOp: false
    };

    return decodedMessage;
  }
};

// provideConcentrated uses MsgScript (custom bytecode) instead of MsgExecute.
// We detect it via IncreaseLiquidityEvent in the logs since we can't match by function_name.
// MsgScript has no module_address, so we try all known CLAMM addresses when searching events.
// WARNING: If more MsgScript-based decoders are added in the future, check ordering in
// decoder-registry.ts to avoid false positives — event-based matching is less specific.
// ADR: StakeEvent is also emitted by this tx but not extracted here — the action name
// "clamm_provide_and_stake" already implies staking occurred. Stake data (liquidity, tokenObj)
// is redundant with the IncreaseLiquidityEvent data.
export const clammProvideConcentratedDecoder: MessageDecoder = {
  check: (message: Message, log: Log) => {
    if (!zMsgMoveScript.safeParse(message).success) return false;
    // Check for CLAMM IncreaseLiquidityEvent in logs across all known addresses
    for (const addr of CLAMM_MODULE_ADDRESSES) {
      const event = findMoveEvent(
        log.events,
        `${addr}::pool::IncreaseLiquidityEvent`,
        zClammIncreaseLiquidityEvent
      );
      if (event) return true;
    }
    return false;
  },
  decode: async (
    message: Message,
    log: Log,
    apiClient: ApiClient,
    _txResponse: TxResponse,
    _vm: VmType
  ) => {
    const parsed = zMsgMoveScript.parse(message);
    const { sender } = parsed;

    let event = null;
    for (const addr of CLAMM_MODULE_ADDRESSES) {
      event = findMoveEvent(
        log.events,
        `${addr}::pool::IncreaseLiquidityEvent`,
        zClammIncreaseLiquidityEvent
      );
      if (event) break;
    }
    if (!event) {
      throw new Error("IncreaseLiquidityEvent not found");
    }

    const [denom0, denom1] = await Promise.all([
      apiClient.findDenomFromMetadataAddr(event.metadata_0),
      apiClient.findDenomFromMetadataAddr(event.metadata_1)
    ]);

    const decodedMessage: DecodedMessage = {
      action: "clamm_provide_and_stake",
      data: {
        amount0: event.amount_0,
        amount1: event.amount_1,
        denom0: denom0 ?? event.metadata_0,
        denom1: denom1 ?? event.metadata_1,
        from: sender,
        liquidity: event.liquidity
      },
      isIbc: false,
      isOp: false
    };

    return decodedMessage;
  }
};
