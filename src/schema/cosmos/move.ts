import { z } from "zod";

import {
  DEX_UTILS_MODULE_ADDRESS,
  INITIA_VAULT_MODULE_ADDRESS,
  USERNAME_MODULE_ADDRESSES
} from "@/constants";

import { SUPPORTED_MESSAGE_TYPES } from "../../message-types";

export const zMsgMoveExecute = z.object({
  "@type": z.union([
    z.literal(SUPPORTED_MESSAGE_TYPES.MsgExecute),
    z.literal(SUPPORTED_MESSAGE_TYPES.MsgExecuteJson)
  ]),
  args: z.array(z.string()),
  function_name: z.string(),
  module_address: z.string(),
  module_name: z.string(),
  sender: z.string(),
  type_args: z.array(z.string())
});

// Staking related Move messages
export const zMsgDelegateLocked = zMsgMoveExecute.extend({
  function_name: z.literal("delegate"),
  module_address: z.literal(INITIA_VAULT_MODULE_ADDRESS),
  module_name: z.literal("lock_staking")
});

export const zMsgUndelegateLocked = zMsgMoveExecute.extend({
  function_name: z.literal("undelegate"),
  module_address: z.literal(INITIA_VAULT_MODULE_ADDRESS),
  module_name: z.literal("lock_staking")
});

export const zMsgRedelegateLocked = zMsgMoveExecute.extend({
  function_name: z.literal("redelegate"),
  module_address: z.literal(INITIA_VAULT_MODULE_ADDRESS),
  module_name: z.literal("lock_staking")
});

export const zMsgWithdrawDelegatorRewardLocked = zMsgMoveExecute.extend({
  function_name: z.literal("withdraw_delegator_reward"),
  module_address: z.literal(INITIA_VAULT_MODULE_ADDRESS),
  module_name: z.literal("lock_staking")
});

// VIP related Move messages
export const zMsgVipLockStake = zMsgMoveExecute.extend({
  function_name: z.literal("batch_lock_stake_script"),
  module_address: z.literal(INITIA_VAULT_MODULE_ADDRESS),
  module_name: z.literal("vip")
});

export const zMsgVipClaimEsinit = zMsgMoveExecute.extend({
  function_name: z.literal("batch_claim_user_reward_script"),
  module_address: z.literal(INITIA_VAULT_MODULE_ADDRESS),
  module_name: z.literal("vip")
});

export const zMsgVipGaugeVote = zMsgMoveExecute.extend({
  function_name: z.literal("vote"),
  module_address: z.literal(INITIA_VAULT_MODULE_ADDRESS),
  module_name: z.literal("weight_vote")
});

// DEX related Move messages
export const zMsgMoveDexSwap = zMsgMoveExecute.extend({
  function_name: z.literal("swap_script"),
  module_address: z.literal("0x1"),
  module_name: z.literal("dex")
});

export const zMsgMoveStableSwap = zMsgMoveExecute.extend({
  function_name: z.literal("swap_script"),
  module_address: z.literal("0x1"),
  module_name: z.literal("stableswap")
});

// NFT related Move messages
const zMsgMoveSimpleMint = zMsgMoveExecute.extend({
  function_name: z.literal("mint"),
  module_address: z.literal("0x1"),
  module_name: z.literal("simple_nft")
});

const zMsgMoveUsernameMint = zMsgMoveExecute.extend({
  function_name: z.literal("register_domain"),
  module_address: z
    .string()
    .refine((address) => USERNAME_MODULE_ADDRESSES.includes(address)),
  module_name: z.literal("usernames")
});

export const zMsgMoveNftMint = z.union([
  zMsgMoveSimpleMint,
  zMsgMoveUsernameMint
]);

export const zMsgMoveObjectTransfer = zMsgMoveExecute.extend({
  function_name: z.literal("transfer_call"),
  module_address: z.literal("0x1"),
  module_name: z.literal("object")
});

// Minitswap related Move messages
export const zMsgDepositMinitswap = zMsgMoveExecute.extend({
  function_name: z.literal("provide"),
  module_address: z.literal("0x1"),
  module_name: z.literal("minitswap")
});

export const zMsgWithdrawMinitswap = zMsgMoveExecute.extend({
  function_name: z.literal("unbond"),
  module_address: z.literal("0x1"),
  module_name: z.literal("minitswap")
});

export const zMsgClaimMinitswap = zMsgMoveExecute.extend({
  function_name: z.literal("withdraw_unbond"),
  module_address: z.literal("0x1"),
  module_name: z.literal("minitswap")
});

// Liquidity related Move messages
export const zMsgDepositStakeLiquidity = zMsgMoveExecute.extend({
  function_name: z.literal("unproportional_provide_stake"),
  module_address: z.literal(DEX_UTILS_MODULE_ADDRESS),
  module_name: z.literal("dex_utils")
});

export const zMsgDepositLiquidity = zMsgMoveExecute.extend({
  function_name: z.literal("unproportional_provide"),
  module_address: z.literal(DEX_UTILS_MODULE_ADDRESS),
  module_name: z.literal("dex_utils")
});

export const zMsgDirectDepositLiquidity = zMsgMoveExecute.extend({
  function_name: z.literal("provide_liquidity_script"),
  module_address: z.literal("0x1"),
  module_name: z.literal("dex")
});

export const zMsgDepositStakeLockLiquidity = zMsgMoveExecute.extend({
  function_name: z.literal("unproportional_provide_lock_stake"),
  module_address: z.literal(DEX_UTILS_MODULE_ADDRESS),
  module_name: z.literal("dex_utils")
});

export const zMsgExtendLiquidity = zMsgMoveExecute.extend({
  function_name: z.literal("extend"),
  module_address: z.literal(INITIA_VAULT_MODULE_ADDRESS),
  module_name: z.literal("lock_staking")
});

export const zMsgMergeLiquidity = zMsgMoveExecute.extend({
  function_name: z.literal("batch_extend"),
  module_address: z.literal(INITIA_VAULT_MODULE_ADDRESS),
  module_name: z.literal("lock_staking")
});

export const zMsgWithdrawLiquidity = zMsgMoveExecute.extend({
  function_name: z.literal("withdraw_liquidity_script"),
  module_address: z.literal("0x1"),
  module_name: z.literal("dex")
});

export const zMsgStableswapWithdrawLiquidity = zMsgMoveExecute.extend({
  function_name: z.literal("withdraw_liquidity_script"),
  module_address: z.literal("0x1"),
  module_name: z.literal("stableswap")
});

export const zMsgStableswapProvideLiquidity = zMsgMoveExecute.extend({
  function_name: z.literal("provide_liquidity_script"),
  module_address: z.literal("0x1"),
  module_name: z.literal("stableswap")
});
