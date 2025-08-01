import {
  mockApiResponsesForVipGaugeVote,
  mockMsgVipGaugeVote,
} from "../fixtures/vip-gauge-vote.fixture";
import {
  initialize,
  mockedAxios,
  resetMockApi,
  setupMockApi,
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
        from: "init1kw2unuhgfa6mz6r0ehrzlr9k9ftjk7pql8u5fm",
        votes: [
          {
            amount: 0.1,
            rollup: "echelon-1",
          },
          {
            amount: 0.3,
            rollup: "ingnetwork-1",
          },
          {
            amount: 0.4,
            rollup: "rave-1",
          },
          {
            amount: 0.1,
            rollup: "intergaze-1",
          },
          {
            amount: 0.1,
            rollup: "inertia-2",
          },
        ],
      },
      isIbc: false,
      isOp: false,
    });

    expect(decoded.messages[0].balanceChanges).toEqual({
      ft: {},
      object: {},
    });

    expect(decoded.totalBalanceChanges).toEqual({
      ft: {},
      object: {},
    });
  });
});
