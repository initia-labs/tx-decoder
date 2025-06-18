import { produce } from "immer";

import type { BalanceChanges, DecodedMessage, MessageDecoder } from "@/interfaces";

import { SUPPORTED_MESSAGE_TYPES } from "@/message-types";
import { type Log, type Message, zMsgWithdrawDelegatorReward } from "@/schema";
import { findAttribute, parseCoins } from "@/utils";

export const withdrawDelegatorRewardDecoder: MessageDecoder = {
  check: (message: Message, _log: Log) => message["@type"] === SUPPORTED_MESSAGE_TYPES.MsgWithdrawDelegatorReward,
  decode: (message: Message, log: Log) => {
    const parsed = zMsgWithdrawDelegatorReward.safeParse(message);
    if (!parsed.success) {
      throw new Error("Invalid withdraw delegator reward message");
    }

    const amount = findAttribute(log, "coin_received", "amount").value;

    const { delegator_address, validator_address } = parsed.data;

    const coins = parseCoins(amount);

    const decodedMessage: DecodedMessage = {
      action: "withdraw_delegator_reward",
      data: {
        coins,
        from: delegator_address,
        validatorAddress: validator_address,
      },
      isIbc: false,
      isOp: false,
    };

    const balanceChanges: Partial<BalanceChanges> = {
      ft: produce<BalanceChanges["ft"]>({}, (draft) => {
        coins.forEach((coin) => {
          draft[delegator_address] ??= {};
          draft[delegator_address][coin.denom] = coin.amount;
        });
      }),
    };

    return {
      balanceChanges,
      decodedMessage,
    };
  },
};
