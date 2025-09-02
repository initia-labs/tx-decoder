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

    if (
      withdrawEvent.coin_amounts.length !== withdrawEvent.coins.length ||
      withdrawEvent.fee_amounts.length !== withdrawEvent.coins.length
    ) {
      throw new Error("Malformed withdraw event: array lengths do not match");
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

    const validCoinDenoms = coinDenoms.filter(
      (denom): denom is string => denom !== null
    );
    if (validCoinDenoms.length !== withdrawEvent.coins.length) {
      const missing = withdrawEvent.coins.filter(
        (_, i) => coinDenoms[i] === null
      );
      throw new Error(
        `Coin denoms not found for tokens: ${missing.join(", ")}`
      );
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
