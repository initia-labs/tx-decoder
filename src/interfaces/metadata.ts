import { CollectionResource } from "@/schema";

export interface Metadata {
  [objectAddress: string]: {
    collection: CollectionResource["data"];
    collectionAddress: string;
    tokenId: string;
    tokenUri: string;
    type: "nft";
  };
}
