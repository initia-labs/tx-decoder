import {
  mockApiResponsesForStableswapProvideLiquidity,
  mockMsgStableswapProvideLiquidity
} from "../fixtures/move/provide-stableswap.fixture";
import {
  initialize,
  mockedAxios,
  resetMockApi,
  setupMockApi
} from "../helpers";

jest.mock("axios");
const decoder = initialize();

describe("Stableswap Provide Liquidity Message", () => {
  beforeEach(() => {
    resetMockApi(mockedAxios);
  });

  it("should decode a stableswap provide liquidity move message correctly", async () => {
    setupMockApi(mockedAxios, mockApiResponsesForStableswapProvideLiquidity);

    const decoded = await decoder.decodeTransaction(
      mockMsgStableswapProvideLiquidity
    );

    expect(decoded.messages).toHaveLength(1);
    expect(decoded.messages[0].decodedMessage).toEqual({
      action: "provide_stableswap",
      data: {
        coinAmounts: ["1000", "1486"],
        coinDenoms: [
          "ibc/39B55F22F15FB09189045A993817CDF0D388D3FF8773B2E22B6DE7B222636EEA",
          "uinit"
        ],
        feeAmounts: ["1", "1"],
        from: "init1dw49mn7s2r5mskjdmus5hth80zz8wwaywycq06",
        liquidity: "2448",
        liquidityDenom:
          "move/5ac318c3479d518f7b9baf80a9c9533475434b645316d266a12e66a349a9f2ae"
      },
      isIbc: false,
      isOp: false
    });
    expect(decoded.messages[0].balanceChanges).toEqual({
      ft: {
        init1dw49mn7s2r5mskjdmus5hth80zz8wwaywycq06: {
          "ibc/39B55F22F15FB09189045A993817CDF0D388D3FF8773B2E22B6DE7B222636EEA":
            "-1000",
          "move/5ac318c3479d518f7b9baf80a9c9533475434b645316d266a12e66a349a9f2ae":
            "2448",
          uinit: "-1486"
        },
        init1ttp33s68n4gc77um47q2nj2nx365xjmy2vtdye4p9en2xjdf72hqdyslrm: {
          "ibc/39B55F22F15FB09189045A993817CDF0D388D3FF8773B2E22B6DE7B222636EEA":
            "1000",
          uinit: "1486"
        }
      },
      object: {}
    });
    expect(decoded.totalBalanceChanges).toEqual({
      ft: {
        init1dw49mn7s2r5mskjdmus5hth80zz8wwaywycq06: {
          "ibc/39B55F22F15FB09189045A993817CDF0D388D3FF8773B2E22B6DE7B222636EEA":
            "-1000",
          "move/5ac318c3479d518f7b9baf80a9c9533475434b645316d266a12e66a349a9f2ae":
            "2448",
          uinit: "-1486"
        },
        init1ttp33s68n4gc77um47q2nj2nx365xjmy2vtdye4p9en2xjdf72hqdyslrm: {
          "ibc/39B55F22F15FB09189045A993817CDF0D388D3FF8773B2E22B6DE7B222636EEA":
            "1000",
          uinit: "1486"
        }
      },
      object: {}
    });
  });
});
