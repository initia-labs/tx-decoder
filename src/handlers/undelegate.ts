import { produce } from "immer";

import type { BalanceChanges, DecodedMessage, MessageDecoder } from "@/interfaces";
import type { Log, Message } from "@/schema";

import { SUPPORTED_MESSAGE_TYPES } from "@/message-types";
import { zMsgUndelegate } from "@/schema";

export const undelegateDecoder: MessageDecoder = {
  check: (message: Message, _log: Log) =>
    message["@type"] === SUPPORTED_MESSAGE_TYPES.MsgUndelegate,
  decode: (message: Message, _log: Log) => {
    const parsed = zMsgUndelegate.safeParse(message);
    if (!parsed.success) {
      throw new Error("Invalid undelegate message");
    }

    const { amount, delegator_address, validator_address } = parsed.data;

    const decodedMessage: DecodedMessage = {
      action: "undelegate",
      data: {
        coins: amount,
        delegatorAddress: delegator_address,
        validatorAddress: validator_address,
      },
      isIbc: false,
      isOp: false,
    };

    const balanceChanges: Partial<BalanceChanges> = {
      ft: produce<BalanceChanges["ft"]>({}, (draft) => {
        amount.forEach(({ amount: amt, denom }) => {
          draft[delegator_address] ??= {};
          draft[delegator_address][denom] = amt;
        });
      }),
    };

    return { balanceChanges, decodedMessage };
  },
};
