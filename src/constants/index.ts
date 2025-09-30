import type { EvmBalanceChanges, MoveBalanceChanges } from "@/interfaces";

export const USERNAME_MODULE_ADDRESSES = [
  "0x72ed9b26ecdcd6a21d304df50f19abfdbe31d2c02f60c84627844620a45940ef" // mainnet
];

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

export const DEX_UTILS_MODULE_ADDRESS =
  "0xb6bf50aa9d5f827458a5424d41ef81a4ef8d7fd0"; // mainnet

export const INITIA_VAULT_MODULE_ADDRESS =
  "0x3a886b32a802582f2e446e74d4a24d1d7ed01adf46d2a8f65c5723887e708789"; // mainnet

// EVM ABI constants and selectors
export * from "./evm-abis";
