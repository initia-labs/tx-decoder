import type { DecodedMessage, MessageDecoder } from "@/interfaces";
import type { Log, Message, TxResponse } from "@/schema";

import { ApiClient } from "@/api";
import { SUPPORTED_MESSAGE_TYPES } from "@/message-types";
import { zMsgRedelegate } from "@/schema";

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
