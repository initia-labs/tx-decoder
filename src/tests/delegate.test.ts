import { mockMsgDelegateLocked } from "@/tests/fixtures/delegate.fixture";

import { mockMsgDelegate, mockMsgDelegateWithMultipleCoins } from "./fixtures/delegate.fixture";
import { decodeTransaction } from "../index";

describe("Delegate Message", () => {
  it("should decode a delegate message correctly", () => {
    const decoded = decodeTransaction(mockMsgDelegate);

    expect(decoded.messages).toHaveLength(1);
    expect(decoded.messages[0]).toEqual({
      action: "delegate",
      data: {
        coins: [
          {
            amount: "100000",
            denom: "uinit",
          },
        ],
        delegatorAddress: "init1kw2unuhgfa6mz6r0ehrzlr9k9ftjk7pql8u5fm",
        validatorAddress: "initvaloper1cmlx2pqfgt2kpshe2fmc40epzvg699eqv3ax66",
      },
      isIbc: false,
      isOp: false,
    });

    expect(decoded.balanceChanges).toEqual({
      ft: {
        init1kw2unuhgfa6mz6r0ehrzlr9k9ftjk7pql8u5fm: {
          uinit: "-100000",
        },
      },
      object: {},
    });
  });

  it("should decode a delegate message with multiple coins correctly", () => {
    const decoded = decodeTransaction(mockMsgDelegateWithMultipleCoins);

    expect(decoded.messages).toHaveLength(1);
    expect(decoded.messages[0]).toEqual({
      action: "delegate",
      data: {
        coins: [
          {
            amount: "100000",
            denom: "uinit",
          },
          {
            amount: "400000",
            denom: "ustake",
          },
        ],
        delegatorAddress: "init1kw2unuhgfa6mz6r0ehrzlr9k9ftjk7pql8u5fm",
        validatorAddress: "initvaloper1cmlx2pqfgt2kpshe2fmc40epzvg699eqv3ax66",
      },
      isIbc: false,
      isOp: false,
    });

    expect(decoded.balanceChanges).toEqual({
      ft: {
        init1kw2unuhgfa6mz6r0ehrzlr9k9ftjk7pql8u5fm: {
          uinit: "-100000",
          ustake: "-400000",
        },
      },
      object: {},
    });
  });

  it("should decode a delegate locked message correctly", () => {
    const decoded = decodeTransaction(mockMsgDelegateLocked);

    expect(decoded.messages).toHaveLength(1);
    expect(decoded.messages[0]).toEqual({
      action: "delegate",
      data: {
        coins: [
          {
            amount: "400000",
            denom: "uinit",
          },
        ],
        delegatorAddress: "init1kw2unuhgfa6mz6r0ehrzlr9k9ftjk7pql8u5fm",
        validatorAddress: "initvaloper1qx6ghyv83caecuxgl77lvlnha9d9y6fntryc8a",
      },
      isIbc: false,
      isOp: false,
    });

    expect(decoded.balanceChanges).toEqual({
      ft: {
        init1kw2unuhgfa6mz6r0ehrzlr9k9ftjk7pql8u5fm: {
          uinit: "-400000",
        },
      },
      object: {},
    });
  });
});
