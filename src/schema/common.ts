import { z } from "zod";

const zDateString = z.string().datetime({ offset: false });

export const zUtcDate = z
  .union([zDateString, z.preprocess((val) => `${val}Z`, zDateString)])
  .pipe(z.coerce.date());

export const zAny = z.object({
  typeUrl: z.string(),
  value: z.array(z.number()), // UInt8Array
});

export const zCoin = z.object({
  amount: z.string(),
  denom: z.string(),
});
export type Coin = z.infer<typeof zCoin>;

export const zJsonString = z.string().transform((val) => JSON.parse(val));
