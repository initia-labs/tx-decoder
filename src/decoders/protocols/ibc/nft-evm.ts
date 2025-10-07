import { InitiaAddress } from "@initia/utils";

import { ApiClient } from "@/api";
import { MessageDecoder, VmType } from "@/interfaces";
import {
  Log,
  Message,
  TxResponse,
  zMsgIbcNftTransferSendPacketEvent,
  zMsgIbcSendNft
} from "@/schema";

export const ibcSendNftEvmDecoder: MessageDecoder = {
  check: (message: Message, _log: Log, vm: VmType) => {
    const parsed = zMsgIbcSendNft.safeParse(message);

    return (
      parsed.success &&
      parsed.data.source_port === "nft-transfer" &&
      vm === "evm"
    );
  },
  decode: async (
    message: Message,
    log: Log,
    apiClient: ApiClient,
    _txResponse: TxResponse
  ) => {
    const parsed = zMsgIbcSendNft.parse(message);
    const {
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

    // For EVM: Look for erc721_burned event
    const erc721BurnedEvent = log.events.find(
      (event) => event.type === "erc721_burned"
    );
    if (!erc721BurnedEvent) {
      throw new Error("IBC NFT Send ERC721 burned event not found");
    }

    const contract = erc721BurnedEvent.attributes.find(
      (attr) => attr.key === "contract"
    )?.value;
    if (!contract) {
      throw new Error("IBC NFT Send contract address not found");
    }

    const tokenId = erc721BurnedEvent.attributes.find(
      (attr) => attr.key === "token_id"
    )?.value;
    if (!tokenId) {
      throw new Error("IBC NFT Send token id not found");
    }

    return {
      action: "ibc_nft_send_evm",
      data: {
        contractAddress: InitiaAddress(contract).bech32,
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
        tokenIds: [tokenId],
        tokenUris: parsedData.data.tokenUris
      },
      isIbc: true,
      isOp: false
    };
  }
};
