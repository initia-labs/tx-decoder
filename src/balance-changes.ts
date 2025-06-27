import { ApiClient } from "./api";
import { DEFAULT_BALANCE_CHANGES } from "./constants";
import { BalanceChanges, BalanceEventProcessor } from "./interfaces";
import * as Processors from "./processors";
import { Event, Log } from "./schema";
import { mergeBalanceChanges } from "./utils";

const allBalanceEventProcessors: BalanceEventProcessor[] = [
  Processors.withdrawEventProcessor,
  Processors.depositEventProcessor,
  Processors.mintEventProcessor,
  Processors.objectTransferEventProcessor,
  // Add other event processors here...
];

const eventProcessors = new Map<string, BalanceEventProcessor>(
  allBalanceEventProcessors.map((p) => [p.type_tag, p])
);

/**
 * Processes a single transaction log to calculate aggregate balance changes from its events.
 * It acts as a dispatcher, finding and executing the correct processor for each event.
 *
 * @param log The transaction log, assumed to have pre-processed events.
 * @param apiClient The configured API client instance for making network requests.
 * @returns A Promise resolving to the aggregated BalanceChanges for the entire log.
 */
export async function processLogForBalanceChanges(
  log: Log,
  apiClient: ApiClient
): Promise<BalanceChanges> {
  const balanceChangePromises: Promise<BalanceChanges>[] = [];

  for (const event of log.events) {
    const processor = findProcessorForEvent(event);

    if (processor) {
      balanceChangePromises.push(processor.process(event, apiClient));
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
