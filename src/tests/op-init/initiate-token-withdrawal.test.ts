import {
  initialize,
  mockedAxios,
  resetMockApi,
  setupMockApi
} from "@/tests/_shared/helpers";

import {
  mockApiResponsesForInitiateTokenWithdrawal,
  mockInitiateTokenWithdrawal
} from "./initiate-token-withdrawal.fixture";

jest.mock("axios");

const decoder = initialize();

describe("Initiate Token Withdrawal Message", () => {
  beforeEach(() => {
    resetMockApi(mockedAxios);
  });

  it("should decode an initiate token withdrawal message correctly", async () => {
    setupMockApi(mockedAxios, mockApiResponsesForInitiateTokenWithdrawal);

    const decoded = await decoder.decodeEvmTransaction(
      mockInitiateTokenWithdrawal
    );

    expect(decoded.messages).toHaveLength(3);
    expect(decoded.messages[2].decodedMessage).toEqual({
      action: "op_initiate_withdraw",
      data: {
        amount: "100000",
        baseDenom: "uinit",
        denom:
          "l2/8f73cfaf153520f511b4fc0bd71d60d64b4e19eff04a350e642718a3c1ab3b06",
        from: "init1kw2unuhgfa6mz6r0ehrzlr9k9ftjk7pql8u5fm",
        l2Sequence: "12",
        to: "init1kw2unuhgfa6mz6r0ehrzlr9k9ftjk7pql8u5fm"
      },
      isIbc: false,
      isOp: true
    });

    expect(decoded.messages[2].balanceChanges).toEqual({
      ft: {
        "0x0000000000000000000000000000000000000000": {
          "evm/41Dda9c5f6937146Ae4b4A6f99f37F75d5420AeB": "100000"
        },
        "0x408B33CA7c2A50077999D978dd790095A80Aed4e": {
          "evm/41Dda9c5f6937146Ae4b4A6f99f37F75d5420AeB": "0"
        },
        "0xB395C9F2e84f75B1686FcDC62F8cB62a572b7820": {
          "evm/41Dda9c5f6937146Ae4b4A6f99f37F75d5420AeB": "-100000"
        }
      },
      nft: {},
      vm: "evm"
    });

    expect(decoded.totalBalanceChanges).toEqual({
      ft: {
        "0x0000000000000000000000000000000000000000": {
          "evm/41Dda9c5f6937146Ae4b4A6f99f37F75d5420AeB": "100000",
          "evm/856aB2c9F35B9187aB3eB0Fcd11DCc6160427e96": "100000000000000000"
        },
        "0x408B33CA7c2A50077999D978dd790095A80Aed4e": {
          "evm/41Dda9c5f6937146Ae4b4A6f99f37F75d5420AeB": "0"
        },
        "0x4eb08D5c1B0A821303A86C7b3AC805c2793dE783": {
          "evm/41Dda9c5f6937146Ae4b4A6f99f37F75d5420AeB": "-100000"
        },
        "0xB395C9F2e84f75B1686FcDC62F8cB62a572b7820": {
          "evm/41Dda9c5f6937146Ae4b4A6f99f37F75d5420AeB": "0",
          "evm/856aB2c9F35B9187aB3eB0Fcd11DCc6160427e96": "-100000000000000000"
        }
      },
      nft: {},
      vm: "evm"
    });
  });
});
