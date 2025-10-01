import type { EvmBalanceChanges, MoveBalanceChanges } from "@/interfaces";

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
