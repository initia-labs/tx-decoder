import { initialize } from "@/tests/_shared/helpers";

import { mockErc721TransferFromPayload } from "./erc721-transfer-from.fixture";

jest.mock("axios");

const decoder = initialize();

describe("ERC721 TransferFrom Decoder", () => {
  it("should decode ERC721 transferFrom transaction correctly", async () => {
    const decoded = await decoder.decodeEthereumTransaction(
      mockErc721TransferFromPayload
    );

    expect(decoded.decodedTransaction).toEqual({
      action: "erc721_transfer_from",
      data: {
        contract: "0x5d4376b62fa8AC16dFabe6a9861E11c33A48C677",
        from: "0x19F8a98C3512cf16731De58f83318ec553314F46",
        owner: "0x19F8a98C3512cf16731De58f83318ec553314F46",
        to: "0x8F433715afa790Ee2B35986De88da9aaFdd0d2E3",
        tokenId: "4561"
      }
    });

    // Balance changes should reflect NFT transfer
    expect(decoded.totalBalanceChanges).toEqual({
      ft: {},
      nft: {
        "0x19F8a98C3512cf16731De58f83318ec553314F46": {
          "0x5d4376b62fa8ac16dfabe6a9861e11c33a48c677": {
            "4561": "-1"
          }
        },
        "0x8F433715afa790Ee2B35986De88da9aaFdd0d2E3": {
          "0x5d4376b62fa8ac16dfabe6a9861e11c33a48c677": {
            "4561": "1"
          }
        }
      },
      vm: "evm"
    });
  });
});
