import {
  initialize,
  mockedAxios,
  resetMockApi,
  setupMockApi
} from "@/tests/_shared/helpers";

import { mockIbcNftReceiveWasm, mockIbcNftSendWasm } from "./nft-wasm.fixture";

jest.mock("axios");

const decoder = initialize();

const mockApiResponses = {
  GET: {
    "/chains.json": [
      {
        chain_id: "initia-1",
        chain_name: "initia",
        metadata: {
          ibc_channels: [
            {
              chain_id: "osmosis-1",
              channel_id: "channel-0",
              port_id: "nft-transfer",
              version: "ics721-1"
            },
            {
              chain_id: "osmosis-1",
              channel_id: "channel-1",
              port_id: "nft-transfer",
              version: "ics721-1"
            }
          ]
        }
      },
      {
        chain_id: "osmosis-1",
        chain_name: "osmosis",
        metadata: {
          ibc_channels: [
            {
              chain_id: "initia-1",
              channel_id: "channel-0",
              port_id: "nft-transfer",
              version: "ics721-1"
            },
            {
              chain_id: "initia-1",
              channel_id: "channel-1",
              port_id: "nft-transfer",
              version: "ics721-1"
            }
          ]
        }
      }
    ],
    "/cosmos/base/tendermint/v1beta1/node_info": {
      default_node_info: {
        network: "initia-1"
      }
    }
  }
};

describe("WASM IBC NFT Decoders", () => {
  beforeEach(() => {
    resetMockApi(mockedAxios);
    setupMockApi(mockedAxios, mockApiResponses);
  });

  it("should decode IBC NFT send transaction on WASM VM", async () => {
    const decoded =
      await decoder.decodeCosmosWasmTransaction(mockIbcNftSendWasm);

    expect(decoded.messages).toHaveLength(1);
    expect(decoded.messages[0].decodedMessage).toMatchObject({
      action: "ibc_nft_send_wasm",
      data: {
        classId: "nft/wasm1contract123/collection1",
        contractAddress: "wasm1contract123",
        dstChainId: "osmosis-1",
        receiver: "osmo1receiver123",
        sender: "init1sender123",
        sequence: "100",
        srcChainId: "initia-1",
        tokenIds: ["token1"],
        tokenUris: ["https://example.com/token1.json"]
      },
      isIbc: true,
      isOp: false
    });

    expect(decoded.metadata).toEqual({ data: {}, type: "wasm" });
  });

  it("should decode IBC NFT receive transaction on WASM VM", async () => {
    const decoded = await decoder.decodeCosmosWasmTransaction(
      mockIbcNftReceiveWasm
    );

    expect(decoded.messages).toHaveLength(1);
    expect(decoded.messages[0].decodedMessage).toMatchObject({
      action: "ibc_nft_receive_wasm",
      data: {
        classId: "nft/wasm1contract456/collection2",
        contractAddress: "wasm1contract456",
        dstChainId: "initia-1",
        receiver: "init1receiver456",
        sender: "osmo1sender456",
        sequence: "100",
        srcChainId: "osmosis-1",
        tokenIds: ["token2"],
        tokenUris: ["https://example.com/token2.json"]
      },
      isIbc: true,
      isOp: false
    });

    expect(decoded.metadata).toEqual({ data: {}, type: "wasm" });
  });
});
