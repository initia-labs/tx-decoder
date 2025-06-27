import { TxDecoder } from "@/decoder";

export const mockRestUrl = "https://mock.initia.xyz";

export const initialize = (endpoint?: string) => {
  return new TxDecoder({
    restUrl: endpoint ?? mockRestUrl,
  });
};
