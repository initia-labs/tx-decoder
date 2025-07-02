import { z } from "zod";

const zMetadata = z.object({
  op_bridge_id: z.string().optional(),
  op_denoms: z.array(z.string()).optional(),
});

export const zRegistry = z.object({
  chain_id: z.string(),
  chain_name: z.string(),
  metadata: zMetadata,
});
export type Registry = z.infer<typeof zRegistry>;

export const zRegistries = z.array(zRegistry);
