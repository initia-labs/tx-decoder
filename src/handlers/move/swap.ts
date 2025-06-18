import {
  BalanceChanges,
  DecodedMessage,
  MoveFunctionHandler,
} from "@/interfaces";
import { DexSwapEvent, Event, zDexSwapEvent } from "@/schema";

export const handleDexSwap: MoveFunctionHandler = (message, log) => {
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
    },
    isIbc: false,
    isOp: false,
  };

  const balanceChanges: Partial<BalanceChanges> = {
    ft: {
      [message.sender]: {
        [swapEvent.offer_coin]: `-${swapEvent.offer_amount}`,
        [swapEvent.return_coin]: swapEvent.return_amount,
      },
    },
  };

  return {
    balanceChanges,
    decodedMessage,
  };
};

// internal parser
function findSwapEventData(events: Event[]): DexSwapEvent | null {
  const swapEvent = events.find(
    (event) =>
      event.type === "move" &&
      event.attributes.some(
        (attr) =>
          attr.key === "type_tag" && attr.value === "0x1::dex::SwapEvent"
      )
  );

  if (!swapEvent) return null;

  const dataAttribute = swapEvent.attributes.find(
    (attr) => attr.key === "data"
  );

  if (!dataAttribute) {
    return null;
  }

  const parsed = zDexSwapEvent.safeParse(dataAttribute.value);
  if (!parsed.success) {
    return null;
  }

  return parsed.data;
}
