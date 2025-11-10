# Transaction Decoder

[![npm version](https://badge.fury.io/js/%40initia%2Ftx-decoder.svg)](https://badge.fury.io/js/%40initia%2Ftx-decoder)
[![Bundle Size](https://img.shields.io/bundlephobia/minzip/@initia/tx-decoder)](https://bundlephobia.com/package/@initia/tx-decoder)
[![npm downloads](https://img.shields.io/npm/dm/@initia/tx-decoder)](https://www.npmjs.com/package/@initia/tx-decoder)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Unit Tests](https://img.shields.io/badge/tests-passing-brightgreen.svg)](https://github.com/initia-labs/tx-decoder/actions)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A TypeScript library for decoding Cosmos SDK transactions, providing human-readable message decoding and balance change tracking.

## Table of Contents

- [Features](#-features)
- [Installation](#-installation)
- [Quick Start](#-quick-start)
- [API Reference](#-api-reference)
- [Supported Message Types](#-supported-message-types)
- [Development](#-development)
- [License](#-license)

## ✨ [Features](#-features)

- **Human-Readable Output**: Decodes Cosmos SDK transaction messages into a clear, human-readable JSON format.
- **Multi-VM Support**: Full support for Move VM, EVM, and WASM virtual machines with VM-specific balance tracking.
- **Balance Tracking**: Tracks fungible token deltas and correlates Move objects or EVM NFTs with specific tokenId tracking based on the originating VM.
- **Type-Safe**: Built with TypeScript and validated with Zod for robust, type-safe operations.
- **Extensible**: Features a flexible handler system that can be easily extended to support new message types.
- **Immutable State**: Uses Immer for safe and predictable state management.
- **ABI-driven EVM Support**: Uses `viem` to decode EVM event logs (ERC-20 and ERC-721 `Transfer` events) without relying on Cosmos `coin_spent` events.

## 📦 [Installation](#-installation)

```bash
# npm
npm install @initia/tx-decoder

# yarn
yarn add @initia/tx-decoder

# pnpm
pnpm add @initia/tx-decoder

# bun
bun add @initia/tx-decoder
```

## 🚀 [Quick Start](#-quick-start)

```typescript
import { TxDecoder } from "@initia/tx-decoder";

const decoder = new TxDecoder({
  registryUrl: "https://registry.initia.xyz/",
  restUrl: "https://rest.initia.xyz"
});

// Decode a Cosmos transaction for L1 and Move L2
const decodedTx = await decoder.decodeCosmosTransaction(txResponse);
console.log(decodedTx);

// Decode a Cosmos transaction for EVM L2
const decodedEvmTx = await decoder.decodeCosmosEvmTransaction(txResponse);
console.log(decodedEvmTx);

// Decode a Cosmos transaction for WASM L2
const decodedWasmTx = await decoder.decodeCosmosWasmTransaction(txResponse);
console.log(decodedWasmTx);

// Decode a native Ethereum RPC transaction
const ethereumTx = await decoder.decodeEthereumTransaction({
  tx: ethereumTransaction,
  txReceipt: ethereumTransactionReceipt
});
console.log(ethereumTx);
```

Each decoded message includes a `balanceChanges` object tagged with `vm: "move"`, `vm: "evm"`, or `vm: "wasm"`. EVM balance deltas are sourced from decoded log events via `viem` rather than Cosmos bank events.

## 📖 [API Reference](#-api-reference)

### `TxDecoder`

The main class for decoding transactions.

#### Constructor

```typescript
new TxDecoder(config: DecoderConfig)
```

**Parameters:**

- `config: DecoderConfig` - Configuration object with the following properties:
  - `registryUrl: string` - Registry URL to retrieve chain registries
  - `restUrl: string` - REST endpoint of the Initia chain to query on-chain data
  - `jsonRpcUrl?: string` - JSON-RPC endpoint for EVM L2 chains
  - `timeoutMs?: number` - HTTP request timeout in milliseconds (default: 10000)

#### Methods

##### `decodeCosmosTransaction(txResponse: TxResponse): Promise<DecodedTx>`

Decodes a Cosmos transaction response for L1 and Move L2 chains into a human-readable format.

**Parameters:**

- `txResponse: TxResponse` - The raw transaction response from the blockchain

**Returns:** `Promise<DecodedTx>` - A promise that resolves to a decoded transaction object

##### `decodeCosmosEvmTransaction(txResponse: TxResponse): Promise<DecodedTx>`

Decodes a Cosmos transaction response for EVM L2 chains, processing only general message types (excludes `/initia.move` and `/opinit` prefixes).

**Note:** Requires providing `jsonRpcUrl` in `TxDecoder` config to resolve EVM denominations.

**Parameters:**

- `txResponse: TxResponse` - The raw transaction response from the blockchain

**Returns:** `Promise<DecodedTx>` - A promise that resolves to a decoded transaction object

##### `decodeCosmosWasmTransaction(txResponse: TxResponse): Promise<DecodedTx>`

Decodes a Cosmos transaction response for WASM L2 chains. Balance changes are tracked from `transfer` events in transaction logs.

**Parameters:**

- `txResponse: TxResponse` - The raw transaction response from the blockchain

**Returns:** `Promise<DecodedTx>` - A promise that resolves to a decoded transaction object

##### `decodeEthereumTransaction(payload: EthereumRpcPayload): Promise<DecodedEthereumTx>`

Decodes a native Ethereum RPC transaction with balance change tracking from transaction receipt logs.

**Parameters:**

- `payload: EthereumRpcPayload` - Object containing:
  - `tx: EthereumTransaction` - The Ethereum transaction object from `eth_getTransactionByHash`
  - `txReceipt: EthereumTransactionReceipt` - The transaction receipt from `eth_getTransactionReceipt`

**Returns:** `Promise<DecodedEthereumTx>` - A promise that resolves to a decoded Ethereum transaction object

### Type Definitions

#### `DecodedTx` (Cosmos Transactions)

```typescript
interface DecodedTx {
  messages: ProcessedMessage[];
  metadata: Metadata;
  totalBalanceChanges: BalanceChanges;
}
```

#### `DecodedEthereumTx` (Ethereum RPC Transactions)

```typescript
interface DecodedEthereumTx {
  decodedTransaction: DecodedEthereumCall;
  metadata: Metadata;
  totalBalanceChanges: EvmBalanceChanges;
}
```

#### `DecodedEthereumCall`

```typescript
type DecodedEthereumCall =
  | DecodedErc20ApproveCall
  | DecodedErc20TransferCall
  | DecodedErc20TransferFromCall
  | DecodedErc721ApproveCall
  | DecodedErc721SafeTransferFromCall
  | DecodedNotSupportedCall;
```

#### `ProcessedMessage`

```typescript
interface ProcessedMessage {
  balanceChanges: BalanceChanges;
  decodedMessage: DecodedMessage;
}
```

#### `BalanceChanges`

```typescript
interface BaseBalanceChanges {
  ft: { [address: string]: FtChange };
}

interface MoveBalanceChanges extends BaseBalanceChanges {
  vm: "move";
  object: { [address: string]: ObjectChange };
}

interface EvmBalanceChanges extends BaseBalanceChanges {
  vm: "evm";
  nft: { [address: string]: NftChange };
}

interface WasmBalanceChanges extends BaseBalanceChanges {
  vm: "wasm";
}

type BalanceChanges =
  | MoveBalanceChanges
  | EvmBalanceChanges
  | WasmBalanceChanges;

// Type aliases
type FtChange = { [denom: string]: string };
type NftChange = { [contract: string]: { [tokenId: string]: string } };
type ObjectChange = { [address: string]: string };
```

**Note on NFT Balance Changes:**

- NFT balance changes are tracked with 3-level nesting: `address → contract → tokenId → value`
- Each NFT transfer shows `"1"` for receiving and `"-1"` for sending
- This structure allows tracking specific NFT tokens rather than just contract-level changes
- Example: `nft["0x123..."]["0xNFTContract"]["42"] = "1"` means address `0x123...` received NFT token #42 from contract `0xNFTContract`

#### `DecodedMessage`

Please see [here](src/interfaces/decoded-messages.ts)

### Response Structure

The decoder returns a structured object with the following format:

#### Move VM Example (Bank Send)

```typescript
{
  messages: [
    {
      balanceChanges: {
        vm: "move",
        ft: {
          "init1...": { "uinit": "-1000000" },
          "init1...": { "uinit": "1000000" }
        },
        object: {}
      },
      decodedMessage: {
        action: "send",
        data: {
          from: "init1...",
          to: "init1...",
          coins: [
            {
              amount: "1000000",
              denom: "uinit"
            },
          ]
        },
        isIbc: false,
        isOp: false
      }
    }
  ],
  metadata: {},
  totalBalanceChanges: {
    vm: "move",
    ft: {
      "init1...": { "uinit": "-1000000" },
      "init1...": { "uinit": "1000000" }
    },
    object: {}
  }
}
```

#### EVM Example (NFT Transfer)

```typescript
{
  messages: [
    {
      balanceChanges: {
        vm: "evm",
        ft: {
          "0x19f8a98c...": { "evm/E1Ff7038eAAAF027031688E1535a055B2Bac2546": "-24400000000001" },
          "0xf1829676...": { "evm/E1Ff7038eAAAF027031688E1535a055B2Bac2546": "737822500000" }
        },
        nft: {
          "0x19f8a98c...": {
            "0x5d4376b62fa8AC16dFabe6a9861E11c33A48C677": {
              "4561": "-1"
            }
          },
          "0x8f433715...": {
            "0x5d4376b62fa8AC16dFabe6a9861E11c33A48C677": {
              "4561": "1"
            }
          }
        }
      },
      decodedMessage: {
        action: "not_supported",
        data: {
          msgType: "/minievm.evm.v1.MsgCall"
        },
        isIbc: false,
        isOp: false
      }
    }
  ],
  metadata: {},
  totalBalanceChanges: {
    vm: "evm",
    ft: {
      "0x19f8a98c...": { "evm/E1Ff7038eAAAF027031688E1535a055B2Bac2546": "-24400000000001" },
      "0xf1829676...": { "evm/E1Ff7038eAAAF027031688E1535a055B2Bac2546": "737822500000" }
    },
    nft: {
      "0x19f8a98c...": {
        "0x5d4376b62fa8AC16dFabe6a9861E11c33A48C677": {
          "4561": "-1"
        }
      },
      "0x8f433715...": {
        "0x5d4376b62fa8AC16dFabe6a9861E11c33A48C677": {
          "4561": "1"
        }
      }
    }
  }
}
```

## 📝 [Supported Message Types](#-supported-message-types)

### Cosmos Messages

#### Bank Messages

- `/cosmos.bank.v1beta1.MsgSend` (supported on Move, EVM, and WASM VMs)

#### Distribution Messages

- `/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward`

#### Staking Messages (Multi-Staking)

- `/initia.mstaking.v1.MsgDelegate`
- `/initia.mstaking.v1.MsgUndelegate`
- `/initia.mstaking.v1.MsgBeginRedelegate`

#### Authz Messages

- `/cosmos.authz.v1beta1.MsgExec` - Execute authorized messages on behalf of another account
- `/cosmos.authz.v1beta1.MsgGrant` - Grant authorization to another account
- `/cosmos.authz.v1beta1.MsgRevoke` - Revoke a previously granted authorization

#### Feegrant Messages

- `/cosmos.feegrant.v1beta1.MsgGrantAllowance` - Grant a fee allowance to another account
- `/cosmos.feegrant.v1beta1.MsgRevokeAllowance` - Revoke an existing fee allowance

**Note:** MsgExec recursively decodes the inner messages it contains. All currently supported message types can be wrapped within MsgExec and will be properly decoded.

### Move VM Messages

- `/initia.move.v1.MsgExecute`
- `/initia.move.v1.MsgExecuteJSON`

#### Supported Move Scripts

**DEX & Liquidity:**

- `0x1::dex::swap_script` - Token swap
- `0x1::dex::provide_liquidity_script` - Provide liquidity
- `0x1::dex::provide_liquidity_and_stake` - Provide liquidity and stake LP tokens
- `0x1::dex::provide_liquidity_and_stake_lock` - Provide liquidity and stake-lock LP tokens
- `0x1::dex::withdraw_liquidity_script` - Withdraw liquidity
- `0x1::dex::extend_lock` - Extend LP lock period
- `0x1::dex::merge_lock` - Merge locked LP positions

**Stableswap:**

- `0x1::stableswap::swap_script` - Stableswap token swap
- `0x1::stableswap::provide` - Provide liquidity to stableswap
- `0x1::stableswap::withdraw` - Withdraw liquidity from stableswap

**Minitswap:**

- `0x1::minitswap::provide` - Provide liquidity to minitswap
- `0x1::minitswap::unbond` - Unbond from minitswap
- `0x1::minitswap::withdraw_unbond` - Withdraw unbonded tokens

**NFT:**

- `0x1::simple_nft::mint` - Mint NFT
- `0x1::simple_nft::burn` - Burn NFT

**Object Transfer:**

- `0x1::object::transfer_call` - Transfer Move objects

**Lock Staking:**

- `<module_address>::lock_staking::delegate` - Delegate with lock
- `<module_address>::lock_staking::undelegate` - Undelegate locked tokens
- `<module_address>::lock_staking::redelegate` - Redelegate locked tokens
- `<module_address>::lock_staking::withdraw_delegator_reward` - Withdraw rewards from locked stake
- `<module_address>::lock_staking::extend` - Extend lock period
- `<module_address>::lock_staking::batch_extend` - Batch extend lock periods

**VIP (Voting Incentive Program):**

- `<module_address>::vip::batch_claim_user_reward_script` - Claim VIP rewards
- `<module_address>::vip::batch_lock_stake_script` - Lock stake for VIP
- `<module_address>::weight_vote::vote` - Vote on gauge weights

### OpInit Messages (L1 ↔ L2 Bridge)

- `/opinit.ophost.v1.MsgInitiateTokenDeposit` - Initiate deposit from L1 to L2
- `/opinit.ophost.v1.MsgFinalizeTokenWithdrawal` - Finalize withdrawal on L1
- `/opinit.opchild.v1.MsgFinalizeTokenDeposit` - Finalize deposit on L2
- `/opinit.opchild.v1.MsgInitiateTokenWithdrawal` - Initiate withdrawal from L2 to L1

### IBC Messages

#### IBC Fungible Token Transfer

- `/ibc.applications.transfer.v1.MsgTransfer` - Send fungible tokens via IBC
- `/ibc.core.channel.v1.MsgRecvPacket` (with `transfer` application) - Receive fungible tokens via IBC

#### IBC Non-Fungible Token Transfer

- `/ibc.applications.nft_transfer.v1.MsgTransfer` - Send NFTs via IBC (Move & EVM)
- `/ibc.core.channel.v1.MsgRecvPacket` (with `nft-transfer` application) - Receive NFTs via IBC (Move & EVM)

### Ethereum RPC Transactions

The library supports decoding native Ethereum RPC transactions (via `decodeEthereumTransaction`):

#### ERC-20 Functions

- `approve(address spender, uint256 amount)` - Approve ERC-20 spending
- `transfer(address to, uint256 amount)` - Transfer ERC-20 tokens
- `transferFrom(address from, address to, uint256 amount)` - Transfer ERC-20 tokens from approved address

#### ERC-721 Functions

- `approve(address to, uint256 tokenId)` - Approve NFT transfer
- `safeTransferFrom(address from, address to, uint256 tokenId)` - Safe transfer NFT

#### Native ETH Transfer

- Native ETH transfer (value transfer without function call)

#### Contract Deployment

- Contract creation transactions

#### Kami721 NFT

- `publicMint()` - Public mint function for Kami721 NFTs

### WASM Event Processing

The library automatically processes WASM event logs for balance tracking:

- `transfer` event type with `recipient`, `sender`, and `amount` attributes

### EVM Event Processing

The library automatically processes EVM event logs for balance tracking:

- `Transfer(address indexed from, address indexed to, uint256 value)` (ERC-20)
- `Transfer(address indexed from, address indexed to, uint256 indexed tokenId)` (ERC-721)

## 💻 [Development](#-development)

### Prerequisites

- Node.js >= 20
- pnpm

```bash
# Clone the repository
git clone https://github.com/initia-labs/tx-decoder.git
cd tx-decoder

# Install dependencies
pnpm install

# Run tests
pnpm test

# Build
pnpm build
```

## 📁 Folder Structure

```
tx-decoder/
├── src/
│   ├── api/                     # API client architecture
│   │   ├── api.ts               # Main API client with service composition
│   │   └── services/            # Modular API services
│   │       ├── base.ts          # Base service with caching
│   │       ├── cosmos.ts        # Cosmos chain API interactions
│   │       ├── evm.ts           # EVM-specific API calls (contract detection, etc.)
│   │       └── move.ts          # Move VM API interactions
│   ├── balance-changes.ts       # Balance aggregation helpers per VM
│   ├── constants/               # Application constants
│   │   ├── index.ts             # Main constants export
│   │   ├── balance-changes.ts   # Default balance change structures
│   │   ├── evm-abis.ts          # EVM contract ABIs (ERC20, ERC721, etc.)
│   │   └── evm-selectors.ts     # EVM function selectors and event signatures
│   ├── decoder.ts               # Main transaction decoding logic
│   ├── decoder-registry.ts      # Decoder registry arrays (Cosmos EVM, Cosmos Move, Ethereum)
│   ├── validation.ts            # Transaction validation functions
│   ├── index.ts                 # Entry point for exports
│   ├── message-types.ts         # Supported message types
│   ├── metadata-resolver.ts     # Resolves and fetches NFT metadata for token addresses
│   ├── decoders/                # Message decoders
│   │   ├── cosmos/              # Cosmos SDK message decoders
│   │   ├── ethereum/            # Ethereum RPC transaction decoders
│   │   │   └── erc20/           # ERC-20 transfer and transferFrom decoders
│   │   ├── ibc/                 # IBC message decoders
│   │   ├── move/                # Move message decoders
│   │   └── op-init/             # OpInit message decoders
│   ├── interfaces/              # TypeScript interfaces and discriminated unions
│   │   ├── balance-changes.ts   # Balance change type definitions
│   │   ├── decoder.ts           # Decoder interface definitions
│   │   ├── ethereum.ts          # Ethereum transaction type definitions
│   │   └── processor.ts         # Event processor interfaces
│   ├── processors/              # Event processors
│   │   ├── evm/                 # ABI-driven EVM event processors
│   │   │   ├── index.ts         # EVM processor registry
│   │   │   └── transfer.ts      # ERC-20/ERC-721 Transfer event processor
│   │   └── move/                # Move event processors
│   ├── schema/                  # Zod schemas for validation
│   │   ├── common.ts            # Common validation schemas
│   │   ├── cosmos/              # Cosmos transaction schemas
│   │   ├── ethereum/            # Ethereum RPC transaction schemas
│   │   └── evm.ts               # EVM log schemas
│   ├── utils/                   # Utility helpers
│   │   ├── index.ts             # Utility exports
│   │   ├── denom.ts             # Denomination handling utilities
│   │   └── merge-balances.ts    # Balance merging logic (supports 3-level NFT nesting)
│   └── tests/                   # Jest unit tests grouped by domain
│       ├── _shared/             # Shared test utilities and helpers
│       ├── common/              # Common functionality tests
│       ├── cosmos/              # Cosmos message decoder tests
│       ├── ethereum/            # Ethereum RPC transaction tests
│       │   └── erc20/           # ERC-20 transfer and transferFrom tests
│       ├── protocols/           # Protocol-specific tests (IBC, OpInit)
│       └── utils/               # Utility function tests
├── package.json                 # Project metadata and dependencies
├── README.md                    # Project documentation
└── ...                          # Config and other files
```

See [CONTRIBUTING.md](./CONTRIBUTING.md) for development setup and guidelines.

## 📄 [License](#-license)

MIT
