import { initialize, mockedAxios, resetMockApi } from "@/tests/_shared/helpers";

import {
  mockCw20Transfer,
  mockCw20TransferBase64
} from "./cw20-transfer.fixture";

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
        amount: "1000000",
        contract: "init1contractaddress123456789abcdefgh",
        from: "init1sender123456789abcdefghijklmnopqr",
        to: "init1receiver123456789abcdefghijklmno"
      },
      isIbc: false,
      isOp: false
    });

    // Check balance changes from wasm event
    expect(decoded.totalBalanceChanges).toMatchObject({
      ft: {
        init1receiver123456789abcdefghijklmno: {
          "cw20:init1contractaddress123456789abcdefgh": "1000000"
        },
        init1sender123456789abcdefghijklmnopqr: {
          "cw20:init1contractaddress123456789abcdefgh": "-1000000"
        }
      },
      vm: "wasm"
    });

    expect(decoded.metadata).toEqual({ data: {}, type: "wasm" });
  });

  it("should decode CW-20 transfer with base64 encoded message", async () => {
    const decoded = await decoder.decodeCosmosWasmTransaction(
      mockCw20TransferBase64
    );

    expect(decoded.messages).toHaveLength(1);
    expect(decoded.messages[0].decodedMessage).toMatchObject({
      action: "cw20_transfer",
      data: {
        amount: "500000",
        contract: "init1contractaddress123456789abcdefgh",
        from: "init1sender123456789abcdefghijklmnopqr",
        to: "init1receiver123456789abcdefghijklmno"
      },
      isIbc: false,
      isOp: false
    });

    // Check balance changes from wasm event
    expect(decoded.totalBalanceChanges).toMatchObject({
      ft: {
        init1receiver123456789abcdefghijklmno: {
          "cw20:init1contractaddress123456789abcdefgh": "500000"
        },
        init1sender123456789abcdefghijklmnopqr: {
          "cw20:init1contractaddress123456789abcdefgh": "-500000"
        }
      },
      vm: "wasm"
    });

    expect(decoded.metadata).toEqual({ data: {}, type: "wasm" });
  });
});
