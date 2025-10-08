import { z } from "zod";

import { zJsonString } from "../common";

export const zIbcTransferRecvPacket = zJsonString.pipe(
  z.object({
    amount: z.string(),
    denom: z.string(),
    receiver: z.string(),
    sender: z.string()
  })
);
