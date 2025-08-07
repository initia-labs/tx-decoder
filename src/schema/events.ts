import { z } from "zod";

import { zJsonString } from "./common";

export const zSwapEvent = zJsonString.pipe(
  z.object({
    fee_amount: z.string(),
    liquidity_token: z.string(),
    offer_amount: z.string(),
    offer_coin: z.string(),
    return_amount: z.string(),
    return_coin: z.string()
  })
);

export const zCreateEvent = zJsonString.pipe(
  z.object({
    object: z.string(),
    owner: z.string(),
    version: z.string()
  })
);

export const zMintNftEvent = zJsonString.pipe(
  z.object({
    collection: z.string(),
    nft: z.string(),
    token_id: z.string()
  })
);

export const zMsgMoveObjectCreateEvent = zJsonString.pipe(
  z.object({
    object: z.string(),
    owner: z.string(),
    version: z.string()
  })
);

export const zMsgMoveObjectTransferEvent = zJsonString.pipe(
  z.object({
    from: z.string(),
    object: z.string(),
    to: z.string()
  })
);

export const zVoteEvent = zJsonString.pipe(
  z.object({
    account: z.string(),
    cycle: z.string(),
    max_voting_power: z.string(),
    voting_power: z.string(),
    weights: z.array(
      z.object({
        bridge_id: z.string(),
        weight: z.string()
      })
    )
  })
);

export const zMsgMoveNftBurnEvent = zJsonString.pipe(
  z.object({
    collection: z.string(),
    nft: z.string(),
    token_id: z.string()
  })
);

export const zMsgIbcNftTransferSendPacketEvent = zJsonString.pipe(
  z.object({
    classId: z.string(),
    classUri: z.string().nullable(),
    receiver: z.string(),
    sender: z.string(),
    tokenIds: z.array(z.string()),
    tokenUris: z.array(z.string())
  })
);

export const zMsgMoveCreateCollectionEvent = zJsonString.pipe(
  z.object({
    collection: z.string(),
    creator: z.string(),
    name: z.string()
  })
);

export const zDepositDelegationEvent = zJsonString.pipe(
  z.object({
    locked_share: z.string(),
    metadata: z.string(),
    release_time: z.string(),
    staking_account: z.string(),
    validator: z.string()
  })
);

export const zWithdrawDelegationEvent = zJsonString.pipe(
  z.object({
    locked_share: z.string(),
    metadata: z.string(),
    release_time: z.string(),
    staking_account: z.string(),
    validator: z.string()
  })
);

export const zDepositEvent = zJsonString.pipe(
  z.object({
    amount: z.string(),
    metadata_addr: z.string(),
    store_addr: z.string()
  })
);

export const zDepositOwnerEvent = zJsonString.pipe(
  z.object({
    owner: z.string()
  })
);

export const zWithdrawEvent = zJsonString.pipe(
  z.object({
    amount: z.string(),
    metadata_addr: z.string(),
    store_addr: z.string()
  })
);

export const zWithdrawOwnerEvent = zJsonString.pipe(
  z.object({
    owner: z.string()
  })
);

export const zMsgIbcTransferSendPacketEvent = zJsonString.pipe(
  z.object({
    amount: z.string(),
    denom: z.string(),
    receiver: z.string(),
    sender: z.string()
  })
);

export const zMinitswapProvideEvent = zJsonString.pipe(
  z.object({
    provide_amount: z.string(),
    share_amount: z.string()
  })
);

export const zMintEvent = zJsonString.pipe(
  z.object({
    amount: z.string(),
    metadata_addr: z.string()
  })
);
export const zProvideEvent = zJsonString.pipe(
  z.object({
    coin_a: z.string(),
    coin_a_amount: z.string(),
    coin_b: z.string(),
    coin_b_amount: z.string(),
    liquidity: z.string(),
    liquidity_token: z.string()
  })
);
export const zMinitswapUnbondEvent = zJsonString.pipe(
  z.object({
    account: z.string(),
    release_time: z.string(),
    share_amount: z.string(),
    withdraw_amount: z.string()
  })
);

export const zBurnEvent = zJsonString.pipe(
  z.object({
    amount: z.string(),
    metadata_addr: z.string()
  })
);

export const zMinitswapWithdrawUnbondEvent = zJsonString.pipe(
  z.object({
    account: z.string(),
    release_time: z.string(),
    share_amount: z.string(),
    withdraw_amount: z.string()
  })
);

export const zDexWithdrawEvent = zJsonString.pipe(
  z.object({
    coin_a: z.string(),
    coin_a_amount: z.string(),
    coin_b: z.string(),
    coin_b_amount: z.string(),
    liquidity: z.string(),
    liquidity_token: z.string()
  })
);

export const zUserVestingCreateEvent = zJsonString.pipe(
  z.object({
    account: z.string(),
    bridge_id: z.string(),
    end_stage: z.string(),
    initial_reward: z.string(),
    l2_score: z.string(),
    minimum_score: z.string(),
    start_stage: z.string()
  })
);
