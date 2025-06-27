import axios from "axios";

import {
  mockApiResponsesWithdrawDelegatorReward,
  mockMsgWithdrawDelegatorReward,
} from "./fixtures/withdraw-delegator-reward.fixture";
import { createMockApiHandler, initialize } from "./helpers";

jest.mock("axios");

const decoder = initialize();
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("Withdraw Delegator Reward Message", () => {
  it("should decode a withdraw delegator reward message correctly", async () => {
    const mockApiHandler = createMockApiHandler(mockApiResponsesWithdrawDelegatorReward);
    mockedAxios.get.mockImplementation(mockApiHandler);

    const decoded = await decoder.decodeTransaction(mockMsgWithdrawDelegatorReward);

    const { messages, totalBalanceChanges } = decoded;
    const { balanceChanges, decodedMessage } = messages[0];

    expect(messages).toHaveLength(1);

    expect(decodedMessage).toEqual({
      action: "withdraw_delegator_reward",
      data: {
        coins: [{ amount: "33490255", denom: "uinit" }],
        from: "init13thkj7pxgr3l6hzymklfeprh0fka8n6mzckr78",
        validatorAddress: "initvaloper1gs7kwd5jm8ghnvx4z973aqcenfcej6ykpuydc4",
      },
      isIbc: false,
      isOp: false,
    });

    expect(balanceChanges).toEqual({
      ft: {
        init1jv65s3grqf6v6jl3dp4t6c9t9rk99cd8ffy0za: { uinit: "-33490255" },
        init13thkj7pxgr3l6hzymklfeprh0fka8n6mzckr78: { uinit: "33490255" },
      },
      object: {},
    });

    expect(totalBalanceChanges).toEqual({
      ft: {
        init1jv65s3grqf6v6jl3dp4t6c9t9rk99cd8ffy0za: {
          uinit: "-33490255",
        },
        init13thkj7pxgr3l6hzymklfeprh0fka8n6mzckr78: {
          uinit: "33490255",
        },
      },
      object: {},
    });
  });
});
