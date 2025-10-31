import { ApiClient } from "./api";
import {
  calculateBalanceChangesFromEthereumLogs,
  calculateBalanceChangesFromLog
} from "./balance-changes";
import {
  createDefaultEvmBalanceChanges,
  createDefaultMoveBalanceChanges,
  createDefaultWasmBalanceChanges
} from "./constants";
import {
  cosmosEvmMessageDecoders,
  cosmosMoveMessageDecoders,
  cosmosWasmMessageDecoders,
  ethereumDecoders
} from "./decoder-registry";
import {
  DecodedEthereumTx,
  DecodedTx,
  DecoderConfig,
  MessageDecoder,
  ProcessedMessage,
  VmType
} from "./interfaces";
import { resolveMetadata } from "./metadata-resolver";
import { EthereumRpcPayload, Log, Message, TxResponse } from "./schema";
import {
  createNotSupportedCall,
  createNotSupportedMessage,
  extractCosmosTxHashFromEvm,
  mergeBalanceChanges
} from "./utils";
import {
  validateAndPrepareEthereumPayload,
  validateAndPrepareTx,
  validateTxResponse
} from "./validation";

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
    const txResponse = validateAndPrepareTx(tx);

    if (txResponse.tx.body.messages.length === 0) {
      return {
        messages: [],
        metadata: { data: {}, type: "evm" },
        totalBalanceChanges: createDefaultEvmBalanceChanges()
      };
    }

    validateTxResponse(txResponse);

    const processedMessages = await this._processMessages(txResponse, "evm");

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
    const txResponse = validateAndPrepareTx(tx);

    if (txResponse.tx.body.messages.length === 0) {
      return {
        messages: [],
        metadata: { data: {}, type: "move" },
        totalBalanceChanges: createDefaultMoveBalanceChanges()
      };
    }

    validateTxResponse(txResponse);

    const processedMessages = await this._processMessages(txResponse, "move");

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
   * Decodes a Cosmos WASM transaction
   */
  public async decodeCosmosWasmTransaction(tx: unknown): Promise<DecodedTx> {
    const txResponse = validateAndPrepareTx(tx);

    if (txResponse.tx.body.messages.length === 0) {
      return {
        messages: [],
        metadata: { data: {}, type: "wasm" },
        totalBalanceChanges: createDefaultWasmBalanceChanges()
      };
    }

    validateTxResponse(txResponse);

    const processedMessages = await this._processMessages(txResponse, "wasm");

    const totalBalanceChanges = processedMessages.reduce(
      (acc, message) => mergeBalanceChanges(acc, message.balanceChanges),
      createDefaultWasmBalanceChanges()
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
    const ethereumPayload = validateAndPrepareEthereumPayload(payload);

    // PRE-CHECK: Is this a mirrored Cosmos transaction?
    const cosmosTxHash = extractCosmosTxHashFromEvm(ethereumPayload);
    if (cosmosTxHash) {
      try {
        return await this._decodeMirroredCosmosTx(
          cosmosTxHash,
          ethereumPayload
        );
      } catch (error) {
        console.error(
          `Failed to decode mirrored Cosmos tx ${cosmosTxHash}:`,
          error
        );
      }
    }

    // Regular Ethereum transaction flow
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
        metadata: { data: {}, type: "evm" },
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
        metadata: { data: {}, type: "evm" },
        totalBalanceChanges: balanceChanges
      };
    }
  }

  private async _decodeMessage(
    message: Message,
    log: Log | undefined,
    txResponse: TxResponse,
    vm: VmType,
    messageIndex: number
  ): ReturnType<MessageDecoder["decode"]> {
    const notSupportedMessage = createNotSupportedMessage(message["@type"]);

    // For failed transactions (code !== 0), logs array is empty
    // Create a synthetic log from txResponse events to allow decoders to process the message
    const effectiveLog: Log = log || {
      events: txResponse.events,
      log: txResponse.raw_log,
      msg_index: messageIndex
    };

    let decoders;
    switch (vm) {
      case "evm":
        decoders = cosmosEvmMessageDecoders;
        break;
      case "move":
        decoders = cosmosMoveMessageDecoders;
        break;
      case "wasm":
        decoders = cosmosWasmMessageDecoders;
        break;
      default:
        throw new Error(`Unknown VM type: ${vm}`);
    }

    try {
      const decoder = this._findDecoderForMessage(
        message,
        effectiveLog,
        vm,
        decoders
      );
      if (!decoder) return notSupportedMessage;

      return await decoder.decode(
        message,
        effectiveLog,
        this.apiClient,
        txResponse,
        vm
      );
    } catch (e) {
      console.error(e);
      return notSupportedMessage;
    }
  }

  /**
   * Decodes a mirrored Cosmos transaction by fetching and decoding the original Cosmos tx.
   *
   * Returns only the cosmos messages in the data field to avoid duplication.
   * Metadata and totalBalanceChanges are at the root level only.
   */
  private async _decodeMirroredCosmosTx(
    cosmosTxHash: string,
    ethereumPayload: EthereumRpcPayload
  ): Promise<DecodedEthereumTx> {
    // Fetch the Cosmos transaction from REST API
    const cosmosTxResponse = await this.apiClient.getCosmosTx(cosmosTxHash);

    // Decode it using the Cosmos transaction decoder
    const decodedCosmosEvmTx =
      await this.decodeCosmosEvmTransaction(cosmosTxResponse);

    // Return in cosmos_mirror format
    return {
      decodedTransaction: {
        action: "cosmos_mirror",
        data: {
          cosmosMessages: decodedCosmosEvmTx.messages,
          cosmosTxHash,
          evmTxHash: ethereumPayload.tx.hash
        }
      },
      // Metadata and balance changes from the decoded Cosmos transaction
      metadata: decodedCosmosEvmTx.metadata,
      totalBalanceChanges: decodedCosmosEvmTx.totalBalanceChanges
    };
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

  private async _processMessages(
    txResponse: TxResponse,
    vm: VmType
  ): Promise<ProcessedMessage[]> {
    const promises = txResponse.tx.body.messages.map(async (message, index) => {
      const log = txResponse.logs[index];

      const decodedMessage = await this._decodeMessage(
        message,
        log,
        txResponse,
        vm,
        index
      );

      let defaultBalanceChanges;
      switch (vm) {
        case "evm":
          defaultBalanceChanges = createDefaultEvmBalanceChanges();
          break;
        case "move":
          defaultBalanceChanges = createDefaultMoveBalanceChanges();
          break;
        case "wasm":
          defaultBalanceChanges = createDefaultWasmBalanceChanges();
          break;
        default:
          throw new Error(`Unknown VM type: ${vm}`);
      }

      const balanceChanges = log
        ? await calculateBalanceChangesFromLog(log, this.apiClient, vm)
        : defaultBalanceChanges;

      return { balanceChanges, decodedMessage };
    });

    return Promise.all(promises);
  }
}
