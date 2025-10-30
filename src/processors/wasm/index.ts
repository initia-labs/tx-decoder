import { WasmEventProcessor } from "@/interfaces";

import { transferEventProcessor } from "./transfer";
import { wasmTransferEventProcessor } from "./wasm-transfer";

const wasmEventProcessors: WasmEventProcessor[] = [
  transferEventProcessor,
  wasmTransferEventProcessor
];

export const wasmProcessorRegistry = new Map<string, WasmEventProcessor>(
  wasmEventProcessors.map((p) => [p.eventType, p])
);

export { transferEventProcessor, wasmTransferEventProcessor };
