import { ApiClient } from "./api";
import {
  calculateBalanceChangesFromEthereumLogs,
  calculateBalanceChangesFromLog
} from "./balance-changes";
import {
  createDefaultEvmBalanceChanges,
  createDefaultMoveBalanceChanges
} from "./constants";
import * as Decoders from "./decoders";
import {
  DecodedEthereumTx,
  DecodedTx,
  DecoderConfig,
  MessageDecoder,
  ProcessedMessage,
  VmType
} from "./interfaces";
import { resolveMetadata } from "./metadata-resolver";
import {
  EthereumRpcPayload,
  Log,
  Message,
  TxResponse,
  zEthereumRpcPayload,
  zTxResponse
} from "./schema";
import { attachTxLogs, mergeBalanceChanges } from "./utils";
import { createNotSupportedCall, createNotSupportedMessage } from "./utils";

const evmMessageDecoders: MessageDecoder[] = [
  Decoders.sendDecoder,
  Decoders.finalizeTokenDepositDecoder,
  Decoders.initiateTokenWithdrawalDecoder,
  Decoders.ibcSendFtDecoder,
  Decoders.ibcReceiveFtDecoder,
  Decoders.ibcSendNftEvmDecoder,
  Decoders.ibcReceiveNftEvmDecoder
];

const moveMessageDecoders: MessageDecoder[] = [
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

const ethereumDecoders = [
  Decoders.contractCreationDecoder,
  Decoders.approveDecoder,
  Decoders.erc20TransferDecoder,
  Decoders.transferFromDecoder,
  Decoders.erc721SafeTransferFromDecoder
];

export class TxDecoder {
  private readonly apiClient: ApiClient;

  constructor(config: DecoderConfig) {
    if (!config.restUrl) {
      throw new Error("restUrl is required");
    }

    this.apiClient = new ApiClient(config);
  }

  /**
   * Decodes a Cosmos EVM transaction, processing only general message types
   */
  public async decodeCosmosEvmTransaction(tx: unknown): Promise<DecodedTx> {
    const txResponse = this._validateAndPrepareTx(tx);

    if (txResponse.tx.body.messages.length === 0) {
      return {
        messages: [],
        metadata: {},
        totalBalanceChanges: createDefaultEvmBalanceChanges()
      };
    }

    if (
      txResponse.code === 0 &&
      txResponse.logs.length !== txResponse.tx.body.messages.length
    ) {
      throw new Error(
        `Invalid tx response: ${txResponse.logs.length} logs found for ${txResponse.tx.body.messages.length} messages`
      );
    }

    const processedMessages = await this._processEvmMessage(txResponse);

    const totalBalanceChanges = processedMessages.reduce(
      (acc, message) => mergeBalanceChanges(acc, message.balanceChanges),
      createDefaultEvmBalanceChanges()
    );

    const metadata = await resolveMetadata(this.apiClient, totalBalanceChanges);

    return {
      messages: processedMessages,
      metadata,
      totalBalanceChanges
    };
  }

  /**
   * Decodes a Cosmos transaction, processing all supported message types for L1 and Move L2.
   */
  public async decodeCosmosTransaction(tx: unknown): Promise<DecodedTx> {
    const txResponse = this._validateAndPrepareTx(tx);

    if (txResponse.tx.body.messages.length === 0) {
      return {
        messages: [],
        metadata: {},
        totalBalanceChanges: createDefaultMoveBalanceChanges()
      };
    }

    if (
      txResponse.code === 0 &&
      txResponse.logs.length !== txResponse.tx.body.messages.length
    ) {
      throw new Error(
        `Invalid tx response: ${txResponse.logs.length} logs found for ${txResponse.tx.body.messages.length} messages`
      );
    }

    const processedMessages = await this._processMessage(txResponse);

    const totalBalanceChanges = processedMessages.reduce(
      (acc, message) => mergeBalanceChanges(acc, message.balanceChanges),
      createDefaultMoveBalanceChanges()
    );

    const metadata = await resolveMetadata(this.apiClient, totalBalanceChanges);

    return {
      messages: processedMessages,
      metadata,
      totalBalanceChanges
    };
  }

  /**
   * Decodes a native Ethereum RPC transaction
   */
  public async decodeEthereumTransaction(
    payload: unknown
  ): Promise<DecodedEthereumTx> {
    const ethereumPayload = this._validateAndPrepareEthereumPayload(payload);

    const decoder = this._findEthereumDecoder(ethereumPayload);

    const balanceChanges = await calculateBalanceChangesFromEthereumLogs(
      ethereumPayload.txReceipt.logs,
      this.apiClient
    );

    const notSupportedCall = createNotSupportedCall({
      from: ethereumPayload.tx.from,
      input: ethereumPayload.tx.input,
      to: ethereumPayload.tx.to,
      value: ethereumPayload.tx.value
    });

    if (!decoder) {
      return {
        decodedTransaction: notSupportedCall,
        metadata: {},
        totalBalanceChanges: balanceChanges
      };
    }

    try {
      const decodedTransaction = await decoder.decode(
        ethereumPayload,
        this.apiClient
      );

      const metadata = await resolveMetadata(this.apiClient, balanceChanges);

      return {
        decodedTransaction,
        metadata,
        totalBalanceChanges: balanceChanges
      };
    } catch {
      return {
        decodedTransaction: notSupportedCall,
        metadata: {},
        totalBalanceChanges: balanceChanges
      };
    }
  }

  private async _decodeEvmMessage(
    message: Message,
    log: Log | undefined,
    txResponse: TxResponse,
    vm: VmType
  ): ReturnType<MessageDecoder["decode"]> {
    const notSupportedMessage = createNotSupportedMessage(message["@type"]);

    if (!log) {
      return notSupportedMessage;
    }

    try {
      const decoder = this._findDecoderForMessage(
        message,
        log,
        vm,
        evmMessageDecoders
      );
      if (!decoder) return notSupportedMessage;

      return await decoder.decode(
        message,
        log,
        this.apiClient,
        txResponse,
        "evm"
      );
    } catch (e) {
      console.error(e);
      return notSupportedMessage;
    }
  }

  private async _decodeMessage(
    message: Message,
    log: Log | undefined,
    txResponse: TxResponse,
    vm: VmType
  ): ReturnType<MessageDecoder["decode"]> {
    const notSupportedMessage = createNotSupportedMessage(message["@type"]);

    if (!log) {
      return notSupportedMessage;
    }

    try {
      const decoder = this._findDecoderForMessage(
        message,
        log,
        vm,
        moveMessageDecoders
      );
      if (!decoder) return notSupportedMessage;

      return await decoder.decode(
        message,
        log,
        this.apiClient,
        txResponse,
        "move"
      );
    } catch (e) {
      console.error(e);
      return notSupportedMessage;
    }
  }

  private _findDecoderForMessage(
    message: Message,
    log: Log,
    vm: VmType,
    decoders: MessageDecoder[]
  ): MessageDecoder | undefined {
    return decoders.find((decoder) => decoder.check(message, log, vm));
  }

  private _findEthereumDecoder(payload: EthereumRpcPayload) {
    return ethereumDecoders.find((decoder) => decoder.check(payload));
  }

  private async _processEvmMessage(
    txResponse: TxResponse
  ): Promise<ProcessedMessage[]> {
    const vm = "evm";
    const promises = txResponse.tx.body.messages.map(async (message, index) => {
      const log = txResponse.logs[index];

      const decodedMessage = await this._decodeEvmMessage(
        message,
        log,
        txResponse,
        vm
      );
      const balanceChanges = log
        ? await calculateBalanceChangesFromLog(log, this.apiClient, vm)
        : createDefaultEvmBalanceChanges();

      return { balanceChanges, decodedMessage };
    });

    return Promise.all(promises);
  }

  private async _processMessage(
    txResponse: TxResponse
  ): Promise<ProcessedMessage[]> {
    const vm = "move";
    const promises = txResponse.tx.body.messages.map(async (message, index) => {
      const log = txResponse.logs[index];

      const decodedMessage = await this._decodeMessage(
        message,
        log,
        txResponse,
        vm
      );
      const balanceChanges = log
        ? await calculateBalanceChangesFromLog(log, this.apiClient, vm)
        : createDefaultMoveBalanceChanges();

      return { balanceChanges, decodedMessage };
    });

    return Promise.all(promises);
  }

  private _validateAndPrepareEthereumPayload(
    payload: unknown
  ): EthereumRpcPayload {
    const parsed = zEthereumRpcPayload.safeParse(payload);
    if (!parsed.success) {
      throw new Error(`Invalid EthereumRpcPayload: ${parsed.error.message}`);
    }

    return parsed.data;
  }

  private _validateAndPrepareTx(tx: unknown): TxResponse {
    const parsed = zTxResponse.safeParse(tx);
    if (!parsed.success) {
      throw new Error(`Invalid txResponse: ${parsed.error.message}`);
    }

    return attachTxLogs(parsed.data);
  }
}
