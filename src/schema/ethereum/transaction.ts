import { z } from "zod";

import { zHexString } from "../common";

export const zEthereumTransaction = z.object({
  blockHash: z.string(),
  blockNumber: z.string(),
  chainId: z.string(),
  from: z.string(),
  gas: z.string(),
  gasPrice: z.string().optional(),
  hash: z.string(),
  input: zHexString,
  maxFeePerGas: z.string().optional(),
  maxPriorityFeePerGas: z.string().optional(),
  nonce: z.string(),
  r: z.string(),
  s: z.string(),
  to: z.string().nullable(),
  transactionIndex: z.string(),
  type: z.string(),
  v: z.string(),
  value: z.string(),
  yParity: z.string().optional()
});

export const zEthereumLog = z.object({
  address: z.string(),
  blockHash: z.string(),
  blockNumber: z.string(),
  data: z.string(),
  logIndex: z.string(),
  removed: z.boolean(),
  topics: z.array(z.string()),
  transactionHash: z.string(),
  transactionIndex: z.string()
});

const zStatus = z.preprocess((val) => {
  // If already a boolean, return as-is
  if (typeof val === "boolean") {
    return val;
  }

  // Handle numeric values
  if (typeof val === "number") {
    if (val === 1) return true;
    if (val === 0) return false;
    throw new Error(`Invalid numeric status value: ${val}`);
  }

  // Handle hex string values
  if (typeof val === "string") {
    if (val === "0x1" || val === "1") return true;
    if (val === "0x0" || val === "0") return false;
    throw new Error(`Invalid status string value: ${val}`);
  }

  throw new Error(`Invalid status type: ${typeof val}`);
}, z.boolean());

export const zEthereumTransactionReceipt = z.object({
  blockHash: z.string(),
  blockNumber: z.string(),
  contractAddress: z.string().nullable(),
  cumulativeGasUsed: z.string(),
  effectiveGasPrice: z.string(),
  from: z.string(),
  gasUsed: z.string(),
  logs: z.array(zEthereumLog),
  logsBloom: z.string(),
  status: zStatus,
  to: z.string().nullable(),
  transactionHash: z.string(),
  transactionIndex: z.string(),
  type: z.string()
});

export const zEthereumRpcPayload = z.object({
  tx: zEthereumTransaction,
  txReceipt: zEthereumTransactionReceipt
});

export type EthereumLog = z.infer<typeof zEthereumLog>;
export type EthereumRpcPayload = z.infer<typeof zEthereumRpcPayload>;
export type EthereumTransaction = z.infer<typeof zEthereumTransaction>;
export type EthereumTransactionReceipt = z.infer<
  typeof zEthereumTransactionReceipt
>;
