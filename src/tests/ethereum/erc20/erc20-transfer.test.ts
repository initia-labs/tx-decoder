import {
  initialize,
  mockedAxios,
  resetMockApi,
  setupMockApi
} from "@/tests/_shared/helpers";

import { mockErc20TransferPayload } from "./erc20-transfer.fixture";

jest.mock("axios");
const decoder = initialize();

describe("ERC-20 Transfer Ethereum Transaction", () => {
  beforeEach(() => {
    resetMockApi(mockedAxios);
  });

  it("should decode an ERC-20 transfer transaction correctly", async () => {
    setupMockApi(mockedAxios, {});

    const decoded = await decoder.decodeEthereumTransaction(
      mockErc20TransferPayload
    );

    expect(decoded.decodedTransaction).toEqual({
      action: "erc20_transfer",
      data: {
        amount: "100000000000000",
        contract: "0x4BaDFb501Ab304fF11217C44702bb9E9732E7CF4",
        denom: "evm/4BaDFb501Ab304fF11217C44702bb9E9732E7CF4",
        from: "0xB395C9F2e84f75B1686FcDC62F8cB62a572b7820",
        to: "0xB395C9F2e84f75B1686FcDC62F8cB62a572b7820"
      }
    });

    expect(decoded.totalBalanceChanges).toEqual({
      ft: {
        "0xB395C9F2e84f75B1686FcDC62F8cB62a572b7820": {
          "evm/4BaDFb501Ab304fF11217C44702bb9E9732E7CF4": "0"
        }
      },
      nft: {},
      vm: "evm"
    });

    expect(decoded.metadata).toEqual({});
  });
});
