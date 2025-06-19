import {
  mockMsgWithdrawDelegatorReward,
  mockMsgWithdrawDelegatorRewardWithMultipleCoins,
} from "../fixtures/withdraw-delegator-reward.fixture";
import { decodeTransaction } from "../index";

describe("Withdraw Delegator Reward Message", () => {
  it("should decode a withdraw delegator reward message correctly", () => {
    const decoded = decodeTransaction(mockMsgWithdrawDelegatorReward);

    expect(decoded.messages).toHaveLength(1);
    expect(decoded.messages[0]).toEqual({
      action: "withdraw_delegator_reward",
      data: {
        coins: [{ amount: "33490255", denom: "uinit" }],
        from: "init13thkj7pxgr3l6hzymklfeprh0fka8n6mzckr78",
        validatorAddress: "initvaloper1gs7kwd5jm8ghnvx4z973aqcenfcej6ykpuydc4",
      },
      isIbc: false,
      isOp: false,
    });

    expect(decoded.balanceChanges).toEqual({
      ft: {
        init13thkj7pxgr3l6hzymklfeprh0fka8n6mzckr78: {
          uinit: "33490255",
        },
      },
      nft: {},
    });
  });

  it("should decode a withdraw delegator reward message with multiple coins correctly", () => {
    const decoded = decodeTransaction(mockMsgWithdrawDelegatorRewardWithMultipleCoins);

    expect(decoded.messages).toHaveLength(1);
    expect(decoded.messages[0]).toEqual({
      action: "withdraw_delegator_reward",
      data: {
        coins: [
          { amount: "33490255", denom: "uinit" },
          { amount: "99999", denom: "ustake" },
          { amount: "1000000", denom: "utoken" },
        ],
        from: "init13thkj7pxgr3l6hzymklfeprh0fka8n6mzckr78",
        validatorAddress: "initvaloper1gs7kwd5jm8ghnvx4z973aqcenfcej6ykpuydc4",
      },
      isIbc: false,
      isOp: false,
    });

    expect(decoded.balanceChanges).toEqual({
      ft: {
        init13thkj7pxgr3l6hzymklfeprh0fka8n6mzckr78: {
          uinit: "33490255",
          ustake: "99999",
          utoken: "1000000",
        },
      },
      nft: {},
    });
  });
});
