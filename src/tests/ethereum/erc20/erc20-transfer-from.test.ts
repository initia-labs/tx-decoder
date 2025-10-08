import {
  initialize,
  mockedAxios,
  resetMockApi,
  setupMockApi
} from "@/tests/_shared/helpers";

import {
  mockApiResponsesForErc20TransferFrom,
  mockErc20TransferFromPayload
} from "./erc20-transfer-from.fixture";

jest.mock("axios");
const decoder = initialize();

describe("ERC-20 TransferFrom Ethereum Transaction", () => {
  beforeEach(() => {
    resetMockApi(mockedAxios);
  });

  it("should decode an ERC-20 transferFrom transaction correctly", async () => {
    setupMockApi(mockedAxios, mockApiResponsesForErc20TransferFrom);

    const decoded = await decoder.decodeEthereumTransaction(
      mockErc20TransferFromPayload
    );

    expect(decoded.decodedTransaction).toEqual({
      action: "erc20_transfer_from",
      data: {
        amount: "10000000",
        contract: "0x4BaDFb501Ab304fF11217C44702bb9E9732E7CF4",
        denom: "evm/4BaDFb501Ab304fF11217C44702bb9E9732E7CF4",
        from: "0xE7DdeA46e6Bd763C1610F0544F5cf9dc8c623B5c",
        owner: "0xB395C9F2e84f75B1686FcDC62F8cB62a572b7820",
        to: "0xE7DdeA46e6Bd763C1610F0544F5cf9dc8c623B5c"
      }
    });

    expect(decoded.totalBalanceChanges).toEqual({
      ft: {
        "0xB395C9F2e84f75B1686FcDC62F8cB62a572b7820": {
          "evm/4BaDFb501Ab304fF11217C44702bb9E9732E7CF4": "-10000000"
        },
        "0xE7DdeA46e6Bd763C1610F0544F5cf9dc8c623B5c": {
          "evm/4BaDFb501Ab304fF11217C44702bb9E9732E7CF4": "10000000"
        }
      },
      nft: {},
      vm: "evm"
    });

    expect(decoded.metadata).toEqual({});
  });
});
