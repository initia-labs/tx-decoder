import { z } from "zod";

import { zJsonString } from "./common";

export const zMoveViewResponse = z.object({
  data: zJsonString,
});

export type MoveViewResponse = z.infer<typeof zMoveViewResponse>;
