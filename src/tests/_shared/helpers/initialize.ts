import { TxDecoder } from "@/decoder";

export const initialize = (endpoint?: string) => {
  return new TxDecoder({
    jsonRpcUrl: "https://jsonrpc.test.url",
    registryUrl: "https://registry.test.url",
    restUrl: endpoint ?? "https://rest.test.url"
  });
};
