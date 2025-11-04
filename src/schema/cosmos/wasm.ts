import { z } from "zod";

import { SUPPORTED_MESSAGE_TYPES } from "../../message-types";
import { zCoin } from "../common";

/**
 * Schema for CosmWasm Execute Contract message
 * Used for CW-20 transfers and other contract executions
 */
export const zMsgExecuteContract = z.object({
  "@type": z.literal(SUPPORTED_MESSAGE_TYPES.MsgExecuteContract),
  contract: z.string(),
  funds: z.array(zCoin),
  msg: z.union([z.string(), z.record(z.any())]), // Can be base64 string or JSON object
  sender: z.string()
});

/**
 * Schema for CosmWasm Instantiate Contract message
 * Used to create new contract instances from a code ID
 */
export const zMsgInstantiateContract = z.object({
  "@type": z.literal(SUPPORTED_MESSAGE_TYPES.MsgInstantiateContract),
  admin: z.string().optional(),
  code_id: z.string(),
  funds: z.array(zCoin),
  label: z.string(),
  msg: z.union([z.string(), z.record(z.any())]), // Can be base64 string or JSON object
  sender: z.string()
});

/**
 * Schema for decoded CW-20 transfer message
 */
export const zCw20TransferMsg = z.object({
  transfer: z.object({
    amount: z.string(),
    recipient: z.string()
  })
});

/**
 * Schema for decoded CW-20 transfer_from message
 */
export const zCw20TransferFromMsg = z.object({
  transfer_from: z.object({
    amount: z.string(),
    owner: z.string(),
    recipient: z.string()
  })
});

/**
 * Schema for decoded CW-721 transfer_nft message
 */
export const zCw721TransferNftMsg = z.object({
  transfer_nft: z.object({
    recipient: z.string(),
    token_id: z.string()
  })
});

/**
 * Schema for decoded CW-721 mint message
 */
export const zCw721MintMsg = z.object({
  mint: z.object({
    extension: z.any().optional(),
    owner: z.string(),
    token_id: z.string(),
    token_uri: z.string().optional()
  })
});
