import axios from "axios";
import {
  Address,
  decodeFunctionResult,
  encodeFunctionData,
  getAddress,
  Hex
} from "viem";

import { ERC20_WRAPPER_ABI, ERC_INTERFACE_IDS } from "@/api/constants";

export class EvmService {
  private static readonly DEFAULT_DECIMALS = 6;
  private static readonly DEFAULT_TIMEOUT_MS = 10000;

  private get jsonRpcUrl(): string {
    if (!this._jsonRpcUrl) {
      throw new Error(
        "jsonRpcUrl is required to initialize EvmService. Please provide a valid JSON-RPC endpoint in the DecoderConfig."
      );
    }

    return this._jsonRpcUrl;
  }

  constructor(
    private readonly _jsonRpcUrl?: string,
    private readonly timeoutMs: number = EvmService.DEFAULT_TIMEOUT_MS
  ) {}

  public async ethCall(to: string, data: Hex): Promise<Hex> {
    try {
      const response = await axios.post(
        this.jsonRpcUrl,
        {
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
        },
        {
          timeout: this.timeoutMs
        }
      );

      if (response.data.error) {
        throw new Error(response.data.error.message);
      }

      const result = response.data.result as Hex | undefined;
      if (!result || result === "0x") {
        throw new Error("No result returned from eth_call");
      }

      return result;
    } catch (error) {
      console.error(`eth_call to ${to} failed`, error);
      throw error;
    }
  }

  public async getEvmTokenAddress(
    erc20WrapperAddress: string,
    remoteTokenAddress: string
  ): Promise<Address> {
    const remoteToken = getAddress(remoteTokenAddress);
    const encodedData: Hex = encodeFunctionData({
      abi: ERC20_WRAPPER_ABI,
      args: [remoteToken, EvmService.DEFAULT_DECIMALS],
      functionName: "localTokens"
    });

    const result = await this.ethCall(erc20WrapperAddress, encodedData);

    const evmTokenAddress = decodeFunctionResult({
      abi: ERC20_WRAPPER_ABI,
      data: result,
      functionName: "localTokens"
    });

    return getAddress(evmTokenAddress);
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

      const normalized = result.toLowerCase();
      if (!normalized.startsWith("0x")) {
        return false;
      }

      return BigInt(normalized) === 1n;
    } catch (error) {
      console.warn(
        `Could not determine if ${contractAddress} is ERC-721. Assuming false.`,
        error
      );
      return false;
    }
  }
}
