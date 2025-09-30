import { decodeFunctionData } from "viem";

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

    // Check if input starts with ERC-20 transfer function selector
    const input = tx.input.toLowerCase();

    return input.startsWith(FUNCTION_SELECTORS.ERC20_TRANSFER);
  },

  decode: async (payload: EthereumRpcPayload, _apiClient: ApiClient) => {
    const { tx } = payload;

    const decoded = decodeFunctionData({
      abi: ERC20_TRANSFER_FUNCTION_ABI,
      data: tx.input
    });

    const [recipient, amount] = decoded.args;

    return {
      action: "erc20_transfer",
      data: {
        amount: amount.toString(),
        contract: tx.to!,
        denom: getEvmDenom(tx.to!),
        from: tx.from,
        to: recipient
      }
    };
  }
};
