import { z } from "zod";

export const zValidatorDescription = z.object({
  details: z.string(),
  identity: z.string(),
  moniker: z.string(),
  security_contact: z.string(),
  website: z.string(),
});
export type ValidatorDescription = z.infer<typeof zValidatorDescription>;

export const zValidator = z
  .object({
    validator: z.object({
      description: zValidatorDescription,
      operator_address: z.string(),
    }),
  })
  .transform((val) => ({
    ...val.validator,
  }));
export type Validator = z.infer<typeof zValidator>;
