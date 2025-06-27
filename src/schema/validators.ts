import { z } from "zod";

export const zValidatorInfo = z.object({
  details: z.string(),
  identity: z.string(),
  moniker: z.string(),
  security_contact: z.string(),
  website: z.string(),
});
export type ValidatorInfo = z.infer<typeof zValidatorInfo>;

export const zValidator = z.object({
  validator: z.object({
    description: zValidatorInfo,
  }),
});
export type Validator = z.infer<typeof zValidator>;
