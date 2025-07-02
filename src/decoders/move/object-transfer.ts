import { ApiClient } from "@/api";
import { MessageDecoder } from "@/interfaces";
import {
  Log,
  Message,
  zMsgMoveObjectTransfer,
  zMsgMoveObjectTransferEvent,
} from "@/schema";
import { findMoveEvent, toBech32 } from "@/utils";

export const objectTransferDecoder: MessageDecoder = {
  check: (message: Message, log: Log) => {
    const parsed = zMsgMoveObjectTransfer.safeParse(message);
    if (!parsed.success) {
      return false;
    }

    const transferEvent = findMoveEvent(
      log.events,
      "0x1::object::TransferEvent",
      zMsgMoveObjectTransferEvent
    );
    if (!transferEvent) {
      return false;
    }

    return true;
  },
  decode: async (_message: Message, log: Log, _apiClient: ApiClient) => {
    const transferEvent = findMoveEvent(
      log.events,
      "0x1::object::TransferEvent",
      zMsgMoveObjectTransferEvent
    );
    if (!transferEvent) {
      throw new Error("Object Transfer event not found");
    }

    return {
      action: "object_transfer",
      data: {
        from: toBech32(transferEvent.from),
        object: toBech32(transferEvent.object),
        to: toBech32(transferEvent.to),
      },
      isIbc: false,
      isOp: false,
    };
  },
};
