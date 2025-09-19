import {
  initialize,
  mockedAxios,
  resetMockApi,
  setupMockApi
} from "@/tests/_shared/helpers";

import { mockApiResponsesForNftBurn, mockMsgNftBurn } from "./nft-burn.fixture";

jest.mock("axios");
const decoder = initialize();

describe("NFT Burn Message", () => {
  beforeEach(() => {
    resetMockApi(mockedAxios);
  });

  it("should decode an NFT burn message correctly", async () => {
    setupMockApi(mockedAxios, mockApiResponsesForNftBurn);
    const decoded = await decoder.decodeTransaction(mockMsgNftBurn);

    expect(decoded.messages).toHaveLength(1);
    expect(decoded.messages[0].decodedMessage).toEqual({
      action: "nft_burn",
      data: {
        collection: {
          creator: "init1ulw753hxh4mrc9ss7p2y7h8emjxxyw6uce0hk9",
          description:
            "Saint Seiya - Knights of the Zodiac NFT Collection. Burn your Cosmos and fight for justice! Each NFT represents a legendary Bronze Saint.",
          name: "Saint Seiya - Knights of the Zodiac",
          uri: "https://nft-rho-ten.vercel.app/saint_seiya"
        },
        collectionAddress:
          "init1vjg8xlek3xqgv557es6z76470prdzt2q6l0j5nee9eklndt67r6qekakfx",
        from: "init1t9k78msywte6jx4zrxkp94pa9u9laa9pqfpytk",
        tokenAddress:
          "init18krehtxsewggnxavlgcrs4yceh2j9vr2deacx5hfuc425ypklq2q926m8u",
        tokenId: "1"
      },
      isIbc: false,
      isOp: false
    });

    expect(decoded.messages[0].balanceChanges).toEqual({
      ft: {},
      object: {
        init1t9k78msywte6jx4zrxkp94pa9u9laa9pqfpytk: {
          init18krehtxsewggnxavlgcrs4yceh2j9vr2deacx5hfuc425ypklq2q926m8u: "-1"
        }
      }
    });
    expect(decoded.totalBalanceChanges).toEqual({
      ft: {},
      object: {
        init1t9k78msywte6jx4zrxkp94pa9u9laa9pqfpytk: {
          init18krehtxsewggnxavlgcrs4yceh2j9vr2deacx5hfuc425ypklq2q926m8u: "-1"
        }
      }
    });

    // Since we don't have the metadata for the burned NFT, we expect an empty object
    expect(decoded.metadata).toEqual({});
  });
});
