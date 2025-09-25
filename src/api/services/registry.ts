import * as schema from "@/schema";
import { Registry } from "@/schema";

import { BaseClient } from "./base";
import { CacheService } from "./cache";

export class RegistryService extends BaseClient {
  private registries: Registry[] = [];
  private registriesUpdatePromise: Promise<void> | null = null;

  constructor(
    registryUrl: string,
    cacheService: CacheService,
    timeoutMs?: number
  ) {
    super(registryUrl, cacheService, timeoutMs);
  }

  public async findIbcCounterPartyChainId(
    chainId: string,
    portId: string,
    channelId: string
  ): Promise<string | null> {
    await this.updateRegistries();

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

  public async findRollupChainId(bridgeId: string) {
    await this.updateRegistries();

    return this.registries.find(
      (registry) => registry.metadata?.op_bridge_id === bridgeId
    )?.chain_id;
  }

  private async updateRegistries() {
    if (this.registriesUpdatePromise) {
      return this.registriesUpdatePromise;
    }

    this.registriesUpdatePromise = (async () => {
      try {
        this.registries = await this.fetchWithCache(
          "/chains.json",
          schema.zRegistries
        );
      } catch (error) {
        console.error(`Failed to fetch registry data:`, error);
        this.registries = [];
      } finally {
        this.registriesUpdatePromise = null;
      }
    })();

    return this.registriesUpdatePromise;
  }
}
