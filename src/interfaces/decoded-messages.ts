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
  | DecodedIbcTransferMessage
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

interface DecodedIbcTransferMessage extends DecodedMessageBase {
  action: "ibc_transfer";
  data: {
    amount: string;
    denom: string;
    destinationChannel: string;
    destinationPort: string;
    receiver: string;
    sender: string;
    sourceChannel: string;
    sourcePort: string;
  };
}

interface DecodedWithdrawDelegatorRewardMessage extends DecodedMessageBase {
  action: "withdraw_delegator_reward";
  data: {
    coins: Coin[];
    delegatorAddress: string;
    validator: Validator | null;
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
    from: string;
  };
}

interface DecodedDelegateMessage extends DecodedMessageBase {
  action: "delegate";
  data: {
    coins: Coin[];
    delegatorAddress: string;
    validator: Validator | null;
    validatorAddress: string;
  };
}

interface DecodedUndelegateMessage extends DecodedMessageBase {
  action: "undelegate";
  data: {
    coins: Coin[];
    delegatorAddress: string;
    validator: Validator | null;
    validatorAddress: string;
  };
}

interface DecodedRedelegateMessage extends DecodedMessageBase {
  action: "redelegate";
  data: {
    coins: Coin[];
    delegatorAddress: string;
    validatorDst: Validator | null;
    validatorDstAddress: string;
    validatorSrc: Validator | null;
    validatorSrcAddress: string;
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
    collectionAddress: string;
    tokenAddress: string;
    tokenId: string;
    tokenUri?: string;
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
    collectionAddress: string;
    tokenAddress: string;
    tokenId: string;
  };
}

interface DecodedIbcNftSendMessage extends DecodedMessageBase {
  action: "ibc_nft_send";
  data: {
    collectionId: string;
    collectionUri: string | null;
    receiver: string;
    sender: string;
    sourceChannel: string;
    sourcePort: string;
    tokenIds: string[];
    tokenUris: string[];
  };
}

interface DecodedIbcNftReceiveMessage extends DecodedMessageBase {
  action: "ibc_nft_receive";
  data: {
    collectionId: string;
    collectionUri: string | null;
    destinationChannel: string;
    destinationPort: string;
    receiver: string;
    sender: string;
    tokenIds: string[];
    tokenUris: string[];
  };
}
