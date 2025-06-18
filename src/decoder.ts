import { produce } from "immer";

import * as Handlers from "./handlers";
import { DecodedTx, MessageHandler } from "./interfaces";
import { SUPPORTED_MESSAGE_TYPES } from "./message-types";
import { TxResponse } from "./schema";
import { mergeBalanceChanges } from "./utils";
import { createNotSupportedMessage } from "./utils";

const KNOWN_HANDLERS: Record<string, MessageHandler> = {
  [SUPPORTED_MESSAGE_TYPES.MsgExecute]: Handlers.handleMsgExecute,
  [SUPPORTED_MESSAGE_TYPES.MsgFinalizeTokenWithdrawal]:
    Handlers.handleFinalizeTokenWithdrawalMessage,
  [SUPPORTED_MESSAGE_TYPES.MsgInitiateTokenDeposit]:
    Handlers.handleInitiateTokenDepositMessage,
  [SUPPORTED_MESSAGE_TYPES.MsgSend]: Handlers.handleSendMessage,
  [SUPPORTED_MESSAGE_TYPES.MsgWithdrawDelegatorReward]:
    Handlers.handleWithdrawDelegatorReward,
};

export function createHandlerRegistry() {
  const handlers = new Map<string, MessageHandler>(
    Object.entries(KNOWN_HANDLERS)
  );
  return {
    get: (typeUrl: string) => handlers.get(typeUrl),
  };
}

export type HandlerRegistry = ReturnType<typeof createHandlerRegistry>;

export function decodeTransaction(
  txResponse: TxResponse,
  registry: HandlerRegistry
): DecodedTx {
  const initialState: DecodedTx = {
    balanceChanges: { ft: {}, nft: {} },
    messages: [],
  };

  if (txResponse.tx.body.messages.length === 0) {
    return initialState;
  }

  if (txResponse.logs.length !== txResponse.tx.body.messages.length) {
    throw new Error(
      `Invalid tx response: ${txResponse.logs.length} logs found for ${txResponse.tx.body.messages.length} messages`
    );
  }

  const decodedTx = produce(initialState, (draft) => {
    txResponse.tx.body.messages.forEach((message, index) => {
      const notSupportedMessage = createNotSupportedMessage(message["@type"]);
      const handler = registry.get(message["@type"]);
      if (handler) {
        try {
          const result = handler(message, txResponse.logs[index]);
          draft.messages.push(result.decodedMessage);
          draft.balanceChanges = mergeBalanceChanges(
            draft.balanceChanges,
            result.balanceChanges
          );
        } catch {
          draft.messages.push(notSupportedMessage);
        }
      } else {
        draft.messages.push(notSupportedMessage);
      }
    });
  });

  return decodedTx;
}
