import { ApiClient } from "@/api";
import { DecodedMessage, MessageDecoder } from "@/interfaces";
import { Log, Message, zMsgWithdrawLiquidity, zDexWithdrawEvent } from "@/schema";
import { findMoveEvent } from "@/utils";

export const withdrawLiquidityDecoder: MessageDecoder = {
  check: (message: Message, _log: Log) => zMsgWithdrawLiquidity.safeParse(message).success,
  decode: async (message: Message, log: Log, apiClient: ApiClient) => {
    const parsed = zMsgWithdrawLiquidity.parse(message);
    const { sender } = parsed;

    const withdrawEvent = findMoveEvent(
      log.events,
      "0x1::dex::WithdrawEvent",
      zDexWithdrawEvent
    );
    if (!withdrawEvent) {
      throw new Error("Withdraw event not found");
    }

    const [denomA, denomB, liquidityDenom] = await Promise.all([
      apiClient.findDenomFromMetadataAddr(withdrawEvent.coin_a),
      apiClient.findDenomFromMetadataAddr(withdrawEvent.coin_b),
      apiClient.findDenomFromMetadataAddr(withdrawEvent.liquidity_token),
    ]);

    if (!denomA) {
      throw new Error(`Denom A not found for coin ${withdrawEvent.coin_a}`);
    }

    if (!denomB) {
      throw new Error(`Denom B not found for coin ${withdrawEvent.coin_b}`);
    }

    if (!liquidityDenom) {
      throw new Error(
        `Liquidity denom not found for token ${withdrawEvent.liquidity_token}`
      );
    }

    const decodedMessage: DecodedMessage = {
      action: "withdraw_liquidity",
      data: {
        amountA: withdrawEvent.coin_a_amount,
        amountB: withdrawEvent.coin_b_amount,
        denomA,
        denomB,
        from: sender,
        liquidity: withdrawEvent.liquidity,
        liquidityDenom,
      },
      isIbc: false,
      isOp: false,
    };

    return decodedMessage;
  },
};
