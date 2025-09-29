import { ApiClient } from "@/api";
import { DecodedMessage, MessageDecoder } from "@/interfaces";
import {
  Log,
  Message,
  TxResponse,
  zMsgMoveStableSwap,
  zMsgStableswapProvideLiquidity,
  zMsgStableswapWithdrawLiquidity,
  zStableswapProvideEvent,
  zStableswapWithdrawEvent
} from "@/schema";
import { zSwapEvent } from "@/schema";
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

export const stableswapDecoder: MessageDecoder = {
  check: (message: Message, _log: Log) =>
    zMsgMoveStableSwap.safeParse(message).success,
  decode: async (
    message: Message,
    log: Log,
    apiClient: ApiClient,
    _txResponse: TxResponse
  ) => {
    const parsed = zMsgMoveStableSwap.parse(message);
    const { sender } = parsed;

    const swapEvent = findMoveEvent(
      log.events,
      "0x1::stableswap::SwapEvent",
      zSwapEvent
    );
    if (!swapEvent) {
      throw new Error("Stable Swap event not found");
    }

    const [denomIn, denomOut] = await Promise.all([
      apiClient.findDenomFromMetadataAddr(swapEvent.offer_coin),
      apiClient.findDenomFromMetadataAddr(swapEvent.return_coin)
    ]);

    if (!denomIn) {
      throw new Error(
        `Denom in not found for offer coin ${swapEvent.offer_coin}`
      );
    }

    if (!denomOut) {
      throw new Error(
        `Denom out not found for return coin ${swapEvent.return_coin}`
      );
    }

    const decodedMessage: DecodedMessage = {
      action: "swap",
      data: {
        amountIn: swapEvent.offer_amount,
        amountOut: swapEvent.return_amount,
        denomIn,
        denomOut,
        from: sender
      },
      isIbc: false,
      isOp: false
    };

    return decodedMessage;
  }
};
