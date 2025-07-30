import { z } from "zod";

import {
  DEX_UTILS_MODULE_ADDRESS,
  LOCK_STAKING_MODULE_ADDRESS,
  USERNAME_MODULE_ADDRESSES,
} from "@/constants";

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

export const zMsgDelegate = z.object({
  "@type": z.literal(SUPPORTED_MESSAGE_TYPES.MsgDelegate),
  amount: z.array(zCoin),
  delegator_address: z.string(),
  validator_address: z.string(),
});

export const zMsgUndelegate = z.object({
  "@type": z.literal(SUPPORTED_MESSAGE_TYPES.MsgUndelegate),
  amount: z.array(zCoin),
  delegator_address: z.string(),
  validator_address: z.string(),
});

export const zMsgRedelegate = z.object({
  "@type": z.literal(SUPPORTED_MESSAGE_TYPES.MsgRedelegate),
  amount: z.array(zCoin),
  delegator_address: z.string(),
  validator_dst_address: z.string(),
  validator_src_address: z.string(),
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

export const zMsgIbcTransfer = z.object({
  "@type": z.literal(SUPPORTED_MESSAGE_TYPES.MsgIbcTransfer),
  memo: z.string(),
  receiver: z.string(),
  sender: z.string(),
  source_channel: z.string(),
  source_port: z.string(),
  timeout_height: z.object({
    revision_height: z.string(),
    revision_number: z.string(),
  }),
  timeout_timestamp: z.string(),
  token: zCoin,
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

export const zMsgDelegateLocked = zMsgMoveExecute.extend({
  function_name: z.literal("delegate"),
  module_address: z.literal(LOCK_STAKING_MODULE_ADDRESS),
  module_name: z.literal("lock_staking"),
});

export const zMsgVipLockStake = zMsgMoveExecute.extend({
  function_name: z.literal("batch_lock_stake_script"),
  module_address: z.literal(LOCK_STAKING_MODULE_ADDRESS),
  module_name: z.literal("vip"),
});

export const zMsgUndelegateLocked = zMsgMoveExecute.extend({
  function_name: z.literal("undelegate"),
  module_address: z.literal(LOCK_STAKING_MODULE_ADDRESS),
  module_name: z.literal("lock_staking"),
});

export const zMsgRedelegateLocked = zMsgMoveExecute.extend({
  function_name: z.literal("redelegate"),
  module_address: z.literal(LOCK_STAKING_MODULE_ADDRESS),
  module_name: z.literal("lock_staking"),
});

export const zMsgWithdrawDelegatorRewardLocked = zMsgMoveExecute.extend({
  function_name: z.literal("withdraw_delegator_reward"),
  module_address: z.literal(LOCK_STAKING_MODULE_ADDRESS),
  module_name: z.literal("lock_staking"),
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
  module_address: z
    .string()
    .refine((address) => USERNAME_MODULE_ADDRESSES.includes(address)),
  module_name: z.literal("usernames"),
});

export const zMsgMoveNftMint = z.union([
  zMsgMoveSimpleMint,
  zMsgMoveUsernameMint,
]);

export const zMsgMoveObjectTransfer = zMsgMoveExecute.extend({
  function_name: z.literal("transfer_call"),
  module_address: z.literal("0x1"),
  module_name: z.literal("object"),
});

export const zMsgDepositMinitswap = zMsgMoveExecute.extend({
  function_name: z.literal("provide"),
  module_address: z.literal("0x1"),
  module_name: z.literal("minitswap"),
});

export const zMsgIbcSendNft = z.object({
  "@type": z.literal(SUPPORTED_MESSAGE_TYPES.MsgIbcNftTransfer),
  class_id: z.string(),
  memo: z.string(),
  receiver: z.string(),
  sender: z.string(),
  source_channel: z.string(),
  source_port: z.string(),
  timeout_height: z.object({
    revision_height: z.string(),
    revision_number: z.string(),
  }),
  timeout_timestamp: z.string(),
  token_ids: z.array(z.string()),
});

export const zMsgIbcRecvPacket = z.object({
  "@type": z.literal(SUPPORTED_MESSAGE_TYPES.MsgIbcRecvPacket),
  packet: z.object({
    data: z.string(),
    destination_channel: z.string(),
    destination_port: z.string(),
    sequence: z.string(),
    source_channel: z.string(),
    source_port: z.string(),
    timeout_height: z.object({
      revision_height: z.string(),
      revision_number: z.string(),
    }),
    timeout_timestamp: z.string(),
  }),
  proof_commitment: z.string(),
  proof_height: z.object({
    revision_height: z.string(),
    revision_number: z.string(),
  }),
  signer: z.string(),
});

export const zMsgDepositStakeLiquidity = zMsgMoveExecute.extend({
  function_name: z.literal("unproportional_provide_stake"),
  module_address: z.literal(DEX_UTILS_MODULE_ADDRESS),
  module_name: z.literal("dex_utils"),
});

export const zMsgDepositLiquidity = zMsgMoveExecute.extend({
  function_name: z.literal("unproportional_provide"),
  module_address: z.literal(DEX_UTILS_MODULE_ADDRESS),
  module_name: z.literal("dex_utils"),
});

export const zMsgDepositStakeLockLiquidity = zMsgMoveExecute.extend({
  function_name: z.literal("unproportional_provide_lock_stake"),
  module_address: z.literal(DEX_UTILS_MODULE_ADDRESS),
  module_name: z.literal("dex_utils"),
});
