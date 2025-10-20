import {
  initialize,
  mockedAxios,
  resetMockApi,
  setupMockApi
} from "@/tests/_shared/helpers";

import { mockNativeTransferPayload } from "./native-transfer.fixture";

jest.mock("axios");
const decoder = initialize();

describe("Native ETH Transfer", () => {
  beforeEach(() => {
    resetMockApi(mockedAxios);
  });

  it("should decode a native ETH transfer correctly", async () => {
    setupMockApi(mockedAxios, {});

    const decoded = await decoder.decodeEthereumTransaction(
      mockNativeTransferPayload
    );

    expect(decoded.decodedTransaction).toEqual({
      action: "eth_transfer",
      data: {
        amount: "2000000000000",
        from: "0xB395C9F2e84f75B1686FcDC62F8cB62a572b7820",
        to: "0xB395C9F2e84f75B1686FcDC62F8cB62a572b7820"
      }
    });

    expect(decoded.metadata).toEqual({ data: {}, type: "evm" });
  });
});
