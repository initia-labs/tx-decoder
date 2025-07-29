import { ApiClient } from "./api";
import { processLogForBalanceChanges } from "./balance-changes";
import { DEFAULT_BALANCE_CHANGES } from "./constants";
import * as Decoders from "./decoders";
import {
  DecodedTx,
  DecoderConfig,
  MessageDecoder,
  ProcessedMessage,
} from "./interfaces";
import { resolveMetadata } from "./metadata-resolver";
import { Log, Message, TxResponse, zTxResponse } from "./schema";
import { attachTxLogs, mergeBalanceChanges } from "./utils";
import { createNotSupportedMessage } from "./utils";

// Array of decoders ordered by priority
const messageDecoders: MessageDecoder[] = [
  Decoders.delegateDecoder,
  Decoders.delegateLockedDecoder,
  Decoders.depositLiquidityDecoder,
  Decoders.dexSwapDecoder,
  Decoders.finalizeTokenWithdrawalDecoder,
  Decoders.ibcReceiveNftDecoder,
  Decoders.ibcSendNftDecoder,
  Decoders.ibcSendFtDecoder,
  Decoders.ibcReceiveFtDecoder,
  Decoders.initiateTokenDepositDecoder,
  Decoders.nftBurnDecoder,
  Decoders.nftMintDecoder,
  Decoders.objectTransferDecoder,
  Decoders.redelegateDecoder,
  Decoders.redelegateLockedDecoder,
  Decoders.sendDecoder,
  Decoders.stableSwapDecoder,
  Decoders.undelegateDecoder,
  Decoders.undelegateLockedDecoder,
  Decoders.vipLockStakeDecoder,
  Decoders.withdrawDelegatorRewardDecoder,
  Decoders.withdrawDelegatorRewardLockedDecoder,
  // Add more decoders here in order of priority
];

export class TxDecoder {
  private readonly apiClient: ApiClient;

  constructor(config: DecoderConfig) {
    if (!config.restUrl) {
      throw new Error("restUrl is required");
    }

    this.apiClient = new ApiClient(config);
  }

  public async decodeTransaction(tx: unknown): Promise<DecodedTx> {
    const txResponse = this._validateAndPrepareTx(tx);

    if (txResponse.tx.body.messages.length === 0) {
      return {
        messages: [],
        metadata: {},
        totalBalanceChanges: DEFAULT_BALANCE_CHANGES,
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
      DEFAULT_BALANCE_CHANGES
    );

    const metadata = await resolveMetadata(this.apiClient, totalBalanceChanges);

    return {
      messages: processedMessages,
      metadata,
      totalBalanceChanges,
    };
  }

  private async _decodeMessage(
    message: Message,
    log: Log | undefined
  ): ReturnType<MessageDecoder["decode"]> {
    const notSupportedMessage = createNotSupportedMessage(message["@type"]);

    if (!log) {
      return notSupportedMessage;
    }

    try {
      const decoder = this._findDecoderForMessage(message, log);
      if (!decoder) return notSupportedMessage;

      return await decoder.decode(message, log, this.apiClient);
    } catch (e) {
      console.error(e);
      return notSupportedMessage;
    }
  }

  private _findDecoderForMessage(
    message: Message,
    log: Log
  ): MessageDecoder | undefined {
    return messageDecoders.find((decoder) => decoder.check(message, log));
  }

  private async _processMessage(
    txResponse: TxResponse
  ): Promise<ProcessedMessage[]> {
    const promises = txResponse.tx.body.messages.map(async (message, index) => {
      const log = txResponse.logs[index];

      const decodedMessage = await this._decodeMessage(message, log);
      const balanceChanges = log
        ? await processLogForBalanceChanges(log, this.apiClient)
        : DEFAULT_BALANCE_CHANGES;

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
