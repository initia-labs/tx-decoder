import { ApiClient } from "@/api";
import { INITIA_VAULT_MODULE_ADDRESS } from "@/constants";
import { DecodedMessage, MessageDecoder } from "@/interfaces";
import {
  Log,
  Message,
  TxResponse,
  zDepositDelegationEvent,
  zMsgDepositStakeLockLiquidity,
  zProvideEvent
} from "@/schema";
import { findMoveEvent } from "@/utils";

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

    // Find the delegate event to extract validator information
    const delegateEvent = log.events.find((event) => event.type === "delegate");

    const validatorAddress = delegateEvent?.attributes.find(
      (attr) => attr.key === "validator"
    )?.value;

    if (!validatorAddress) {
      throw new Error("Validator is missing from the delegate event");
    }

    // Find the DepositDelegationEvent to extract release time
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
