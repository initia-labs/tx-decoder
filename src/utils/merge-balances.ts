import big from "big.js";
import { produce } from "immer";

import { BalanceChanges } from "../interfaces";

export function mergeBalanceChanges(
  target: BalanceChanges,
  source: Partial<BalanceChanges>
): BalanceChanges {
  // TODO: handle nft balance changes
  return produce(target, (draft) => {
    if (!source.ft) {
      return;
    }

    for (const address in source.ft) {
      if (!draft.ft[address]) {
        draft.ft[address] = {};
      }

      for (const denom in source.ft[address]) {
        const existingAmount = big(draft.ft[address][denom] || "0");
        const newAmount = big(source.ft[address][denom]);

        draft.ft[address][denom] = existingAmount.plus(newAmount).toString();
      }
    }

    if (source.nft) {
      draft.nft = source.nft;
    }
  });
}
