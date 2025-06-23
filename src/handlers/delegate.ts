import { produce } from "immer";

import type { BalanceChanges, DecodedMessage, MessageDecoder } from "@/interfaces";
import type { Log, Message } from "@/schema";

import { SUPPORTED_MESSAGE_TYPES } from "@/message-types";
import { zMsgDelegate } from "@/schema";

export const delegateDecoder: MessageDecoder = {
  check: (message: Message, _log: Log) => message["@type"] === SUPPORTED_MESSAGE_TYPES.MsgDelegate,
  decode: (message: Message, _log: Log) => {
    const parsed = zMsgDelegate.safeParse(message);
    if (!parsed.success) {
      throw new Error("Invalid delegate message");
    }

    const { amount, delegator_address, validator_address } = parsed.data;

    const decodedMessage: DecodedMessage = {
      action: "delegate",
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
          draft[delegator_address][denom] = `-${amt}`;
        });
      }),
    };

    return { balanceChanges, decodedMessage };
  },
};
