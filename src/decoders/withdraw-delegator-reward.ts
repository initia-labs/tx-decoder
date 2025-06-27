import type { DecodedMessage, MessageDecoder } from "@/interfaces";

import { ApiClient } from "@/api";
import { SUPPORTED_MESSAGE_TYPES } from "@/message-types";
import { type Log, type Message, zMsgWithdrawDelegatorReward } from "@/schema";
import { findAttribute, parseCoins } from "@/utils";

export const withdrawDelegatorRewardDecoder: MessageDecoder = {
  check: (message: Message, _log: Log) =>
    message["@type"] === SUPPORTED_MESSAGE_TYPES.MsgWithdrawDelegatorReward,
  decode: async (message: Message, log: Log, _apiClient: ApiClient) => {
    const parsed = zMsgWithdrawDelegatorReward.safeParse(message);
    if (!parsed.success) {
      throw new Error("Invalid withdraw delegator reward message");
    }

    const amount = findAttribute(log, "coin_received", "amount").value;

    const { delegator_address, validator_address } = parsed.data;

    const coins = parseCoins(amount);

    const decodedMessage: DecodedMessage = {
      action: "withdraw_delegator_reward",
      data: {
        coins,
        from: delegator_address,
        validatorAddress: validator_address,
      },
      isIbc: false,
      isOp: false,
    };

    return decodedMessage;
  },
};
