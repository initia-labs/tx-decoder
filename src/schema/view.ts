import { z } from "zod";

import { zJsonString } from "./common";

export const zMoveViewResponse = z.object({
  data: z.union([zJsonString, z.string()]),
});

export type MoveViewResponse = z.infer<typeof zMoveViewResponse>;
