import { DecodedMessage } from "./decoded-messages";

export interface DecodedTx {
  balanceChanges: BalanceChanges;
  messages: DecodedMessage[];
}

export interface BalanceChanges {
  ft: { [address: string]: FTChange };
  object: { [address: string]: ObjectChange };
}

export type FTChange = { [denom: string]: string };
export type ObjectChange = { [address: string]: string};
