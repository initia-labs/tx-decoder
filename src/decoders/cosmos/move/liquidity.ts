import big from "big.js";

import { ApiClient } from "@/api";
import { INITIA_VAULT_MODULE_ADDRESS } from "@/constants";
import { DecodedMessage, MessageDecoder } from "@/interfaces";
import {
  Log,
  Message,
  TxResponse,
  zDepositDelegationEvent,
  zDexWithdrawEvent,
  zMsgDepositLiquidity,
  zMsgDepositStakeLiquidity,
  zMsgDepositStakeLockLiquidity,
  zMsgDirectDepositLiquidity,
  zMsgExtendLiquidity,
  zMsgMergeLiquidity,
  zMsgWithdrawLiquidity,
  zProvideEvent,
  zWithdrawDelegationEvent
} from "@/schema";
import { findAllMoveEvents, findMoveEvent } from "@/utils";

export const depositLiquidityDecoder: MessageDecoder = {
  check: (message: Message, _log: Log) =>
    zMsgDepositLiquidity.safeParse(message).success,
  decode: async (
    message: Message,
    log: Log,
    apiClient: ApiClient,
    _txResponse: TxResponse
  ) => {
    const parsed = zMsgDepositLiquidity.parse(message);
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
      apiClient.findDenomFromMetadataAddr(provideEvent.liquidity_token)
    ]);

    if (!denomA) {
      throw new Error(`Denom A not found for coin ${provideEvent.coin_a}`);
    }

    if (!denomB) {
      throw new Error(`Denom B not found for coin ${provideEvent.coin_b}`);
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
        liquidityDenom
      },
      isIbc: false,
      isOp: false
    };

    return decodedMessage;
  }
};

export const directDepositLiquidityDecoder: MessageDecoder = {
  check: (message: Message, _log: Log) =>
    zMsgDirectDepositLiquidity.safeParse(message).success,
  decode: async (
    message: Message,
    log: Log,
    apiClient: ApiClient,
    _txResponse: TxResponse
  ) => {
    const parsed = zMsgDirectDepositLiquidity.parse(message);
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
      apiClient.findDenomFromMetadataAddr(provideEvent.liquidity_token)
    ]);

    if (!denomA) {
      throw new Error(`Denom A not found for coin ${provideEvent.coin_a}`);
    }

    if (!denomB) {
      throw new Error(`Denom B not found for coin ${provideEvent.coin_b}`);
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
        liquidityDenom
      },
      isIbc: false,
      isOp: false
    };

    return decodedMessage;
  }
};

export const depositStakeLiquidityDecoder: MessageDecoder = {
  check: (message: Message, _log: Log) =>
    zMsgDepositStakeLiquidity.safeParse(message).success,
  decode: async (
    message: Message,
    log: Log,
    apiClient: ApiClient,
    _txResponse: TxResponse
  ) => {
    const parsed = zMsgDepositStakeLiquidity.parse(message);
    const { sender } = parsed;

    const provideEvent = findMoveEvent(
      log.events,
      "0x1::dex::ProvideEvent",
      zProvideEvent
    );
    if (!provideEvent) {
      throw new Error("Provide event not found");
    }

    const delegateEvent = log.events.find((event) => event.type === "delegate");

    const validatorAddress = delegateEvent?.attributes.find(
      (attr) => attr.key === "validator"
    )?.value;

    if (!validatorAddress) {
      throw new Error("Validator is missing from the delegate event");
    }

    const [denomA, denomB, liquidityDenom, validatorData] = await Promise.all([
      apiClient.findDenomFromMetadataAddr(provideEvent.coin_a),
      apiClient.findDenomFromMetadataAddr(provideEvent.coin_b),
      apiClient.findDenomFromMetadataAddr(provideEvent.liquidity_token),
      apiClient.findValidator(validatorAddress)
    ]);

    if (!denomA) {
      throw new Error(`Denom A not found for coin ${provideEvent.coin_a}`);
    }

    if (!denomB) {
      throw new Error(`Denom B not found for coin ${provideEvent.coin_b}`);
    }

    if (!liquidityDenom) {
      throw new Error(
        `Liquidity denom not found for token ${provideEvent.liquidity_token}`
      );
    }

    const decodedMessage: DecodedMessage = {
      action: "deposit_stake_liquidity",
      data: {
        amountA: provideEvent.coin_a_amount,
        amountB: provideEvent.coin_b_amount,
        denomA,
        denomB,
        from: sender,
        liquidity: provideEvent.liquidity,
        liquidityDenom,
        validator: validatorData,
        validatorAddress
      },
      isIbc: false,
      isOp: false
    };

    return decodedMessage;
  }
};

export const depositStakeLockLiquidityDecoder: MessageDecoder = {
  check: (message: Message, _log: Log) =>
    zMsgDepositStakeLockLiquidity.safeParse(message).success,
  decode: async (
    message: Message,
    log: Log,
    apiClient: ApiClient,
    txResponse: TxResponse
  ) => {
    const parsed = zMsgDepositStakeLockLiquidity.parse(message);
    const { sender } = parsed;

    const provideEvent = findMoveEvent(
      log.events,
      "0x1::dex::ProvideEvent",
      zProvideEvent
    );
    if (!provideEvent) {
      throw new Error("Provide event not found");
    }

    const delegateEvent = log.events.find((event) => event.type === "delegate");

    const validatorAddress = delegateEvent?.attributes.find(
      (attr) => attr.key === "validator"
    )?.value;

    if (!validatorAddress) {
      throw new Error("Validator is missing from the delegate event");
    }

    const depositDelegationEvent = findMoveEvent(
      log.events,
      `${INITIA_VAULT_MODULE_ADDRESS}::lock_staking::DepositDelegationEvent`,
      zDepositDelegationEvent
    );
    if (!depositDelegationEvent) {
      throw new Error("DepositDelegationEvent not found");
    }

    const [denomA, denomB, liquidityDenom, validatorData] = await Promise.all([
      apiClient.findDenomFromMetadataAddr(provideEvent.coin_a),
      apiClient.findDenomFromMetadataAddr(provideEvent.coin_b),
      apiClient.findDenomFromMetadataAddr(provideEvent.liquidity_token),
      apiClient.findValidator(validatorAddress)
    ]);

    if (!denomA) {
      throw new Error(`Denom A not found for coin ${provideEvent.coin_a}`);
    }

    if (!denomB) {
      throw new Error(`Denom B not found for coin ${provideEvent.coin_b}`);
    }

    if (!liquidityDenom) {
      throw new Error(
        `Liquidity denom not found for token ${provideEvent.liquidity_token}`
      );
    }

    const blockTimestamp = txResponse.timestamp.getTime();
    const lockTime =
      parseInt(depositDelegationEvent.release_time) -
      Math.floor(blockTimestamp / 1000);

    const decodedMessage: DecodedMessage = {
      action: "deposit_stake_lock_liquidity",
      data: {
        amountA: provideEvent.coin_a_amount,
        amountB: provideEvent.coin_b_amount,
        denomA,
        denomB,
        from: sender,
        liquidity: provideEvent.liquidity,
        liquidityDenom,
        lockTime,
        releaseTimestamp: depositDelegationEvent.release_time,
        validator: validatorData,
        validatorAddress
      },
      isIbc: false,
      isOp: false
    };

    return decodedMessage;
  }
};

export const extendLiquidityDecoder: MessageDecoder = {
  check: (message: Message, _log: Log) =>
    zMsgExtendLiquidity.safeParse(message).success,
  decode: async (
    message: Message,
    log: Log,
    apiClient: ApiClient,
    _txResponse: TxResponse
  ) => {
    const parsed = zMsgExtendLiquidity.parse(message);
    const { sender } = parsed;

    const withdrawDelegationEvent = findMoveEvent(
      log.events,
      `${INITIA_VAULT_MODULE_ADDRESS}::lock_staking::WithdrawDelegationEvent`,
      zWithdrawDelegationEvent
    );
    if (!withdrawDelegationEvent) {
      throw new Error("WithdrawDelegationEvent not found");
    }

    const depositDelegationEvent = findMoveEvent(
      log.events,
      `${INITIA_VAULT_MODULE_ADDRESS}::lock_staking::DepositDelegationEvent`,
      zDepositDelegationEvent
    );
    if (!depositDelegationEvent) {
      throw new Error("DepositDelegationEvent not found");
    }

    const [liquidityDenom, validatorData] = await Promise.all([
      apiClient.findDenomFromMetadataAddr(depositDelegationEvent.metadata),
      apiClient.findValidator(depositDelegationEvent.validator)
    ]);

    if (!liquidityDenom) {
      throw new Error(
        `Liquidity denom not found for metadata ${depositDelegationEvent.metadata}`
      );
    }

    const decodedMessage: DecodedMessage = {
      action: "extend_liquidity",
      data: {
        from: sender,
        initialReleaseTimestamp: withdrawDelegationEvent.release_time,
        liquidity: depositDelegationEvent.locked_share,
        liquidityDenom,
        newReleaseTimestamp: depositDelegationEvent.release_time,
        validator: validatorData,
        validatorAddress: depositDelegationEvent.validator
      },
      isIbc: false,
      isOp: false
    };

    return decodedMessage;
  }
};

export const mergeLiquidityDecoder: MessageDecoder = {
  check: (message: Message, _log: Log) =>
    zMsgMergeLiquidity.safeParse(message).success,
  decode: async (
    message: Message,
    log: Log,
    apiClient: ApiClient,
    _txResponse: TxResponse
  ) => {
    const parsed = zMsgMergeLiquidity.parse(message);
    const { sender } = parsed;

    const withdrawDelegationEvents = findAllMoveEvents(
      log.events,
      `${INITIA_VAULT_MODULE_ADDRESS}::lock_staking::WithdrawDelegationEvent`,
      zWithdrawDelegationEvent
    );
    if (withdrawDelegationEvents.length === 0) {
      throw new Error("WithdrawDelegationEvent not found");
    }

    const initialPositions = withdrawDelegationEvents.map((event) => ({
      amount: event.locked_share,
      initialReleaseTimestamp: event.release_time
    }));

    const mergedLiquidity = withdrawDelegationEvents.reduce(
      (acc, event) => big(acc).plus(event.locked_share).toFixed(0),
      "0"
    );

    const depositDelegationEvent = findMoveEvent(
      log.events,
      `${INITIA_VAULT_MODULE_ADDRESS}::lock_staking::DepositDelegationEvent`,
      zDepositDelegationEvent
    );
    if (!depositDelegationEvent) {
      throw new Error("DepositDelegationEvent not found");
    }

    const [liquidityDenom, validatorData] = await Promise.all([
      apiClient.findDenomFromMetadataAddr(depositDelegationEvent.metadata),
      apiClient.findValidator(depositDelegationEvent.validator)
    ]);

    if (!liquidityDenom) {
      throw new Error(
        `Liquidity denom not found for metadata ${depositDelegationEvent.metadata}`
      );
    }

    const decodedMessage: DecodedMessage = {
      action: "merge_liquidity",
      data: {
        from: sender,
        initialPositions,
        liquidityDenom,
        mergedLiquidity,
        newReleaseTimestamp: depositDelegationEvent.release_time,
        validator: validatorData,
        validatorAddress: depositDelegationEvent.validator
      },
      isIbc: false,
      isOp: false
    };

    return decodedMessage;
  }
};

export const withdrawLiquidityDecoder: MessageDecoder = {
  check: (message: Message, _log: Log) =>
    zMsgWithdrawLiquidity.safeParse(message).success,
  decode: async (
    message: Message,
    log: Log,
    apiClient: ApiClient,
    _txResponse: TxResponse
  ) => {
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
      apiClient.findDenomFromMetadataAddr(withdrawEvent.liquidity_token)
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
        liquidityDenom
      },
      isIbc: false,
      isOp: false
    };

    return decodedMessage;
  }
};
