import { initialize, mockedAxios, resetMockApi } from "@/tests/_shared/helpers";

import { mockCw721Mint, mockCw721MintBase64 } from "./cw721-mint.fixture";

jest.mock("axios");

const decoder = initialize();

describe("CW-721 Mint WASM", () => {
  beforeEach(() => {
    resetMockApi(mockedAxios);
  });

  it("should decode CW-721 NFT mint transaction on WASM VM", async () => {
    const decoded = await decoder.decodeCosmosWasmTransaction(mockCw721Mint);

    expect(decoded.messages).toHaveLength(1);
    expect(decoded.messages[0].decodedMessage).toMatchObject({
      action: "cw721_mint",
      data: {
        contract: "init1nftcontract123456789abcdefghijkl",
        owner: "init1nftowner123456789abcdefghijklmno",
        tokenId: "newtoken789",
        tokenUri: "https://example.com/metadata/newtoken789.json"
      },
      isIbc: false,
      isOp: false
    });

    // Check balance changes from wasm event
    expect(decoded.totalBalanceChanges).toMatchObject({
      nft: {
        init1nftowner123456789abcdefghijklmno: {
          init1nftcontract123456789abcdefghijkl: {
            newtoken789: "1"
          }
        }
      },
      vm: "wasm"
    });

    expect(decoded.metadata).toEqual({ data: {}, type: "wasm" });
  });

  it("should decode CW-721 NFT mint with base64 encoded message and extension", async () => {
    const decoded =
      await decoder.decodeCosmosWasmTransaction(mockCw721MintBase64);

    expect(decoded.messages).toHaveLength(1);
    expect(decoded.messages[0].decodedMessage).toMatchObject({
      action: "cw721_mint",
      data: {
        contract: "init1nftcontract123456789abcdefghijkl",
        extension: {
          power: 100,
          rarity: "legendary"
        },
        owner: "init1specialowner123456789abcdefghijk",
        tokenId: "special999"
      },
      isIbc: false,
      isOp: false
    });

    // Should not have tokenUri since it's not provided in base64 fixture
    expect(decoded.messages[0].decodedMessage.data).not.toHaveProperty(
      "tokenUri"
    );

    // Check balance changes from wasm event
    expect(decoded.totalBalanceChanges).toMatchObject({
      nft: {
        init1specialowner123456789abcdefghijk: {
          init1nftcontract123456789abcdefghijkl: {
            special999: "1"
          }
        }
      },
      vm: "wasm"
    });

    expect(decoded.metadata).toEqual({ data: {}, type: "wasm" });
  });
});
