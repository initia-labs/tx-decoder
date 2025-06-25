import { TxDecoder } from "@/decoder";

export const mockRestUrl = "https://mock.initia.xyz";

export const initialize = () => {
  return new TxDecoder({
    restUrl: mockRestUrl,
  });
};
