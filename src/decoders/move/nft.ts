import { ApiClient } from "@/api";
import { MessageDecoder } from "@/interfaces";
import {
  Log,
  Message,
  zMintNftEvent,
  zMsgMoveNftBurnEvent,
  zMsgMoveObjectCreateEvent,
  zMsgMoveObjectTransfer,
  zMsgMoveObjectTransferEvent,
} from "@/schema";
import { findMoveEvent, toBech32 } from "@/utils";

export const nftMintDecoder: MessageDecoder = {
  check: (_message: Message, log: Log) =>
    !!findMoveEvent(log.events, "0x1::collection::MintEvent", zMintNftEvent),
  decode: async (_message: Message, log: Log, _apiClient: ApiClient) => {
    const mintEvent = findMoveEvent(
      log.events,
      "0x1::collection::MintEvent",
      zMintNftEvent
    );
    if (!mintEvent) {
      throw new Error("NFT Mint event not found");
    }

    const objectCreateEvent = findMoveEvent(
      log.events,
      "0x1::object::CreateEvent",
      zMsgMoveObjectCreateEvent
    );
    if (!objectCreateEvent) {
      throw new Error("Object Create event not found");
    }

    return {
      action: "nft_mint",
      data: {
        collectionAddress: mintEvent.collection,
        tokenAddress: mintEvent.nft,
        tokenId: mintEvent.token_id,
      },
      isIbc: false,
      isOp: false,
    };
  },
};

export const objectTransferDecoder: MessageDecoder = {
  check: (message: Message, log: Log) => {
    const parsed = zMsgMoveObjectTransfer.safeParse(message);
    if (!parsed.success) {
      return false;
    }

    const transferEvent = findMoveEvent(
      log.events,
      "0x1::object::TransferEvent",
      zMsgMoveObjectTransferEvent
    );
    if (!transferEvent) {
      return false;
    }

    return true;
  },
  decode: async (_message: Message, log: Log, _apiClient: ApiClient) => {
    const transferEvent = findMoveEvent(
      log.events,
      "0x1::object::TransferEvent",
      zMsgMoveObjectTransferEvent
    );
    if (!transferEvent) {
      throw new Error("Object Transfer event not found");
    }

    return {
      action: "object_transfer",
      data: {
        from: toBech32(transferEvent.from),
        object: transferEvent.object,
        to: toBech32(transferEvent.to),
      },
      isIbc: false,
      isOp: false,
    };
  },
};

export const nftBurnDecoder: MessageDecoder = {
  check: (_message: Message, log: Log) =>
    !!findMoveEvent(
      log.events,
      "0x1::collection::BurnEvent",
      zMsgMoveNftBurnEvent
    ),
  decode: async (_message: Message, log: Log, _apiClient: ApiClient) => {
    const burnEvent = findMoveEvent(
      log.events,
      "0x1::collection::BurnEvent",
      zMsgMoveNftBurnEvent
    );
    if (!burnEvent) {
      throw new Error("NFT Burn event not found");
    }

    return {
      action: "nft_burn",
      data: {
        collectionAddress: burnEvent.collection,
        tokenAddress: burnEvent.nft,
        tokenId: burnEvent.token_id,
      },
      isIbc: false,
      isOp: false,
    };
  },
};
