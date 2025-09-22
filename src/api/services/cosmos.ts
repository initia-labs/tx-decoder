import * as schema from "@/schema";

import { BaseClient } from "./base";

export class CosmosClient extends BaseClient {
  public async getChainId(): Promise<string> {
    try {
      const result = await this.fetchWithCache(
        `${this.restUrl}/cosmos/base/tendermint/v1beta1/node_info`,
        schema.zNodeInfo
      );
      return result.default_node_info.network;
    } catch (error) {
      console.error("Failed to fetch chain ID:", error);
      throw new Error("Unable to retrieve chain ID from node info");
    }
  }
}
