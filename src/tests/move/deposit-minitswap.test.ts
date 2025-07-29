import {
  mockMsgDepositMinitswap,
  mockApiResponsesForDepositMinitswap,
} from "../fixtures/move/deposit-minitswap.fixture";
import {
  initialize,
  mockedAxios,
  resetMockApi,
  setupMockApi,
} from "../helpers";

jest.mock("axios");
const decoder = initialize();

describe("Deposit Minitswap Message", () => {
  beforeEach(() => {
    resetMockApi(mockedAxios);
  });

  it("should decode a deposit minitswap message correctly", async () => {
    setupMockApi(mockedAxios, mockApiResponsesForDepositMinitswap);

    const decoded = await decoder.decodeTransaction(mockMsgDepositMinitswap);

    expect(decoded.messages).toHaveLength(1);
    expect(decoded.messages[0].decodedMessage).toEqual({
      action: "deposit_minitswap",
      data: {
        amountDeposited: "1000000",
        amountReceived: "967693",
        denomDeposited: "uinit",
        denomReceived: "uoinit",
        from: "init15j9nswsatns09fnru6ww9jjljg07r87kr56mdc",
      },
      isIbc: false,
      isOp: false,
    });
  });
});
