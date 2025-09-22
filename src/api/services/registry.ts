import axios from "axios";
import { z } from "zod";

import * as schema from "@/schema";
import { Registry } from "@/schema";

import { CacheService } from "./cache";

export class RegistryService {
  private registries: Registry[] = [];
  private registriesUpdatePromise: Promise<void> | null = null;

  constructor(
    private readonly registryUrl: string,
    private readonly cacheService: CacheService
  ) {}

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

  private async fetchWithCache<T>(
    url: string,
    parser: z.ZodType<T>
  ): Promise<T> {
    const cached = this.cacheService.get<T>(url);
    if (cached !== undefined) {
      try {
        return parser.parse(cached);
      } catch {
        this.cacheService.delete(url);
      }
    }

    try {
      const response = await axios.get(url);
      const parsed = parser.parse(response.data);
      this.cacheService.set(url, parsed);
      return parsed;
    } catch (error) {
      console.error(`Failed to fetch or parse data from ${url}:`, error);
      throw error;
    }
  }

  private async updateRegistries() {
    if (this.registriesUpdatePromise) {
      return this.registriesUpdatePromise;
    }

    this.registriesUpdatePromise = (async () => {
      try {
        this.registries = await this.fetchWithCache(
          `${this.registryUrl}/chains.json`,
          schema.zRegistries
        );
      } catch (error) {
        console.error(`Failed to fetch data from ${this.registryUrl}:`, error);
        this.registries = [];
      } finally {
        this.registriesUpdatePromise = null;
      }
    })();

    return this.registriesUpdatePromise;
  }
}
