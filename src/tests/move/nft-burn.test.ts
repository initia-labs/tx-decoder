import { mockMsgNftBurn } from "../fixtures/move/nft-burn.fixture";
import { initialize } from "../helpers";

jest.mock("axios");
const decoder = initialize();

describe("NFT Burn Message", () => {
  it("should decode an NFT burn message correctly", async () => {
    const decoded = await decoder.decodeTransaction(mockMsgNftBurn);

    expect(decoded.messages).toHaveLength(1);
    expect(decoded.messages[0].decodedMessage).toEqual({
      action: "nft_burn",
      data: {
        collectionAddress:
          "init1vjg8xlek3xqgv557es6z76470prdzt2q6l0j5nee9eklndt67r6qekakfx",
        tokenAddress:
          "init18krehtxsewggnxavlgcrs4yceh2j9vr2deacx5hfuc425ypklq2q926m8u",
        tokenId: "1",
      },
      isIbc: false,
      isOp: false,
    });

    // expect(decoded.balanceChanges).toEqual({
    //   ft: {},
    //   object: {
    //     init1t9k78msywte6jx4zrxkp94pa9u9laa9pqfpytk: {
    //       "0x3d879bacd0cb90899bacfa30385498cdd522b06a6e7b8352e9e62aaa1036f814":
    //         "-1",
    //     },
    //   },
    // });

    // Since we don't have the metadata for the burned NFT, we expect an empty object
    expect(decoded.metadata).toEqual({});
  });
});
