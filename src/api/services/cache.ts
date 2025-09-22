export class CacheService {
  private readonly cache: Map<string, unknown> = new Map();

  delete(key: string): void {
    this.cache.delete(key);
  }

  get<T>(key: string): T | undefined {
    const cached = this.cache.get(key);
    if (cached !== undefined) {
      return cached as T;
    }
    return undefined;
  }

  set<T>(key: string, value: T): void {
    this.cache.set(key, value);
  }
}
