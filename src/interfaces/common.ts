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
  ft: { [address: string]: FtChange };
  object: { [address: string]: ObjectChange };
}

export type FtChange = { [denom: string]: string };
export type ObjectChange = { [address: string]: string };

export interface DecoderConfig {
  registryUrls: string[];
  restUrl: string;
}
