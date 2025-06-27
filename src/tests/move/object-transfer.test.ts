import { mockMsgObjectTransfer } from "@/tests/fixtures/move/object-transfer.fixture";

import { initialize } from "../helpers";

jest.mock("axios");
const decoder = initialize();

describe("Object Transfer Message", () => {
  it("should decode an object transfer message correctly", async () => {
    const decoded = await decoder.decodeTransaction(mockMsgObjectTransfer);

    expect(decoded.messages).toHaveLength(1);
    expect(decoded.messages[0].decodedMessage).toEqual({
      action: "object_transfer",
      data: {
        from: "init1ulw753hxh4mrc9ss7p2y7h8emjxxyw6uce0hk9",
        object: "0x481b5e2a539721bfa9f9b35e702adb667c059d0a8e1a030be483178abd928235",
        to: "init1t9k78msywte6jx4zrxkp94pa9u9laa9pqfpytk",
      },
      isIbc: false,
      isOp: false,
    });
    expect(decoded.messages[0].balanceChanges).toEqual({
      ft: {},
      object: {
        init1t9k78msywte6jx4zrxkp94pa9u9laa9pqfpytk: {
          init1fqd4u2jnjusml20ekd08q2kmve7qt8g23cdqxzlysvtc40vjsg6sk4p0kn: "1",
        },
        init1ulw753hxh4mrc9ss7p2y7h8emjxxyw6uce0hk9: {
          init1fqd4u2jnjusml20ekd08q2kmve7qt8g23cdqxzlysvtc40vjsg6sk4p0kn: "-1",
        },
      },
    });

    expect(decoded.totalBalanceChanges).toEqual({
      ft: {},
      object: {
        init1t9k78msywte6jx4zrxkp94pa9u9laa9pqfpytk: {
          init1fqd4u2jnjusml20ekd08q2kmve7qt8g23cdqxzlysvtc40vjsg6sk4p0kn: "1",
        },
        init1ulw753hxh4mrc9ss7p2y7h8emjxxyw6uce0hk9: {
          init1fqd4u2jnjusml20ekd08q2kmve7qt8g23cdqxzlysvtc40vjsg6sk4p0kn: "-1",
        },
      },
    });
  });
});
