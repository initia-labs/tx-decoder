import {
  initialize,
  mockedAxios,
  resetMockApi,
  setupMockApi
} from "@/tests/_shared/helpers";

import {
  mockApiResponsesForNftReceiveWasm,
  mockApiResponsesForNftSendWasm,
  mockIbcNftReceiveWasm,
  mockIbcNftSendWasm
} from "./nft-wasm.fixture";

jest.mock("axios");

describe("WASM IBC NFT Decoders", () => {
  let decoder: ReturnType<typeof initialize>;

  beforeEach(() => {
    resetMockApi(mockedAxios);
    decoder = initialize();
  });

  it("should decode IBC NFT send transaction on WASM VM", async () => {
    setupMockApi(mockedAxios, mockApiResponsesForNftSendWasm);

    const decoded =
      await decoder.decodeCosmosWasmTransaction(mockIbcNftSendWasm);

    expect(decoded.messages).toHaveLength(1);
    expect(decoded.messages[0].decodedMessage).toMatchObject({
      action: "ibc_nft_send_wasm",
      data: {
        classId: "nft/wasm1contract123/collection1",
        contractAddress: "wasm1contract123",
        dstChainId: "osmosis-1",
        dstChannel: "channel-1",
        dstPort: "nft-transfer",
        receiver: "osmo1receiver123",
        sender: "init1sender123",
        sequence: "100",
        srcChainId: "interwoven-1",
        srcChannel: "channel-0",
        srcPort: "nft-transfer",
        timeoutHeight: { revision_height: "1000000", revision_number: "1" },
        timeoutTimestamp: "1700000000000000000",
        tokenIds: ["token1"],
        tokenUris: ["https://example.com/token1.json"]
      },
      isIbc: true,
      isOp: false
    });

    expect(decoded.metadata).toEqual({ data: {}, type: "wasm" });
  });

  it("should decode IBC NFT receive transaction on WASM VM", async () => {
    setupMockApi(mockedAxios, mockApiResponsesForNftReceiveWasm);

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
        dstChainId: "moo-1",
        dstChannel: "channel-1",
        dstPort:
          "wasm.init1wug8sewp6cedgkmrmvhl3lf3tulagm9hnvy8p0rppz9yjw0g4wtq7947m6",
        receiver: "init1dw49mn7s2r5mskjdmus5hth80zz8wwaywycq06",
        sender: "init1dw49mn7s2r5mskjdmus5hth80zz8wwaywycq06",
        sequence: "5",
        srcChainId: "interwoven-1",
        srcChannel: "channel-30",
        srcPort: "nft-transfer",
        timeoutHeight: { revision_height: "0", revision_number: "0" },
        timeoutTimestamp: "1760971414377000000",
        tokenIds: ["4"],
        tokenUris: ["https://nft-rho-ten.vercel.app/saint_seiya/4.json"]
      },
      isIbc: true,
      isOp: false
    });

    expect(decoded.metadata).toEqual({ data: {}, type: "wasm" });
  });
});
