import { MessageHandler, MoveFunctionHandler } from "@/interfaces";
import { zMsgMoveExecute } from "@/schema";

import { handleDexSwap } from "./move/swap";

const moveFunctionRegistry = new Map<string, MoveFunctionHandler>();

function getRegistryKey(
  address: string,
  moduleName: string,
  functionName: string
): string {
  return `${address}::${moduleName}::${functionName}`;
}

moveFunctionRegistry.set(
  getRegistryKey("0x1", "dex", "swap_script"),
  handleDexSwap
);

export const handleMsgExecute: MessageHandler = (message, log) => {
  const parsed = zMsgMoveExecute.safeParse(message);

  if (!parsed.success) {
    throw new Error("Invalid move execute message");
  }

  const { function_name, module_address, module_name } = parsed.data;

  const key = getRegistryKey(module_address, module_name, function_name);
  const subHandler = moveFunctionRegistry.get(key);

  if (subHandler) {
    return subHandler(parsed.data, log);
  }

  // fallback to not supported case
  return {
    balanceChanges: {},
    decodedMessage: {
      action: "not_supported",
      data: { msgType: message["@type"] },
      isIbc: false,
      isOp: false,
    },
  };
};
