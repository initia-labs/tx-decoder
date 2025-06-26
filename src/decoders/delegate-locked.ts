import type { DecodedMessage, MessageDecoder } from "@/interfaces";
import type { DelegateLockedEvent, Event, Log, Message } from "@/schema";

import { ApiClient } from "@/api";
import { zDelegateLockedEvent, zMsgDelegateLocked } from "@/schema";

export const delegateLockedDecoder: MessageDecoder = {
  check: (message: Message, _log: Log) =>
    zMsgDelegateLocked.safeParse(message).success,
  decode: async (message: Message, log: Log, _apiClient: ApiClient) => {
    const parsed = zMsgDelegateLocked.safeParse(message);
    if (!parsed.success) {
      throw new Error("Invalid delegate locked message");
    }
    const { sender } = parsed.data;
    const delegateLockedEvent = findDelegateLockedEvent(log.events);
    if (!delegateLockedEvent) {
      throw new Error("Delegate locked event not found");
    }

    const delegateLockedCoin = {
      amount: delegateLockedEvent.locked_share,
      denom: "uinit",
    };

    const decodedMessage: DecodedMessage = {
      action: "delegate",
      data: {
        coins: [delegateLockedCoin],
        delegatorAddress: sender,
        validatorAddress: delegateLockedEvent.validator,
      },
      isIbc: false,
      isOp: false,
    };

    return decodedMessage;
  },
};

const findDelegateLockedEvent = (
  events: Event[]
): DelegateLockedEvent | null => {
  const delegateLockedEvent = events.find(
    (event) =>
      event.type === "move" &&
      event.attributes.some(
        (attr) =>
          attr.key === "type_tag" &&
          attr.value ===
            "0x3a886b32a802582f2e446e74d4a24d1d7ed01adf46d2a8f65c5723887e708789::lock_staking::DepositDelegationEvent"
      )
  );

  if (!delegateLockedEvent) return null;

  const dataAttribute = delegateLockedEvent.attributes.find(
    (attr) => attr.key === "data"
  );
  if (!dataAttribute) return null;

  const parsed = zDelegateLockedEvent.safeParse(
    JSON.parse(dataAttribute.value)
  );
  if (!parsed.success) return null;

  return parsed.data;
};
