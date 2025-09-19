import { ApiClient } from "@/api";
import { DecodedMessage, MessageDecoder } from "@/interfaces";
import { Log, Message, TxResponse, zMsgMoveDexSwap } from "@/schema";
import { zSwapEvent } from "@/schema/events";
import { findMoveEvent } from "@/utils";

export const dexSwapDecoder: MessageDecoder = {
  check: (message: Message, _log: Log) =>
    zMsgMoveDexSwap.safeParse(message).success,
  decode: async (
    message: Message,
    log: Log,
    apiClient: ApiClient,
    _txResponse: TxResponse
  ) => {
    const parsed = zMsgMoveDexSwap.parse(message);
    const { sender } = parsed;

    const swapEvent = findMoveEvent(
      log.events,
      "0x1::dex::SwapEvent",
      zSwapEvent
    );
    if (!swapEvent) {
      throw new Error("Dex Swap event not found");
    }

    const [denomIn, denomOut] = await Promise.all([
      apiClient.findDenomFromMetadataAddr(swapEvent.offer_coin),
      apiClient.findDenomFromMetadataAddr(swapEvent.return_coin)
    ]);

    if (!denomIn) {
      throw new Error(
        `Denom in not found for offer coin ${swapEvent.offer_coin}`
      );
    }

    if (!denomOut) {
      throw new Error(
        `Denom out not found for return coin ${swapEvent.return_coin}`
      );
    }

    const decodedMessage: DecodedMessage = {
      action: "swap",
      data: {
        amountIn: swapEvent.offer_amount,
        amountOut: swapEvent.return_amount,
        denomIn,
        denomOut,
        from: sender
      },
      isIbc: false,
      isOp: false
    };

    return decodedMessage;
  }
};
