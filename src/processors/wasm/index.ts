import { WasmEventProcessor } from "@/interfaces";

import { transferEventProcessor } from "./transfer";

const wasmEventProcessors: WasmEventProcessor[] = [transferEventProcessor];

export const wasmProcessorRegistry = new Map<string, WasmEventProcessor>(
  wasmEventProcessors.map((p) => [p.eventType, p])
);

export { transferEventProcessor };
