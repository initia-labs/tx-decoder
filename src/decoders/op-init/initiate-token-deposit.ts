import type { DecodedMessage, MessageDecoder } from "@/interfaces";
import type { Log, Message } from "@/schema";

import { ApiClient } from "@/api";
import { SUPPORTED_MESSAGE_TYPES } from "@/message-types";
import { zMsgInitiateTokenDeposit } from "@/schema";

export const initiateTokenDepositDecoder: MessageDecoder = {
  check: (message: Message, _log: Log) =>
    message["@type"] === SUPPORTED_MESSAGE_TYPES.MsgInitiateTokenDeposit,
  decode: async (message: Message, _log: Log, _apiClient: ApiClient) => {
    const parsed = zMsgInitiateTokenDeposit.safeParse(message);
    if (!parsed.success) {
      throw new Error("Invalid initiate token deposit message");
    }

    const { amount, bridge_id, sender, to } = parsed.data;

    const decodedMessage: DecodedMessage = {
      action: "op_deposit",
      data: {
        amount: amount.amount,
        bridgeId: bridge_id,
        denom: amount.denom,
        from: sender,
        to,
      },
      isIbc: false,
      isOp: true,
    };

    return decodedMessage;
  },
};
