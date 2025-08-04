import type { DecodedMessage, MessageDecoder } from "@/interfaces";

import { SUPPORTED_MESSAGE_TYPES } from "@/message-types";
import { Log, Message, zMsgSend } from "@/schema";

export const sendDecoder: MessageDecoder = {
  check: (message, _log) =>
    message["@type"] === SUPPORTED_MESSAGE_TYPES.MsgSend,
  decode: async (message: Message, _log: Log, _apiClient) => {
    const parsed = zMsgSend.safeParse(message);
    if (!parsed.success) {
      throw new Error("Invalid send message");
    }

    const { amount, from_address, to_address } = parsed.data;

    const decodedMessage: DecodedMessage = {
      action: "send",
      data: {
        coins: amount,
        from: from_address,
        to: to_address
      },
      isIbc: false,
      isOp: false
    };

    return decodedMessage;
  }
};
