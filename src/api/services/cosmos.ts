import { z } from "zod";

import { zNodeInfo, zTxResponse } from "@/schema";

import { BaseClient } from "./base";

export class CosmosClient extends BaseClient {
  public async getChainId(): Promise<string> {
    try {
      const result = await this.fetchWithCache(
        `/cosmos/base/tendermint/v1beta1/node_info`,
        zNodeInfo
      );
      return result.default_node_info.network;
    } catch (error) {
      console.error("Failed to fetch chain ID:", error);
      throw new Error("Unable to retrieve chain ID from node info");
    }
  }

  public async getCosmosTx(txHash: string) {
    try {
      const result = await this.fetchWithCache(
        `/cosmos/tx/v1beta1/txs/${txHash}`,
        z.object({
          tx_response: zTxResponse
        })
      );

      return result.tx_response;
    } catch (error) {
      console.error(`Failed to fetch Cosmos tx ${txHash}:`, error);
      throw error;
    }
  }
}
