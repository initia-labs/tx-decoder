import { BalanceChanges, DecodedMessage, MessageDecoder } from "@/interfaces";
import { DexSwapEvent, Event, zDexSwapEvent } from "@/schema";

import { isMoveMessage } from "./index";

export const swapDecoder: MessageDecoder = {
  check: (message, _log) => {
    // Check if this is a swap function
    return (
      isMoveMessage(message) &&
      message.module_address === "0x1" &&
      message.module_name === "dex" &&
      message.function_name === "swap_script"
    );
  },
  decode: (
    message,
    log
  ): {
    balanceChanges: Partial<BalanceChanges>;
    decodedMessage: DecodedMessage;
  } => {
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
        [message.sender as string]: {
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

  const parsed = zDexSwapEvent.safeParse(JSON.parse(dataAttribute.value));
  if (!parsed.success) {
    return null;
  }

  return parsed.data;
}
