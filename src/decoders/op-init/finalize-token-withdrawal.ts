import type { BalanceChanges, DecodedMessage, MessageDecoder } from "@/interfaces";
import type { Log, Message } from "@/schema";

import { SUPPORTED_MESSAGE_TYPES } from "@/message-types";
import { zMsgFinalizeTokenWithdrawal } from "@/schema";

export const finalizeTokenWithdrawalDecoder: MessageDecoder = {
  check: (message: Message, _log: Log) => message["@type"] === SUPPORTED_MESSAGE_TYPES.MsgFinalizeTokenWithdrawal,
  decode: (message: Message, _log: Log) => {
    const parsed = zMsgFinalizeTokenWithdrawal.safeParse(message);
    if (!parsed.success) {
      throw new Error("Invalid finalize token withdrawal message");
    }

    const { amount, bridge_id, from, to } = parsed.data;

    const decodedMessage: DecodedMessage = {
      action: "op_finalize_withdraw",
      data: {
        amount: amount.amount,
        bridgeId: bridge_id,
        denom: amount.denom,
        from,
        to,
      },
      isIbc: false,
      isOp: true,
    };

    const balanceChanges: Partial<BalanceChanges> = {
      ft: {
        [to]: {
          [amount.denom]: amount.amount,
        },
      },
    };

    return {
      balanceChanges,
      decodedMessage,
    };
  },
};
