import { decodeFunctionData, getAddress } from "viem";

import { ApiClient } from "@/api";
import { ERC20_TRANSFER_FUNCTION_ABI, FUNCTION_SELECTORS } from "@/constants";
import { EthereumDecoder } from "@/interfaces";
import { EthereumRpcPayload } from "@/schema";
import { getEvmDenom } from "@/utils";

export const erc20TransferDecoder: EthereumDecoder = {
  check: (payload: EthereumRpcPayload): boolean => {
    const { tx } = payload;

    // Must have contract address (to field)
    if (!tx.to) return false;

    // Must have input data
    if (!tx.input || tx.input === "0x") return false;

    // Validate minimum calldata length
    // 4 bytes (selector) + 32 bytes (recipient) + 32 bytes (amount) = 68 bytes
    // In hex: "0x" (2 chars) + 68 bytes * 2 hex chars per byte = 138 characters minimum
    const MIN_CALLDATA_LENGTH = 2 + 68 * 2; // 138 characters
    if (tx.input.length < MIN_CALLDATA_LENGTH) return false;

    // Check if input starts with ERC-20 transfer function selector
    const input = tx.input.toLowerCase();

    return input.startsWith(FUNCTION_SELECTORS.ERC20_TRANSFER);
  },

  decode: async (payload: EthereumRpcPayload, _apiClient: ApiClient) => {
    const { tx } = payload;

    // Validate required addresses
    if (!tx.to) {
      throw new Error("ERC20 transfer requires contract address (to field)");
    }

    const decoded = decodeFunctionData({
      abi: ERC20_TRANSFER_FUNCTION_ABI,
      data: tx.input
    });

    const [recipient, amount] = decoded.args;

    // Normalize addresses to checksum format
    const contractAddress = getAddress(tx.to);
    const fromAddress = getAddress(tx.from);
    const toAddress = getAddress(recipient);

    return {
      action: "erc20_transfer",
      data: {
        amount: amount.toString(),
        contract: contractAddress,
        denom: getEvmDenom(contractAddress),
        from: fromAddress,
        to: toAddress
      }
    };
  }
};
