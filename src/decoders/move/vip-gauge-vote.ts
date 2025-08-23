import big from "big.js";

import type { DecodedMessage, MessageDecoder } from "@/interfaces";
import type { Log, Message, TxResponse } from "@/schema";

import { ApiClient } from "@/api";
import { INITIA_VAULT_MODULE_ADDRESS } from "@/constants";
import { zMsgVipGaugeVote } from "@/schema";
import { zVoteEvent } from "@/schema/events";
import { findMoveEvent } from "@/utils";

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

    // Find the VoteEvent
    const voteEvent = findMoveEvent(
      log.events,
      `${INITIA_VAULT_MODULE_ADDRESS}::weight_vote::VoteEvent`,
      zVoteEvent
    );

    if (!voteEvent) {
      throw new Error("VoteEvent not found");
    }

    // Map weights to votes with rollup names
    const votes = await Promise.all(
      voteEvent.weights.map(async (weight) => {
        const rollup = await apiClient.findRollupChainId(weight.bridge_id);
        const weightBig = big(weight.weight);
        return {
          amount: weightBig.mul(voteEvent.max_voting_power).toNumber(),
          rollup: rollup || `bridge-${weight.bridge_id}`,
          weight: weightBig.toNumber()
        };
      })
    );

    const decodedMessage: DecodedMessage = {
      action: "vip_gauge_vote",
      data: {
        epoch: voteEvent.cycle,
        from: sender,
        maxVotingPower: voteEvent.max_voting_power,
        votes,
        votingPower: voteEvent.voting_power
      },
      isIbc: false,
      isOp: false
    };

    return decodedMessage;
  }
};
