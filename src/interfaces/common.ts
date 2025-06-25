import { DecodedMessage } from "./decoded-messages";

export interface DecodedTx {
  messages: ProcessedMessage[];
  metadata: Metadata;
  totalBalanceChanges: BalanceChanges;
}

export interface Metadata {
  [objectAddress: string]: {
    collectionAddress: string;
    tokenId: string;
    tokenUri: string;
    type: "nft";
  };
}

export interface ProcessedMessage {
  balanceChanges: BalanceChanges;
  decodedMessage: DecodedMessage;
}

export interface BalanceChanges {
  ft: { [address: string]: FTChange };
  object: { [address: string]: ObjectChange };
}

export type FTChange = { [denom: string]: string };
export type ObjectChange = { [address: string]: string };

export interface DecoderConfig {
  restUrl: string;
}
