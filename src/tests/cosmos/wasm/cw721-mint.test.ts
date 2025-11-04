import { initialize, mockedAxios, resetMockApi } from "@/tests/_shared/helpers";

import { mockCw721Mint } from "./cw721-mint.fixture";

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
        contract:
          "init1qyygux5t4s3a3l25k8psxjydhtudu5lnt0tk0szm8q4s27xa980scjvh6c",
        owner: "init1dw49mn7s2r5mskjdmus5hth80zz8wwaywycq06",
        tokenId: "1",
        tokenUri: "https://nft-rho-ten.vercel.app/saint_seiya/1.json"
      },
      isIbc: false,
      isOp: false
    });

    // Check balance changes from wasm event
    expect(decoded.totalBalanceChanges).toMatchObject({
      nft: {
        init1dw49mn7s2r5mskjdmus5hth80zz8wwaywycq06: {
          init1qyygux5t4s3a3l25k8psxjydhtudu5lnt0tk0szm8q4s27xa980scjvh6c: {
            "1": "1"
          }
        }
      },
      vm: "wasm"
    });

    expect(decoded.metadata).toEqual({ data: {}, type: "wasm" });
  });
});
