import {
  initialize,
  mockedAxios,
  resetMockApi,
  setupMockApi
} from "@/tests/_shared/helpers";

import { mockEthTransferPayload } from "./eth-transfer.fixture";

jest.mock("axios");
const decoder = initialize();

describe("ETH Transfer", () => {
  beforeEach(() => {
    resetMockApi(mockedAxios);
  });

  it("should decode an ETH transfer correctly", async () => {
    setupMockApi(mockedAxios, {});

    const decoded = await decoder.decodeEthereumTransaction(
      mockEthTransferPayload
    );

    expect(decoded.decodedTransaction).toEqual({
      action: "eth_transfer",
      data: {
        amount: "2000000000000",
        denom: "evm/E1Ff7038eAAAF027031688E1535a055B2Bac2546",
        from: "0xB395C9F2e84f75B1686FcDC62F8cB62a572b7820",
        to: "0xB395C9F2e84f75B1686FcDC62F8cB62a572b7820"
      }
    });

    expect(decoded.metadata).toEqual({ data: {}, type: "evm" });
  });
});
