import { InitiaAddress } from "@initia/utils";

import { createDefaultMoveBalanceChanges } from "@/constants";
import { MoveEventProcessor } from "@/interfaces";
import { zMsgMoveNftBurnEvent } from "@/schema";

export const burnEventProcessor: MoveEventProcessor = {
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
          [InitiaAddress(owner).bech32]: {
            [InitiaAddress(burnEvent.nft).bech32]: "-1"
          }
        },
        vm: "move"
      };
    } catch (error) {
      console.error(`Failed to process ${burnEventProcessor.typeTag}:`, error);
    }

    return createDefaultMoveBalanceChanges();
  },
  typeTag: "0x1::collection::BurnEvent"
};
