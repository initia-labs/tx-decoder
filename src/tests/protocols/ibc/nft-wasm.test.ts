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
              chain_id: "interwoven-1",
              channel_id: "channel-1",
              port_id:
                "wasm.init1wug8sewp6cedgkmrmvhl3lf3tulagm9hnvy8p0rppz9yjw0g4wtq7947m6",
              version: "ics721-1"
            },
            {
              chain_id: "osmosis-1",
              channel_id: "channel-0",
              port_id: "nft-transfer",
              version: "ics721-1"
            }
          ]
        }
      },
      {
        chain_id: "interwoven-1",
        chain_name: "interwoven",
        metadata: {
          ibc_channels: [
            {
              chain_id: "initia-1",
              channel_id: "channel-30",
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
        classId:
          "nft-transfer/channel-30/init16yzagwlqrzjkjlnaecam5fwvtzgae5zujtcch7y2uf6q9fyksncquahlaw",
        contractAddress:
          "init16yzagwlqrzjkjlnaecam5fwvtzgae5zujtcch7y2uf6q9fyksncquahlaw",
        dstChainId: "initia-1",
        receiver: "init1dw49mn7s2r5mskjdmus5hth80zz8wwaywycq06",
        sender: "init1dw49mn7s2r5mskjdmus5hth80zz8wwaywycq06",
        sequence: "5",
        srcChainId: "interwoven-1",
        tokenIds: ["4"],
        tokenUris: ["https://nft-rho-ten.vercel.app/saint_seiya/4.json"]
      },
      isIbc: true,
      isOp: false
    });

    expect(decoded.metadata).toEqual({ data: {}, type: "wasm" });
  });
});
