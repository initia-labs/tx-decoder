import { mockMsgFinalizeTokenWithdrawal } from "@/fixtures/op-init/finalize-token-withdrawal.fixture";
import { decodeTransaction } from "@/index";

describe("Finalize Token Withdrawal Message", () => {
  it("should decode a finalize token withdrawal message correctly", () => {
    const decoded = decodeTransaction(mockMsgFinalizeTokenWithdrawal);

    expect(decoded.messages).toHaveLength(1);
    expect(decoded.messages[0]).toEqual({
      action: "op_finalize_withdraw",
      data: {
        amount: "716000000",
        bridgeId: "12",
        denom: "uinit",
        from: "init1r9th529cekjd0v3kryamks7yf6z832pqsapys7",
        to: "init1r9th529cekjd0v3kryamks7yf6z832pqsapys7",
      },
      isIbc: false,
      isOp: true,
    });

    expect(decoded.balanceChanges).toEqual({
      ft: {
        init1r9th529cekjd0v3kryamks7yf6z832pqsapys7: {
          uinit: "716000000",
        },
      },
      object: {},
    });
  });
});
