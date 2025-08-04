import { ApiClient } from "@/api";
import { DEFAULT_BALANCE_CHANGES } from "@/constants";
import { BalanceEventProcessor } from "@/interfaces";
import { Event, zDepositEvent, zDepositOwnerEvent } from "@/schema";
import { toBech32 } from "@/utils";

export const depositEventProcessor: BalanceEventProcessor = {
  async process(currentEvent, allEvents, apiClient, eventIndex) {
    try {
      const dataAttribute = currentEvent.attributes.find(
        (attr) => attr.key === "data"
      );
      if (!dataAttribute) {
        throw new Error("Deposit event data attribute not found");
      }

      const data = zDepositEvent.parse(dataAttribute.value);
      const [owner, denom] = await Promise.all([
        _getDepositOwner(allEvents[eventIndex + 1], data.store_addr, apiClient),
        apiClient.findDenomFromMetadataAddr(data.metadata_addr)
      ]);

      if (!owner) {
        throw new Error(
          `Owner not found for store address: ${data.store_addr}`
        );
      }
      if (!denom) {
        throw new Error(
          `Denom not found for deposit event from metadata address: ${data.metadata_addr}`
        );
      }

      return {
        ft: {
          [owner]: { [denom]: data.amount }
        },
        object: {}
      };
    } catch (error) {
      console.error(
        `Failed to process ${depositEventProcessor.type_tag}:`,
        error
      );
    }

    return DEFAULT_BALANCE_CHANGES;
  },
  type_tag: "0x1::fungible_asset::DepositEvent"
};

const _getDepositOwner = async (
  depositOwnerEvent: Event | undefined,
  storeAddr: string,
  apiClient: ApiClient
): Promise<string | null> => {
  try {
    const ownerDataAttr = depositOwnerEvent?.attributes.find(
      (attr) => attr.key === "data"
    );
    return toBech32(zDepositOwnerEvent.parse(ownerDataAttr?.value).owner);
  } catch {
    return apiClient.findOwnerFromStoreAddr(storeAddr);
  }
};
