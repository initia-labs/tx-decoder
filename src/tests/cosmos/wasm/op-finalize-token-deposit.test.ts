import { initialize, mockedAxios, resetMockApi } from "@/tests/_shared/helpers";

import { mockFinalizeTokenDepositWasm } from "./op-finalize-token-deposit.fixture";

jest.mock("axios");

const decoder = initialize();

describe("OpInit Finalize Token Deposit (WASM)", () => {
  beforeEach(() => {
    resetMockApi(mockedAxios);
  });

  it("decodes opinit finalize token deposit on a WASM rollup", async () => {
    const decoded = await decoder.decodeCosmosWasmTransaction(
      mockFinalizeTokenDepositWasm
    );

    expect(decoded.messages).toHaveLength(1);
    expect(decoded.messages[0].decodedMessage).toEqual({
      action: "op_finalize_deposit",
      data: {
        amount: "10000",
        baseDenom: "uinit",
        denom:
          "l2/fb936ffef4eb4019d82941992cc09ae2788ce7197fcb08cb00c4fe6f5e79184e",
        from: "init1dw49mn7s2r5mskjdmus5hth80zz8wwaywycq06",
        height: "9071550",
        l1Sequence: "10353",
        sequence: "10353",
        success: true,
        to: "init1dw49mn7s2r5mskjdmus5hth80zz8wwaywycq06"
      },
      isIbc: false,
      isOp: true
    });

    expect(decoded.messages[0].balanceChanges).toEqual({
      ft: {
        init1dw49mn7s2r5mskjdmus5hth80zz8wwaywycq06: {
          "l2/fb936ffef4eb4019d82941992cc09ae2788ce7197fcb08cb00c4fe6f5e79184e":
            "10000"
        },
        init1gz9n8jnu9fgqw7vem9ud67gqjk5q4m2w0aejne: {
          "l2/fb936ffef4eb4019d82941992cc09ae2788ce7197fcb08cb00c4fe6f5e79184e":
            "-10000"
        }
      },
      vm: "wasm"
    });

    expect(decoded.totalBalanceChanges).toEqual({
      ft: {
        init1dw49mn7s2r5mskjdmus5hth80zz8wwaywycq06: {
          "l2/fb936ffef4eb4019d82941992cc09ae2788ce7197fcb08cb00c4fe6f5e79184e":
            "10000"
        },
        init1gz9n8jnu9fgqw7vem9ud67gqjk5q4m2w0aejne: {
          "l2/fb936ffef4eb4019d82941992cc09ae2788ce7197fcb08cb00c4fe6f5e79184e":
            "-10000"
        }
      },
      vm: "wasm"
    });

    expect(decoded.metadata).toEqual({ data: {}, type: "wasm" });
  });
});
