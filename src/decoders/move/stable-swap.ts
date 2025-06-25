import { DecodedMessage } from "@/index";
import { BalanceChanges } from "@/interfaces";
import { MessageDecoder } from "@/interfaces";
import { Event, SwapEvent, zMsgMoveStableSwap, zSwapEvent } from "@/schema";

export const stableSwapDecoder: MessageDecoder = {
  check: (message, _log) => zMsgMoveStableSwap.safeParse(message).success,
  decode: (message, log) => {
    const parsed = zMsgMoveStableSwap.parse(message);
    const { sender } = parsed;

    const swapEvent = findSwapEventData(log.events);
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

const findSwapEventData = (events: Event[]): SwapEvent | null => {
  const swapEvent = events.find(
    (event) =>
      event.type === "move" &&
      event.attributes.some(
        (attr) =>
          attr.key === "type_tag" && attr.value === "0x1::stableswap::SwapEvent"
      )
  );

  if (!swapEvent) return null;

  const dataAttribute = swapEvent.attributes.find(
    (attr) => attr.key === "data"
  );

  if (!dataAttribute) {
    return null;
  }

  const parsed = zSwapEvent.safeParse(JSON.parse(dataAttribute.value));
  if (!parsed.success) {
    return null;
  }

  return parsed.data;
};
