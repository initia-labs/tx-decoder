import { produce } from "immer";
import { decodeEventLog } from "viem";

import { ERC20_TRANSFER_ABI, EVENT_SIGNATURES } from "@/api/constants";
import { ERC721_TRANSFER_ABI } from "@/api/constants/evm-abis";
import { createDefaultEvmBalanceChanges } from "@/constants";
import { EvmBalanceChanges, EvmEventProcessor } from "@/interfaces";
import {
  zEvmLog,
  zEvmNftTransferEventLog,
  zEvmTransferEventLog
} from "@/schema";
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
  async process(eventAttribute, apiClient) {
    try {
      if (eventAttribute.key !== "log") {
        throw new Error("EVM log attribute not found");
      }

      const parsedLog = zEvmLog.parse(eventAttribute.value);
      const contractAddress = parsedLog.address;

      const isNft = await apiClient.isErc721Contract(contractAddress);

      return produce(createDefaultEvmBalanceChanges(), (draft) => {
        try {
          if (isNft) {
            const decoded = decodeEventLog({
              abi: ERC721_TRANSFER_ABI,
              data: parsedLog.data,
              topics: parsedLog.topics
            });
            processNftTransfer(draft, contractAddress, decoded.args);
          } else {
            const decoded = decodeEventLog({
              abi: ERC20_TRANSFER_ABI,
              data: parsedLog.data,
              topics: parsedLog.topics
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
