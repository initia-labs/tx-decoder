import { ApiClient } from "./api";
import { processLogForBalanceChanges } from "./balance-changes";
import { DEFAULT_BALANCE_CHANGES } from "./constants";
import * as Decoders from "./decoders";
import { DecodedTx, DecoderConfig, MessageDecoder, ProcessedMessage } from "./interfaces";
import { Log, Message, TxResponse, zTxResponse } from "./schema";
import { attachTxLogs, mergeBalanceChanges } from "./utils";
import { createNotSupportedMessage } from "./utils";

// Array of decoders ordered by priority
const messageDecoders: MessageDecoder[] = [
  // Decoders.ibcSendNFTDecoder,
  // Decoders.ibcReceiveNFTDecoder,
  Decoders.sendDecoder,
  // Decoders.initiateTokenDepositDecoder,
  // Decoders.finalizeTokenWithdrawalDecoder,
  // Decoders.delegateDecoder,
  // Decoders.delegateLockedDecoder,
  // Decoders.undelegateDecoder,
  // Decoders.undelegateLockedDecoder,
  // Decoders.redelegateDecoder,
  // Decoders.withdrawDelegatorRewardDecoder,
  // Decoders.dexSwapDecoder,
  // Decoders.stableSwapDecoder,
  // Decoders.nftMintDecoder,
  // Decoders.objectTransferDecoder,
  // Decoders.nftBurnDecoder,
  // Add more decoders here in order of priority
];

const INITIAL_STATE: DecodedTx = {
  messages: [],
  metadata: {},
  totalBalanceChanges: DEFAULT_BALANCE_CHANGES,
};

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
      return INITIAL_STATE;
    }

    if (txResponse.logs.length !== txResponse.tx.body.messages.length) {
      throw new Error(
        `Invalid tx response: ${txResponse.logs.length} logs found for ${txResponse.tx.body.messages.length} messages`
      );
    }

    const processedMessages = await this._processMessage(txResponse);

    const totalBalanceChanges = processedMessages.reduce(
      (acc, message) => mergeBalanceChanges(acc, message.balanceChanges),
      DEFAULT_BALANCE_CHANGES
    );

    return {
      messages: processedMessages,
      metadata: {},
      totalBalanceChanges,
    };
  }

  private async _decodeMessage(message: Message, log: Log): ReturnType<MessageDecoder["decode"]> {
    const notSupportedMessage = createNotSupportedMessage(message["@type"]);

    const decoder = this._findDecoderForMessage(message, log);
    if (!decoder) return notSupportedMessage;
    try {
      return await decoder.decode(message, log, this.apiClient);
    } catch {
      return notSupportedMessage;
    }
  }

  private _findDecoderForMessage(message: Message, log: Log): MessageDecoder | undefined {
    return messageDecoders.find((decoder) => decoder.check(message, log));
  }

  private async _processMessage(txResponse: TxResponse): Promise<ProcessedMessage[]> {
    const promises = txResponse.tx.body.messages.map(async (message, index) => {
      const log = txResponse.logs[index];

      const decodedMessage = await this._decodeMessage(message, log);
      const balanceChanges = await processLogForBalanceChanges(log, this.apiClient);

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
