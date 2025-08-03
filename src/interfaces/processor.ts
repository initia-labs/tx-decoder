import { ApiClient } from "@/api";
import { BalanceChanges } from "@/interfaces";
import { Event } from "@/schema";

export interface BalanceEventProcessor {
  process: (
    currentEvent: Event,
    allEvents: Event[],
    apiClient: ApiClient,
    eventIndex: number
  ) => Promise<BalanceChanges>;
  type_tag: string;
}
