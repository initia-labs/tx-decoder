import { initialize, mockedAxios, resetMockApi } from "@/tests/_shared/helpers";

import {
  mockCw721Transfer,
  mockCw721TransferBase64
} from "./cw721-transfer.fixture";

jest.mock("axios");

const decoder = initialize();

describe("CW-721 Transfer WASM", () => {
  beforeEach(() => {
    resetMockApi(mockedAxios);
  });

  it("should decode CW-721 NFT transfer transaction on WASM VM", async () => {
    const decoded =
      await decoder.decodeCosmosWasmTransaction(mockCw721Transfer);

    expect(decoded.messages).toHaveLength(1);
    expect(decoded.messages[0].decodedMessage).toMatchObject({
      action: "cw721_transfer",
      data: {
        contract: "init1nftcontract123456789abcdefghijkl",
        from: "init1sender123456789abcdefghijklmnopqr",
        to: "init1receiver123456789abcdefghijklmno",
        tokenId: "token123"
      },
      isIbc: false,
      isOp: false
    });

    // Check balance changes from wasm event
    expect(decoded.totalBalanceChanges).toMatchObject({
      nft: {
        init1receiver123456789abcdefghijklmno: {
          init1nftcontract123456789abcdefghijkl: {
            token123: "1"
          }
        },
        init1sender123456789abcdefghijklmnopqr: {
          init1nftcontract123456789abcdefghijkl: {
            token123: "-1"
          }
        }
      },
      vm: "wasm"
    });

    expect(decoded.metadata).toEqual({ data: {}, type: "wasm" });
  });

  it("should decode CW-721 NFT transfer with base64 encoded message", async () => {
    const decoded = await decoder.decodeCosmosWasmTransaction(
      mockCw721TransferBase64
    );

    expect(decoded.messages).toHaveLength(1);
    expect(decoded.messages[0].decodedMessage).toMatchObject({
      action: "cw721_transfer",
      data: {
        contract: "init1nftcontract123456789abcdefghijkl",
        from: "init1sender123456789abcdefghijklmnopqr",
        to: "init1newowner123456789abcdefghijklmno",
        tokenId: "nft456"
      },
      isIbc: false,
      isOp: false
    });

    // Check balance changes from wasm event
    expect(decoded.totalBalanceChanges).toMatchObject({
      nft: {
        init1newowner123456789abcdefghijklmno: {
          init1nftcontract123456789abcdefghijkl: {
            nft456: "1"
          }
        },
        init1sender123456789abcdefghijklmnopqr: {
          init1nftcontract123456789abcdefghijkl: {
            nft456: "-1"
          }
        }
      },
      vm: "wasm"
    });

    expect(decoded.metadata).toEqual({ data: {}, type: "wasm" });
  });
});
