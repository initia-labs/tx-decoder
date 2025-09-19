import { InitiaAddress } from "@initia/utils";

import { DEFAULT_BALANCE_CHANGES } from "@/constants";
import { MoveEventProcessor } from "@/interfaces";
import { zMsgMoveObjectTransferEvent } from "@/schema";

export const objectTransferEventProcessor: MoveEventProcessor = {
  async process(currentEvent, _allEvents, _apiClient) {
    try {
      const dataAttribute = currentEvent.attributes.find(
        (attr) => attr.key === "data"
      );
      if (!dataAttribute) {
        throw new Error("Object transfer event data attribute not found");
      }

      const transferEvent = zMsgMoveObjectTransferEvent.parse(
        dataAttribute.value
      );

      const fromAddress = InitiaAddress(transferEvent.from).bech32;
      const toAddress = InitiaAddress(transferEvent.to).bech32;
      const objectAddress = InitiaAddress(transferEvent.object).bech32;

      return {
        ft: {},
        object: {
          [fromAddress]: {
            [objectAddress]: "-1"
          },
          [toAddress]: {
            [objectAddress]: "1"
          }
        }
      };
    } catch (error) {
      console.error(
        `Failed to process ${objectTransferEventProcessor.type_tag}:`,
        error
      );
    }

    return DEFAULT_BALANCE_CHANGES;
  },
  type_tag: "0x1::object::TransferEvent"
};
