import { decodeTransaction } from "../../index";
import { mockMsgIBCSendNFT } from "../fixtures/ibc/send-nft.fixture";

describe("IBC Send NFT Message", () => {
  it("should decode an IBC NFT send message correctly", () => {
    const decoded = decodeTransaction(mockMsgIBCSendNFT);

    expect(decoded.messages).toHaveLength(1);
    expect(decoded.messages[0]).toEqual({
      action: "ibc_nft_send",
      data: {
        collection_id: "0x4b224b3b82140614fbe0706b421d887f4532ea91d4ad0cf2b99a1251c06dfa9a",
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

    // IBC NFT transfers don't affect local balance changes since the NFT is being sent to another chain
    expect(decoded.balanceChanges).toEqual({
      ft: {},
      object: {},
    });
  });

  it("should handle the correct message type", () => {
    const decoded = decodeTransaction(mockMsgIBCSendNFT);

    expect(decoded.messages[0].action).toBe("ibc_nft_send");
    expect(decoded.messages[0].isIbc).toBe(true);
    expect(decoded.messages[0].isOp).toBe(false);
  });

  it("should extract correct NFT metadata from packet data", () => {
    const decoded = decodeTransaction(mockMsgIBCSendNFT);
    const message = decoded.messages[0];

    // Type guard to ensure we have the correct message type
    expect(message.action).toBe("ibc_nft_send");
    if (message.action === "ibc_nft_send") {
      expect(message.data.collection_id).toBe(
        "0x4b224b3b82140614fbe0706b421d887f4532ea91d4ad0cf2b99a1251c06dfa9a"
      );
      expect(message.data.collection_uri).toBe("https://jennie.initia.xyz/data/collection.json");
      expect(message.data.token_ids).toEqual(["1"]);
      expect(message.data.token_uris).toEqual(["https://jennie.initia.xyz/data/9_4.json"]);
    }
  });

  it("should include correct IBC channel information", () => {
    const decoded = decodeTransaction(mockMsgIBCSendNFT);
    const message = decoded.messages[0];

    // Type guard to ensure we have the correct message type
    expect(message.action).toBe("ibc_nft_send");
    if (message.action === "ibc_nft_send") {
      expect(message.data.source_port).toBe("nft-transfer");
      expect(message.data.source_channel).toBe("channel-28");
    }
  });

  it("should include correct sender and receiver addresses", () => {
    const decoded = decodeTransaction(mockMsgIBCSendNFT);
    const message = decoded.messages[0];

    // Type guard to ensure we have the correct message type
    expect(message.action).toBe("ibc_nft_send");
    if (message.action === "ibc_nft_send") {
      expect(message.data.sender).toBe("init1dw49mn7s2r5mskjdmus5hth80zz8wwaywycq06");
      expect(message.data.receiver).toBe("init1ulw753hxh4mrc9ss7p2y7h8emjxxyw6uce0hk9");
    }
  });
});
