import { decodeEventLog, getAddress, Hex } from "viem";

import { ApiClient } from "@/api";
import { ERC20_TRANSFER_EVENT_ABI } from "@/constants";
import { DecodedEthTransferCall, EthereumDecoder } from "@/interfaces";
import { EthereumRpcPayload } from "@/schema";
import { getEvmDenom } from "@/utils";

/**
 * Decoder for native ETH transfers (transactions with value but no contract call).
 *
 * ETH transfers are identified by:
 * - Non-zero value field
 * - Empty or "0x" input data (no function call)
 * - Non-null to address (not contract creation)
 */
export const ethTransferDecoder: EthereumDecoder = {
  check: (payload: EthereumRpcPayload): boolean => {
    const { tx } = payload;

    // Must have a recipient address (not contract creation)
    if (!tx.to) return false;

    // Must have value being transferred
    if (!tx.value || tx.value === "0" || tx.value === "0x0") return false;

    // Must not be calling a contract function (empty input data)
    if (tx.input && tx.input !== "0x") return false;

    return true;
  },

  decode: async (
    payload: EthereumRpcPayload,
    _apiClient: ApiClient
  ): Promise<DecodedEthTransferCall> => {
    const { tx, txReceipt } = payload;

    if (!tx.to) {
      throw new Error("ETH transfer requires recipient address (to field)");
    }

    // Normalize addresses to checksum format
    const from = getAddress(tx.from);
    const to = getAddress(tx.to);

    // Convert value from hex to decimal string
    const amount = BigInt(tx.value).toString();

    // Extract denom from ERC20 Transfer logs
    // Look for Transfer event from sender to recipient
    const transferLog = txReceipt.logs.find((log) => {
      try {
        const decoded = decodeEventLog({
          abi: ERC20_TRANSFER_EVENT_ABI,
          data: log.data as Hex,
          topics: log.topics as [signature: Hex, ...args: Hex[]]
        });
        return (
          decoded.eventName === "Transfer" &&
          getAddress(decoded.args.from as string) === from &&
          getAddress(decoded.args.to as string) === to
        );
      } catch {
        return false;
      }
    });

    if (!transferLog) {
      throw new Error("Failed to find ERC20 Transfer event for ETH transfer");
    }

    // Get denom from the ERC20 contract address
    const denom = getEvmDenom(transferLog.address);

    return {
      action: "eth_transfer",
      data: {
        amount,
        denom,
        from,
        to
      }
    };
  }
};
