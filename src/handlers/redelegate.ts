import { produce } from "immer";

import type { BalanceChanges, DecodedMessage, MessageDecoder } from "@/interfaces";
import type { Log, Message } from "@/schema";

import { SUPPORTED_MESSAGE_TYPES } from "@/message-types";
import { zMsgRedelegate } from "@/schema";

export const redelegateDecoder: MessageDecoder = {
  check: (message: Message, _log: Log) =>
    message["@type"] === SUPPORTED_MESSAGE_TYPES.MsgRedelegate,
  decode: (message: Message, _log: Log) => {
    const parsed = zMsgRedelegate.safeParse(message);
    if (!parsed.success) {
      throw new Error("Invalid redelegate message");
    }

    const { amount, delegator_address, validator_dst_address, validator_src_address } = parsed.data;

    const decodedMessage: DecodedMessage = {
      action: "redelegate",
      data: {
        coins: amount,
        delegatorAddress: delegator_address,
        validatorDstAddress: validator_dst_address,
        validatorSrcAddress: validator_src_address,
      },
      isIbc: false,
      isOp: false,
    };

    const balanceChanges: Partial<BalanceChanges> = {
      ft: produce<BalanceChanges["ft"]>({}, (draft) => {
        amount.forEach(({ amount: amt, denom }) => {
          draft[validator_src_address] ??= {};
          draft[validator_src_address][denom] = `-${amt}`;
          draft[validator_dst_address] ??= {};
          draft[validator_dst_address][denom] = `${amt}`;
        });
      }),
    };

    return { balanceChanges, decodedMessage };
  },
};
