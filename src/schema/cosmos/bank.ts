import { z } from "zod";

import { SUPPORTED_MESSAGE_TYPES } from "../../message-types";
import { zCoin } from "../common";

export const zMessage = z
  .object({
    "@type": z.string()
  })
  .passthrough();
export type Message = z.infer<typeof zMessage>;

export const zMsgSend = z.object({
  "@type": z.literal(SUPPORTED_MESSAGE_TYPES.MsgSend),
  amount: z.array(zCoin),
  from_address: z.string(),
  to_address: z.string()
});
