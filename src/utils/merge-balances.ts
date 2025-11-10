import big from "big.js";
import { produce } from "immer";

import {
  BalanceChanges,
  EvmBalanceChanges,
  FtChange,
  MoveBalanceChanges,
  NftChange,
  WasmBalanceChanges
} from "@/interfaces";

const mergeNestedBalances = (
  target: { [address: string]: FtChange },
  source: { [address: string]: FtChange }
): { [address: string]: FtChange } => {
  return produce(target, (draft) => {
    for (const address in source) {
      draft[address] ??= {};

      for (const key in source[address]) {
        const existingAmount = big(draft[address][key] || "0");
        const newAmount = big(source[address][key]);
        const result = existingAmount.plus(newAmount);

        draft[address][key] = result.toFixed(0);
      }
    }
  });
};

const mergeNftBalances = (
  target: { [address: string]: NftChange },
  source: { [address: string]: NftChange }
): { [address: string]: NftChange } => {
  return produce(target, (draft) => {
    for (const address in source) {
      draft[address] ??= {};

      for (const contract in source[address]) {
        draft[address][contract] ??= {};

        for (const tokenId in source[address][contract]) {
          const existingAmount = big(draft[address][contract][tokenId] || "0");
          const newAmount = big(source[address][contract][tokenId]);
          const result = existingAmount.plus(newAmount);

          draft[address][contract][tokenId] = result.toFixed(0);
        }
      }
    }
  });
};

const isMoveBalanceChanges = (
  changes: BalanceChanges
): changes is MoveBalanceChanges => changes.vm === "move";

const isEvmBalanceChanges = (
  changes: BalanceChanges
): changes is EvmBalanceChanges => changes.vm === "evm";

const isWasmBalanceChanges = (
  changes: BalanceChanges
): changes is WasmBalanceChanges => changes.vm === "wasm";

export const mergeBalanceChanges = <T extends BalanceChanges>(
  target: T,
  source: BalanceChanges
): T => {
  if (isMoveBalanceChanges(target) && isMoveBalanceChanges(source)) {
    return {
      ...target,
      ft: mergeNestedBalances(target.ft, source.ft),
      object: mergeNestedBalances(target.object, source.object)
    };
  }

  if (isEvmBalanceChanges(target) && isEvmBalanceChanges(source)) {
    return {
      ...target,
      ft: mergeNestedBalances(target.ft, source.ft),
      nft: mergeNftBalances(target.nft, source.nft)
    };
  }

  if (isWasmBalanceChanges(target) && isWasmBalanceChanges(source)) {
    return {
      ...target,
      ft: mergeNestedBalances(target.ft, source.ft),
      nft: mergeNftBalances(target.nft, source.nft)
    };
  }

  console.warn(
    "mergeBalanceChanges received mismatched balance change variants; ignoring source"
  );
  return target;
};
