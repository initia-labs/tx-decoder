# Contributing to @initia/tx-decoder

Thank you for your interest in contributing to the Initia Transaction Decoder! This document will help you get started with development and understand our contribution process.

## Quick Start

**Prerequisites**: Node.js 20+, pnpm

```bash
git clone https://github.com/initia-labs/tx-decoder.git
cd tx-decoder
pnpm install
```

## Development Commands

```bash
# Testing
pnpm test                     # Run all tests
pnpm test src/tests/specific.test.ts  # Run specific test

# Code Quality
pnpm typecheck                # TypeScript check
pnpm lint                     # ESLint with auto-fix
pnpm build                    # Build library with tsup

# Development Workflow
pnpm clean                    # Clean build artifacts
pnpm prepare                  # Setup git hooks
```

## Project Structure

The tx-decoder is organized into several key directories:

### Core Files

- **[`src/decoder.ts`](src/decoder.ts)**: Main decoder orchestration and transaction processing logic
- **[`src/decoder-registry.ts`](src/decoder-registry.ts)**: Registry for managing and routing message decoders
- **[`src/balance-changes.ts`](src/balance-changes.ts)**: Core balance change calculation logic
- **[`src/metadata-resolver.ts`](src/metadata-resolver.ts)**: Resolves metadata for tokens and denoms
- **[`src/message-types.ts`](src/message-types.ts)**: Supported message type definitions
- **[`src/validation.ts`](src/validation.ts)**: Transaction and message validation utilities

### Decoders

Message type decoders transform raw transaction messages into normalized formats:

- **[`src/decoders/cosmos/`](src/decoders/cosmos/)**: Cosmos SDK message decoders
  - `bank.ts` - Bank transfers
  - `distribution.ts` - Reward distribution
  - `mstaking.ts` - Multi-token staking operations
  - **[`move/`](src/decoders/cosmos/move/)**: Move script decoders (DEX, liquidity, NFT, etc.)
- **[`src/decoders/ethereum/`](src/decoders/ethereum/)**: Ethereum transaction decoders
  - **[`erc20/`](src/decoders/ethereum/erc20/)**: ERC20 token operations
  - **[`erc721/`](src/decoders/ethereum/erc721/)**: ERC721 NFT operations
  - **[`contract/`](src/decoders/ethereum/contract/)**: Contract creation and deployment
  - **[`generic/`](src/decoders/ethereum/generic/)**: Generic ETH transfers and approvals
  - **[`kami721/`](src/decoders/ethereum/kami721/)**: Kami721-specific NFT operations
- **[`src/decoders/protocols/`](src/decoders/protocols/)**: Cross-chain protocol decoders
  - **[`ibc/`](src/decoders/protocols/ibc/)**: IBC transfers (FT & NFT)
  - **[`op-init/`](src/decoders/protocols/op-init/)**: OP Stack bridge operations

### Processors

Balance change processors extract balance changes from transaction events:

- **[`src/processors/move/`](src/processors/move/)**: Move event processors
  - `mint.ts`, `burn.ts`, `deposit.ts`, `withdraw.ts`, `object-transfer.ts`
- **[`src/processors/evm/`](src/processors/evm/)**: EVM event processors
  - `transfer.ts` - ERC20/ERC721 transfer events
- **[`src/processors/wasm/`](src/processors/wasm/)**: WASM contract event processors

### Type Definitions & Validation

- **[`src/interfaces/`](src/interfaces/)**: TypeScript interfaces and type definitions
  - `cosmos.ts` - Cosmos message types
  - `ethereum.ts` - Ethereum transaction types
  - `balance-changes.ts` - Balance change types
  - `decoder.ts` - Decoder interface definitions
  - `metadata.ts` - Metadata type definitions
  - `processor.ts` - Processor interface definitions
- **[`src/schema/`](src/schema/)**: Zod schemas for runtime validation
  - **[`cosmos/`](src/schema/cosmos/)**: Cosmos message schemas
  - **[`ethereum/`](src/schema/ethereum/)**: Ethereum transaction schemas
  - **[`protocols/`](src/schema/protocols/)**: Protocol-specific schemas
  - **[`api/`](src/schema/api/)**: API response schemas

### Utilities & Helpers

- **[`src/utils/`](src/utils/)**: Common utility functions
  - `denom.ts` - Denomination handling and conversion
  - `coins.ts` - Coin amount utilities
  - `merge-balances.ts` - Balance merging logic
  - `find-attributes.ts`, `find-move-events.ts` - Event extraction helpers
  - `attach-tx-logs.ts` - Transaction log processing
  - `decoder-helpers.ts` - Decoder utility functions
- **[`src/constants/`](src/constants/)**: Project-wide constants
  - `evm-abis.ts` - EVM contract ABIs
  - `module-addresses.ts` - Module address mappings
  - `balance-changes.ts` - Balance change constants

### API & Services

- **[`src/api/`](src/api/)**: External API client and service integrations
  - `api.ts` - Main API client
  - **[`services/`](src/api/services/)**: API service implementations

### Tests

- **[`src/tests/`](src/tests/)**: Comprehensive test suite with real transaction fixtures
  - **[`cosmos/`](src/tests/cosmos/)**: Cosmos transaction tests
    - **[`move/`](src/tests/cosmos/move/)**: Move script tests (bank, DEX, liquidity, staking, VIP, etc.)
    - **[`evm/`](src/tests/cosmos/evm/)**: EVM on Cosmos tests
    - **[`wasm/`](src/tests/cosmos/wasm/)**: WASM contract tests
  - **[`ethereum/`](src/tests/ethereum/)**: Ethereum transaction tests
    - **[`erc20/`](src/tests/ethereum/erc20/)**, **[`erc721/`](src/tests/ethereum/erc721/)**: Token tests
    - **[`contract-creation/`](src/tests/ethereum/contract-creation/)**: Contract deployment tests
    - **[`cosmos-mirror/`](src/tests/ethereum/cosmos-mirror/)**: Cosmos-EVM mirror tests
  - **[`protocols/`](src/tests/protocols/)**: Cross-chain protocol tests
    - **[`ibc/`](src/tests/protocols/ibc/)**: IBC transfer tests
    - **[`op-init/`](src/tests/protocols/op-init/)**: OP Stack bridge tests
  - **[`_shared/helpers/`](src/tests/_shared/helpers/)**: Shared test utilities and initialization

## 🛠️ How to Add Support for a New Message Type

Adding a decoder for a new message type is the most common way to contribute. Here's how to do it:

### 1. Create a Message Fixture

Find a real transaction containing the message you want to support. Add the JSON response for that transaction to a new file in the appropriate test directory, next to where you'll create your test file. Using real data is crucial for accurate testing.

**Examples**:

- `src/tests/cosmos/move/bank.fixture.ts` (for simple cases)
- `src/tests/cosmos/move/dex/swap.fixture.ts` (for grouped features)

### 2. Register the Message Type (If Needed)

If the message has a unique type URL (e.g., `"/initia.mstaking.v1.MsgDelegate"`), add it to the `SUPPORTED_MESSAGE_TYPES` array in `src/message-types.ts`.

> **Note**: You can skip this step for generic messages like Move scripts, which are identified by their function name instead of the message type URL.

### 3. Implement the Decoder

Create a new file in the `/src/decoders` directory for your message. A decoder is an object that contains two functions:

- **`check(message, log)`**: Returns `true` if the decoder should handle the message. It typically checks the message's `@type` but may also validate its structure for complex cases.
- **`decode(message, log, apiClient)`**: Transforms a raw message into a normalized `DecodedMessage`. This function validates the message, extracts data, and returns a promise that resolves with the result.

See existing decoders in `/src/decoders` for examples of how to implement both `check` and `decode` functions.

### 4. Add Type Validation and Interfaces

**Validation**: Define a Zod schema for your message's expected structure in the `/src/schema` directory. This ensures the data is valid before processing.

**Interfaces**: Add or update TypeScript interfaces in `/src/interfaces` if your new message introduces new data shapes.

### 5. Integrate the Decoder

In `src/decoder.ts`, import your new decoder function and add it to the list of handlers. The `TxDecoder` will now use it when it encounters the corresponding message type.

### 6. Write a Unit Test

Create a new test file in the appropriate `/src/tests` subdirectory, next to the fixture you created in step 1. Import the fixture and write a test case that asserts:

- The `decodedMessage` output matches the expected format.
- The `balanceChanges` are calculated correctly.

**Examples**:

- `src/tests/cosmos/move/bank.test.ts` (for simple cases)
- `src/tests/cosmos/move/dex/swap.test.ts` (for grouped features)

## Coding Standards

### Core Principles

1. **Type Safety**: Strong TypeScript types with proper interfaces
2. **Validation**: Use Zod schemas for runtime validation
3. **Real Data**: Always use real transaction data for testing
4. **Modularity**: Keep decoders focused and single-purpose
5. **Error Handling**: Graceful handling of edge cases and invalid data

### Code Style

- Use ESLint and Prettier (configured via `eslint.config.mjs`)
- Follow TypeScript best practices
- Write descriptive test names
- Use conventional commit messages

### Testing Requirements

- Comprehensive test coverage for new functionality
- Test edge cases and error conditions
- Use real transaction fixtures
- Deterministic tests with descriptive names

## Submission Process

1. **Branch**: Create a feature branch

   ```bash
   git checkout -b feat/new-message-type
   # or
   git checkout -b fix/bug-description
   ```

2. **Develop**: Follow coding standards, add tests, update docs

3. **Commit**: Use conventional commit format
   - `feat:` New features (new message types, decoders)
   - `fix:` Bug fixes
   - `docs:` Documentation updates
   - `test:` Test additions or improvements
   - `refactor:` Code refactoring
   - `chore:` Maintenance tasks

4. **Validate**: Run all checks before submitting

   ```bash
   pnpm typecheck && pnpm lint && pnpm test && pnpm build
   ```

5. **Pull Request**: Create PR against `main` with:
   - Clear description of changes
   - Reference to any related issues
   - Test results showing all tests pass

## Getting Help

If you have questions or need help:

- Check existing decoders and tests for examples
- Review the README for detailed implementation guides
- Open an issue for questions or bug reports

Thank you for contributing to the Initia Transaction Decoder! 🚀
