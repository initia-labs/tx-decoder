import { Coin, CollectionResource, Validator } from "@/schema";

interface DecodedMessageBase {
  isIbc: boolean;
  isOp: boolean;
}

export type DecodedMessage =
  | DecodedClaimMinitswapMessage
  | DecodedDelegateMessage
  | DecodedDepositLiquidityMessage
  | DecodedDepositMinitswapMessage
  | DecodedDepositStakeLiquidityMessage
  | DecodedDepositStakeLockLiquidityMessage
  | DecodedExtendLiquidityMessage
  | DecodedFinalizeTokenWithdrawalMessage
  | DecodedIbcFtReceiveMessage
  | DecodedIbcFtSendMessage
  | DecodedIbcNftReceiveMessage
  | DecodedIbcNftSendMessage
  | DecodedInitiateTokenDepositMessage
  | DecodedMergeLiquidityMessage
  | DecodedNftBurnMessage
  | DecodedNftMintMessage
  | DecodedNotSupportedMessage
  | DecodedObjectTransferMessage
  | DecodedRedelegateMessage
  | DecodedSendMessage
  | DecodedSwapMessage
  | DecodedUndelegateMessage
  | DecodedVipClaimEsinitMessage
  | DecodedVipGaugeVoteMessage
  | DecodedWithdrawDelegatorRewardMessage
  | DecodedWithdrawLiquidityMessage
  | DecodedWithdrawMinitswapMessage;

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

interface DecodedIbcFtSendMessage extends DecodedMessageBase {
  action: "ibc_ft_send";
  data: {
    amount: string;
    denom: string;
    dstChainId: string;
    dstChannel: string;
    dstPort: string;
    receiver: string;
    sender: string;
    sequence: string;
    srcChainId: string;
    srcChannel: string;
    srcPort: string;
    timeoutHeight: {
      revision_height: string;
      revision_number: string;
    };
    timeoutTimestamp: string;
  };
}

interface DecodedIbcFtReceiveMessage extends DecodedMessageBase {
  action: "ibc_ft_receive";
  data: {
    amount: string;
    denom: string;
    dstChainId: string;
    dstChannel: string;
    dstPort: string;
    receiver: string;
    sender: string;
    sequence: string;
    srcChainId: string;
    srcChannel: string;
    srcPort: string;
    timeoutHeight: {
      revision_height: string;
      revision_number: string;
    };
    timeoutTimestamp: string;
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
    releaseTimestamp?: string; // for lock stake only
    validator: Validator | null;
    validatorAddress: string;
  };
}

interface DecodedUndelegateMessage extends DecodedMessageBase {
  action: "undelegate";
  data: {
    coins: Coin[];
    delegatorAddress: string;
    unlockTimestamp?: string; // for lock stake only
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
    dstChainId: string;
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
    srcChainId: string;
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
    collection: CollectionResource["data"];
    collectionAddress: string;
    from: string;
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
    collection: CollectionResource["data"];
    collectionAddress: string;
    from: string;
    tokenAddress: string;
    tokenId: string;
  };
}

interface DecodedIbcNftSendMessage extends DecodedMessageBase {
  action: "ibc_nft_send";
  data: {
    collection: {
      creator: string;
      description: string;
      name: string;
      uri: string | null;
    };
    collectionId: string;
    dstChainId: string;
    dstChannel: string;
    dstPort: string;
    receiver: string;
    sender: string;
    sequence: string;
    srcChainId: string;
    srcChannel: string;
    srcPort: string;
    timeoutHeight: {
      revision_height: string;
      revision_number: string;
    };
    timeoutTimestamp: string;
    tokenAddress: string;
    tokenIds: string[];
    tokenUris: string[];
  };
}

interface DecodedIbcNftReceiveMessage extends DecodedMessageBase {
  action: "ibc_nft_receive";
  data: {
    collection: {
      creator: string;
      description: string;
      name: string;
      uri: string | null;
    };
    collectionId: string;
    dstChainId: string;
    dstChannel: string;
    dstPort: string;
    receiver: string;
    sender: string;
    sequence: string;
    srcChainId: string;
    srcChannel: string;
    srcPort: string;
    timeoutHeight: {
      revision_height: string;
      revision_number: string;
    };
    timeoutTimestamp: string;
    tokenAddress: string;
    tokenIds: string[];
    tokenUris: string[];
  };
}

interface DecodedDepositMinitswapMessage extends DecodedMessageBase {
  action: "deposit_minitswap";
  data: {
    amountDeposited: string;
    amountReceived: string;
    denomDeposited: string;
    denomReceived: string;
    from: string;
  };
}

interface DecodedWithdrawMinitswapMessage extends DecodedMessageBase {
  action: "withdraw_minitswap";
  data: {
    amountReceived: string;
    amountWithdrawn: string;
    denomReceived: string;
    denomWithdrawn: string;
    from: string;
    releaseTime: string;
  };
}

interface DecodedClaimMinitswapMessage extends DecodedMessageBase {
  action: "claim_minitswap";
  data: {
    amountReceived: string;
    amountWithdrawn: string;
    denomReceived: string;
    denomWithdrawn: string;
    from: string;
  };
}

interface DecodedDepositLiquidityMessage extends DecodedMessageBase {
  action: "deposit_liquidity";
  data: {
    amountA: string;
    amountB: string;
    denomA: string;
    denomB: string;
    from: string;
    liquidity: string;
    liquidityDenom: string;
  };
}

interface DecodedWithdrawLiquidityMessage extends DecodedMessageBase {
  action: "withdraw_liquidity";
  data: {
    amountA: string;
    amountB: string;
    denomA: string;
    denomB: string;
    from: string;
    liquidity: string;
    liquidityDenom: string;
  };
}

interface DecodedDepositStakeLiquidityMessage extends DecodedMessageBase {
  action: "deposit_stake_liquidity";
  data: {
    amountA: string;
    amountB: string;
    denomA: string;
    denomB: string;
    from: string;
    liquidity: string;
    liquidityDenom: string;
    validator: Validator | null;
    validatorAddress: string;
  };
}

interface DecodedDepositStakeLockLiquidityMessage extends DecodedMessageBase {
  action: "deposit_stake_lock_liquidity";
  data: {
    amountA: string;
    amountB: string;
    denomA: string;
    denomB: string;
    from: string;
    liquidity: string;
    liquidityDenom: string;
    releaseTimestamp: string;
    validator: Validator | null;
    validatorAddress: string;
  };
}

interface DecodedVipClaimEsinitMessage extends DecodedMessageBase {
  action: "vip_claim_esinit";
  data: {
    amount: string;
    denom: string;
    from: string;
  };
}

interface DecodedVipGaugeVoteMessage extends DecodedMessageBase {
  action: "vip_gauge_vote";
  data: {
    from: string;
    votes: Array<{
      amount: number;
      rollup: string;
    }>;
  };
}

interface DecodedExtendLiquidityMessage extends DecodedMessageBase {
  action: "extend_liquidity";
  data: {
    from: string;
    initialReleaseTimestamp: string;
    liquidity: string;
    liquidityDenom: string;
    newReleaseTimestamp: string;
    validator: Validator | null;
    validatorAddress: string;
  };
}

interface DecodedMergeLiquidityMessage extends DecodedMessageBase {
  action: "merge_liquidity";
  data: {
    from: string;
    initialReleaseTimestamp: string;
    liquidity: string;
    liquidityDenom: string;
    newReleaseTimestamp: string;
    validator: Validator | null;
    validatorAddress: string;
  };
}
