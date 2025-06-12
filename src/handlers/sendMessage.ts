import { BalanceChanges, DecodedMessage, MessageHandler } from "../interfaces";
import { Message, zMsgSend } from "../schema";

export const handleSendMessage: MessageHandler = (message: Message) => {
  const parsed = zMsgSend.safeParse(message);
  if (!parsed.success) {
    throw new Error("Invalid send message");
  }

  const { amount, from_address, to_address } = parsed.data;
  const sentAmount = amount[0];

  const decodedMessage: DecodedMessage = {
    action: "send",
    data: {
      amount: sentAmount.amount,
      denom: sentAmount.denom,
      from: from_address,
      to: to_address,
    },
    isIbc: false,
    isOp: false,
  };

  const balanceChanges: Partial<BalanceChanges> = {
    ft: {
      [from_address]: { [sentAmount.denom]: `-${sentAmount.amount}` },
      [to_address]: { [sentAmount.denom]: sentAmount.amount },
    },
  };

  return { balanceChanges, decodedMessage };
};
