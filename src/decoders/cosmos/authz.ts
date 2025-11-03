import type { ApiClient } from "@/api";
import type { DecodedMessage, MessageDecoder, VmType } from "@/interfaces";

import { SUPPORTED_MESSAGE_TYPES } from "@/message-types";
import {
  Log,
  Message,
  TxResponse,
  zMsgExec,
  zMsgGrant,
  zMsgRevoke
} from "@/schema";
import { createNotSupportedMessage } from "@/utils";

export const authzExecDecoder: MessageDecoder = {
  check: (message, _log) =>
    message["@type"] === SUPPORTED_MESSAGE_TYPES.MsgExec,
  decode: async (
    message: Message,
    log: Log,
    apiClient: ApiClient,
    txResponse: TxResponse,
    vm: VmType,
    // Optional callback to recursively decode nested messages within authz exec
    getDecodersForVm?: (vm: VmType) => MessageDecoder[]
  ) => {
    const parsed = zMsgExec.safeParse(message);
    if (!parsed.success) {
      throw new Error("Invalid authz exec message");
    }

    const { grantee, msgs } = parsed.data;

    if (!getDecodersForVm) {
      const decodedMessage: DecodedMessage = {
        action: "authz_exec",
        data: {
          grantee,
          messages: msgs.map((msg) => createNotSupportedMessage(msg["@type"]))
        },
        isIbc: false,
        isOp: false
      };
      return decodedMessage;
    }

    const decoders = getDecodersForVm(vm);

    const decodedInnerMessages: DecodedMessage[] = [];
    for (const innerMessage of msgs) {
      const decoder = decoders.find((d) => d.check(innerMessage, log, vm));

      if (decoder) {
        const decoded = await decoder.decode(
          innerMessage,
          log,
          apiClient,
          txResponse,
          vm,
          getDecodersForVm
        );
        decodedInnerMessages.push(decoded);
      } else {
        decodedInnerMessages.push(
          createNotSupportedMessage(innerMessage["@type"])
        );
      }
    }

    const decodedMessage: DecodedMessage = {
      action: "authz_exec",
      data: {
        grantee,
        messages: decodedInnerMessages
      },
      isIbc: false,
      isOp: false
    };

    return decodedMessage;
  }
};

export const authzGrantDecoder: MessageDecoder = {
  check: (message, _log) =>
    message["@type"] === SUPPORTED_MESSAGE_TYPES.MsgGrant,
  decode: async (
    message: Message,
    _log: Log,
    _apiClient: ApiClient,
    _txResponse: TxResponse
  ) => {
    const parsed = zMsgGrant.safeParse(message);
    if (!parsed.success) {
      throw new Error("Invalid authz grant message");
    }

    const { grant, grantee, granter } = parsed.data;

    const decodedMessage: DecodedMessage = {
      action: "authz_grant",
      data: {
        authorization: grant.authorization,
        expiration: grant.expiration,
        grantee,
        granter
      },
      isIbc: false,
      isOp: false
    };

    return decodedMessage;
  }
};

export const authzRevokeDecoder: MessageDecoder = {
  check: (message, _log) =>
    message["@type"] === SUPPORTED_MESSAGE_TYPES.MsgRevoke,
  decode: async (
    message: Message,
    _log: Log,
    _apiClient: ApiClient,
    _txResponse: TxResponse
  ) => {
    const parsed = zMsgRevoke.safeParse(message);
    if (!parsed.success) {
      throw new Error("Invalid authz revoke message");
    }

    const { grantee, granter, msg_type_url } = parsed.data;

    const decodedMessage: DecodedMessage = {
      action: "authz_revoke",
      data: {
        grantee,
        granter,
        msg_type_url
      },
      isIbc: false,
      isOp: false
    };

    return decodedMessage;
  }
};
