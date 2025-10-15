import { DecodedMessage, DecodedNotSupportedCall } from "@/interfaces";

export const createNotSupportedMessage = (typeUrl: string): DecodedMessage => {
  return {
    action: "not_supported",
    data: { msgType: typeUrl },
    isIbc: false,
    isOp: false
  };
};

export const createNotSupportedCall = (params: {
  from: string;
  input: string;
  to: string | null;
  value: string;
}): DecodedNotSupportedCall => {
  return {
    action: "not_supported",
    data: {
      from: params.from,
      input: params.input,
      to: params.to,
      value: params.value
    }
  };
};
