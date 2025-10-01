import { decodeFunctionData, getAddress } from "viem";

import { ApiClient } from "@/api";
import {
  ERC20_TRANSFER_FROM_FUNCTION_ABI,
  EVENT_SIGNATURES,
  FUNCTION_SELECTORS
} from "@/constants";
import {
  DecodedErc20TransferFromCall,
  DecodedErc721TransferFromCall,
  EthereumDecoder
} from "@/interfaces";
import { EthereumRpcPayload } from "@/schema";
import { getEvmDenom } from "@/utils";

export const transferFromDecoder: EthereumDecoder = {
  check: (payload: EthereumRpcPayload): boolean => {
    const { tx } = payload;

    // Must have contract address (to field)
    if (!tx.to) return false;

    // Must have input data
    if (!tx.input || tx.input === "0x") return false;

    // Validate minimum calldata length
    // 4 bytes (selector) + 32 bytes (owner) + 32 bytes (recipient) + 32 bytes (amount/tokenId) = 100 bytes
    // In hex: "0x" (2 chars) + 100 bytes * 2 hex chars per byte = 202 characters minimum
    const MIN_CALLDATA_LENGTH = 2 + 100 * 2; // 202 characters
    if (tx.input.length < MIN_CALLDATA_LENGTH) return false;

    // Check if input starts with transferFrom function selector (shared by ERC-20 and ERC-721)
    const input = tx.input.toLowerCase();

    return input.startsWith(FUNCTION_SELECTORS.TRANSFER_FROM);
  },

  decode: async (
    payload: EthereumRpcPayload,
    _apiClient: ApiClient
  ): Promise<DecodedErc20TransferFromCall | DecodedErc721TransferFromCall> => {
    const { tx, txReceipt } = payload;

    // Validate required addresses
    if (!tx.to) {
      throw new Error("TransferFrom requires contract address (to field)");
    }

    const decoded = decodeFunctionData({
      abi: ERC20_TRANSFER_FROM_FUNCTION_ABI,
      data: tx.input
    });

    const [owner, recipient, amountOrTokenId] = decoded.args;

    // Normalize addresses to checksum format
    const contractAddress = getAddress(tx.to);
    const fromAddress = getAddress(tx.from);
    const ownerAddress = getAddress(owner);
    const toAddress = getAddress(recipient);

    // Detect ERC-721 vs ERC-20 by checking Transfer event log data field
    // ERC-20: Transfer(address indexed from, address indexed to, uint256 value) - has data
    // ERC-721: Transfer(address indexed from, address indexed to, uint256 indexed tokenId) - no data (all indexed)
    const transferLog = txReceipt.logs.find(
      (log) =>
        log.address.toLowerCase() === contractAddress.toLowerCase() &&
        log.topics[0]?.toLowerCase() === EVENT_SIGNATURES.TRANSFER.toLowerCase()
    );

    if (!transferLog) {
      throw new Error(
        `Cannot determine token type for transferFrom call: missing Transfer event log for contract ${contractAddress} in tx ${tx.hash}`
      );
    }

    const isErc721 = transferLog.data === "0x";

    if (isErc721) {
      return {
        action: "erc721_transfer_from",
        data: {
          contract: contractAddress,
          from: fromAddress,
          owner: ownerAddress,
          to: toAddress,
          tokenId: amountOrTokenId.toString()
        }
      };
    }

    return {
      action: "erc20_transfer_from",
      data: {
        amount: amountOrTokenId.toString(),
        contract: contractAddress,
        denom: getEvmDenom(contractAddress),
        from: fromAddress,
        owner: ownerAddress,
        to: toAddress
      }
    };
  }
};
