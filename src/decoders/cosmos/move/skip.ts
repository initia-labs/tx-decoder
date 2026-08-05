import { ApiClient } from "@/api";
import { DecodedMessage, MessageDecoder } from "@/interfaces";
import { Log, Message, TxResponse, zMsgSkipSwapAndAction } from "@/schema";
import { zSkipSwapEvent } from "@/schema";
import { findAllMoveEvents } from "@/utils";

// swap_and_action routes through 0x1 AMMs, so amounts come from their swap
// events: offer of the first hop, return of the last hop.
const SWAP_EVENT_TAGS = [
  "0x1::dex::SwapEvent",
  "0x1::minitswap::SwapEvent",
  "0x1::stableswap::SwapEvent"
];

export const skipSwapDecoder: MessageDecoder = {
  check: (message: Message, _log: Log) =>
    zMsgSkipSwapAndAction.safeParse(message).success,
  decode: async (
    message: Message,
    log: Log,
    apiClient: ApiClient,
    _txResponse: TxResponse
  ) => {
    const parsed = zMsgSkipSwapAndAction.parse(message);
    const { sender } = parsed;

    const swapEvents = findAllMoveEvents(
      log.events,
      SWAP_EVENT_TAGS,
      zSkipSwapEvent
    );
    const firstSwapEvent = swapEvents[0];
    const lastSwapEvent = swapEvents[swapEvents.length - 1];
    if (!firstSwapEvent || !lastSwapEvent) {
      throw new Error("Skip swap event not found");
    }

    const [denomIn, denomOut] = await Promise.all([
      apiClient.findDenomFromMetadataAddr(firstSwapEvent.offer_coin),
      apiClient.findDenomFromMetadataAddr(lastSwapEvent.return_coin)
    ]);

    if (!denomIn) {
      throw new Error(
        `Denom in not found for offer coin ${firstSwapEvent.offer_coin}`
      );
    }

    if (!denomOut) {
      throw new Error(
        `Denom out not found for return coin ${lastSwapEvent.return_coin}`
      );
    }

    const decodedMessage: DecodedMessage = {
      action: "swap",
      data: {
        amountIn: firstSwapEvent.offer_amount,
        amountOut: lastSwapEvent.return_amount,
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
