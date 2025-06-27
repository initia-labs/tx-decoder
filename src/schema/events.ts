import { z } from "zod";

import { zJsonString } from "./common";

export const zSwapEvent = zJsonString.pipe(
  z.object({
    fee_amount: z.string(),
    liquidity_token: z.string(),
    offer_amount: z.string(),
    offer_coin: z.string(),
    return_amount: z.string(),
    return_coin: z.string(),
  })
);
export type SwapEvent = z.infer<typeof zSwapEvent>;

export const zMintNftEvent = zJsonString.pipe(
  z.object({
    collection: z.string(),
    nft: z.string(),
    token_id: z.string(),
  })
);
export type MintNftEvent = z.infer<typeof zMintNftEvent>;

export const zMsgMoveObjectCreateEvent = zJsonString.pipe(
  z.object({
    object: z.string(),
    owner: z.string(),
    version: z.string(),
  })
);
export type MoveObjectCreateEvent = z.infer<typeof zMsgMoveObjectCreateEvent>;

export const zMsgMoveObjectTransferEvent = zJsonString.pipe(
  z.object({
    from: z.string(),
    object: z.string(),
    to: z.string(),
  })
);
export type MoveObjectTransferEvent = z.infer<
  typeof zMsgMoveObjectTransferEvent
>;

export const zMsgMoveNftBurnEvent = zJsonString.pipe(
  z.object({
    collection: z.string(),
    nft: z.string(),
    token_id: z.string(),
  })
);
export type MoveNftBurnEvent = z.infer<typeof zMsgMoveNftBurnEvent>;

export const zMsgIbcNftTransferSendPacketEvent = zJsonString.pipe(
  z.object({
    classId: z.string(),
    classUri: z.string().nullable(),
    receiver: z.string(),
    sender: z.string(),
    tokenIds: z.array(z.string()),
    tokenUris: z.array(z.string()),
  })
);
export type IbcNftTransferSendPacketEvent = z.infer<
  typeof zMsgIbcNftTransferSendPacketEvent
>;

export const zMsgMoveCreateCollectionEvent = zJsonString.pipe(
  z.object({
    collection: z.string(),
    creator: z.string(),
    name: z.string(),
  })
);
export type MoveCreateCollectionEvent = z.infer<
  typeof zMsgMoveCreateCollectionEvent
>;

export const zDelegateLockedEvent = zJsonString.pipe(
  z.object({
    locked_share: z.string(),
    metadata: z.string(),
    release_time: z.string(),
    staking_account: z.string(),
    validator: z.string(),
  })
);
export type DelegateLockedEvent = z.infer<typeof zDelegateLockedEvent>;

export const zUndelegateLockedEvent = zJsonString.pipe(
  z.object({
    locked_share: z.string(),
    metadata: z.string(),
    release_time: z.string(),
    staking_account: z.string(),
    validator: z.string(),
  })
);
export type UndelegateLockedEvent = z.infer<typeof zUndelegateLockedEvent>;

export const zDepositEvent = zJsonString.pipe(
  z.object({
    amount: z.string(),
    metadata_addr: z.string(),
    store_addr: z.string(),
  })
);
export type DepositEvent = z.infer<typeof zDepositEvent>;

export const zWithdrawEvent = zJsonString.pipe(
  z.object({
    amount: z.string(),
    metadata_addr: z.string(),
    store_addr: z.string(),
  })
);
export type WithdrawEvent = z.infer<typeof zWithdrawEvent>;
