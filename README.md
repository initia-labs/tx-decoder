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
- `/opinit.ophost.v1.MsgInitiateTokenDeposit`
- `/opinit.ophost.v1.MsgFinalizeTokenWithdrawal`

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
