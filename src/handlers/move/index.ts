import { SUPPORTED_MESSAGE_TYPES } from "@/message-types";
import { Message } from "@/schema";

export const isMoveMessage = (message: Message) =>
  message["@type"] === SUPPORTED_MESSAGE_TYPES.MsgExecute ||
  message["@type"] === SUPPORTED_MESSAGE_TYPES.MsgExecuteJson;
