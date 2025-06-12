# Cosmos Transaction Decoder

A TypeScript library for decoding Cosmos SDK transactions, providing human-readable message decoding and balance change tracking.

## Features

- Decodes Cosmos SDK transaction messages into human-readable format
- Tracks balance changes (fungible and non-fungible tokens)
- Type-safe implementation using TypeScript and Zod
- Extensible handler system for different message types
- Immutable state management using Immer

## Installation

```bash
# npm
npm install @initia/tx-decoder

# yarn
yarn add @initia/tx-decoder

# pnpm
pnpm add @initia/tx-decoder
```

## Usage

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
//       amount: "1000000uinit"
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

## Supported Message Types

Currently supported message types:

- `/cosmos.bank.v1beta1.MsgSend`

## Development

```bash
# Install dependencies
pnpm install

# Run tests
pnpm test

# Build
pnpm build
```

## License

MIT
