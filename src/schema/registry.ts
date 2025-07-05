import { z } from "zod";

const zIbcChannel = z.object({
  chain_id: z.string(),
  channel_id: z.string(),
  port_id: z.string(),
  version: z.string(),
});

const zMetadata = z.object({
  ibc_channels: z.array(zIbcChannel),
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
