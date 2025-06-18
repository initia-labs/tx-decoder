import { produce } from "immer";

import { BalanceChanges, DecodedMessage, MessageHandler } from "../interfaces";
import { Message, zMsgWithdrawDelegatorReward } from "../schema";

export const handleWithdrawDelegatorReward: MessageHandler = (
  message: Message
) => {
  const parsed = zMsgWithdrawDelegatorReward.safeParse(message);
  if (!parsed.success) {
    throw new Error("Invalid withdraw delegator reward message");
  }

  const { delegator_address, validator_address } = parsed.data;

  const decodedMessage: DecodedMessage = {
    action: "withdraw_delegator_reward",
    data: {
      from: delegator_address,
      reward: "0",
      validator: {
        description: {
          details: "",
          identity: "",
          moniker: "",
          security_contact: "",
          website: "",
        },
        operator_address: validator_address,
      },
    },
    isIbc: false,
    isOp: false,
  };

  const balanceChanges: Partial<BalanceChanges> = {
    ft: produce<BalanceChanges["ft"]>({}, (draft) => {
      draft[validator_address] = {
        amount: "0",
        denom: "uinit",
      };
    }),
  };

  return {
    balanceChanges,
    decodedMessage,
  };
};
