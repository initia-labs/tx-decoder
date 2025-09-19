import {
  initialize,
  mockedAxios,
  resetMockApi,
  setupMockApi
} from "@/tests/_shared/helpers";

import {
  mockApiResponsesForIbcReceiveFtEvmTransaction,
  mockIbcReceiveFtEvmTransaction
} from "./ibc-receive-ft.fixture";

jest.mock("axios");

const decoder = initialize();

describe("EVM Transaction Decoder", () => {
  beforeEach(() => {
    resetMockApi(mockedAxios);
  });

  it("should decode IBC receive FT transaction correctly", async () => {
    setupMockApi(mockedAxios, mockApiResponsesForIbcReceiveFtEvmTransaction);

    const decoded = await decoder.decodeEvmTransaction(
      mockIbcReceiveFtEvmTransaction
    );

    expect(decoded.messages).toHaveLength(2);

    expect(decoded.messages[0].decodedMessage.action).toBe("not_supported");
    expect(decoded.messages[1].decodedMessage).toEqual({
      action: "ibc_ft_receive",
      data: {
        amount: "10",
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

    expect(decoded.totalBalanceChanges).toEqual({
      ft: {},
      object: {}
    });
  });
});
