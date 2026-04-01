import { ApiClient } from "@/api";
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
    const { module_address, sender } = parsed;

    // ADR: Use module_address from the message itself, not a hardcoded constant,
    // to correctly match events regardless of which username module address was used.
    const event = findMoveEvent(
      log.events,
      `${module_address}::usernames::SetNameEvent`,
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
    const { module_address, sender } = parsed;

    const event = findMoveEvent(
      log.events,
      `${module_address}::usernames::ExtendEvent`,
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
