import {
  mockApiResponsesForVipClaimEsinit,
  mockMsgVipClaimEsinit,
} from "../fixtures/vip-claim-esinit.fixture";
import {
  initialize,
  mockedAxios,
  resetMockApi,
  setupMockApi,
} from "../helpers";

jest.mock("axios");
const decoder = initialize();

describe("VIP Claim Esinit Message", () => {
  beforeEach(() => {
    resetMockApi(mockedAxios);
  });

  it("should decode a VIP claim esinit message correctly", async () => {
    setupMockApi(mockedAxios, mockApiResponsesForVipClaimEsinit);
    const decoded = await decoder.decodeTransaction(mockMsgVipClaimEsinit);

    expect(decoded.messages).toHaveLength(1);
    expect(decoded.messages[0].decodedMessage).toEqual({
      action: "vip_claim_esinit",
      data: {
        amount: "321024551",
        denom: "uinit",
        from: "init15j9nswsatns09fnru6ww9jjljg07r87kr56mdc",
      },
      isIbc: false,
      isOp: false,
    });

    expect(decoded.messages[0].balanceChanges).toEqual({
      ft: {
        init15j9nswsatns09fnru6ww9jjljg07r87kr56mdc: {
          uinit: "321024551",
        },
        init1pr4sze93xvpt5gqevaswmvswjavpjaxwjz6gp7rm6yxsgctk5mqqzc0nz5: {
          uinit: "-321024551",
        },
      },
      object: {},
    });

    expect(decoded.totalBalanceChanges).toEqual({
      ft: {
        init15j9nswsatns09fnru6ww9jjljg07r87kr56mdc: {
          uinit: "321024551",
        },
        init1pr4sze93xvpt5gqevaswmvswjavpjaxwjz6gp7rm6yxsgctk5mqqzc0nz5: {
          uinit: "-321024551",
        },
      },
      object: {},
    });
  });
});