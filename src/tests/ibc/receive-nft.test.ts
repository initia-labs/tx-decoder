import {
  mockApiResponsesForIbcReceiveNftRemoteToken,
  mockApiResponsesForIbcReceiveNftSourceToken,
  mockMsgIbcReceiveNftRemoteToken,
  mockMsgIbcReceiveNftSourceToken,
} from "../fixtures/ibc/receive-nft.fixture";
import {
  initialize,
  mockedAxios,
  resetMockApi,
  setupMockApi,
} from "../helpers";

jest.mock("axios");

const decoder = initialize();

describe("IBC Receive NFT Message", () => {
  beforeEach(() => {
    resetMockApi(mockedAxios);
  });

  describe("Source Token Receive", () => {
    it("should decode an IBC NFT receive message for source token correctly", async () => {
      setupMockApi(mockedAxios, mockApiResponsesForIbcReceiveNftSourceToken);
      const decoded = await decoder.decodeTransaction(
        mockMsgIbcReceiveNftSourceToken
      );

      expect(decoded.messages).toHaveLength(2); // UpdateClient + RecvPacket

      const { messages, metadata, totalBalanceChanges } = decoded;

      expect(messages[0].decodedMessage.action).toEqual("not_supported");

      expect(messages[1].decodedMessage).toEqual({
        action: "ibc_nft_receive",
        data: {
          collection: {
            creator: "init1ulw753hxh4mrc9ss7p2y7h8emjxxyw6uce0hk9",
            description:
              "Good places to visit in Thailand - Explore beautiful destinations and cultural landmarks",
            name: "Thailand places",
            uri: "https://nft-rho-ten.vercel.app/thailand",
          },
          collectionId:
            "init1ntmktkq3yzwnn0f4luwhtaw0pn6xvc7067j52k55sfndkxydvlesl6xnsq",
          dstChainId: "interwoven-1",
          dstChannel: "channel-28",
          dstPort: "nft-transfer",
          receiver: "init1t9k78msywte6jx4zrxkp94pa9u9laa9pqfpytk",
          sender: "init1t9k78msywte6jx4zrxkp94pa9u9laa9pqfpytk",
          srcChainId: "civitia-1",
          srcChannel: "channel-1",
          srcPort: "nft-transfer",
          tokenIds: ["1"],
          tokenUris: ["https://nft-rho-ten.vercel.app/thailand/1"],
        },
        isIbc: true,
        isOp: false,
      });

      expect(totalBalanceChanges).toEqual({
        ft: {},
        object: {
          init1j0kfut4t788gs9e6l4aqyh7s3pgwtwegnqn6qr: {
            init1rf9acg4cee5welf4jqqhrwx3pv4f695ae0jtaze2tksxywsg76msp3qj9a:
              "-1",
          },
          init1t9k78msywte6jx4zrxkp94pa9u9laa9pqfpytk: {
            init1rf9acg4cee5welf4jqqhrwx3pv4f695ae0jtaze2tksxywsg76msp3qj9a:
              "1",
          },
        },
      });

      expect(metadata).toEqual({
        init1rf9acg4cee5welf4jqqhrwx3pv4f695ae0jtaze2tksxywsg76msp3qj9a: {
          collection: {
            creator: "init1ulw753hxh4mrc9ss7p2y7h8emjxxyw6uce0hk9",
            description:
              "Good places to visit in Thailand - Explore beautiful destinations and cultural landmarks",
            name: "Thailand places",
            uri: "https://nft-rho-ten.vercel.app/thailand",
          },
          collectionAddress:
            "init1ntmktkq3yzwnn0f4luwhtaw0pn6xvc7067j52k55sfndkxydvlesl6xnsq",
          tokenId: "1",
          tokenUri: "https://nft-rho-ten.vercel.app/thailand/1",
          type: "nft",
        },
      });
    });
  });

  describe("Remote Token Receive", () => {
    it("should decode an IBC NFT receive message for remote token correctly", async () => {
      setupMockApi(mockedAxios, mockApiResponsesForIbcReceiveNftRemoteToken);
      const decoded = await decoder.decodeTransaction(
        mockMsgIbcReceiveNftRemoteToken
      );

      expect(decoded.messages).toHaveLength(2); // UpdateClient + RecvPacket

      const { messages, metadata, totalBalanceChanges } = decoded;

      expect(messages[0].decodedMessage.action).toEqual("not_supported");

      expect(messages[1].decodedMessage).toEqual({
        action: "ibc_nft_receive",
        data: {
          collection: {
            creator: "init1qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqpqr5e3d",
            description:
              "eyJvd25lciI6ImluaXQxd2M1M3U5c21uenV3cGt6NzA4a3dqNXMzeGV2cXN4MjYzajAwaGx1N25jbXNja3oyZ2NmczVqeDJtayIsImNvbnRyYWN0X2luZm8iOnsiY29kZV9pZCI6MTIsImNyZWF0b3IiOiJpbml0MXdjNTN1OXNtbnp1d3BrejcwOGt3ajVzM3hldnFzeDI2M2owMGhsdTduY21zY2t6MmdjZnM1angybWsiLCJhZG1pbiI6ImluaXQxcDV3N3h3OXA2c2pheWMybjN2djA1NnU1MGM1azdxYWU3YXBhazkiLCJwaW5uZWQiOmZhbHNlLCJpYmNfcG9ydCI6bnVsbH0sIm51bV90b2tlbnMiOjM0ODEsIm5hbWUiOiJUVVpJIiwic3ltYm9sIjoiVFVaSSIsImV4dGVuc2lvbiI6bnVsbH0=",
            name: "ibc/0A1FFECF8C217E1630E58ABF7BF857FD7CC762D165DF018D94DACBC8881209E2",
            uri: null,
          },
          collectionId:
            "init1lf8xkx587wkwlnc8pm8wqn43ur8ycmzu3xu8lcpxhxwx43rmqyxqkqeqpp",
          dstChainId: "interwoven-1",
          dstChannel: "channel-67",
          dstPort: "nft-transfer",
          receiver: "init18cd6ufdufm4crr4tjr23uwhn26qz6ndea57aya",
          sender: "init18cd6ufdufm4crr4tjr23uwhn26qz6ndea57aya",
          srcChainId: "intergaze-1",
          srcChannel: "channel-1",
          srcPort:
            "wasm.init1wug8sewp6cedgkmrmvhl3lf3tulagm9hnvy8p0rppz9yjw0g4wtq7947m6",
          tokenIds: ["6089"],
          tokenUris: [
            "ipfs://bafybeifye6qvvdw45he36lfoqolfxunwvk3k3vh4b2ahloubv7cnstt56i/6089",
          ],
        },
        isIbc: true,
        isOp: false,
      });

      expect(messages[0].balanceChanges).toEqual({
        ft: {},
        object: {},
      });

      expect(messages[1].balanceChanges).toEqual({
        ft: {},
        object: {
          init1qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqpqr5e3d: {
            init1t64cqru8efqzzrmfqkkrzdqn2ft453pyvvpvtvnlgw8f0qr3haeslr0899:
              "0",
          },
          init18cd6ufdufm4crr4tjr23uwhn26qz6ndea57aya: {
            init1t64cqru8efqzzrmfqkkrzdqn2ft453pyvvpvtvnlgw8f0qr3haeslr0899:
              "1",
          },
        },
      });

      expect(totalBalanceChanges).toEqual({
        ft: {},
        object: {
          init1qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqpqr5e3d: {
            init1t64cqru8efqzzrmfqkkrzdqn2ft453pyvvpvtvnlgw8f0qr3haeslr0899:
              "0",
          },
          init18cd6ufdufm4crr4tjr23uwhn26qz6ndea57aya: {
            init1t64cqru8efqzzrmfqkkrzdqn2ft453pyvvpvtvnlgw8f0qr3haeslr0899:
              "1",
          },
        },
      });

      expect(metadata).toEqual({
        init1t64cqru8efqzzrmfqkkrzdqn2ft453pyvvpvtvnlgw8f0qr3haeslr0899: {
          collection: {
            creator: "init1qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqpqr5e3d",
            description:
              "eyJvd25lciI6ImluaXQxd2M1M3U5c21uenV3cGt6NzA4a3dqNXMzeGV2cXN4MjYzajAwaGx1N25jbXNja3oyZ2NmczVqeDJtayIsImNvbnRyYWN0X2luZm8iOnsiY29kZV9pZCI6MTIsImNyZWF0b3IiOiJpbml0MXdjNTN1OXNtbnp1d3BrejcwOGt3ajVzM3hldnFzeDI2M2owMGhsdTduY21zY2t6MmdjZnM1angybWsiLCJhZG1pbiI6ImluaXQxcDV3N3h3OXA2c2pheWMybjN2djA1NnU1MGM1azdxYWU3YXBhazkiLCJwaW5uZWQiOmZhbHNlLCJpYmNfcG9ydCI6bnVsbH0sIm51bV90b2tlbnMiOjM0ODEsIm5hbWUiOiJUVVpJIiwic3ltYm9sIjoiVFVaSSIsImV4dGVuc2lvbiI6bnVsbH0=",
            name: "ibc/0A1FFECF8C217E1630E58ABF7BF857FD7CC762D165DF018D94DACBC8881209E2",
            uri: "",
          },
          collectionAddress:
            "init1lf8xkx587wkwlnc8pm8wqn43ur8ycmzu3xu8lcpxhxwx43rmqyxqkqeqpp",
          tokenId: "6089",
          tokenUri:
            "ipfs://bafybeifye6qvvdw45he36lfoqolfxunwvk3k3vh4b2ahloubv7cnstt56i/6089",
          type: "nft",
        },
      });
    });
  });
});
