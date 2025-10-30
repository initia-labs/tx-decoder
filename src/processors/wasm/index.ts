import { WasmEventProcessor } from "@/interfaces";

import { transferEventProcessor } from "./transfer";
import { wasmEventProcessor } from "./wasm-transfer";

const wasmEventProcessors: WasmEventProcessor[] = [
  transferEventProcessor,
  wasmEventProcessor
];

export const wasmProcessorRegistry = new Map<string, WasmEventProcessor>(
  wasmEventProcessors.map((p) => [p.eventType, p])
);

export { transferEventProcessor, wasmEventProcessor };
