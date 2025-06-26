import axios from "axios";

import { mockApiResponsesNftMint, mockMsgNftMint } from "../fixtures/move/nft-mint.fixture";
import { createMockApiHandler, initialize } from "../helpers";

jest.mock("axios");
const decoder = initialize();
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("NFT Mint Message", () => {
  beforeEach(() => {
    mockedAxios.get.mockReset();
  });

  it("should decode an NFT mint message correctly", async () => {
    mockedAxios.get.mockImplementation(createMockApiHandler(mockApiResponsesNftMint));

    const decoded = await decoder.decodeTransaction(mockMsgNftMint);

    expect(decoded.messages).toHaveLength(1);
    expect(decoded.messages[0].decodedMessage).toEqual({
      action: "nft_mint",
      data: {
        collection_address: "0x597cd3f37f21f59c771731a31e92ac1214f72b4f8a86541a94b50f0308f4e20",
        token_address: "0xeafbe62f2441e2ecce99db4cfbab294f7542d78ce2d82ca28de13da0a9d41b86",
        token_id: "1",
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
