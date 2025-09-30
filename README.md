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

// Decode a native Ethereum RPC transaction
const ethereumTx = await decoder.decodeEthereumTransaction({
  tx: ethereumTransaction,
  txReceipt: ethereumTransactionReceipt
});
console.log(ethereumTx);
```

Each decoded message includes a `balanceChanges` object tagged with `vm: "move"` or `vm: "evm"`. EVM balance deltas are sourced from decoded log events via `viem` rather than Cosmos bank events.

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

**Supported Message Types:**

- Cosmos: `/cosmos.bank.v1beta1.MsgSend`
- IBC: `/ibc.applications.transfer.v1.MsgTransfer`, `/ibc.core.channel.v1.MsgRecvPacket` (only fungible token)

##### `decodeEthereumTransaction(payload: EthereumRpcPayload): Promise<DecodedEthereumTx>`

Decodes a native Ethereum RPC transaction with balance change tracking from transaction receipt logs.

**Parameters:**

- `payload: EthereumRpcPayload` - Object containing:
  - `tx: EthereumTransaction` - The Ethereum transaction object from `eth_getTransactionByHash`
  - `txReceipt: EthereumTransactionReceipt` - The transaction receipt from `eth_getTransactionReceipt`

**Returns:** `Promise<DecodedEthereumTx>` - A promise that resolves to a decoded Ethereum transaction object

**Supported Transaction Types:**

- ERC-20 `transfer(address to, uint256 amount)`
- ERC-20 `transferFrom(address from, address to, uint256 amount)`

**Balance Changes:** Automatically calculated from transaction receipt logs (Transfer events)

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
  | DecodedErc20TransferCall
  | DecodedErc20TransferFromCall
  | DecodedNotSupportedCall;

interface DecodedErc20TransferCall {
  action: "erc20_transfer";
  data: {
    amount: string;
    contract: string;
    denom: string; // Format: "evm/{checksummedAddress}"
    from: string;
    to: string;
  };
}

interface DecodedErc20TransferFromCall {
  action: "erc20_transfer_from";
  data: {
    amount: string;
    contract: string;
    denom: string; // Format: "evm/{checksummedAddress}"
    from: string;
    owner: string;
    to: string;
  };
}

interface DecodedNotSupportedCall {
  action: "not_supported";
  data: {
    from: string;
    input: string;
    to: string | null;
    value: string;
  };
}
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

type BalanceChanges = MoveBalanceChanges | EvmBalanceChanges;

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

### Bank Messages

- `/cosmos.bank.v1beta1.MsgSend`

### Distribution Messages

- `/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward`

### Staking Messages

- `/initia.mstaking.v1.MsgDelegate`
- `/initia.mstaking.v1.MsgUndelegate`
- `/initia.mstaking.v1.MsgBeginRedelegate`

### Move Messages

- `/initia.move.v1.MsgExecute`
- `/initia.move.v1.MsgExecuteJSON`

#### Supported Move Scripts

- `0x1::stableswap::swap_script`
- `0x1::dex::swap_script`
- `0x1::simple_nft::mint`
- `0x1::simple_nft::burn`
- `0x1::object::transfer_call`
- `0x1::dex::withdraw_liquidity_script`
- `0x1::minitswap::provide`
- `0x1::minitswap::unbond`
- `0x1::minitswap::withdraw_unbond`
- `<module_address>::usernames::register_domain`
- `<module_address>::lock_staking::delegate`
- `<module_address>::lock_staking::undelegate`
- `<module_address>::lock_staking::redelegate`
- `<module_address>::lock_staking::withdraw_delegator_reward`
- `<module_address>::lock_staking::extend`
- `<module_address>::lock_staking::batch_extend`
- `<module_address>::vip::batch_claim_user_reward_script`
- `<module_address>::vip::batch_lock_stake_script`
- `<module_address>::weight_vote::vote`
- `<module_address>::dex_utils::unproportional_provide`
- `<module_address>::dex_utils::unproportional_provide_stake`
- `<module_address>::dex_utils::unproportional_provide_lock_stake`

### OpInit Messages

- `/opinit.ophost.v1.MsgInitiateTokenDeposit`
- `/opinit.ophost.v1.MsgFinalizeTokenWithdrawal`
- `/opinit.opchild.v1.MsgFinalizeTokenDeposit`
- `/opinit.opchild.v1.MsgInitiateTokenWithdrawal`

### IBC Messages

- `/ibc.applications.transfer.v1.MsgTransfer`
- `/ibc.applications.nft_transfer.v1.MsgTransfer`
- `/ibc.core.channel.v1.MsgRecvPacket`
  - `transfer`
  - `nft-transfer`

### EVM Events

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
│   │   ├── evm-abis.ts          # EVM contract ABIs (ERC20, ERC721, etc.)
│   │   └── evm-selectors.ts     # EVM function selectors and event signatures
│   ├── decoder.ts               # Main transaction decoding logic
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
