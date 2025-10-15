import { BalanceChanges } from "./balance-changes";
import { DecodedMessage } from "./cosmos";
import { EvmMetadata, MoveMetadata } from "./metadata";

export interface DecodedTx<M extends EvmMetadata | MoveMetadata> {
  messages: ProcessedMessage[];
  metadata: M;
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
