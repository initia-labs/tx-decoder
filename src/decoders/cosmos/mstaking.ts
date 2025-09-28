import { ApiClient } from "@/api";
import { DecodedMessage, MessageDecoder } from "@/interfaces";
import { SUPPORTED_MESSAGE_TYPES } from "@/message-types";
import {
  Log,
  Message,
  TxResponse,
  zMsgDelegate,
  zMsgRedelegate,
  zMsgUndelegate
} from "@/schema";

export const delegateDecoder: MessageDecoder = {
  check: (message: Message, _log: Log) =>
    message["@type"] === SUPPORTED_MESSAGE_TYPES.MsgDelegate,
  decode: async (
    message: Message,
    _log: Log,
    apiClient: ApiClient,
    _txResponse: TxResponse
  ) => {
    const parsed = zMsgDelegate.safeParse(message);
    if (!parsed.success) {
      throw new Error("Invalid delegate message");
    }

    const { amount, delegator_address, validator_address } = parsed.data;

    const validator = await apiClient.findValidator(validator_address);

    const decodedMessage: DecodedMessage = {
      action: "delegate",
      data: {
        coins: amount,
        delegatorAddress: delegator_address,
        validator,
        validatorAddress: validator_address
      },
      isIbc: false,
      isOp: false
    };

    return decodedMessage;
  }
};

export const redelegateDecoder: MessageDecoder = {
  check: (message: Message, _log: Log) =>
    message["@type"] === SUPPORTED_MESSAGE_TYPES.MsgRedelegate,
  decode: async (
    message: Message,
    _log: Log,
    apiClient: ApiClient,
    _txResponse: TxResponse
  ) => {
    const parsed = zMsgRedelegate.safeParse(message);
    if (!parsed.success) {
      throw new Error("Invalid redelegate message");
    }

    const {
      amount,
      delegator_address,
      validator_dst_address,
      validator_src_address
    } = parsed.data;

    const [validatorDst, validatorSrc] = await Promise.all([
      apiClient.findValidator(validator_dst_address),
      apiClient.findValidator(validator_src_address)
    ]);

    const decodedMessage: DecodedMessage = {
      action: "redelegate",
      data: {
        coins: amount,
        delegatorAddress: delegator_address,
        validatorDst,
        validatorDstAddress: validator_dst_address,
        validatorSrc,
        validatorSrcAddress: validator_src_address
      },
      isIbc: false,
      isOp: false
    };

    return decodedMessage;
  }
};

export const undelegateDecoder: MessageDecoder = {
  check: (message: Message, _log: Log) =>
    message["@type"] === SUPPORTED_MESSAGE_TYPES.MsgUndelegate,
  decode: async (
    message: Message,
    _log: Log,
    apiClient: ApiClient,
    _txResponse: TxResponse
  ) => {
    const parsed = zMsgUndelegate.safeParse(message);
    if (!parsed.success) {
      throw new Error("Invalid undelegate message");
    }

    const { amount, delegator_address, validator_address } = parsed.data;

    const validator = await apiClient.findValidator(validator_address);

    const decodedMessage: DecodedMessage = {
      action: "undelegate",
      data: {
        coins: amount,
        delegatorAddress: delegator_address,
        validator,
        validatorAddress: validator_address
      },
      isIbc: false,
      isOp: false
    };

    return decodedMessage;
  }
};
