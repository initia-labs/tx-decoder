import type { Log, Message } from "@/schema";

import { BalanceChanges } from "./common";
import { DecodedMessage } from "./decoded-messages";

export type MessageDecoder<M = Message, L = Log> = {
  check: (message: M, log: L) => boolean;
  decode: (
    message: M,
    log: L
  ) => {
    balanceChanges: Partial<BalanceChanges>;
    decodedMessage: DecodedMessage;
  };
};
