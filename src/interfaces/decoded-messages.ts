interface DecodedMessageBase {
  isIbc: boolean;
  isOp: boolean;
}

export type DecodedMessage =
  | DecodedNotSupportedMessage
  | DecodedSendMessage
  | DecodedSwapMessage;

interface DecodedSendMessage extends DecodedMessageBase {
  action: "send";
  data: {
    amount: string;
    denom: string;
    from: string;
    to: string;
  };
}

interface DecodedSwapMessage extends DecodedMessageBase {
  action: "swap";
  data: {
    amount_in: string;
    amount_out: string;
    denom_in: string;
    denom_out: string;
  };
}

interface DecodedNotSupportedMessage extends DecodedMessageBase {
  action: "not_supported";
  data: {
    msgType: string;
  };
}
