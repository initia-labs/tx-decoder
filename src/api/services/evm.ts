import axios from "axios";
import { Hex } from "viem";

import { ERC_INTERFACE_IDS } from "@/api/constants";

export class EvmService {
  constructor(private readonly jsonRpcUrl: string) {}

  public async ethCall(to: string, data: Hex): Promise<Hex> {
    try {
      const response = await axios.post(this.jsonRpcUrl, {
        id: 1,
        jsonrpc: "2.0",
        method: "eth_call",
        params: [
          {
            data,
            to
          },
          "latest"
        ]
      });

      if (response.data.error) {
        throw new Error(response.data.error.message);
      }

      const result = response.data.result as `0x${string}` | undefined;
      if (!result || result === "0x") {
        throw new Error("No result returned from eth_call");
      }

      return result;
    } catch (error) {
      console.error(`eth_call to ${to} failed`, error);
      throw error;
    }
  }

  public async isErc721Contract(contractAddress: string): Promise<boolean> {
    try {
      const erc721InterfaceId = ERC_INTERFACE_IDS.ERC721.slice(2);
      const data: Hex =
        `${ERC_INTERFACE_IDS.ERC165}${erc721InterfaceId.padStart(
          64,
          "0"
        )}` as Hex;

      const result = await this.ethCall(contractAddress, data);

      return result.toLowerCase().endsWith("1");
    } catch (error) {
      console.warn(
        `Could not determine if ${contractAddress} is ERC-721. Assuming false.`,
        error
      );
      return false;
    }
  }
}
