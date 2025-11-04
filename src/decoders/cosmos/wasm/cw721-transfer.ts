import type { DecodedMessage, MessageDecoder } from "@/interfaces";
import type { Log, Message, TxResponse } from "@/schema";

import { ApiClient } from "@/api";
import { SUPPORTED_MESSAGE_TYPES } from "@/message-types";
import { zCw721TransferNftMsg, zMsgExecuteContract } from "@/schema";
import { decodeWasmMsg } from "@/utils";

/**
 * Decoder for CW-721 NFT transfer messages
 * Handles the transfer_nft method of CW-721 contracts
 */
export const cw721TransferDecoder: MessageDecoder = {
  check: (message: Message, _log: Log) => {
    if (message["@type"] !== SUPPORTED_MESSAGE_TYPES.MsgExecuteContract) {
      return false;
    }

    const parsed = zMsgExecuteContract.safeParse(message);
    if (!parsed.success) return false;

    const decodedMsg = decodeWasmMsg(parsed.data.msg);
    if (!decodedMsg) return false;

    // Check if it's a CW-721 transfer_nft
    return zCw721TransferNftMsg.safeParse(decodedMsg).success;
  },

  decode: async (
    message: Message,
    _log: Log,
    _apiClient: ApiClient,
    _txResponse: TxResponse
  ) => {
    const parsed = zMsgExecuteContract.safeParse(message);
    if (!parsed.success) {
      throw new Error("Invalid CW-721 transfer message");
    }

    const { contract, msg, sender } = parsed.data;
    const decodedMsg = decodeWasmMsg(msg);

    const transferParsed = zCw721TransferNftMsg.safeParse(decodedMsg);
    if (!transferParsed.success) {
      throw new Error("Invalid CW-721 transfer_nft message format");
    }

    const { recipient, token_id } = transferParsed.data.transfer_nft;

    const decodedMessage: DecodedMessage = {
      action: "cw721_transfer",
      data: {
        contract,
        from: sender,
        to: recipient,
        tokenId: token_id
      },
      isIbc: false,
      isOp: false
    };

    return decodedMessage;
  }
};
