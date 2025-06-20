import { z } from "zod";

import { SUPPORTED_MESSAGE_TYPES } from "@/message-types";
import { Event, Message } from "@/schema";

export const isMoveMessage = (message: Message) =>
  message["@type"] === SUPPORTED_MESSAGE_TYPES.MsgExecute ||
  message["@type"] === SUPPORTED_MESSAGE_TYPES.MsgExecuteJson;

// Generic function to find and parse Move events
export const findMoveEvent = <T>(
  events: Event[], 
  typeTag: string, 
  schema: z.ZodType<T>
): T | null => {
  const event = events.find(
    (event) =>
      event.type === "move" &&
      event.attributes.some((attr) => attr.key === "type_tag" && attr.value === typeTag)
  );

  if (!event) return null;

  const dataAttribute = event.attributes.find((attr) => attr.key === "data");

  if (!dataAttribute) {
    return null;
  }

  const parsed = schema.safeParse(JSON.parse(dataAttribute.value));
  if (!parsed.success) {
    return null;
  }

  return parsed.data;
};
