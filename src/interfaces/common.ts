import { DecodedMessage } from "./decoded-messages";

export interface DecodedTx {
  balanceChanges: BalanceChanges;
  messages: DecodedMessage[];
}

export interface BalanceChanges {
  ft: { [address: string]: FTChange };
  nft: { [address: string]: NftChange };
}

export type FTChange = { [denom: string]: string };
export interface NftChange {
  action: "burn" | "mint" | "receive" | "send";
  collectionAddress: string;
  collectionName: string;
  tokenId: string;
  tokenUri: string;
}
