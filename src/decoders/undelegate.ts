import type { DecodedMessage, MessageDecoder } from "@/interfaces";
import type { Log, Message, TxResponse } from "@/schema";

import { ApiClient } from "@/api";
import { SUPPORTED_MESSAGE_TYPES } from "@/message-types";
import { zMsgUndelegate } from "@/schema";

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
