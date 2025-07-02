import { BalanceChanges } from "./balance-changes";
import { DecodedMessage } from "./decoded-messages";
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
  registryUrls: string[];
  restUrl: string;
}
