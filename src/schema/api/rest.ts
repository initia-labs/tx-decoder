import { z } from "zod";

export const zNodeInfo = z.object({
  default_node_info: z.object({
    network: z.string()
  })
});
