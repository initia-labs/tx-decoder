import { DecodedMessage } from "@/interfaces";

export const createNotSupportedMessage = (typeUrl: string): DecodedMessage => {
  return {
    action: "not_supported",
    data: { msgType: typeUrl },
    isIbc: false,
    isOp: false
  };
};
