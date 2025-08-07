import { InitiaAddress } from "@initia/utils";

import { ApiClient } from "./api";
import { BalanceChanges, Metadata } from "./interfaces";

// We only support NFT metadata for now
export const resolveMetadata = async (
  apiClient: ApiClient,
  balanceChanges: BalanceChanges
) => {
  const tokenAddresses = Object.values(balanceChanges.object).flatMap(
    (innerObject) => Object.keys(innerObject)
  );

  const nftMetadata = await Promise.allSettled(
    tokenAddresses.map(async (address) => {
      const nft = await apiClient.findNftFromTokenAddr(address);
      if (nft === null) {
        return { collection: null, nft: null };
      }
      const collection = await apiClient.findCollectionFromCollectionAddr(
        nft.data.collection.inner
      );
      return { collection, nft };
    })
  );

  const metadata = nftMetadata.reduce<Metadata>((acc, promise, index) => {
    if (promise.status === "fulfilled") {
      if (promise.value.nft === null) {
        console.error(
          `No NFT metadata found for object address ${tokenAddresses[index]}`
        );
        return acc;
      }

      if (promise.value.collection === null) {
        console.error(
          `No collection metadata found for object address ${tokenAddresses[index]}`
        );
        return acc;
      }

      const { collection, nft } = promise.value;

      acc[tokenAddresses[index]] = {
        collection: {
          creator: InitiaAddress(collection.data.creator).bech32,
          description: collection.data.description,
          name: collection.data.name,
          uri: collection.data.uri
        },
        collectionAddress: InitiaAddress(nft.data.collection.inner).bech32,
        tokenId: nft.data.token_id,
        tokenUri: nft.data.uri,
        type: "nft"
      };
    }
    return acc;
  }, {});

  return metadata;
};
