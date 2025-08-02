import {
  mockApiResponsesForVipClaimEsinit,
  mockMsgVipClaimEsinit,
  mockMsgVipClaimEsinitZero,
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
        amount: "11190511",
        denom: "uinit",
        from: "init1mnthd2lz2eltmchrkep3quw2um38fy47qw43u6",
      },
      isIbc: false,
      isOp: false,
    });

    expect(decoded.messages[0].balanceChanges).toEqual({
      ft: {
        init1mnthd2lz2eltmchrkep3quw2um38fy47qw43u6: {
          uinit: "11190511",
        },
        init1208jaukpzulngp245mevqfxpm689p8nmtwkvkv2nu0q9ut04xlnsxluexg: {
          uinit: "-11190511",
        },
      },
      object: {},
    });

    expect(decoded.totalBalanceChanges).toEqual({
      ft: {
        init1mnthd2lz2eltmchrkep3quw2um38fy47qw43u6: {
          uinit: "11190511",
        },
        init1208jaukpzulngp245mevqfxpm689p8nmtwkvkv2nu0q9ut04xlnsxluexg: {
          uinit: "-11190511",
        },
      },
      object: {},
    });
  });

  it("should decode a VIP claim esinit message with zero amount", async () => {
    setupMockApi(mockedAxios, mockApiResponsesForVipClaimEsinit);
    const decoded = await decoder.decodeTransaction(mockMsgVipClaimEsinitZero);

    expect(decoded.messages).toHaveLength(2);
    expect(decoded.messages[0].decodedMessage).toEqual({
      action: "vip_claim_esinit",
      data: {
        amount: "0",
        denom: "uinit",
        from: "init1lxg0lx9009kxd77q4uyj2t683f3kvuhdxafwd5",
      },
      isIbc: false,
      isOp: false,
    });

    expect(decoded.messages[0].balanceChanges).toEqual({
      ft: {},
      object: {},
    });
  });
});
