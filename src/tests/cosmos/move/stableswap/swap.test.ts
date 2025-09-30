import {
  initialize,
  mockedAxios,
  resetMockApi,
  setupMockApi
} from "@/tests/_shared/helpers";

import {
  mockApiResponsesForStableSwap,
  mockMsgStableSwap
} from "./swap.fixture";

jest.mock("axios");
const decoder = initialize();

describe("Stableswap Swap Message", () => {
  beforeEach(() => {
    resetMockApi(mockedAxios);
  });

  it("should decode a stable swap move message correctly", async () => {
    setupMockApi(mockedAxios, mockApiResponsesForStableSwap);

    const decoded = await decoder.decodeCosmosTransaction(mockMsgStableSwap);

    expect(decoded.messages).toHaveLength(1);
    expect(decoded.messages[0].decodedMessage).toEqual({
      action: "swap",
      data: {
        amountIn: "1000000000",
        amountOut: "1016957925",
        denomIn:
          "ibc/39B55F22F15FB09189045A993817CDF0D388D3FF8773B2E22B6DE7B222636EEA",
        denomOut: "uinit",
        from: "init1gu7n5gq9fxfsrhp48taf6ryutxqt2xyvedujpk"
      },
      isIbc: false,
      isOp: false
    });
    expect(decoded.messages[0].balanceChanges).toEqual({
      ft: {
        init1gu7n5gq9fxfsrhp48taf6ryutxqt2xyvedujpk: {
          "ibc/39B55F22F15FB09189045A993817CDF0D388D3FF8773B2E22B6DE7B222636EEA":
            "-1000000000",
          uinit: "1016957925"
        },
        init1ttp33s68n4gc77um47q2nj2nx365xjmy2vtdye4p9en2xjdf72hqdyslrm: {
          "ibc/39B55F22F15FB09189045A993817CDF0D388D3FF8773B2E22B6DE7B222636EEA":
            "1000000000",
          uinit: "-1016957925"
        }
      },
      object: {},
      vm: "move"
    });
    expect(decoded.totalBalanceChanges).toEqual({
      ft: {
        init1gu7n5gq9fxfsrhp48taf6ryutxqt2xyvedujpk: {
          "ibc/39B55F22F15FB09189045A993817CDF0D388D3FF8773B2E22B6DE7B222636EEA":
            "-1000000000",
          uinit: "1016957925"
        },
        init1ttp33s68n4gc77um47q2nj2nx365xjmy2vtdye4p9en2xjdf72hqdyslrm: {
          "ibc/39B55F22F15FB09189045A993817CDF0D388D3FF8773B2E22B6DE7B222636EEA":
            "1000000000",
          uinit: "-1016957925"
        }
      },
      object: {},
      vm: "move"
    });
  });
});
