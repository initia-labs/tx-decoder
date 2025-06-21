import { z } from "zod";

import { USERNAME_MODULE_ADDRESSES } from "@/constants";

import { SUPPORTED_MESSAGE_TYPES } from "../message-types";
import { zCoin } from "./common";

export const zMessage = z
  .object({
    "@type": z.string(),
  })
  .passthrough();
export type Message = z.infer<typeof zMessage>;

export const zMsgSend = z.object({
  "@type": z.literal(SUPPORTED_MESSAGE_TYPES.MsgSend),
  amount: z.array(zCoin),
  from_address: z.string(),
  to_address: z.string(),
});

export const zMsgUndelegate = z.object({
  "@type": z.literal(SUPPORTED_MESSAGE_TYPES.MsgUndelegate),
  amount: z.array(zCoin),
  delegator_address: z.string(),
  validator_address: z.string(),
});

export const zMsgInitiateTokenDeposit = z.object({
  "@type": z.literal(SUPPORTED_MESSAGE_TYPES.MsgInitiateTokenDeposit),
  amount: zCoin,
  bridge_id: z.string(),
  data: z.string().nullable(),
  sender: z.string(),
  to: z.string(),
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
  withdrawal_proofs: z.array(z.string()),
});

export const zMsgWithdrawDelegatorReward = z.object({
  "@type": z.literal(SUPPORTED_MESSAGE_TYPES.MsgWithdrawDelegatorReward),
  delegator_address: z.string(),
  validator_address: z.string(),
});

export const zMsgMoveExecute = z.object({
  "@type": z.union([
    z.literal(SUPPORTED_MESSAGE_TYPES.MsgExecute),
    z.literal(SUPPORTED_MESSAGE_TYPES.MsgExecuteJson),
  ]),
  args: z.array(z.string()),
  function_name: z.string(),
  module_address: z.string(),
  module_name: z.string(),
  sender: z.string(),
  type_args: z.array(z.string()),
});

export const zMsgMoveDexSwap = zMsgMoveExecute.extend({
  function_name: z.literal("swap_script"),
  module_address: z.literal("0x1"),
  module_name: z.literal("dex"),
});

export const zMsgMoveStableSwap = zMsgMoveExecute.extend({
  function_name: z.literal("swap_script"),
  module_address: z.literal("0x1"),
  module_name: z.literal("stableswap"),
});

const zMsgMoveSimpleMint = zMsgMoveExecute.extend({
  function_name: z.literal("mint"),
  module_address: z.literal("0x1"),
  module_name: z.literal("simple_nft"),
});

const zMsgMoveUsernameMint = zMsgMoveExecute.extend({
  function_name: z.literal("register_domain"),
  module_address: z.string().refine((address) => USERNAME_MODULE_ADDRESSES.includes(address)),
  module_name: z.literal("usernames"),
});

export const zMsgMoveNftMint = z.union([zMsgMoveSimpleMint, zMsgMoveUsernameMint]);

export const zMsgUndelegateLocked = zMsgMoveExecute.extend({
  function_name: z.literal("undelegate"),
  // Do we need to add more module addresses or just make this a string?
  module_address: z.literal("0x3a886b32a802582f2e446e74d4a24d1d7ed01adf46d2a8f65c5723887e708789"),
  module_name: z.literal("lock_staking"),
});
