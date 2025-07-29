import {
  mockApiResponsesForDepositLiquidity,
  mockMsgDepositLiquidity,
} from "../fixtures/move/deposit-liquidity.fixture";
import {
  mockApiResponsesForDepositStakeLiquidity,
  mockMsgDepositStakeLiquidity,
} from "../fixtures/move/deposit-stake-liquidity.fixture";
import {
  initialize,
  mockedAxios,
  resetMockApi,
  setupMockApi,
} from "../helpers";

jest.mock("axios");
const decoder = initialize();

describe("Deposit Liquidity Message", () => {
  beforeEach(() => {
    resetMockApi(mockedAxios);
  });

  it("should decode a deposit liquidity move message correctly", async () => {
    setupMockApi(mockedAxios, mockApiResponsesForDepositLiquidity);

    const decoded = await decoder.decodeTransaction(mockMsgDepositLiquidity);

    expect(decoded.messages).toHaveLength(1);
    expect(decoded.messages[0].decodedMessage).toEqual({
      action: "deposit_liquidity",
      data: {
        amountA: "999999",
        amountB: "8415380",
        denomA: "ibc/6490A7EAB61059BFC1CDDEB05917DD70BDF3A611654162A1A47DB930D40D8AF4",
        denomB: "uinit",
        from: "init15j9nswsatns09fnru6ww9jjljg07r87kr56mdc",
        liquidity: "8372391",
        liquidityDenom: "move/543b35a39cfadad3da3c23249c474455d15efd2f94f849473226dee8a3c7a9e1",
      },
      isIbc: false,
      isOp: false,
    });
  });

  it("should decode a deposit stake liquidity move message correctly", async () => {
    setupMockApi(mockedAxios, mockApiResponsesForDepositStakeLiquidity);

    const decoded = await decoder.decodeTransaction(mockMsgDepositStakeLiquidity);

    expect(decoded.messages).toHaveLength(1);
    expect(decoded.messages[0].decodedMessage).toEqual({
      action: "deposit_stake_liquidity",
      data: {
        amountA: "99747",
        amountB: "841538",
        denomA: "ibc/6490A7EAB61059BFC1CDDEB05917DD70BDF3A611654162A1A47DB930D40D8AF4",
        denomB: "uinit",
        from: "init15j9nswsatns09fnru6ww9jjljg07r87kr56mdc",
        liquidity: "836813",
        liquidityDenom: "move/543b35a39cfadad3da3c23249c474455d15efd2f94f849473226dee8a3c7a9e1",
        validator: {
          description: {
            moniker: "Orbital Command",
            identity: "A2879F08F59FB0AF",
            website: "https://orbitalcommand.io",
            security_contact: "",
            details: ""
          },
          operator_address: "initvaloper1qx6ghyv83caecuxgl77lvlnha9d9y6fntryc8a",
        },
        validatorAddress: "initvaloper1qx6ghyv83caecuxgl77lvlnha9d9y6fntryc8a",
      },
      isIbc: false,
      isOp: false,
    });
  });
});