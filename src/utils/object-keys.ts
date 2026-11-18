// Event attribute values are chosen by whoever emits the event. Using one of these
// names as a key on a plain object reads or writes Object.prototype instead of
// an own property, so callers must reject them before indexing.
const PROTOTYPE_KEYS = new Set(["__proto__", "constructor", "prototype"]);

export const isPrototypeKey = (key: string): boolean => PROTOTYPE_KEYS.has(key);

// Object.hasOwn is ES2022 and the build targets ES2020.
export const getOwnValue = <T>(
  record: Record<string, T>,
  key: string
): T | undefined =>
  Object.prototype.hasOwnProperty.call(record, key) ? record[key] : undefined;
