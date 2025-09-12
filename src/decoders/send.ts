import type { DecodedMessage, MessageDecoder } from "@/interfaces";

import { SUPPORTED_MESSAGE_TYPES } from "@/message-types";
import { Log, Message, TxResponse, zMsgSend } from "@/schema";

export const sendDecoder: MessageDecoder = {
  check: (message, _log) =>
    message["@type"] === SUPPORTED_MESSAGE_TYPES.MsgSend,
  decode: async (
    message: Message,
    _log: Log,
    _apiClient,
    _txResponse: TxResponse,
    vm = "move"
  ) => {
    const parsed = zMsgSend.safeParse(message);
    if (!parsed.success) {
      throw new Error("Invalid send message");
    }

    const { amount, from_address, to_address } = parsed.data;

    const convertedAmounts = await Promise.all(
      amount.map(async (coin) => ({
        ...coin,
        denom:
          vm === "evm"
            ? await _apiClient.convertToEvmDenom(coin.denom)
            : coin.denom
      }))
    );

    const decodedMessage: DecodedMessage = {
      action: "send",
      data: {
        coins: convertedAmounts,
        from: from_address,
        to: to_address
      },
      isIbc: false,
      isOp: false
    };

    return decodedMessage;
  }
};
