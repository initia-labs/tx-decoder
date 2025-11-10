import type { EthereumRpcPayload, Log, Message, TxResponse } from "@/schema";

import { ApiClient } from "@/api";

import { DecodedMessage } from "./cosmos";
import { DecodedEthereumCall } from "./ethereum";

export type VmType = "evm" | "move" | "wasm";

export type MessageDecoder<M = Message, L = Log> = {
  check: (message: M, log: L, vm: VmType) => boolean;
  decode: (
    message: M,
    log: L,
    apiClient: ApiClient,
    txResponse: TxResponse,
    vm: VmType,
    getDecodersForVm?: (vm: VmType) => MessageDecoder[]
  ) => Promise<DecodedMessage>;
};

export interface EthereumDecoder {
  check: (payload: EthereumRpcPayload) => boolean;
  decode: (
    payload: EthereumRpcPayload,
    apiClient: ApiClient
  ) => Promise<DecodedEthereumCall>;
}
