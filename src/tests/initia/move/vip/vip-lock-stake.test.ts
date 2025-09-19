import {
  initialize,
  mockedAxios,
  resetMockApi,
  setupMockApi
} from "@/tests/_shared/helpers";

import {
  mockApiResponsesForVipLockStake,
  mockMsgVipLockStake
} from "./vip-lock-stake.fixture";

jest.mock("axios");

const decoder = initialize();

describe("VIP Lock Stake Message", () => {
  beforeEach(() => {
    resetMockApi(mockedAxios);
  });

  it("should decode a VIP lock stake message correctly", async () => {
    setupMockApi(mockedAxios, mockApiResponsesForVipLockStake);

    const { messages, totalBalanceChanges } =
      await decoder.decodeTransaction(mockMsgVipLockStake);

    expect(messages).toHaveLength(2);
    expect(messages[0].balanceChanges).toEqual({
      ft: {},
      object: {},
      vm: "move"
    });

    expect(messages[1].balanceChanges).toEqual({
      ft: {
        init1ed6zkyv8g87m9ymtc736mewx9gvvp0mtqyt2rfcnv9xucejmhnkqe22kyd: {
          "move/543b35a39cfadad3da3c23249c474455d15efd2f94f849473226dee8a3c7a9e1":
            "0"
        },
        init1fl48vsnmsdzcv85q5d2q4z5ajdha8yu3mdfuj4: {
          "move/543b35a39cfadad3da3c23249c474455d15efd2f94f849473226dee8a3c7a9e1":
            "1083469"
        },
        init1tacytfqagzjv73v5ke2s4qj8l68c2w0q4v0q0n: {
          "ibc/6490A7EAB61059BFC1CDDEB05917DD70BDF3A611654162A1A47DB930D40D8AF4":
            "-170330"
        },
        init12santguultdd8k3uyvjfc36y2hg4alf0jnuyj3ejym0w3g7848ssynvde3: {
          "ibc/6490A7EAB61059BFC1CDDEB05917DD70BDF3A611654162A1A47DB930D40D8AF4":
            "170330",
          uinit: "1000000"
        },
        init1208jaukpzulngp245mevqfxpm689p8nmtwkvkv2nu0q9ut04xlnsxluexg: {
          uinit: "-1000000"
        }
      },
      object: {},
      vm: "move"
    });
    expect(messages[1].decodedMessage).toEqual({
      action: "delegate",
      data: {
        coins: [
          {
            amount: "1083469",
            denom:
              "move/543b35a39cfadad3da3c23249c474455d15efd2f94f849473226dee8a3c7a9e1"
          }
        ],
        delegatorAddress: "init1tacytfqagzjv73v5ke2s4qj8l68c2w0q4v0q0n",
        releaseTimestamp: "1780650846",
        validator: {
          description: {
            details:
              "Delphi Consulting delivers expert crypto consulting across technology assessment, token advisory, asset intelligence, education, and design services.",
            identity: "2F47665C54DB2742",
            moniker: "Delphi Consulting",
            security_contact: "ops@delphiconsulting.io",
            website: "https://delphidigital.io/consulting"
          },
          operator_address: "initvaloper1qgje6dgazcruzsashpqektp2yaf47x2wyysjqx"
        },
        validatorAddress: "initvaloper1qgje6dgazcruzsashpqektp2yaf47x2wyysjqx"
      },
      isIbc: false,
      isOp: false
    });

    expect(totalBalanceChanges).toEqual({
      ft: {
        init1ed6zkyv8g87m9ymtc736mewx9gvvp0mtqyt2rfcnv9xucejmhnkqe22kyd: {
          "move/543b35a39cfadad3da3c23249c474455d15efd2f94f849473226dee8a3c7a9e1":
            "0"
        },
        init1fl48vsnmsdzcv85q5d2q4z5ajdha8yu3mdfuj4: {
          "move/543b35a39cfadad3da3c23249c474455d15efd2f94f849473226dee8a3c7a9e1":
            "1083469"
        },
        init1tacytfqagzjv73v5ke2s4qj8l68c2w0q4v0q0n: {
          "ibc/6490A7EAB61059BFC1CDDEB05917DD70BDF3A611654162A1A47DB930D40D8AF4":
            "-170330"
        },
        init12santguultdd8k3uyvjfc36y2hg4alf0jnuyj3ejym0w3g7848ssynvde3: {
          "ibc/6490A7EAB61059BFC1CDDEB05917DD70BDF3A611654162A1A47DB930D40D8AF4":
            "170330",
          uinit: "1000000"
        },
        init1208jaukpzulngp245mevqfxpm689p8nmtwkvkv2nu0q9ut04xlnsxluexg: {
          uinit: "-1000000"
        }
      },
      object: {},
      vm: "move"
    });
  });
});
