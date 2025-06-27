import type { DecodedMessage, MessageDecoder } from "@/interfaces";
import type { Event, Log, Message, UndelegateLockedEvent } from "@/schema";

import { ApiClient } from "@/api";
import { zMsgUndelegateLocked, zUndelegateLockedEvent } from "@/schema";

export const undelegateLockedDecoder: MessageDecoder = {
  check: (message: Message, _log: Log) =>
    zMsgUndelegateLocked.safeParse(message).success,
  decode: async (message: Message, log: Log, _apiClient: ApiClient) => {
    const parsed = zMsgUndelegateLocked.safeParse(message);
    if (!parsed.success) {
      throw new Error("Invalid undelegate locked message");
    }
    const { sender } = parsed.data;
    const undelegateLockedEvent = findUndelegateLockedEvent(log.events);
    if (!undelegateLockedEvent) {
      throw new Error("Undelegate locked event not found");
    }

    const undelegateLockedCoin = {
      amount: undelegateLockedEvent.locked_share,
      denom: `move/${undelegateLockedEvent.metadata.slice(2)}`,
    };

    const decodedMessage: DecodedMessage = {
      action: "undelegate",
      data: {
        coins: [undelegateLockedCoin],
        delegatorAddress: sender,
        validatorAddress: undelegateLockedEvent.validator,
      },
      isIbc: false,
      isOp: false,
    };

    return decodedMessage;
  },
};

const findUndelegateLockedEvent = (
  events: Event[]
): UndelegateLockedEvent | null => {
  const undelegateLockedEvent = events.find(
    (event) =>
      event.type === "move" &&
      event.attributes.some(
        (attr) =>
          attr.key === "type_tag" &&
          attr.value ===
            "0x3a886b32a802582f2e446e74d4a24d1d7ed01adf46d2a8f65c5723887e708789::lock_staking::WithdrawDelegationEvent"
      )
  );

  if (!undelegateLockedEvent) return null;

  const dataAttribute = undelegateLockedEvent.attributes.find(
    (attr) => attr.key === "data"
  );
  if (!dataAttribute) return null;

  const parsed = zUndelegateLockedEvent.safeParse(dataAttribute.value);
  if (!parsed.success) return null;

  return parsed.data;
};
