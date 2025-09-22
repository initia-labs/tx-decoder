import { getAddress } from "viem";
import { z } from "zod";

import { BaseClient } from "./base";

const zAddressResponse = z.object({ address: z.string() });

export class MinievmClient extends BaseClient {
  public async fetchErc20WrapperAddress() {
    const url = `${this.restUrl}/minievm/evm/v1/contracts/erc20_wrapper`;
    const { address } = await this.fetchWithCache(url, zAddressResponse);
    return getAddress(address);
  }

  public async fetchRemoteTokenAddress(denom: string) {
    const url = `${this.restUrl}/minievm/evm/v1/contracts/by_denom?denom=${encodeURIComponent(
      denom
    )}`;
    const { address } = await this.fetchWithCache(url, zAddressResponse);
    return getAddress(address);
  }
}
