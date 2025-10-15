import {
  initialize,
  mockedAxios,
  resetMockApi,
  setupMockApi
} from "@/tests/_shared/helpers";

import {
  mockApiResponsesForNftReceiveEvm,
  mockNftReceiveEvmTransaction
} from "./receive-nft-evm.fixture";

jest.mock("axios");
const decoder = initialize();

describe("IBC Receive NFT EVM Message", () => {
  beforeEach(() => {
    resetMockApi(mockedAxios);
    setupMockApi(mockedAxios, mockApiResponsesForNftReceiveEvm);
  });

  it("should decode an IBC NFT receive message correctly", async () => {
    const decoded = await decoder.decodeCosmosEvmTransaction(
      mockNftReceiveEvmTransaction
    );

    expect(decoded.messages).toHaveLength(2);
    expect(decoded.messages[1].decodedMessage).toEqual({
      action: "ibc_nft_receive_evm",
      data: {
        contractAddress: "init1sdmfhm4hu4q9au9hms7xd3p78fg6d5nl4fjdf0",
        dstChainId: "embrmainnet-1",
        dstChannel: "channel-1",
        dstPort: "nft-transfer",
        receiver: "init1dw49mn7s2r5mskjdmus5hth80zz8wwaywycq06",
        sender:
          "init1ealpunvt5390eg7uh5drzxd9w76x3entlzerxhga8e0mp5s6mdmq5gt52e",
        sequence: "2",
        srcChainId: "interwoven-1",
        srcChannel: "channel-63",
        srcPort: "nft-transfer",
        timeoutHeight: {
          revision_height: "0",
          revision_number: "0"
        },
        timeoutTimestamp: "1748267633598000000",
        tokenIds: ["1"],
        tokenUris: ["https://jennie.initia.xyz/data/9_4.json"]
      },
      isIbc: true,
      isOp: false
    });

    expect(decoded.messages[1].balanceChanges).toEqual({
      ft: {},
      nft: {
        "0x0000000000000000000000000000000000000000": {
          "0x83769BeEB7e5405ef0B7dc3C66C43E3a51A6d27f": {
            "48635463943209834798109814161294753926839975257569795305637098542720658922315":
              "-1"
          }
        },
        "0x6Baa5DcFD050E9B85a4ddf214baEe77884773Ba4": {
          "0x83769BeEB7e5405ef0B7dc3C66C43E3a51A6d27f": {
            "48635463943209834798109814161294753926839975257569795305637098542720658922315":
              "1"
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
              "-1"
          }
        },
        "0x6Baa5DcFD050E9B85a4ddf214baEe77884773Ba4": {
          "0x83769BeEB7e5405ef0B7dc3C66C43E3a51A6d27f": {
            "48635463943209834798109814161294753926839975257569795305637098542720658922315":
              "1"
          }
        }
      },
      vm: "evm"
    });

    expect(decoded.metadata).toEqual({});
  });
});
