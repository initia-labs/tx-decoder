import { produce } from "immer";

import { ApiClient } from "@/api";
import { createDefaultWasmBalanceChanges } from "@/constants";
import { WasmEventProcessor } from "@/interfaces";
import { Event } from "@/schema";

/**
 * Processor for CW-20 fungible token transfers
 * Handles wasm events with action="transfer" for CW-20 tokens
 */
export const cw20TransferProcessor: WasmEventProcessor = {
  check: (event: Event) => {
    const actionAttr = event.attributes.find((attr) => attr.key === "action");
    return actionAttr?.value === "transfer";
  },
  async process(
    currentEvent: Event,
    _allEvents: Event[],
    _apiClient: ApiClient
  ) {
    try {
      const contractAttr = currentEvent.attributes.find(
        (attr) => attr.key === "_contract_address"
      );
      const fromAttr = currentEvent.attributes.find(
        (attr) => attr.key === "from"
      );
      const toAttr = currentEvent.attributes.find((attr) => attr.key === "to");
      const amountAttr = currentEvent.attributes.find(
        (attr) => attr.key === "amount"
      );

      if (!contractAttr || !fromAttr || !toAttr || !amountAttr) {
        return createDefaultWasmBalanceChanges();
      }

      const contract = contractAttr.value;
      const from = fromAttr.value;
      const to = toAttr.value;
      const amount = amountAttr.value;

      return produce(createDefaultWasmBalanceChanges(), (draft) => {
        const isSelfTransfer = from === to;

        if (isSelfTransfer) {
          // For self-transfers, set net amount to "0" to avoid key collision
          draft.ft[from] ??= {};
          draft.ft[from][contract] = "0";
        } else {
          // Normal transfer: recipient gains, sender loses
          draft.ft[to] ??= {};
          draft.ft[to][contract] = amount;

          draft.ft[from] ??= {};
          draft.ft[from][contract] = `-${amount}`;
        }
      });
    } catch (error) {
      console.error(`Failed to process CW-20 transfer event:`, error);
    }

    return createDefaultWasmBalanceChanges();
  }
};
