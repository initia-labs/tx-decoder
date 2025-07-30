import {
  mockApiResponsesForMergeLiquidity,
  mockMsgMergeLiquidity,
} from "../fixtures/move/merge-liquidity.fixture";
import {
  initialize,
  mockedAxios,
  resetMockApi,
  setupMockApi,
} from "../helpers";

jest.mock("axios");
const decoder = initialize();

describe("Merge Liquidity Message", () => {
  beforeEach(() => {
    resetMockApi(mockedAxios);
  });

  it("should decode a merge liquidity move message correctly", async () => {
    setupMockApi(mockedAxios, mockApiResponsesForMergeLiquidity);

    const decoded = await decoder.decodeTransaction(mockMsgMergeLiquidity);

    expect(decoded.messages).toHaveLength(1);
    expect(decoded.messages[0].decodedMessage).toEqual({
      action: "merge_liquidity",
      data: {
        from: "init15j9nswsatns09fnru6ww9jjljg07r87kr56mdc",
        liquidity: "10000",
        liquidityDenom:
          "move/543b35a39cfadad3da3c23249c474455d15efd2f94f849473226dee8a3c7a9e1",
        initialReleaseTimestamp: "1754822099",
        newReleaseTimestamp: "1755417811",
        validator: {
          description: {
            moniker: "Orbital Command",
            identity: "A2879F08F59FB0AF",
            website: "https://orbitalcommand.io",
            security_contact: "",
            details: "",
          },
          operator_address:
            "initvaloper1qx6ghyv83caecuxgl77lvlnha9d9y6fntryc8a",
        },
        validatorAddress: "initvaloper1qx6ghyv83caecuxgl77lvlnha9d9y6fntryc8a",
      },
      isIbc: false,
      isOp: false,
    });

    expect(decoded.messages[0].balanceChanges).toEqual({
      ft: {},
      object: {},
    });

    expect(decoded.totalBalanceChanges).toEqual({
      ft: {},
      object: {},
    });
  });
});
