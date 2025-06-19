import { produce } from "immer";

import * as Handlers from "./handlers";
import { DecodedTx, MessageDecoder } from "./interfaces";
import { TxResponse } from "./schema";
import { mergeBalanceChanges } from "./utils";
import { createNotSupportedMessage } from "./utils";

// Array of decoders ordered by priority
const messageDecoders: MessageDecoder[] = [
  Handlers.sendDecoder,
  Handlers.initiateTokenDepositDecoder,
  Handlers.finalizeTokenWithdrawalDecoder,
  Handlers.withdrawDelegatorRewardDecoder,
  Handlers.swapDecoder,
  Handlers.nftMintDecoder,
  // Add more decoders here in order of priority
];

export function decodeTransaction(txResponse: TxResponse): DecodedTx {
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

  const decodedTx = produce(initialState, (draft) => {
    for (const [index, message] of txResponse.tx.body.messages.entries()) {
      let decoderMatched = false;

      // Try each decoder in order of priority
      for (const decoder of messageDecoders) {
        if (decoder.check(message, txResponse.logs[index])) {
          const result = decoder.decode(message, txResponse.logs[index]);
          draft.messages.push(result.decodedMessage);
          draft.balanceChanges = mergeBalanceChanges(
            draft.balanceChanges,
            result.balanceChanges
          );
          decoderMatched = true;
          break; // Stop after the first matching decoder
        }
      }

      // If no decoder matches, add a not_supported message
      if (!decoderMatched) {
        draft.messages.push(createNotSupportedMessage(message["@type"]));
      }
    }
  });

  return decodedTx;
}
