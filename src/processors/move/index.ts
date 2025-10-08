import { MoveEventProcessor } from "@/interfaces";

import { burnEventProcessor } from "./burn";
import { depositEventProcessor } from "./deposit";
import { mintEventProcessor } from "./mint";
import { objectTransferEventProcessor } from "./object-transfer";
import { withdrawEventProcessor } from "./withdraw";

const moveEventProcessors: MoveEventProcessor[] = [
  depositEventProcessor,
  withdrawEventProcessor,
  mintEventProcessor,
  objectTransferEventProcessor,
  burnEventProcessor
];

export const moveProcessorRegistry = new Map<string, MoveEventProcessor>(
  moveEventProcessors.map((p) => [p.typeTag, p])
);

export {
  burnEventProcessor,
  depositEventProcessor,
  mintEventProcessor,
  objectTransferEventProcessor,
  withdrawEventProcessor
};
