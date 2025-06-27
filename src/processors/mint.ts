import { DEFAULT_BALANCE_CHANGES } from "@/constants";
import { BalanceEventProcessor } from "@/interfaces";
import { zMintNftEvent } from "@/schema";
import { toBech32 } from "@/utils";

export const mintEventProcessor: BalanceEventProcessor = {
  async process(event, apiClient) {
    try {
      const dataAttribute = event.attributes.find((attr) => attr.key === "data");
      if (!dataAttribute) {
        throw new Error("Mint event data attribute not found");
      }

      const mintEvent = zMintNftEvent.parse(dataAttribute.value);
      const owner = await apiClient.findOwnerFromStoreAddr(mintEvent.nft);

      if (!owner) {
        throw new Error(`Owner not found for NFT: ${mintEvent.nft}`);
      }

      return {
        ft: {},
        object: {
          [owner]: { [toBech32(mintEvent.nft)]: "1" },
        },
      };
    } catch (error) {
      console.error(`Failed to process ${mintEventProcessor.type_tag}:`, error);
    }

    return DEFAULT_BALANCE_CHANGES;
  },
  type_tag: "0x1::collection::MintEvent",
};
