import { z } from "zod";

import { ApiClient } from "@/api";
import {
  EvmBalanceChanges,
  MoveBalanceChanges,
  WasmBalanceChanges
} from "@/interfaces";
import { Event, zEvmLog } from "@/schema";

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
    evmLog: z.infer<typeof zEvmLog>,
    apiClient: ApiClient
  ) => Promise<EvmBalanceChanges>;
}

export interface WasmEventProcessor {
  check: (event: Event) => boolean;
  process: (
    event: Event,
    allEvents: Event[],
    apiClient: ApiClient
  ) => Promise<WasmBalanceChanges>;
}
