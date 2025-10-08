import big from "big.js";

import { ApiClient } from "@/api";
import { INITIA_VAULT_MODULE_ADDRESS } from "@/constants";
import { DecodedMessage, MessageDecoder } from "@/interfaces";
import {
  Log,
  Message,
  TxResponse,
  zDepositDelegationEvent,
  zMsgVipClaimEsinit,
  zMsgVipGaugeVote,
  zMsgVipLockStake,
  zVoteEvent
} from "@/schema";
import { zDepositEvent, zUserVestingCreateEvent } from "@/schema";
import { findMoveEvent } from "@/utils";

const DIVISOR = 1_000_000;

export const vipClaimEsinitDecoder: MessageDecoder = {
  check: (message: Message, _log: Log) =>
    zMsgVipClaimEsinit.safeParse(message).success,
  decode: async (
    message: Message,
    log: Log,
    apiClient: ApiClient,
    _txResponse: TxResponse
  ) => {
    const parsed = zMsgVipClaimEsinit.parse(message);
    const { sender } = parsed;
    const denom = "uinit";

    const depositEvent = findMoveEvent(
      log.events,
      "0x1::fungible_asset::DepositEvent",
      zDepositEvent
    );

    const userVestingCreateEvent = findMoveEvent(
      log.events,
      `${INITIA_VAULT_MODULE_ADDRESS}::vesting::UserVestingCreateEvent`,
      zUserVestingCreateEvent
    );
    if (!userVestingCreateEvent) {
      throw new Error("UserVestingCreateEvent not found");
    }

    const srcChainId = await apiClient.findRollupChainId(
      userVestingCreateEvent.bridge_id
    );
    if (!srcChainId) {
      throw new Error(
        `Source chain ID not found for bridge ID: ${userVestingCreateEvent.bridge_id}`
      );
    }

    if (!depositEvent) {
      const decodedMessage: DecodedMessage = {
        action: "vip_claim_esinit",
        data: {
          amount: "0",
          chainId: srcChainId,
          denom,
          from: sender
        },
        isIbc: false,
        isOp: false
      };
      return decodedMessage;
    }

    const decodedMessage: DecodedMessage = {
      action: "vip_claim_esinit",
      data: {
        amount: depositEvent.amount,
        chainId: srcChainId,
        denom,
        from: sender
      },
      isIbc: false,
      isOp: false
    };

    return decodedMessage;
  }
};

export const vipGaugeVoteDecoder: MessageDecoder = {
  check: (message: Message, _log: Log) =>
    zMsgVipGaugeVote.safeParse(message).success,
  decode: async (
    message: Message,
    log: Log,
    apiClient: ApiClient,
    _txResponse: TxResponse
  ) => {
    const parsed = zMsgVipGaugeVote.parse(message);
    const { sender } = parsed;

    const voteEvent = findMoveEvent(
      log.events,
      `${INITIA_VAULT_MODULE_ADDRESS}::weight_vote::VoteEvent`,
      zVoteEvent
    );

    if (!voteEvent) {
      throw new Error("VoteEvent not found");
    }

    const maxVotingPower = big(voteEvent.max_voting_power).div(DIVISOR);
    const votingPower = big(voteEvent.voting_power).div(DIVISOR);

    const votes = await Promise.all(
      voteEvent.weights.map(async (weight) => {
        const rollup = await apiClient.findRollupChainId(weight.bridge_id);
        const weightBig = big(weight.weight);
        return {
          amount: weightBig.mul(maxVotingPower).toString(),
          rollup: rollup || `bridge-${weight.bridge_id}`,
          weight: weightBig.toString()
        };
      })
    );

    const decodedMessage: DecodedMessage = {
      action: "vip_gauge_vote",
      data: {
        epoch: voteEvent.cycle,
        from: sender,
        maxVotingPower: maxVotingPower.toString(),
        votes,
        votingPower: votingPower.toString()
      },
      isIbc: false,
      isOp: false
    };

    return decodedMessage;
  }
};

export const vipLockStakeDecoder: MessageDecoder = {
  check: (message: Message, _log: Log) =>
    zMsgVipLockStake.safeParse(message).success,
  decode: async (
    message: Message,
    log: Log,
    apiClient: ApiClient,
    _txResponse: TxResponse
  ) => {
    const parsed = zMsgVipLockStake.safeParse(message);
    if (!parsed.success) {
      throw new Error("Invalid VIP lock stake message");
    }
    const { sender } = parsed.data;
    const depositDelegationEvent = findMoveEvent(
      log.events,
      `${INITIA_VAULT_MODULE_ADDRESS}::lock_staking::DepositDelegationEvent`,
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
      denom
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
        validatorAddress: depositDelegationEvent.validator
      },
      isIbc: false,
      isOp: false
    };

    return decodedMessage;
  }
};
