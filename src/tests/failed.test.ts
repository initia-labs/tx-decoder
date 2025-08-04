import { mockMsgFailed } from "./fixtures/failed.fixture";
import { initialize } from "./helpers";

jest.mock("axios");

const decoder = initialize();

describe("Failed Transaction", () => {
  it("should handle failed transaction correctly", async () => {
    const { messages, metadata, totalBalanceChanges } =
      await decoder.decodeTransaction(mockMsgFailed);

    expect(messages).toHaveLength(1);

    expect(messages[0]).toEqual({
      balanceChanges: {
        ft: {},
        object: {}
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
      object: {}
    });
    expect(metadata).toEqual({});
  });
});
