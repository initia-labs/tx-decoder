import { getAddress, Hex } from "viem";

import { ApiClient, CacheService } from "@/api";
import { EVENT_SIGNATURES } from "@/constants";
import { WasmBalanceChanges } from "@/interfaces";
import {
  cw20TransferProcessor,
  cw721MintProcessor,
  cw721TransferProcessor,
  transferEventProcessor
} from "@/processors";
import { evmTransferEventProcessor } from "@/processors/evm/transfer";
import { Event } from "@/schema";
import { mergeBalanceChanges } from "@/utils";

const apiClient = new ApiClient({
  registryUrl: "https://registry.test.url",
  restUrl: "https://rest.test.url"
});

const CONTRACT = "init1contract";
const ALICE = "init1alice";
const BOB = "init1bob";
const PROTOTYPE_KEYS = [
  "__proto__",
  "constructor",
  "toString",
  "hasOwnProperty"
];
const UINT256_MAX =
  "115792089237316195423570985008687907853269984665640564039457584007913129639935";
const UINT256_MAX_PLUS_ONE =
  "115792089237316195423570985008687907853269984665640564039457584007913129639936";
const EMPTY_WASM_CHANGES = { ft: {}, nft: {}, vm: "wasm" };

const wasmEvent = (
  type: string,
  attributes: Record<string, string>
): Event => ({
  attributes: Object.entries(attributes).map(([key, value]) => ({
    key,
    value
  })),
  type
});

// A regression writes onto shared built-ins. Each test removes what it finds so one
// failure does not cascade into the next test.
const sharedBuiltins = (): object[] => [
  Object.prototype,
  Object,
  ...Object.getOwnPropertyNames(Object.prototype)
    .map(
      (name) => Object.getOwnPropertyDescriptor(Object.prototype, name)?.value
    )
    .filter((value): value is object => typeof value === "function")
];

const takePollution = (): string[] =>
  sharedBuiltins().flatMap((target) => {
    const keys = Object.keys(target);
    keys.forEach((key) => delete (target as Record<string, unknown>)[key]);
    return keys;
  });

afterEach(() => {
  expect(takePollution()).toEqual([]);
});

describe("wasm processors with prototype keys", () => {
  const cw20Transfer = { from: ALICE, to: BOB };
  const cw721Transfer = { recipient: BOB, sender: ALICE };
  const bankTransfer = { recipient: BOB, sender: ALICE };

  it.each(
    Object.keys(cw20Transfer).flatMap((field) =>
      PROTOTYPE_KEYS.map((key) => [field, key])
    )
  )("CW-20 transfer ignores %s=%s", async (field, key) => {
    const changes = await cw20TransferProcessor.process(
      wasmEvent("wasm", {
        ...cw20Transfer,
        _contract_address: CONTRACT,
        action: "transfer",
        amount: "1000",
        [field]: key
      }),
      [],
      apiClient
    );

    expect(changes).toEqual(EMPTY_WASM_CHANGES);
  });

  it.each(PROTOTYPE_KEYS)("CW-721 mint ignores owner=%s", async (key) => {
    const changes = await cw721MintProcessor.process(
      wasmEvent("wasm", {
        _contract_address: CONTRACT,
        action: "mint",
        owner: key,
        token_id: "1"
      }),
      [],
      apiClient
    );

    expect(changes).toEqual(EMPTY_WASM_CHANGES);
  });

  it.each(
    Object.keys(cw721Transfer).flatMap((field) =>
      PROTOTYPE_KEYS.map((key) => [field, key])
    )
  )("CW-721 transfer ignores %s=%s", async (field, key) => {
    const changes = await cw721TransferProcessor.process(
      wasmEvent("wasm", {
        ...cw721Transfer,
        _contract_address: CONTRACT,
        action: "transfer_nft",
        [field]: key,
        token_id: "1"
      }),
      [],
      apiClient
    );

    expect(changes).toEqual(EMPTY_WASM_CHANGES);
  });

  it.each(
    Object.keys(bankTransfer).flatMap((field) =>
      PROTOTYPE_KEYS.map((key) => [field, key])
    )
  )("bank transfer ignores %s=%s", async (field, key) => {
    const changes = await transferEventProcessor.process(
      wasmEvent("transfer", {
        ...bankTransfer,
        amount: "100uinit",
        [field]: key
      }),
      [],
      apiClient
    );

    expect(changes).toEqual(EMPTY_WASM_CHANGES);
  });
});

describe("EVM transfer with a prototype key address", () => {
  const FROM = "0x19f8a98c3512cf16731de58f83318ec553314f46";
  const TO = "0x8f433715afa790ee2b35986de88da9aafdd0d2e3";
  const NFT_CONTRACT = "0x5d4376b62fa8ac16dfabe6a9861e11c33a48c677";

  const erc721Log = (address: Hex) => ({
    address,
    data: "0x" as Hex,
    topics: [
      EVENT_SIGNATURES.TRANSFER as Hex,
      `0x000000000000000000000000${FROM.slice(2)}` as Hex,
      `0x000000000000000000000000${TO.slice(2)}` as Hex,
      "0x00000000000000000000000000000000000000000000000000000000000011d1" as Hex
    ] as [Hex, ...Hex[]]
  });

  it("records a normal ERC-721 transfer", async () => {
    const changes = await evmTransferEventProcessor.process(
      erc721Log(NFT_CONTRACT),
      apiClient
    );

    expect(changes).toEqual({
      ft: {},
      nft: {
        [getAddress(FROM)]: { [NFT_CONTRACT]: { "4561": "-1" } },
        [getAddress(TO)]: { [NFT_CONTRACT]: { "4561": "1" } }
      },
      vm: "evm"
    });
  });

  it.each(PROTOTYPE_KEYS)("ignores address=%s", async (key) => {
    const changes = await evmTransferEventProcessor.process(
      // Ethereum RPC logs validate address only as a string and balance-changes.ts
      // casts it to Hex, so this mirrors what reaches the processor.
      erc721Log(key as Hex),
      apiClient
    );

    expect(changes).toEqual({ ft: {}, nft: {}, vm: "evm" });
  });
});

describe("mergeBalanceChanges", () => {
  const wasmChanges = (
    changes: Partial<WasmBalanceChanges>
  ): WasmBalanceChanges => ({ ft: {}, nft: {}, vm: "wasm", ...changes });

  it("merges ft and nft keys that match Object.prototype members", () => {
    const first = wasmChanges({
      ft: { [BOB]: { constructor: "1" } },
      nft: { [BOB]: { [CONTRACT]: { constructor: "1" } } }
    });
    const second = wasmChanges({
      ft: { [BOB]: { constructor: "2", toString: "1" } },
      nft: { [BOB]: { [CONTRACT]: { toString: "1" } } }
    });

    expect(mergeBalanceChanges(first, second)).toEqual(
      wasmChanges({
        ft: { [BOB]: { constructor: "3", toString: "1" } },
        nft: { [BOB]: { [CONTRACT]: { constructor: "1", toString: "1" } } }
      })
    );
  });

  it("skips an own __proto__ key produced by a computed-key literal", () => {
    const source = wasmChanges({
      ft: JSON.parse(`{"__proto__":{"polluted":"7"},"${BOB}":{"uinit":"1"}}`),
      nft: JSON.parse(`{"${BOB}":{"__proto__":{"1":"1"}}}`)
    });

    expect(mergeBalanceChanges(wasmChanges({}), source)).toEqual(
      wasmChanges({ ft: { [BOB]: { uinit: "1" } }, nft: { [BOB]: {} } })
    );
  });

  it("keeps a subtotal above uint256 across both merge levels", () => {
    const event = (amount: string) =>
      wasmChanges({ ft: { [BOB]: { uinit: amount } } });
    const message = [event(UINT256_MAX), event("1")].reduce(
      (target, source) => mergeBalanceChanges(target, source),
      wasmChanges({})
    );

    expect(mergeBalanceChanges(wasmChanges({}), message)).toEqual(
      wasmChanges({ ft: { [BOB]: { uinit: UINT256_MAX_PLUS_ONE } } })
    );
  });

  it("skips an amount with an extreme positive exponent", () => {
    const source = wasmChanges({
      ft: {
        [BOB]: {
          huge: "1e999999999",
          negative: "-1e999999999",
          uinit: UINT256_MAX
        }
      }
    });

    expect(mergeBalanceChanges(wasmChanges({}), source)).toEqual(
      wasmChanges({ ft: { [BOB]: { uinit: UINT256_MAX } } })
    );
  });

  it("skips an amount with an extreme negative exponent", () => {
    const target = wasmChanges({
      ft: { [BOB]: { uinit: "5" } },
      nft: { [BOB]: { [CONTRACT]: { "1": "1" } } }
    });
    const source = wasmChanges({
      ft: { [BOB]: { uinit: "1e-999999999" } },
      nft: {
        [BOB]: { [CONTRACT]: { "1": "1e-999999999", "2": "1e999999999" } }
      }
    });

    expect(mergeBalanceChanges(target, source)).toEqual(target);
  });
});

describe("convertToEvmAmount", () => {
  beforeEach(() => {
    jest
      .spyOn(CacheService.prototype, "getOrFetch")
      .mockImplementation(<T>() => Promise.resolve("evm/TOKEN" as T));
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("converts uint256 max", async () => {
    expect(
      await apiClient.convertToEvmAmount({
        amount: UINT256_MAX,
        denom: "uinit"
      })
    ).toEqual({ amount: `${UINT256_MAX}000000000000`, denom: "evm/TOKEN" });
  });

  it.each(["1e1001", "1e999999999", "-1e999999999", "1e-999999999"])(
    "returns %s unconverted",
    async (amount) => {
      expect(
        await apiClient.convertToEvmAmount({ amount, denom: "uinit" })
      ).toEqual({ amount, denom: "uinit" });
    }
  );
});
