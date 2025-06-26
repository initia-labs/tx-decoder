import type { DecodedMessage, MessageDecoder } from "@/interfaces";
import type { Log, Message } from "@/schema";

import { ApiClient } from "@/api";
import { SUPPORTED_MESSAGE_TYPES } from "@/message-types";
import { zMsgRedelegate } from "@/schema";

export const redelegateDecoder: MessageDecoder = {
  check: (message: Message, _log: Log) =>
    message["@type"] === SUPPORTED_MESSAGE_TYPES.MsgRedelegate,
  decode: async (message: Message, _log: Log, _apiClient: ApiClient) => {
    const parsed = zMsgRedelegate.safeParse(message);
    if (!parsed.success) {
      throw new Error("Invalid redelegate message");
    }

    const { amount, delegator_address, validator_dst_address, validator_src_address } = parsed.data;

    const decodedMessage: DecodedMessage = {
      action: "redelegate",
      data: {
        coins: amount,
        delegatorAddress: delegator_address,
        validatorDstAddress: validator_dst_address,
        validatorSrcAddress: validator_src_address,
      },
      isIbc: false,
      isOp: false,
    };

    return decodedMessage;
  },
};
