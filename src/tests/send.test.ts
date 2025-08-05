import {
  mockApiResponsesForMultipleCoins,
  mockApiResponsesForMultipleMessages,
  mockApiResponsesForOwnerEvent,
  mockApiResponsesForSingleCoin,
  mockMsgSendWithMultipleCoins,
  mockMsgSendWithMultipleMessages,
  mockMsgSendWithOwnerEvent,
  mockMsgSendWithSingleCoin
} from "./fixtures/send.fixture";
import { initialize, mockedAxios, resetMockApi, setupMockApi } from "./helpers";

jest.mock("axios");

const decoder = initialize();

describe("Send Message", () => {
  beforeEach(() => {
    resetMockApi(mockedAxios);
  });

  it.each([
    {
      description: "a simple send message with one coin",
      expectedProcessedMessages: [
        {
          balanceChanges: {
            ft: {
              init1kw2unuhgfa6mz6r0ehrzlr9k9ftjk7pql8u5fm: { uinit: "-100" },
              init1nyky4mrxx69l4zpqtdldkk9rlf9grlnn77djlh: { uinit: "100" }
            },
            object: {}
          },
          decodedMessage: {
            action: "send",
            data: {
              coins: [{ amount: "100", denom: "uinit" }],
              from: "init1kw2unuhgfa6mz6r0ehrzlr9k9ftjk7pql8u5fm",
              to: "init1nyky4mrxx69l4zpqtdldkk9rlf9grlnn77djlh"
            },
            isIbc: false,
            isOp: false
          }
        }
      ],
      expectedTotalBalanceChanges: {
        ft: {
          init1kw2unuhgfa6mz6r0ehrzlr9k9ftjk7pql8u5fm: { uinit: "-100" },
          init1nyky4mrxx69l4zpqtdldkk9rlf9grlnn77djlh: { uinit: "100" }
        },
        object: {}
      },
      mockApiResponses: mockApiResponsesForSingleCoin,
      mockData: mockMsgSendWithSingleCoin
    },
    {
      description: "a simple send message with multiple coins",
      expectedProcessedMessages: [
        {
          balanceChanges: {
            ft: {
              init1h8lpl5qcs5k5nngxvdum5v20jnww2lckg3n2ta: {
                ueth: "-919",
                uinit: "-1000000",
                uusdc: "-1024"
              },
              init1926svvgllca2lzr3lp98h29xshsztka6vua3wf: {
                ueth: "919",
                uinit: "1000000",
                uusdc: "1024"
              }
            },
            object: {}
          },
          decodedMessage: {
            action: "send",
            data: {
              coins: [
                { amount: "919", denom: "ueth" },
                { amount: "1000000", denom: "uinit" },
                { amount: "1024", denom: "uusdc" }
              ],
              from: "init1h8lpl5qcs5k5nngxvdum5v20jnww2lckg3n2ta",
              to: "init1926svvgllca2lzr3lp98h29xshsztka6vua3wf"
            },
            isIbc: false,
            isOp: false
          }
        }
      ],
      expectedTotalBalanceChanges: {
        ft: {
          init1h8lpl5qcs5k5nngxvdum5v20jnww2lckg3n2ta: {
            ueth: "-919",
            uinit: "-1000000",
            uusdc: "-1024"
          },
          init1926svvgllca2lzr3lp98h29xshsztka6vua3wf: {
            ueth: "919",
            uinit: "1000000",
            uusdc: "1024"
          }
        },
        object: {}
      },
      mockApiResponses: mockApiResponsesForMultipleCoins,
      mockData: mockMsgSendWithMultipleCoins
    }
  ])(
    "should decode $description correctly",
    async ({
      expectedProcessedMessages,
      expectedTotalBalanceChanges,
      mockApiResponses,
      mockData
    }) => {
      setupMockApi(mockedAxios, mockApiResponses);

      const decoded = await decoder.decodeTransaction(mockData);

      expect(decoded.messages).toEqual(expectedProcessedMessages);
      expect(decoded.totalBalanceChanges).toEqual(expectedTotalBalanceChanges);
    }
  );

  it("should decode multiple send messages correctly", async () => {
    setupMockApi(mockedAxios, mockApiResponsesForMultipleMessages);

    const decoded = await decoder.decodeTransaction(
      mockMsgSendWithMultipleMessages
    );

    const expectedMessage = {
      balanceChanges: {
        ft: {
          init1h8lpl5qcs5k5nngxvdum5v20jnww2lckg3n2ta: { uinit: "-1000000" },
          init1926svvgllca2lzr3lp98h29xshsztka6vua3wf: { uinit: "1000000" }
        },
        object: {}
      },
      decodedMessage: {
        action: "send",
        data: {
          coins: [{ amount: "1000000", denom: "uinit" }],
          from: "init1h8lpl5qcs5k5nngxvdum5v20jnww2lckg3n2ta",
          to: "init1926svvgllca2lzr3lp98h29xshsztka6vua3wf"
        },
        isIbc: false,
        isOp: false
      }
    };

    expect(decoded.messages).toHaveLength(4);

    for (const message of decoded.messages) {
      expect(message).toEqual(expectedMessage);
    }

    expect(decoded.totalBalanceChanges).toEqual({
      ft: {
        init1h8lpl5qcs5k5nngxvdum5v20jnww2lckg3n2ta: {
          uinit: "-4000000"
        },
        init1926svvgllca2lzr3lp98h29xshsztka6vua3wf: {
          uinit: "4000000"
        }
      },
      object: {}
    });
  });

  it("should decode a send message with owner event correctly", async () => {
    setupMockApi(mockedAxios, mockApiResponsesForOwnerEvent);

    const decoded = await decoder.decodeTransaction(mockMsgSendWithOwnerEvent);

    expect(decoded.messages).toHaveLength(1);
    expect(decoded.messages[0].decodedMessage).toEqual({
      action: "send",
      data: {
        coins: [{ amount: "34365658000", denom: "uinit" }],
        from: "init1sqnzndr2mc3us4m59tksjge7gnnml6usydaskw",
        to: "init1xt4ggu8tqvzj5mt0xlftdnuq6cw8ax8lp593zf"
      },
      isIbc: false,
      isOp: false
    });
    expect(decoded.messages[0].balanceChanges).toEqual({
      ft: {
        init1sqnzndr2mc3us4m59tksjge7gnnml6usydaskw: { uinit: "-34365658000" },
        init1xt4ggu8tqvzj5mt0xlftdnuq6cw8ax8lp593zf: { uinit: "34365658000" }
      },
      object: {}
    });
    expect(decoded.totalBalanceChanges).toEqual({
      ft: {
        init1sqnzndr2mc3us4m59tksjge7gnnml6usydaskw: { uinit: "-34365658000" },
        init1xt4ggu8tqvzj5mt0xlftdnuq6cw8ax8lp593zf: { uinit: "34365658000" }
      },
      object: {}
    });
  });
});
