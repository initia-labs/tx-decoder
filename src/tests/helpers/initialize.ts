import { TxDecoder } from "@/decoder";

export const initialize = (endpoint?: string) => {
  return new TxDecoder({
    restUrl: endpoint ?? "https://test.url",
  });
};
