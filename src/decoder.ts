import { produce } from "immer";

import * as Handlers from "./handlers";
import { DecodedTx, MessageHandler } from "./interfaces";
import { SUPPORTED_MESSAGE_TYPES } from "./message-types";
import { TxResponse } from "./schema";
import { mergeBalanceChanges } from "./utils";

const KNOWN_HANDLERS: Record<string, MessageHandler> = {
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

  const decodedTx = produce(initialState, (draft) => {
    for (const message of txResponse.tx.body.messages) {
      const handler = registry.get(message["@type"]);

      if (!handler) {
        draft.messages.push({
          action: "not_supported",
          data: {
            msgType: message["@type"],
          },
          isIbc: false,
          isOp: false,
        });
        continue;
      }

      const result = handler(message);

      draft.messages.push(result.decodedMessage);

      draft.balanceChanges = mergeBalanceChanges(
        draft.balanceChanges,
        result.balanceChanges
      );
    }
  });

  return decodedTx;
}
