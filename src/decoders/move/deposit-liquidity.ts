import { ApiClient } from "@/api";
import { DecodedMessage, MessageDecoder } from "@/interfaces";
import { Log, Message, zMsgMoveExecute, zProvideEvent } from "@/schema";
import { findMoveEvent } from "@/utils";

export const depositLiquidityDecoder: MessageDecoder = {
  check: (message: Message, _log: Log) => {
    if (!zMsgMoveExecute.safeParse(message).success) return false;
    
    const parsed = zMsgMoveExecute.parse(message);
    return (
      parsed.function_name === "unproportional_provide" &&
      parsed.module_name === "dex_utils"
    );
  },
  decode: async (message: Message, log: Log, apiClient: ApiClient) => {
    const parsed = zMsgMoveExecute.parse(message);
    const { sender } = parsed;

    const provideEvent = findMoveEvent(
      log.events,
      "0x1::dex::ProvideEvent",
      zProvideEvent
    );
    if (!provideEvent) {
      throw new Error("Provide event not found");
    }

    const [denomA, denomB, liquidityDenom] = await Promise.all([
      apiClient.findDenomFromMetadataAddr(provideEvent.coin_a),
      apiClient.findDenomFromMetadataAddr(provideEvent.coin_b),
      apiClient.findDenomFromMetadataAddr(provideEvent.liquidity_token),
    ]);

    if (!denomA) {
      throw new Error(
        `Denom A not found for coin ${provideEvent.coin_a}`
      );
    }

    if (!denomB) {
      throw new Error(
        `Denom B not found for coin ${provideEvent.coin_b}`
      );
    }

    if (!liquidityDenom) {
      throw new Error(
        `Liquidity denom not found for token ${provideEvent.liquidity_token}`
      );
    }

    const decodedMessage: DecodedMessage = {
      action: "deposit_liquidity",
      data: {
        amountA: provideEvent.coin_a_amount,
        amountB: provideEvent.coin_b_amount,
        denomA,
        denomB,
        from: sender,
        liquidity: provideEvent.liquidity,
        liquidityDenom,
      },
      isIbc: false,
      isOp: false,
    };

    return decodedMessage;
  },
};