import big from "big.js";

import type { DecodedMessage, MessageDecoder } from "@/interfaces";
import type { Log, Message } from "@/schema";

import { ApiClient } from "@/api";
import { INITIA_VAULT_MODULE_ADDRESS } from "@/constants";
import { zMsgVipGaugeVote } from "@/schema";
import { zVoteEvent } from "@/schema/events";
import { findMoveEvent } from "@/utils";

const DIVISOR = 1_000_000;

export const vipGaugeVoteDecoder: MessageDecoder = {
  check: (message: Message, _log: Log) =>
    zMsgVipGaugeVote.safeParse(message).success,

  decode: async (message: Message, log: Log, apiClient: ApiClient) => {
    const parsed = zMsgVipGaugeVote.parse(message);
    const { sender } = parsed;

    // Find the VoteEvent
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

    // Map weights to votes with rollup names
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
