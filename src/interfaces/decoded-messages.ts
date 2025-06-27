import { Coin, Validator } from "@/schema";

interface DecodedMessageBase {
  isIbc: boolean;
  isOp: boolean;
}

export type DecodedMessage =
  | DecodedDelegateMessage
  | DecodedFinalizeTokenWithdrawalMessage
  | DecodedIbcNftReceiveMessage
  | DecodedIbcNftSendMessage
  | DecodedInitiateTokenDepositMessage
  | DecodedNftBurnMessage
  | DecodedNftMintMessage
  | DecodedNotSupportedMessage
  | DecodedObjectTransferMessage
  | DecodedRedelegateMessage
  | DecodedSendMessage
  | DecodedSwapMessage
  | DecodedUndelegateMessage
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
    validator: Validator | null;
  };
}

interface DecodedSwapMessage extends DecodedMessageBase {
  action: "swap";
  data: {
    amountIn: string;
    amountOut: string;
    denomIn: string;
    denomOut: string;
    from: string;
  };
}

interface DecodedDelegateMessage extends DecodedMessageBase {
  action: "delegate";
  data: {
    coins: Coin[];
    delegatorAddress: string;
    validator: Validator | null;
  };
}

interface DecodedUndelegateMessage extends DecodedMessageBase {
  action: "undelegate";
  data: {
    coins: Coin[];
    delegatorAddress: string;
    validator: Validator | null;
  };
}

interface DecodedRedelegateMessage extends DecodedMessageBase {
  action: "redelegate";
  data: {
    coins: Coin[];
    delegatorAddress: string;
    validatorDst: Validator | null;
    validatorSrc: Validator | null;
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

interface DecodedNftMintMessage extends DecodedMessageBase {
  action: "nft_mint";
  data: {
    collection_address: string;
    token_address: string;
    token_id: string;
    token_uri?: string;
  };
}

interface DecodedObjectTransferMessage extends DecodedMessageBase {
  action: "object_transfer";
  data: {
    from: string;
    object: string;
    to: string;
  };
}

interface DecodedNftBurnMessage extends DecodedMessageBase {
  action: "nft_burn";
  data: {
    collection_address: string;
    token_address: string;
    token_id: string;
  };
}

interface DecodedIbcNftSendMessage extends DecodedMessageBase {
  action: "ibc_nft_send";
  data: {
    collection_id: string;
    collection_uri: string | null;
    receiver: string;
    sender: string;
    source_channel: string;
    source_port: string;
    token_ids: string[];
    token_uris: string[];
  };
}

interface DecodedIbcNftReceiveMessage extends DecodedMessageBase {
  action: "ibc_nft_receive";
  data: {
    collection_id: string;
    collection_uri: string | null;
    destination_channel: string;
    destination_port: string;
    receiver: string;
    sender: string;
    token_ids: string[];
    token_uris: string[];
  };
}
