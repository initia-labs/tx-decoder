import { initialize } from "@/tests/_shared/helpers";

import {
  mockErc20ApprovePayload,
  mockErc721ApprovePayload
} from "./approve.fixture";

jest.mock("axios");

const decoder = initialize();

describe("Approve Decoder", () => {
  it("should decode ERC20 approve transaction correctly", async () => {
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

  it("should decode ERC721 approve transaction correctly", async () => {
    const decoded = await decoder.decodeEthereumTransaction(
      mockErc721ApprovePayload
    );

    expect(decoded.decodedTransaction).toEqual({
      action: "erc721_approve",
      data: {
        contract: "0x9a8b7c6d5e4f3a2B1C0d9e8F7a6b5c4D3e2f1A0b",
        from: "0xB395C9F2e84f75B1686FcDC62F8cB62a572b7820",
        spender: "0xE7DdeA46e6Bd763C1610F0544F5cf9dc8c623B5c",
        tokenId: "69"
      }
    });

    // ERC721 approve doesn't transfer tokens, so no balance changes expected
    expect(decoded.totalBalanceChanges).toEqual({
      ft: {},
      nft: {},
      vm: "evm"
    });
  });
});
