import { mockMsgTransfer } from "../fixtures/ibc/transfer.fixture";
import { initialize } from "../helpers";

const decoder = initialize();

describe("IBC Transfer Decoder", () => {
  it("should decode IBC transfer message", async () => {
    const decoded = await decoder.decodeTransaction(mockMsgTransfer);

    expect(decoded.messages).toHaveLength(1);
    expect(decoded.messages[0].decodedMessage).toEqual({
      action: "ibc_transfer",
      data: {
        amount: "200000",
        denom: "uinit",
        destinationChannel: "channel-0",
        destinationPort: "transfer",
        receiver: "init1kw2unuhgfa6mz6r0ehrzlr9k9ftjk7pql8u5fm",
        sender: "init1kw2unuhgfa6mz6r0ehrzlr9k9ftjk7pql8u5fm",
        sourceChannel: "channel-29",
        sourcePort: "transfer",
      },
      isIbc: true,
      isOp: false,
    });
    expect(decoded.messages[0].balanceChanges).toEqual({
      ft: {
        uinit: "200000",
      },
      object: {},
    });
    expect(decoded.totalBalanceChanges).toEqual({
      ft: {
        uinit: "200000",
      },
      object: {},
    });
  });
});
