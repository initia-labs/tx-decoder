import {
  mockApiResponsesForWithdrawDelegatorReward,
  mockApiResponsesForWithdrawDelegatorRewardLocked,
  mockMsgWithdrawDelegatorReward,
  mockMsgWithdrawDelegatorRewardLocked
} from "./fixtures/withdraw-delegator-reward.fixture";
import { initialize, mockedAxios, resetMockApi, setupMockApi } from "./helpers";

jest.mock("axios");

const decoder = initialize();

describe("Withdraw Delegator Reward Message", () => {
  beforeEach(() => {
    resetMockApi(mockedAxios);
  });

  it("should decode a withdraw delegator reward message correctly", async () => {
    setupMockApi(mockedAxios, mockApiResponsesForWithdrawDelegatorReward);

    const { messages, totalBalanceChanges } = await decoder.decodeTransaction(
      mockMsgWithdrawDelegatorReward
    );

    const { balanceChanges, decodedMessage } = messages[0];

    expect(messages).toHaveLength(1);

    expect(decodedMessage).toEqual({
      action: "withdraw_delegator_reward",
      data: {
        coins: [{ amount: "33490255", denom: "uinit" }],
        delegatorAddress: "init13thkj7pxgr3l6hzymklfeprh0fka8n6mzckr78",
        validator: {
          description: {
            details: "",
            identity: "1F41B95A84CFA4B6",
            moniker: "Inertia Foundation | 🎁 Delegation Drop 🎁",
            security_contact: "",
            website: "https://inrt.fi"
          },
          operator_address: "initvaloper1gs7kwd5jm8ghnvx4z973aqcenfcej6ykpuydc4"
        },
        validatorAddress: "initvaloper1gs7kwd5jm8ghnvx4z973aqcenfcej6ykpuydc4"
      },
      isIbc: false,
      isOp: false
    });

    expect(balanceChanges).toEqual({
      ft: {
        init1jv65s3grqf6v6jl3dp4t6c9t9rk99cd8ffy0za: { uinit: "-33490255" },
        init13thkj7pxgr3l6hzymklfeprh0fka8n6mzckr78: { uinit: "33490255" }
      },
      object: {}
    });

    expect(totalBalanceChanges).toEqual({
      ft: {
        init1jv65s3grqf6v6jl3dp4t6c9t9rk99cd8ffy0za: {
          uinit: "-33490255"
        },
        init13thkj7pxgr3l6hzymklfeprh0fka8n6mzckr78: {
          uinit: "33490255"
        }
      },
      object: {}
    });
  });

  it("should decode a withdraw delegator reward locked message correctly", async () => {
    setupMockApi(mockedAxios, mockApiResponsesForWithdrawDelegatorRewardLocked);

    const { messages, totalBalanceChanges } = await decoder.decodeTransaction(
      mockMsgWithdrawDelegatorRewardLocked
    );

    const { balanceChanges, decodedMessage } = messages[0];

    expect(messages).toHaveLength(1);
    expect(decodedMessage).toEqual({
      action: "withdraw_delegator_reward",
      data: {
        coins: [{ amount: "130", denom: "uinit" }],
        delegatorAddress: "init1kw2unuhgfa6mz6r0ehrzlr9k9ftjk7pql8u5fm",
        validator: {
          description: {
            details:
              "Secure, enterprise-grade validator committed to investing heavily in educating, promoting, and expanding the Initia community and ecosystem.",
            identity: "A2879F08F59FB0AF",
            moniker: "Orbital Command",
            security_contact: "",
            website: "https://orbitalcommand.io"
          },
          operator_address: "initvaloper1qx6ghyv83caecuxgl77lvlnha9d9y6fntryc8a"
        },
        validatorAddress: "initvaloper1qx6ghyv83caecuxgl77lvlnha9d9y6fntryc8a"
      },
      isIbc: false,
      isOp: false
    });

    expect(balanceChanges).toEqual({
      ft: {
        init1jv65s3grqf6v6jl3dp4t6c9t9rk99cd8ffy0za: { uinit: "-130" },
        init1kw2unuhgfa6mz6r0ehrzlr9k9ftjk7pql8u5fm: { uinit: "130" },
        init1q42q8rd6a9yyy7um0kqc4xqgudn8tjpxwezt9rd9udaycccd4tys30hvzx: {
          uinit: "0"
        }
      },
      object: {}
    });

    expect(totalBalanceChanges).toEqual({
      ft: {
        init1jv65s3grqf6v6jl3dp4t6c9t9rk99cd8ffy0za: {
          uinit: "-130"
        },
        init1kw2unuhgfa6mz6r0ehrzlr9k9ftjk7pql8u5fm: {
          uinit: "130"
        },
        init1q42q8rd6a9yyy7um0kqc4xqgudn8tjpxwezt9rd9udaycccd4tys30hvzx: {
          uinit: "0"
        }
      },
      object: {}
    });
  });
});
