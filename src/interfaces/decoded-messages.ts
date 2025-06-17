interface DecodedMessageBase {
  isIbc: boolean;
  isOp: boolean;
}

export type DecodedMessage =
  | DecodedInitiateTokenDepositMessage
  | DecodedNotSupportedMessage
  | DecodedSendMessage
  | DecodedSwapMessage;

interface DecodedSendMessage extends DecodedMessageBase {
  action: "send";
  data: {
    coins: {
      amount: string;
      denom: string;
    }[];
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

interface DecodedInitiateTokenDepositMessage extends DecodedMessageBase {
  action: "op_deposit";
  data: {
    amount: string;
    bridge_id: string;
    denom: string;
    from: string;
    to: string;
  };
}

interface DecodedNotSupportedMessage extends DecodedMessageBase {
  action: "not_supported";
  data: {
    msgType: string;
  };
}
