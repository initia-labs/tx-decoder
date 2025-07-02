import { TxDecoder } from "@/decoder";

export const initialize = (endpoint?: string) => {
  return new TxDecoder({
    registryUrls: ["https://test.url"],
    restUrl: endpoint ?? "https://test.url",
  });
};
