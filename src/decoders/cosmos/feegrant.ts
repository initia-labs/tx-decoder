import type { ApiClient } from "@/api";
import type { DecodedMessage, MessageDecoder } from "@/interfaces";

import { SUPPORTED_MESSAGE_TYPES } from "@/message-types";
import {
  Log,
  Message,
  TxResponse,
  zMsgGrantAllowance,
  zMsgRevokeAllowance
} from "@/schema";

export const feegrantGrantAllowanceDecoder: MessageDecoder = {
  check: (message, _log) =>
    message["@type"] === SUPPORTED_MESSAGE_TYPES.MsgGrantAllowance,
  decode: async (
    message: Message,
    _log: Log,
    _apiClient: ApiClient,
    _txResponse: TxResponse
  ) => {
    const parsed = zMsgGrantAllowance.safeParse(message);
    if (!parsed.success) {
      throw new Error("Invalid feegrant grant allowance message");
    }

    const { allowance, grantee, granter } = parsed.data;

    const decodedMessage: DecodedMessage = {
      action: "feegrant_grant_allowance",
      data: {
        allowance,
        grantee,
        granter
      },
      isIbc: false,
      isOp: false
    };

    return decodedMessage;
  }
};

export const feegrantRevokeAllowanceDecoder: MessageDecoder = {
  check: (message, _log) =>
    message["@type"] === SUPPORTED_MESSAGE_TYPES.MsgRevokeAllowance,
  decode: async (
    message: Message,
    _log: Log,
    _apiClient: ApiClient,
    _txResponse: TxResponse
  ) => {
    const parsed = zMsgRevokeAllowance.safeParse(message);
    if (!parsed.success) {
      throw new Error("Invalid feegrant revoke allowance message");
    }

    const { grantee, granter } = parsed.data;

    const decodedMessage: DecodedMessage = {
      action: "feegrant_revoke_allowance",
      data: {
        grantee,
        granter
      },
      isIbc: false,
      isOp: false
    };

    return decodedMessage;
  }
};
