import {
  mockApiResponsesForObjectTransfer,
  mockMsgObjectTransfer,
} from "../fixtures/move/object-transfer.fixture";
import {
  initialize,
  mockedAxios,
  resetMockApi,
  setupMockApi,
} from "../helpers";

jest.mock("axios");

const decoder = initialize();

describe("Object Transfer Message", () => {
  beforeEach(() => {
    resetMockApi(mockedAxios);
  });

  it("should decode an object transfer message correctly", async () => {
    setupMockApi(mockedAxios, mockApiResponsesForObjectTransfer);
    const decoded = await decoder.decodeTransaction(mockMsgObjectTransfer);

    expect(decoded.messages).toHaveLength(1);
    expect(decoded.messages[0].decodedMessage).toEqual({
      action: "object_transfer",
      data: {
        from: "init1ulw753hxh4mrc9ss7p2y7h8emjxxyw6uce0hk9",
        object:
          "init1fqd4u2jnjusml20ekd08q2kmve7qt8g23cdqxzlysvtc40vjsg6sk4p0kn",
        to: "init1t9k78msywte6jx4zrxkp94pa9u9laa9pqfpytk",
      },
      isIbc: false,
      isOp: false,
    });
    expect(decoded.messages[0].balanceChanges).toEqual({
      ft: {},
      object: {
        init1t9k78msywte6jx4zrxkp94pa9u9laa9pqfpytk: {
          init1fqd4u2jnjusml20ekd08q2kmve7qt8g23cdqxzlysvtc40vjsg6sk4p0kn: "1",
        },
        init1ulw753hxh4mrc9ss7p2y7h8emjxxyw6uce0hk9: {
          init1fqd4u2jnjusml20ekd08q2kmve7qt8g23cdqxzlysvtc40vjsg6sk4p0kn: "-1",
        },
      },
    });

    expect(decoded.totalBalanceChanges).toEqual({
      ft: {},
      object: {
        init1t9k78msywte6jx4zrxkp94pa9u9laa9pqfpytk: {
          init1fqd4u2jnjusml20ekd08q2kmve7qt8g23cdqxzlysvtc40vjsg6sk4p0kn: "1",
        },
        init1ulw753hxh4mrc9ss7p2y7h8emjxxyw6uce0hk9: {
          init1fqd4u2jnjusml20ekd08q2kmve7qt8g23cdqxzlysvtc40vjsg6sk4p0kn: "-1",
        },
      },
    });

    expect(decoded.metadata).toEqual({
      init1fqd4u2jnjusml20ekd08q2kmve7qt8g23cdqxzlysvtc40vjsg6sk4p0kn: {
        collectionAddress:
          "init1qktu60eh7g04n3m3wvdrr6f2cys57u45lz5x2sdffdg0qvy0fcsqk9gvt9",
        tokenId: "3",
        tokenUri: "https://nft-rho-ten.vercel.app/favoritefood/3",
        type: "nft",
      },
    });
  });
});
