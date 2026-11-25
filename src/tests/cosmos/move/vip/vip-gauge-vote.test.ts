import {
  initialize,
  mockedAxios,
  resetMockApi,
  setupMockApi
} from "@/tests/_shared/helpers";

import {
  mockApiResponsesForVipGaugeVote,
  mockApiResponsesForVipGaugeVoteWithMaxVotingPower,
  mockMsgVipGaugeVote,
  mockMsgVipGaugeVoteWithMaxVotingPower
} from "./vip-gauge-vote.fixture";

jest.mock("axios");
const decoder = initialize();

const LONG_DIGITS = "9".repeat(30_000);

type VoteEventData = {
  max_voting_power: string;
  weights: { bridge_id: string; weight: string }[];
};

function withVoteEvent(
  tx: typeof mockMsgVipGaugeVote,
  edit: (data: VoteEventData) => VoteEventData
) {
  const events = tx.events.map((event) => ({
    ...event,
    attributes: event.attributes.map((attr) => {
      if (attr.key !== "data" || !attr.value.includes("max_voting_power"))
        return attr;
      return { ...attr, value: JSON.stringify(edit(JSON.parse(attr.value))) };
    })
  }));
  return { ...tx, events };
}

const oversizedCases: [string, (data: VoteEventData) => VoteEventData][] = [
  ["max_voting_power", (data) => ({ ...data, max_voting_power: LONG_DIGITS })],
  [
    "weight",
    (data) => ({
      ...data,
      weights: data.weights.map((w) => ({ ...w, weight: `0.${LONG_DIGITS}` }))
    })
  ]
];

describe("VIP Gauge Vote Message", () => {
  beforeEach(() => {
    resetMockApi(mockedAxios);
  });

  it("should decode a VIP gauge vote message correctly", async () => {
    setupMockApi(mockedAxios, mockApiResponsesForVipGaugeVote);
    const decoded = await decoder.decodeCosmosTransaction(mockMsgVipGaugeVote);

    expect(decoded.messages).toHaveLength(1);
    expect(decoded.messages[0].decodedMessage).toEqual({
      action: "vip_gauge_vote",
      data: {
        epoch: "8",
        from: "init1dw49mn7s2r5mskjdmus5hth80zz8wwaywycq06",
        maxVotingPower: "8.310741",
        votes: [
          {
            amount: "0.16621482",
            rollup: "inertia-2",
            weight: "0.02"
          },
          {
            amount: "0.08310741",
            rollup: "intergaze-1",
            weight: "0.01"
          }
        ],
        votingPower: "0.249322"
      },
      isIbc: false,
      isOp: false
    });

    expect(decoded.messages[0].balanceChanges).toEqual({
      ft: {},
      object: {},
      vm: "move"
    });

    expect(decoded.totalBalanceChanges).toEqual({
      ft: {},
      object: {},
      vm: "move"
    });
  });

  it("should decode a VIP gauge vote message correctly with max voting power", async () => {
    setupMockApi(
      mockedAxios,
      mockApiResponsesForVipGaugeVoteWithMaxVotingPower
    );
    const decoded = await decoder.decodeCosmosTransaction(
      mockMsgVipGaugeVoteWithMaxVotingPower
    );

    expect(decoded.messages).toHaveLength(1);
    expect(decoded.messages[0].decodedMessage).toEqual({
      action: "vip_gauge_vote",
      data: {
        epoch: "8",
        from: "init1kw2unuhgfa6mz6r0ehrzlr9k9ftjk7pql8u5fm",
        maxVotingPower: "0.903526",
        votes: [
          {
            amount: "0.0903526",
            rollup: "echelon-1",
            weight: "0.1"
          },
          {
            amount: "0.2710578",
            rollup: "ingnetwork-1",
            weight: "0.3"
          },
          {
            amount: "0.3614104",
            rollup: "rave-1",
            weight: "0.4"
          },
          {
            amount: "0.0903526",
            rollup: "intergaze-1",
            weight: "0.1"
          },
          {
            amount: "0.0903526",
            rollup: "inertia-2",
            weight: "0.1"
          }
        ],
        votingPower: "0.903526"
      },
      isIbc: false,
      isOp: false
    });

    expect(decoded.messages[0].balanceChanges).toEqual({
      ft: {},
      object: {},
      vm: "move"
    });

    expect(decoded.totalBalanceChanges).toEqual({
      ft: {},
      object: {},
      vm: "move"
    });
  });

  it.each(oversizedCases)(
    "should not decode a vote event with an oversized %s",
    async (_field, edit) => {
      setupMockApi(mockedAxios, mockApiResponsesForVipGaugeVote);
      const decoded = await decoder.decodeCosmosTransaction(
        withVoteEvent(mockMsgVipGaugeVote, edit)
      );

      expect(decoded.messages[0].decodedMessage).toEqual({
        action: "not_supported",
        data: { msgType: "/initia.move.v1.MsgExecute" },
        isIbc: false,
        isOp: false
      });
    }
  );
});
