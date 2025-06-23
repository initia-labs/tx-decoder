import { mockMsgRedelegate } from "@/fixtures/redelegate.fixture";

import { decodeTransaction } from "../index";

describe("Redelegate Message", () => {
  it("should decode a redelegate message correctly", () => {
    const decoded = decodeTransaction(mockMsgRedelegate);

    expect(decoded.messages).toHaveLength(1);
    expect(decoded.messages[0]).toEqual({
      action: "redelegate",
      data: {
        coins: [
          {
            amount: "49340",
            denom: "uinit",
          },
        ],
        delegatorAddress: "init1kw2unuhgfa6mz6r0ehrzlr9k9ftjk7pql8u5fm",
        validatorDstAddress: "initvaloper19uzc087w778p0l333w52ju0dgsajcj6ydep4rm",
        validatorSrcAddress: "initvaloper1cmlx2pqfgt2kpshe2fmc40epzvg699eqv3ax66",
      },
      isIbc: false,
      isOp: false,
    });

    expect(decoded.balanceChanges).toEqual({
      ft: {
        initvaloper1cmlx2pqfgt2kpshe2fmc40epzvg699eqv3ax66: {
          uinit: "-49340",
        },
        initvaloper19uzc087w778p0l333w52ju0dgsajcj6ydep4rm: {
          uinit: "49340",
        },
      },
      nft: {},
    });
  });
});
