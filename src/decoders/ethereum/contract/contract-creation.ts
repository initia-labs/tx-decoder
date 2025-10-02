import { getAddress } from "viem";

import { ApiClient } from "@/api";
import { DecodedContractCreationCall, EthereumDecoder } from "@/interfaces";
import { EthereumRpcPayload } from "@/schema";

export const contractCreationDecoder: EthereumDecoder = {
  check: (payload: EthereumRpcPayload): boolean => {
    const { tx } = payload;

    // Contract creation is identified by null/empty 'to' field
    if (tx.to !== null && tx.to !== "") return false;

    // Must have input data (contract bytecode)
    if (!tx.input || tx.input === "0x") return false;

    return true;
  },

  decode: async (
    payload: EthereumRpcPayload,
    _apiClient: ApiClient
  ): Promise<DecodedContractCreationCall> => {
    const { tx, txReceipt } = payload;

    // Validate contract address exists (should always be present for successful deployments)
    if (!txReceipt.contractAddress) {
      throw new Error(
        `Contract deployment failed: missing contract address in receipt for tx ${tx.hash}`
      );
    }

    // Normalize addresses to checksum format
    const fromAddress = getAddress(tx.from);
    const contractAddress = getAddress(txReceipt.contractAddress);

    return {
      action: "contract_creation",
      data: {
        bytecodeLength: tx.input.length,
        contractAddress,
        from: fromAddress
      }
    };
  }
};
