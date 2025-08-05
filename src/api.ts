import { InitiaAddress } from "@initia/utils";
import axios from "axios";
import { z } from "zod";

import type {
  AccountResource,
  CollectionResource,
  NftResource,
  Registry
} from "./schema";

import { DecoderConfig } from "./interfaces";
import * as schema from "./schema";

export class ApiClient {
  private readonly cache: Map<string, unknown> = new Map();

  private registries: Registry[] = [];
  private registriesUpdatePromise: Promise<void> | null = null;

  private readonly registryUrl: string;
  private readonly restUrl: string;

  constructor(config: DecoderConfig) {
    this.registryUrl = config.registryUrl;
    this.restUrl = config.restUrl;
  }

  public async findCollectionFromCollectionAddr(
    collectionAddr: string
  ): Promise<CollectionResource | null> {
    const resources = await this._getAccountResources(collectionAddr);
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
      const result = await this._fetchWithCache(
        `${this.restUrl}/initia/move/v1/denom?metadata=${metadataAddr}`,
        z.object({ denom: z.string() })
      );

      return result.denom;
    } catch {
      return null;
    }
  }

  public async findIbcCounterPartyChainId(
    chainId: string,
    portId: string,
    channelId: string
  ): Promise<string | null> {
    await this._updateRegistries();

    const registry = this.registries.find(
      (registry) => registry.chain_id === chainId
    );
    if (!registry) {
      return null;
    }

    const channel = registry.metadata.ibc_channels.find(
      (channel) =>
        channel.port_id === portId && channel.channel_id === channelId
    );
    if (!channel) {
      return null;
    }

    return channel.chain_id;
  }

  public async findNftFromTokenAddr(
    tokenAddr: string
  ): Promise<NftResource | null> {
    const resources = await this._getAccountResources(tokenAddr);
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
    const resources = await this._getAccountResources(storeAddr);
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

  public async findRollupChainId(bridgeId: string) {
    await this._updateRegistries();

    return this.registries.find(
      (registry) => registry.metadata?.op_bridge_id === bridgeId
    )?.chain_id;
  }

  public async findValidator(validatorAddress: string) {
    try {
      const result = await this._fetchWithCache(
        `${this.restUrl}/initia/mstaking/v1/validators/${validatorAddress}`,
        schema.zValidatorResponse
      );
      return result.validator;
    } catch {
      return null;
    }
  }

  public async getChainId(): Promise<string> {
    try {
      const result = await this._fetchWithCache(
        `${this.restUrl}/cosmos/base/tendermint/v1beta1/node_info`,
        schema.zNodeInfo
      );
      return result.default_node_info.network;
    } catch (error) {
      console.error("Failed to fetch chain ID:", error);
      throw new Error("Unable to retrieve chain ID from node info");
    }
  }

  private async _fetchWithCache<T>(
    url: string,
    parser: z.ZodType<T>
  ): Promise<T> {
    const cached = this.cache.get(url);
    if (cached !== undefined) {
      try {
        return parser.parse(cached);
      } catch {
        this.cache.delete(url);
      }
    }

    try {
      const response = await axios.get(url);
      const parsed = parser.parse(response.data);
      this.cache.set(url, parsed);
      return parsed;
    } catch (error) {
      console.error(`Failed to fetch or parse data from ${url}:`, error);
      throw error;
    }
  }

  private async _getAccountResources(
    address: string
  ): Promise<AccountResource[] | null> {
    const hexAddress = InitiaAddress(address).hex;
    const url = `${this.restUrl}/initia/move/v1/accounts/${hexAddress}/resources`;

    try {
      return (await this._fetchWithCache(url, schema.zAccountResources))
        .resources;
    } catch {
      return null;
    }
  }

  private async _updateRegistries() {
    if (this.registriesUpdatePromise) {
      return this.registriesUpdatePromise;
    }

    this.registriesUpdatePromise = (async () => {
      try {
        const registries = await this._fetchWithCache(
          `${this.registryUrl}/chains.json`,
          schema.zRegistries
        );

        this.registries = registries;
      } catch (error) {
        console.error(`Failed to fetch data from ${this.registryUrl}:`, error);
        this.registries = [];
      } finally {
        this.registriesUpdatePromise = null;
      }
    })();

    return this.registriesUpdatePromise;
  }

  private async _viewMoveContract(
    address: string,
    functionName: string,
    moduleName: string,
    args: string[],
    typeArgs: string[]
  ) {
    const url = `${this.restUrl}/initia/move/v1/view/json`;
    const cacheKey = JSON.stringify({
      payload: {
        address,
        args,
        function_name: functionName,
        module_name: moduleName,
        typeArgs
      },
      url
    });

    const cachedData = this.cache.get(cacheKey);
    const parsedCache = schema.zMoveViewResponse.safeParse(cachedData);

    if (parsedCache.success) {
      return parsedCache.data.data;
    }

    try {
      const response = await axios.post(url, {
        address,
        args,
        function_name: functionName,
        module_name: moduleName,
        typeArgs
      });

      const result = schema.zMoveViewResponse.parse(response.data);
      this.cache.set(cacheKey, result);
      return result.data;
    } catch {
      return null;
    }
  }
}
