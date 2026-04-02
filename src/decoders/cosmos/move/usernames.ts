import { ApiClient } from "@/api";
import { DecodedMessage, MessageDecoder, VmType } from "@/interfaces";
import {
  Log,
  Message,
  TxResponse,
  zMsgUsernameExtendExpiration,
  zMsgUsernameSetName,
  zMsgUsernameUnsetName,
  zUsernameExtendEvent,
  zUsernameSetEvent,
  zUsernameUnsetEvent
} from "@/schema";
import { findMoveEvent } from "@/utils";

export const usernameSetNameDecoder: MessageDecoder = {
  check: (message: Message, _log: Log) =>
    zMsgUsernameSetName.safeParse(message).success,
  decode: async (
    message: Message,
    log: Log,
    _apiClient: ApiClient,
    _txResponse: TxResponse,
    _vm: VmType
  ) => {
    const parsed = zMsgUsernameSetName.parse(message);
    const { module_address, sender } = parsed;

    // Use module_address from the message itself, not a hardcoded constant,
    // to correctly match events regardless of which username module address was used.
    const event = findMoveEvent(
      log.events,
      `${module_address}::usernames::SetEvent`,
      zUsernameSetEvent
    );
    if (!event) {
      throw new Error("SetNameEvent not found");
    }

    const decodedMessage: DecodedMessage = {
      action: "username_set_name",
      data: {
        from: sender,
        name: event.domain_name
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
    log: Log,
    _apiClient: ApiClient,
    _txResponse: TxResponse,
    _vm: VmType
  ) => {
    const parsed = zMsgUsernameUnsetName.parse(message);
    const { module_address, sender } = parsed;

    const event = findMoveEvent(
      log.events,
      `${module_address}::usernames::UnsetEvent`,
      zUsernameUnsetEvent
    );
    if (!event) {
      throw new Error("UnsetEvent not found");
    }

    const decodedMessage: DecodedMessage = {
      action: "username_unset_name",
      data: {
        from: sender,
        name: event.domain_name
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
    _txResponse: TxResponse,
    _vm: VmType
  ) => {
    const parsed = zMsgUsernameExtendExpiration.parse(message);
    const { module_address, sender } = parsed;

    const event = findMoveEvent(
      log.events,
      `${module_address}::usernames::ExtendEvent`,
      zUsernameExtendEvent
    );
    if (!event) {
      throw new Error("ExtendEvent not found");
    }

    const decodedMessage: DecodedMessage = {
      action: "username_extend_expiration",
      data: {
        domainName: event.domain_name,
        expirationDate: event.expiration_date,
        from: sender
      },
      isIbc: false,
      isOp: false
    };

    return decodedMessage;
  }
};
