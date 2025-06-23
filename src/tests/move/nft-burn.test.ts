import { mockMsgNFTBurn } from "@/fixtures/move/nft-burn.fixture";
import { decodeTransaction } from "@/index";

describe("NFT Burn Message", () => {
  it("should decode an NFT burn message correctly", () => {
    const decoded = decodeTransaction(mockMsgNFTBurn);

    expect(decoded.messages).toHaveLength(1);
    expect(decoded.messages[0]).toEqual({
      action: "nft_burn",
      data: {
        collection_address: "0x6490737f36898086529ecc342f6abe7846d12d40d7df2a4f392e6df9b57af0f4",
        token_address: "0x3d879bacd0cb90899bacfa30385498cdd522b06a6e7b8352e9e62aaa1036f814",
        token_id: "1",
      },
      isIbc: false,
      isOp: false,
    });

    expect(decoded.balanceChanges).toEqual({
      ft: {},
      object: {
        init1t9k78msywte6jx4zrxkp94pa9u9laa9pqfpytk: {
          "0x3d879bacd0cb90899bacfa30385498cdd522b06a6e7b8352e9e62aaa1036f814": "-1",
        },
      },
    });
  });
});
