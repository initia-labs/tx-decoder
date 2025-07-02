export interface BalanceChanges {
  ft: { [address: string]: FtChange };
  object: { [address: string]: ObjectChange };
}

export type FtChange = { [denom: string]: string };
export type ObjectChange = { [address: string]: string };
