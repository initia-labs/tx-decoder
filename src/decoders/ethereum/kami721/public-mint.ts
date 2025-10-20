import { decodeEventLog, getAddress, Hex } from "viem";

import { ApiClient } from "@/api";
import {
  ERC20_TRANSFER_EVENT_ABI,
  ERC721_TRANSFER_EVENT_ABI,
  FUNCTION_SELECTORS
} from "@/constants";
import { DecodedKami721PublicMintCall, EthereumDecoder } from "@/interfaces";
import { EthereumRpcPayload } from "@/schema";

export const kami721PublicMintDecoder: EthereumDecoder = {
  check: (payload: EthereumRpcPayload): boolean => {
    const { tx } = payload;
    if (!tx.to) return false;
    if (!tx.input || tx.input === "0x") return false;

    const input = tx.input.toLowerCase();
    return input.startsWith(FUNCTION_SELECTORS.KAMI721_PUBLIC_MINT);
  },

  decode: async (
    payload: EthereumRpcPayload,
    _apiClient: ApiClient
  ): Promise<DecodedKami721PublicMintCall> => {
    const { tx, txReceipt } = payload;

    if (!tx.to) {
      throw new Error("PublicMint requires contract address (to field)");
    }

    // Normalize contract address to checksum format
    const contractAddress = getAddress(tx.to);
    const minter = getAddress(tx.from);

    // Extract minted token ID from logs
    // Look for ERC721 Transfer event from zero address
    const erc721TransferLog = txReceipt.logs.find((log) => {
      try {
        const decoded = decodeEventLog({
          abi: ERC721_TRANSFER_EVENT_ABI,
          data: log.data as Hex,
          topics: log.topics as [signature: Hex, ...args: Hex[]]
        });
        return (
          decoded.eventName === "Transfer" &&
          decoded.args.from === "0x0000000000000000000000000000000000000000" &&
          getAddress(log.address) === contractAddress
        );
      } catch {
        return false;
      }
    });

    let tokenId: string | undefined;
    if (erc721TransferLog) {
      const decoded = decodeEventLog({
        abi: ERC721_TRANSFER_EVENT_ABI,
        data: erc721TransferLog.data as Hex,
        topics: erc721TransferLog.topics as [signature: Hex, ...args: Hex[]]
      });
      tokenId = decoded.args.tokenId.toString();
    }

    // Extract payment amount from ERC20 Transfer logs
    const erc20TransferLog = txReceipt.logs.find((log) => {
      try {
        const decoded = decodeEventLog({
          abi: ERC20_TRANSFER_EVENT_ABI,
          data: log.data as Hex,
          topics: log.topics as [signature: Hex, ...args: Hex[]]
        });
        return (
          decoded.eventName === "Transfer" &&
          getAddress(decoded.args.from as string) === minter &&
          getAddress(decoded.args.to as string) === contractAddress
        );
      } catch {
        return false;
      }
    });

    let paymentAmount: string | undefined;
    let paymentToken: string | undefined;
    if (erc20TransferLog) {
      const decoded = decodeEventLog({
        abi: ERC20_TRANSFER_EVENT_ABI,
        data: erc20TransferLog.data as Hex,
        topics: erc20TransferLog.topics as [signature: Hex, ...args: Hex[]]
      });
      paymentAmount = decoded.args.value.toString();
      paymentToken = getAddress(erc20TransferLog.address);
    }

    return {
      action: "kami721_public_mint",
      data: {
        contract: contractAddress,
        minter,
        paymentAmount,
        paymentToken,
        tokenId
      }
    };
  }
};
