import type { DecodedMessage, MessageDecoder } from "@/interfaces";
import type { Log, Message } from "@/schema";

import { ApiClient } from "@/api";
import { SUPPORTED_MESSAGE_TYPES } from "@/message-types";
import { zMsgFinalizeTokenWithdrawal } from "@/schema";

export const finalizeTokenWithdrawalDecoder: MessageDecoder = {
  check: (message: Message, _log: Log) =>
    message["@type"] === SUPPORTED_MESSAGE_TYPES.MsgFinalizeTokenWithdrawal,
  decode: async (message: Message, _log: Log, _apiClient: ApiClient) => {
    const parsed = zMsgFinalizeTokenWithdrawal.safeParse(message);
    if (!parsed.success) {
      throw new Error("Invalid finalize token withdrawal message");
    }

    const { amount, bridge_id, from, to } = parsed.data;

    const srcChainId = await _apiClient.findRollupChainId(bridge_id);

    if (!srcChainId) {
      throw new Error(`Source chain ID not found for bridge ID: ${bridge_id}`);
    }

    const decodedMessage: DecodedMessage = {
      action: "op_finalize_withdraw",
      data: {
        amount: amount.amount,
        bridgeId: bridge_id,
        denom: amount.denom,
        from,
        srcChainId,
        to,
      },
      isIbc: false,
      isOp: true,
    };

    return decodedMessage;
  },
};
