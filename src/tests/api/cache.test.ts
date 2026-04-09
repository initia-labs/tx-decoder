import { CacheService } from "@/api/services/cache";

describe("CacheService", () => {
  it("shares one factory invocation across concurrent callers for the same key", async () => {
    const cache = new CacheService();
    const factory = jest.fn(
      () => new Promise<string>((resolve) => setTimeout(() => resolve("v"), 5))
    );

    const results = await Promise.all(
      Array.from({ length: 100 }, () => cache.getOrFetch("k", factory))
    );

    expect(factory).toHaveBeenCalledTimes(1);
    expect(results).toHaveLength(100);
    expect(results.every((v) => v === "v")).toBe(true);
  });

  it("returns the cached value on sequential calls after resolution", async () => {
    const cache = new CacheService();
    const firstFactory = jest.fn(async () => "first");
    const secondFactory = jest.fn(async () => "second");

    const first = await cache.getOrFetch("k", firstFactory);
    const second = await cache.getOrFetch("k", secondFactory);

    expect(first).toBe("first");
    expect(second).toBe("first");
    expect(firstFactory).toHaveBeenCalledTimes(1);
    expect(secondFactory).not.toHaveBeenCalled();
  });

  it("evicts on rejection so a later call can retry", async () => {
    const cache = new CacheService();
    const failingFactory = jest.fn(async () => {
      throw new Error("boom");
    });
    const succeedingFactory = jest.fn(async () => "ok");

    await expect(cache.getOrFetch("k", failingFactory)).rejects.toThrow("boom");
    const result = await cache.getOrFetch("k", succeedingFactory);

    expect(result).toBe("ok");
    expect(failingFactory).toHaveBeenCalledTimes(1);
    expect(succeedingFactory).toHaveBeenCalledTimes(1);
  });

  it("delivers the same rejection to all concurrent callers", async () => {
    const cache = new CacheService();
    const error = new Error("boom");
    const failingFactory = jest.fn(
      () =>
        new Promise<string>((_, reject) => setTimeout(() => reject(error), 5))
    );

    const settled = await Promise.allSettled(
      Array.from({ length: 10 }, () => cache.getOrFetch("k", failingFactory))
    );

    expect(failingFactory).toHaveBeenCalledTimes(1);
    expect(settled).toHaveLength(10);
    for (const result of settled) {
      expect(result.status).toBe("rejected");
      if (result.status === "rejected") {
        expect(result.reason).toBe(error);
      }
    }
  });

  it("retries a fresh burst after a prior burst rejected", async () => {
    const cache = new CacheService();
    const failingFactory = jest.fn(async () => {
      throw new Error("boom");
    });
    const succeedingFactory = jest.fn(async () => "ok");

    await Promise.allSettled(
      Array.from({ length: 10 }, () => cache.getOrFetch("k", failingFactory))
    );

    const results = await Promise.all(
      Array.from({ length: 10 }, () => cache.getOrFetch("k", succeedingFactory))
    );

    expect(failingFactory).toHaveBeenCalledTimes(1);
    expect(succeedingFactory).toHaveBeenCalledTimes(1);
    expect(results.every((v) => v === "ok")).toBe(true);
  });

  it("keeps different keys independent", async () => {
    const cache = new CacheService();
    const factoryA = jest.fn(async () => "a");
    const factoryB = jest.fn(async () => "b");

    const [a1, b1, a2, b2] = await Promise.all([
      cache.getOrFetch("a", factoryA),
      cache.getOrFetch("b", factoryB),
      cache.getOrFetch("a", factoryA),
      cache.getOrFetch("b", factoryB)
    ]);

    expect(factoryA).toHaveBeenCalledTimes(1);
    expect(factoryB).toHaveBeenCalledTimes(1);
    expect(a1).toBe("a");
    expect(a2).toBe("a");
    expect(b1).toBe("b");
    expect(b2).toBe("b");
  });
});
