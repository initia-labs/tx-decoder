import { mockMsgObjectTransfer } from "@/tests/fixtures/move/object-transfer.fixture";
import { decodeTransaction } from "@/index";

describe("Object Transfer Message", () => {
  it("should decode an object transfer message correctly", () => {
    const decoded = decodeTransaction(mockMsgObjectTransfer);

    expect(decoded.messages).toHaveLength(1);
    expect(decoded.messages[0]).toEqual({
      action: "object_transfer",
      data: {
        from: "init1ulw753hxh4mrc9ss7p2y7h8emjxxyw6uce0hk9",
        object: "0x481b5e2a539721bfa9f9b35e702adb667c059d0a8e1a030be483178abd928235",
        to: "init1t9k78msywte6jx4zrxkp94pa9u9laa9pqfpytk",
      },
      isIbc: false,
      isOp: false,
    });

    expect(decoded.balanceChanges).toEqual({
      ft: {},
      object: {
        init1t9k78msywte6jx4zrxkp94pa9u9laa9pqfpytk: {
          "0x481b5e2a539721bfa9f9b35e702adb667c059d0a8e1a030be483178abd928235": "1",
        },
        init1ulw753hxh4mrc9ss7p2y7h8emjxxyw6uce0hk9: {
          "0x481b5e2a539721bfa9f9b35e702adb667c059d0a8e1a030be483178abd928235": "-1",
        },
      },
    });
  });
});
