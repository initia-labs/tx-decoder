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

      const { amount, denom } = coins[0];

      return {
        ft: {
          [recipient]: { [denom]: amount },
          [sender]: { [denom]: `-${amount}` }
        },
        vm: "wasm"
      };
    } catch (error) {
      console.error(`Failed to process transfer event:`, error);
    }

    return createDefaultWasmBalanceChanges();
  }
};
