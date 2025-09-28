import {
  initialize,
  mockedAxios,
  resetMockApi,
  setupMockApi
} from "@/tests/_shared/helpers";

import {
  mockApiResponseForUndelegate,
  mockApiResponseForUndelegateLocked,
  mockMsgUndelegate,
  mockMsgUndelegateLocked
} from "./undelegate.fixture";

jest.mock("axios");

const decoder = initialize();

describe("Staking Messages - Undelegate", () => {
  beforeEach(() => {
    resetMockApi(mockedAxios);
  });

  it("should decode an undelegate message correctly", async () => {
    setupMockApi(mockedAxios, mockApiResponseForUndelegate);

    const { messages, totalBalanceChanges } =
      await decoder.decodeTransaction(mockMsgUndelegate);

    const { balanceChanges, decodedMessage } = messages[0];

    expect(messages).toHaveLength(1);

    expect(decodedMessage).toEqual({
      action: "undelegate",
      data: {
        coins: [
          {
            amount: "7618096",
            denom:
              "move/543b35a39cfadad3da3c23249c474455d15efd2f94f849473226dee8a3c7a9e1"
          }
        ],
        delegatorAddress: "init15elwv4zlwas7zz8mw7lhlcfc3j64uea0dzkew0",
        validator: {
          description: {
            details:
              "The go-to blockchain security firm for top teams, specializing in Cosmos, EVM, ZK, Move (Aptos and Sui). We solve your hardest security problems.\nTwitter: https://twitter.com/zellic_io\nTelegram: t.me/zellic_io",
            identity: "609C091636D1330B",
            moniker: "Zellic",
            security_contact: "security@zellic.io",
            website: "https://zellic.io/"
          },
          operator_address: "initvaloper1r20z6zmlnqrea5p9cendrgeke35nxzfueqwaz6"
        },
        validatorAddress: "initvaloper1r20z6zmlnqrea5p9cendrgeke35nxzfueqwaz6"
      },
      isIbc: false,
      isOp: false
    });

    expect(balanceChanges).toEqual({
      ft: {
        init1fl48vsnmsdzcv85q5d2q4z5ajdha8yu3mdfuj4: {
          "move/543b35a39cfadad3da3c23249c474455d15efd2f94f849473226dee8a3c7a9e1":
            "-7618096"
        },
        init1jv65s3grqf6v6jl3dp4t6c9t9rk99cd8ffy0za: { uinit: "-776583" },
        init1tygms3xhhs3yv487phx3dw4a95jn7t7l0d4dyp: {
          "move/543b35a39cfadad3da3c23249c474455d15efd2f94f849473226dee8a3c7a9e1":
            "7618096"
        },
        init15elwv4zlwas7zz8mw7lhlcfc3j64uea0dzkew0: { uinit: "776583" }
      },
      object: {},
      vm: "move"
    });

    expect(totalBalanceChanges).toEqual({
      ft: {
        init1fl48vsnmsdzcv85q5d2q4z5ajdha8yu3mdfuj4: {
          "move/543b35a39cfadad3da3c23249c474455d15efd2f94f849473226dee8a3c7a9e1":
            "-7618096"
        },
        init1jv65s3grqf6v6jl3dp4t6c9t9rk99cd8ffy0za: { uinit: "-776583" },
        init1tygms3xhhs3yv487phx3dw4a95jn7t7l0d4dyp: {
          "move/543b35a39cfadad3da3c23249c474455d15efd2f94f849473226dee8a3c7a9e1":
            "7618096"
        },
        init15elwv4zlwas7zz8mw7lhlcfc3j64uea0dzkew0: { uinit: "776583" }
      },
      object: {},
      vm: "move"
    });
  });

  it("should decode an undelegate locked message correctly", async () => {
    setupMockApi(mockedAxios, mockApiResponseForUndelegateLocked);

    const { messages, totalBalanceChanges } = await decoder.decodeTransaction(
      mockMsgUndelegateLocked
    );

    const { balanceChanges, decodedMessage } = messages[0];

    expect(messages).toHaveLength(1);

    expect(decodedMessage).toEqual({
      action: "undelegate",
      data: {
        coins: [
          {
            amount: "3508258915",
            denom:
              "move/543b35a39cfadad3da3c23249c474455d15efd2f94f849473226dee8a3c7a9e1"
          }
        ],
        delegatorAddress: "init1xqrvfuga56m4alc7lz0rhnkwy5z8d5pefg8vz9",
        unlockTimestamp: "1748095098",
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

    expect(balanceChanges).toEqual({
      ft: {
        init1e3x65lxn3wjdvsk0vyhf579kk7x27rtfjg2c9vyucmdemnqka06sc4h35h: {
          uinit: "0"
        },
        init1fl48vsnmsdzcv85q5d2q4z5ajdha8yu3mdfuj4: {
          "move/543b35a39cfadad3da3c23249c474455d15efd2f94f849473226dee8a3c7a9e1":
            "-3508258915"
        },
        init1jv65s3grqf6v6jl3dp4t6c9t9rk99cd8ffy0za: { uinit: "-10169" },
        init1tygms3xhhs3yv487phx3dw4a95jn7t7l0d4dyp: {
          "move/543b35a39cfadad3da3c23249c474455d15efd2f94f849473226dee8a3c7a9e1":
            "3508258915"
        },
        init1xqrvfuga56m4alc7lz0rhnkwy5z8d5pefg8vz9: { uinit: "10169" }
      },
      object: {},
      vm: "move"
    });

    expect(totalBalanceChanges).toEqual({
      ft: {
        init1e3x65lxn3wjdvsk0vyhf579kk7x27rtfjg2c9vyucmdemnqka06sc4h35h: {
          uinit: "0"
        },
        init1fl48vsnmsdzcv85q5d2q4z5ajdha8yu3mdfuj4: {
          "move/543b35a39cfadad3da3c23249c474455d15efd2f94f849473226dee8a3c7a9e1":
            "-3508258915"
        },
        init1jv65s3grqf6v6jl3dp4t6c9t9rk99cd8ffy0za: { uinit: "-10169" },
        init1tygms3xhhs3yv487phx3dw4a95jn7t7l0d4dyp: {
          "move/543b35a39cfadad3da3c23249c474455d15efd2f94f849473226dee8a3c7a9e1":
            "3508258915"
        },
        init1xqrvfuga56m4alc7lz0rhnkwy5z8d5pefg8vz9: { uinit: "10169" }
      },
      object: {},
      vm: "move"
    });
  });
});
