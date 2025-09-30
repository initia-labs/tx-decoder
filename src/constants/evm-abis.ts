import { parseAbi } from "viem";

// ========================================
// ERC-20 Token Standard - Individual ABIs
// ========================================

// ERC-20 Functions
export const ERC20_TRANSFER_FUNCTION_ABI = parseAbi([
  "function transfer(address to, uint256 amount) returns (bool)"
]);

export const ERC20_TRANSFER_FROM_FUNCTION_ABI = parseAbi([
  "function transferFrom(address from, address to, uint256 amount) returns (bool)"
]);

export const ERC20_APPROVE_FUNCTION_ABI = parseAbi([
  "function approve(address spender, uint256 amount) returns (bool)"
]);

export const ERC20_BALANCE_OF_FUNCTION_ABI = parseAbi([
  "function balanceOf(address account) returns (uint256)"
]);

export const ERC20_TOTAL_SUPPLY_FUNCTION_ABI = parseAbi([
  "function totalSupply() returns (uint256)"
]);

export const ERC20_NAME_FUNCTION_ABI = parseAbi([
  "function name() returns (string)"
]);

export const ERC20_SYMBOL_FUNCTION_ABI = parseAbi([
  "function symbol() returns (string)"
]);

export const ERC20_DECIMALS_FUNCTION_ABI = parseAbi([
  "function decimals() returns (uint8)"
]);

// ERC-20 Events
export const ERC20_APPROVAL_EVENT_ABI = parseAbi([
  "event Approval(address indexed owner, address indexed spender, uint256 value)"
]);

export const ERC20_TRANSFER_EVENT_ABI = parseAbi([
  "event Transfer(address indexed from, address indexed to, uint256 value)"
]);

// ========================================
// ERC-721 NFT Standard - Individual ABIs
// ========================================

// ERC-721 Functions
export const ERC721_TRANSFER_FROM_FUNCTION_ABI = parseAbi([
  "function transferFrom(address from, address to, uint256 tokenId)"
]);

export const ERC721_SAFE_TRANSFER_FROM_FUNCTION_ABI = parseAbi([
  "function safeTransferFrom(address from, address to, uint256 tokenId)"
]);

export const ERC721_SAFE_TRANSFER_FROM_WITH_DATA_FUNCTION_ABI = parseAbi([
  "function safeTransferFrom(address from, address to, uint256 tokenId, bytes data)"
]);

export const ERC721_MINT_FUNCTION_ABI = parseAbi([
  "function mint(address to, uint256 tokenId)"
]);

export const ERC721_MINT_WITH_URI_FUNCTION_ABI = parseAbi([
  "function mint(address to, uint256 tokenId, string tokenURI)"
]);

export const ERC721_APPROVE_FUNCTION_ABI = parseAbi([
  "function approve(address to, uint256 tokenId)"
]);

export const ERC721_SET_APPROVAL_FOR_ALL_FUNCTION_ABI = parseAbi([
  "function setApprovalForAll(address operator, bool approved)"
]);

export const ERC721_BALANCE_OF_FUNCTION_ABI = parseAbi([
  "function balanceOf(address owner) returns (uint256)"
]);

export const ERC721_OWNER_OF_FUNCTION_ABI = parseAbi([
  "function ownerOf(uint256 tokenId) returns (address)"
]);

export const ERC721_TOKEN_URI_FUNCTION_ABI = parseAbi([
  "function tokenURI(uint256 tokenId) returns (string)"
]);

// ERC-721 Events
export const ERC721_APPROVAL_EVENT_ABI = parseAbi([
  "event Approval(address indexed owner, address indexed approved, uint256 indexed tokenId)"
]);

export const ERC721_APPROVAL_FOR_ALL_EVENT_ABI = parseAbi([
  "event ApprovalForAll(address indexed owner, address indexed operator, bool approved)"
]);

export const ERC721_TRANSFER_EVENT_ABI = parseAbi([
  "event Transfer(address indexed from, address indexed to, uint256 indexed tokenId)"
]);

// ========================================
// Contract Factory - Individual ABIs
// ========================================

// Contract Factory Functions
export const CONTRACT_FACTORY_CREATE_FUNCTION_ABI = parseAbi([
  "function create(bytes bytecode) returns (address)"
]);

export const CONTRACT_FACTORY_CREATE_CLONE_FUNCTION_ABI = parseAbi([
  "function createClone(address implementation) returns (address)"
]);

export const CONTRACT_FACTORY_CREATE_CLONE_WITH_SALT_FUNCTION_ABI = parseAbi([
  "function createClone(bytes32 salt) returns (address)"
]);

export const CONTRACT_FACTORY_DEPLOY_FUNCTION_ABI = parseAbi([
  "function deploy(bytes bytecode, bytes32 salt) returns (address)"
]);

// Contract Factory Events
export const CONTRACT_FACTORY_CONTRACT_CREATED_EVENT_ABI = parseAbi([
  "event ContractCreated(address indexed newContract, address indexed creator)"
]);

export const CONTRACT_FACTORY_CLONE_CREATED_EVENT_ABI = parseAbi([
  "event CloneCreated(address indexed clone, address indexed implementation)"
]);

// ERC20 Wrapper contract ABI for token conversion operations
export const ERC20_WRAPPER_ABI = parseAbi([
  "function localTokens(address remoteToken, uint8 decimals) view returns (address localToken)"
]);

// ERC-165 Interface Detection ABI
export const ERC165_ABI = parseAbi([
  "function supportsInterface(bytes4 interfaceId) view returns (bool)"
]);

// ERC Interface Identifiers for ERC165
export const ERC_INTERFACE_IDS = {
  /** ERC-20 interface identifier */
  ERC20: "0x36372b07",
  /** ERC-721 interface identifier */
  ERC721: "0x80ac58cd",
  /** ERC-1155 interface identifier */
  ERC1155: "0xd9b67a26"
} as const;

// Common function selectors for quick identification
export const FUNCTION_SELECTORS = {
  // ERC-20
  ERC20_APPROVE: "0x095ea7b3",
  ERC20_TRANSFER: "0xa9059cbb",
  ERC20_TRANSFER_FROM: "0x23b872dd",

  // ERC-721
  ERC721_APPROVE: "0x095ea7b3",
  ERC721_SAFE_TRANSFER_FROM: "0x42842e0e",
  ERC721_SAFE_TRANSFER_FROM_WITH_DATA: "0xb88d4fde",
  ERC721_SET_APPROVAL_FOR_ALL: "0xa22cb465",
  ERC721_TRANSFER_FROM: "0x23b872dd"
} as const;

// Common Event Signatures (topics[0])
export const EVENT_SIGNATURES = {
  /** Approval(address,address,uint256) */
  APPROVAL:
    "0x8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925",
  /** ApprovalForAll(address,address,bool) */
  APPROVAL_FOR_ALL:
    "0x17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31",
  /** Transfer(address,address,uint256) - Used in both ERC-20 and ERC-721 */
  TRANSFER: "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef"
} as const;
