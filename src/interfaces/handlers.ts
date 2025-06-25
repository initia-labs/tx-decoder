import type { Log, Message } from "@/schema";

import { ApiClient } from "@/api";

import { DecodedMessage } from "./decoded-messages";

export type MessageDecoder<M = Message, L = Log> = {
  check: (message: M, log: L) => boolean;
  decode: (message: M, log: L, apiClient: ApiClient) => Promise<DecodedMessage>;
};
