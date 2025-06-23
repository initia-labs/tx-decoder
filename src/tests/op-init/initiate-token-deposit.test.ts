import { mockMsgInitiateTokenDeposit } from "@/fixtures/op-init/initiate-token-deposit.fixture";
import { decodeTransaction } from "@/index";

describe("Initiate Token Deposit Message", () => {
  it("should decode an initiate token deposit message correctly", () => {
    const decoded = decodeTransaction(mockMsgInitiateTokenDeposit);

    expect(decoded.messages).toHaveLength(1);
    expect(decoded.messages[0]).toEqual({
      action: "op_deposit",
      data: {
        amount: "360000000",
        bridgeId: "30",
        denom: "uinit",
        from: "init1s3qauqxfmtqhmvpwpfgrka9944me2s0jn52qfe",
        to: "init1s3qauqxfmtqhmvpwpfgrka9944me2s0jn52qfe",
      },
      isIbc: false,
      isOp: true,
    });

    expect(decoded.balanceChanges).toEqual({
      ft: {
        init1s3qauqxfmtqhmvpwpfgrka9944me2s0jn52qfe: {
          uinit: "-360000000",
        },
      },
      object: {},
    });
  });
});
