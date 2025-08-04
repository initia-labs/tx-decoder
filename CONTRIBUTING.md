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

- **`src/decoders/`**: Message type decoders (delegate, send, IBC, Move scripts, etc.)
- **`src/interfaces/`**: TypeScript interfaces and type definitions
- **`src/schema/`**: Zod schemas for message validation
- **`src/processors/`**: Balance change processors (mint, burn, deposit, withdraw, etc.)
- **`src/tests/fixtures/`**: Real transaction data for testing
- **`src/utils/`**: Utility functions for address conversion, denom handling, etc.

## 🛠️ How to Add Support for a New Message Type

Adding a decoder for a new message type is the most common way to contribute. Here's how to do it:

### 1. Create a Message Fixture

Find a real transaction containing the message you want to support. Add the JSON response for that transaction to a new file in `/src/tests/fixtures`. Using real data is crucial for accurate testing.

**Example**: `src/tests/fixtures/your-message.fixture.ts`

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

Create a new test file in `/src/tests`. Import the fixture you created in step 1 and write a test case that asserts:

- The `decodedMessage` output matches the expected format.
- The `balanceChanges` are calculated correctly.

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
