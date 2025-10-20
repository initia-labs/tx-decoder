import {
  initialize,
  mockedAxios,
  resetMockApi,
  setupMockApi
} from "@/tests/_shared/helpers";

import {
  mockApiResponsesForCosmosMirrorIbcFtReceived,
  mockEvmMirroredCosmosIbcFtReceivePayload
} from "./ibc-receive-ft.fixture";

jest.mock("axios");
const decoder = initialize();

describe("Cosmos Mirror - IBC FT Receive", () => {
  beforeEach(() => {
    resetMockApi(mockedAxios);
  });

  it("should decode a mirrored Cosmos IBC FT receive transaction correctly", async () => {
    setupMockApi(mockedAxios, mockApiResponsesForCosmosMirrorIbcFtReceived);

    const decoded = await decoder.decodeEthereumTransaction(
      mockEvmMirroredCosmosIbcFtReceivePayload
    );

    expect(decoded.decodedTransaction).toEqual({
      action: "cosmos_mirror",
      data: {
        cosmosMessages: [
          {
            balanceChanges: {
              ft: {},
              nft: {},
              vm: "evm"
            },
            decodedMessage: {
              action: "not_supported",
              data: {
                msgType: "/ibc.core.client.v1.MsgUpdateClient"
              },
              isIbc: false,
              isOp: false
            }
          },
          {
            balanceChanges: {
              ft: {
                "0x0000000000000000000000000000000000000000": {
                  "evm/4E5f559ff873D84834e4338950d4Bb05121f8EFc": "-2",
                  "evm/E1Ff7038eAAAF027031688E1535a055B2Bac2546":
                    "-2000000000000"
                },
                "0x27f576CafbB263ED44BE8bd094f66114Da268777": {
                  "evm/4E5f559ff873D84834e4338950d4Bb05121f8EFc": "0"
                },
                "0x4eb08D5c1B0A821303A86C7b3AC805c2793dE783": {
                  "evm/4E5f559ff873D84834e4338950d4Bb05121f8EFc": "2"
                },
                "0x6Baa5DcFD050E9B85a4ddf214baEe77884773Ba4": {
                  "evm/E1Ff7038eAAAF027031688E1535a055B2Bac2546":
                    "2000000000000"
                },
                "0xC979Bd8Ca57757565fbE4C17642D05A728c95A81": {
                  "evm/4E5f559ff873D84834e4338950d4Bb05121f8EFc": "0"
                }
              },
              nft: {},
              vm: "evm"
            },
            decodedMessage: {
              action: "ibc_ft_receive",
              data: {
                amount: "2000000000000",
                denom: "evm/E1Ff7038eAAAF027031688E1535a055B2Bac2546",
                dstChainId: "yominet-1",
                dstChannel: "channel-0",
                dstPort: "transfer",
                receiver: "0x4eb08D5c1B0A821303A86C7b3AC805c2793dE783",
                sender:
                  "init102f37svmnhu0z95y6c0nzgrt8746r2ukefuvl0p8h5xtjy9654vqrugufe",
                sequence: "6162",
                srcChainId: "interwoven-1",
                srcChannel: "channel-25",
                srcPort: "transfer",
                timeoutHeight: {
                  revision_height: "0",
                  revision_number: "0"
                },
                timeoutTimestamp: "1758191014460963276"
              },
              isIbc: true,
              isOp: false
            }
          }
        ],
        cosmosTxHash:
          "576B077945077F6AB08DA3DCE91ADE3D7A3015E35186E8BC19BDC309A87B53C9",
        evmTxHash:
          "0xdb9b5aec5e851954a3835059e3cb81b79f05fcfc4a179c5fb681800756c9db96"
      }
    });

    expect(decoded.totalBalanceChanges).toEqual({
      ft: {
        "0x0000000000000000000000000000000000000000": {
          "evm/4E5f559ff873D84834e4338950d4Bb05121f8EFc": "-2",
          "evm/E1Ff7038eAAAF027031688E1535a055B2Bac2546": "-2000000000000"
        },
        "0x27f576CafbB263ED44BE8bd094f66114Da268777": {
          "evm/4E5f559ff873D84834e4338950d4Bb05121f8EFc": "0"
        },
        "0x4eb08D5c1B0A821303A86C7b3AC805c2793dE783": {
          "evm/4E5f559ff873D84834e4338950d4Bb05121f8EFc": "2"
        },
        "0x6Baa5DcFD050E9B85a4ddf214baEe77884773Ba4": {
          "evm/E1Ff7038eAAAF027031688E1535a055B2Bac2546": "2000000000000"
        },
        "0xC979Bd8Ca57757565fbE4C17642D05A728c95A81": {
          "evm/4E5f559ff873D84834e4338950d4Bb05121f8EFc": "0"
        }
      },
      nft: {},
      vm: "evm"
    });

    expect(decoded.metadata).toEqual({ data: {}, type: "evm" });
  });
});
