import type { CollectionResource, NftResource } from "@/schema";

import { DecoderConfig } from "@/interfaces";
import { getEvmDenom } from "@/utils";

import { CacheService } from "./services/cache";
import { CosmosClient } from "./services/cosmos";
import { EvmService } from "./services/evm";
import { MinievmClient } from "./services/minievm";
import { MoveClient } from "./services/move";
import { MstakingClient } from "./services/mstaking";
import { RegistryService } from "./services/registry";

export class ApiClient {
  public get jsonRpcUrl(): string {
    if (!this._jsonRpcUrl) {
      throw new Error(
        "jsonRpcUrl is required (Please provide it when decoding EVM transactions)"
      );
    }

    return this._jsonRpcUrl;
  }

  private readonly _jsonRpcUrl?: string;
  private readonly cacheService: CacheService;
  private readonly cosmosClient: CosmosClient;
  private readonly evmService: EvmService;
  private readonly minievmClient: MinievmClient;
  private readonly moveClient: MoveClient;
  private readonly mstakingClient: MstakingClient;
  private readonly registryService: RegistryService;

  constructor(config: DecoderConfig) {
    this._jsonRpcUrl = config.jsonRpcUrl;
    this.cacheService = new CacheService();
    this.cosmosClient = new CosmosClient(
      config.restUrl,
      this.cacheService,
      config.timeoutMs
    );
    this.evmService = new EvmService(config.jsonRpcUrl, config.timeoutMs);
    this.minievmClient = new MinievmClient(
      config.restUrl,
      this.cacheService,
      config.timeoutMs
    );
    this.moveClient = new MoveClient(
      config.restUrl,
      this.cacheService,
      config.timeoutMs
    );
    this.mstakingClient = new MstakingClient(
      config.restUrl,
      this.cacheService,
      config.timeoutMs
    );
    this.registryService = new RegistryService(
      config.registryUrl,
      this.cacheService
    );
  }

  public async convertToEvmDenom(denom: string): Promise<string> {
    const cacheKey = `evm-denom:${denom}`;
    const cached = this.cacheService.get<string>(cacheKey);
    if (cached) return cached;

    try {
      const [remoteTokenAddress, erc20WrapperAddress] = await Promise.all([
        this.minievmClient.fetchRemoteTokenAddress(denom),
        this.minievmClient.fetchErc20WrapperAddress()
      ]);

      const evmTokenAddress = await this.evmService.getEvmTokenAddress(
        erc20WrapperAddress,
        remoteTokenAddress
      );

      const evmDenom = getEvmDenom(evmTokenAddress);
      this.cacheService.set(cacheKey, evmDenom);
      return evmDenom;
    } catch (error) {
      console.error(
        `Failed to convert denom '${denom}' to EVM denom. Falling back to original denom.`,
        error
      );
      return denom;
    }
  }

  public async findCollectionFromCollectionAddr(
    collectionAddr: string
  ): Promise<CollectionResource | null> {
    return this.moveClient.findCollectionFromCollectionAddr(collectionAddr);
  }

  public async findDenomFromMetadataAddr(
    metadataAddr: string
  ): Promise<string | null> {
    return this.moveClient.findDenomFromMetadataAddr(metadataAddr);
  }

  public async findIbcCounterPartyChainId(
    chainId: string,
    portId: string,
    channelId: string
  ): Promise<string | null> {
    return this.registryService.findIbcCounterPartyChainId(
      chainId,
      portId,
      channelId
    );
  }

  public async findNftFromTokenAddr(
    tokenAddr: string
  ): Promise<NftResource | null> {
    return this.moveClient.findNftFromTokenAddr(tokenAddr);
  }

  public async findOwnerFromStoreAddr(
    storeAddr: string
  ): Promise<string | null> {
    return this.moveClient.findOwnerFromStoreAddr(storeAddr);
  }

  public async findRollupChainId(bridgeId: string) {
    return this.registryService.findRollupChainId(bridgeId);
  }

  public async findValidator(validatorAddress: string) {
    return this.mstakingClient.findValidator(validatorAddress);
  }

  public async getChainId(): Promise<string> {
    return this.cosmosClient.getChainId();
  }

  public async isErc721Contract(contractAddress: string): Promise<boolean> {
    return this.evmService.isErc721Contract(contractAddress);
  }
}
