import {
  mockApiResponsesForExtendLiquidity,
  mockMsgExtendLiquidity,
} from "../fixtures/move/extend-liquidity.fixture";
import {
  initialize,
  mockedAxios,
  resetMockApi,
  setupMockApi,
} from "../helpers";

jest.mock("axios");
const decoder = initialize();

describe("Extend Liquidity Message", () => {
  beforeEach(() => {
    resetMockApi(mockedAxios);
  });

  it("should decode an extend liquidity move message correctly", async () => {
    setupMockApi(mockedAxios, mockApiResponsesForExtendLiquidity);

    const decoded = await decoder.decodeTransaction(mockMsgExtendLiquidity);

    expect(decoded.messages).toHaveLength(1);
    expect(decoded.messages[0].decodedMessage).toEqual({
      action: "extend_liquidity",
      data: {
        from: "init15j9nswsatns09fnru6ww9jjljg07r87kr56mdc",
        liquidity: "80000",
        liquidityDenom:
          "move/543b35a39cfadad3da3c23249c474455d15efd2f94f849473226dee8a3c7a9e1",
        initialReleaseTimestamp: "1754562899",
        newReleaseTimestamp: "1755426899",
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
