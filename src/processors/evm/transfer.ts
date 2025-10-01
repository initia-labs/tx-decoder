import { produce } from "immer";
import { decodeEventLog } from "viem";

import {
  ERC20_TRANSFER_EVENT_ABI,
  ERC721_TRANSFER_EVENT_ABI,
  EVENT_SIGNATURES
} from "@/constants";
import { createDefaultEvmBalanceChanges } from "@/constants";
import { EvmBalanceChanges, EvmEventProcessor } from "@/interfaces";
import { zEvmNftTransferEventLog, zEvmTransferEventLog } from "@/schema";
import { getEvmDenom } from "@/utils";

function processNftTransfer(
  draft: EvmBalanceChanges,
  contractAddress: string,
  decodedArgs: unknown
) {
  const validated = zEvmNftTransferEventLog.parse(decodedArgs);
  const { from, to, tokenId } = validated;
  const tokenIdStr = tokenId.toString();

  if (from) {
    draft.nft[from] ??= {};
    draft.nft[from][contractAddress] ??= {};
    draft.nft[from][contractAddress][tokenIdStr] = "-1";
  }

  draft.nft[to] ??= {};
  draft.nft[to][contractAddress] ??= {};
  draft.nft[to][contractAddress][tokenIdStr] = "1";
}

function processTokenTransfer(
  draft: ReturnType<typeof createDefaultEvmBalanceChanges>,
  contractAddress: string,
  decodedArgs: unknown
) {
  const validated = zEvmTransferEventLog.parse(decodedArgs);
  const { from, to, value } = validated;
  const denom = getEvmDenom(contractAddress);
  const amount = value.toString();

  if (from === to) {
    draft.ft[from] ??= {};
    draft.ft[from][denom] = "0";
  } else {
    if (from) {
      draft.ft[from] ??= {};
      draft.ft[from][denom] = `-${amount}`;
    }
    if (to) {
      draft.ft[to] ??= {};
      draft.ft[to][denom] = amount;
    }
  }
}

export const evmTransferEventProcessor: EvmEventProcessor = {
  eventSignatureHash: EVENT_SIGNATURES.TRANSFER,
  async process(evmLog, _apiClient) {
    try {
      const contractAddress = evmLog.address;

      // Detect ERC-721 vs ERC-20 by checking Transfer event log data field
      // ERC-20: Transfer(address indexed from, address indexed to, uint256 value) - has data
      // ERC-721: Transfer(address indexed from, address indexed to, uint256 indexed tokenId) - no data (all indexed)
      const isNft = evmLog.data === "0x";

      return produce(createDefaultEvmBalanceChanges(), (draft) => {
        try {
          if (isNft) {
            const decoded = decodeEventLog({
              abi: ERC721_TRANSFER_EVENT_ABI,
              data: evmLog.data,
              topics: evmLog.topics
            });
            processNftTransfer(draft, contractAddress, decoded.args);
          } else {
            const decoded = decodeEventLog({
              abi: ERC20_TRANSFER_EVENT_ABI,
              data: evmLog.data,
              topics: evmLog.topics
            });
            processTokenTransfer(draft, contractAddress, decoded.args);
          }
        } catch (processingError) {
          console.error(
            `Failed to process ${isNft ? "NFT" : "token"} transfer for contract ${contractAddress}:`,
            processingError
          );
          throw processingError;
        }
      });
    } catch (error) {
      console.error("Failed to decode EVM transfer log:", error);
      return createDefaultEvmBalanceChanges();
    }
  }
};
