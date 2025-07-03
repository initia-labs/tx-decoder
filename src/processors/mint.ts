import { DEFAULT_BALANCE_CHANGES } from "@/constants";
import { BalanceEventProcessor } from "@/interfaces";
import { zMintNftEvent, zMsgMoveObjectTransferEvent } from "@/schema";
import { toBech32 } from "@/utils";

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

      const transferRecipients = events
        .filter((event) => {
          if (event.type !== "move") return false;

          const typeTag = event.attributes.find(
            (attr) => attr.key === "type_tag"
          )?.value;
          if (typeTag !== "0x1::object::TransferEvent") return false;

          const data = event.attributes.find(
            (attr) => attr.key === "data"
          )?.value;
          const transferEvent = zMsgMoveObjectTransferEvent.safeParse(data);

          return (
            transferEvent.success && transferEvent.data.object === mintEvent.nft
          );
        })
        .map((event) => {
          const data = event.attributes.find(
            (attr) => attr.key === "data"
          )?.value;
          return zMsgMoveObjectTransferEvent.parse(data).to;
        });

      const latestOwner =
        transferRecipients.length > 0
          ? transferRecipients[transferRecipients.length - 1]
          : null;

      const owner =
        latestOwner ??
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
