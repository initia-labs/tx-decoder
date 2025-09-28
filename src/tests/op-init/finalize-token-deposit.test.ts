import {
  initialize,
  mockedAxios,
  resetMockApi,
  setupMockApi
} from "@/tests/_shared/helpers";

import {
  mockApiResponsesForFinalizeTokenDeposit,
  mockMsgFinalizeTokenDepositError,
  mockMsgFinalizeTokenDepositSuccess
} from "./finalize-token-deposit.fixture";

jest.mock("axios");

const decoder = initialize();

describe("Finalize Token Deposit Message", () => {
  beforeEach(() => {
    resetMockApi(mockedAxios);
  });

  it("should decode a finalize token deposit message success correctly", async () => {
    setupMockApi(mockedAxios, mockApiResponsesForFinalizeTokenDeposit);

    const decoded = await decoder.decodeEvmTransaction(
      mockMsgFinalizeTokenDepositSuccess
    );

    expect(decoded.messages).toHaveLength(1);
    expect(decoded.messages[0].decodedMessage).toEqual({
      action: "op_finalize_deposit",
      data: {
        amount: "1000000",
        baseDenom: "uinit",
        denom:
          "l2/8f73cfaf153520f511b4fc0bd71d60d64b4e19eff04a350e642718a3c1ab3b06",
        from: "init1z6jxlwyuwy4j3zdh08t4tzsnnvkm8g8m5f088g",
        height: "7791220",
        l1Sequence: "217",
        sequence: "217",
        success: true,
        to: "init1z6jxlwyuwy4j3zdh08t4tzsnnvkm8g8m5f088g"
      },
      isIbc: false,
      isOp: true
    });
    expect(decoded.messages[0].balanceChanges).toEqual({
      ft: {
        "0x0000000000000000000000000000000000000000": {
          "evm/41Dda9c5f6937146Ae4b4A6f99f37F75d5420AeB": "-1000000",
          "evm/856aB2c9F35B9187aB3eB0Fcd11DCc6160427e96":
            "-13740487000000000000"
        },
        "0x16A46FB89C712B2889B779d7558a139B2dB3A0fB": {
          "evm/41Dda9c5f6937146Ae4b4A6f99f37F75d5420AeB": "-12740487",
          "evm/856aB2c9F35B9187aB3eB0Fcd11DCc6160427e96": "13740487000000000000"
        },
        "0x408B33CA7c2A50077999D978dd790095A80Aed4e": {
          "evm/41Dda9c5f6937146Ae4b4A6f99f37F75d5420AeB": "0"
        },
        "0x4eb08D5c1B0A821303A86C7b3AC805c2793dE783": {
          "evm/41Dda9c5f6937146Ae4b4A6f99f37F75d5420AeB": "13740487"
        }
      },
      nft: {},
      vm: "evm"
    });

    expect(decoded.totalBalanceChanges).toEqual({
      ft: {
        "0x0000000000000000000000000000000000000000": {
          "evm/41Dda9c5f6937146Ae4b4A6f99f37F75d5420AeB": "-1000000",
          "evm/856aB2c9F35B9187aB3eB0Fcd11DCc6160427e96":
            "-13740487000000000000"
        },
        "0x16A46FB89C712B2889B779d7558a139B2dB3A0fB": {
          "evm/41Dda9c5f6937146Ae4b4A6f99f37F75d5420AeB": "-12740487",
          "evm/856aB2c9F35B9187aB3eB0Fcd11DCc6160427e96": "13740487000000000000"
        },
        "0x408B33CA7c2A50077999D978dd790095A80Aed4e": {
          "evm/41Dda9c5f6937146Ae4b4A6f99f37F75d5420AeB": "0"
        },
        "0x4eb08D5c1B0A821303A86C7b3AC805c2793dE783": {
          "evm/41Dda9c5f6937146Ae4b4A6f99f37F75d5420AeB": "13740487"
        }
      },
      nft: {},
      vm: "evm"
    });
  });

  it("should decode a finalize token deposit message error correctly and provide detailed error info", async () => {
    setupMockApi(mockedAxios, mockApiResponsesForFinalizeTokenDeposit);

    const decoded = await decoder.decodeEvmTransaction(
      mockMsgFinalizeTokenDepositError
    );

    expect(decoded.messages).toHaveLength(1);
    expect(decoded.messages[0].decodedMessage).toEqual({
      action: "op_finalize_deposit",
      data: {
        amount: "132340980",
        baseDenom: "uinit",
        denom:
          "l2/8f73cfaf153520f511b4fc0bd71d60d64b4e19eff04a350e642718a3c1ab3b06",
        from: "init16zz3x9rg5f7wx9c6rr3tvlf8ydc3hr02679zt7t0tkxv0zthsresldx5v0",
        height: "7788622",
        l1Sequence: "211",
        reason:
          "hook failed; Failed to run AnteHandler: account sequence mismatch, expected 63, got 61: incorrect account sequence",
        sequence: "211",
        success: false,
        to: "init1dw49mn7s2r5mskjdmus5hth80zz8wwaywycq06"
      },
      isIbc: false,
      isOp: true
    });
    expect(decoded.messages[0].balanceChanges).toEqual({
      ft: {
        "0x0000000000000000000000000000000000000000": {
          "evm/41Dda9c5f6937146Ae4b4A6f99f37F75d5420AeB": "-132340980"
        },
        "0x408B33CA7c2A50077999D978dd790095A80Aed4e": {
          "evm/41Dda9c5f6937146Ae4b4A6f99f37F75d5420AeB": "0"
        },
        "0x6Baa5DcFD050E9B85a4ddf214baEe77884773Ba4": {
          "evm/41Dda9c5f6937146Ae4b4A6f99f37F75d5420AeB": "132340980"
        }
      },
      nft: {},
      vm: "evm"
    });

    expect(decoded.totalBalanceChanges).toEqual({
      ft: {
        "0x0000000000000000000000000000000000000000": {
          "evm/41Dda9c5f6937146Ae4b4A6f99f37F75d5420AeB": "-132340980"
        },
        "0x408B33CA7c2A50077999D978dd790095A80Aed4e": {
          "evm/41Dda9c5f6937146Ae4b4A6f99f37F75d5420AeB": "0"
        },
        "0x6Baa5DcFD050E9B85a4ddf214baEe77884773Ba4": {
          "evm/41Dda9c5f6937146Ae4b4A6f99f37F75d5420AeB": "132340980"
        }
      },
      nft: {},
      vm: "evm"
    });
  });
});
