import type { DecodedMessage, MessageDecoder } from "@/interfaces";

import { ApiClient } from "@/api";
import { SUPPORTED_MESSAGE_TYPES } from "@/message-types";
import { Log, Message, zMsgDelegate } from "@/schema";

export const delegateDecoder: MessageDecoder = {
  check: (message, _log) =>
    message["@type"] === SUPPORTED_MESSAGE_TYPES.MsgDelegate,
  decode: async (message: Message, _log: Log, apiClient: ApiClient) => {
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
        validatorAddress: validator_address,
      },
      isIbc: false,
      isOp: false,
    };

    return decodedMessage;
  },
};
