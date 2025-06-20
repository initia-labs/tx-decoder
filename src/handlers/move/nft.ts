import { findMoveEvent } from "@/handlers/move";
import { MessageDecoder } from "@/interfaces";
import { MintNFTEvent, MoveNFTBurnEvent, MoveObjectCreateEvent, MoveObjectTransferEvent, zMintNFTEvent, zMsgMoveExecute, zMsgMoveNFTBurnEvent, zMsgMoveObjectCreateEvent, zMsgMoveObjectTransfer, zMsgMoveObjectTransferEvent } from "@/schema";
import { toBech32 } from "@/utils/address-converter";

export const nftMintDecoder: MessageDecoder = {
  check: (_message, log) => {
    const mintEvent = findMoveEvent<MintNFTEvent>(log.events, "0x1::collection::MintEvent", zMintNFTEvent);
    if (!mintEvent) {
      return false;
    }

    return true;
  },
  decode: (_message, log) => {
    const mintEvent = findMoveEvent<MintNFTEvent>(log.events, "0x1::collection::MintEvent", zMintNFTEvent);
    if (!mintEvent) {
      throw new Error("NFT Mint event not found");
    }

    const objectCreateEvent = findMoveEvent<MoveObjectCreateEvent>(log.events, "0x1::object::CreateEvent", zMsgMoveObjectCreateEvent);
    if (!objectCreateEvent) {
      throw new Error("NFT Transfer event not found");
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

    const transferEvent = findMoveEvent<MoveObjectTransferEvent>(log.events, "0x1::object::TransferEvent", zMsgMoveObjectTransferEvent);
    if (!transferEvent) {
      return false;
    }

    return true;
  },
  decode: (_message, log) => {
    const transferEvent = findMoveEvent<MoveObjectTransferEvent>(log.events, "0x1::object::TransferEvent", zMsgMoveObjectTransferEvent);
    if (!transferEvent) {
      throw new Error("NFT Transfer event not found");
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
  check: (_message, log) => !!findMoveEvent<MoveNFTBurnEvent>(log.events, "0x1::collection::BurnEvent", zMsgMoveNFTBurnEvent),
  decode: (_message, log) => {
    const parsed = zMsgMoveExecute.parse(_message);
    const { sender } = parsed;

    const burnEvent = findMoveEvent<MoveNFTBurnEvent>(log.events, "0x1::collection::BurnEvent", zMsgMoveNFTBurnEvent);
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
