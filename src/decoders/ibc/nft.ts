import { ApiClient } from "@/api";
import { MessageDecoder } from "@/interfaces";
import {
  Log,
  Message,
  zMsgIbcNftTransferSendPacketEvent,
  zMsgIbcReceiveNft,
  zMsgIbcSendNft,
  zMsgMoveCreateCollectionEvent,
} from "@/schema";
import { denomToHex, findMoveEvent, toHex } from "@/utils";

export const ibcSendNftDecoder: MessageDecoder = {
  check: (message: Message, _log: Log) => {
    const parsed = zMsgIbcSendNft.safeParse(message);
    return parsed.success && parsed.data.source_port === "nft-transfer";
  },
  decode: async (message: Message, log: Log, _apiClient: ApiClient) => {
    const parsed = zMsgIbcSendNft.parse(message);
    const { class_id, receiver, sender, source_channel, source_port } = parsed;

    const event = log.events.find((event) => event.type === "send_packet");

    if (!event) throw new Error("IBC NFT Send packet event not found");

    const dataAttribute = event.attributes.find(
      (attr) => attr.key === "packet_data"
    );

    if (!dataAttribute) {
      throw new Error("IBC NFT Send packet data attribute not found");
    }

    const parsedData = zMsgIbcNftTransferSendPacketEvent.safeParse(
      dataAttribute.value
    );
    if (!parsedData.success) {
      throw new Error("IBC NFT Send packet data attribute not found");
    }

    return {
      action: "ibc_nft_send",
      data: {
        collection_id: denomToHex(class_id),
        collection_uri: parsedData.data.classUri,
        receiver,
        sender,
        source_channel,
        source_port,
        token_ids: parsedData.data.tokenIds,
        token_uris: parsedData.data.tokenUris,
      },
      isIbc: true,
      isOp: false,
    };
  },
};

export const ibcReceiveNftDecoder: MessageDecoder = {
  check: (message: Message, _log: Log) => {
    const parsed = zMsgIbcReceiveNft.safeParse(message);
    return (
      parsed.success && parsed.data.packet.destination_port === "nft-transfer"
    );
  },
  decode: async (message: Message, log: Log, _apiClient: ApiClient) => {
    const parsed = zMsgIbcReceiveNft.parse(message);
    const { destination_channel, destination_port } = parsed.packet;

    const event = log.events.find((event) => event.type === "recv_packet");

    if (!event) throw new Error("IBC NFT Receive packet event not found");

    const dataAttribute = event.attributes.find(
      (attr) => attr.key === "packet_data"
    );

    if (!dataAttribute) {
      throw new Error("IBC NFT Receive packet data attribute not found");
    }

    const parsedData = zMsgIbcNftTransferSendPacketEvent.safeParse(
      dataAttribute.value
    );
    if (!parsedData.success) {
      throw new Error("IBC NFT Receive packet data attribute not found");
    }

    const createCollection = findMoveEvent(
      log.events,
      "0x1::collection::CreateCollectionEvent",
      zMsgMoveCreateCollectionEvent
    );
    let collection_id: string;
    if (createCollection) {
      collection_id = createCollection.collection;
    } else {
      collection_id = parsedData.data.classId.includes("nft-transfer/")
        ? denomToHex(parsedData.data.classId)
        : toHex(parsedData.data.classId);
    }

    return {
      action: "ibc_nft_receive",
      data: {
        collection_id,
        collection_uri: parsedData.data.classUri,
        destination_channel,
        destination_port,
        receiver: parsedData.data.receiver,
        sender: parsedData.data.sender,
        token_ids: parsedData.data.tokenIds,
        token_uris: parsedData.data.tokenUris,
      },
      isIbc: true,
      isOp: false,
    };
  },
};
