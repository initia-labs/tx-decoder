import {
  mockApiResponsesForVipGaugeVote,
  mockMsgVipGaugeVote
} from "../fixtures/vip-gauge-vote.fixture";
import {
  initialize,
  mockedAxios,
  resetMockApi,
  setupMockApi
} from "../helpers";

jest.mock("axios");
const decoder = initialize();

describe("VIP Gauge Vote Message", () => {
  beforeEach(() => {
    resetMockApi(mockedAxios);
  });

  it("should decode a VIP gauge vote message correctly", async () => {
    setupMockApi(mockedAxios, mockApiResponsesForVipGaugeVote);
    const decoded = await decoder.decodeTransaction(mockMsgVipGaugeVote);

    expect(decoded.messages).toHaveLength(1);
    expect(decoded.messages[0].decodedMessage).toEqual({
      action: "vip_gauge_vote",
      data: {
        epoch: "8",
        from: "init1kw2unuhgfa6mz6r0ehrzlr9k9ftjk7pql8u5fm",
        maxVotingPower: "903526",
        votes: [
          {
            amount: 90352.6,
            rollup: "echelon-1",
            weight: 0.1
          },
          {
            amount: 271057.8,
            rollup: "ingnetwork-1",
            weight: 0.3
          },
          {
            amount: 361410.4,
            rollup: "rave-1",
            weight: 0.4
          },
          {
            amount: 90352.6,
            rollup: "intergaze-1",
            weight: 0.1
          },
          {
            amount: 90352.6,
            rollup: "inertia-2",
            weight: 0.1
          }
        ],
        votingPower: "903526"
      },
      isIbc: false,
      isOp: false
    });

    expect(decoded.messages[0].balanceChanges).toEqual({
      ft: {},
      object: {}
    });

    expect(decoded.totalBalanceChanges).toEqual({
      ft: {},
      object: {}
    });
  });
});
