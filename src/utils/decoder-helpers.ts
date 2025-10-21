import { DecodedMessage, DecodedNotSupportedCall } from "@/interfaces";
import { EthereumRpcPayload } from "@/schema";

export const createNotSupportedMessage = (typeUrl: string): DecodedMessage => {
  return {
    action: "not_supported",
    data: { msgType: typeUrl },
    isIbc: false,
    isOp: false
  };
};

export const createNotSupportedCall = (params: {
  from: string;
  input: string;
  to: string | null;
  value: string;
}): DecodedNotSupportedCall => {
  return {
    action: "not_supported",
    data: {
      from: params.from,
      input: params.input,
      to: params.to,
      value: params.value
    }
  };
};

/**
 * Extracts Cosmos transaction hash from EVM payload if this is a mirrored transaction.
 * Returns null if this is not a cosmos mirror transaction.
 *
 * Cosmos-mirror transactions are system-generated EVM transactions that represent
 * Cosmos transactions in EVM format for block consistency in dual-execution chains.
 *
 * Detection criteria:
 * - Input field contains exactly 64 hex characters (32 bytes)
 * - From address is zero address (0x0000...0000)
 * - To address is null (contract creation format)
 */
export const extractCosmosTxHashFromEvm = (
  payload: EthereumRpcPayload
): string | null => {
  const { tx } = payload;

  // Must have input data
  if (!tx.input || tx.input === "0x") return null;

  const input = tx.input.toLowerCase();
  const hashWithoutPrefix = input.startsWith("0x") ? input.slice(2) : input;

  // Cosmos tx hash must be exactly 64 hex characters (32 bytes)
  const isValidHexLength = hashWithoutPrefix.length === 64;
  const isValidHexFormat = /^[0-9a-f]+$/.test(hashWithoutPrefix);

  // Mirrored Cosmos transactions are system-generated:
  // - From zero address (0x0000...)
  // - To null/empty (contract creation format)
  const isFromSystemAddress =
    tx.from === "0x0000000000000000000000000000000000000000";
  const hasNullRecipient = tx.to === null || tx.to === "";

  if (
    isValidHexLength &&
    isValidHexFormat &&
    isFromSystemAddress &&
    hasNullRecipient
  ) {
    return hashWithoutPrefix.toUpperCase();
  }

  return null;
};
