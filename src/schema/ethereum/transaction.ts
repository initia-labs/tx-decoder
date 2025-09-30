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
  status: z.boolean(),
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
