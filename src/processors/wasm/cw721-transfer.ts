import { produce } from "immer";

import { ApiClient } from "@/api";
import { createDefaultWasmBalanceChanges } from "@/constants";
import { WasmEventProcessor } from "@/interfaces";
import { Event } from "@/schema";

/**
 * Processor for CW-721 NFT transfers
 * Handles wasm events with action="transfer" (canonical) or action="transfer_nft" (non-standard)
 */
export const cw721TransferProcessor: WasmEventProcessor = {
  check: (event: Event) => {
    const actionAttr = event.attributes.find((attr) => attr.key === "action");
    return (
      actionAttr?.value === "transfer" || actionAttr?.value === "transfer_nft"
    );
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
        (attr) => attr.key === "from" || attr.key === "sender"
      );
      const toAttr = currentEvent.attributes.find(
        (attr) => attr.key === "to" || attr.key === "recipient"
      );
      const tokenIdAttr = currentEvent.attributes.find(
        (attr) => attr.key === "token_id"
      );

      if (!contractAttr || !fromAttr || !toAttr || !tokenIdAttr) {
        return createDefaultWasmBalanceChanges();
      }

      const contract = contractAttr.value;
      const from = fromAttr.value;
      const to = toAttr.value;
      const tokenId = tokenIdAttr.value;

      return produce(createDefaultWasmBalanceChanges(), (draft) => {
        const isSelfTransfer = from === to;

        if (isSelfTransfer) {
          // For self-transfers, set net amount to "0" to avoid key collision
          draft.nft[from] ??= {};
          draft.nft[from][contract] ??= {};
          draft.nft[from][contract][tokenId] = "0";
        } else {
          // Normal transfer: recipient gains, sender loses
          draft.nft[to] ??= {};
          draft.nft[to][contract] ??= {};
          draft.nft[to][contract][tokenId] = "1"; // NFT received

          draft.nft[from] ??= {};
          draft.nft[from][contract] ??= {};
          draft.nft[from][contract][tokenId] = "-1"; // NFT sent
        }
      });
    } catch (error) {
      console.error(`Failed to process CW-721 transfer event:`, error);
    }

    return createDefaultWasmBalanceChanges();
  }
};
