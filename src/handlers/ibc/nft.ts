import { findMoveEvent } from "@/handlers/move"
import { MessageDecoder } from "@/interfaces"
import { zMsgIBCNFTTransferSendPacketEventData, zMsgIBCReceiveNFT, zMsgIBCSendNFT, zMsgMoveCreateCollectionEvent } from "@/schema"
import { denomToHex, toHex } from "@/utils/address-converter"

export const ibcSendNFTDecoder: MessageDecoder = {
  check: (message, _log) => {
    const parsed = zMsgIBCSendNFT.safeParse(message)
    if (!parsed.success) {
      return false
    }

    return parsed.data.source_port === "nft-transfer"
  },
  decode: (message, log) => {
    const parsed = zMsgIBCSendNFT.parse(message)
    const { class_id, receiver, sender, source_channel, source_port } = parsed

    const event = log.events.find((event) => event.type === "send_packet")

    if (!event) throw new Error("IBC NFT Send packet event not found")

    const dataAttribute = event.attributes.find(
      (attr) => attr.key === "packet_data"
    )

    if (!dataAttribute) {
      throw new Error("IBC NFT Send packet data attribute not found")
    }

    const parsedData = zMsgIBCNFTTransferSendPacketEventData.safeParse(
      JSON.parse(dataAttribute.value)
    )
    if (!parsedData.success) {
      throw new Error("IBC NFT Send packet data attribute not found")
    }

    return {
      balanceChanges: {
        ft: {},
        object: {},
      },
      decodedMessage: {
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
      },
    }
  },
}

export const ibcReceiveNFTDecoder: MessageDecoder = {
  check: (message, _log) => {
    const parsed = zMsgIBCReceiveNFT.safeParse(message)
    if (!parsed.success) {
      return false
    }
    return parsed.data.packet.destination_port === "nft-transfer"
  },
  decode: (message, log) => {
    const parsed = zMsgIBCReceiveNFT.parse(message)
    const { destination_channel, destination_port } = parsed.packet

    const event = log.events.find((event) => event.type === "recv_packet")

    if (!event) throw new Error("IBC NFT Receive packet event not found")

    const dataAttribute = event.attributes.find(
      (attr) => attr.key === "packet_data"
    )

    if (!dataAttribute) {
      throw new Error("IBC NFT Receive packet data attribute not found")
    }

    const parsedData = zMsgIBCNFTTransferSendPacketEventData.safeParse(
      JSON.parse(dataAttribute.value)
    )
    if (!parsedData.success) {
      throw new Error("IBC NFT Receive packet data attribute not found")
    }

    // Use findMoveEvent to get the actual collection_id from CreateCollectionEvent
    const createCollection = findMoveEvent(log.events, "0x1::collection::CreateCollectionEvent", zMsgMoveCreateCollectionEvent)
    let collection_id: string
    if (createCollection) {
      collection_id = createCollection.collection
    } else {
      collection_id = parsedData.data.classId.includes('nft-transfer/') ? denomToHex(parsedData.data.classId) : toHex(parsedData.data.classId)
    }

    return {
      balanceChanges: {
        ft: {},
        object: {},
      },
      decodedMessage: {
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
      },
    }
  },
}
