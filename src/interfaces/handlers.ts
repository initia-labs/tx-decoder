import { Log, Message, MsgMoveExecute } from "@/schema";

import { BalanceChanges } from "./common";
import { DecodedMessage } from "./decoded-messages";

export type MessageHandler = (
  message: Message,
  log: Log
) => {
  balanceChanges: Partial<BalanceChanges>;
  decodedMessage: DecodedMessage;
};

export type MoveFunctionHandler = (
  message: MsgMoveExecute,
  log: Log
) => {
  balanceChanges: Partial<BalanceChanges>;
  decodedMessage: DecodedMessage;
};
