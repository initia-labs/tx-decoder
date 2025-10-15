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
 * Metadata container for Move blockchain NFTs.
 *
 * Structure:
 * - Key: Object address in bech32 format (e.g., "init1...")
 * - Value: MoveNftMetadata containing collection and token information
 *
 * Each Move NFT is uniquely identified by its object address.
 */
export interface MoveMetadata {
  [object: string]: MoveNftMetadata;
}

/**
 * Metadata container for EVM-compatible NFTs (ERC-721).
 *
 * Structure:
 * - Outer key: Contract address in hex format (e.g., "0x1234...")
 * - Inner key: Token ID as a string
 * - Value: EvmNftMetadata containing contract and token information
 *
 * Nested structure allows multiple tokens from the same contract
 * to be efficiently organized and accessed.
 */
export interface EvmMetadata {
  [contractAddress: string]: { [tokenId: string]: EvmNftMetadata };
}
