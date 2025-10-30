import {
  initialize,
  mockedAxios,
  resetMockApi,
  setupMockApi
} from "@/tests/_shared/helpers";

import {
  mockApiResponsesForFtSendWasm,
  mockFtSendWasmTransaction
} from "./send-ft-wasm.fixture";

jest.mock("axios");
const decoder = initialize();

describe("IBC Send FT WASM", () => {
  beforeEach(() => {
    resetMockApi(mockedAxios);
  });

  it("should decode IBC transfer message on WASM VM", async () => {
    setupMockApi(mockedAxios, mockApiResponsesForFtSendWasm);

    const decoded = await decoder.decodeCosmosWasmTransaction(
      mockFtSendWasmTransaction
    );

    expect(decoded.messages).toHaveLength(1);
    expect(decoded.messages[0].decodedMessage).toEqual({
      action: "ibc_ft_send",
      data: {
        amount: "100000",
        denom: "uinit",
        dstChainId: "osmosis-1",
        dstChannel: "channel-0",
        dstPort: "transfer",
        receiver: "init1receiver123456789abcdefghijklmno",
        sender: "init1sender123456789abcdefghijklmnopqr",
        sequence: "100",
        srcChainId: "initia-1",
        srcChannel: "channel-1",
        srcPort: "transfer",
        timeoutHeight: {
          revision_height: "0",
          revision_number: "0"
        },
        timeoutTimestamp: "1751257396110677500"
      },
      isIbc: true,
      isOp: false
    });

    // Should have empty balance changes for WASM IBC send as this is handled by IBC protocol
    expect(decoded.messages[0].balanceChanges).toEqual({
      ft: {},
      nft: {},
      vm: "wasm"
    });

    expect(decoded.totalBalanceChanges).toEqual({
      ft: {},
      nft: {},
      vm: "wasm"
    });

    expect(decoded.metadata).toEqual({ data: {}, type: "wasm" });
  });
});
