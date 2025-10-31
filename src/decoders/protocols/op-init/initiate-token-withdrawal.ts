import type { DecodedMessage, MessageDecoder } from "@/interfaces";
import type { Log, Message, TxResponse } from "@/schema";

import { ApiClient } from "@/api";
import { SUPPORTED_MESSAGE_TYPES } from "@/message-types";
import { zMsgInitiateTokenWithdrawal } from "@/schema";

export const initiateTokenWithdrawalDecoder: MessageDecoder = {
  check: (message: Message, _log: Log) =>
    message["@type"] === SUPPORTED_MESSAGE_TYPES.MsgInitiateTokenWithdrawal,
  decode: async (
    message: Message,
    log: Log,
    _apiClient: ApiClient,
    _txResponse: TxResponse
  ) => {
    const parsed = zMsgInitiateTokenWithdrawal.safeParse(message);
    if (!parsed.success) {
      throw new Error("Invalid initiate token withdrawal message");
    }

    const { amount, sender, to } = parsed.data;

    const event = log.events.find(
      (event) => event.type === "initiate_token_withdrawal"
    );

    if (!event) {
      throw new Error("Initiate token withdrawal event not found");
    }

    const l2Sequence = event.attributes.find(
      (attr) => attr.key === "l2_sequence"
    )?.value;
    if (!l2Sequence) throw new Error("L2 sequence not found");

    const baseDenom = event.attributes.find(
      (attr) => attr.key === "base_denom"
    )?.value;
    if (!baseDenom) throw new Error("Base denom not found");

    const decodedMessage: DecodedMessage = {
      action: "op_initiate_withdraw",
      data: {
        amount: amount.amount,
        baseDenom,
        denom: amount.denom,
        from: sender,
        l2Sequence,
        to
      },
      isIbc: false,
      isOp: true
    };

    return decodedMessage;
  }
};
