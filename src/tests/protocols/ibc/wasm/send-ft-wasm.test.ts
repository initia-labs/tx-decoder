import { initialize, mockedAxios, resetMockApi } from "@/tests/_shared/helpers";

import { mockFtSendWasmTransaction } from "./send-ft-wasm.fixture";

jest.mock("axios");
const decoder = initialize();

describe("IBC Send FT WASM", () => {
  beforeEach(() => {
    resetMockApi(mockedAxios);
  });

  it("should handle IBC transfer message on WASM VM", async () => {
    const decoded = await decoder.decodeCosmosWasmTransaction(
      mockFtSendWasmTransaction
    );

    expect(decoded.messages).toHaveLength(1);
    // IBC transfer is currently marked as not_supported in WASM context
    expect(decoded.messages[0].decodedMessage).toMatchObject({
      action: "not_supported",
      data: {
        msgType: "/ibc.applications.transfer.v1.MsgTransfer"
      },
      isIbc: false,
      isOp: false
    });

    expect(decoded.metadata).toEqual({ data: {}, type: "wasm" });
  });
});
