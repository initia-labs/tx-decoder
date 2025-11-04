import type { DecodedMessage, MessageDecoder } from "@/interfaces";
import type { Log, Message, TxResponse } from "@/schema";

import { ApiClient } from "@/api";
import { SUPPORTED_MESSAGE_TYPES } from "@/message-types";
import { zMsgExecuteContract } from "@/schema";
import { decodeWasmMsg } from "@/utils";

/**
 * Helper function to extract the function name from execute message
 */
function extractFunctionName(msg: unknown): string | undefined {
  if (!msg || typeof msg !== "object") {
    return undefined;
  }

  // The function name is typically the first (and only) key in the message object
  const keys = Object.keys(msg);
  return keys.length > 0 ? keys[0] : undefined;
}

/**
 * Generic decoder for WASM contract execution messages
 * This handles any execute contract call that isn't specifically handled by other decoders
 * Should be placed LAST in the decoder registry so specific decoders (like CW-20) take precedence
 */
export const executeContractDecoder: MessageDecoder = {
  check: (message: Message, _log: Log) => {
    return message["@type"] === SUPPORTED_MESSAGE_TYPES.MsgExecuteContract;
  },

  decode: async (
    message: Message,
    _log: Log,
    _apiClient: ApiClient,
    _txResponse: TxResponse
  ) => {
    const parsed = zMsgExecuteContract.safeParse(message);
    if (!parsed.success) {
      throw new Error("Invalid execute contract message");
    }

    const { contract, funds, msg, sender } = parsed.data;
    const decodedMsg = decodeWasmMsg(msg);
    const functionName = extractFunctionName(decodedMsg);

    const decodedMessage: DecodedMessage = {
      action: "execute_contract",
      data: {
        contract,
        function: functionName,
        funds,
        msg: decodedMsg,
        sender
      },
      isIbc: false,
      isOp: false
    };

    return decodedMessage;
  }
};
