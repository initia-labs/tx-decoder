import { Coin } from "@/schema";

interface DecodedMessageBase {
  isIbc: boolean;
  isOp: boolean;
}

export type DecodedMessage =
  | DecodedFinalizeTokenWithdrawalMessage
  | DecodedIBCNFTReceiveMessage
  | DecodedIBCNFTSendMessage
  | DecodedInitiateTokenDepositMessage
  | DecodedNFTBurnMessage
  | DecodedNFTMintMessage
  | DecodedNotSupportedMessage
  | DecodedObjectTransferMessage
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
    from: string;
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

interface DecodedNFTBurnMessage extends DecodedMessageBase {
  action: "nft_burn";
  data: {
    collection_address: string;
    token_address: string;
    token_id: string;
  };
}

interface DecodedIBCNFTSendMessage extends DecodedMessageBase {
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

interface DecodedIBCNFTReceiveMessage extends DecodedMessageBase {
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
