import { produce } from "immer";

import { ApiClient } from "@/api";
import { createDefaultWasmBalanceChanges } from "@/constants";
import { WasmEventProcessor } from "@/interfaces";
import { Event } from "@/schema";

/**
 * Processor for wasm events (CW-20 transfers and CW-721 NFT operations)
 * These events are emitted by WASM contracts for various token operations
 */
export const wasmEventProcessor: WasmEventProcessor = {
  eventType: "wasm",
  async process(
    currentEvent: Event,
    _allEvents: Event[],
    _apiClient: ApiClient
  ) {
    try {
      const actionAttr = currentEvent.attributes.find(
        (attr) => attr.key === "action"
      );

      if (!actionAttr) {
        return createDefaultWasmBalanceChanges();
      }

      const contractAttr = currentEvent.attributes.find(
        (attr) => attr.key === "_contract_address"
      );

      if (!contractAttr) {
        return createDefaultWasmBalanceChanges();
      }

      const contract = contractAttr.value;

      // Handle CW-20 token transfers
      if (actionAttr.value === "transfer") {
        return processCw20Transfer(currentEvent, contract);
      }

      // Handle CW-721 NFT operations
      if (actionAttr.value === "transfer_nft" || actionAttr.value === "mint") {
        return processCw721Operation(currentEvent, contract, actionAttr.value);
      }

      return createDefaultWasmBalanceChanges();
    } catch (error) {
      console.error(`Failed to process wasm event:`, error);
    }

    return createDefaultWasmBalanceChanges();
  }
};

/**
 * Process CW-20 fungible token transfers
 */
function processCw20Transfer(event: Event, contract: string) {
  const fromAttr = event.attributes.find((attr) => attr.key === "from");
  const toAttr = event.attributes.find((attr) => attr.key === "to");
  const amountAttr = event.attributes.find((attr) => attr.key === "amount");

  if (!fromAttr || !toAttr || !amountAttr) {
    return createDefaultWasmBalanceChanges();
  }

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
}

/**
 * Process CW-721 NFT operations (transfer_nft, mint)
 */
function processCw721Operation(event: Event, contract: string, action: string) {
  const tokenIdAttr = event.attributes.find((attr) => attr.key === "token_id");

  if (!tokenIdAttr) {
    return createDefaultWasmBalanceChanges();
  }

  const tokenId = tokenIdAttr.value;

  return produce(createDefaultWasmBalanceChanges(), (draft) => {
    if (action === "mint") {
      // For mint: owner gains the NFT
      const ownerAttr = event.attributes.find((attr) => attr.key === "owner");
      if (ownerAttr) {
        const owner = ownerAttr.value;
        draft.nft[owner] ??= {};
        draft.nft[owner][contract] ??= {};
        draft.nft[owner][contract][tokenId] = "1"; // NFT received
      }
    } else if (action === "transfer_nft") {
      // For transfer: recipient gains, sender loses
      const fromAttr = event.attributes.find((attr) => attr.key === "from");
      const toAttr = event.attributes.find((attr) => attr.key === "to");

      if (fromAttr && toAttr) {
        const from = fromAttr.value;
        const to = toAttr.value;

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
      }
    }
  });
}
