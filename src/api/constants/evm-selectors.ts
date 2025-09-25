/**
 * ERC-165 Function Selectors
 */
export const ERC165_SELECTORS = {
  /** bytes4(keccak256("supportsInterface(bytes4)")) */
  SUPPORTS_INTERFACE: "0x01ffc9a7"
} as const;

/**
 * ERC Interface Identifiers
 */
export const ERC_INTERFACE_IDS = {
  /** ERC-20 interface identifier */
  ERC20: "0x36372b07",
  /** ERC-721 interface identifier */
  ERC721: "0x80ac58cd",
  /** ERC-1155 interface identifier */
  ERC1155: "0xd9b67a26"
} as const;

/**
 * Common Event Signatures (topics[0])
 */
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
