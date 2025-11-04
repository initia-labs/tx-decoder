import { produce } from "immer";

import { ApiClient } from "@/api";
import { createDefaultWasmBalanceChanges } from "@/constants";
import { WasmEventProcessor } from "@/interfaces";
import { Event } from "@/schema";

/**
 * Processor for CW-721 NFT minting
 * Handles wasm events with action="mint" for CW-721 tokens
 */
export const cw721MintProcessor: WasmEventProcessor = {
  check: (event: Event) => {
    const actionAttr = event.attributes.find((attr) => attr.key === "action");
    return actionAttr?.value === "mint";
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
      const ownerAttr = currentEvent.attributes.find(
        (attr) => attr.key === "owner"
      );
      const tokenIdAttr = currentEvent.attributes.find(
        (attr) => attr.key === "token_id"
      );

      if (!contractAttr || !ownerAttr || !tokenIdAttr) {
        return createDefaultWasmBalanceChanges();
      }

      const contract = contractAttr.value;
      const owner = ownerAttr.value;
      const tokenId = tokenIdAttr.value;

      return produce(createDefaultWasmBalanceChanges(), (draft) => {
        // For mint: owner gains the NFT
        draft.nft[owner] ??= {};
        draft.nft[owner][contract] ??= {};
        draft.nft[owner][contract][tokenId] = "1"; // NFT received
      });
    } catch (error) {
      console.error(`Failed to process CW-721 mint event:`, error);
    }

    return createDefaultWasmBalanceChanges();
  }
};
