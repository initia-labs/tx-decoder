import { ApiClient } from "@/api";
import { Event } from "@/schema";

import { BalanceChanges } from "./common";

export interface BalanceEventProcessor {
  process: (event: Event, apiClient: ApiClient) => Promise<BalanceChanges>;
  type_tag: string;
}
