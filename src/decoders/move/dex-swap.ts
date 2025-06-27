import { ApiClient } from "@/api";
import { DecodedMessage, MessageDecoder } from "@/interfaces";
import { Event, Log, Message, SwapEvent, zMsgMoveDexSwap, zSwapEvent } from "@/schema";

export const dexSwapDecoder: MessageDecoder = {
  check: (message: Message, _log: Log) => zMsgMoveDexSwap.safeParse(message).success,
  decode: async (message: Message, log: Log, _apiClient: ApiClient) => {
    const parsed = zMsgMoveDexSwap.parse(message);
    const { sender } = parsed;

    const swapEvent = findSwapEventData(log.events);
    if (!swapEvent) {
      throw new Error("Dex Swap event not found");
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

// internal parser
const findSwapEventData = (events: Event[]): SwapEvent | null => {
  const swapEvent = events.find(
    (event) =>
      event.type === "move" &&
      event.attributes.some(
        (attr) => attr.key === "type_tag" && attr.value === "0x1::dex::SwapEvent"
      )
  );

  if (!swapEvent) return null;

  const dataAttribute = swapEvent.attributes.find((attr) => attr.key === "data");

  if (!dataAttribute) {
    return null;
  }

  const parsed = zSwapEvent.safeParse(dataAttribute.value);
  if (!parsed.success) {
    return null;
  }

  return parsed.data;
};
