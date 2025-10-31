import { WasmEventProcessor } from "@/interfaces";

import { cw20TransferProcessor } from "./cw20-transfer";
import { cw721MintProcessor } from "./cw721-mint";
import { cw721TransferProcessor } from "./cw721-transfer";
import { transferEventProcessor } from "./transfer";

export const wasmEventProcessors: WasmEventProcessor[] = [
  transferEventProcessor,
  cw20TransferProcessor,
  cw721TransferProcessor,
  cw721MintProcessor
];

export {
  cw20TransferProcessor,
  cw721MintProcessor,
  cw721TransferProcessor,
  transferEventProcessor
};
