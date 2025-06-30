import { ApiClient } from "@/api";
import { MessageDecoder } from "@/interfaces";
import {
  Log,
  Message,
  zMsgIbcTransfer,
  zMsgIbcTransferSendPacketEvent,
} from "@/schema";

export const ibcTransferDecoder: MessageDecoder = {
  check: (message: Message, _log: Log) => {
    const parsed = zMsgIbcTransfer.safeParse(message);
    return parsed.success && parsed.data.source_port === "transfer";
  },
  decode: async (message: Message, log: Log, _apiClient: ApiClient) => {
    const parsed = zMsgIbcTransfer.parse(message);
    const { receiver, sender, source_channel, source_port, token } = parsed;

    const event = log.events.find((event) => event.type === "send_packet");

    if (!event) throw new Error("IBC Transfer send packet event not found");

    const dataAttribute = event.attributes.find(
      (attr) => attr.key === "packet_data"
    );

    if (!dataAttribute) {
      throw new Error("IBC Transfer send packet data attribute not found");
    }

    const parsedData = zMsgIbcTransferSendPacketEvent.safeParse(
      dataAttribute.value
    );
    if (!parsedData.success) {
      throw new Error("IBC Transfer send packet data attribute not found");
    }

    return {
      action: "ibc_transfer",
      data: {
        amount: token.amount,
        denom: token.denom,
        destinationChannel:
          event.attributes.find((attr) => attr.key === "packet_dst_channel")
            ?.value ?? "",
        destinationPort:
          event.attributes.find((attr) => attr.key === "packet_dst_port")
            ?.value ?? "",
        receiver,
        sender,
        sourceChannel: source_channel,
        sourcePort: source_port,
      },
      isIbc: true,
      isOp: false,
    };
  },
};
