import { produce } from "immer";

import { ApiClient } from "@/api";
import { createDefaultWasmBalanceChanges } from "@/constants";
import { WasmEventProcessor } from "@/interfaces";
import { Event } from "@/schema";
import { parseCoins } from "@/utils";

export const transferEventProcessor: WasmEventProcessor = {
  eventType: "transfer",
  async process(
    currentEvent: Event,
    _allEvents: Event[],
    _apiClient: ApiClient
  ) {
    try {
      const recipientAttr = currentEvent.attributes.find(
        (attr) => attr.key === "recipient"
      );
      const senderAttr = currentEvent.attributes.find(
        (attr) => attr.key === "sender"
      );
      const amountAttr = currentEvent.attributes.find(
        (attr) => attr.key === "amount"
      );

      if (!recipientAttr || !senderAttr || !amountAttr) {
        throw new Error("Transfer event missing required attributes");
      }

      const recipient = recipientAttr.value;
      const sender = senderAttr.value;
      const coins = parseCoins(amountAttr.value);

      if (coins.length === 0) {
        throw new Error("No coins found in transfer event");
      }

      return produce(createDefaultWasmBalanceChanges(), (draft) => {
        const isSelfTransfer = recipient === sender;

        coins.forEach(({ amount, denom }) => {
          if (isSelfTransfer) {
            // For self-transfers, set net amount to "0" to avoid key collision
            draft.ft[recipient] ??= {};
            draft.ft[recipient][denom] = "0";
          } else {
            // Normal transfer: recipient gains, sender loses
            draft.ft[recipient] ??= {};
            draft.ft[recipient][denom] = amount;

            draft.ft[sender] ??= {};
            draft.ft[sender][denom] = `-${amount}`;
          }
        });
      });
    } catch (error) {
      console.error(`Failed to process transfer event:`, error);
    }

    return createDefaultWasmBalanceChanges();
  }
};
