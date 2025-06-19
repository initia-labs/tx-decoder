import { MessageDecoder } from "@/interfaces";
import { Event, Message, MintNFTEvent, zMintNFTEvent } from "@/schema";

import { isMoveMessage } from "./index";

const isSimpleMint = (message: Message) => {
  return (
    isMoveMessage(message) &&
    message.module_address === "0x1" &&
    message.module_name === "simple_nft" &&
    message.function_name === "mint"
  );
};

const isUsernameMint = (message: Message) => {
  return (
    isMoveMessage(message) &&
    message.module_address ===
      "0x72ed9b26ecdcd6a21d304df50f19abfdbe31d2c02f60c84627844620a45940ef" &&
    message.module_name === "usernames" &&
    message.function_name === "register_domain"
  );
};

export const nftMintDecoder: MessageDecoder = {
  check: (message) => {
    return isSimpleMint(message) || isUsernameMint(message);
  },
  decode: (_message, log) => {
    const mintEvent = findMintEvent(log.events);
    if (!mintEvent) {
      throw new Error("NFT Mint event not found");
    }

    return {
      balanceChanges: {
        ft: {},
        nft: {},
      },
      decodedMessage: {
        action: "nft_mint",
        data: {
          collection_address: mintEvent.collection,
          token_address: mintEvent.nft,
          token_id: mintEvent.token_id,
          token_uri: null, // will be available in mintEvent when initiation-2 is upgraded
        },
        isIbc: false,
        isOp: false,
      },
    };
  },
};

// internal parser
const findMintEvent = (events: Event[]): MintNFTEvent | null => {
  const mintEvent = events.find(
    (event) =>
      event.type === "move" &&
      event.attributes.some(
        (attr) =>
          attr.key === "type_tag" && attr.value === "0x1::collection::MintEvent"
      )
  );

  if (!mintEvent) return null;

  const dataAttribute = mintEvent.attributes.find(
    (attr) => attr.key === "data"
  );

  if (!dataAttribute) {
    return null;
  }

  const parsed = zMintNFTEvent.safeParse(JSON.parse(dataAttribute.value));
  if (!parsed.success) {
    return null;
  }

  return parsed.data;
};
