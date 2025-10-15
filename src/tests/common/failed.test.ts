import { initialize } from "@/tests/_shared/helpers";
import { mockMsgFailed } from "@/tests/common/failed.fixture";

jest.mock("axios");

const decoder = initialize();

describe("Failed Transaction", () => {
  it("should handle failed transaction correctly", async () => {
    const { messages, metadata, totalBalanceChanges } =
      await decoder.decodeCosmosTransaction(mockMsgFailed);

    expect(messages).toHaveLength(1);

    expect(messages[0]).toEqual({
      balanceChanges: {
        ft: {},
        object: {},
        vm: "move"
      },
      decodedMessage: {
        action: "not_supported",
        data: {
          msgType: "/initia.move.v1.MsgExecute"
        },
        isIbc: false,
        isOp: false
      }
    });

    // Failed transactions should have no balance changes
    expect(totalBalanceChanges).toEqual({
      ft: {},
      object: {},
      vm: "move"
    });
    expect(metadata).toEqual({ data: {}, type: "move" });
  });
});
