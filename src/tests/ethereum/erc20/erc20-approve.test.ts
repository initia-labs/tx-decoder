import {
  initialize,
  mockedAxios,
  resetMockApi,
  setupMockApi
} from "@/tests/_shared/helpers";

import {
  mockApiResponsesForErc20Approve,
  mockErc20ApprovePayload
} from "./erc20-approve.fixture";

jest.mock("axios");

const decoder = initialize();

describe("ERC20 Approve Decoder", () => {
  beforeEach(() => {
    resetMockApi(mockedAxios);
  });

  it("should decode ERC20 approve transaction correctly", async () => {
    setupMockApi(mockedAxios, mockApiResponsesForErc20Approve);

    const decoded = await decoder.decodeEthereumTransaction(
      mockErc20ApprovePayload
    );

    expect(decoded.decodedTransaction).toEqual({
      action: "erc20_approve",
      data: {
        amount: "1000000000",
        contract: "0x4BaDFb501Ab304fF11217C44702bb9E9732E7CF4",
        denom: "evm/4BaDFb501Ab304fF11217C44702bb9E9732E7CF4",
        from: "0xB395C9F2e84f75B1686FcDC62F8cB62a572b7820",
        spender: "0xE7DdeA46e6Bd763C1610F0544F5cf9dc8c623B5c"
      }
    });

    // ERC20 approve doesn't transfer tokens, so no balance changes expected
    expect(decoded.totalBalanceChanges).toEqual({
      ft: {},
      nft: {},
      vm: "evm"
    });
  });
});
