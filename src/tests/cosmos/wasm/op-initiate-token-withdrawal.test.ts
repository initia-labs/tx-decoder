import { initialize, mockedAxios, resetMockApi } from "@/tests/_shared/helpers";

import { mockInitiateTokenWithdrawalWasm } from "./op-initiate-token-withdrawal.fixture";

jest.mock("axios");

const decoder = initialize();

describe("OpInit Initiate Token Withdrawal (WASM)", () => {
  beforeEach(() => {
    resetMockApi(mockedAxios);
  });

  it("decodes opinit initiate withdrawal on a WASM rollup", async () => {
    const decoded = await decoder.decodeCosmosWasmTransaction(
      mockInitiateTokenWithdrawalWasm
    );

    expect(decoded.messages).toHaveLength(1);
    expect(decoded.messages[0].decodedMessage).toEqual({
      action: "op_initiate_withdraw",
      data: {
        amount: "1000",
        baseDenom: "uinit",
        denom:
          "l2/fb936ffef4eb4019d82941992cc09ae2788ce7197fcb08cb00c4fe6f5e79184e",
        from: "init1dw49mn7s2r5mskjdmus5hth80zz8wwaywycq06",
        l2Sequence: "256",
        to: "init1dw49mn7s2r5mskjdmus5hth80zz8wwaywycq06"
      },
      isIbc: false,
      isOp: true
    });

    expect(decoded.messages[0].balanceChanges).toEqual({
      ft: {
        init1dw49mn7s2r5mskjdmus5hth80zz8wwaywycq06: {
          "l2/fb936ffef4eb4019d82941992cc09ae2788ce7197fcb08cb00c4fe6f5e79184e":
            "-1000"
        },
        init1gz9n8jnu9fgqw7vem9ud67gqjk5q4m2w0aejne: {
          "l2/fb936ffef4eb4019d82941992cc09ae2788ce7197fcb08cb00c4fe6f5e79184e":
            "1000"
        }
      },
      vm: "wasm"
    });

    expect(decoded.totalBalanceChanges).toEqual({
      ft: {
        init1dw49mn7s2r5mskjdmus5hth80zz8wwaywycq06: {
          "l2/fb936ffef4eb4019d82941992cc09ae2788ce7197fcb08cb00c4fe6f5e79184e":
            "-1000"
        },
        init1gz9n8jnu9fgqw7vem9ud67gqjk5q4m2w0aejne: {
          "l2/fb936ffef4eb4019d82941992cc09ae2788ce7197fcb08cb00c4fe6f5e79184e":
            "1000"
        }
      },
      vm: "wasm"
    });

    expect(decoded.metadata).toEqual({ data: {}, type: "wasm" });
  });
});
