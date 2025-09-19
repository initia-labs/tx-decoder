import {
  initialize,
  mockedAxios,
  resetMockApi,
  setupMockApi
} from "@/tests/_shared/helpers";

import { mockApiResponsesForDexSwap, mockMsgDexSwap } from "./swap.fixture";

jest.mock("axios");
const decoder = initialize();

describe("Dex Swap Message", () => {
  beforeEach(() => {
    resetMockApi(mockedAxios);
  });

  it("should decode a dex swap move message correctly", async () => {
    setupMockApi(mockedAxios, mockApiResponsesForDexSwap);

    const decoded = await decoder.decodeTransaction(mockMsgDexSwap);

    expect(decoded.messages).toHaveLength(1);
    expect(decoded.messages[0].decodedMessage).toEqual({
      action: "swap",
      data: {
        amountIn: "7100000000",
        amountOut: "3563468757",
        denomIn: "uinit",
        denomOut:
          "ibc/6490A7EAB61059BFC1CDDEB05917DD70BDF3A611654162A1A47DB930D40D8AF4",
        from: "init13fuh9r5qea5wh6n0pv6807y62srtmlv246mqgv"
      },
      isIbc: false,
      isOp: false
    });
    expect(decoded.messages[0].balanceChanges).toEqual({
      ft: {
        init12santguultdd8k3uyvjfc36y2hg4alf0jnuyj3ejym0w3g7848ssynvde3: {
          "ibc/6490A7EAB61059BFC1CDDEB05917DD70BDF3A611654162A1A47DB930D40D8AF4":
            "-3563468757",
          uinit: "7100000000"
        },
        init13fuh9r5qea5wh6n0pv6807y62srtmlv246mqgv: {
          "ibc/6490A7EAB61059BFC1CDDEB05917DD70BDF3A611654162A1A47DB930D40D8AF4":
            "3563468757",
          uinit: "-7100000000"
        }
      },
      object: {}
    });

    expect(decoded.totalBalanceChanges).toEqual({
      ft: {
        init12santguultdd8k3uyvjfc36y2hg4alf0jnuyj3ejym0w3g7848ssynvde3: {
          "ibc/6490A7EAB61059BFC1CDDEB05917DD70BDF3A611654162A1A47DB930D40D8AF4":
            "-3563468757",
          uinit: "7100000000"
        },
        init13fuh9r5qea5wh6n0pv6807y62srtmlv246mqgv: {
          "ibc/6490A7EAB61059BFC1CDDEB05917DD70BDF3A611654162A1A47DB930D40D8AF4":
            "3563468757",
          uinit: "-7100000000"
        }
      },
      object: {}
    });
  });
});
