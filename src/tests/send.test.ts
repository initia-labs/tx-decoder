import {
  mockMsgSendWithMultipleCoins,
  mockMsgSendWithMultipleMessages,
  mockMsgSendWithSingleCoin,
} from "../fixtures/send.fixture";
import { decodeTransaction } from "../index";

describe("Send Message", () => {
  it.each([
    {
      description: "a simple send message with one coin",
      expectedBalanceChanges: {
        ft: {
          init1kw2unuhgfa6mz6r0ehrzlr9k9ftjk7pql8u5fm: { uinit: "-100" },
          init1nyky4mrxx69l4zpqtdldkk9rlf9grlnn77djlh: { uinit: "100" },
        },
        object: {},
      },
      expectedMessages: [
        {
          action: "send",
          data: {
            coins: [{ amount: "100", denom: "uinit" }],
            from: "init1kw2unuhgfa6mz6r0ehrzlr9k9ftjk7pql8u5fm",
            to: "init1nyky4mrxx69l4zpqtdldkk9rlf9grlnn77djlh",
          },
          isIbc: false,
          isOp: false,
        },
      ],
      mockData: mockMsgSendWithSingleCoin,
    },
    {
      description: "a simple send message with multiple coins",
      expectedBalanceChanges: {
        ft: {
          init1h8lpl5qcs5k5nngxvdum5v20jnww2lckg3n2ta: {
            ueth: "-919",
            uinit: "-1000000",
            uusdc: "-1024",
          },
          init1926svvgllca2lzr3lp98h29xshsztka6vua3wf: {
            ueth: "919",
            uinit: "1000000",
            uusdc: "1024",
          },
        },
        object: {},
      },
      expectedMessages: [
        {
          action: "send",
          data: {
            coins: [
              { amount: "919", denom: "ueth" },
              { amount: "1000000", denom: "uinit" },
              { amount: "1024", denom: "uusdc" },
            ],
            from: "init1h8lpl5qcs5k5nngxvdum5v20jnww2lckg3n2ta",
            to: "init1926svvgllca2lzr3lp98h29xshsztka6vua3wf",
          },
          isIbc: false,
          isOp: false,
        },
      ],
      mockData: mockMsgSendWithMultipleCoins,
    },
  ])(
    "should decode $description correctly",
    ({ expectedBalanceChanges, expectedMessages, mockData }) => {
      const decoded = decodeTransaction(mockData);

      expect(decoded.messages).toEqual(expectedMessages);
      expect(decoded.balanceChanges).toEqual(expectedBalanceChanges);
    }
  );

  it("should decode multiple send messages correctly", () => {
    const decoded = decodeTransaction(mockMsgSendWithMultipleMessages);

    const expectedMessage = {
      action: "send",
      data: {
        coins: [{ amount: "1000000", denom: "uinit" }],
        from: "init1h8lpl5qcs5k5nngxvdum5v20jnww2lckg3n2ta",
        to: "init1926svvgllca2lzr3lp98h29xshsztka6vua3wf",
      },
      isIbc: false,
      isOp: false,
    };

    expect(decoded.messages).toHaveLength(4);

    for (const message of decoded.messages) {
      expect(message).toEqual(expectedMessage);
    }

    expect(decoded.balanceChanges).toEqual({
      ft: {
        init1h8lpl5qcs5k5nngxvdum5v20jnww2lckg3n2ta: {
          uinit: "-4000000",
        },
        init1926svvgllca2lzr3lp98h29xshsztka6vua3wf: {
          uinit: "4000000",
        },
      },
      object: {},
    });
  });
});
