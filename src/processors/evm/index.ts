import { EvmEventProcessor } from "@/interfaces";

import { evmTransferEventProcessor } from "./transfer";

const evmEventProcessors: EvmEventProcessor[] = [evmTransferEventProcessor];

export const evmProcessorRegistry = new Map<string, EvmEventProcessor>(
  evmEventProcessors.map((p) => [p.eventSignatureHash, p])
);

export { evmTransferEventProcessor };
