import type { DecodedMessage, MessageDecoder } from "@/interfaces";
import type { Log, Message, TxResponse } from "@/schema";

import { ApiClient } from "@/api";
import { SUPPORTED_MESSAGE_TYPES } from "@/message-types";
import { zMsgFinalizeTokenDeposit } from "@/schema";

export const finalizeTokenDepositDecoder: MessageDecoder = {
  check: (message: Message, _log: Log) =>
    message["@type"] === SUPPORTED_MESSAGE_TYPES.MsgFinalizeTokenDeposit,
  decode: async (
    message: Message,
    log: Log,
    _apiClient: ApiClient,
    _txResponse: TxResponse
  ) => {
    const parsed = zMsgFinalizeTokenDeposit.safeParse(message);
    if (!parsed.success) {
      throw new Error("Invalid finalize token deposit message");
    }

    const { amount, base_denom, from, height, sequence, to } = parsed.data;

    const event = log.events.find(
      (event) => event.type === "finalize_token_deposit"
    );

    if (!event) {
      throw new Error("Finalize token deposit event not found");
    }

    const l1Sequence = event.attributes.find(
      (attr) => attr.key === "l1_sequence"
    )?.value;
    if (!l1Sequence) throw new Error("L1 sequence not found");

    const success = event.attributes.find(
      (attr) => attr.key === "success"
    )?.value;

    const reason = event.attributes.find(
      (attr) => attr.key === "reason"
    )?.value;

    const decodedMessage: DecodedMessage = {
      action: "op_finalize_deposit",
      data: {
        amount: amount.amount,
        baseDenom: base_denom,
        denom: amount.denom,
        from,
        height,
        l1Sequence,
        reason,
        sequence,
        success: success === "true",
        to
      },
      isIbc: false,
      isOp: true
    };

    return decodedMessage;
  }
};
