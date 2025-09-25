import { ApiClient } from "@/api";
import { EvmBalanceChanges, MoveBalanceChanges } from "@/interfaces";
import { Event, EventAttribute } from "@/schema";

export interface MoveEventProcessor {
  process: (
    event: Event,
    allEvents: Event[],
    apiClient: ApiClient,
    eventIndex: number
  ) => Promise<MoveBalanceChanges>;
  typeTag: string;
}

export interface EvmEventProcessor {
  eventSignatureHash: string;
  process: (
    eventAttribute: EventAttribute,
    apiClient: ApiClient
  ) => Promise<EvmBalanceChanges>;
}
