import { BalanceChanges, DecodedMessage, MessageHandler } from "../interfaces";
import { Message, zMsgFinalizeTokenWithdrawal } from "../schema";

export const handleFinalizeTokenWithdrawalMessage: MessageHandler = (
  message: Message
) => {
  const parsed = zMsgFinalizeTokenWithdrawal.safeParse(message);
  if (!parsed.success) {
    throw new Error("Invalid finalize token withdrawal message");
  }

  const { amount, bridge_id, from, to } = parsed.data;

  const decodedMessage: DecodedMessage = {
    action: "op_finalize_withdraw",
    data: { amount: amount.amount, bridge_id, denom: amount.denom, from, to },
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
};
