import { mockMsgIbcSendNft } from "../fixtures/ibc/send-nft.fixture";
import { initialize } from "../helpers";

jest.mock("axios");
const decoder = initialize();

describe("IBC Send NFT Message", () => {
  it("should decode an IBC NFT send message correctly", async () => {
    const decoded = await decoder.decodeTransaction(mockMsgIbcSendNft);

    expect(decoded.messages).toHaveLength(1);
    expect(decoded.messages[0].decodedMessage).toEqual({
      action: "ibc_nft_send",
      data: {
        collection_id:
          "0x4b224b3b82140614fbe0706b421d887f4532ea91d4ad0cf2b99a1251c06dfa9a",
        collection_uri: "https://jennie.initia.xyz/data/collection.json",
        receiver: "init1ulw753hxh4mrc9ss7p2y7h8emjxxyw6uce0hk9",
        sender: "init1dw49mn7s2r5mskjdmus5hth80zz8wwaywycq06",
        source_channel: "channel-28",
        source_port: "nft-transfer",
        token_ids: ["1"],
        token_uris: ["https://jennie.initia.xyz/data/9_4.json"],
      },
      isIbc: true,
      isOp: false,
    });
    expect(decoded.messages[0].balanceChanges).toEqual({
      ft: {},
      object: {
        init1dw49mn7s2r5mskjdmus5hth80zz8wwaywycq06: {
          init1v2xnnl08y508ec6q4q4hxqr2avdeyu3cew5rxghwnn5t3y4jhd2smmah7n: "-1",
        },
        init1j0kfut4t788gs9e6l4aqyh7s3pgwtwegnqn6qr: {
          init1v2xnnl08y508ec6q4q4hxqr2avdeyu3cew5rxghwnn5t3y4jhd2smmah7n: "1",
        },
      },
    });

    expect(decoded.totalBalanceChanges).toEqual({
      ft: {},
      object: {
        init1dw49mn7s2r5mskjdmus5hth80zz8wwaywycq06: {
          init1v2xnnl08y508ec6q4q4hxqr2avdeyu3cew5rxghwnn5t3y4jhd2smmah7n: "-1",
        },
        init1j0kfut4t788gs9e6l4aqyh7s3pgwtwegnqn6qr: {
          init1v2xnnl08y508ec6q4q4hxqr2avdeyu3cew5rxghwnn5t3y4jhd2smmah7n: "1",
        },
      },
    });
  });

  it("should handle the correct message type", async () => {
    const decoded = await decoder.decodeTransaction(mockMsgIbcSendNft);

    expect(decoded.messages[0].decodedMessage.action).toBe("ibc_nft_send");
    expect(decoded.messages[0].decodedMessage.isIbc).toBe(true);
    expect(decoded.messages[0].decodedMessage.isOp).toBe(false);
  });

  it("should extract correct NFT metadata from packet data", async () => {
    const decoded = await decoder.decodeTransaction(mockMsgIbcSendNft);
    const decodedMessage = decoded.messages[0].decodedMessage;

    // Type guard to ensure we have the correct message type
    expect(decodedMessage.action).toBe("ibc_nft_send");
    if (decodedMessage.action === "ibc_nft_send") {
      expect(decodedMessage.data.collection_id).toBe(
        "0x4b224b3b82140614fbe0706b421d887f4532ea91d4ad0cf2b99a1251c06dfa9a"
      );
      expect(decodedMessage.data.collection_uri).toBe(
        "https://jennie.initia.xyz/data/collection.json"
      );
      expect(decodedMessage.data.token_ids).toEqual(["1"]);
      expect(decodedMessage.data.token_uris).toEqual([
        "https://jennie.initia.xyz/data/9_4.json",
      ]);
    }
  });

  it("should include correct IBC channel information", async () => {
    const decoded = await decoder.decodeTransaction(mockMsgIbcSendNft);
    const decodedMessage = decoded.messages[0].decodedMessage;

    // Type guard to ensure we have the correct message type
    expect(decodedMessage.action).toBe("ibc_nft_send");
    if (decodedMessage.action === "ibc_nft_send") {
      expect(decodedMessage.data.source_port).toBe("nft-transfer");
      expect(decodedMessage.data.source_channel).toBe("channel-28");
    }
  });

  it("should include correct sender and receiver addresses", async () => {
    const decoded = await decoder.decodeTransaction(mockMsgIbcSendNft);
    const decodedMessage = decoded.messages[0].decodedMessage;

    // Type guard to ensure we have the correct message type
    expect(decodedMessage.action).toBe("ibc_nft_send");
    if (decodedMessage.action === "ibc_nft_send") {
      expect(decodedMessage.data.sender).toBe(
        "init1dw49mn7s2r5mskjdmus5hth80zz8wwaywycq06"
      );
      expect(decodedMessage.data.receiver).toBe(
        "init1ulw753hxh4mrc9ss7p2y7h8emjxxyw6uce0hk9"
      );
    }
  });
});
