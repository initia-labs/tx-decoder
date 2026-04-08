import axios from "axios";
import { z } from "zod";

import { CacheService } from "./cache";

export class BaseClient {
  protected static readonly DEFAULT_TIMEOUT_MS = 10000;

  constructor(
    protected readonly baseUrl: string,
    protected readonly cacheService: CacheService,
    protected readonly timeoutMs: number = BaseClient.DEFAULT_TIMEOUT_MS
  ) {}

  protected fetchWithCache<T>(path: string, parser: z.ZodType<T>): Promise<T> {
    const fullUrl = `${this.baseUrl}${path}`;
    return this.cacheService.getOrFetch(fullUrl, async () => {
      try {
        const response = await axios.get(fullUrl, {
          timeout: this.timeoutMs
        });
        return parser.parse(response.data);
      } catch (error) {
        console.error(`Failed to fetch or parse data from ${fullUrl}:`, error);
        throw error;
      }
    });
  }
}
