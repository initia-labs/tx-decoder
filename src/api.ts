import axios from "axios";

import { DecoderConfig } from "./interfaces";
import {
  NftResource,
  zAccountResources,
  zFungibleAssetMetadataResource,
  zNftResource,
  zObjectCoreResource,
} from "./schema";
import { toBech32 } from "./utils";

export class ApiClient {
  private readonly restUrl: string;

  constructor(config: DecoderConfig) {
    this.restUrl = config.restUrl;
  }

  public async findDenomFromMetadataAddr(metadataAddr: string): Promise<string | null> {
    const resources = await this._getAccountResources(metadataAddr);
    if (!resources) {
      return null;
    }
    const fungibleMetadataResource = resources.find(
      (resource) => resource.struct_tag === "0x1::fungible_asset::Metadata"
    );
    if (!fungibleMetadataResource) {
      return null;
    }
    const metadata = zFungibleAssetMetadataResource.parse(fungibleMetadataResource.move_resource);
    return metadata.data.symbol;
  }

  public async findNftFromTokenAddr(tokenAddr: string): Promise<NftResource | null> {
    const resources = await this._getAccountResources(tokenAddr);
    if (!resources) {
      return null;
    }
    const nftResource = resources.find((resource) => resource.struct_tag === "0x1::nft::Nft");
    if (!nftResource) {
      return null;
    }
    return zNftResource.parse(nftResource.move_resource);
  }

  public async findOwnerFromStoreAddr(storeAddr: string): Promise<string | null> {
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

    return toBech32(zObjectCoreResource.parse(objectCoreResource.move_resource).data.owner);
  }

  private async _getAccountResources(address: string) {
    try {
      const response = await axios.get(
        `${this.restUrl}/initia/move/v1/accounts/${address}/resources`
      );
      return zAccountResources.parse(response.data).resources;
    } catch {
      return null;
    }
  }
}
