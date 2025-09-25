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

  protected async fetchWithCache<T>(
    path: string,
    parser: z.ZodType<T>
  ): Promise<T> {
    const fullUrl = `${this.baseUrl}${path}`;
    const cached = this.cacheService.get<T>(fullUrl);
    if (cached !== undefined) {
      try {
        return parser.parse(cached);
      } catch {
        this.cacheService.delete(fullUrl);
      }
    }

    try {
      const response = await axios.get(fullUrl, {
        timeout: this.timeoutMs
      });
      const parsed = parser.parse(response.data);
      this.cacheService.set(fullUrl, parsed);
      return parsed;
    } catch (error) {
      console.error(`Failed to fetch or parse data from ${fullUrl}:`, error);
      throw error;
    }
  }
}
