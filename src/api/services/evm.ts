import axios from "axios";
import {
  Address,
  decodeFunctionResult,
  encodeFunctionData,
  getAddress,
  Hex
} from "viem";

import { ERC20_WRAPPER_ABI, ERC165_ABI, ERC_INTERFACE_IDS } from "@/constants";

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

  public async getCosmosTxHashByEvmTxHash(evmTxHash: string): Promise<string> {
    try {
      const response = await axios.post(
        this.jsonRpcUrl,
        {
          id: "1",
          jsonrpc: "2.0",
          method: "cosmos_cosmosTxHashByTxHash",
          params: [evmTxHash]
        },
        {
          timeout: this.timeoutMs
        }
      );

      if (response.data.error) {
        throw new Error(response.data.error.message);
      }

      const result = response.data.result as string | undefined;
      if (!result) {
        throw new Error("No Cosmos tx hash returned");
      }

      return result;
    } catch (error) {
      console.error(
        `Failed to get Cosmos tx hash for EVM tx ${evmTxHash}`,
        error
      );
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
      const data = encodeFunctionData({
        abi: ERC165_ABI,
        args: [ERC_INTERFACE_IDS.ERC721],
        functionName: "supportsInterface"
      });

      const result = await this.ethCall(contractAddress, data);

      const supportsErc721 = decodeFunctionResult({
        abi: ERC165_ABI,
        data: result,
        functionName: "supportsInterface"
      });

      return supportsErc721;
    } catch (error) {
      console.warn(
        `Could not determine if ${contractAddress} is ERC-721. Assuming false.`,
        error
      );
      return false;
    }
  }
}
