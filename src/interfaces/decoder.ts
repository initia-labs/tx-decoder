import type { Log, Message, TxResponse } from "@/schema";

import { ApiClient } from "@/api";

import { DecodedMessage } from "./cosmos";

export type MessageDecoder<M = Message, L = Log> = {
  check: (message: M, log: L) => boolean;
  decode: (
    message: M,
    log: L,
    apiClient: ApiClient,
    txResponse: TxResponse,
    vm: "evm" | "move" | "wasm"
  ) => Promise<DecodedMessage>;
};
