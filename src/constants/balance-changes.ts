import type {
  EvmBalanceChanges,
  MoveBalanceChanges,
  WasmBalanceChanges
} from "@/interfaces";

export const createDefaultMoveBalanceChanges = (): MoveBalanceChanges => ({
  ft: {},
  object: {},
  vm: "move"
});

export const createDefaultEvmBalanceChanges = (): EvmBalanceChanges => ({
  ft: {},
  nft: {},
  vm: "evm"
});

export const createDefaultWasmBalanceChanges = (): WasmBalanceChanges => ({
  ft: {},
  nft: {},
  vm: "wasm"
});
