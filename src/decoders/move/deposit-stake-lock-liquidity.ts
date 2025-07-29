import { ApiClient } from "@/api";
import { DecodedMessage, MessageDecoder } from "@/interfaces";
import {
  Log,
  Message,
  zDepositDelegationEvent,
  zMsgMoveExecute,
  zProvideEvent,
} from "@/schema";
import { findMoveEvent } from "@/utils";

const LOCK_STAKING_MODULE_ADDRESS =
  "0x3a886b32a802582f2e446e74d4a24d1d7ed01adf46d2a8f65c5723887e708789";

export const depositStakeLockLiquidityDecoder: MessageDecoder = {
  check: (message: Message, _log: Log) => {
    if (!zMsgMoveExecute.safeParse(message).success) return false;

    const parsed = zMsgMoveExecute.parse(message);
    return (
      parsed.function_name === "unproportional_provide_lock_stake" &&
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

    // Find the delegate event to extract validator information
    const delegateEvent = log.events.find((event) => event.type === "delegate");

    let validatorAddress = "";
    if (delegateEvent) {
      const validatorAttr = delegateEvent.attributes.find(
        (attr) => attr.key === "validator"
      );
      if (validatorAttr) {
        validatorAddress = validatorAttr.value;
      }
    }

    // Find the DepositDelegationEvent to extract release time
    const depositDelegationEvent = findMoveEvent(
      log.events,
      `${LOCK_STAKING_MODULE_ADDRESS}::lock_staking::DepositDelegationEvent`,
      zDepositDelegationEvent
    );
    if (!depositDelegationEvent) {
      throw new Error("DepositDelegationEvent not found");
    }

    const [denomA, denomB, liquidityDenom, validatorData] = await Promise.all([
      apiClient.findDenomFromMetadataAddr(provideEvent.coin_a),
      apiClient.findDenomFromMetadataAddr(provideEvent.coin_b),
      apiClient.findDenomFromMetadataAddr(provideEvent.liquidity_token),
      validatorAddress ? apiClient.findValidator(validatorAddress) : null,
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
      action: "deposit_stake_lock_liquidity",
      data: {
        amountA: provideEvent.coin_a_amount,
        amountB: provideEvent.coin_b_amount,
        denomA,
        denomB,
        from: sender,
        liquidity: provideEvent.liquidity,
        liquidityDenom,
        releaseTimestamp: depositDelegationEvent.release_time,
        validator: validatorData,
        validatorAddress,
      },
      isIbc: false,
      isOp: false,
    };

    return decodedMessage;
  },
};
