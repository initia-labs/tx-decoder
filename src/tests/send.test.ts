import {
  mockMsgSendWithMultipleCoins,
  mockMsgSendWithMultipleMessages,
  mockMsgSendWithSingleCoin,
} from "../fixtures/send-tx.fixture";
import { decodeTransaction } from "../index";

describe("Send Message", () => {
  it("should decode a simple send message with one coin correctly", () => {
    const decoded = decodeTransaction(mockMsgSendWithSingleCoin);

    expect(decoded.messages).toHaveLength(1);
    expect(decoded.messages[0]).toEqual({
      action: "send",
      data: {
        coins: [{ amount: "1000000", denom: "uinit" }],
        from: "init1dcvp3509ap45s2rlc7mrk9fjn9kuh4z8cy0jcr",
        to: "init1css8ethzwzgzsj6q6cseynma3jmt820lk0hqpl",
      },
      isIbc: false,
      isOp: false,
    });

    expect(decoded.balanceChanges).toEqual({
      ft: {
        init1css8ethzwzgzsj6q6cseynma3jmt820lk0hqpl: {
          uinit: "1000000",
        },
        init1dcvp3509ap45s2rlc7mrk9fjn9kuh4z8cy0jcr: {
          uinit: "-1000000",
        },
      },
      nft: {},
    });
  });

  it("should decode a simple send message with multiple coins correctly", () => {
    const decoded = decodeTransaction(mockMsgSendWithMultipleCoins);

    expect(decoded.messages).toHaveLength(1);
    expect(decoded.messages[0]).toEqual({
      action: "send",
      data: {
        coins: [
          { amount: "1000000", denom: "uinit" },
          { amount: "50000", denom: "uatom" },
        ],
        from: "init1dcvp3509ap45s2rlc7mrk9fjn9kuh4z8cy0jcr",
        to: "init1css8ethzwzgzsj6q6cseynma3jmt820lk0hqpl",
      },
      isIbc: false,
      isOp: false,
    });

    expect(decoded.balanceChanges).toEqual({
      ft: {
        init1css8ethzwzgzsj6q6cseynma3jmt820lk0hqpl: {
          uatom: "50000",
          uinit: "1000000",
        },
        init1dcvp3509ap45s2rlc7mrk9fjn9kuh4z8cy0jcr: {
          uatom: "-50000",
          uinit: "-1000000",
        },
      },
      nft: {},
    });
  });

  it("should decode a multiple send messages with multiple coins correctly", () => {
    const decoded = decodeTransaction(mockMsgSendWithMultipleMessages);

    expect(decoded.messages).toHaveLength(2);
    expect(decoded.messages[0]).toEqual({
      action: "send",
      data: {
        coins: [
          { amount: "1000000", denom: "uinit" },
          { amount: "500000", denom: "uatom" },
        ],
        from: "init1dcvp3509ap45s2rlc7mrk9fjn9kuh4z8cy0jcr",
        to: "init1css8ethzwzgzsj6q6cseynma3jmt820lk0hqpl",
      },
      isIbc: false,
      isOp: false,
    });
    expect(decoded.messages[1]).toEqual({
      action: "send",
      data: {
        coins: [
          { amount: "2000000", denom: "uinit" },
          { amount: "1000000", denom: "uatom" },
        ],
        from: "init1vdppss665svjqyhlkzpqmsc43y7d6gcg83fr3q",
        to: "init1css8ethzwzgzsj6q6cseynma3jmt820lk0hqpl",
      },
      isIbc: false,
      isOp: false,
    });

    expect(decoded.balanceChanges).toEqual({
      ft: {
        init1css8ethzwzgzsj6q6cseynma3jmt820lk0hqpl: {
          uatom: "1500000",
          uinit: "3000000",
        },
        init1dcvp3509ap45s2rlc7mrk9fjn9kuh4z8cy0jcr: {
          uatom: "-500000",
          uinit: "-1000000",
        },
        init1vdppss665svjqyhlkzpqmsc43y7d6gcg83fr3q: {
          uatom: "-1000000",
          uinit: "-2000000",
        },
      },
      nft: {},
    });
  });
});
