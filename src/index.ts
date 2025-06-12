import { createHandlerRegistry, decodeTransaction } from "./decoder";
import { DecodedTx } from "./interfaces";
import { zTxResponse } from "./schema";

export function decodeTx(txResponse: unknown): DecodedTx {
  const parsed = zTxResponse.safeParse(txResponse);

  if (!parsed.success) {
    throw new Error(`Invalid txResponse: ${parsed.error.message}`);
  }

  const registry = createHandlerRegistry();

  const decodedTx = decodeTransaction(parsed.data, registry);
  if (!decodedTx) {
    throw new Error("Failed to decode transaction");
  }

  return decodedTx;
}
