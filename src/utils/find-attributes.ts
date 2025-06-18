import { EventAttribute, Log } from "../schema";

/**
 * Finds an attribute in a log event by event type and attribute key.
 * This is a simplified version of the Stargate event attribute finder.
 * Stargate spec: https://github.com/cosmos/cosmjs/blob/d71b1db68ee65480a05a253c944357be047a6267/packages/stargate/src/logs.ts#L75
 */
export const findAttribute = (
  log: Log,
  eventType: string,
  attrKey: string
): EventAttribute => {
  const out = log.events
    .find((event) => event.type === eventType)
    ?.attributes.find((attr) => attr.key === attrKey);
  if (!out) {
    throw new Error(
      `Could not find attribute '${attrKey}' in first event of type '${eventType}' in first log.`
    );
  }
  return out;
};
