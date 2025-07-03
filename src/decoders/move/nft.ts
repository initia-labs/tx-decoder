import { ApiClient } from "@/api";
import { MessageDecoder } from "@/interfaces";
import {
  Log,
  Message,
  zMintNftEvent,
  zMsgMoveExecute,
  zMsgMoveNftBurnEvent,
  zMsgMoveNftMint,
  zMsgMoveObjectCreateEvent,
} from "@/schema";
import { findMoveEvent, toBech32 } from "@/utils";

export const nftMintDecoder: MessageDecoder = {
  check: (_message: Message, log: Log) =>
    !!findMoveEvent(log.events, "0x1::collection::MintEvent", zMintNftEvent),
  decode: async (message: Message, log: Log, _apiClient: ApiClient) => {
    const parsed = zMsgMoveNftMint.parse(message);
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
        collectionAddress: toBech32(mintEvent.collection),
        from: parsed.sender,
        tokenAddress: toBech32(mintEvent.nft),
        tokenId: mintEvent.token_id,
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
  decode: async (message: Message, log: Log, _apiClient: ApiClient) => {
    const parsed = zMsgMoveExecute.parse(message);
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
        collectionAddress: toBech32(burnEvent.collection),
        from: parsed.sender,
        tokenAddress: toBech32(burnEvent.nft),
        tokenId: burnEvent.token_id,
      },
      isIbc: false,
      isOp: false,
    };
  },
};
