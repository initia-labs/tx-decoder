import { z } from "zod";

export const zSwapEvent = z.object({
  fee_amount: z.string(),
  liquidity_token: z.string(),
  offer_amount: z.string(),
  offer_coin: z.string(),
  return_amount: z.string(),
  return_coin: z.string(),
});
export type SwapEvent = z.infer<typeof zSwapEvent>;

export const zMintNFTEvent = z.object({
  collection: z.string(),
  nft: z.string(),
  token_id: z.string(),
});
export type MintNFTEvent = z.infer<typeof zMintNFTEvent>;

export const zMsgMoveObjectCreateEvent = z.object({
  object: z.string(),
  owner: z.string(),
  version: z.string(),
});
export type MoveObjectCreateEvent = z.infer<typeof zMsgMoveObjectCreateEvent>;

export const zMsgMoveObjectTransferEvent = z.object({
  from: z.string(),
  object: z.string(),
  to: z.string(),
});
export type MoveObjectTransferEvent = z.infer<typeof zMsgMoveObjectTransferEvent>;

export const zMsgMoveNFTBurnEvent = z.object({
  collection: z.string(),
  nft: z.string(),
  token_id: z.string(),
});
export type MoveNFTBurnEvent = z.infer<typeof zMsgMoveNFTBurnEvent>;

export const zMsgIbcNftTransferSendPacketEvent = z.object({
  classId: z.string(),
  classUri: z.string().nullable(),
  receiver: z.string(),
  sender: z.string(),
  tokenIds: z.array(z.string()),
  tokenUris: z.array(z.string()),
});
export type IbcNftTransferSendPacketEvent = z.infer<typeof zMsgIbcNftTransferSendPacketEvent>;

export const zMsgMoveCreateCollectionEvent = z.object({
  collection: z.string(),
  creator: z.string(),
  name: z.string(),
});
export type MoveCreateCollectionEvent = z.infer<typeof zMsgMoveCreateCollectionEvent>;
