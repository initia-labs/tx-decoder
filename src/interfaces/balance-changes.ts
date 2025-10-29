export interface BaseBalanceChanges {
  ft: { [address: string]: FtChange };
}

export interface EvmBalanceChanges extends BaseBalanceChanges {
  nft: { [address: string]: NftChange };
  vm: "evm";
}

export interface MoveBalanceChanges extends BaseBalanceChanges {
  object: { [address: string]: ObjectChange };
  vm: "move";
}

export interface WasmBalanceChanges extends BaseBalanceChanges {
  vm: "wasm";
}

export type BalanceChanges =
  | EvmBalanceChanges
  | MoveBalanceChanges
  | WasmBalanceChanges;

export type FtChange = { [denom: string]: string };
export type NftChange = { [contract: string]: { [tokenId: string]: string } };
export type ObjectChange = { [address: string]: string };
