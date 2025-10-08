import {
  initialize,
  mockedAxios,
  resetMockApi,
  setupMockApi
} from "@/tests/_shared/helpers";

import {
  mockApiResponsesForDepositMinitswap,
  mockMsgDepositMinitswap
} from "./deposit-minitswap.fixture";

jest.mock("axios");
const decoder = initialize();

describe("Deposit Minitswap Message", () => {
  beforeEach(() => {
    resetMockApi(mockedAxios);
  });

  it("should decode a deposit minitswap message correctly", async () => {
    setupMockApi(mockedAxios, mockApiResponsesForDepositMinitswap);

    const decoded = await decoder.decodeCosmosTransaction(
      mockMsgDepositMinitswap
    );

    expect(decoded.messages).toHaveLength(1);
    expect(decoded.messages[0].decodedMessage).toEqual({
      action: "deposit_minitswap",
      data: {
        amountDeposited: "1000000",
        amountReceived: "967693",
        denomDeposited: "uinit",
        denomReceived: "uoinit",
        from: "init15j9nswsatns09fnru6ww9jjljg07r87kr56mdc"
      },
      isIbc: false,
      isOp: false
    });

    expect(decoded.messages[0].balanceChanges).toEqual({
      ft: {
        init1qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqpqr5e3d: {
          uinit: "1000000"
        },
        init15j9nswsatns09fnru6ww9jjljg07r87kr56mdc: {
          uinit: "-1000000",
          uoinit: "967693"
        }
      },
      object: {},
      vm: "move"
    });

    expect(decoded.totalBalanceChanges).toEqual({
      ft: {
        init1qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqpqr5e3d: {
          uinit: "1000000"
        },
        init15j9nswsatns09fnru6ww9jjljg07r87kr56mdc: {
          uinit: "-1000000",
          uoinit: "967693"
        }
      },
      object: {},
      vm: "move"
    });
  });
});
