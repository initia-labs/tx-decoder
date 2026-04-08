export class CacheService {
  private readonly cache: Map<string, Promise<unknown>> = new Map();

  getOrFetch<T>(key: string, factory: () => Promise<T>): Promise<T> {
    const existing = this.cache.get(key) as Promise<T> | undefined;
    if (existing !== undefined) {
      return existing;
    }

    const promise = factory().catch((error) => {
      this.cache.delete(key);
      throw error;
    });

    this.cache.set(key, promise);
    return promise;
  }
}
