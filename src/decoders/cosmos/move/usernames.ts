import { ApiClient } from "@/api";
import { USERNAME_MODULE_ADDRESSES } from "@/constants";
import { DecodedMessage, MessageDecoder } from "@/interfaces";
import {
  Log,
  Message,
  TxResponse,
  zMsgUsernameExtendExpiration,
  zMsgUsernameSetName,
  zMsgUsernameUnsetName,
  zUsernameExtendEvent,
  zUsernameSetNameEvent
} from "@/schema";
import { findMoveEvent } from "@/utils";

const usernameEventPrefix = USERNAME_MODULE_ADDRESSES[0];

export const usernameSetNameDecoder: MessageDecoder = {
  check: (message: Message, _log: Log) =>
    zMsgUsernameSetName.safeParse(message).success,
  decode: async (
    message: Message,
    log: Log,
    _apiClient: ApiClient,
    _txResponse: TxResponse
  ) => {
    const parsed = zMsgUsernameSetName.parse(message);
    const { sender } = parsed;

    const event = findMoveEvent(
      log.events,
      `${usernameEventPrefix}::usernames::SetNameEvent`,
      zUsernameSetNameEvent
    );

    const decodedMessage: DecodedMessage = {
      action: "username_set_name",
      data: {
        from: sender,
        name: event?.name ?? ""
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
    log: Log,
    _apiClient: ApiClient,
    _txResponse: TxResponse
  ) => {
    const parsed = zMsgUsernameExtendExpiration.parse(message);
    const { sender } = parsed;

    const event = findMoveEvent(
      log.events,
      `${usernameEventPrefix}::usernames::ExtendEvent`,
      zUsernameExtendEvent
    );

    const decodedMessage: DecodedMessage = {
      action: "username_extend_expiration",
      data: {
        domainName: event?.domain_name ?? "",
        expirationDate: event?.expiration_date ?? "",
        from: sender
      },
      isIbc: false,
      isOp: false
    };

    return decodedMessage;
  }
};
