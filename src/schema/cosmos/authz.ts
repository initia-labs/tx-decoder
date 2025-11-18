import { z } from "zod";

import { SUPPORTED_MESSAGE_TYPES } from "../../message-types";
import { zMessage } from "./bank";

export const zMsgExec = z.object({
  "@type": z.literal(SUPPORTED_MESSAGE_TYPES.MsgExec),
  grantee: z.string(),
  msgs: z.array(zMessage)
});

const zAuthorization = z
  .object({
    "@type": z.string()
  })
  .passthrough();

const zGrant = z.object({
  authorization: zAuthorization,
  expiration: z.string().optional()
});

export const zMsgGrant = z.object({
  "@type": z.literal(SUPPORTED_MESSAGE_TYPES.MsgGrant),
  grant: zGrant,
  grantee: z.string(),
  granter: z.string()
});

export const zMsgRevoke = z.object({
  "@type": z.literal(SUPPORTED_MESSAGE_TYPES.MsgRevoke),
  grantee: z.string(),
  granter: z.string(),
  msg_type_url: z.string()
});
