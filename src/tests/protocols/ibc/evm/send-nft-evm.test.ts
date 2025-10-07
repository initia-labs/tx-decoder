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
      action: "ibc_nft_send_evm",
      data: {
        contractAddress: "init1sdmfhm4hu4q9au9hms7xd3p78fg6d5nl4fjdf0",
        dstChainId: "interwoven-1",
        dstChannel: "channel-63",
        dstPort: "nft-transfer",
        receiver:
          "0xb845fba0d0072c282f6284465933c4b32b1a0d4071604935a7a8d999c85d01fb::nft_transfer::nft_transfer",
        sender: "init1dw49mn7s2r5mskjdmus5hth80zz8wwaywycq06",
        sequence: "2",
        srcChainId: "embrmainnet-1",
        srcChannel: "channel-1",
        srcPort: "nft-transfer",
        timeoutHeight: {
          revision_height: "0",
          revision_number: "0"
        },
        timeoutTimestamp: "1748267790595000000",
        tokenIds: [
          "48635463943209834798109814161294753926839975257569795305637098542720658922315"
        ],
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
});
