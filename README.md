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
- **Balance Tracking**: Tracks fungible token deltas and correlates Move objects or EVM NFTs based on the originating VM.
- **Type-Safe**: Built with TypeScript and validated with Zod for robust, type-safe operations.
- **Extensible**: Features a flexible handler system that can be easily extended to support new message types.
- **Immutable State**: Uses Immer for safe and predictable state management.
- **ABI-driven EVM Support**: Uses `viem` to decode EVM event logs (e.g. ERC-20 `Transfer`) without relying on Cosmos `coin_spent` events.

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

// Decode a transaction for L1 and Move L2
const decodedTx = await decoder.decodeTransaction(txResponse);
console.log(decodedTx);

// Decode a transaction for EVM L2
const decodedEvmTx = await decoder.decodeEvmTransaction(txResponse);
console.log(decodedEvmTx);
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

#### Methods

##### `decodeTransaction(txResponse: TxResponse): Promise<DecodedTx>`

Decodes a transaction response into a human-readable format.

**Parameters:**

- `txResponse: TxResponse` - The raw transaction response from the blockchain

**Returns:** `Promise<DecodedTx>` - A promise that resolves to a decoded transaction object

##### `decodeEvmTransaction(txResponse: TxResponse): Promise<DecodedTx>`

Note: Requires providing `jsonRpcUrl` in `TxDecoder` config to resolve EVM denominations.

Decodes a transaction response, processing only general message types (excludes `/initia.move` and `/opinit` prefixes).

**Parameters:**

- `txResponse: TxResponse` - The raw transaction response from the blockchain

**Returns:** `Promise<DecodedTx>` - A promise that resolves to a decoded transaction object

**Supported Message Types:**

- Cosmos: `/cosmos.bank.v1beta1.MsgSend`
- IBC: `/ibc.applications.transfer.v1.MsgTransfer`, `/ibc.core.channel.v1.MsgRecvPacket` (only fungible token)

### Type Definitions

#### `DecodedTx`

```typescript
interface DecodedTx {
  messages: ProcessedMessage[];
  metadata: Metadata;
  totalBalanceChanges: BalanceChanges;
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
```

#### `DecodedMessage`

Please see [here](src/interfaces/decoded-messages.ts)

### Response Structure

The decoder returns a structured object with the following format:

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

### IBC Messages

- `/ibc.applications.transfer.v1.MsgTransfer`
- `/ibc.applications.nft_transfer.v1.MsgTransfer`
- `/ibc.core.channel.v1.MsgRecvPacket`
  - `transfer`
  - `nft-transfer`

### EVM Events

- `Transfer(address indexed from, address indexed to, uint256 value)` (ERC-20)

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
│   ├── api.ts                   # API client to fetch on-chain data and metadata
│   ├── balance-changes.ts       # Balance aggregation helpers per VM
│   ├── constants.ts             # Application constants and configuration
│   ├── decoder.ts               # Main transaction decoding logic
│   ├── index.ts                 # Entry point for exports
│   ├── message-types.ts         # Supported message types
│   ├── metadata-resolver.ts     # Resolves and fetches NFT metadata for token addresses
│   ├── decoders/                # Message decoders (cosmos, move, op-init, evm, etc.)
│   ├── interfaces/              # TypeScript interfaces and discriminated unions
│   ├── processors/              # Event processors
│   │   ├── evm/                 # ABI-driven EVM event processors
│   │   └── move/                # Move event processors
│   ├── schema/                  # Zod schemas for validation
│   ├── utils/                   # Utility helpers (`denom`, `merge-balances`, ...)
│   └── tests/                   # Jest unit tests grouped by domain (common, cosmos, evm, ibc, initia, op-init, utils)
├── package.json                 # Project metadata and dependencies
├── README.md                    # Project documentation
└── ...                          # Config and other files
```

See [CONTRIBUTING.md](./CONTRIBUTING.md) for development setup and guidelines.

## 📄 [License](#-license)

MIT
