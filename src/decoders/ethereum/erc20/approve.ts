import { decodeFunctionData, getAddress } from "viem";

import { ApiClient } from "@/api";
import {
  ERC20_APPROVE_FUNCTION_ABI,
  EVENT_SIGNATURES,
  FUNCTION_SELECTORS
} from "@/constants";
import {
  DecodedErc20ApproveCall,
  DecodedErc721ApproveCall,
  EthereumDecoder
} from "@/interfaces";
import { EthereumRpcPayload } from "@/schema";
import { getEvmDenom } from "@/utils";

export const approveDecoder: EthereumDecoder = {
  check: (payload: EthereumRpcPayload): boolean => {
    const { tx } = payload;
    if (!tx.to) return false;
    if (!tx.input || tx.input === "0x") return false;

    // Validate minimum calldata length
    // 4 bytes (selector) + 32 bytes (spender) + 32 bytes (amount/tokenId) = 68 bytes
    // In hex: "0x" (2 chars) + 68 bytes * 2 hex chars per byte = 138 characters minimum
    const MIN_CALLDATA_LENGTH = 2 + 68 * 2; // 138 characters
    if (tx.input.length < MIN_CALLDATA_LENGTH) return false;

    const input = tx.input.toLowerCase();
    return input.startsWith(FUNCTION_SELECTORS.APPROVE);
  },

  decode: async (
    payload: EthereumRpcPayload,
    _apiClient: ApiClient
  ): Promise<DecodedErc20ApproveCall | DecodedErc721ApproveCall> => {
    const { tx, txReceipt } = payload;

    // Validate required addresses
    if (!tx.to) {
      throw new Error("Approve requires contract address (to field)");
    }

    const decoded = decodeFunctionData({
      abi: ERC20_APPROVE_FUNCTION_ABI,
      data: tx.input
    });

    const [spender, amountOrTokenId] = decoded.args;

    // Normalize addresses to checksum format
    const contractAddress = getAddress(tx.to);
    const fromAddress = getAddress(tx.from);
    const spenderAddress = getAddress(spender);

    // Detect ERC-721 vs ERC-20 by checking Approval event log data field
    // ERC-20: Approval(address indexed owner, address indexed spender, uint256 value) - has data
    // ERC-721: Approval(address indexed owner, address indexed approved, uint256 indexed tokenId) - no data (all indexed)
    const approvalLog = txReceipt.logs.find(
      (log) =>
        log.address.toLowerCase() === contractAddress.toLowerCase() &&
        log.topics[0]?.toLowerCase() === EVENT_SIGNATURES.APPROVAL.toLowerCase()
    );

    const isErc721 = approvalLog ? approvalLog.data === "0x" : false;

    if (isErc721) {
      return {
        action: "erc721_approve",
        data: {
          contract: contractAddress,
          from: fromAddress,
          spender: spenderAddress,
          tokenId: amountOrTokenId.toString()
        }
      };
    }

    return {
      action: "erc20_approve",
      data: {
        amount: amountOrTokenId.toString(),
        contract: contractAddress,
        denom: getEvmDenom(contractAddress),
        from: fromAddress,
        spender: spenderAddress
      }
    };
  }
};
