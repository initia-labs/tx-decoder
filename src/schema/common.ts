import { Hex } from "viem";
import { z } from "zod";

const zDateString = z.string().datetime({ offset: false });

export const zUtcDate = z
  .union([zDateString, z.preprocess((val) => `${val}Z`, zDateString)])
  .pipe(z.coerce.date());

export const zAny = z.object({
  typeUrl: z.string(),
  value: z.array(z.number()) // UInt8Array
});

// TODO: will be replaced with z.hex() in Zod v4
export const zHexString = z
  .string()
  .regex(/^0x[0-9a-fA-F]*$/)
  .transform((val) => val as Hex);

export const zCoin = z.object({
  amount: z.string(),
  denom: z.string()
});
export type Coin = z.infer<typeof zCoin>;

export const zJsonString = z.string().transform((val, ctx) => {
  try {
    return JSON.parse(val);
  } catch {
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      message: "Invalid JSON string"
    });
    return z.NEVER;
  }
});
