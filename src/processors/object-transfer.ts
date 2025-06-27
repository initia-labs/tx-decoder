import { DEFAULT_BALANCE_CHANGES } from "@/constants";
import { BalanceEventProcessor } from "@/interfaces";
import { zMsgMoveObjectTransferEvent } from "@/schema";
import { toBech32 } from "@/utils";

export const objectTransferEventProcessor: BalanceEventProcessor = {
  async process(event, _apiClient) {
    try {
      const dataAttribute = event.attributes.find((attr) => attr.key === "data");
      if (!dataAttribute) {
        throw new Error("Object transfer event data attribute not found");
      }

      const transferEvent = zMsgMoveObjectTransferEvent.parse(dataAttribute.value);

      return {
        ft: {},
        object: {
          [toBech32(transferEvent.from)]: { [toBech32(transferEvent.object)]: "-1" },
          [toBech32(transferEvent.to)]: { [toBech32(transferEvent.object)]: "1" },
        },
      };
    } catch (error) {
      console.error(`Failed to process ${objectTransferEventProcessor.type_tag}:`, error);
    }

    return DEFAULT_BALANCE_CHANGES;
  },
  type_tag: "0x1::object::TransferEvent",
};
