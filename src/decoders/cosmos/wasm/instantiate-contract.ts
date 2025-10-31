import type { DecodedMessage, MessageDecoder } from "@/interfaces";
import type { Log, Message, TxResponse } from "@/schema";

import { ApiClient } from "@/api";
import { SUPPORTED_MESSAGE_TYPES } from "@/message-types";
import { zMsgInstantiateContract } from "@/schema";
import { decodeWasmMsg } from "@/utils";

/**
 * Decoder for WASM contract instantiation messages
 * Extracts the contract address from the instantiate event
 */
export const instantiateContractDecoder: MessageDecoder = {
  check: (message: Message, _log: Log) => {
    return message["@type"] === SUPPORTED_MESSAGE_TYPES.MsgInstantiateContract;
  },

  decode: async (
    message: Message,
    log: Log,
    _apiClient: ApiClient,
    txResponse: TxResponse
  ) => {
    const parsed = zMsgInstantiateContract.safeParse(message);
    if (!parsed.success) {
      throw new Error("Invalid instantiate contract message");
    }

    const { admin, code_id, funds, label, msg, sender } = parsed.data;
    const decodedMsg = decodeWasmMsg(msg);

    // Check if transaction failed
    const isFailed = txResponse.code !== 0;

    // Find the instantiate event to get the contract address
    const instantiateEvent = log.events.find(
      (event) => event.type === "instantiate"
    );

    let contractAddress: string | undefined;
    if (instantiateEvent) {
      const contractAddrAttr = instantiateEvent.attributes.find(
        (attr) =>
          attr.key === "_contract_address" || attr.key === "contract_address"
      );
      contractAddress = contractAddrAttr?.value;
    }

    // Also check wasm events for contract address
    if (!contractAddress) {
      const wasmEvent = log.events.find((event) => event.type === "wasm");
      if (wasmEvent) {
        const contractAddrAttr = wasmEvent.attributes.find(
          (attr) =>
            attr.key === "_contract_address" || attr.key === "contract_address"
        );
        contractAddress = contractAddrAttr?.value;
      }
    }

    const decodedMessage: DecodedMessage = {
      action: "instantiate_contract",
      data: {
        ...(admin ? { admin } : {}),
        codeId: code_id,
        ...(contractAddress ? { contractAddress } : {}),
        funds,
        initMsg: decodedMsg,
        label,
        sender,
        // Include error information if transaction failed
        ...(isFailed
          ? {
              error: {
                code: txResponse.code,
                codespace: txResponse.codespace,
                message: txResponse.raw_log
              }
            }
          : {})
      },
      isIbc: false,
      isOp: false
    };

    return decodedMessage;
  }
};
