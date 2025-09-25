/**
 * EVM Contract ABIs used throughout the application
 */

/**
 * ERC20 Wrapper contract ABI for token conversion operations
 */
export const ERC20_WRAPPER_ABI = [
  {
    inputs: [
      { internalType: "address", name: "remoteToken", type: "address" },
      { internalType: "uint8", name: "decimals", type: "uint8" }
    ],
    name: "localTokens",
    outputs: [{ internalType: "address", name: "localToken", type: "address" }],
    stateMutability: "view",
    type: "function"
  }
] as const;

/**
 * ERC-165 Interface Detection ABI
 */
export const ERC165_ABI = [
  {
    inputs: [{ internalType: "bytes4", name: "interfaceId", type: "bytes4" }],
    name: "supportsInterface",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "view",
    type: "function"
  }
] as const;

/**
 * ERC-721 Transfer Event ABI (commonly used for NFT transfers)
 */
export const ERC721_TRANSFER_ABI = [
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: "address", name: "from", type: "address" },
      { indexed: true, internalType: "address", name: "to", type: "address" },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256"
      }
    ],
    name: "Transfer",
    type: "event"
  }
] as const;

/**
 * ERC-20 Transfer Event ABI (commonly used for token transfers)
 */
export const ERC20_TRANSFER_ABI = [
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: "address", name: "from", type: "address" },
      { indexed: true, internalType: "address", name: "to", type: "address" },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256"
      }
    ],
    name: "Transfer",
    type: "event"
  }
] as const;
