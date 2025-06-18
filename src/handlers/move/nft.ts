import { MoveFunctionHandler } from "@/interfaces";
import { MintNFTEvent, Event, zMintNFTEvent } from "@/schema";

export const handleMint: MoveFunctionHandler = (message, log) => {
    const swapEvent = findMintEvent(log.events);
    if (!swapEvent) {
        throw new Error("Dex Swap event not found");
    }

    return {
        balanceChanges: {},
        decodedMessage: {
            action: "nft_mint",
            data: {
                collection_address: swapEvent.collection,
                token_id: swapEvent.token_id,
                token_uri: null, // will be available in swapEvent when initiation-2 is upgraded
                token_address: swapEvent.nft,
            },
            isIbc: false,
            isOp: false,
        },
    };
};

// internal parser
function findMintEvent(events: Event[]): MintNFTEvent | null {
    const swapEvent = events.find(
        (event) =>
            event.type === "move" &&
            event.attributes.some(
                (attr) =>
                    attr.key === "type_tag" && attr.value === "0x1::collection::MintEvent"
            )
    );

    if (!swapEvent) return null;

    const dataAttribute = swapEvent.attributes.find(
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
}
