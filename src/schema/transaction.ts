import { SignMode } from "cosmjs-types/cosmos/tx/signing/v1beta1/signing";
import z from "zod";

import { zAny, zCoin, zUtcDate } from "./common";
import { zMessage } from "./messages";

const zPubkeySingle = z.object({
  "@type": z.string(),
  key: z.string(),
});

const zPubkeyMulti = z.object({
  "@type": z.string(),
  public_keys: z.array(zPubkeySingle),
  threshold: z.number(),
});

const zModeInfoSingle = z.object({
  single: z.object({
    mode: z.union([
      z.custom<SignMode>((val) => SignMode[val as keyof typeof SignMode]),
      z.literal(9999), // minievm sign mode,
    ]),
  }),
});

const zModeInfoMulti = z.object({
  multi: z.object({
    bitarray: z.object({
      elems: z.string(), // base64 encoded of Uint8Array
      extra_bits_stored: z.number(),
    }),
    // assuming one nesting level for now as multisig pubkey is also one level
    mode_infos: z.array(zModeInfoSingle),
  }),
});

const zSignerInfoBase = z.object({
  sequence: z.string(),
});

const zSignerInfoSingle = zSignerInfoBase.extend({
  mode_info: zModeInfoSingle,
  public_key: zPubkeySingle,
});

const zSignerInfoMulti = zSignerInfoBase.extend({
  mode_info: zModeInfoMulti,
  public_key: zPubkeyMulti,
});

const zSignerInfo = z.union([zSignerInfoSingle, zSignerInfoMulti]);

const zAuthInfo = z.object({
  fee: z.object({
    amount: z.array(zCoin),
    gas_limit: z.string(),
    granter: z.string(),
    payer: z.string(),
  }),
  signer_infos: z.array(zSignerInfo),
});

const zTxBody = z.object({
  extension_options: zAny.array(),
  memo: z.string(),
  messages: z.array(zMessage),
  non_critical_extension_options: zAny.array(),
  timeout_height: z.string(),
});

const zTx = z.object({
  auth_info: zAuthInfo,
  body: zTxBody,
  signatures: z.array(z.string()),
});

const zEventAttribute = z.object({
  index: z.boolean().optional(),
  key: z.string(),
  value: z.union([z.string(), z.null().transform(() => "")]),
});
export type EventAttribute = z.infer<typeof zEventAttribute>;

const zEvent = z.object({
  attributes: z.array(zEventAttribute),
  type: z.string(),
});
export type Event = z.infer<typeof zEvent>;

const zLog = z.object({
  events: z.array(zEvent),
  log: z.string(),
  msg_index: z.number(),
});
export type Log = z.infer<typeof zLog>;

export const zTxResponse = z.object({
  code: z.number(),
  codespace: z.string(),
  data: z.string(),
  events: z.array(zEvent),
  gas_used: z.string(),
  gas_wanted: z.string(),
  height: z.string(),
  info: z.string(),
  logs: z.array(zLog),
  raw_log: z.string(),
  timestamp: zUtcDate,
  tx: zTx,
  txhash: z.string(),
});
export type TxResponse = z.infer<typeof zTxResponse>;
