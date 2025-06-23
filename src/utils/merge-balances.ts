import big from "big.js";
import { produce } from "immer";

import { BalanceChanges } from "@/interfaces";

const mergeNestedBalances = (
  target: Record<string, Record<string, string>>,
  source: Record<string, Record<string, string>>
) => {
  for (const address in source) {
    target[address] ??= {};

    for (const key in source[address]) {
      const existingAmount = big(target[address][key] || "0");
      const newAmount = big(source[address][key]);

      target[address][key] = existingAmount.plus(newAmount).toString();
    }
  }
};

export const mergeBalanceChanges = (
  target: BalanceChanges,
  source: Partial<BalanceChanges>
): BalanceChanges => {
  return produce(target, (draft) => {
    if (source.ft) {
      mergeNestedBalances(draft.ft, source.ft);
    }

    if (source.object) {
      mergeNestedBalances(draft.object, source.object);
    }
  });
};
