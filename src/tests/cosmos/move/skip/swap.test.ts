import {
  initialize,
  mockedAxios,
  resetMockApi,
  setupMockApi
} from "@/tests/_shared/helpers";

import { mockApiResponsesForSkipSwap, mockMsgSkipSwap } from "./swap.fixture";

jest.mock("axios");
const decoder = initialize();

const USDC =
  "ibc/6490A7EAB61059BFC1CDDEB05917DD70BDF3A611654162A1A47DB930D40D8AF4";

describe("Skip Swap and Action Message", () => {
  beforeEach(() => {
    resetMockApi(mockedAxios);
  });

  it("should decode a skip swap_and_action_with_recover move message correctly", async () => {
    setupMockApi(mockedAxios, mockApiResponsesForSkipSwap);

    const decoded = await decoder.decodeCosmosTransaction(mockMsgSkipSwap);

    expect(decoded.messages).toHaveLength(1);
    expect(decoded.messages[0].decodedMessage).toEqual({
      action: "swap",
      data: {
        amountIn: "500000000",
        amountOut: "10185848708",
        denomIn: USDC,
        denomOut: "uinit",
        from: "init1aptfpgx8wrrr5at92yjmsvqc6crz5huf9gxtd3"
      },
      isIbc: false,
      isOp: false
    });

    const expectedBalanceChanges = {
      ft: {
        init1aptfpgx8wrrr5at92yjmsvqc6crz5huf9gxtd3: {
          uinit: "10185848708",
          [USDC]: "-500000000"
        },
        init12santguultdd8k3uyvjfc36y2hg4alf0jnuyj3ejym0w3g7848ssynvde3: {
          uinit: "-10185848708",
          [USDC]: "500000000"
        }
      },
      object: {},
      vm: "move"
    };
    expect(decoded.messages[0].balanceChanges).toEqual(expectedBalanceChanges);
    expect(decoded.totalBalanceChanges).toEqual(expectedBalanceChanges);
  });
});
