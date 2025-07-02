import { ApiClient } from "./api";
import { BalanceChanges, Metadata } from "./interfaces";
import { toBech32 } from "./utils";

// We only support NFT metadata for now
export const resolveMetadata = async (
  apiClient: ApiClient,
  balanceChanges: BalanceChanges
) => {
  const tokenAddresses = Object.values(balanceChanges.object).flatMap(
    (innerObject) => Object.keys(innerObject)
  );

  const promises = await Promise.allSettled(
    tokenAddresses.map((address) => apiClient.findNftFromTokenAddr(address))
  );

  const metadata = promises.reduce<Metadata>((acc, promise, index) => {
    if (promise.status === "fulfilled") {
      if (promise.value === null) {
        console.error(
          `No NFT metadata found for object address ${tokenAddresses[index]}`
        );
        return acc;
      }

      acc[tokenAddresses[index]] = {
        collectionAddress: toBech32(promise.value.data.collection.inner),
        tokenId: promise.value.data.token_id,
        tokenUri: promise.value.data.uri,
        type: "nft",
      };
    }
    return acc;
  }, {});

  return metadata;
};
