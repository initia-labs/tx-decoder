import type { DecodedMessage, MessageDecoder, VmType } from "@/interfaces";
import type { Log, Message, TxResponse } from "@/schema";

import { ApiClient } from "@/api";
import { SUPPORTED_MESSAGE_TYPES } from "@/message-types";
import { zCw721MintMsg, zMsgExecuteContract } from "@/schema";
import { decodeWasmMsg } from "@/utils";

/**
 * Decoder for CW-721 NFT mint messages
 * Handles the mint method of CW-721 contracts
 */
export const cw721MintDecoder: MessageDecoder = {
  check: (message: Message, _log: Log, _vm: VmType) => {
    if (message["@type"] !== SUPPORTED_MESSAGE_TYPES.MsgExecuteContract) {
      return false;
    }

    const parsed = zMsgExecuteContract.safeParse(message);
    if (!parsed.success) return false;

    const decodedMsg = decodeWasmMsg(parsed.data.msg);
    if (!decodedMsg) return false;

    // Check if it's a CW-721 mint
    return zCw721MintMsg.safeParse(decodedMsg).success;
  },

  decode: async (
    message: Message,
    _log: Log,
    _apiClient: ApiClient,
    _txResponse: TxResponse,
    _vm: VmType
  ) => {
    const parsed = zMsgExecuteContract.safeParse(message);
    if (!parsed.success) {
      throw new Error("Invalid CW-721 mint message");
    }

    const { contract, msg } = parsed.data;
    const decodedMsg = decodeWasmMsg(msg);

    const mintParsed = zCw721MintMsg.safeParse(decodedMsg);
    if (!mintParsed.success) {
      throw new Error("Invalid CW-721 mint message format");
    }

    const { extension, owner, token_id, token_uri } = mintParsed.data.mint;

    const decodedMessage: DecodedMessage = {
      action: "cw721_mint",
      data: {
        contract,
        ...(extension !== undefined ? { extension } : {}),
        owner,
        tokenId: token_id,
        ...(token_uri !== undefined ? { tokenUri: token_uri } : {})
      },
      isIbc: false,
      isOp: false
    };

    return decodedMessage;
  }
};
