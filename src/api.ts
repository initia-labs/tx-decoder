import axios, { AxiosResponse } from "axios";
import { promises as fs } from "fs";
import path from "path";

import { DecoderConfig } from "./interfaces";
import {
  zAccountResources,
  zFungibleAssetMetadataResource,
  zObjectCoreResource,
} from "./schema/resources";
import { toBech32 } from "./utils";

export class ApiClient {
  private readonly restUrl: string;

  constructor(config: DecoderConfig) {
    this.restUrl = config.restUrl;
  }

  public async findDenomFromMetadataAddr(
    metadataAddr: string
  ): Promise<string | null> {
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
    const metadata = zFungibleAssetMetadataResource.parse(
      fungibleMetadataResource.move_resource
    );
    return metadata.data.symbol;
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

  private async _debugApiCall(address: string, response: AxiosResponse) {
    const key = `/initia/move/v1/accounts/${address}/resources`;
    const filePath = path.join(__dirname, "tests/_output/resources.json");

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let existingData: any = {};
    try {
      const fileContent = await fs.readFile(filePath, "utf-8");
      existingData = JSON.parse(fileContent);
    } catch {
      // File does not exist or is invalid — start fresh
      existingData = {};
    }

    existingData[key] = response.data;

    await fs.writeFile(
      filePath,
      JSON.stringify(existingData, null, 2),
      "utf-8"
    );
  }

  private async _getAccountResources(address: string) {
    try {
      const response = await axios.get(
        `${this.restUrl}/initia/move/v1/accounts/${address}/resources`
      );

      // Uncomment the line below to enable debugging output
      // await this._debugApiCall(address, response);

      return zAccountResources.parse(response.data).resources;
    } catch {
      return null;
    }
  }
}
