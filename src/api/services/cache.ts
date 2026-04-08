export class CacheService {
  private readonly cache: Map<string, Promise<unknown>> = new Map();

  /**
   * Return the cached promise for `key`, or call `factory` once and cache
   * the resulting promise. Concurrent callers with the same key share a
   * single in-flight request. If the promise rejects, the entry is evicted
   * so the next caller can retry.
   */
  getOrFetch<T>(key: string, factory: () => Promise<T>): Promise<T> {
    // Safe cast: each key is always produced by a single factory type.
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
