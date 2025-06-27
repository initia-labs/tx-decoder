import { z } from "zod";

import { Event } from "@/schema";

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

  const parsed = schema.safeParse(dataAttribute.value);
  if (!parsed.success) {
    return null;
  }

  return parsed.data;
};
