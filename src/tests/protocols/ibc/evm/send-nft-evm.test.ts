import {
  initialize,
  mockedAxios,
  resetMockApi,
  setupMockApi
} from "@/tests/_shared/helpers";

import {
  mockApiResponsesForNftSendEvm,
  mockNftSendEvmTransaction
} from "./send-nft-evm.fixture";

jest.mock("axios");
const decoder = initialize();

describe("IBC Send NFT EVM Message", () => {
  beforeEach(() => {
    resetMockApi(mockedAxios);
    setupMockApi(mockedAxios, mockApiResponsesForNftSendEvm);
  });

  it("should decode an IBC NFT send message correctly", async () => {
    const decoded = await decoder.decodeCosmosEvmTransaction(
      mockNftSendEvmTransaction
    );

    expect(decoded.messages).toHaveLength(1);
    expect(decoded.messages[0].decodedMessage).toEqual({
      action: "ibc_nft_send",
      data: {
        collection: {
          creator:
            "init13fnzkzrac5lx9xeu5mt80r2w0thl4s9ns7ueg9znn4enhyp4fyrsgkt9zc",
          description:
            "Jennie you know and love, now living rent-free in your wallet. She'll accompany you wherever you go.",
          name: "Jennie",
          uri: "https://jennie.initia.xyz/data/collection.json"
        },
        collectionId:
          "init19zcnk37yxsnfjp3am5lq0damemkmrjlmlck8q2tvdxn64ydpg3yqtpl4k9",
        dstChainId: "civitia-1",
        dstChannel: "channel-63",
        dstPort: "nft-transfer",
        receiver:
          "0xb845fba0d0072c282f6284465933c4b32b1a0d4071604935a7a8d999c85d01fb::nft_transfer::nft_transfer",
        sender: "init1dw49mn7s2r5mskjdmus5hth80zz8wwaywycq06",
        sequence: "2",
        srcChainId: "yominet-1",
        srcChannel: "channel-1",
        srcPort: "nft-transfer",
        timeoutHeight: {
          revision_height: "0",
          revision_number: "0"
        },
        timeoutTimestamp: "1748267790595000000",
        tokenAddress: "init1sdmfhm4hu4q9au9hms7xd3p78fg6d5nl4fjdf0",
        tokenIds: ["1"],
        tokenUris: ["https://jennie.initia.xyz/data/9_4.json"]
      },
      isIbc: true,
      isOp: false
    });

    expect(decoded.messages[0].balanceChanges).toEqual({
      ft: {},
      nft: {
        "0x0000000000000000000000000000000000000000": {
          "0x83769BeEB7e5405ef0B7dc3C66C43E3a51A6d27f": {
            "48635463943209834798109814161294753926839975257569795305637098542720658922315":
              "1"
          }
        },
        "0x6Baa5DcFD050E9B85a4ddf214baEe77884773Ba4": {
          "0x83769BeEB7e5405ef0B7dc3C66C43E3a51A6d27f": {
            "48635463943209834798109814161294753926839975257569795305637098542720658922315":
              "-1"
          }
        }
      },
      vm: "evm"
    });

    expect(decoded.totalBalanceChanges).toEqual({
      ft: {},
      nft: {
        "0x0000000000000000000000000000000000000000": {
          "0x83769BeEB7e5405ef0B7dc3C66C43E3a51A6d27f": {
            "48635463943209834798109814161294753926839975257569795305637098542720658922315":
              "1"
          }
        },
        "0x6Baa5DcFD050E9B85a4ddf214baEe77884773Ba4": {
          "0x83769BeEB7e5405ef0B7dc3C66C43E3a51A6d27f": {
            "48635463943209834798109814161294753926839975257569795305637098542720658922315":
              "-1"
          }
        }
      },
      vm: "evm"
    });

    expect(decoded.metadata).toEqual({});
  });

  it("should handle the correct message type", async () => {
    const decoded = await decoder.decodeCosmosEvmTransaction(
      mockNftSendEvmTransaction
    );

    expect(decoded.messages[0].decodedMessage.action).toBe("ibc_nft_send");
    expect(decoded.messages[0].decodedMessage.isIbc).toBe(true);
    expect(decoded.messages[0].decodedMessage.isOp).toBe(false);
  });

  it("should extract correct NFT metadata from packet data", async () => {
    const decoded = await decoder.decodeCosmosEvmTransaction(
      mockNftSendEvmTransaction
    );
    const decodedMessage = decoded.messages[0].decodedMessage;

    // Type guard to ensure we have the correct message type
    expect(decodedMessage.action).toBe("ibc_nft_send");
    if (decodedMessage.action === "ibc_nft_send") {
      expect(decodedMessage.data.collectionId).toBe(
        "init19zcnk37yxsnfjp3am5lq0damemkmrjlmlck8q2tvdxn64ydpg3yqtpl4k9"
      );
      expect(decodedMessage.data.collection.uri).toBe(
        "https://jennie.initia.xyz/data/collection.json"
      );
      expect(decodedMessage.data.tokenIds).toEqual(["1"]);
      expect(decodedMessage.data.tokenUris).toEqual([
        "https://jennie.initia.xyz/data/9_4.json"
      ]);
    }
  });

  it("should include correct IBC channel information", async () => {
    const decoded = await decoder.decodeCosmosEvmTransaction(
      mockNftSendEvmTransaction
    );
    const decodedMessage = decoded.messages[0].decodedMessage;

    // Type guard to ensure we have the correct message type
    expect(decodedMessage.action).toBe("ibc_nft_send");
    if (decodedMessage.action === "ibc_nft_send") {
      expect(decodedMessage.data.srcChainId).toBe("yominet-1");
      expect(decodedMessage.data.srcChannel).toBe("channel-1");
      expect(decodedMessage.data.srcPort).toBe("nft-transfer");
      expect(decodedMessage.data.dstChainId).toBe("civitia-1");
      expect(decodedMessage.data.dstChannel).toBe("channel-63");
      expect(decodedMessage.data.dstPort).toBe("nft-transfer");
    }
  });

  it("should include correct sender and receiver addresses", async () => {
    const decoded = await decoder.decodeCosmosEvmTransaction(
      mockNftSendEvmTransaction
    );
    const decodedMessage = decoded.messages[0].decodedMessage;

    // Type guard to ensure we have the correct message type
    expect(decodedMessage.action).toBe("ibc_nft_send");
    if (decodedMessage.action === "ibc_nft_send") {
      expect(decodedMessage.data.sender).toBe(
        "init1dw49mn7s2r5mskjdmus5hth80zz8wwaywycq06"
      );
      expect(decodedMessage.data.receiver).toBe(
        "0xb845fba0d0072c282f6284465933c4b32b1a0d4071604935a7a8d999c85d01fb::nft_transfer::nft_transfer"
      );
    }
  });
});
