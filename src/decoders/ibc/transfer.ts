import { ApiClient } from "@/api";
import { MessageDecoder } from "@/interfaces";
import {
  Log,
  Message,
  zIbcTransferRecvPacket,
  zMsgIbcRecvPacket,
  zMsgIbcTransfer,
} from "@/schema";

export const ibcSendFtDecoder: MessageDecoder = {
  check: (message: Message, _log: Log) => {
    const parsed = zMsgIbcTransfer.safeParse(message);
    return parsed.success && parsed.data.source_port === "transfer";
  },
  decode: async (message: Message, log: Log, _apiClient: ApiClient) => {
    const parsed = zMsgIbcTransfer.parse(message);
    const { receiver, sender, source_channel, source_port, token } = parsed;

    const event = log.events.find((event) => event.type === "send_packet");

    if (!event) throw new Error("IBC Transfer send packet event not found");

    return {
      action: "ibc_ft_send",
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

export const ibcReceiveFtDecoder: MessageDecoder = {
  check: (message: Message, _log: Log) => {
    const parsed = zMsgIbcRecvPacket.safeParse(message);
    return parsed.success && parsed.data.packet.source_port === "transfer";
  },
  decode: async (message: Message, _log: Log, _apiClient: ApiClient) => {
    const parsed = zMsgIbcRecvPacket.parse(message);
    const {
      packet: {
        data,
        destination_channel,
        destination_port,
        source_channel,
        source_port,
      },
    } = parsed;

    const parsedPacket = zIbcTransferRecvPacket.parse(atob(data));

    return {
      action: "ibc_ft_receive",
      data: {
        amount: parsedPacket.amount,
        denom: parsedPacket.denom,
        destinationChannel: destination_channel,
        destinationPort: destination_port,
        receiver: parsedPacket.receiver,
        sender: parsedPacket.sender,
        sourceChannel: source_channel,
        sourcePort: source_port,
      },
      isIbc: true,
      isOp: false,
    };
  },
};
