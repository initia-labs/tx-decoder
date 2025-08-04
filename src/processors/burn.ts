import { DEFAULT_BALANCE_CHANGES } from "@/constants";
import { BalanceEventProcessor } from "@/interfaces";
import { zMsgMoveNftBurnEvent } from "@/schema";
import { toBech32 } from "@/utils";

export const burnEventProcessor: BalanceEventProcessor = {
  async process(currentEvent, allEvents, _apiClient) {
    try {
      const dataAttribute = currentEvent.attributes.find(
        (attr) => attr.key === "data"
      );
      if (!dataAttribute) {
        throw new Error("Burn event data attribute not found");
      }

      const burnEvent = zMsgMoveNftBurnEvent.parse(dataAttribute.value);
      const owner = allEvents
        .find((event) => event.type === "execute")
        ?.attributes.find((attr) => attr.key === "sender")?.value;

      if (!owner) {
        throw new Error(`Owner not found for NFT: ${burnEvent.nft}`);
      }

      return {
        ft: {},
        object: {
          [toBech32(owner)]: { [toBech32(burnEvent.nft)]: "-1" }
        }
      };
    } catch (error) {
      console.error(`Failed to process ${burnEventProcessor.type_tag}:`, error);
    }

    return DEFAULT_BALANCE_CHANGES;
  },
  type_tag: "0x1::collection::BurnEvent"
};
