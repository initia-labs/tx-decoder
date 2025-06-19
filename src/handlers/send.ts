import { produce } from "immer";

import type { BalanceChanges, DecodedMessage, MessageDecoder } from "@/interfaces";
import type { Log, Message } from "@/schema";

import { SUPPORTED_MESSAGE_TYPES } from "@/message-types";
import { zMsgSend } from "@/schema";

export const sendDecoder: MessageDecoder = {
  check: (message: Message, _log: Log) => message["@type"] === SUPPORTED_MESSAGE_TYPES.MsgSend,
  decode: (message: Message, _log: Log) => {
    const parsed = zMsgSend.safeParse(message);
    if (!parsed.success) {
      throw new Error("Invalid send message");
    }

    const { amount, from_address, to_address } = parsed.data;

    const decodedMessage: DecodedMessage = {
      action: "send",
      data: {
        coins: amount,
        from: from_address,
        to: to_address,
      },
      isIbc: false,
      isOp: false,
    };

    const balanceChanges: Partial<BalanceChanges> = {
      ft: produce<BalanceChanges["ft"]>({}, (draft) => {
        amount.forEach(({ amount: amt, denom }) => {
          draft[from_address] ??= {};
          draft[to_address] ??= {};
          draft[from_address][denom] = `-${amt}`;
          draft[to_address][denom] = amt;
        });
      }),
    };

    return { balanceChanges, decodedMessage };
  },
};
