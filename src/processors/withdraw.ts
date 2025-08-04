import { DEFAULT_BALANCE_CHANGES } from "@/constants";
import { BalanceEventProcessor } from "@/interfaces";
import { zWithdrawEvent } from "@/schema";

export const withdrawEventProcessor: BalanceEventProcessor = {
  async process(currentEvent, _allEvents, apiClient) {
    try {
      const dataAttribute = currentEvent.attributes.find(
        (attr) => attr.key === "data"
      );
      if (!dataAttribute) {
        throw new Error("Withdraw event data attribute not found");
      }

      const data = zWithdrawEvent.parse(dataAttribute.value);
      const [owner, denom] = await Promise.all([
        apiClient.findOwnerFromStoreAddr(data.store_addr),
        apiClient.findDenomFromMetadataAddr(data.metadata_addr)
      ]);

      if (!owner) {
        throw new Error(
          `Owner not found for store address: ${data.store_addr}`
        );
      }
      if (!denom) {
        throw new Error(
          `Denom not found for withdraw event from metadata address: ${data.metadata_addr}`
        );
      }

      return {
        ft: {
          [owner]: { [denom]: `-${data.amount}` }
        },
        object: {}
      };
    } catch (error) {
      console.error(
        `Failed to process ${withdrawEventProcessor.type_tag}:`,
        error
      );
    }

    return DEFAULT_BALANCE_CHANGES;
  },
  type_tag: "0x1::fungible_asset::WithdrawEvent"
};
