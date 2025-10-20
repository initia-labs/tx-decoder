import { getAddress } from "viem";

import { ApiClient } from "@/api";
import { DecodedEthTransferCall, EthereumDecoder } from "@/interfaces";
import { EthereumRpcPayload } from "@/schema";

/**
 * Decoder for native ETH transfers (transactions with value but no contract call).
 *
 * Native transfers are identified by:
 * - Non-zero value field
 * - Empty or "0x" input data (no function call)
 * - Non-null to address (not contract creation)
 */
export const nativeTransferDecoder: EthereumDecoder = {
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
    const { tx } = payload;

    if (!tx.to) {
      throw new Error("Native transfer requires recipient address (to field)");
    }

    // Normalize addresses to checksum format
    const from = getAddress(tx.from);
    const to = getAddress(tx.to);

    // Convert value from hex to decimal string
    const amount = BigInt(tx.value).toString();

    return {
      action: "eth_transfer",
      data: {
        amount,
        from,
        to
      }
    };
  }
};
