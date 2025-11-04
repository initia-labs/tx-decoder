import { z } from "zod";

import { SUPPORTED_MESSAGE_TYPES } from "../../message-types";
import { zCoin } from "../common";

export const zMsgInitiateTokenDeposit = z.object({
  "@type": z.literal(SUPPORTED_MESSAGE_TYPES.MsgInitiateTokenDeposit),
  amount: zCoin,
  bridge_id: z.string(),
  data: z.string().nullable(),
  sender: z.string(),
  to: z.string()
});

export const zMsgFinalizeTokenWithdrawal = z.object({
  "@type": z.literal(SUPPORTED_MESSAGE_TYPES.MsgFinalizeTokenWithdrawal),
  amount: zCoin,
  bridge_id: z.string(),
  from: z.string(),
  last_block_hash: z.string(),
  output_index: z.string(),
  sender: z.string(),
  sequence: z.string(),
  storage_root: z.string(),
  to: z.string(),
  version: z.string(),
  withdrawal_proofs: z.array(z.string())
});

export const zMsgFinalizeTokenDeposit = z.object({
  "@type": z.literal(SUPPORTED_MESSAGE_TYPES.MsgFinalizeTokenDeposit),
  amount: zCoin,
  base_denom: z.string(),
  data: z.string().nullable(),
  from: z.string(),
  height: z.string(),
  sender: z.string(),
  sequence: z.string(),
  to: z.string()
});

export const zMsgInitiateTokenWithdrawal = z.object({
  "@type": z.literal(SUPPORTED_MESSAGE_TYPES.MsgInitiateTokenWithdrawal),
  amount: zCoin,
  sender: z.string(),
  to: z.string()
});
