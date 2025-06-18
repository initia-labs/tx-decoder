interface DecodedMessageBase {
  isIbc: boolean;
  isOp: boolean;
}

export type DecodedMessage =
  | DecodedFinalizeTokenWithdrawalMessage
  | DecodedInitiateTokenDepositMessage
  | DecodedNotSupportedMessage
  | DecodedSendMessage
  | DecodedSwapMessage
  | DecodedWithdrawDelegatorRewardMessage;

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

interface DecodedWithdrawDelegatorRewardMessage extends DecodedMessageBase {
  action: "withdraw_delegator_reward";
  data: {
    from: string;
    reward: string;
    validator: {
      description: {
        details: string;
        identity: string;
        moniker: string;
        security_contact: string;
        website: string;
      };
      operator_address: string;
    };
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

interface DecodedFinalizeTokenWithdrawalMessage extends DecodedMessageBase {
  action: "op_finalize_withdraw";
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
