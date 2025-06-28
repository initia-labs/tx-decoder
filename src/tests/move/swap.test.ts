import axios from "axios";

import {
  mockApiResponsesSwap,
  mockMsgDexSwap,
  mockMsgStableSwap,
} from "../fixtures/move/swap.fixture";
import { createMockApiHandler, initialize } from "../helpers";

jest.mock("axios");
const decoder = initialize();
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("Swap Message", () => {
  beforeEach(() => {
    mockedAxios.get.mockReset();
  });

  it("should decode a dex swap move message correctly", async () => {
    mockedAxios.get.mockImplementation(
      createMockApiHandler(mockApiResponsesSwap)
    );

    const decoded = await decoder.decodeTransaction(mockMsgDexSwap);

    expect(decoded.messages).toHaveLength(1);
    expect(decoded.messages[0].decodedMessage).toEqual({
      action: "swap",
      data: {
        amountIn: "7100000000",
        amountOut: "3563468757",
        denomIn:
          "0x8e4733bdabcf7d4afc3d14f0dd46c9bf52fb0fce9e4b996c939e195b8bc891d9",
        denomOut:
          "0xe0e9394b24e53775d6af87934ac02d73536ad58b7894f6ccff3f5e7c0d548e55",
        from: "init13fuh9r5qea5wh6n0pv6807y62srtmlv246mqgv",
      },
      isIbc: false,
      isOp: false,
    });
    expect(decoded.messages[0].balanceChanges).toEqual({
      ft: {
        init12santguultdd8k3uyvjfc36y2hg4alf0jnuyj3ejym0w3g7848ssynvde3: {
          "ibc/6490A7EAB61059BFC1CDDEB05917DD70BDF3A611654162A1A47DB930D40D8AF4":
            "-3563468757",
          uinit: "7100000000",
        },
        init13fuh9r5qea5wh6n0pv6807y62srtmlv246mqgv: {
          "ibc/6490A7EAB61059BFC1CDDEB05917DD70BDF3A611654162A1A47DB930D40D8AF4":
            "3563468757",
          uinit: "-7100000000",
        },
      },
      object: {},
    });

    expect(decoded.totalBalanceChanges).toEqual({
      ft: {
        init12santguultdd8k3uyvjfc36y2hg4alf0jnuyj3ejym0w3g7848ssynvde3: {
          "ibc/6490A7EAB61059BFC1CDDEB05917DD70BDF3A611654162A1A47DB930D40D8AF4":
            "-3563468757",
          uinit: "7100000000",
        },
        init13fuh9r5qea5wh6n0pv6807y62srtmlv246mqgv: {
          "ibc/6490A7EAB61059BFC1CDDEB05917DD70BDF3A611654162A1A47DB930D40D8AF4":
            "3563468757",
          uinit: "-7100000000",
        },
      },
      object: {},
    });
  });

  it("should decode a stable swap move message correctly", async () => {
    mockedAxios.get.mockImplementation(
      createMockApiHandler(mockApiResponsesSwap)
    );
    const decoded = await decoder.decodeTransaction(mockMsgStableSwap);

    expect(decoded.messages).toHaveLength(1);
    expect(decoded.messages[0].decodedMessage).toEqual({
      action: "swap",
      data: {
        amountIn: "1000000000",
        amountOut: "1016957925",
        denomIn:
          "0x47111f2a0a2e58e3ec0837938fe97b5cae5cf4872505d9c03e077422fea4b162",
        denomOut:
          "0x8e4733bdabcf7d4afc3d14f0dd46c9bf52fb0fce9e4b996c939e195b8bc891d9",
        from: "init1gu7n5gq9fxfsrhp48taf6ryutxqt2xyvedujpk",
      },
      isIbc: false,
      isOp: false,
    });
    expect(decoded.messages[0].balanceChanges).toEqual({
      ft: {
        init1gu7n5gq9fxfsrhp48taf6ryutxqt2xyvedujpk: {
          "ibc/39B55F22F15FB09189045A993817CDF0D388D3FF8773B2E22B6DE7B222636EEA":
            "-1000000000",
          uinit: "1016957925",
        },
        init1ttp33s68n4gc77um47q2nj2nx365xjmy2vtdye4p9en2xjdf72hqdyslrm: {
          "ibc/39B55F22F15FB09189045A993817CDF0D388D3FF8773B2E22B6DE7B222636EEA":
            "1000000000",
          uinit: "-1016957925",
        },
      },
      object: {},
    });
    expect(decoded.totalBalanceChanges).toEqual({
      ft: {
        init1gu7n5gq9fxfsrhp48taf6ryutxqt2xyvedujpk: {
          "ibc/39B55F22F15FB09189045A993817CDF0D388D3FF8773B2E22B6DE7B222636EEA":
            "-1000000000",
          uinit: "1016957925",
        },
        init1ttp33s68n4gc77um47q2nj2nx365xjmy2vtdye4p9en2xjdf72hqdyslrm: {
          "ibc/39B55F22F15FB09189045A993817CDF0D388D3FF8773B2E22B6DE7B222636EEA":
            "1000000000",
          uinit: "-1016957925",
        },
      },
      object: {},
    });
  });
});
