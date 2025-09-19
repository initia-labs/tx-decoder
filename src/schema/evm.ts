import { getAddress, Hex } from "viem";
import { z } from "zod";

import { zHexString, zJsonString } from "./common";

export const zEvmLog = zJsonString.pipe(
  z.object({
    address: zHexString,
    data: zHexString,
    topics: z
      .array(zHexString)
      .min(1)
      .transform((val) => [val[0], ...val.slice(1)] as [Hex, ...Hex[]])
  })
);

export const zEvmTransferEventLog = z.object({
  from: zHexString.transform((address) => getAddress(address)).optional(),
  to: zHexString.transform((address) => getAddress(address)),
  value: z.bigint().nonnegative()
});
