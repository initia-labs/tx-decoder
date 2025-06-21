import { produce } from "immer";

import * as Handlers from "./handlers";
import { DecodedTx, MessageDecoder } from "./interfaces";
import { Log, Message, TxResponse, zTxResponse } from "./schema";
import { attachTxLogs, mergeBalanceChanges } from "./utils";
import { createNotSupportedMessage } from "./utils";

// Array of decoders ordered by priority
const messageDecoders: MessageDecoder[] = [
  Handlers.sendDecoder,
  Handlers.initiateTokenDepositDecoder,
  Handlers.finalizeTokenWithdrawalDecoder,
  Handlers.undelegateDecoder,
  Handlers.undelegateLockedDecoder,
  Handlers.withdrawDelegatorRewardDecoder,
  Handlers.dexSwapDecoder,
  Handlers.stableSwapDecoder,
  Handlers.nftMintDecoder,
  // Add more decoders here in order of priority
];

const findDecoderForMessage = (message: Message, log: Log): MessageDecoder | undefined => {
  return messageDecoders.find((decoder) => decoder.check(message, log));
};

const decodeMessage = (message: Message, log: Log): ReturnType<MessageDecoder["decode"]> | null => {
  const decoder = findDecoderForMessage(message, log);

  if (!decoder) {
    return null;
  }

  try {
    return decoder.decode(message, log);
  } catch {
    return null;
  }
};

const decodeFromValidatedTxResponse = (txResponse: TxResponse): DecodedTx => {
  const initialState: DecodedTx = {
    balanceChanges: { ft: {}, nft: {} },
    messages: [],
  };

  if (txResponse.tx.body.messages.length === 0) {
    return initialState;
  }

  if (txResponse.logs.length !== txResponse.tx.body.messages.length) {
    throw new Error(
      `Invalid tx response: ${txResponse.logs.length} logs found for ${txResponse.tx.body.messages.length} messages`
    );
  }

  return produce(initialState, (draft) => {
    txResponse.tx.body.messages.forEach((message, index) => {
      const log = txResponse.logs[index];
      const decodedResult = decodeMessage(message, log);

      if (decodedResult) {
        const { balanceChanges, decodedMessage } = decodedResult;
        draft.messages.push(decodedMessage);
        draft.balanceChanges = mergeBalanceChanges(draft.balanceChanges, balanceChanges);
      } else {
        draft.messages.push(createNotSupportedMessage(message["@type"]));
      }
    });
  });
};

export const decodeTransaction = (tx: unknown): DecodedTx => {
  const parsed = zTxResponse.safeParse(tx);
  if (!parsed.success) {
    throw new Error(`Invalid txResponse: ${parsed.error.message}`);
  }

  const txResponseWithLogs = attachTxLogs(parsed.data);

  const decodedTx = decodeFromValidatedTxResponse(txResponseWithLogs);

  return decodedTx;
};
