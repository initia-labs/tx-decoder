import { BalanceChanges } from "./balance-changes";
import { DecodedMessage } from "./cosmos";
import { Metadata } from "./metadata";

export interface DecodedTx {
  messages: ProcessedMessage[];
  metadata: Metadata;
  totalBalanceChanges: BalanceChanges;
}

export interface ProcessedMessage {
  balanceChanges: BalanceChanges;
  decodedMessage: DecodedMessage;
}

export interface DecoderConfig {
  jsonRpcUrl?: string;
  registryUrl: string;
  restUrl: string;
  timeoutMs?: number;
}
