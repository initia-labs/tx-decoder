import { initialize, mockedAxios, resetMockApi } from "@/tests/_shared/helpers";

import { mockCw20Transfer } from "./cw20-transfer.fixture";

jest.mock("axios");

const decoder = initialize();

describe("CW-20 Transfer WASM", () => {
  beforeEach(() => {
    resetMockApi(mockedAxios);
  });

  it("should decode CW-20 transfer transaction on WASM VM", async () => {
    const decoded = await decoder.decodeCosmosWasmTransaction(mockCw20Transfer);

    expect(decoded.messages).toHaveLength(1);
    expect(decoded.messages[0].decodedMessage).toMatchObject({
      action: "cw20_transfer",
      data: {
        amount: "1000",
        contract:
          "init1fuyxwxlsgjkfjmxfthq8427dm2am3ya3cwcdr8gls29l7jadtazswg0k5g",
        denom:
          "cw20:init1fuyxwxlsgjkfjmxfthq8427dm2am3ya3cwcdr8gls29l7jadtazswg0k5g",
        from: "init1dw49mn7s2r5mskjdmus5hth80zz8wwaywycq06",
        to: "init1c90j0nxt28ehunm53zfl2x8lrha27da8t3dmfl"
      },
      isIbc: false,
      isOp: false
    });

    // Check balance changes from wasm event
    expect(decoded.totalBalanceChanges).toMatchObject({
      ft: {
        init1c90j0nxt28ehunm53zfl2x8lrha27da8t3dmfl: {
          "cw20:init1fuyxwxlsgjkfjmxfthq8427dm2am3ya3cwcdr8gls29l7jadtazswg0k5g":
            "1000"
        },
        init1dw49mn7s2r5mskjdmus5hth80zz8wwaywycq06: {
          "cw20:init1fuyxwxlsgjkfjmxfthq8427dm2am3ya3cwcdr8gls29l7jadtazswg0k5g":
            "-1000"
        }
      },
      vm: "wasm"
    });

    expect(decoded.metadata).toEqual({ data: {}, type: "wasm" });
  });
});
