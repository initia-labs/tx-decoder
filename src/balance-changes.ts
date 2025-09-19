import { ApiClient } from "./api";
import { DEFAULT_BALANCE_CHANGES } from "./constants";
import { AnyBalanceEventProcessor, BalanceChanges } from "./interfaces";
import { evmProcessorRegistry, moveProcessorRegistry } from "./processors";
import { Event, Log } from "./schema";
import { mergeBalanceChanges } from "./utils";

export async function processLogForBalanceChanges(
  log: Log,
  apiClient: ApiClient
): Promise<BalanceChanges> {
  const balanceChangePromises: Promise<BalanceChanges>[] = [];

  for (const [index, event] of log.events.entries()) {
    const processor = findProcessorForEvent(event);

    if (processor) {
      balanceChangePromises.push(
        processor.process(event, log.events, apiClient, index)
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

const findProcessorForEvent = (
  event: Event
): AnyBalanceEventProcessor | null => {
  if (event.type === "move") {
    const typeTagAttr = event.attributes.find(
      (attr) => attr.key === "type_tag"
    );
    if (!typeTagAttr) return null;
    return moveProcessorRegistry.get(typeTagAttr.value) || null;
  }

  if (event.type === "evm") {
    // TODO: This is a hack to get the event signature hash from the log
    const eventSigAttr = event.attributes.find((attr) => attr.key === "log");
    if (!eventSigAttr) return null;
    return evmProcessorRegistry.get(eventSigAttr.value) || null;
  }

  return null;
};
