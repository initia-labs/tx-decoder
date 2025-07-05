import axios from "axios";
import { z } from "zod";

import { DecoderConfig } from "./interfaces";
import {
  AccountResource,
  CollectionResource,
  NftResource,
  Registry,
  zAccountResources,
  zCollectionResource,
  zMoveViewResponse,
  zNftResource,
  zNodeInfo,
  zObjectCoreResource,
  zRegistries,
  zValidator,
} from "./schema";
import { isAnyHexAddress, toBech32, toHex } from "./utils";

export class ApiClient {
  public registries: Registry[] = [];
  private readonly cache: Map<string, unknown> = new Map();

  private readonly registryUrls: string[];
  private readonly restUrl: string;

  constructor(config: DecoderConfig) {
    this.restUrl = config.restUrl;
    this.registryUrls = config.registryUrls;
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
    return zCollectionResource.parse(collectionResource.move_resource);
  }

  public async findDenomFromMetadataAddr(
    metadataAddr: string
  ): Promise<string | null> {
    const response = await this._viewMoveContract(
      "0x1",
      "metadata_to_denom",
      "coin",
      [`"${metadataAddr}"`],
      []
    );

    return z.string().parse(response);
  }

  public async findIbcCounterPartyChainId(
    chainId: string,
    portId: string,
    channelId: string
  ): Promise<string | null> {
    await this._getRegistries();

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
    return zNftResource.parse(nftResource.move_resource);
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

    return toBech32(
      zObjectCoreResource.parse(objectCoreResource.move_resource).data.owner
    );
  }

  public async findRollupChainId(bridgeId: string) {
    await this._getRegistries();

    return this.registries.find(
      (registry) => registry.metadata?.op_bridge_id === bridgeId
    )?.chain_id;
  }

  public async findValidator(validatorAddress: string) {
    try {
      const response = await axios.get(
        `${this.restUrl}/initia/mstaking/v1/validators/${validatorAddress}`
      );

      return zValidator.parse(response.data);
    } catch {
      return null;
    }
  }

  public async getChainId(): Promise<string> {
    const response = await axios.get(
      `${this.restUrl}/cosmos/base/tendermint/v1beta1/node_info`
    );
    return zNodeInfo.parse(response.data).default_node_info.network;
  }

  private async _getAccountResources(
    address: string
  ): Promise<AccountResource[] | null> {
    // convert to hex if it's a bech32 address
    const hexAddress = isAnyHexAddress(address) ? address : toHex(address);

    const url = `${this.restUrl}/initia/move/v1/accounts/${hexAddress}/resources`;

    const cachedData = this.cache.get(url);
    const parsedCache = zAccountResources.shape.resources.safeParse(cachedData);

    if (parsedCache.success) {
      return parsedCache.data;
    }

    try {
      const response = await axios.get(url);
      const result = zAccountResources.parse(response.data).resources;
      this.cache.set(url, result);
      return result;
    } catch {
      return null;
    }
  }

  private async _getRegistries() {
    if (this.registries.length > 0) {
      return this.registries;
    }

    const results = await Promise.allSettled(
      this.registryUrls.map((url) => axios.get(`${url}/chains.json`))
    );

    this.registries = results.flatMap((result, index) => {
      if (result.status === "rejected") {
        console.error(
          `Failed to fetch from ${this.registryUrls[index]}:`,
          result.reason
        );
        return [];
      }

      const parsed = zRegistries.safeParse(result.value.data);

      if (parsed.success) {
        return parsed.data;
      }
      console.warn(
        `Invalid registry format from ${this.registryUrls[index]}:`,
        parsed.error
      );
      return [];
    });
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
        typeArgs,
      },
      url,
    });

    const cachedData = this.cache.get(cacheKey);
    const parsedCache = zMoveViewResponse.safeParse(cachedData);

    if (parsedCache.success) {
      return parsedCache.data.data;
    }

    try {
      const response = await axios.post(
        `${this.restUrl}/initia/move/v1/view/json`,
        {
          address,
          args,
          function_name: functionName,
          module_name: moduleName,
          typeArgs,
        }
      );

      const result = zMoveViewResponse.parse(response.data);
      this.cache.set(cacheKey, result);
      return result.data;
    } catch {
      return null;
    }
  }
}
