import { ApiClient } from "@/api";
import { BalanceChanges } from "@/interfaces";
import { Event } from "@/schema";

export interface MoveEventProcessor {
  process: (
    currentEvent: Event,
    allEvents: Event[],
    apiClient: ApiClient,
    eventIndex: number
  ) => Promise<BalanceChanges>;
  type_tag: string;
}

export interface EvmEventProcessor {
  event_signature_hash: string;
  process: (
    currentEvent: Event,
    allEvents: Event[],
    apiClient: ApiClient,
    eventIndex: number
  ) => Promise<BalanceChanges>;
}

export type AnyBalanceEventProcessor = EvmEventProcessor | MoveEventProcessor;
