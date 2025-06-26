import { mockMsgDelegateLocked } from "@/tests/fixtures/delegate.fixture";

import {
  mockMsgDelegate,
  mockMsgDelegateWithMultipleCoins,
} from "./fixtures/delegate.fixture";
import { initialize } from "./helpers";

jest.mock("axios");
const decoder = initialize();

describe("Delegate Message", () => {
  it("should decode a delegate message correctly", async () => {
    const decoded = await decoder.decodeTransaction(mockMsgDelegate);

    expect(decoded.messages).toHaveLength(1);
    expect(decoded.messages[0].decodedMessage).toEqual({
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

    // expect(decoded.balanceChanges).toEqual({
    //   ft: {
    //     init1kw2unuhgfa6mz6r0ehrzlr9k9ftjk7pql8u5fm: {
    //       uinit: "-100000",
    //     },
    //   },
    //   object: {},
    // });
  });

  it("should decode a delegate message with multiple coins correctly", async () => {
    const decoded = await decoder.decodeTransaction(
      mockMsgDelegateWithMultipleCoins
    );

    expect(decoded.messages).toHaveLength(1);
    expect(decoded.messages[0].decodedMessage).toEqual({
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

    // expect(decoded.balanceChanges).toEqual({
    //   ft: {
    //     init1kw2unuhgfa6mz6r0ehrzlr9k9ftjk7pql8u5fm: {
    //       uinit: "-100000",
    //       ustake: "-400000",
    //     },
    //   },
    //   object: {},
    // });
  });

  it("should decode a delegate locked message correctly", async () => {
    const decoded = await decoder.decodeTransaction(mockMsgDelegateLocked);

    expect(decoded.messages).toHaveLength(1);
    expect(decoded.messages[0].decodedMessage).toEqual({
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

    // expect(decoded.balanceChanges).toEqual({
    //   ft: {
    //     init1kw2unuhgfa6mz6r0ehrzlr9k9ftjk7pql8u5fm: {
    //       uinit: "-400000",
    //     },
    //   },
    //   object: {},
    // });
  });
});
