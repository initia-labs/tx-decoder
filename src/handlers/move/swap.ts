import { BalanceChanges, DecodedMessage, MessageDecoder } from "@/interfaces";
import { DexSwapEvent, Event, zDexSwapEvent, zMsgMoveSwap } from "@/schema";

export const swapDecoder: MessageDecoder = {
  check: (message, _log) => zMsgMoveSwap.safeParse(message).success,
  decode: (message, log) => {
    const parsed = zMsgMoveSwap.safeParse(message);
    if (!parsed.success) {
      throw new Error("Invalid move swap message");
    }
    const { sender } = parsed.data;

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

    const balanceChanges: Partial<BalanceChanges> = {
      ft: {
        [sender]: {
          [swapEvent.offer_coin]: `-${swapEvent.offer_amount}`,
          [swapEvent.return_coin]: swapEvent.return_amount,
        },
      },
    };

    return {
      balanceChanges,
      decodedMessage,
    };
  },
};

// internal parser
const findSwapEventData = (events: Event[]): DexSwapEvent | null => {
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

  const parsed = zDexSwapEvent.safeParse(JSON.parse(dataAttribute.value));
  if (!parsed.success) {
    return null;
  }

  return parsed.data;
};
