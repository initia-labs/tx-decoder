import {
  mockApiResponsesForClaimMinitswap,
  mockMsgClaimMinitswap,
} from "../fixtures/move/claim-minitswap.fixture";
import {
  initialize,
  mockedAxios,
  resetMockApi,
  setupMockApi,
} from "../helpers";

jest.mock("axios");
const decoder = initialize();

describe("Claim Minitswap Message", () => {
  beforeEach(() => {
    resetMockApi(mockedAxios);
  });

  it("should decode a claim minitswap message correctly", async () => {
    setupMockApi(mockedAxios, mockApiResponsesForClaimMinitswap);
    const decoded = await decoder.decodeTransaction(mockMsgClaimMinitswap);

    expect(decoded.messages).toHaveLength(1);
    expect(decoded.messages[0].decodedMessage).toEqual({
      action: "claim_minitswap",
      data: {
        amount: "103338",
        denom: "uinit",
        from: "init15j9nswsatns09fnru6ww9jjljg07r87kr56mdc",
      },
      isIbc: false,
      isOp: false,
    });

    expect(decoded.messages[0].balanceChanges).toEqual({
      ft: {
        init1qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqpqr5e3d: {
          uinit: "-103338",
        },
        init15j9nswsatns09fnru6ww9jjljg07r87kr56mdc: {
          uinit: "103338",
        },
      },
      object: {},
    });

    expect(decoded.totalBalanceChanges).toEqual({
      ft: {
        init1qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqpqr5e3d: {
          uinit: "-103338",
        },
        init15j9nswsatns09fnru6ww9jjljg07r87kr56mdc: {
          uinit: "103338",
        },
      },
      object: {},
    });
  });
});