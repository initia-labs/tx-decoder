import type { DecodedMessage, MessageDecoder } from "@/interfaces";
import type { Log, Message, TxResponse } from "@/schema";

import { ApiClient } from "@/api";
import { SUPPORTED_MESSAGE_TYPES } from "@/message-types";
import {
  zCw20TransferFromMsg,
  zCw20TransferMsg,
  zMsgExecuteContract
} from "@/schema";
import { decodeWasmMsg, getWasmDenom } from "@/utils";

/**
 * Decoder for CW-20 transfer messages
 */
export const cw20TransferDecoder: MessageDecoder = {
  check: (message: Message, _log: Log) => {
    if (message["@type"] !== SUPPORTED_MESSAGE_TYPES.MsgExecuteContract) {
      return false;
    }

    const parsed = zMsgExecuteContract.safeParse(message);
    if (!parsed.success) return false;

    const decodedMsg = decodeWasmMsg(parsed.data.msg);
    if (!decodedMsg) return false;

    // Check if it's a CW-20 transfer or transfer_from
    const isTransfer = zCw20TransferMsg.safeParse(decodedMsg).success;
    const isTransferFrom = zCw20TransferFromMsg.safeParse(decodedMsg).success;

    return isTransfer || isTransferFrom;
  },

  decode: async (
    message: Message,
    _log: Log,
    _apiClient: ApiClient,
    _txResponse: TxResponse
  ) => {
    const parsed = zMsgExecuteContract.safeParse(message);
    if (!parsed.success) {
      throw new Error("Invalid CW-20 transfer message");
    }

    const { contract, msg, sender } = parsed.data;
    const decodedMsg = decodeWasmMsg(msg);

    // Try transfer first
    const transferParsed = zCw20TransferMsg.safeParse(decodedMsg);
    if (transferParsed.success) {
      const { amount, recipient } = transferParsed.data.transfer;

      const decodedMessage: DecodedMessage = {
        action: "cw20_transfer",
        data: {
          amount,
          contract,
          denom: getWasmDenom(contract),
          from: sender,
          to: recipient
        },
        isIbc: false,
        isOp: false
      };

      return decodedMessage;
    }

    // Try transfer_from
    const transferFromParsed = zCw20TransferFromMsg.safeParse(decodedMsg);
    if (transferFromParsed.success) {
      const { amount, owner, recipient } =
        transferFromParsed.data.transfer_from;

      const decodedMessage: DecodedMessage = {
        action: "cw20_transfer_from",
        data: {
          amount,
          contract,
          denom: getWasmDenom(contract),
          from: sender,
          owner,
          to: recipient
        },
        isIbc: false,
        isOp: false
      };

      return decodedMessage;
    }

    throw new Error("Invalid CW-20 transfer message format");
  }
};
