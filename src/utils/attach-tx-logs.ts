import { produce } from "immer";

import { Event, Log, TxResponse } from "../schema";

const extractTxLogs = (txData: TxResponse): Log[] => {
  // Failed Tx - no logs
  if (txData.code !== 0) return [];

  // pre Cosmos SDK 0.50
  if (txData.logs.length > 0) return txData.logs;

  // post Cosmos SDK 0.50
  const msgLogs = txData.tx.body.messages.map((_, index) => ({
    events: [] as Event[],
    log: "",
    msg_index: index,
  }));

  return produce(msgLogs, (draft) => {
    txData.events.forEach((event) => {
      const index = event.attributes.find(
        (attr) => attr.key === "msg_index"
      )?.value;
      if (index) draft[Number(index)].events.push(event);
    });
  });
};

export const attachTxLogs = (txData: TxResponse): TxResponse => {
  const logs = extractTxLogs(txData);
  return {
    ...txData,
    logs,
  };
};
