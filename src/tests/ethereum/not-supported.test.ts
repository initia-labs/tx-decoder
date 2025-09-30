import {
  initialize,
  mockedAxios,
  resetMockApi,
  setupMockApi
} from "@/tests/_shared/helpers";

import {
  mockApiResponsesForNotSupported,
  mockNotSupportedPayload
} from "./not-supported.fixture";

jest.mock("axios");
const decoder = initialize();

describe("Not Supported Ethereum Transaction", () => {
  beforeEach(() => {
    resetMockApi(mockedAxios);
  });

  it("should return not_supported for unsupported transaction", async () => {
    setupMockApi(mockedAxios, mockApiResponsesForNotSupported);

    const decoded = await decoder.decodeEthereumTransaction(
      mockNotSupportedPayload
    );

    expect(decoded.decodedTransaction).toEqual({
      action: "not_supported",
      data: {
        from: "0xbC46524229cFFEf6751E40938BE145EA098a97f6",
        input:
          "0x01929a9f00000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000000001f9fe1f8ca016cb11bcb8c5c876e993b2c3d9c7ed4a8734b4dc027c8ca39f19f5",
        to: "0x8e9099AC8e7643c28151c71051EEE079FbA18eFf",
        value: "0"
      }
    });

    expect(decoded.totalBalanceChanges).toEqual({
      ft: {
        "0xbC46524229cFFEf6751E40938BE145EA098a97f6": {
          "evm/E1Ff7038eAAAF027031688E1535a055B2Bac2546": "-6079250000001"
        },
        "0xf1829676DB577682E944fc3493d451B67Ff3E29F": {
          "evm/E1Ff7038eAAAF027031688E1535a055B2Bac2546": "6079250000001"
        }
      },
      nft: {},
      vm: "evm"
    });

    expect(decoded.metadata).toEqual({});
  });
});
