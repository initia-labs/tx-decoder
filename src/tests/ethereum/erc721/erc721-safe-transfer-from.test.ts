import { initialize } from "@/tests/_shared/helpers";

import { mockErc721SafeTransferFromPayload } from "./erc721-safe-transfer-from.fixture";

jest.mock("axios");

const decoder = initialize();

describe("ERC721 SafeTransferFrom Decoder", () => {
  it("should decode ERC721 safeTransferFrom transaction correctly", async () => {
    const decoded = await decoder.decodeEthereumTransaction(
      mockErc721SafeTransferFromPayload
    );

    expect(decoded.decodedTransaction).toEqual({
      action: "erc721_safe_transfer_from",
      data: {
        contract: "0x5d4376b62fa8AC16dFabe6a9861E11c33A48C677",
        from: "0x9a217E4D243148890b4626d87CF327Ec12a5c266",
        to: "0xDc945a8cE61C20Ae2a39381B23E5362Ba51c1b99",
        tokenId: "8884"
      }
    });

    // Balance changes should reflect both gas fees (from ERC-20 Transfer logs)
    // and NFT transfer (from ERC-721 Transfer log)
    expect(decoded.totalBalanceChanges).toEqual({
      ft: {
        "0x9a217E4D243148890b4626d87CF327Ec12a5c266": {
          "evm/E1Ff7038eAAAF027031688E1535a055B2Bac2546": "-932340000001"
        },
        "0xf1829676DB577682E944fc3493d451B67Ff3E29F": {
          "evm/E1Ff7038eAAAF027031688E1535a055B2Bac2546": "932340000001"
        }
      },
      nft: {
        "0x9a217E4D243148890b4626d87CF327Ec12a5c266": {
          "0x5d4376b62fa8ac16dfabe6a9861e11c33a48c677": {
            "8884": "-1"
          }
        },
        "0xDc945a8cE61C20Ae2a39381B23E5362Ba51c1b99": {
          "0x5d4376b62fa8ac16dfabe6a9861e11c33a48c677": {
            "8884": "1"
          }
        }
      },
      vm: "evm"
    });
  });
});
