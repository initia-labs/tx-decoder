import { mockMsgNFTMint } from "@/fixtures/move/nft-mint.fixture";
import { decodeTransaction } from "@/index";

describe("NFT Mint Message", () => {
  it("should decode an NFT mint message correctly", () => {
    const decoded = decodeTransaction(mockMsgNFTMint);

    expect(decoded.messages).toHaveLength(1);
    expect(decoded.messages[0]).toEqual({
      action: "nft_mint",
      data: {
        collection_address: "0x597cd3f37f21f59c771731a31e92ac1214f72b4f8a86541a94b50f0308f4e20",
        token_address: "0xeafbe62f2441e2ecce99db4cfbab294f7542d78ce2d82ca28de13da0a9d41b86",
        token_id: "1",
        token_uri: null,
      },
      isIbc: false,
      isOp: false,
    });

    expect(decoded.balanceChanges).toEqual({
      ft: {},
      nft: {},
    });
  });
});
