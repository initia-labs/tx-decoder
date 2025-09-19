import { InitiaAddress } from "@initia/utils";

import { DEFAULT_BALANCE_CHANGES } from "@/constants";
import { MoveEventProcessor } from "@/interfaces";
import { zCreateEvent, zMintNftEvent } from "@/schema";

export const mintEventProcessor: MoveEventProcessor = {
  async process(currentEvent, allEvents, _apiClient) {
    try {
      const dataAttribute = currentEvent.attributes.find(
        (attr) => attr.key === "data"
      );
      if (!dataAttribute) {
        throw new Error("Mint event data attribute not found");
      }

      const mintEvent = zMintNftEvent.parse(dataAttribute.value);

      const createEvents = allEvents.filter((event) => {
        if (event.type !== "move") return false;

        const typeTag = event.attributes.find(
          (attr) => attr.key === "type_tag"
        )?.value;
        if (typeTag !== "0x1::object::CreateEvent") return false;

        const data = event.attributes.find(
          (attr) => attr.key === "data"
        )?.value;
        const createEvent = zCreateEvent.safeParse(data);

        return createEvent.success && createEvent.data.object === mintEvent.nft;
      });

      if (createEvents.length > 1) throw new Error("Multiple create events");

      const owner = zCreateEvent.parse(
        createEvents[0].attributes.find((attr) => attr.key === "data")?.value
      ).owner;

      if (!owner) {
        throw new Error(`Owner not found for NFT: ${mintEvent.nft}`);
      }

      return {
        ft: {},
        object: {
          [InitiaAddress(owner).bech32]: {
            [InitiaAddress(mintEvent.nft).bech32]: "1"
          }
        }
      };
    } catch (error) {
      console.error(`Failed to process ${mintEventProcessor.type_tag}:`, error);
    }

    return DEFAULT_BALANCE_CHANGES;
  },
  type_tag: "0x1::collection::MintEvent"
};
