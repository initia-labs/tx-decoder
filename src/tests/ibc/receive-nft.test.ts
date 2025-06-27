import {
  mockMsgIbcReceiveNftRemoteToken,
  mockMsgIbcReceiveNftSourceToken,
} from "../fixtures/ibc/receive-nft.fixture";
import { initialize } from "../helpers";

jest.mock("axios");
const decoder = initialize();

describe("IBC Receive NFT Message", () => {
  describe("Source Token Receive", () => {
    it("should decode an IBC NFT receive message for source token correctly", async () => {
      const decoded = await decoder.decodeTransaction(mockMsgIbcReceiveNftSourceToken);

      expect(decoded.messages).toHaveLength(2); // UpdateClient + RecvPacket

      // Find the IBC receive NFT message
      const receiveMessage = decoded.messages.find(
        (msg) => msg.decodedMessage.action === "ibc_nft_receive"
      )?.decodedMessage;
      expect(receiveMessage).toBeDefined();

      if (receiveMessage && receiveMessage.action === "ibc_nft_receive") {
        expect(receiveMessage).toEqual({
          action: "ibc_nft_receive",
          data: {
            collection_id: "0x9af765d811209d39bd35ff1d75f5cf0cf46663cfd7a5455a948266db188d67f3",
            collection_uri: "https://nft-rho-ten.vercel.app/thailand",
            destination_channel: "channel-28",
            destination_port: "nft-transfer",
            receiver: "init1t9k78msywte6jx4zrxkp94pa9u9laa9pqfpytk",
            sender: "init1t9k78msywte6jx4zrxkp94pa9u9laa9pqfpytk",
            token_ids: ["1"],
            token_uris: ["https://nft-rho-ten.vercel.app/thailand/1"],
          },
          isIbc: true,
          isOp: false,
        });
      }

      expect(decoded.totalBalanceChanges).toEqual({
        ft: {},
        object: {
          init1j0kfut4t788gs9e6l4aqyh7s3pgwtwegnqn6qr: {
            init1rf9acg4cee5welf4jqqhrwx3pv4f695ae0jtaze2tksxywsg76msp3qj9a: "-1",
          },
          init1t9k78msywte6jx4zrxkp94pa9u9laa9pqfpytk: {
            init1rf9acg4cee5welf4jqqhrwx3pv4f695ae0jtaze2tksxywsg76msp3qj9a: "1",
          },
        },
      });
    });

    it("should handle the correct message type for source token", async () => {
      const decoded = await decoder.decodeTransaction(mockMsgIbcReceiveNftSourceToken);

      const receiveMessage = decoded.messages.find(
        (msg) => msg.decodedMessage.action === "ibc_nft_receive"
      )?.decodedMessage;
      expect(receiveMessage?.action).toBe("ibc_nft_receive");
      expect(receiveMessage?.isIbc).toBe(true);
      expect(receiveMessage?.isOp).toBe(false);
    });

    it("should extract correct NFT metadata from packet data for source token", async () => {
      const decoded = await decoder.decodeTransaction(mockMsgIbcReceiveNftSourceToken);
      const message = decoded.messages.find(
        (msg) => msg.decodedMessage.action === "ibc_nft_receive"
      )?.decodedMessage;

      expect(message?.action).toBe("ibc_nft_receive");
      if (message && message.action === "ibc_nft_receive") {
        expect(message.data.collection_id).toBe(
          "0x9af765d811209d39bd35ff1d75f5cf0cf46663cfd7a5455a948266db188d67f3"
        );
        expect(message.data.collection_uri).toBe("https://nft-rho-ten.vercel.app/thailand");
        expect(message.data.token_ids).toEqual(["1"]);
        expect(message.data.token_uris).toEqual(["https://nft-rho-ten.vercel.app/thailand/1"]);
      }
    });

    it("should include correct IBC channel information for source token", async () => {
      const decoded = await decoder.decodeTransaction(mockMsgIbcReceiveNftSourceToken);
      const message = decoded.messages.find(
        (msg) => msg.decodedMessage.action === "ibc_nft_receive"
      )?.decodedMessage;

      expect(message?.action).toBe("ibc_nft_receive");
      if (message && message.action === "ibc_nft_receive") {
        expect(message.data.destination_port).toBe("nft-transfer");
        expect(message.data.destination_channel).toBe("channel-28");
      }
    });

    it("should include correct sender and receiver addresses for source token", async () => {
      const decoded = await decoder.decodeTransaction(mockMsgIbcReceiveNftSourceToken);
      const message = decoded.messages.find(
        (msg) => msg.decodedMessage.action === "ibc_nft_receive"
      )?.decodedMessage;

      expect(message?.action).toBe("ibc_nft_receive");
      if (message && message.action === "ibc_nft_receive") {
        expect(message.data.sender).toBe("init1t9k78msywte6jx4zrxkp94pa9u9laa9pqfpytk");
        expect(message.data.receiver).toBe("init1t9k78msywte6jx4zrxkp94pa9u9laa9pqfpytk");
      }
    });
  });

  describe("Remote Token Receive", () => {
    it("should decode an IBC NFT receive message for remote token correctly", async () => {
      const decoded = await decoder.decodeTransaction(mockMsgIbcReceiveNftRemoteToken);

      expect(decoded.messages).toHaveLength(2); // UpdateClient + RecvPacket

      // Find the IBC receive NFT message
      const receiveMessage = decoded.messages.find(
        (msg) => msg.decodedMessage.action === "ibc_nft_receive"
      )?.decodedMessage;
      expect(receiveMessage).toBeDefined();

      if (receiveMessage && receiveMessage.action === "ibc_nft_receive") {
        expect(receiveMessage).toEqual({
          action: "ibc_nft_receive",
          data: {
            collection_id: "0xfa4e6b1a87f3acefcf070ecee04eb1e0ce4c6c5c89b87fe026b99c6ac47b010c",
            collection_uri: null,
            destination_channel: "channel-67",
            destination_port: "nft-transfer",
            receiver: "init18cd6ufdufm4crr4tjr23uwhn26qz6ndea57aya",
            sender: "init18cd6ufdufm4crr4tjr23uwhn26qz6ndea57aya",
            token_ids: ["6089"],
            token_uris: ["ipfs://bafybeifye6qvvdw45he36lfoqolfxunwvk3k3vh4b2ahloubv7cnstt56i/6089"],
          },
          isIbc: true,
          isOp: false,
        });
      }

      expect(decoded.totalBalanceChanges).toEqual({
        ft: {},
        object: {
          init1qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqpqr5e3d: {
            init1t64cqru8efqzzrmfqkkrzdqn2ft453pyvvpvtvnlgw8f0qr3haeslr0899: "-1",
          },
          init18cd6ufdufm4crr4tjr23uwhn26qz6ndea57aya: {
            init1t64cqru8efqzzrmfqkkrzdqn2ft453pyvvpvtvnlgw8f0qr3haeslr0899: "1",
          },
        },
      });
    });

    it("should handle the correct message type for remote token", async () => {
      const decoded = await decoder.decodeTransaction(mockMsgIbcReceiveNftRemoteToken);

      const receiveMessage = decoded.messages.find(
        (msg) => msg.decodedMessage.action === "ibc_nft_receive"
      )?.decodedMessage;
      expect(receiveMessage?.action).toBe("ibc_nft_receive");
      expect(receiveMessage?.isIbc).toBe(true);
      expect(receiveMessage?.isOp).toBe(false);
    });

    it("should extract correct NFT metadata from packet data for remote token", async () => {
      const decoded = await decoder.decodeTransaction(mockMsgIbcReceiveNftRemoteToken);
      const message = decoded.messages.find(
        (msg) => msg.decodedMessage.action === "ibc_nft_receive"
      )?.decodedMessage;

      expect(message?.action).toBe("ibc_nft_receive");
      if (message && message.action === "ibc_nft_receive") {
        expect(message.data.collection_id).toBe(
          "0xfa4e6b1a87f3acefcf070ecee04eb1e0ce4c6c5c89b87fe026b99c6ac47b010c"
        );
        expect(message.data.collection_uri).toBe(null);
        expect(message.data.token_ids).toEqual(["6089"]);
        expect(message.data.token_uris).toEqual([
          "ipfs://bafybeifye6qvvdw45he36lfoqolfxunwvk3k3vh4b2ahloubv7cnstt56i/6089",
        ]);
      }
    });

    it("should include correct IBC channel information for remote token", async () => {
      const decoded = await decoder.decodeTransaction(mockMsgIbcReceiveNftRemoteToken);
      const message = decoded.messages.find(
        (msg) => msg.decodedMessage.action === "ibc_nft_receive"
      )?.decodedMessage;

      expect(message?.action).toBe("ibc_nft_receive");
      if (message && message.action === "ibc_nft_receive") {
        expect(message.data.destination_port).toBe("nft-transfer");
        expect(message.data.destination_channel).toBe("channel-67");
      }
    });

    it("should include correct sender and receiver addresses for remote token", async () => {
      const decoded = await decoder.decodeTransaction(mockMsgIbcReceiveNftRemoteToken);
      const message = decoded.messages.find(
        (msg) => msg.decodedMessage.action === "ibc_nft_receive"
      )?.decodedMessage;

      expect(message?.action).toBe("ibc_nft_receive");
      if (message && message.action === "ibc_nft_receive") {
        expect(message.data.sender).toBe("init18cd6ufdufm4crr4tjr23uwhn26qz6ndea57aya");
        expect(message.data.receiver).toBe("init18cd6ufdufm4crr4tjr23uwhn26qz6ndea57aya");
      }
    });

    it("should handle null collection URI correctly", async () => {
      const decoded = await decoder.decodeTransaction(mockMsgIbcReceiveNftRemoteToken);
      const message = decoded.messages.find(
        (msg) => msg.decodedMessage.action === "ibc_nft_receive"
      )?.decodedMessage;

      expect(message?.action).toBe("ibc_nft_receive");
      if (message && message.action === "ibc_nft_receive") {
        expect(message.data.collection_uri).toBe(null);
      }
    });
  });
});
