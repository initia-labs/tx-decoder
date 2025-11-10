import * as Decoders from "./decoders";
import { MessageDecoder } from "./interfaces";

export const cosmosEvmMessageDecoders: MessageDecoder[] = [
  Decoders.authzExecDecoder,
  Decoders.authzGrantDecoder,
  Decoders.authzRevokeDecoder,
  Decoders.feegrantGrantAllowanceDecoder,
  Decoders.feegrantRevokeAllowanceDecoder,
  Decoders.sendDecoder,
  Decoders.finalizeTokenDepositDecoder,
  Decoders.initiateTokenWithdrawalDecoder,
  Decoders.ibcSendFtDecoder,
  Decoders.ibcReceiveFtDecoder,
  Decoders.ibcSendNftEvmDecoder,
  Decoders.ibcReceiveNftEvmDecoder
];

export const cosmosWasmMessageDecoders: MessageDecoder[] = [
  Decoders.authzExecDecoder,
  Decoders.authzGrantDecoder,
  Decoders.authzRevokeDecoder,
  Decoders.feegrantGrantAllowanceDecoder,
  Decoders.feegrantRevokeAllowanceDecoder,
  Decoders.sendDecoder,
  Decoders.initiateTokenWithdrawalDecoder,
  Decoders.finalizeTokenDepositDecoder,
  Decoders.ibcSendFtDecoder,
  Decoders.ibcReceiveFtDecoder,
  Decoders.ibcSendNftWasmDecoder,
  Decoders.ibcReceiveNftWasmDecoder,
  Decoders.cw20TransferDecoder,
  Decoders.cw721MintDecoder,
  Decoders.cw721TransferDecoder,
  Decoders.instantiateContractDecoder,
  // executeContractDecoder should be LAST as it's a catch-all for any execute message
  Decoders.executeContractDecoder
];

export const cosmosMoveMessageDecoders: MessageDecoder[] = [
  Decoders.authzExecDecoder,
  Decoders.authzGrantDecoder,
  Decoders.authzRevokeDecoder,
  Decoders.feegrantGrantAllowanceDecoder,
  Decoders.feegrantRevokeAllowanceDecoder,
  Decoders.claimMinitswapDecoder,
  Decoders.delegateDecoder,
  Decoders.delegateLockedDecoder,
  Decoders.depositMinitswapDecoder,
  Decoders.depositLiquidityDecoder,
  Decoders.directDepositLiquidityDecoder,
  Decoders.depositStakeLiquidityDecoder,
  Decoders.depositStakeLockLiquidityDecoder,
  Decoders.dexSwapDecoder,
  Decoders.extendLiquidityDecoder,
  Decoders.finalizeTokenWithdrawalDecoder,
  Decoders.mergeLiquidityDecoder,
  Decoders.ibcReceiveNftMoveDecoder,
  Decoders.ibcSendNftMoveDecoder,
  Decoders.ibcSendFtDecoder,
  Decoders.ibcReceiveFtDecoder,
  Decoders.initiateTokenDepositDecoder,
  Decoders.initiateTokenWithdrawalDecoder,
  Decoders.nftBurnDecoder,
  Decoders.nftMintDecoder,
  Decoders.objectTransferDecoder,
  Decoders.provideStableswapDecoder,
  Decoders.redelegateDecoder,
  Decoders.redelegateLockedDecoder,
  Decoders.sendDecoder,
  Decoders.stableswapDecoder,
  Decoders.undelegateDecoder,
  Decoders.undelegateLockedDecoder,
  Decoders.vipClaimEsinitDecoder,
  Decoders.vipGaugeVoteDecoder,
  Decoders.vipLockStakeDecoder,
  Decoders.withdrawDelegatorRewardDecoder,
  Decoders.withdrawDelegatorRewardLockedDecoder,
  Decoders.withdrawLiquidityDecoder,
  Decoders.withdrawMinitswapDecoder,
  Decoders.withdrawStableswapDecoder
];

export const ethereumDecoders = [
  Decoders.contractCreationDecoder,
  Decoders.approveDecoder,
  Decoders.erc20TransferDecoder,
  Decoders.transferFromDecoder,
  Decoders.erc721SafeTransferFromDecoder,
  Decoders.kami721PublicMintDecoder,
  Decoders.ethTransferDecoder
];
