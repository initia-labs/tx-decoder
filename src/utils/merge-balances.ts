import big from "big.js";
import { produce } from "immer";

import {
  BalanceChanges,
  EvmBalanceChanges,
  MoveBalanceChanges
} from "@/interfaces";

const mergeNestedBalances = (
  target: Record<string, Record<string, string>>,
  source: Record<string, Record<string, string>>
) => {
  for (const address in source) {
    target[address] ??= {};

    for (const key in source[address]) {
      const existingAmount = big(target[address][key] || "0");
      const newAmount = big(source[address][key]);
      const result = existingAmount.plus(newAmount);

      target[address][key] = result.toString();
    }
  }
};

const mergeNftBalances = (
  target: Record<string, Record<string, Record<string, string>>>,
  source: Record<string, Record<string, Record<string, string>>>
) => {
  for (const address in source) {
    target[address] ??= {};

    for (const contract in source[address]) {
      target[address][contract] ??= {};

      for (const tokenId in source[address][contract]) {
        const existingAmount = big(target[address][contract][tokenId] || "0");
        const newAmount = big(source[address][contract][tokenId]);
        const result = existingAmount.plus(newAmount);

        target[address][contract][tokenId] = result.toString();
      }
    }
  }
};

const isMoveBalanceChanges = (
  changes: BalanceChanges
): changes is MoveBalanceChanges => changes.vm === "move";

const isEvmBalanceChanges = (
  changes: BalanceChanges
): changes is EvmBalanceChanges => changes.vm === "evm";

export const mergeBalanceChanges = <T extends BalanceChanges>(
  target: T,
  source: BalanceChanges
): T => {
  if (isMoveBalanceChanges(target) && isMoveBalanceChanges(source)) {
    return produce(target, (draft) => {
      mergeNestedBalances(draft.ft, source.ft);
      mergeNestedBalances(draft.object, source.object);
    });
  }

  if (isEvmBalanceChanges(target) && isEvmBalanceChanges(source)) {
    return produce(target, (draft) => {
      mergeNestedBalances(draft.ft, source.ft);
      mergeNftBalances(draft.nft, source.nft);
    });
  }

  console.warn(
    "mergeBalanceChanges received mismatched balance change variants; ignoring source"
  );
  return target;
};
