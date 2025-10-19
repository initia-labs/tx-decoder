import { BalanceChanges } from "./balance-changes";
import { ProcessedMessage } from "./common";
import { Metadata } from "./metadata";

interface DecodedEthereumCallBase {}

export type DecodedEthereumCall =
  | DecodedContractCreationCall
  | DecodedCosmosMirrorCall
  | DecodedErc20ApproveCall
  | DecodedErc20TransferCall
  | DecodedErc20TransferFromCall
  | DecodedErc721ApproveCall
  | DecodedErc721SafeTransferFromCall
  | DecodedErc721TransferFromCall
  | DecodedEthTransferCall
  | DecodedNotSupportedCall;

export interface DecodedContractCreationCall extends DecodedEthereumCallBase {
  action: "contract_creation";
  data: {
    bytecodeLength: number;
    contractAddresses: string[];
    from: string;
  };
}

/**
 * Represents an EVM transaction that mirrors a Cosmos transaction.
 *
 * In dual-execution chains, Cosmos transactions are mirrored as EVM transactions
 * for block consistency. The cosmos messages are included here, while metadata
 * and totalBalanceChanges are at the root DecodedEthereumTx level (not duplicated).
 */
export interface DecodedCosmosMirrorCall extends DecodedEthereumCallBase {
  action: "cosmos_mirror";
  data: {
    cosmosMessages: ProcessedMessage[];
    cosmosTxHash: string;
    evmTxHash: string;
  };
}

export interface DecodedErc20ApproveCall extends DecodedEthereumCallBase {
  action: "erc20_approve";
  data: {
    amount: string;
    contract: string;
    denom: string;
    from: string;
    spender: string;
  };
}

export interface DecodedErc721ApproveCall extends DecodedEthereumCallBase {
  action: "erc721_approve";
  data: {
    contract: string;
    from: string;
    spender: string;
    tokenId: string;
  };
}

export interface DecodedErc721SafeTransferFromCall
  extends DecodedEthereumCallBase {
  action: "erc721_safe_transfer_from";
  data: {
    contract: string;
    from: string;
    to: string;
    tokenId: string;
  };
}

export interface DecodedErc721TransferFromCall extends DecodedEthereumCallBase {
  action: "erc721_transfer_from";
  data: {
    contract: string;
    from: string;
    owner: string;
    to: string;
    tokenId: string;
  };
}

export interface DecodedErc20TransferCall extends DecodedEthereumCallBase {
  action: "erc20_transfer";
  data: {
    amount: string;
    contract: string;
    denom: string;
    from: string;
    to: string;
  };
}

export interface DecodedErc20TransferFromCall extends DecodedEthereumCallBase {
  action: "erc20_transfer_from";
  data: {
    amount: string;
    contract: string;
    denom: string;
    from: string;
    owner: string;
    to: string;
  };
}

export interface DecodedEthTransferCall extends DecodedEthereumCallBase {
  action: "eth_transfer";
  data: {
    amount: string;
    from: string;
    to: string;
  };
}

export interface DecodedNotSupportedCall extends DecodedEthereumCallBase {
  action: "not_supported";
  data: {
    from: string;
    input: string;
    to: string | null;
    value: string;
  };
}

export interface DecodedEthereumTx {
  decodedTransaction: DecodedEthereumCall;
  metadata: Metadata;
  totalBalanceChanges: BalanceChanges;
}
