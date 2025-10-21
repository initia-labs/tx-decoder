import {
  initialize,
  mockedAxios,
  resetMockApi,
  setupMockApi
} from "@/tests/_shared/helpers";

import {
  mockApiResponsesForCosmosMirrorBankSend,
  mockEvmMirroredCosmosBankSendPayload
} from "./bank-send.fixture";

jest.mock("axios");
const decoder = initialize();

describe("Cosmos Mirror - Bank Send", () => {
  beforeEach(() => {
    resetMockApi(mockedAxios);
  });

  it("should decode a mirrored Cosmos bank send transaction correctly", async () => {
    setupMockApi(mockedAxios, mockApiResponsesForCosmosMirrorBankSend);

    const decoded = await decoder.decodeEthereumTransaction(
      mockEvmMirroredCosmosBankSendPayload
    );

    expect(decoded.decodedTransaction).toEqual({
      action: "cosmos_mirror",
      data: {
        cosmosMessages: [
          {
            balanceChanges: {
              ft: {
                "0x992c4Aec66368bFA88205b7EDb58a3FA4A81FE73": {
                  "evm/E1Ff7038eAAAF027031688E1535a055B2Bac2546":
                    "10000000000000"
                },
                "0xB395C9F2e84f75B1686FcDC62F8cB62a572b7820": {
                  "evm/E1Ff7038eAAAF027031688E1535a055B2Bac2546":
                    "-10000000000000"
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
                to: "init1nyky4mrxx69l4zpqtdldkk9rlf9grlnn77djlh"
              },
              isIbc: false,
              isOp: false
            }
          }
        ],
        cosmosTxHash:
          "765B1376D5666EA75C8EE1711C74567578858F9ECA31F9CBB20045AED559993C",
        evmTxHash:
          "0xde734198458d1b763dc9f21554368412dd0eabff84617ee91e22394cf8fdb236"
      }
    });

    // Metadata and balance changes should be at root level (not duplicated in data)
    expect(decoded.metadata).toEqual({ data: {}, type: "evm" });
    expect(decoded.totalBalanceChanges).toEqual({
      ft: {
        "0x992c4Aec66368bFA88205b7EDb58a3FA4A81FE73": {
          "evm/E1Ff7038eAAAF027031688E1535a055B2Bac2546": "10000000000000"
        },
        "0xB395C9F2e84f75B1686FcDC62F8cB62a572b7820": {
          "evm/E1Ff7038eAAAF027031688E1535a055B2Bac2546": "-10000000000000"
        }
      },
      nft: {},
      vm: "evm"
    });
  });
});
