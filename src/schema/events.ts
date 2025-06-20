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
