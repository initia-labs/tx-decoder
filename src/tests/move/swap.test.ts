import { mockMsgDexSwap, mockMsgStableSwap } from "@/fixtures/move/swap.fixture";
import { decodeTransaction } from "@/index";

describe("Swap Message", () => {
  it("should decode a dex swap move message correctly", () => {
    const decoded = decodeTransaction(mockMsgDexSwap);

    expect(decoded.messages).toHaveLength(1);
    expect(decoded.messages[0]).toEqual({
      action: "swap",
      data: {
        amountIn: "7100000000",
        amountOut: "3563468757",
        denomIn: "0x8e4733bdabcf7d4afc3d14f0dd46c9bf52fb0fce9e4b996c939e195b8bc891d9",
        denomOut: "0xe0e9394b24e53775d6af87934ac02d73536ad58b7894f6ccff3f5e7c0d548e55",
        from: "init13fuh9r5qea5wh6n0pv6807y62srtmlv246mqgv",
      },
      isIbc: false,
      isOp: false,
    });

    expect(decoded.balanceChanges).toEqual({
      ft: {
        init13fuh9r5qea5wh6n0pv6807y62srtmlv246mqgv: {
          "0x8e4733bdabcf7d4afc3d14f0dd46c9bf52fb0fce9e4b996c939e195b8bc891d9": "-7100000000",
          "0xe0e9394b24e53775d6af87934ac02d73536ad58b7894f6ccff3f5e7c0d548e55": "3563468757",
        },
      },
      object: {},
    });
  });

  it("should decode a stable swap move message correctly", () => {
    const decoded = decodeTransaction(mockMsgStableSwap);

    expect(decoded.messages).toHaveLength(1);
    expect(decoded.messages[0]).toEqual({
      action: "swap",
      data: {
        amountIn: "1000000000",
        amountOut: "1016957925",
        denomIn: "0x47111f2a0a2e58e3ec0837938fe97b5cae5cf4872505d9c03e077422fea4b162",
        denomOut: "0x8e4733bdabcf7d4afc3d14f0dd46c9bf52fb0fce9e4b996c939e195b8bc891d9",
        from: "init1gu7n5gq9fxfsrhp48taf6ryutxqt2xyvedujpk",
      },
      isIbc: false,
      isOp: false,
    });

    expect(decoded.balanceChanges).toEqual({
      ft: {
        init1gu7n5gq9fxfsrhp48taf6ryutxqt2xyvedujpk: {
          "0x47111f2a0a2e58e3ec0837938fe97b5cae5cf4872505d9c03e077422fea4b162": "-1000000000",
          "0x8e4733bdabcf7d4afc3d14f0dd46c9bf52fb0fce9e4b996c939e195b8bc891d9": "1016957925",
        },
      },
      object: {},
    });
  });
});
