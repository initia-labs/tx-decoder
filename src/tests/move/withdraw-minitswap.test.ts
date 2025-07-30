import {
  mockApiResponsesForDepositMinitswap,
  mockMsgWithdrawMinitswap,
} from "../fixtures/move/withdraw-minitswap.fixture";
import {
  initialize,
  mockedAxios,
  resetMockApi,
  setupMockApi,
} from "../helpers";

jest.mock("axios");
const decoder = initialize();

describe("Withdraw Minitswap Message", () => {
  beforeEach(() => {
    resetMockApi(mockedAxios);
  });

  it("should decode a withdraw minitswap message correctly", async () => {
    setupMockApi(mockedAxios, mockApiResponsesForDepositMinitswap);
    const decoded = await decoder.decodeTransaction(mockMsgWithdrawMinitswap);

    expect(decoded.messages).toHaveLength(1);
    expect(decoded.messages[0].decodedMessage).toEqual({
      action: "withdraw_minitswap",
      data: {
        amountWithdrawn: "1000000",
        amountReceived: "1033384",
        denomWithdrawn: "uoinit",
        from: "init15j9nswsatns09fnru6ww9jjljg07r87kr56mdc",
        releaseTime: "1753430669",
      },
      isIbc: false,
      isOp: false,
    });

    expect(decoded.messages[0].balanceChanges).toEqual({
      ft: {
        init15j9nswsatns09fnru6ww9jjljg07r87kr56mdc: {
          uoinit: "-1000000",
        },
      },
      object: {},
    });

    expect(decoded.totalBalanceChanges).toEqual({
      ft: {
        init15j9nswsatns09fnru6ww9jjljg07r87kr56mdc: {
          uoinit: "-1000000",
        },
      },
      object: {},
    });
  });
});
