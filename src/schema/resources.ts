import { z } from "zod";

import { zJsonString } from "./common";

export const zAccountResource = z.object({
  address: z.string(),
  move_resource: z.string(),
  raw_bytes: z.string(),
  struct_tag: z.string(),
});
export type AccountResource = z.infer<typeof zAccountResource>;

export const zAccountResources = z.object({
  pagination: z.object({
    next_key: z.string().nullable(),
    total: z.string(),
  }),
  resources: z.array(zAccountResource),
});

export const zObjectCoreResource = zJsonString.pipe(
  z.object({
    data: z.object({
      allow_ungated_transfer: z.boolean(),
      owner: z.string(),
      version: z.string(),
    }),
    type: z.literal("0x1::object::ObjectCore"),
  })
);

export const zFungibleAssetMetadataResource = zJsonString.pipe(
  z.object({
    data: z.object({
      symbol: z.string(),
    }),
    type: z.literal("0x1::fungible_asset::Metadata"),
  })
);

export const zNftResource = zJsonString.pipe(
  z.object({
    data: z.object({
      collection: z.object({ inner: z.string() }),
      description: z.string(),
      token_id: z.string(),
      uri: z.string(),
    }),
    type: z.literal("0x1::nft::Nft"),
  })
);
export type NftResource = z.infer<typeof zNftResource>;

export const zCollectionResource = zJsonString.pipe(
  z.object({
    data: z.object({
      creator: z.string(),
      description: z.string(),
      name: z.string(),
      uri: z.string(),
    }),
    type: z.literal("0x1::collection::Collection"),
  })
);
export type CollectionResource = z.infer<typeof zCollectionResource>;
