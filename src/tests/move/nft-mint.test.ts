import {
  mockApiResponsesForNftMint,
  mockMsgNftMint,
} from "../fixtures/move/nft-mint.fixture";
import {
  initialize,
  mockedAxios,
  resetMockApi,
  setupMockApi,
} from "../helpers";

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
        collectionAddress:
          "0x597cd3f37f21f59c771731a31e92ac1214f72b4f8a86541a94b50f0308f4e20",
        tokenAddress:
          "0xeafbe62f2441e2ecce99db4cfbab294f7542d78ce2d82ca28de13da0a9d41b86",
        tokenId: "1",
      },
      isIbc: false,
      isOp: false,
    });
    expect(decoded.messages[0].balanceChanges).toEqual({
      ft: {},
      object: {
        init1ulw753hxh4mrc9ss7p2y7h8emjxxyw6uce0hk9: {
          init1ata7vteyg83wen5emdx0h2effa6594uvutvzeg5duy76p2w5rwrqy2y24c: "1",
        },
      },
    });

    expect(decoded.totalBalanceChanges).toEqual({
      ft: {},
      object: {
        init1ulw753hxh4mrc9ss7p2y7h8emjxxyw6uce0hk9: {
          init1ata7vteyg83wen5emdx0h2effa6594uvutvzeg5duy76p2w5rwrqy2y24c: "1",
        },
      },
    });
  });
});
