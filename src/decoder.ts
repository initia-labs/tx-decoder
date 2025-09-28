import { ApiClient } from "./api";
import { calculateBalanceChangesFromLog } from "./balance-changes";
import {
  createDefaultEvmBalanceChanges,
  createDefaultMoveBalanceChanges
} from "./constants";
import * as Decoders from "./decoders";
import {
  DecodedTx,
  DecoderConfig,
  MessageDecoder,
  ProcessedMessage
} from "./interfaces";
import { resolveMetadata } from "./metadata-resolver";
import { Log, Message, TxResponse, zTxResponse } from "./schema";
import { attachTxLogs, mergeBalanceChanges } from "./utils";
import { createNotSupportedMessage } from "./utils";

const evmMessageDecoders: MessageDecoder[] = [
  Decoders.sendDecoder,
  Decoders.finalizeTokenDepositDecoder,
  Decoders.initiateTokenWithdrawalDecoder,
  Decoders.ibcSendFtDecoder,
  Decoders.ibcReceiveFtDecoder,
  Decoders.ibcSendNftDecoder,
  Decoders.ibcReceiveNftDecoder
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
  Decoders.ibcReceiveNftDecoder,
  Decoders.ibcSendNftDecoder,
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

export class TxDecoder {
  private readonly apiClient: ApiClient;

  constructor(config: DecoderConfig) {
    if (!config.restUrl) {
      throw new Error("restUrl is required");
    }

    this.apiClient = new ApiClient(config);
  }

  /**
   * Decodes an EVM transaction, processing only general message types
   */
  public async decodeEvmTransaction(tx: unknown): Promise<DecodedTx> {
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
   * Decodes a transaction, processing all supported message types for L1 and Move L2.
   */
  public async decodeTransaction(tx: unknown): Promise<DecodedTx> {
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

  private async _decodeEvmMessage(
    message: Message,
    log: Log | undefined,
    txResponse: TxResponse
  ): ReturnType<MessageDecoder["decode"]> {
    const notSupportedMessage = createNotSupportedMessage(message["@type"]);

    if (!log) {
      return notSupportedMessage;
    }

    try {
      const decoder = this._findDecoderForMessage(
        message,
        log,
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
    txResponse: TxResponse
  ): ReturnType<MessageDecoder["decode"]> {
    const notSupportedMessage = createNotSupportedMessage(message["@type"]);

    if (!log) {
      return notSupportedMessage;
    }

    try {
      const decoder = this._findDecoderForMessage(
        message,
        log,
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
    decoders: MessageDecoder[]
  ): MessageDecoder | undefined {
    return decoders.find((decoder) => decoder.check(message, log));
  }

  private async _processEvmMessage(
    txResponse: TxResponse
  ): Promise<ProcessedMessage[]> {
    const promises = txResponse.tx.body.messages.map(async (message, index) => {
      const log = txResponse.logs[index];

      const decodedMessage = await this._decodeEvmMessage(
        message,
        log,
        txResponse
      );
      const balanceChanges = log
        ? await calculateBalanceChangesFromLog(log, this.apiClient, "evm")
        : createDefaultEvmBalanceChanges();

      return { balanceChanges, decodedMessage };
    });

    return Promise.all(promises);
  }

  private async _processMessage(
    txResponse: TxResponse
  ): Promise<ProcessedMessage[]> {
    const promises = txResponse.tx.body.messages.map(async (message, index) => {
      const log = txResponse.logs[index];

      const decodedMessage = await this._decodeMessage(
        message,
        log,
        txResponse
      );
      const balanceChanges = log
        ? await calculateBalanceChangesFromLog(log, this.apiClient, "move")
        : createDefaultMoveBalanceChanges();

      return { balanceChanges, decodedMessage };
    });

    return Promise.all(promises);
  }

  private _validateAndPrepareTx(tx: unknown): TxResponse {
    const parsed = zTxResponse.safeParse(tx);
    if (!parsed.success) {
      throw new Error(`Invalid txResponse: ${parsed.error.message}`);
    }

    return attachTxLogs(parsed.data);
  }
}
