import { z } from "zod";

import { SUPPORTED_MESSAGE_TYPES } from "../../message-types";
import { zCoin } from "../common";

export const zMsgIbcTransfer = z.object({
  "@type": z.literal(SUPPORTED_MESSAGE_TYPES.MsgIbcTransfer),
  memo: z.string(),
  receiver: z.string(),
  sender: z.string(),
  source_channel: z.string(),
  source_port: z.string(),
  timeout_height: z.object({
    revision_height: z.string(),
    revision_number: z.string()
  }),
  timeout_timestamp: z.string(),
  token: zCoin
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
    revision_number: z.string()
  }),
  timeout_timestamp: z.string(),
  token_ids: z.array(z.string())
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
      revision_number: z.string()
    }),
    timeout_timestamp: z.string()
  }),
  proof_commitment: z.string(),
  proof_height: z.object({
    revision_height: z.string(),
    revision_number: z.string()
  }),
  signer: z.string()
});
