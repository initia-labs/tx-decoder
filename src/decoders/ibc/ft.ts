import { fromBase64 } from "@cosmjs/encoding";

import { ApiClient } from "@/api";
import { MessageDecoder } from "@/interfaces";
import {
  Log,
  Message,
  zIbcTransferRecvPacket,
  zMsgIbcRecvPacket,
  zMsgIbcTransfer,
} from "@/schema";
import { getIbcDenom } from "@/utils";

export const ibcSendFtDecoder: MessageDecoder = {
  check: (message: Message, _log: Log) => {
    const parsed = zMsgIbcTransfer.safeParse(message);
    return parsed.success && parsed.data.source_port === "transfer";
  },
  decode: async (message: Message, log: Log, apiClient: ApiClient) => {
    const parsed = zMsgIbcTransfer.parse(message);
    const {
      receiver,
      sender,
      source_channel,
      source_port,
      timeout_height,
      timeout_timestamp,
      token,
    } = parsed;

    const event = log.events.find((event) => event.type === "send_packet");

    if (!event) throw new Error("IBC Transfer send packet event not found");

    const dstChannel = event.attributes.find(
      (attr) => attr.key === "packet_dst_channel"
    )?.value;
    if (!dstChannel) throw new Error(`IBC Transfer dst channel not found`);

    const dstPort = event.attributes.find(
      (attr) => attr.key === "packet_dst_port"
    )?.value;
    if (!dstPort) throw new Error(`IBC Transfer dst port not found`);

    const srcChainId = await apiClient.getChainId();

    const dstChainId = await apiClient.findIbcCounterPartyChainId(
      srcChainId,
      source_port,
      source_channel
    );
    if (!dstChainId) throw new Error(`IBC Transfer dst chain id not found`);

    return {
      action: "ibc_ft_send",
      data: {
        amount: token.amount,
        denom: token.denom,
        dstChainId,
        dstChannel,
        dstPort,
        receiver,
        sender,
        srcChainId,
        srcChannel: source_channel,
        srcPort: source_port,
        timeoutHeight: timeout_height,
        timeoutTimestamp: timeout_timestamp,
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
  decode: async (message: Message, _log: Log, apiClient: ApiClient) => {
    const parsed = zMsgIbcRecvPacket.parse(message);
    const {
      packet: {
        data,
        destination_channel,
        destination_port,
        source_channel,
        source_port,
        timeout_height,
        timeout_timestamp,
      },
    } = parsed;

    const parsedPacket = zIbcTransferRecvPacket.parse(
      fromBase64(data).toString()
    );

    const dstChainId = await apiClient.getChainId();

    const srcChainId = await apiClient.findIbcCounterPartyChainId(
      dstChainId,
      destination_port,
      destination_channel
    );
    if (!srcChainId) throw new Error(`IBC Transfer src chain id not found`);

    const denom = getIbcDenom(destination_channel, parsedPacket.denom);

    return {
      action: "ibc_ft_receive",
      data: {
        amount: parsedPacket.amount,
        denom,
        dstChainId,
        dstChannel: destination_channel,
        dstPort: destination_port,
        receiver: parsedPacket.receiver,
        sender: parsedPacket.sender,
        srcChainId,
        srcChannel: source_channel,
        srcPort: source_port,
        timeoutHeight: timeout_height,
        timeoutTimestamp: timeout_timestamp,
      },
      isIbc: true,
      isOp: false,
    };
  },
};
