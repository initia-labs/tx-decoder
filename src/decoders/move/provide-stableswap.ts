import { ApiClient } from "@/api";
import { DecodedMessage, MessageDecoder } from "@/interfaces";
import {
  Log,
  Message,
  TxResponse,
  zMsgStableswapProvideLiquidity,
  zStableswapProvideEvent
} from "@/schema";
import { findMoveEvent } from "@/utils";

export const provideStableswapDecoder: MessageDecoder = {
  check: (message: Message, _log: Log) =>
    zMsgStableswapProvideLiquidity.safeParse(message).success,
  decode: async (
    message: Message,
    log: Log,
    apiClient: ApiClient,
    _txResponse: TxResponse
  ) => {
    const parsed = zMsgStableswapProvideLiquidity.parse(message);
    const { sender } = parsed;

    const provideEvent = findMoveEvent(
      log.events,
      "0x1::stableswap::ProvideEvent",
      zStableswapProvideEvent
    );
    if (!provideEvent) {
      throw new Error("Stableswap provide event not found");
    }

    if (
      provideEvent.coin_amounts.length !== provideEvent.coins.length ||
      provideEvent.fee_amounts.length !== provideEvent.coins.length
    ) {
      throw new Error("Malformed provide event: array lengths do not match");
    }

    const [liquidityDenom, ...coinDenoms] = await Promise.all([
      apiClient.findDenomFromMetadataAddr(provideEvent.liquidity_token),
      ...provideEvent.coins.map((coin) =>
        apiClient.findDenomFromMetadataAddr(coin)
      )
    ]);

    if (!liquidityDenom) {
      throw new Error(
        `Liquidity denom not found for token ${provideEvent.liquidity_token}`
      );
    }

    const validCoinDenoms = coinDenoms.filter(
      (denom): denom is string => denom !== null
    );
    if (validCoinDenoms.length !== provideEvent.coins.length) {
      const missing = provideEvent.coins.filter(
        (_, i) => coinDenoms[i] === null
      );
      throw new Error(
        `Coin denoms not found for tokens: ${missing.join(", ")}`
      );
    }

    const decodedMessage: DecodedMessage = {
      action: "provide_stableswap",
      data: {
        coinAmounts: provideEvent.coin_amounts,
        coinDenoms: validCoinDenoms,
        feeAmounts: provideEvent.fee_amounts,
        from: sender,
        liquidity: provideEvent.liquidity,
        liquidityDenom
      },
      isIbc: false,
      isOp: false
    };

    return decodedMessage;
  }
};
