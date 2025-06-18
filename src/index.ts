import { createHandlerRegistry, decodeTransaction } from "./decoder";
import { DecodedTx } from "./interfaces";
import { zTxResponse } from "./schema";
import { attachTxLogs } from "./utils";

export function decodeTx(input: unknown): DecodedTx {
  const parsed = zTxResponse.safeParse(input);

  if (!parsed.success) {
    throw new Error(`Invalid txResponse: ${parsed.error.message}`);
  }

  const txResponse = attachTxLogs(parsed.data);

  const registry = createHandlerRegistry();

  const decodedTx = decodeTransaction(txResponse, registry);
  if (!decodedTx) {
    throw new Error("Failed to decode transaction");
  }

  return decodedTx;
}
