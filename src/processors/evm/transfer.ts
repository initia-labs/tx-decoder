import { produce } from "immer";
import { decodeEventLog } from "viem";

import { createDefaultEvmBalanceChanges } from "@/constants";
import { EvmEventProcessor } from "@/interfaces";
import { zEvmLog, zEvmTransferEventLog } from "@/schema";
import { getEvmDenom } from "@/utils";

const TRANSFER_EVENT_TOPIC =
  "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef";

const transferAbi = [
  {
    inputs: [
      { indexed: true, name: "from", type: "address" },
      { indexed: true, name: "to", type: "address" },
      { indexed: false, name: "value", type: "uint256" }
    ],
    name: "Transfer",
    type: "event"
  }
] as const;

export const evmTransferEventProcessor: EvmEventProcessor = {
  eventSignatureHash: TRANSFER_EVENT_TOPIC,
  async process(eventAttribute) {
    try {
      if (eventAttribute.key !== "log") {
        throw new Error("EVM log attribute not found");
      }

      const parsedLog = zEvmLog.parse(eventAttribute.value);

      const decoded = decodeEventLog({
        abi: transferAbi,
        data: parsedLog.data,
        topics: parsedLog.topics
      });

      if (decoded.eventName !== "Transfer") {
        throw new Error(`Unexpected event: ${decoded.eventName}`);
      }

      const validated = zEvmTransferEventLog.parse(decoded.args);

      const { from, to, value } = validated;
      const denom = getEvmDenom(parsedLog.address);
      const amount = value.toString();

      return produce(createDefaultEvmBalanceChanges(), (draft) => {
        if (from) {
          draft.ft[from] = {
            [denom]: `-${amount}`
          };
        }

        draft.ft[to] = {
          [denom]: amount
        };
      });
    } catch (error) {
      console.error("Failed to decode EVM transfer log:", error);
      return createDefaultEvmBalanceChanges();
    }
  }
};
