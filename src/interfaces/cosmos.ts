import { Coin, CollectionResource, Validator } from "@/schema";

interface DecodedMessageBase {
  isIbc: boolean;
  isOp: boolean;
}

// Move VM specific messages (from src/decoders/cosmos/move/)
export type MoveDecodedMessage =
  | DecodedClaimMinitswapMessage
  | DecodedDelegateMessage
  | DecodedDepositLiquidityMessage
  | DecodedDepositMinitswapMessage
  | DecodedDepositStakeLiquidityMessage
  | DecodedDepositStakeLockLiquidityMessage
  | DecodedExtendLiquidityMessage
  | DecodedIbcNftReceiveMoveMessage
  | DecodedIbcNftSendMoveMessage
  | DecodedMergeLiquidityMessage
  | DecodedNftBurnMessage
  | DecodedNftMintMessage
  | DecodedObjectTransferMessage
  | DecodedProvideStableswapMessage
  | DecodedRedelegateMessage
  | DecodedSwapMessage
  | DecodedUndelegateMessage
  | DecodedVipClaimEsinitMessage
  | DecodedVipGaugeVoteMessage
  | DecodedWithdrawDelegatorRewardMessage
  | DecodedWithdrawLiquidityMessage
  | DecodedWithdrawMinitswapMessage
  | DecodedWithdrawStableswapMessage;

// EVM VM specific messages (from src/decoders/protocols/ibc/nft-evm.ts)
export type EvmDecodedMessage =
  | DecodedIbcNftReceiveEvmMessage
  | DecodedIbcNftSendEvmMessage;

// WASM VM specific messages (from src/decoders/cosmos/wasm/)
export type WasmDecodedMessage =
  | DecodedCw20TransferFromMessage
  | DecodedCw20TransferMessage
  | DecodedCw721MintMessage
  | DecodedCw721TransferMessage
  | DecodedExecuteContractMessage
  | DecodedIbcNftReceiveWasmMessage
  | DecodedIbcNftSendWasmMessage
  | DecodedInstantiateContractMessage;

// Cosmos L1 messages (from src/decoders/cosmos/ root level and protocols)
export type CosmosDecodedMessage =
  | DecodedAuthzExecMessage
  | DecodedAuthzGrantMessage
  | DecodedAuthzRevokeMessage
  | DecodedFeegrantGrantAllowanceMessage
  | DecodedFeegrantRevokeAllowanceMessage
  | DecodedFinalizeTokenDepositMessage
  | DecodedFinalizeTokenWithdrawalMessage
  | DecodedIbcFtReceiveMessage
  | DecodedIbcFtSendMessage
  | DecodedInitiateTokenDepositMessage
  | DecodedInitiateTokenWithdrawalMessage
  | DecodedSendMessage;

// Combined union of all decoded messages
export type DecodedMessage =
  | CosmosDecodedMessage
  | DecodedNotSupportedMessage
  | EvmDecodedMessage
  | MoveDecodedMessage
  | WasmDecodedMessage;

interface DecodedAuthzExecMessage extends DecodedMessageBase {
  action: "authz_exec";
  data: {
    grantee: string;
    messages: DecodedMessage[];
  };
}

interface DecodedAuthzGrantMessage extends DecodedMessageBase {
  action: "authz_grant";
  data: {
    authorization: {
      "@type": string;
      [key: string]: unknown;
    };
    expiration?: string;
    grantee: string;
    granter: string;
  };
}

interface DecodedAuthzRevokeMessage extends DecodedMessageBase {
  action: "authz_revoke";
  data: {
    grantee: string;
    granter: string;
    msg_type_url: string;
  };
}

interface DecodedFeegrantGrantAllowanceMessage extends DecodedMessageBase {
  action: "feegrant_grant_allowance";
  data: {
    allowance: {
      "@type": string;
      [key: string]: unknown;
    };
    grantee: string;
    granter: string;
  };
}

interface DecodedFeegrantRevokeAllowanceMessage extends DecodedMessageBase {
  action: "feegrant_revoke_allowance";
  data: {
    grantee: string;
    granter: string;
  };
}

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

interface DecodedInitiateTokenWithdrawalMessage extends DecodedMessageBase {
  action: "op_initiate_withdraw";
  data: {
    amount: string;
    baseDenom: string;
    denom: string;
    from: string;
    l2Sequence: string;
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

interface DecodedFinalizeTokenDepositMessage extends DecodedMessageBase {
  action: "op_finalize_deposit";
  data: {
    amount: string;
    baseDenom: string;
    denom: string;
    from: string;
    height: string;
    l1Sequence: string;
    reason?: string;
    sequence: string;
    success: boolean;
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

interface DecodedIbcNftSendMoveMessage extends DecodedMessageBase {
  action: "ibc_nft_send_move";
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

interface DecodedIbcNftSendEvmMessage extends DecodedMessageBase {
  action: "ibc_nft_send_evm";
  data: {
    contractAddress: string;
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
    tokenIds: string[];
    tokenUris: string[];
  };
}

interface DecodedIbcNftReceiveMoveMessage extends DecodedMessageBase {
  action: "ibc_nft_receive_move";
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

interface DecodedIbcNftReceiveEvmMessage extends DecodedMessageBase {
  action: "ibc_nft_receive_evm";
  data: {
    contractAddress: string;
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
    tokenIds: string[];
    tokenUris: string[];
  };
}

interface DecodedIbcNftSendWasmMessage extends DecodedMessageBase {
  action: "ibc_nft_send_wasm";
  data: {
    classId: string;
    contractAddress: string;
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
    tokenIds: string[];
    tokenUris: string[];
  };
}

interface DecodedIbcNftReceiveWasmMessage extends DecodedMessageBase {
  action: "ibc_nft_receive_wasm";
  data: {
    classId: string;
    contractAddress: string;
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
    releaseTimestamp: string;
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
    lockTime: number;
    releaseTimestamp: string;
    validator: Validator | null;
    validatorAddress: string;
  };
}

interface DecodedVipClaimEsinitMessage extends DecodedMessageBase {
  action: "vip_claim_esinit";
  data: {
    amount: string;
    chainId: string;
    denom: string;
    from: string;
  };
}

interface DecodedVipGaugeVoteMessage extends DecodedMessageBase {
  action: "vip_gauge_vote";
  data: {
    epoch: string;
    from: string;
    maxVotingPower: string;
    votes: Array<{
      amount: string;
      rollup: string;
      weight: string;
    }>;
    votingPower: string;
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
    initialPositions: {
      amount: string;
      initialReleaseTimestamp: string;
    }[];
    liquidityDenom: string;
    mergedLiquidity: string;
    newReleaseTimestamp: string;
    validator: Validator | null;
    validatorAddress: string;
  };
}

interface DecodedWithdrawStableswapMessage extends DecodedMessageBase {
  action: "withdraw_stableswap";
  data: {
    coinAmounts: string[];
    coinDenoms: string[];
    feeAmounts: string[];
    from: string;
    liquidity: string;
    liquidityDenom: string;
  };
}

interface DecodedProvideStableswapMessage extends DecodedMessageBase {
  action: "provide_stableswap";
  data: {
    coinAmounts: string[];
    coinDenoms: string[];
    feeAmounts: string[];
    from: string;
    liquidity: string;
    liquidityDenom: string;
  };
}

interface DecodedCw20TransferMessage extends DecodedMessageBase {
  action: "cw20_transfer";
  data: {
    amount: string;
    contract: string;
    from: string;
    to: string;
  };
}

interface DecodedCw20TransferFromMessage extends DecodedMessageBase {
  action: "cw20_transfer_from";
  data: {
    amount: string;
    contract: string;
    from: string;
    owner: string;
    to: string;
  };
}

interface DecodedInstantiateContractMessage extends DecodedMessageBase {
  action: "instantiate_contract";
  data: {
    admin?: string;
    codeId: string;
    contractAddress?: string;
    funds: Coin[];
    initMsg: unknown;
    label: string;
    sender: string;
  };
}

interface DecodedExecuteContractMessage extends DecodedMessageBase {
  action: "execute_contract";
  data: {
    contract: string;
    function?: string;
    funds: Coin[];
    msg: unknown;
    sender: string;
  };
}

interface DecodedCw721TransferMessage extends DecodedMessageBase {
  action: "cw721_transfer";
  data: {
    contract: string;
    from: string;
    to: string;
    tokenId: string;
  };
}

interface DecodedCw721MintMessage extends DecodedMessageBase {
  action: "cw721_mint";
  data: {
    contract: string;
    extension?: unknown;
    owner: string;
    tokenId: string;
    tokenUri?: string;
  };
}
