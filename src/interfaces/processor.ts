import { ApiClient } from "@/api";
import { BalanceChanges } from "@/interfaces";
import { Event } from "@/schema";

export interface BalanceEventProcessor {
  process: (
    event: Event,
    events: Event[],
    apiClient: ApiClient
  ) => Promise<BalanceChanges>;
  type_tag: string;
}
