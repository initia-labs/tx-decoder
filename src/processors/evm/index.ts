import { EvmEventProcessor } from "@/interfaces";

const evmEventProcessors: EvmEventProcessor[] = [
  // Add EVM event processors here...
];

export const evmProcessorRegistry = new Map<string, EvmEventProcessor>(
  evmEventProcessors.map((p) => [p.event_signature_hash, p])
);
