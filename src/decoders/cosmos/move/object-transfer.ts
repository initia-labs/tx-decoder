import { InitiaAddress } from "@initia/utils";

import { ApiClient } from "@/api";
import { MessageDecoder } from "@/interfaces";
import {
  Log,
  Message,
  TxResponse,
  zMsgMoveObjectTransfer,
  zMsgMoveObjectTransferEvent
} from "@/schema";
import { findMoveEvent } from "@/utils";

export const objectTransferDecoder: MessageDecoder = {
  check: (message: Message, log: Log) => {
    const parsed = zMsgMoveObjectTransfer.safeParse(message);
    if (!parsed.success) {
      return false;
    }

    const transferEvent = findTransferEvent(log);
    if (!transferEvent) {
      return false;
    }

    return true;
  },
  decode: async (
    _message: Message,
    log: Log,
    _apiClient: ApiClient,
    _txResponse: TxResponse
  ) => {
    const transferEvent = findTransferEvent(log);
    if (!transferEvent) {
      throw new Error("Object Transfer event not found");
    }

    return {
      action: "object_transfer",
      data: {
        from: InitiaAddress(transferEvent.from).bech32,
        object: InitiaAddress(transferEvent.object).bech32,
        to: InitiaAddress(transferEvent.to).bech32
      },
      isIbc: false,
      isOp: false
    };
  }
};

const findTransferEvent = (log: Log) =>
  findMoveEvent(
    log.events,
    "0x1::object::TransferEvent",
    zMsgMoveObjectTransferEvent
  );
