import { Hex } from "viem";

import { ApiClient } from "@/api";
import { createDefaultWasmBalanceChanges } from "@/constants";
import { WasmBalanceChanges } from "@/interfaces";
import {
  cw20TransferProcessor,
  cw721MintProcessor,
  cw721TransferProcessor
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

const wasmEvent = (attributes: Record<string, string>): Event => ({
  attributes: Object.entries(attributes).map(([key, value]) => ({
    key,
    value
  })),
  type: "wasm"
});

const expectPrototypeUntouched = () => {
  expect(Object.prototype.hasOwnProperty.call(Object.prototype, CONTRACT)).toBe(
    false
  );
  expect(Object.keys(Object.prototype)).toEqual([]);
};

describe("prototype key guard", () => {
  afterEach(() => {
    expectPrototypeUntouched();
  });

  it("keeps normal CW-20 transfer balance changes", async () => {
    const changes = await cw20TransferProcessor.process(
      wasmEvent({
        _contract_address: CONTRACT,
        action: "transfer",
        amount: "1000",
        from: ALICE,
        to: BOB
      }),
      [],
      apiClient
    );

    expect(changes).toEqual({
      ft: { [ALICE]: { [CONTRACT]: "-1000" }, [BOB]: { [CONTRACT]: "1000" } },
      nft: {},
      vm: "wasm"
    });
  });

  it.each(["__proto__", "constructor", "prototype"])(
    "ignores a CW-20 transfer whose address is %s",
    async (key) => {
      const changes = await cw20TransferProcessor.process(
        wasmEvent({
          _contract_address: CONTRACT,
          action: "transfer",
          amount: "1000",
          from: ALICE,
          to: key
        }),
        [],
        apiClient
      );

      expect(changes).toEqual(createDefaultWasmBalanceChanges());
    }
  );

  it("ignores a CW-721 mint whose owner is __proto__", async () => {
    const changes = await cw721MintProcessor.process(
      wasmEvent({
        _contract_address: CONTRACT,
        action: "mint",
        owner: "__proto__",
        token_id: "1"
      }),
      [],
      apiClient
    );

    expect(changes).toEqual(createDefaultWasmBalanceChanges());
  });

  it("ignores a CW-721 transfer whose sender is __proto__", async () => {
    const changes = await cw721TransferProcessor.process(
      wasmEvent({
        _contract_address: CONTRACT,
        action: "transfer_nft",
        recipient: BOB,
        sender: "__proto__",
        token_id: "1"
      }),
      [],
      apiClient
    );

    expect(changes).toEqual(createDefaultWasmBalanceChanges());
  });

  it("ignores an EVM transfer log whose address is __proto__", async () => {
    const changes = await evmTransferEventProcessor.process(
      {
        // decodeEthereumTransaction casts an unvalidated string to Hex here.
        address: "__proto__" as Hex,
        data: "0x",
        topics: ["0x00"]
      },
      apiClient
    );

    expect(changes).toEqual({ ft: {}, nft: {}, vm: "evm" });
  });

  it("merges a token id that matches an Object.prototype member", () => {
    const first: WasmBalanceChanges = {
      ft: {},
      nft: { [BOB]: { [CONTRACT]: { constructor: "1" } } },
      vm: "wasm"
    };
    const second: WasmBalanceChanges = {
      ft: {},
      nft: { [BOB]: { [CONTRACT]: { toString: "1" } } },
      vm: "wasm"
    };

    expect(mergeBalanceChanges(first, second)).toEqual({
      ft: {},
      nft: { [BOB]: { [CONTRACT]: { constructor: "1", toString: "1" } } },
      vm: "wasm"
    });
  });
});

describe("convertToEvmAmount", () => {
  it("returns an amount above uint256 without expanding it", async () => {
    const token = { amount: "1e999999999", denom: "uinit" };

    expect(await apiClient.convertToEvmAmount(token)).toEqual(token);
  });
});
