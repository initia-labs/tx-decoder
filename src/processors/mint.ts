import { DEFAULT_BALANCE_CHANGES } from "@/constants";
import { BalanceEventProcessor } from "@/interfaces";
import { zMintNftEvent, zMsgMoveObjectTransferEvent } from "@/schema";
import { findMoveEvent, toBech32 } from "@/utils";

export const mintEventProcessor: BalanceEventProcessor = {
  async process(event, events, _apiClient) {
    try {
      const dataAttribute = event.attributes.find(
        (attr) => attr.key === "data"
      );
      if (!dataAttribute) {
        throw new Error("Mint event data attribute not found");
      }

      const mintEvent = zMintNftEvent.parse(dataAttribute.value);

      // First try to find the transfer event to get the owner
      const transferEvent = findMoveEvent(
        events,
        "0x1::object::TransferEvent",
        zMsgMoveObjectTransferEvent
      );

      const owner =
        transferEvent?.to ||
        events
          .find((event) => event.type === "execute")
          ?.attributes.find((attr) => attr.key === "sender")?.value;

      if (!owner) {
        throw new Error(`Owner not found for NFT: ${mintEvent.nft}`);
      }

      return {
        ft: {},
        object: {
          [toBech32(owner)]: { [toBech32(mintEvent.nft)]: "1" },
        },
      };
    } catch (error) {
      console.error(`Failed to process ${mintEventProcessor.type_tag}:`, error);
    }

    return DEFAULT_BALANCE_CHANGES;
  },
  type_tag: "0x1::collection::MintEvent",
};
