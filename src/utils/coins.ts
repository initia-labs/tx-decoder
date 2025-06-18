import { Coin } from "@/schema";

/**
 * Takes a coins string like "100uatom,200uinit" and parses it into an array of Coin objects.
 * This is a simplified version of the Stargate coin string parser.
 * Stargate spec: https://github.com/cosmos/cosmos-sdk/blob/v0.42.7/types/coin.go#L599-L601
 */
export const parseCoins = (input: string): Coin[] => {
  return input
    .replace(/\s/g, "")
    .split(",")
    .filter(Boolean)
    .map((part) => {
      // Denom regex from Stargate (https://github.com/cosmos/cosmos-sdk/blob/v0.42.7/types/coin.go#L599-L601)
      const match = part.match(/^([0-9]+)([a-zA-Z][a-zA-Z0-9/]{2,127})$/);
      if (!match) throw new Error("Got an invalid coin string");
      return {
        amount: match[1].replace(/^0+/, "") || "0",
        denom: match[2],
      };
    });
};
