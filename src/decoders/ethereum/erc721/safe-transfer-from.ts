import { decodeFunctionData, getAddress } from "viem";

import { ApiClient } from "@/api";
import {
  ERC721_SAFE_TRANSFER_FROM_FUNCTION_ABI,
  FUNCTION_SELECTORS
} from "@/constants";
import {
  DecodedErc721SafeTransferFromCall,
  EthereumDecoder
} from "@/interfaces";
import { EthereumRpcPayload } from "@/schema";

export const erc721SafeTransferFromDecoder: EthereumDecoder = {
  check: (payload: EthereumRpcPayload): boolean => {
    const { tx } = payload;
    if (!tx.to) return false;
    if (!tx.input || tx.input === "0x") return false;

    // Validate minimum calldata length
    // 4 bytes (selector) + 32 bytes (from) + 32 bytes (to) + 32 bytes (tokenId) = 100 bytes
    // In hex: "0x" (2 chars) + 100 bytes * 2 hex chars per byte = 202 characters minimum
    const MIN_CALLDATA_LENGTH = 2 + 100 * 2; // 202 characters
    if (tx.input.length < MIN_CALLDATA_LENGTH) return false;

    const input = tx.input.toLowerCase();
    return input.startsWith(FUNCTION_SELECTORS.ERC721_SAFE_TRANSFER_FROM);
  },

  decode: async (
    payload: EthereumRpcPayload,
    _apiClient: ApiClient
  ): Promise<DecodedErc721SafeTransferFromCall> => {
    const { tx } = payload;

    if (!tx.to) {
      throw new Error("SafeTransferFrom requires contract address (to field)");
    }

    const decoded = decodeFunctionData({
      abi: ERC721_SAFE_TRANSFER_FROM_FUNCTION_ABI,
      data: tx.input
    });

    const [from, to, tokenId] = decoded.args;

    // Normalize addresses to checksum format
    const contractAddress = getAddress(tx.to);
    const fromAddress = getAddress(from);
    const toAddress = getAddress(to);

    return {
      action: "erc721_safe_transfer_from",
      data: {
        contract: contractAddress,
        from: fromAddress,
        to: toAddress,
        tokenId: tokenId.toString()
      }
    };
  }
};
