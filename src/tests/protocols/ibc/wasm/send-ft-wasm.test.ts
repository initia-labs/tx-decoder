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
    expect(decoded.messages[0].decodedMessage).toMatchObject({
      action: "ibc_ft_send",
      data: {
        amount: "10000",
        denom:
          "l2/fb936ffef4eb4019d82941992cc09ae2788ce7197fcb08cb00c4fe6f5e79184e",
        dstChainId: "interwoven-1",
        dstChannel: "channel-66",
        dstPort: "transfer",
        receiver:
          "init1kvms7tk5dpg9v2e24f3k69v6gwwu8vls0q3dahxluw5g0qwp02nsm8934k",
        sender: "init1dw49mn7s2r5mskjdmus5hth80zz8wwaywycq06",
        sequence: "9351",
        srcChainId: "moo-1",
        srcChannel: "channel-0",
        srcPort: "transfer",
        timeoutHeight: {
          revision_height: "0",
          revision_number: "0"
        },
        timeoutTimestamp: "1761645100876013056"
      },
      isIbc: true,
      isOp: false
    });

    expect(decoded.metadata).toEqual({ data: {}, type: "wasm" });
  });
});
