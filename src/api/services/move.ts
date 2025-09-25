import { InitiaAddress } from "@initia/utils";
import axios from "axios";
import { z } from "zod";

import type {
  AccountResource,
  CollectionResource,
  NftResource
} from "@/schema";

import * as schema from "@/schema";

import { BaseClient } from "./base";

const zDenomResponse = z.object({ denom: z.string() });

export class MoveClient extends BaseClient {
  public async findCollectionFromCollectionAddr(
    collectionAddr: string
  ): Promise<CollectionResource | null> {
    const resources = await this.getAccountResources(collectionAddr);
    if (!resources) {
      return null;
    }
    const collectionResource = resources.find(
      (resource) => resource.struct_tag === "0x1::collection::Collection"
    );
    if (!collectionResource) {
      return null;
    }
    return schema.zCollectionResource.parse(collectionResource.move_resource);
  }

  public async findDenomFromMetadataAddr(
    metadataAddr: string
  ): Promise<string | null> {
    try {
      const result = await this.fetchWithCache(
        `/initia/move/v1/denom?metadata=${metadataAddr}`,
        zDenomResponse
      );

      return result.denom;
    } catch {
      return null;
    }
  }

  public async findNftFromTokenAddr(
    tokenAddr: string
  ): Promise<NftResource | null> {
    const resources = await this.getAccountResources(tokenAddr);
    if (!resources) {
      return null;
    }

    const nftResource = resources.find(
      (resource) => resource.struct_tag === "0x1::nft::Nft"
    );
    if (!nftResource) {
      return null;
    }
    return schema.zNftResource.parse(nftResource.move_resource);
  }

  public async findOwnerFromStoreAddr(
    storeAddr: string
  ): Promise<string | null> {
    const resources = await this.getAccountResources(storeAddr);
    if (!resources) {
      return null;
    }

    const objectCoreResource = resources.find(
      (resource) => resource.struct_tag === "0x1::object::ObjectCore"
    );
    if (!objectCoreResource) {
      return null;
    }

    return InitiaAddress(
      schema.zObjectCoreResource.parse(objectCoreResource.move_resource).data
        .owner
    ).bech32;
  }

  public async getAccountResources(
    address: string
  ): Promise<AccountResource[] | null> {
    try {
      const hexAddress = InitiaAddress(address).hex;
      return (
        await this.fetchWithCache(
          `/initia/move/v1/accounts/${hexAddress}/resources`,
          schema.zAccountResources
        )
      ).resources;
    } catch {
      return null;
    }
  }

  public async viewMoveContract(
    address: string,
    functionName: string,
    moduleName: string,
    args: string[],
    typeArgs: string[]
  ) {
    const url = `${this.baseUrl}/initia/move/v1/view/json`;
    const cacheKey = JSON.stringify({
      payload: {
        address,
        args,
        function_name: functionName,
        module_name: moduleName,
        type_args: typeArgs
      },
      url
    });

    const cachedData = this.cacheService.get(cacheKey);
    const parsedCache = schema.zMoveViewResponse.safeParse(cachedData);

    if (parsedCache.success) {
      return parsedCache.data.data;
    }

    try {
      const response = await axios.post(
        url,
        {
          address,
          args,
          function_name: functionName,
          module_name: moduleName,
          type_args: typeArgs
        },
        {
          timeout: this.timeoutMs
        }
      );

      const result = schema.zMoveViewResponse.parse(response.data);
      this.cacheService.set(cacheKey, result);
      return result.data;
    } catch {
      return null;
    }
  }
}
