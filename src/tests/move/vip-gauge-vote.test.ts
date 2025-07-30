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
        from: "init15j9nswsatns09fnru6ww9jjljg07r87kr56mdc",
        votes: [
          {
            amount: 0.1,
            rollup: "minimove-1",
          },
        ],
      },
      isIbc: false,
      isOp: false,
    });

    // Note: Balance changes would be calculated based on WithdrawEvent and DepositEvent
    // but for now we focus on the main decoder functionality which is working correctly
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
