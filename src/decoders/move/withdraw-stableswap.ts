import { ApiClient } from "@/api";
import { DecodedMessage, MessageDecoder } from "@/interfaces";
import {
  Log,
  Message,
  TxResponse,
  zMsgStableswapWithdrawLiquidity,
  zStableswapWithdrawEvent
} from "@/schema";
import { findMoveEvent } from "@/utils";

export const withdrawStableswapDecoder: MessageDecoder = {
  check: (message: Message, _log: Log) =>
    zMsgStableswapWithdrawLiquidity.safeParse(message).success,
  decode: async (
    message: Message,
    log: Log,
    apiClient: ApiClient,
    _txResponse: TxResponse
  ) => {
    const parsed = zMsgStableswapWithdrawLiquidity.parse(message);
    const { sender } = parsed;

    const withdrawEvent = findMoveEvent(
      log.events,
      "0x1::stableswap::WithdrawEvent",
      zStableswapWithdrawEvent
    );
    if (!withdrawEvent) {
      throw new Error("Stableswap withdraw event not found");
    }

    const [liquidityDenom, ...coinDenoms] = await Promise.all([
      apiClient.findDenomFromMetadataAddr(withdrawEvent.liquidity_token),
      ...withdrawEvent.coins.map((coin) =>
        apiClient.findDenomFromMetadataAddr(coin)
      )
    ]);

    if (!liquidityDenom) {
      throw new Error(
        `Liquidity denom not found for token ${withdrawEvent.liquidity_token}`
      );
    }

    const validCoinDenoms = coinDenoms.filter((denom) => denom !== null);
    if (validCoinDenoms.length !== withdrawEvent.coins.length) {
      throw new Error("Some coin denoms are not found");
    }

    const decodedMessage: DecodedMessage = {
      action: "withdraw_stableswap",
      data: {
        coinAmounts: withdrawEvent.coin_amounts,
        coinDenoms: validCoinDenoms,
        feeAmounts: withdrawEvent.fee_amounts,
        from: sender,
        liquidity: withdrawEvent.liquidity,
        liquidityDenom
      },
      isIbc: false,
      isOp: false
    };

    return decodedMessage;
  }
};
