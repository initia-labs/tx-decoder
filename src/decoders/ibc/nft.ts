import { ApiClient } from "@/api";
import { MessageDecoder } from "@/interfaces";
import {
  Log,
  Message,
  zMsgIbcNftTransferSendPacketEvent,
  zMsgIbcRecvPacket,
  zMsgIbcSendNft,
  zMsgMoveCreateCollectionEvent,
  zMsgMoveObjectTransferEvent,
} from "@/schema";
import { denomToHex, findMoveEvent, toBech32, toHex } from "@/utils";

export const ibcSendNftDecoder: MessageDecoder = {
  check: (message: Message, _log: Log) => {
    const parsed = zMsgIbcSendNft.safeParse(message);
    return parsed.success && parsed.data.source_port === "nft-transfer";
  },
  decode: async (message: Message, log: Log, apiClient: ApiClient) => {
    const parsed = zMsgIbcSendNft.parse(message);
    const {
      class_id,
      receiver,
      sender,
      source_channel,
      source_port,
      timeout_height,
      timeout_timestamp,
    } = parsed;

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

    const collection = await apiClient.findCollectionFromCollectionAddr(
      toBech32(denomToHex(class_id))
    );
    if (!collection) {
      throw new Error(
        `Collection data not found for collection address ${toBech32(
          denomToHex(class_id)
        )}`
      );
    }

    const srcChainId = await apiClient.getChainId();

    const dstPort = event.attributes.find(
      (attr) => attr.key === "packet_dst_port"
    )?.value;
    if (!dstPort) {
      throw new Error("IBC NFT Send packet dst port attribute not found");
    }

    const dstChannel = event.attributes.find(
      (attr) => attr.key === "packet_dst_channel"
    )?.value;
    if (!dstChannel) {
      throw new Error("IBC NFT Send packet dst channel attribute not found");
    }

    const dstChainId = await apiClient.findIbcCounterPartyChainId(
      srcChainId,
      source_port,
      source_channel
    );
    if (!dstChainId) {
      throw new Error("IBC NFT Send packet dst chain id not found");
    }

    const tokenAddress = findMoveEvent(
      log.events,
      "0x1::object::TransferEvent",
      zMsgMoveObjectTransferEvent
    )?.object;
    if (!tokenAddress) {
      throw new Error("IBC NFT Send packet token address not found");
    }

    return {
      action: "ibc_nft_send",
      data: {
        collection: {
          creator: toBech32(collection.data.creator),
          description: collection.data.description,
          name: collection.data.name,
          uri: collection.data.uri || parsedData.data.classUri,
        },
        collectionId: toBech32(denomToHex(class_id)),
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
        tokenAddress: toBech32(tokenAddress),
        tokenIds: parsedData.data.tokenIds,
        tokenUris: parsedData.data.tokenUris,
      },
      isIbc: true,
      isOp: false,
    };
  },
};

export const ibcReceiveNftDecoder: MessageDecoder = {
  check: (message: Message, _log: Log) => {
    const parsed = zMsgIbcRecvPacket.safeParse(message);
    return (
      parsed.success && parsed.data.packet.destination_port === "nft-transfer"
    );
  },
  decode: async (message: Message, log: Log, apiClient: ApiClient) => {
    const parsed = zMsgIbcRecvPacket.parse(message);
    const {
      destination_channel,
      destination_port,
      timeout_height,
      timeout_timestamp,
    } = parsed.packet;

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

    const collection = await apiClient.findCollectionFromCollectionAddr(
      collection_id
    );
    if (!collection) {
      throw new Error(
        `Collection data not found for collection address ${collection_id}`
      );
    }

    const dstChainId = await apiClient.getChainId();

    const srcPort = event.attributes.find(
      (attr) => attr.key === "packet_src_port"
    )?.value;
    if (!srcPort) {
      throw new Error("IBC NFT Receive packet src port attribute not found");
    }

    const srcChannel = event.attributes.find(
      (attr) => attr.key === "packet_src_channel"
    )?.value;
    if (!srcChannel) {
      throw new Error("IBC NFT Receive packet src channel attribute not found");
    }

    const srcChainId = await apiClient.findIbcCounterPartyChainId(
      dstChainId,
      destination_port,
      destination_channel
    );
    if (!srcChainId) {
      throw new Error("IBC NFT Receive packet src chain id not found");
    }

    const tokenAddress = findMoveEvent(
      log.events,
      "0x1::object::TransferEvent",
      zMsgMoveObjectTransferEvent
    )?.object;
    if (!tokenAddress) {
      throw new Error("IBC NFT Receive packet token address not found");
    }

    return {
      action: "ibc_nft_receive",
      data: {
        collection: {
          creator: toBech32(collection.data.creator),
          description: collection.data.description,
          name: collection.data.name,
          uri: collection.data.uri || parsedData.data.classUri,
        },
        collectionId: toBech32(collection_id),
        dstChainId,
        dstChannel: destination_channel,
        dstPort: destination_port,
        receiver: parsedData.data.receiver,
        sender: parsedData.data.sender,
        srcChainId,
        srcChannel,
        srcPort,
        timeoutHeight: timeout_height,
        timeoutTimestamp: timeout_timestamp,
        tokenAddress: toBech32(tokenAddress),
        tokenIds: parsedData.data.tokenIds,
        tokenUris: parsedData.data.tokenUris,
      },
      isIbc: true,
      isOp: false,
    };
  },
};
