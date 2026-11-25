import {
  initialize,
  mockedAxios,
  resetMockApi,
  setupMockApi
} from "@/tests/_shared/helpers";

import {
  mockApiResponsesForMergeLiquidity,
  mockApiResponsesForMergeLiquidityMultiplePositions,
  mockMsgMergeLiquidity,
  mockMsgMergeLiquidityMultiplePositions
} from "./merge-liquidity.fixture";

jest.mock("axios");
const decoder = initialize();

describe("Merge Liquidity Message", () => {
  beforeEach(() => {
    resetMockApi(mockedAxios);
  });

  it("should decode a merge liquidity move message correctly", async () => {
    setupMockApi(mockedAxios, mockApiResponsesForMergeLiquidity);

    const decoded = await decoder.decodeCosmosTransaction(
      mockMsgMergeLiquidity
    );

    expect(decoded.messages).toHaveLength(1);
    expect(decoded.messages[0].decodedMessage).toEqual({
      action: "merge_liquidity",
      data: {
        from: "init15j9nswsatns09fnru6ww9jjljg07r87kr56mdc",
        initialPositions: [
          {
            amount: "10000",
            initialReleaseTimestamp: "1754822099"
          }
        ],
        liquidityDenom:
          "move/543b35a39cfadad3da3c23249c474455d15efd2f94f849473226dee8a3c7a9e1",
        mergedLiquidity: "10000",
        newReleaseTimestamp: "1755417811",
        validator: {
          description: {
            details: "",
            identity: "A2879F08F59FB0AF",
            moniker: "Orbital Command",
            security_contact: "",
            website: "https://orbitalcommand.io"
          },
          operator_address: "initvaloper1qx6ghyv83caecuxgl77lvlnha9d9y6fntryc8a"
        },
        validatorAddress: "initvaloper1qx6ghyv83caecuxgl77lvlnha9d9y6fntryc8a"
      },
      isIbc: false,
      isOp: false
    });

    expect(decoded.messages[0].balanceChanges).toEqual({
      ft: {},
      object: {},
      vm: "move"
    });

    expect(decoded.totalBalanceChanges).toEqual({
      ft: {},
      object: {},
      vm: "move"
    });
  });

  it("should not decode a merge with an out-of-range locked share", async () => {
    setupMockApi(mockedAxios, mockApiResponsesForMergeLiquidity);
    // The withdraw event is the only one with this release time.
    const withdrawShare =
      '"release_time":"1754822099","validator":"initvaloper1qx6ghyv83caecuxgl77lvlnha9d9y6fntryc8a","locked_share":"10000"';
    const tx = JSON.parse(
      JSON.stringify(mockMsgMergeLiquidity)
        .split(JSON.stringify(withdrawShare).slice(1, -1))
        .join(
          JSON.stringify(
            withdrawShare.replace('"10000"', '"1e999999999"')
          ).slice(1, -1)
        )
    );

    const consoleError = jest
      .spyOn(console, "error")
      .mockImplementation(() => {});

    const decoded = await decoder.decodeCosmosTransaction(tx);

    expect(decoded.messages[0].decodedMessage.action).toBe("not_supported");
    // Without the guard, big.js fails too, but only after allocating the digits.
    expect(consoleError).toHaveBeenCalledWith(
      new Error("WithdrawDelegationEvent locked_share is out of range")
    );
    consoleError.mockRestore();
  });

  it("should decode a merge liquidity move message with multiple positions correctly", async () => {
    setupMockApi(
      mockedAxios,
      mockApiResponsesForMergeLiquidityMultiplePositions
    );

    const decoded = await decoder.decodeCosmosTransaction(
      mockMsgMergeLiquidityMultiplePositions
    );

    expect(decoded.messages).toHaveLength(1);
    expect(decoded.messages[0].decodedMessage).toEqual({
      action: "merge_liquidity",
      data: {
        from: "init1f84f2rkv4fn5842w7uczmyneaxzd0lqfjh5xxs",
        initialPositions: [
          {
            amount: "29752524",
            initialReleaseTimestamp: "1785820872"
          },
          {
            amount: "3719219",
            initialReleaseTimestamp: "1785820951"
          }
        ],
        liquidityDenom:
          "move/543b35a39cfadad3da3c23249c474455d15efd2f94f849473226dee8a3c7a9e1",
        mergedLiquidity: "33471743",
        newReleaseTimestamp: "1785820991",
        validator: {
          description: {
            details: "",
            identity: "1F41B95A84CFA4B6",
            moniker: "Inertia Foundation | 🎁 Delegation Drop 🎁",
            security_contact: "",
            website: "https://inrt.fi"
          },
          operator_address: "initvaloper1gs7kwd5jm8ghnvx4z973aqcenfcej6ykpuydc4"
        },
        validatorAddress: "initvaloper1gs7kwd5jm8ghnvx4z973aqcenfcej6ykpuydc4"
      },
      isIbc: false,
      isOp: false
    });

    expect(decoded.messages[0].balanceChanges).toEqual({
      ft: {},
      object: {},
      vm: "move"
    });

    expect(decoded.totalBalanceChanges).toEqual({
      ft: {},
      object: {},
      vm: "move"
    });
  });
});
