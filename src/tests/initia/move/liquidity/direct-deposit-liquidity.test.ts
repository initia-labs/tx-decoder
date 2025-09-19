import {
  initialize,
  mockedAxios,
  resetMockApi,
  setupMockApi
} from "@/tests/_shared/helpers";

import {
  mockApiResponsesForDirectDepositLiquidity,
  mockMsgDirectDepositLiquidity
} from "./direct-deposit-liquidity.fixture";

jest.mock("axios");
const decoder = initialize();

describe("Direct Deposit Liquidity Message", () => {
  beforeEach(() => {
    resetMockApi(mockedAxios);
  });

  it("should decode a direct deposit liquidity move message correctly", async () => {
    setupMockApi(mockedAxios, mockApiResponsesForDirectDepositLiquidity);

    const decoded = await decoder.decodeTransaction(
      mockMsgDirectDepositLiquidity
    );

    expect(decoded.messages).toHaveLength(1);
    expect(decoded.messages[0].decodedMessage).toEqual({
      action: "deposit_liquidity",
      data: {
        amountA: "10000",
        amountB: "11000",
        denomA:
          "ibc/74CDBCE5F520CD29B32692645382E168032121F7DC3B3FDC79B0D37FB4E0916D",
        denomB: "uinit",
        from: "init1dw49mn7s2r5mskjdmus5hth80zz8wwaywycq06",
        liquidity: "55981",
        liquidityDenom:
          "move/7d1fef22a2d391eb47922148d58dc77db025f12d014ae98437a6fac051de4c4"
      },
      isIbc: false,
      isOp: false
    });

    expect(decoded.messages[0].balanceChanges).toEqual({
      ft: {
        init1dw49mn7s2r5mskjdmus5hth80zz8wwaywycq06: {
          "ibc/74CDBCE5F520CD29B32692645382E168032121F7DC3B3FDC79B0D37FB4E0916D":
            "-10000",
          "move/7d1fef22a2d391eb47922148d58dc77db025f12d014ae98437a6fac051de4c4":
            "55981",
          uinit: "-11000"
        },
        init1qlglau3295u3adreyg2g6kxuwldsyhcj6q22axzr0fh6cpgaunzqjx2jx8: {
          "ibc/74CDBCE5F520CD29B32692645382E168032121F7DC3B3FDC79B0D37FB4E0916D":
            "10000",
          uinit: "11000"
        }
      },
      object: {}
    });

    expect(decoded.totalBalanceChanges).toEqual({
      ft: {
        init1dw49mn7s2r5mskjdmus5hth80zz8wwaywycq06: {
          "ibc/74CDBCE5F520CD29B32692645382E168032121F7DC3B3FDC79B0D37FB4E0916D":
            "-10000",
          "move/7d1fef22a2d391eb47922148d58dc77db025f12d014ae98437a6fac051de4c4":
            "55981",
          uinit: "-11000"
        },
        init1qlglau3295u3adreyg2g6kxuwldsyhcj6q22axzr0fh6cpgaunzqjx2jx8: {
          "ibc/74CDBCE5F520CD29B32692645382E168032121F7DC3B3FDC79B0D37FB4E0916D":
            "10000",
          uinit: "11000"
        }
      },
      object: {}
    });
  });
});
