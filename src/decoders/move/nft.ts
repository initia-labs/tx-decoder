import { MessageDecoder } from "@/interfaces";
import {
  zMintNFTEvent,
  zMsgMoveExecute,
  zMsgMoveNFTBurnEvent,
  zMsgMoveObjectCreateEvent,
  zMsgMoveObjectTransfer,
  zMsgMoveObjectTransferEvent,
} from "@/schema";
import { findMoveEvent, toBech32 } from "@/utils";

export const nftMintDecoder: MessageDecoder = {
  check: (_message, log) =>
    !!findMoveEvent(log.events, "0x1::collection::MintEvent", zMintNFTEvent),
  decode: (_message, log) => {
    const mintEvent = findMoveEvent(log.events, "0x1::collection::MintEvent", zMintNFTEvent);
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
      balanceChanges: {
        ft: {},
        object: {
          [toBech32(objectCreateEvent.owner)]: {
            [mintEvent.nft]: `1`,
          },
        },
      },
      decodedMessage: {
        action: "nft_mint",
        data: {
          collection_address: mintEvent.collection,
          token_address: mintEvent.nft,
          token_id: mintEvent.token_id,
        },
        isIbc: false,
        isOp: false,
      },
    };
  },
};

export const objectTransferDecoder: MessageDecoder = {
  check: (message, log) => {
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
  decode: (_message, log) => {
    const transferEvent = findMoveEvent(
      log.events,
      "0x1::object::TransferEvent",
      zMsgMoveObjectTransferEvent
    );
    if (!transferEvent) {
      throw new Error("Object Transfer event not found");
    }

    return {
      balanceChanges: {
        ft: {},
        object: {
          [toBech32(transferEvent.from)]: {
            [transferEvent.object]: `-1`,
          },
          [toBech32(transferEvent.to)]: {
            [transferEvent.object]: `1`,
          },
        },
      },
      decodedMessage: {
        action: "object_transfer",
        data: {
          from: toBech32(transferEvent.from),
          object: transferEvent.object,
          to: toBech32(transferEvent.to),
        },
        isIbc: false,
        isOp: false,
      },
    };
  },
};

export const nftBurnDecoder: MessageDecoder = {
  check: (_message, log) =>
    !!findMoveEvent(log.events, "0x1::collection::BurnEvent", zMsgMoveNFTBurnEvent),
  decode: (_message, log) => {
    const parsed = zMsgMoveExecute.parse(_message);
    const { sender } = parsed;

    const burnEvent = findMoveEvent(log.events, "0x1::collection::BurnEvent", zMsgMoveNFTBurnEvent);
    if (!burnEvent) {
      throw new Error("NFT Burn event not found");
    }

    return {
      balanceChanges: {
        ft: {},
        object: {
          [sender]: {
            [burnEvent.nft]: `-1`,
          },
        },
      },
      decodedMessage: {
        action: "nft_burn",
        data: {
          collection_address: burnEvent.collection,
          token_address: burnEvent.nft,
          token_id: burnEvent.token_id,
        },
        isIbc: false,
        isOp: false,
      },
    };
  },
};
