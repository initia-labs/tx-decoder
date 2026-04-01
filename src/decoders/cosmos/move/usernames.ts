import { ApiClient } from "@/api";
import { DecodedMessage, MessageDecoder } from "@/interfaces";
import {
  Log,
  Message,
  TxResponse,
  zMsgUsernameExtendExpiration,
  zMsgUsernameSetName,
  zMsgUsernameUnsetName
} from "@/schema";

export const usernameSetNameDecoder: MessageDecoder = {
  check: (message: Message, _log: Log) =>
    zMsgUsernameSetName.safeParse(message).success,
  decode: async (
    message: Message,
    _log: Log,
    _apiClient: ApiClient,
    _txResponse: TxResponse
  ) => {
    const parsed = zMsgUsernameSetName.parse(message);
    const { sender } = parsed;

    const decodedMessage: DecodedMessage = {
      action: "username_set_name",
      data: {
        from: sender
      },
      isIbc: false,
      isOp: false
    };

    return decodedMessage;
  }
};

export const usernameUnsetNameDecoder: MessageDecoder = {
  check: (message: Message, _log: Log) =>
    zMsgUsernameUnsetName.safeParse(message).success,
  decode: async (
    message: Message,
    _log: Log,
    _apiClient: ApiClient,
    _txResponse: TxResponse
  ) => {
    const parsed = zMsgUsernameUnsetName.parse(message);
    const { sender } = parsed;

    const decodedMessage: DecodedMessage = {
      action: "username_unset_name",
      data: {
        from: sender
      },
      isIbc: false,
      isOp: false
    };

    return decodedMessage;
  }
};

export const usernameExtendExpirationDecoder: MessageDecoder = {
  check: (message: Message, _log: Log) =>
    zMsgUsernameExtendExpiration.safeParse(message).success,
  decode: async (
    message: Message,
    _log: Log,
    _apiClient: ApiClient,
    _txResponse: TxResponse
  ) => {
    const parsed = zMsgUsernameExtendExpiration.parse(message);
    const { sender } = parsed;

    const decodedMessage: DecodedMessage = {
      action: "username_extend_expiration",
      data: {
        from: sender
      },
      isIbc: false,
      isOp: false
    };

    return decodedMessage;
  }
};
