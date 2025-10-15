import {
  initialize,
  mockedAxios,
  resetMockApi,
  setupMockApi
} from "@/tests/_shared/helpers";

import {
  mockApiResponsesForNftSendMove,
  mockNftSendMoveTransaction
} from "./send-nft-move.fixture";

jest.mock("axios");
const decoder = initialize();

describe("IBC Send NFT Message", () => {
  beforeEach(() => {
    resetMockApi(mockedAxios);
    setupMockApi(mockedAxios, mockApiResponsesForNftSendMove);
  });

  it("should decode an IBC NFT send message correctly", async () => {
    const decoded = await decoder.decodeCosmosTransaction(
      mockNftSendMoveTransaction
    );

    expect(decoded.messages).toHaveLength(1);
    expect(decoded.messages[0].decodedMessage).toEqual({
      action: "ibc_nft_send_move",
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
          "init1fv3ykwuzzsrpf7lqwp45y8vg0azn96536jkseu4engf9rsrdl2dqzkhn6h",
        dstChainId: "civitia-1",
        dstChannel: "channel-1",
        dstPort: "nft-transfer",
        receiver: "init1ulw753hxh4mrc9ss7p2y7h8emjxxyw6uce0hk9",
        sender: "init1dw49mn7s2r5mskjdmus5hth80zz8wwaywycq06",
        sequence: "13",
        srcChainId: "interwoven-1",
        srcChannel: "channel-28",
        srcPort: "nft-transfer",
        timeoutHeight: {
          revision_height: "0",
          revision_number: "0"
        },
        timeoutTimestamp: "1749471966170000000",
        tokenAddress:
          "init1v2xnnl08y508ec6q4q4hxqr2avdeyu3cew5rxghwnn5t3y4jhd2smmah7n",
        tokenIds: ["1"],
        tokenUris: ["https://jennie.initia.xyz/data/9_4.json"]
      },
      isIbc: true,
      isOp: false
    });
    expect(decoded.messages[0].balanceChanges).toEqual({
      ft: {},
      object: {
        init1dw49mn7s2r5mskjdmus5hth80zz8wwaywycq06: {
          init1v2xnnl08y508ec6q4q4hxqr2avdeyu3cew5rxghwnn5t3y4jhd2smmah7n: "-1"
        },
        init1j0kfut4t788gs9e6l4aqyh7s3pgwtwegnqn6qr: {
          init1v2xnnl08y508ec6q4q4hxqr2avdeyu3cew5rxghwnn5t3y4jhd2smmah7n: "1"
        }
      },
      vm: "move"
    });

    expect(decoded.totalBalanceChanges).toEqual({
      ft: {},
      object: {
        init1dw49mn7s2r5mskjdmus5hth80zz8wwaywycq06: {
          init1v2xnnl08y508ec6q4q4hxqr2avdeyu3cew5rxghwnn5t3y4jhd2smmah7n: "-1"
        },
        init1j0kfut4t788gs9e6l4aqyh7s3pgwtwegnqn6qr: {
          init1v2xnnl08y508ec6q4q4hxqr2avdeyu3cew5rxghwnn5t3y4jhd2smmah7n: "1"
        }
      },
      vm: "move"
    });

    expect(decoded.metadata).toEqual({
      data: {
        init1v2xnnl08y508ec6q4q4hxqr2avdeyu3cew5rxghwnn5t3y4jhd2smmah7n: {
          collection: {
            creator:
              "init13fnzkzrac5lx9xeu5mt80r2w0thl4s9ns7ueg9znn4enhyp4fyrsgkt9zc",
            description:
              "Jennie you know and love, now living rent-free in your wallet. She'll accompany you wherever you go.",
            name: "Jennie",
            uri: "https://jennie.initia.xyz/data/collection.json"
          },
          collectionAddress:
            "init1fv3ykwuzzsrpf7lqwp45y8vg0azn96536jkseu4engf9rsrdl2dqzkhn6h",
          tokenId: "1",
          tokenUri: "https://jennie.initia.xyz/data/9_4.json"
        }
      },
      type: "move"
    });
  });
});
