import { ApiClient } from "@/api";
import { MessageDecoder, VmType } from "@/interfaces";
import {
  Log,
  Message,
  TxResponse,
  zMsgIbcNftTransferSendPacketEvent,
  zMsgIbcRecvPacket,
  zMsgIbcSendNft
} from "@/schema";

export const ibcSendNftWasmDecoder: MessageDecoder = {
  check: (message: Message, _log: Log, vm: VmType) => {
    const parsed = zMsgIbcSendNft.safeParse(message);
    return (
      parsed.success &&
      parsed.data.source_port === "nft-transfer" &&
      vm === "wasm"
    );
  },
  decode: async (
    message: Message,
    log: Log,
    apiClient: ApiClient,
    _txResponse: TxResponse,
    _vm: VmType
  ) => {
    const parsed = zMsgIbcSendNft.parse(message);
    const {
      class_id,
      receiver,
      sender,
      source_channel,
      source_port,
      timeout_height,
      timeout_timestamp
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

    const sequence = event.attributes.find(
      (attr) => attr.key === "packet_sequence"
    )?.value;
    if (!sequence) throw new Error(`IBC NFT Transfer sequence not found`);

    // For WASM: Look for wasm event with transfer_nft action
    const wasmEvent = log.events.find(
      (event) =>
        event.type === "wasm" &&
        event.attributes.find(
          (attr) => attr.key === "action" && attr.value === "transfer_nft"
        )
    );
    if (!wasmEvent) {
      throw new Error("IBC NFT Send WASM transfer_nft event not found");
    }

    const contractAddress = wasmEvent.attributes.find(
      (attr) => attr.key === "_contract_address"
    )?.value;
    if (!contractAddress) {
      throw new Error("IBC NFT Send contract address not found");
    }

    const tokenId = wasmEvent.attributes.find(
      (attr) => attr.key === "token_id"
    )?.value;
    if (!tokenId) {
      throw new Error("IBC NFT Send token id not found");
    }

    return {
      action: "ibc_nft_send_wasm",
      data: {
        classId: class_id,
        contractAddress,
        dstChainId,
        dstChannel,
        dstPort,
        receiver,
        sender,
        sequence,
        srcChainId,
        srcChannel: source_channel,
        srcPort: source_port,
        timeoutHeight: timeout_height,
        timeoutTimestamp: timeout_timestamp,
        tokenIds: parsedData.data.tokenIds,
        tokenUris: parsedData.data.tokenUris
      },
      isIbc: true,
      isOp: false
    };
  }
};

export const ibcReceiveNftWasmDecoder: MessageDecoder = {
  check: (message: Message, _log: Log, vm: VmType) => {
    const parsed = zMsgIbcRecvPacket.safeParse(message);
    if (!parsed.success || vm !== "wasm") return false;

    const destPort = parsed.data.packet.destination_port;
    // Accept both "nft-transfer" and WASM port format "wasm.{contract_address}"
    return destPort === "nft-transfer" || destPort.startsWith("wasm.");
  },
  decode: async (
    message: Message,
    log: Log,
    apiClient: ApiClient,
    _txResponse: TxResponse,
    _vm: VmType
  ) => {
    const parsed = zMsgIbcRecvPacket.parse(message);
    const {
      destination_channel,
      destination_port,
      sequence,
      timeout_height,
      timeout_timestamp
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

    // For WASM: Look for wasm event with mint or transfer_nft action (for receiving NFT)
    // Can be either "mint" (new NFT) or "transfer_nft" (existing NFT being transferred)
    const wasmEvent = log.events.find(
      (event) =>
        event.type === "wasm" &&
        event.attributes.find(
          (attr) =>
            attr.key === "action" &&
            (attr.value === "mint" || attr.value === "transfer_nft")
        )
    );
    if (!wasmEvent) {
      throw new Error("IBC NFT Receive WASM mint/transfer_nft event not found");
    }

    const contractAddress = wasmEvent.attributes.find(
      (attr) => attr.key === "_contract_address"
    )?.value;
    if (!contractAddress) {
      throw new Error("IBC NFT Receive contract address not found");
    }

    const tokenId = wasmEvent.attributes.find(
      (attr) => attr.key === "token_id"
    )?.value;
    if (!tokenId) {
      throw new Error("IBC NFT Receive token id not found");
    }

    return {
      action: "ibc_nft_receive_wasm",
      data: {
        classId: parsedData.data.classId,
        contractAddress,
        dstChainId,
        dstChannel: destination_channel,
        dstPort: destination_port,
        receiver: parsedData.data.receiver,
        sender: parsedData.data.sender,
        sequence,
        srcChainId,
        srcChannel,
        srcPort,
        timeoutHeight: timeout_height,
        timeoutTimestamp: timeout_timestamp,
        tokenIds: parsedData.data.tokenIds,
        tokenUris: parsedData.data.tokenUris
      },
      isIbc: true,
      isOp: false
    };
  }
};
