import { getAddress } from "viem";
import { z } from "zod";

import { BaseClient } from "./base";

const zAddressResponse = z.object({ address: z.string() });

export class MinievmClient extends BaseClient {
  public async fetchErc20WrapperAddress() {
    const { address } = await this.fetchWithCache(
      `/minievm/evm/v1/contracts/erc20_wrapper`,
      zAddressResponse
    );
    return getAddress(address);
  }

  public async fetchRemoteTokenAddress(denom: string) {
    const { address } = await this.fetchWithCache(
      `/minievm/evm/v1/contracts/by_denom?denom=${encodeURIComponent(denom)}`,
      zAddressResponse
    );
    return getAddress(address);
  }
}
