import type { DecodedMessage, MessageDecoder } from "@/interfaces";
import type { Log, Message } from "@/schema";

import { ApiClient } from "@/api";
import { zMsgWithdrawDelegatorRewardLocked } from "@/schema";
import { parseCoins } from "@/utils";

export const withdrawDelegatorRewardLockedDecoder: MessageDecoder = {
  check: (message: Message, _log: Log) =>
    zMsgWithdrawDelegatorRewardLocked.safeParse(message).success,
  decode: async (message: Message, log: Log, apiClient: ApiClient) => {
    const parsed = zMsgWithdrawDelegatorRewardLocked.safeParse(message);
    if (!parsed.success) {
      throw new Error("Invalid withdraw delegator reward locked message");
    }
    const { sender } = parsed.data;

    const withdrawRewardsAttributes = log.events.find(
      (event) => event.type === "withdraw_rewards"
    )?.attributes;

    const validatorAddress = withdrawRewardsAttributes?.find(
      (attr) => attr.key === "validator"
    )?.value;

    if (!validatorAddress) {
      throw new Error("Validator address not found");
    }

    const validator = await apiClient.findValidator(validatorAddress);

    const amount = withdrawRewardsAttributes?.find(
      (attr) => attr.key === "amount"
    )?.value;

    if (!amount) {
      throw new Error("Amount not found");
    }

    const coins = parseCoins(amount);

    const decodedMessage: DecodedMessage = {
      action: "withdraw_delegator_reward",
      data: {
        coins,
        delegatorAddress: sender,
        validator,
        validatorAddress
      },
      isIbc: false,
      isOp: false
    };

    return decodedMessage;
  }
};
