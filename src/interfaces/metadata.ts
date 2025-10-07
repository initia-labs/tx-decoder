import { CollectionResource } from "@/schema";

export interface MoveNftMetadata {
  collection: CollectionResource["data"];
  collectionAddress: string;
  tokenId: string;
  tokenUri: string;
  type: "move_nft";
}

export interface EvmNftMetadata {
  contractAddress: string;
  tokenId: string;
  tokenUri: string;
  type: "evm_nft";
}

/**
 * Metadata for NFTs
 * - For Move: key is the object address (bech32 format), value is MoveNftMetadata
 * - For EVM: key is the contract address in hex format (e.g., "0x1234..."),
 *            value is nested object with tokenId as key and EvmNftMetadata as value
 */
export interface Metadata {
  [key: string]: MoveNftMetadata | { [tokenId: string]: EvmNftMetadata };
}
