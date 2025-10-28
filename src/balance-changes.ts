import { Hex } from "viem";

import { ApiClient } from "./api";
import {
  createDefaultEvmBalanceChanges,
  createDefaultMoveBalanceChanges,
  createDefaultWasmBalanceChanges
} from "./constants";
import {
  BalanceChanges,
  EvmBalanceChanges,
  MoveBalanceChanges,
  WasmBalanceChanges
} from "./interfaces";
import {
  evmProcessorRegistry,
  moveProcessorRegistry,
  wasmProcessorRegistry
} from "./processors";
import { EthereumLog, Log, zEvmLog } from "./schema";
import { mergeBalanceChanges } from "./utils";

async function _resolveAndMergeChanges<T extends BalanceChanges>(
  promises: Promise<T>[],
  defaultChanges: () => T
): Promise<T> {
  if (promises.length === 0) {
    return defaultChanges();
  }

  const results = await Promise.allSettled(promises);

  const fulfilledChanges = results.reduce<T[]>((acc, result) => {
    if (result.status === "fulfilled") {
      acc.push(result.value);
    } else {
      console.error(`An event processor failed:`, result.reason);
    }
    return acc;
  }, []);

  if (fulfilledChanges.length === 0) {
    return defaultChanges();
  }

  return fulfilledChanges.reduce(
    (acc, changes) => mergeBalanceChanges(acc, changes),
    defaultChanges()
  );
}

async function _processMoveLog(
  log: Log,
  apiClient: ApiClient
): Promise<MoveBalanceChanges> {
  const promises: Promise<MoveBalanceChanges>[] = [];

  for (const [index, event] of log.events.entries()) {
    if (event.type !== "move") continue;

    const typeTagAttr = event.attributes.find(
      (attr) => attr.key === "type_tag"
    );
    if (!typeTagAttr) continue;

    const processor = moveProcessorRegistry.get(typeTagAttr.value);
    if (!processor) continue;

    try {
      promises.push(
        Promise.resolve(processor.process(event, log.events, apiClient, index))
      );
    } catch (error) {
      console.error(`Failed to process ${processor.typeTag}:`, error);
    }
  }

  return _resolveAndMergeChanges(promises, createDefaultMoveBalanceChanges);
}

async function _processEvmLog(
  log: Log,
  apiClient: ApiClient
): Promise<EvmBalanceChanges> {
  const promises: Promise<EvmBalanceChanges>[] = [];

  for (const event of log.events) {
    if (event.type !== "evm") continue;

    const eventAttributes = event.attributes.filter(
      (attr) => attr.key === "log"
    );

    for (const eventAttribute of eventAttributes) {
      try {
        const evmLog = zEvmLog.parse(eventAttribute.value);
        const topic0 = evmLog.topics[0].toLowerCase();

        const processor = evmProcessorRegistry.get(topic0);
        if (!processor) continue;

        promises.push(processor.process(evmLog, apiClient));
      } catch (error) {
        console.error("Failed to parse EVM log attribute:", error);
      }
    }
  }

  return _resolveAndMergeChanges(promises, createDefaultEvmBalanceChanges);
}

async function _processWasmLog(
  log: Log,
  apiClient: ApiClient
): Promise<WasmBalanceChanges> {
  const promises: Promise<WasmBalanceChanges>[] = [];

  for (const event of log.events) {
    const processor = wasmProcessorRegistry.get(event.type);
    if (!processor) continue;

    try {
      promises.push(
        Promise.resolve(processor.process(event, log.events, apiClient))
      );
    } catch (error) {
      console.error(`Failed to process ${processor.eventType}:`, error);
    }
  }

  return _resolveAndMergeChanges(promises, createDefaultWasmBalanceChanges);
}

export async function calculateBalanceChangesFromLog(
  log: Log,
  apiClient: ApiClient,
  vm: "evm" | "move" | "wasm"
): Promise<BalanceChanges> {
  switch (vm) {
    case "evm":
      return _processEvmLog(log, apiClient);
    case "move":
      return _processMoveLog(log, apiClient);
    case "wasm":
      return _processWasmLog(log, apiClient);
    default:
      throw new Error(`Invalid VM: ${vm}`);
  }
}

export async function calculateBalanceChangesFromEthereumLogs(
  logs: EthereumLog[],
  apiClient: ApiClient
): Promise<EvmBalanceChanges> {
  const promises: Promise<EvmBalanceChanges>[] = [];

  for (const log of logs) {
    try {
      // Skip logs without topics
      if (!log.topics || log.topics.length === 0) continue;

      const topic0 = log.topics[0].toLowerCase();
      const processor = evmProcessorRegistry.get(topic0);
      if (!processor) continue;

      const evmLog = {
        address: log.address as Hex,
        data: log.data as Hex,
        topics: log.topics as [Hex, ...Hex[]]
      };

      promises.push(processor.process(evmLog, apiClient));
    } catch (error) {
      console.error("Failed to process Ethereum RPC log:", error);
    }
  }

  return _resolveAndMergeChanges(promises, createDefaultEvmBalanceChanges);
}
