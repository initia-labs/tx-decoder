import { ApiClient } from "@/api";
import { DecodedMessage } from "@/index";
import { MessageDecoder } from "@/interfaces";
import { Log, Message, zMsgMoveStableSwap, zSwapEvent } from "@/schema";
import { findMoveEvent } from "@/utils";

export const stableSwapDecoder: MessageDecoder = {
  check: (message: Message, _log: Log) =>
    zMsgMoveStableSwap.safeParse(message).success,
  decode: async (message: Message, log: Log, _apiClient: ApiClient) => {
    const parsed = zMsgMoveStableSwap.parse(message);
    const { sender } = parsed;

    const swapEvent = findMoveEvent(
      log.events,
      "0x1::stableswap::SwapEvent",
      zSwapEvent
    );
    if (!swapEvent) {
      throw new Error("Stable Swap event not found");
    }

    const decodedMessage: DecodedMessage = {
      action: "swap",
      data: {
        amountIn: swapEvent.offer_amount,
        amountOut: swapEvent.return_amount,
        denomIn: swapEvent.offer_coin,
        denomOut: swapEvent.return_coin,
        from: sender,
      },
      isIbc: false,
      isOp: false,
    };

    return decodedMessage;
  },
};
