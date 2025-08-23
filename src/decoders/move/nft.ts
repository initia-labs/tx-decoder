import { InitiaAddress } from "@initia/utils";

import { ApiClient } from "@/api";
import { MessageDecoder } from "@/interfaces";
import {
  Log,
  Message,
  TxResponse,
  zMintNftEvent,
  zMsgMoveExecute,
  zMsgMoveNftBurnEvent,
  zMsgMoveNftMint,
  zMsgMoveObjectCreateEvent
} from "@/schema";
import { findMoveEvent } from "@/utils";

export const nftMintDecoder: MessageDecoder = {
  check: (_message: Message, log: Log) =>
    !!findMoveEvent(log.events, "0x1::collection::MintEvent", zMintNftEvent),
  decode: async (
    message: Message,
    log: Log,
    apiClient: ApiClient,
    _txResponse: TxResponse
  ) => {
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
      throw new Error(
        `Object Create event not found for token address ${mintEvent.nft}`
      );
    }

    const collection = await apiClient.findCollectionFromCollectionAddr(
      mintEvent.collection
    );
    if (!collection) {
      throw new Error(
        `Collection data not found for collection address ${mintEvent.collection}`
      );
    }

    const nftData = await apiClient.findNftFromTokenAddr(mintEvent.nft);

    return {
      action: "nft_mint",
      data: {
        collection: {
          creator: InitiaAddress(collection.data.creator).bech32,
          description: collection.data.description,
          name: collection.data.name,
          uri: collection.data.uri
        },
        collectionAddress: InitiaAddress(mintEvent.collection).bech32,
        from: parsed.sender,
        tokenAddress: InitiaAddress(mintEvent.nft).bech32,
        tokenId: mintEvent.token_id,
        // in case of burn, the tokenUri is not available
        tokenUri: nftData?.data.uri
      },
      isIbc: false,
      isOp: false
    };
  }
};

export const nftBurnDecoder: MessageDecoder = {
  check: (_message: Message, log: Log) =>
    !!findMoveEvent(
      log.events,
      "0x1::collection::BurnEvent",
      zMsgMoveNftBurnEvent
    ),
  decode: async (
    message: Message,
    log: Log,
    apiClient: ApiClient,
    _txResponse: TxResponse
  ) => {
    const parsed = zMsgMoveExecute.parse(message);
    const burnEvent = findMoveEvent(
      log.events,
      "0x1::collection::BurnEvent",
      zMsgMoveNftBurnEvent
    );
    if (!burnEvent) {
      throw new Error("NFT Burn event not found");
    }

    const collection = await apiClient.findCollectionFromCollectionAddr(
      burnEvent.collection
    );
    if (!collection) {
      throw new Error(
        `Collection data not found for collection address ${burnEvent.collection}`
      );
    }

    return {
      action: "nft_burn",
      data: {
        collection: {
          creator: InitiaAddress(collection.data.creator).bech32,
          description: collection.data.description,
          name: collection.data.name,
          uri: collection.data.uri
        },
        collectionAddress: InitiaAddress(burnEvent.collection).bech32,
        from: parsed.sender,
        tokenAddress: InitiaAddress(burnEvent.nft).bech32,
        tokenId: burnEvent.token_id
      },
      isIbc: false,
      isOp: false
    };
  }
};
