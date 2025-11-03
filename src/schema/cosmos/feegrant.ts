import { z } from "zod";

import { SUPPORTED_MESSAGE_TYPES } from "../../message-types";
import { zCoin } from "../common";

const zAllowance = z
  .object({
    "@type": z.string(),
    expiration: z.string().optional(),
    spend_limit: z.array(zCoin).optional()
  })
  .passthrough();

export const zMsgGrantAllowance = z.object({
  "@type": z.literal(SUPPORTED_MESSAGE_TYPES.MsgGrantAllowance),
  allowance: zAllowance,
  grantee: z.string(),
  granter: z.string()
});

export const zMsgRevokeAllowance = z.object({
  "@type": z.literal(SUPPORTED_MESSAGE_TYPES.MsgRevokeAllowance),
  grantee: z.string(),
  granter: z.string()
});
