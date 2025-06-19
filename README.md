# Cosmos Transaction Decoder

[![npm version](https://badge.fury.io/js/%40initia%2Ftx-decoder.svg)](https://badge.fury.io/js/%40initia%2Ftx-decoder)
[![Unit Tests](https://img.shields.io/badge/tests-passing-brightgreen.svg)](https://github.com/initia-labs/tx-decoder/actions)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A TypeScript library for decoding Cosmos SDK transactions, providing human-readable message decoding and balance change tracking.

## ✨ Features

- **Human-Readable Output**: Decodes Cosmos SDK transaction messages into a clear, human-readable JSON format.
- **Balance Tracking**: Automatically tracks changes in fungible (FT) and non-fungible tokens (NFT) for any given transaction.
- **Type-Safe**: Built with TypeScript and validated with Zod for robust, type-safe operations.
- **Extensible**: Features a flexible handler system that can be easily extended to support new message types.
- **Immutable State**: Uses Immer for safe and predictable state management.

## 📦 Installation

```bash
# npm
npm install @initia/tx-decoder

# yarn
yarn add @initia/tx-decoder

# pnpm
pnpm add @initia/tx-decoder
```

## 🚀 Usage

```typescript
import { decodeTx } from "@initia/tx-decoder";

// Decode a transaction
const decodedTx = decodeTx(txResponse);

// Access decoded messages
console.log(decodedTx.messages);
// [
//   {
//     action: "send",
//     data: {
//       from: "init1...",
//       to: "init1...",
//       coins: [
//         {
//           amount: "1000000",
//           denom: "uinit"
//         },
//       ]
//     },
//     isIbc: false,
//     isOp: false
//   }
// ]

// Access balance changes
console.log(decodedTx.balanceChanges);
// {
//   ft: {
//     "init1...": {
//       "uinit": "1000000"
//     }
//   },
//   nft: {}
// }
```

## 📝 Supported Message Types

Currently supported message types:

- `/cosmos.bank.v1beta1.MsgSend`
- `/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward`
- `/initia.move.v1.MsgExecute`
  - `0x1::dex::swap_script`
  - `0x1::simple_nft::mint`
  - `<module_address>::usernames::register_domain`
- `/opinit.ophost.v1.MsgInitiateTokenDeposit`
- `/opinit.ophost.v1.MsgFinalizeTokenWithdrawal`

## 📁 Folder Structure

```
tx-decoder/
├── src/
│   ├── constants.ts              # Application constants and configuration
│   ├── decoder.ts                # Main transaction decoding logic
│   ├── index.ts                  # Entry point for exports
│   ├── handlers/                 # Message and event handler modules
│   │   ├── index.ts              # Handler exports
│   │   ├── move/                 # Handlers for Move-based messages (e.g., swap, nft)
│   │   │   ├── nft.ts            # NFT mint handler
│   │   │   └── swap.ts           # Swap handler
│   │   ├── op-init/              # OP-Init bridge handlers
│   │   │   ├── finalize-token-withdrawal.ts
│   │   │   └── initiate-token-deposit.ts
│   │   ├── send.ts               # Bank send handler
│   │   └── withdraw-delegator-reward.ts
│   ├── interfaces/               # TypeScript interfaces and types
│   ├── schema/                   # Zod schemas for validation
│   ├── utils/                    # Utility functions
│   ├── fixtures/                 # Mock data for tests
│   │   ├── move/                 # Move-specific fixtures
│   │   └── withdraw-delegator-reward.fixture.ts
│   └── tests/                    # Unit tests
│       └── withdraw-delegator-reward.test.ts
├── package.json                  # Project metadata and dependencies
├── README.md                     # Project documentation
└── ...                           # Config and other files
```

## 💻 Development

```bash
# Install dependencies
pnpm install

# Run tests
pnpm test

# Build
pnpm build
```

## 📄 License

MIT
