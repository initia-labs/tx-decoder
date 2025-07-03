import { ApiClient } from "./api";
import { DEFAULT_BALANCE_CHANGES } from "./constants";
import { BalanceChanges, BalanceEventProcessor } from "./interfaces";
import * as Processors from "./processors";
import { Event, Log } from "./schema";
import { mergeBalanceChanges } from "./utils";

const allBalanceEventProcessors: BalanceEventProcessor[] = [
  Processors.burnEventProcessor,
  Processors.depositEventProcessor,
  Processors.withdrawEventProcessor,
  Processors.mintEventProcessor,
  Processors.objectTransferEventProcessor,
  // Add other event processors here...
];

const eventProcessors = new Map<string, BalanceEventProcessor>(
  allBalanceEventProcessors.map((p) => [p.type_tag, p])
);

export async function processLogForBalanceChanges(
  log: Log,
  apiClient: ApiClient
): Promise<BalanceChanges> {
  const balanceChangePromises: Promise<BalanceChanges>[] = [];

  for (const event of log.events) {
    const processor = findProcessorForEvent(event);

    if (processor) {
      balanceChangePromises.push(
        processor.process(event, log.events, apiClient)
      );
    }
  }

  if (balanceChangePromises.length === 0) {
    return DEFAULT_BALANCE_CHANGES;
  }

  const results = await Promise.allSettled(balanceChangePromises);

  const fulfilledChanges = results.reduce<BalanceChanges[]>((acc, result) => {
    if (result.status === "fulfilled") {
      acc.push(result.value);
    } else {
      console.error("An event processor failed:", result.reason);
    }
    return acc;
  }, []);

  return fulfilledChanges.reduce(mergeBalanceChanges, DEFAULT_BALANCE_CHANGES);
}

const findProcessorForEvent = (event: Event): BalanceEventProcessor | null => {
  if (event.type !== "move") return null;

  const typeTagAttr = event.attributes.find((attr) => attr.key === "type_tag");
  if (!typeTagAttr) return null;

  return eventProcessors.get(typeTagAttr.value) || null;
};
