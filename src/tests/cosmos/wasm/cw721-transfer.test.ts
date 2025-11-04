import { initialize, mockedAxios, resetMockApi } from "@/tests/_shared/helpers";

import { mockCw721Transfer } from "./cw721-transfer.fixture";

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
        contract:
          "init1qyygux5t4s3a3l25k8psxjydhtudu5lnt0tk0szm8q4s27xa980scjvh6c",
        from: "init1dw49mn7s2r5mskjdmus5hth80zz8wwaywycq06",
        to: "init1veaum7vy45fzw5x4mflskgx5lnmwmxx5wm3x8p",
        tokenId: "2"
      },
      isIbc: false,
      isOp: false
    });

    // Check balance changes - NFT transfers should generate balance changes
    expect(decoded.totalBalanceChanges).toMatchObject({
      ft: {},
      nft: {
        init1dw49mn7s2r5mskjdmus5hth80zz8wwaywycq06: {
          init1qyygux5t4s3a3l25k8psxjydhtudu5lnt0tk0szm8q4s27xa980scjvh6c: {
            "2": "-1"
          }
        },
        init1veaum7vy45fzw5x4mflskgx5lnmwmxx5wm3x8p: {
          init1qyygux5t4s3a3l25k8psxjydhtudu5lnt0tk0szm8q4s27xa980scjvh6c: {
            "2": "1"
          }
        }
      },
      vm: "wasm"
    });

    expect(decoded.metadata).toEqual({ data: {}, type: "wasm" });
  });
});
