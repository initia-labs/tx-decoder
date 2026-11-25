// Event attribute values are chosen by whoever emits the event. A name that plain
// objects inherit (__proto__, constructor, toString, ...) resolves to a shared
// built-in instead of a missing entry, so the nested write that follows would
// mutate global state. Real addresses and contract ids never match these names.
export const isPrototypeKey = (key: string): boolean => key in Object.prototype;

// Object.hasOwn is ES2022 and the build targets ES2020.
export const getOwnValue = <T>(
  record: Record<string, T>,
  key: string
): T | undefined =>
  Object.prototype.hasOwnProperty.call(record, key) ? record[key] : undefined;
