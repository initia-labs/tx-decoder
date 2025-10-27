import {
  EthereumRpcPayload,
  TxResponse,
  zEthereumRpcPayload,
  zTxResponse
} from "./schema";
import { attachTxLogs } from "./utils";

export function validateAndPrepareEthereumPayload(
  payload: unknown
): EthereumRpcPayload {
  const parsed = zEthereumRpcPayload.safeParse(payload);
  if (!parsed.success) {
    throw new Error(`Invalid EthereumRpcPayload: ${parsed.error.message}`);
  }

  return parsed.data;
}

export function validateAndPrepareTx(tx: unknown): TxResponse {
  const parsed = zTxResponse.safeParse(tx);
  if (!parsed.success) {
    throw new Error(`Invalid txResponse: ${parsed.error.message}`);
  }

  return attachTxLogs(parsed.data);
}

export function validateTxResponse(txResponse: TxResponse): void {
  if (
    txResponse.code === 0 &&
    txResponse.logs.length !== txResponse.tx.body.messages.length
  ) {
    throw new Error(
      `Invalid tx response: ${txResponse.logs.length} logs found for ${txResponse.tx.body.messages.length} messages`
    );
  }
}
