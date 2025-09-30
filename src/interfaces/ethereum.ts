import { EvmBalanceChanges } from "./balance-changes";
import { Metadata } from "./metadata";

interface DecodedEthereumCallBase {}

export type DecodedEthereumCall =
  | DecodedErc20TransferCall
  | DecodedErc20TransferFromCall
  | DecodedEthTransferCall
  | DecodedNotSupportedCall;

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
  totalBalanceChanges: EvmBalanceChanges;
}
