import axios from "axios";
import { z } from "zod";

import { CacheService } from "./cache";

export class BaseClient {
  constructor(
    protected readonly restUrl: string,
    protected readonly cacheService: CacheService
  ) {}

  protected async fetchWithCache<T>(
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
}
