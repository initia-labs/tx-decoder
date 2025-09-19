import {
  initialize,
  mockedAxios,
  resetMockApi,
  setupMockApi
} from "@/tests/_shared/helpers";

import {
  mockApiResponsesForFinalizeTokenWithdrawal,
  mockMsgFinalizeTokenWithdrawal
} from "./finalize-token-withdrawal.fixture";

jest.mock("axios");

const decoder = initialize();

describe("Finalize Token Withdrawal Message", () => {
  beforeEach(() => {
    resetMockApi(mockedAxios);
  });

  it("should decode a finalize token withdrawal message correctly", async () => {
    setupMockApi(mockedAxios, mockApiResponsesForFinalizeTokenWithdrawal);

    const decoded = await decoder.decodeTransaction(
      mockMsgFinalizeTokenWithdrawal
    );

    expect(decoded.messages).toHaveLength(1);
    expect(decoded.messages[0].decodedMessage).toEqual({
      action: "op_finalize_withdraw",
      data: {
        amount: "716000000",
        bridgeId: "12",
        denom: "uinit",
        from: "init1r9th529cekjd0v3kryamks7yf6z832pqsapys7",
        srcChainId: "civitia-1",
        to: "init1r9th529cekjd0v3kryamks7yf6z832pqsapys7"
      },
      isIbc: false,
      isOp: true
    });
    expect(decoded.messages[0].balanceChanges).toEqual({
      ft: {
        init1cc52z3ylcts534nwf9vnk5f8fa47r0xeekwalrvrpgk464ud336srpv5mk: {
          uinit: "-716000000"
        },
        init1r9th529cekjd0v3kryamks7yf6z832pqsapys7: {
          uinit: "716000000"
        }
      },
      object: {}
    });

    expect(decoded.totalBalanceChanges).toEqual({
      ft: {
        init1cc52z3ylcts534nwf9vnk5f8fa47r0xeekwalrvrpgk464ud336srpv5mk: {
          uinit: "-716000000"
        },
        init1r9th529cekjd0v3kryamks7yf6z832pqsapys7: {
          uinit: "716000000"
        }
      },
      object: {}
    });
  });
});
