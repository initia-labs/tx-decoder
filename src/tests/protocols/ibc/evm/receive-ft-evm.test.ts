import {
  initialize,
  mockedAxios,
  resetMockApi,
  setupMockApi
} from "@/tests/_shared/helpers";

import {
  mockApiResponsesForFtReceiveEvm,
  mockFtReceiveEvmTransaction
} from "./receive-ft-evm.fixture";

jest.mock("axios");

const decoder = initialize();

describe("EVM Transaction Decoder", () => {
  beforeEach(() => {
    resetMockApi(mockedAxios);
  });

  it("should decode IBC receive FT transaction correctly", async () => {
    setupMockApi(mockedAxios, mockApiResponsesForFtReceiveEvm);

    const decoded = await decoder.decodeCosmosEvmTransaction(
      mockFtReceiveEvmTransaction
    );

    expect(decoded.messages).toHaveLength(2);

    expect(decoded.messages[0].decodedMessage.action).toBe("not_supported");
    expect(decoded.messages[0].balanceChanges).toEqual({
      ft: {},
      nft: {},
      vm: "evm"
    });
    expect(decoded.messages[1].decodedMessage).toEqual({
      action: "ibc_ft_receive",
      data: {
        amount: "10000000000000",
        denom: "evm/E1Ff7038eAAAF027031688E1535a055B2Bac2546",
        dstChainId: "yominet-1",
        dstChannel: "channel-0",
        dstPort: "transfer",
        receiver: "0x4eb08D5c1B0A821303A86C7b3AC805c2793dE783",
        sender:
          "init102f37svmnhu0z95y6c0nzgrt8746r2ukefuvl0p8h5xtjy9654vqrugufe",
        sequence: "5920",
        srcChainId: "interwoven-1",
        srcChannel: "channel-25",
        srcPort: "transfer",
        timeoutHeight: {
          revision_height: "0",
          revision_number: "0"
        },
        timeoutTimestamp: "1755740868283403632"
      },
      isIbc: true,
      isOp: false
    });
    expect(decoded.messages[1].balanceChanges).toEqual({
      ft: {
        "0x0000000000000000000000000000000000000000": {
          "evm/4E5f559ff873D84834e4338950d4Bb05121f8EFc": "-10",
          "evm/E1Ff7038eAAAF027031688E1535a055B2Bac2546": "-10000000000000"
        },
        "0x27f576CafbB263ED44BE8bd094f66114Da268777": {
          "evm/4E5f559ff873D84834e4338950d4Bb05121f8EFc": "0"
        },
        "0x4eb08D5c1B0A821303A86C7b3AC805c2793dE783": {
          "evm/4E5f559ff873D84834e4338950d4Bb05121f8EFc": "10"
        },
        "0x6Baa5DcFD050E9B85a4ddf214baEe77884773Ba4": {
          "evm/E1Ff7038eAAAF027031688E1535a055B2Bac2546": "10000000000000"
        },
        "0xC979Bd8Ca57757565fbE4C17642D05A728c95A81": {
          "evm/4E5f559ff873D84834e4338950d4Bb05121f8EFc": "0"
        }
      },
      nft: {},
      vm: "evm"
    });

    expect(decoded.totalBalanceChanges).toEqual({
      ft: {
        "0x0000000000000000000000000000000000000000": {
          "evm/4E5f559ff873D84834e4338950d4Bb05121f8EFc": "-10",
          "evm/E1Ff7038eAAAF027031688E1535a055B2Bac2546": "-10000000000000"
        },
        "0x27f576CafbB263ED44BE8bd094f66114Da268777": {
          "evm/4E5f559ff873D84834e4338950d4Bb05121f8EFc": "0"
        },
        "0x4eb08D5c1B0A821303A86C7b3AC805c2793dE783": {
          "evm/4E5f559ff873D84834e4338950d4Bb05121f8EFc": "10"
        },
        "0x6Baa5DcFD050E9B85a4ddf214baEe77884773Ba4": {
          "evm/E1Ff7038eAAAF027031688E1535a055B2Bac2546": "10000000000000"
        },
        "0xC979Bd8Ca57757565fbE4C17642D05A728c95A81": {
          "evm/4E5f559ff873D84834e4338950d4Bb05121f8EFc": "0"
        }
      },
      nft: {},
      vm: "evm"
    });
  });
});
