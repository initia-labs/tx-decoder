import {
  initialize,
  mockedAxios,
  resetMockApi,
  setupMockApi
} from "@/tests/_shared/helpers";

import {
  mockApiResponsesForQueuedTx,
  mockMsgSendWithQueuedTxExtension
} from "./extension-options.fixture";

jest.mock("axios");

const decoder = initialize();

describe("Tx Body Extension Options", () => {
  beforeEach(() => {
    resetMockApi(mockedAxios);
  });

  it("should decode a tx with a non-empty extension_options array (proto-JSON Any)", async () => {
    setupMockApi(mockedAxios, mockApiResponsesForQueuedTx);

    const decoded = await decoder.decodeCosmosTransaction(
      mockMsgSendWithQueuedTxExtension
    );

    expect(decoded.messages).toHaveLength(1);
    expect(decoded.messages[0].decodedMessage).toEqual({
      action: "send",
      data: {
        coins: [{ amount: "6", denom: "uinit" }],
        from: "init1nqryxp67r2agym7fp7rm3xx4z7w6vs9nwtmk74",
        to: "init1qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqpqr5e3d"
      },
      isIbc: false,
      isOp: false
    });
  });
});
