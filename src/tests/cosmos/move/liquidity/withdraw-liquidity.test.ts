import {
  initialize,
  mockedAxios,
  resetMockApi,
  setupMockApi
} from "@/tests/_shared/helpers";

import {
  mockApiResponsesForWithdrawLiquidity,
  mockMsgWithdrawLiquidity
} from "./withdraw-liquidity.fixture";

jest.mock("axios");
const decoder = initialize();

describe("Withdraw Liquidity Message", () => {
  beforeEach(() => {
    resetMockApi(mockedAxios);
  });

  it("should decode a withdraw liquidity move message correctly", async () => {
    setupMockApi(mockedAxios, mockApiResponsesForWithdrawLiquidity);

    const decoded = await decoder.decodeCosmosTransaction(
      mockMsgWithdrawLiquidity
    );

    expect(decoded.messages).toHaveLength(1);
    expect(decoded.messages[0].decodedMessage).toEqual({
      action: "withdraw_liquidity",
      data: {
        amountA: "118630",
        amountB: "1006848",
        denomA:
          "ibc/6490A7EAB61059BFC1CDDEB05917DD70BDF3A611654162A1A47DB930D40D8AF4",
        denomB: "uinit",
        from: "init15j9nswsatns09fnru6ww9jjljg07r87kr56mdc",
        liquidity: "1000000",
        liquidityDenom:
          "move/543b35a39cfadad3da3c23249c474455d15efd2f94f849473226dee8a3c7a9e1"
      },
      isIbc: false,
      isOp: false
    });

    expect(decoded.messages[0].balanceChanges).toEqual({
      ft: {
        init12santguultdd8k3uyvjfc36y2hg4alf0jnuyj3ejym0w3g7848ssynvde3: {
          "ibc/6490A7EAB61059BFC1CDDEB05917DD70BDF3A611654162A1A47DB930D40D8AF4":
            "-118630",
          uinit: "-1006848"
        },
        init15j9nswsatns09fnru6ww9jjljg07r87kr56mdc: {
          "ibc/6490A7EAB61059BFC1CDDEB05917DD70BDF3A611654162A1A47DB930D40D8AF4":
            "118630",
          "move/543b35a39cfadad3da3c23249c474455d15efd2f94f849473226dee8a3c7a9e1":
            "-1000000",
          uinit: "1006848"
        }
      },
      object: {},
      vm: "move"
    });

    expect(decoded.totalBalanceChanges).toEqual({
      ft: {
        init12santguultdd8k3uyvjfc36y2hg4alf0jnuyj3ejym0w3g7848ssynvde3: {
          "ibc/6490A7EAB61059BFC1CDDEB05917DD70BDF3A611654162A1A47DB930D40D8AF4":
            "-118630",
          uinit: "-1006848"
        },
        init15j9nswsatns09fnru6ww9jjljg07r87kr56mdc: {
          "ibc/6490A7EAB61059BFC1CDDEB05917DD70BDF3A611654162A1A47DB930D40D8AF4":
            "118630",
          "move/543b35a39cfadad3da3c23249c474455d15efd2f94f849473226dee8a3c7a9e1":
            "-1000000",
          uinit: "1006848"
        }
      },
      object: {},
      vm: "move"
    });
  });
});
