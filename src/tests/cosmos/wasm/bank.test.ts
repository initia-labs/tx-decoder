import { initialize, mockedAxios, resetMockApi } from "@/tests/_shared/helpers";

import { mockMsgSendWasm } from "./bank.fixture";

jest.mock("axios");

const decoder = initialize();

describe("Bank Send WASM", () => {
  beforeEach(() => {
    resetMockApi(mockedAxios);
  });

  it("should decode bank send transaction on WASM VM", async () => {
    const decoded = await decoder.decodeCosmosWasmTransaction(mockMsgSendWasm);

    expect(decoded.messages).toHaveLength(1);
    expect(decoded.messages[0].decodedMessage).toMatchObject({
      action: "send",
      data: {
        coins: [
          {
            amount: "41",
            denom:
              "l2/fb936ffef4eb4019d82941992cc09ae2788ce7197fcb08cb00c4fe6f5e79184e"
          }
        ],
        from: "init1yrs3xrph7pj6napfud94t8zr9ldkcz4z7dvyx9",
        to: "init1jwte7rs3p5clnmn73at9ft2s3ad246dvtec8uh"
      }
    });

    // Check balance changes
    expect(decoded.totalBalanceChanges).toMatchObject({
      ft: {
        init1jwte7rs3p5clnmn73at9ft2s3ad246dvtec8uh: {
          "l2/fb936ffef4eb4019d82941992cc09ae2788ce7197fcb08cb00c4fe6f5e79184e":
            "41"
        },
        init1yrs3xrph7pj6napfud94t8zr9ldkcz4z7dvyx9: {
          "l2/fb936ffef4eb4019d82941992cc09ae2788ce7197fcb08cb00c4fe6f5e79184e":
            "-41"
        }
      },
      vm: "wasm"
    });

    expect(decoded.metadata).toEqual({ data: {}, type: "wasm" });
  });
});
