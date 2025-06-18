import { Coin } from "@/schema";

interface DecodedMessageBase {
  isIbc: boolean;
  isOp: boolean;
}

export type DecodedMessage =
  | DecodedFinalizeTokenWithdrawalMessage
  | DecodedInitiateTokenDepositMessage
  | DecodedNFTMintMessage
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
    coins: Coin[];
    from: string;
    validatorAddress: string;
  };
}

interface DecodedSwapMessage extends DecodedMessageBase {
  action: "swap";
  data: {
    amountIn: string;
    amountOut: string;
    denomIn: string;
    denomOut: string;
  };
}

interface DecodedInitiateTokenDepositMessage extends DecodedMessageBase {
  action: "op_deposit";
  data: {
    amount: string;
    bridgeId: string;
    denom: string;
    from: string;
    to: string;
  };
}

interface DecodedFinalizeTokenWithdrawalMessage extends DecodedMessageBase {
  action: "op_finalize_withdraw";
  data: {
    amount: string;
    bridgeId: string;
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

interface DecodedNFTMintMessage extends DecodedMessageBase {
  action: "nft_mint";
  data: {
    collection_address: string;
    token_address: string;
    token_id: string;
    token_uri: null;
  };
}
