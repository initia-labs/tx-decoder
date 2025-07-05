import { ApiClient } from "@/api";
import { DecodedMessage } from "@/index";
import { MessageDecoder } from "@/interfaces";
import { Log, Message, zMsgMoveStableSwap, zSwapEvent } from "@/schema";
import { findMoveEvent } from "@/utils";

export const stableSwapDecoder: MessageDecoder = {
  check: (message: Message, _log: Log) =>
    zMsgMoveStableSwap.safeParse(message).success,
  decode: async (message: Message, log: Log, apiClient: ApiClient) => {
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

    const [denomIn, denomOut] = await Promise.all([
      apiClient.findDenomFromMetadataAddr(swapEvent.offer_coin),
      apiClient.findDenomFromMetadataAddr(swapEvent.return_coin),
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
        from: sender,
      },
      isIbc: false,
      isOp: false,
    };

    return decodedMessage;
  },
};
