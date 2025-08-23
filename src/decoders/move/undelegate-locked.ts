import type { DecodedMessage, MessageDecoder } from "@/interfaces";
import type { Log, Message, TxResponse } from "@/schema";

import { ApiClient } from "@/api";
import { INITIA_VAULT_MODULE_ADDRESS } from "@/constants";
import { zMsgUndelegateLocked, zWithdrawDelegationEvent } from "@/schema";
import { findMoveEvent } from "@/utils";

export const undelegateLockedDecoder: MessageDecoder = {
  check: (message: Message, _log: Log) =>
    zMsgUndelegateLocked.safeParse(message).success,
  decode: async (
    message: Message,
    log: Log,
    apiClient: ApiClient,
    _txResponse: TxResponse
  ) => {
    const parsed = zMsgUndelegateLocked.safeParse(message);
    if (!parsed.success) {
      throw new Error("Invalid undelegate locked message");
    }
    const { sender } = parsed.data;
    const undelegateLockedEvent = findMoveEvent(
      log.events,
      `${INITIA_VAULT_MODULE_ADDRESS}::lock_staking::WithdrawDelegationEvent`,
      zWithdrawDelegationEvent
    );
    if (!undelegateLockedEvent) {
      throw new Error("Undelegate locked event not found");
    }

    const denom = await apiClient.findDenomFromMetadataAddr(
      undelegateLockedEvent.metadata
    );

    if (!denom) {
      throw new Error(
        `Denom not found in undelegate locked event from metadata address: ${undelegateLockedEvent.metadata}`
      );
    }

    const undelegateLockedCoin = {
      amount: undelegateLockedEvent.locked_share,
      denom
    };

    const validator = await apiClient.findValidator(
      undelegateLockedEvent.validator
    );

    const decodedMessage: DecodedMessage = {
      action: "undelegate",
      data: {
        coins: [undelegateLockedCoin],
        delegatorAddress: sender,
        unlockTimestamp: undelegateLockedEvent.release_time,
        validator,
        validatorAddress: undelegateLockedEvent.validator
      },
      isIbc: false,
      isOp: false
    };

    return decodedMessage;
  }
};
