import { z } from "zod";

import { SUPPORTED_MESSAGE_TYPES } from "../../message-types";
import { zCoin } from "../common";

export const zMsgDelegate = z.object({
  "@type": z.literal(SUPPORTED_MESSAGE_TYPES.MsgDelegate),
  amount: z.array(zCoin),
  delegator_address: z.string(),
  validator_address: z.string()
});

export const zMsgUndelegate = z.object({
  "@type": z.literal(SUPPORTED_MESSAGE_TYPES.MsgUndelegate),
  amount: z.array(zCoin),
  delegator_address: z.string(),
  validator_address: z.string()
});

export const zMsgRedelegate = z.object({
  "@type": z.literal(SUPPORTED_MESSAGE_TYPES.MsgRedelegate),
  amount: z.array(zCoin),
  delegator_address: z.string(),
  validator_dst_address: z.string(),
  validator_src_address: z.string()
});

export const zMsgWithdrawDelegatorReward = z.object({
  "@type": z.literal(SUPPORTED_MESSAGE_TYPES.MsgWithdrawDelegatorReward),
  delegator_address: z.string(),
  validator_address: z.string()
});
