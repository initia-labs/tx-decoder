import {
  initialize,
  mockedAxios,
  resetMockApi,
  setupMockApi
} from "@/tests/_shared/helpers";

import {
  mockApiResponsesForStableswapWithdrawLiquidity,
  mockMsgStableswapWithdrawLiquidity
} from "./withdraw-stableswap.fixture";

jest.mock("axios");
const decoder = initialize();

describe("Stableswap Withdraw Liquidity Message", () => {
  beforeEach(() => {
    resetMockApi(mockedAxios);
  });

  it("should decode a stableswap withdraw liquidity move message correctly", async () => {
    setupMockApi(mockedAxios, mockApiResponsesForStableswapWithdrawLiquidity);

    const decoded = await decoder.decodeTransaction(
      mockMsgStableswapWithdrawLiquidity
    );

    expect(decoded.messages).toHaveLength(1);
    expect(decoded.messages[0].decodedMessage).toEqual({
      action: "withdraw_stableswap",
      data: {
        coinAmounts: ["29901", "71712"],
        coinDenoms: [
          "ibc/39B55F22F15FB09189045A993817CDF0D388D3FF8773B2E22B6DE7B222636EEA",
          "uinit"
        ],
        feeAmounts: ["0", "0"],
        from: "init1dw49mn7s2r5mskjdmus5hth80zz8wwaywycq06",
        liquidity: "100000",
        liquidityDenom:
          "move/5ac318c3479d518f7b9baf80a9c9533475434b645316d266a12e66a349a9f2ae"
      },
      isIbc: false,
      isOp: false
    });
  });
});
