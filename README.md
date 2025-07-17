# Transaction Decoder

[![npm version](https://badge.fury.io/js/%40initia%2Ftx-decoder.svg)](https://badge.fury.io/js/%40initia%2Ftx-decoder)
[![Bundle Size](https://img.shields.io/bundlephobia/minzip/@initia/tx-decoder)](https://bundlephobia.com/package/@initia/tx-decoder)
[![npm downloads](https://img.shields.io/npm/dm/@initia/tx-decoder)](https://www.npmjs.com/package/@initia/tx-decoder)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Unit Tests](https://img.shields.io/badge/tests-passing-brightgreen.svg)](https://github.com/initia-labs/tx-decoder/actions)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A TypeScript library for decoding Cosmos SDK transactions, providing human-readable message decoding and balance change tracking.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Quick Start](#quick-start)
- [API Reference](#api-reference)
- [Supported Message Types](#supported-message-types)
- [Development](#development)
- [License](#license)

## ✨ [Features](#features)

- **Human-Readable Output**: Decodes Cosmos SDK transaction messages into a clear, human-readable JSON format.
- **Balance Tracking**: Automatically tracks changes in fungible (FT) and non-fungible tokens (NFT) for any given transaction.
- **Type-Safe**: Built with TypeScript and validated with Zod for robust, type-safe operations.
- **Extensible**: Features a flexible handler system that can be easily extended to support new message types.
- **Immutable State**: Uses Immer for safe and predictable state management.

## 📦 [Installation](#installation)

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

## 🚀 [Quick Start](#quick-start)

```typescript
import { TxDecoder } from "@initia/tx-decoder";

// Decode a transaction
const decoder = new TxDecoder({
  registryUrls: [
    "https://registry.initia.xyz/",
    "https://registry.testnet.initia.xyz/",
  ],
  restUrl: "https://rest.initia.xyz",
});

// Decode a transaction
const decodedTx = await decoder.decodeTransaction(txResponse);
console.log(decodedTx);
```

## 📖 [API Reference](#api-reference)

### `TxDecoder`

The main class for decoding transactions.

#### Constructor

```typescript
new TxDecoder(config: DecoderConfig)
```

**Parameters:**

- `config: DecoderConfig` - Configuration object with the following properties:
  - `registryUrls: string[]` - Array of registry URLs to retrieve chain registries
  - `restUrl: string` - REST endpoint of the Initia chain to query on-chain data

#### Methods

##### `decodeTransaction(txResponse: TxResponse): Promise<DecodedTx>`

Decodes a transaction response into a human-readable format.

**Parameters:**

- `txResponse: TxResponse` - The raw transaction response from the blockchain

**Returns:** `Promise<DecodedTx>` - A promise that resolves to a decoded transaction object

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
interface BalanceChanges {
  ft: { [address: string]: FtChange };
  object: { [address: string]: ObjectChange };
}
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
    ft: {
      "init1...": { "uinit": "-1000000" },
      "init1...": { "uinit": "1000000" }
    },
    object: {}
  }
}
```

## 📝 [Supported Message Types](#supported-message-types)

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
- `<module_address>::usernames::register_domain`
- `<module_address>::lock_staking::delegate`
- `<module_address>::lock_staking::undelegate`
- `<module_address>::lock_staking::redelegate`
- `<module_address>::lock_staking::withdraw_delegator_reward`
- `<module_address>::vip::batch_lock_stake_script`

### OpInit Messages

- `/opinit.ophost.v1.MsgInitiateTokenDeposit`
- `/opinit.ophost.v1.MsgFinalizeTokenWithdrawal`

### IBC Messages

- `/ibc.applications.transfer.v1.MsgTransfer`
- `/ibc.applications.nft_transfer.v1.MsgTransfer`
- `/ibc.core.channel.v1.MsgRecvPacket`
  - `transfer`
  - `nft-transfer`

## 💻 [Development](#development)

### Prerequisites

- Node.js 20
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
│   ├── constants.ts              # Application constants and configuration
│   ├── decoder.ts                # Main transaction decoding logic
│   ├── index.ts                  # Entry point for exports
│   ├── message-types.ts          # Supported message types
│   ├── metadata-resolver.ts      # Resolves and fetches NFT metadata for token addresses
│   ├── decoders/                 # Message decoder
│   ├── interfaces/               # TypeScript interfaces and types
│   ├── processors/               # Event processor
│   ├── schema/                   # Zod schemas for validation
│   ├── utils/                    # Utility functions
│   └── tests/                    # Unit tests
│       ├── fixtures/             # Mock data for tests
│       └── withdraw-delegator-reward.test.ts
├── package.json                  # Project metadata and dependencies
├── README.md                     # Project documentation
└── ...                           # Config and other files
```

## 🛠️ How to Add Support for a New Message Type

Adding a decoder for a new message type is the most common way to contribute. Here’s how to do it:

### 1. Create a Message Fixture

Find a real transaction containing the message you want to support. Add the JSON response for that transaction to a new file in `/src/tests/fixtures`. Using real data is crucial for accurate testing.

### 2. Register the Message Type (If Needed)

If the message has a unique type URL (e.g., `"/initia.mstaking.v1.MsgDelegate"`), add it to the `SUPPORTED_MESSAGE_TYPES` array in `src/message-types.ts`.

> You can skip this step for generic messages like Move scripts, which are identified by their function name instead of the message type URL.

### 3. Implement the Decoder

Create a new file in the `/src/decoders` directory for your message.
A decoder is an object that contains two functions:

- `check(message, log)`: Returns `true` if the decoder should handle the message. It typically checks the message's `@type` but may also validate its structure for complex cases.
- `decode(message, log, apiClient)`: Transforms a raw message into a normalized `DecodedMessage`. This function validates the message, extracts data, and returns a promise that resolves with the result.

See existing decoders in `/src/decoders` for examples of how to implement both `check` and `decode` functions.

### 4. Add Type Validation and Interfaces

**Validation**: Define a Zod schema for your message's expected structure in the `/src/schema` directory. This ensures the data is valid before processing.

**Interfaces**: Add or update TypeScript interfaces in `/src/interfaces` if your new message introduces new data shapes.

### 5. Integrate the Decoder

In `src/decoder.ts`, import your new decoder function and add it to the list of handlers. The `TxDecoder` will now use it when it encounters the corresponding message type.

### 6. Write a Unit Test

Create a new test file in `/src/tests`. Import the fixture you created in step 1 and write a test case that asserts:

- The `decodedMessage` output matches the expected format.
- The `balanceChanges` are calculated correctly.

### Best Practices

- **Keep Decoders Small**: Each decoder should focus on a single message type.

- **Use Real Data**: Always prefer real transaction data for fixtures.

- **Update Documentation**: If you add a major feature, mention it in the README.

- **Run All Tests**: Before submitting your contribution, run `pnpm test` to ensure you haven't introduced any regressions.

If you have questions, feel free to open an issue!
If you have questions or need help, check the existing decoders and tests for examples, or open an issue!

---

## 📄 [License](#license)

MIT
