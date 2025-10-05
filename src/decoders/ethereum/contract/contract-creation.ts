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
    apiClient: ApiClient
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
    const contractAddresses: string[] = [];

    // Get the Cosmos tx hash from EVM tx hash
    const cosmosTxHash = await apiClient.getCosmosTxHashByEvmTxHash(tx.hash);

    // Fetch Cosmos tx data
    const cosmosTx = await apiClient.getCosmosTx(cosmosTxHash);

    // Extract all created contract addresses from contract_created events
    for (const event of cosmosTx.events) {
      if (event.type === "contract_created") {
        for (const attr of event.attributes) {
          if (attr.key === "contract" && attr.value) {
            contractAddresses.push(getAddress(attr.value));
          }
        }
      }
    }

    // If no contracts found in events, fall back to txReceipt.contractAddress
    if (contractAddresses.length === 0) {
      contractAddresses.push(getAddress(txReceipt.contractAddress));
    }

    return {
      action: "contract_creation",
      data: {
        bytecodeLength: tx.input.length,
        contractAddresses,
        from: fromAddress
      }
    };
  }
};
