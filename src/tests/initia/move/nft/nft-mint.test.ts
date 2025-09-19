import {
  initialize,
  mockedAxios,
  resetMockApi,
  setupMockApi
} from "@/tests/_shared/helpers";

import { mockApiResponsesForNftMint, mockMsgNftMint } from "./nft-mint.fixture";

jest.mock("axios");

const decoder = initialize();

describe("NFT Mint Message", () => {
  beforeEach(() => {
    resetMockApi(mockedAxios);
  });

  it("should decode an NFT mint message correctly", async () => {
    setupMockApi(mockedAxios, mockApiResponsesForNftMint);

    const decoded = await decoder.decodeTransaction(mockMsgNftMint);

    expect(decoded.messages).toHaveLength(1);
    expect(decoded.messages[0].decodedMessage).toEqual({
      action: "nft_mint",
      data: {
        collection: {
          creator: "init1ulw753hxh4mrc9ss7p2y7h8emjxxyw6uce0hk9",
          description:
            "Food collection that I suggest - Discover amazing dishes and culinary experiences from around the world",
          name: "Favorite food",
          uri: "https://nft-rho-ten.vercel.app/favoritefood"
        },
        collectionAddress:
          "init1qktu60eh7g04n3m3wvdrr6f2cys57u45lz5x2sdffdg0qvy0fcsqk9gvt9",
        from: "init1ulw753hxh4mrc9ss7p2y7h8emjxxyw6uce0hk9",
        tokenAddress:
          "init1ata7vteyg83wen5emdx0h2effa6594uvutvzeg5duy76p2w5rwrqy2y24c",
        tokenId: "1",
        tokenUri: "https://nft-rho-ten.vercel.app/favoritefood/1"
      },
      isIbc: false,
      isOp: false
    });
    expect(decoded.messages[0].balanceChanges).toEqual({
      ft: {},
      object: {
        init1ulw753hxh4mrc9ss7p2y7h8emjxxyw6uce0hk9: {
          init1ata7vteyg83wen5emdx0h2effa6594uvutvzeg5duy76p2w5rwrqy2y24c: "1"
        }
      }
    });

    expect(decoded.totalBalanceChanges).toEqual({
      ft: {},
      object: {
        init1ulw753hxh4mrc9ss7p2y7h8emjxxyw6uce0hk9: {
          init1ata7vteyg83wen5emdx0h2effa6594uvutvzeg5duy76p2w5rwrqy2y24c: "1"
        }
      }
    });

    expect(decoded.metadata).toEqual({
      init1ata7vteyg83wen5emdx0h2effa6594uvutvzeg5duy76p2w5rwrqy2y24c: {
        collection: {
          creator: "init1ulw753hxh4mrc9ss7p2y7h8emjxxyw6uce0hk9",
          description:
            "Food collection that I suggest - Discover amazing dishes and culinary experiences from around the world",
          name: "Favorite food",
          uri: "https://nft-rho-ten.vercel.app/favoritefood"
        },
        collectionAddress:
          "init1qktu60eh7g04n3m3wvdrr6f2cys57u45lz5x2sdffdg0qvy0fcsqk9gvt9",
        tokenId: "1",
        tokenUri: "https://nft-rho-ten.vercel.app/favoritefood/1",
        type: "nft"
      }
    });
  });
});
