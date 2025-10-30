import { produce } from "immer";

import { ApiClient } from "@/api";
import { createDefaultWasmBalanceChanges } from "@/constants";
import { WasmEventProcessor } from "@/interfaces";
import { Event } from "@/schema";

/**
 * Processor for wasm transfer events (CW-20 transfers)
 * These events are emitted by CW-20 contracts when tokens are transferred
 */
export const wasmTransferEventProcessor: WasmEventProcessor = {
  eventType: "wasm",
  async process(
    currentEvent: Event,
    _allEvents: Event[],
    _apiClient: ApiClient
  ) {
    try {
      // CW-20 transfers emit events with attributes like:
      // - _contract_address: the CW-20 contract address
      // - action: "transfer"
      // - from: sender address
      // - to: recipient address
      // - amount: transfer amount

      const actionAttr = currentEvent.attributes.find(
        (attr) => attr.key === "action"
      );

      // Only process if this is a transfer action
      if (!actionAttr || actionAttr.value !== "transfer") {
        return createDefaultWasmBalanceChanges();
      }

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

      // Use contract address as the denom for CW-20 tokens
      const denom = `cw20:${contract}`;

      return produce(createDefaultWasmBalanceChanges(), (draft) => {
        const isSelfTransfer = from === to;

        if (isSelfTransfer) {
          // For self-transfers, set net amount to "0" to avoid key collision
          draft.ft[from] ??= {};
          draft.ft[from][denom] = "0";
        } else {
          // Normal transfer: recipient gains, sender loses
          draft.ft[to] ??= {};
          draft.ft[to][denom] = amount;

          draft.ft[from] ??= {};
          draft.ft[from][denom] = `-${amount}`;
        }
      });
    } catch (error) {
      console.error(`Failed to process wasm transfer event:`, error);
    }

    return createDefaultWasmBalanceChanges();
  }
};
