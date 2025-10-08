import {
  initialize,
  mockedAxios,
  resetMockApi,
  setupMockApi
} from "@/tests/_shared/helpers";

import {
  bankSendWithEvmLogTxResponse,
  mockApiResponsesForBankSendWithEvmLogTxResponse
} from "./bank-evm.fixture";

jest.mock("axios");

const decoder = initialize();

describe("Bank Send with EVM Log", () => {
  beforeEach(() => {
    resetMockApi(mockedAxios);
  });

  it("should decode bank send with EVM log correctly", async () => {
    setupMockApi(mockedAxios, mockApiResponsesForBankSendWithEvmLogTxResponse);

    const decoded = await decoder.decodeCosmosEvmTransaction(
      bankSendWithEvmLogTxResponse
    );

    const expectedProcessedMessages = [
      {
        balanceChanges: {
          ft: {
            "0xB395C9F2e84f75B1686FcDC62F8cB62a572b7820": {
              "evm/E1Ff7038eAAAF027031688E1535a055B2Bac2546": "0"
            }
          },
          nft: {},
          vm: "evm"
        },
        decodedMessage: {
          action: "send",
          data: {
            coins: [
              {
                amount: "10000000000000",
                denom: "evm/E1Ff7038eAAAF027031688E1535a055B2Bac2546"
              }
            ],
            from: "init1kw2unuhgfa6mz6r0ehrzlr9k9ftjk7pql8u5fm",
            to: "init1kw2unuhgfa6mz6r0ehrzlr9k9ftjk7pql8u5fm"
          },
          isIbc: false,
          isOp: false
        }
      }
    ];

    const expectedTotalBalanceChanges = {
      ft: {
        "0xB395C9F2e84f75B1686FcDC62F8cB62a572b7820": {
          "evm/E1Ff7038eAAAF027031688E1535a055B2Bac2546": "0"
        }
      },
      nft: {},
      vm: "evm"
    };

    expect(decoded.messages).toEqual(expectedProcessedMessages);
    expect(decoded.totalBalanceChanges).toEqual(expectedTotalBalanceChanges);
  });
});
