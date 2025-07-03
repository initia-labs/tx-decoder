export interface Metadata {
  [objectAddress: string]: {
    collectionAddress: string;
    tokenId: string;
    tokenUri: string;
    type: "nft";
  };
}
