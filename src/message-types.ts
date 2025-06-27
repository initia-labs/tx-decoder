/* eslint-disable perfectionist/sort-objects */
export const SUPPORTED_MESSAGE_TYPES = {
  // cosmos messages
  MsgSend: "/cosmos.bank.v1beta1.MsgSend",
  MsgWithdrawDelegatorReward:
    "/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward",

  // initia staking messages
  MsgDelegate: "/initia.mstaking.v1.MsgDelegate",
  MsgUndelegate: "/initia.mstaking.v1.MsgUndelegate",
  MsgRedelegate: "/initia.mstaking.v1.MsgBeginRedelegate",

  // initia move messages
  MsgExecute: "/initia.move.v1.MsgExecute",
  MsgExecuteJson: "/initia.move.v1.MsgExecuteJSON",

  // opinit messages
  MsgInitiateTokenDeposit: "/opinit.ophost.v1.MsgInitiateTokenDeposit",
  MsgFinalizeTokenWithdrawal: "/opinit.ophost.v1.MsgFinalizeTokenWithdrawal",

  // ibc messages
  MsgIbcNftTransfer: "/ibc.applications.nft_transfer.v1.MsgTransfer",
  MsgIbcRecvPacket: "/ibc.core.channel.v1.MsgRecvPacket",
} as const;
