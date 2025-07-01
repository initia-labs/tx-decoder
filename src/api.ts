import axios from "axios";

import { DecoderConfig } from "./interfaces";
import {
  NftResource,
  zAccountResources,
  zMoveViewResponse,
  zNftResource,
  zObjectCoreResource,
  zValidator,
} from "./schema";
import { toBech32 } from "./utils";

export class ApiClient {
  private readonly restUrl: string;

  constructor(config: DecoderConfig) {
    this.restUrl = config.restUrl;
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
    const data = response?.data ?? null;
    return data;
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

  private async _viewMoveContract(
    address: string,
    functionName: string,
    moduleName: string,
    args: string[],
    typeArgs: string[]
  ) {
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

      return zMoveViewResponse.parse(response.data);
    } catch {
      return null;
    }
  }
}
