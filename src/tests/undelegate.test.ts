import axios from "axios";

import {
  mockApiResponseUndelegate,
  mockApiResponseUndelegateLocked,
  mockMsgUndelegate,
  mockMsgUndelegateLocked,
} from "./fixtures/undelegate.fixture";
import { createMockApiHandler, initialize } from "./helpers";

jest.mock("axios");
const decoder = initialize();
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("Undelegate Message", () => {
  it("should decode an undelegate message correctly", async () => {
    const mockApiHandler = createMockApiHandler(mockApiResponseUndelegate);
    mockedAxios.get.mockImplementation(mockApiHandler);

    const { messages, totalBalanceChanges } = await decoder.decodeTransaction(
      mockMsgUndelegate
    );

    const { balanceChanges, decodedMessage } = messages[0];

    expect(messages).toHaveLength(1);

    expect(decodedMessage).toEqual({
      action: "undelegate",
      data: {
        coins: [
          {
            amount: "7618096",
            denom:
              "move/543b35a39cfadad3da3c23249c474455d15efd2f94f849473226dee8a3c7a9e1",
          },
        ],
        delegatorAddress: "init15elwv4zlwas7zz8mw7lhlcfc3j64uea0dzkew0",
        validator: {
          details:
            "The go-to blockchain security firm for top teams, specializing in Cosmos, EVM, ZK, Move (Aptos and Sui). We solve your hardest security problems.\\nTwitter: https://twitter.com/zellic_io\\nTelegram: t.me/zellic_io",
          identity: "609C091636D1330B",
          moniker: "Zellic",
          security_contact: "security@zellic.io",
          website: "https://zellic.io/",
        },
      },
      isIbc: false,
      isOp: false,
    });

    expect(balanceChanges).toEqual({
      ft: {
        init1fl48vsnmsdzcv85q5d2q4z5ajdha8yu3mdfuj4: {
          "USDC-INIT": "-7618096",
        },
        init1jv65s3grqf6v6jl3dp4t6c9t9rk99cd8ffy0za: { uinit: "-776583" },
        init1tygms3xhhs3yv487phx3dw4a95jn7t7l0d4dyp: { "USDC-INIT": "7618096" },
        init15elwv4zlwas7zz8mw7lhlcfc3j64uea0dzkew0: { uinit: "776583" },
      },
      object: {},
    });

    expect(totalBalanceChanges).toEqual({
      ft: {
        init1fl48vsnmsdzcv85q5d2q4z5ajdha8yu3mdfuj4: {
          "USDC-INIT": "-7618096",
        },
        init1jv65s3grqf6v6jl3dp4t6c9t9rk99cd8ffy0za: { uinit: "-776583" },
        init1tygms3xhhs3yv487phx3dw4a95jn7t7l0d4dyp: { "USDC-INIT": "7618096" },
        init15elwv4zlwas7zz8mw7lhlcfc3j64uea0dzkew0: { uinit: "776583" },
      },
      object: {},
    });
  });

  it("should decode an undelegate locked message correctly", async () => {
    const mockApiHandler = createMockApiHandler(
      mockApiResponseUndelegateLocked
    );
    mockedAxios.get.mockImplementation(mockApiHandler);

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
              "move/543b35a39cfadad3da3c23249c474455d15efd2f94f849473226dee8a3c7a9e1",
          },
        ],
        delegatorAddress: "init1xqrvfuga56m4alc7lz0rhnkwy5z8d5pefg8vz9",
        validator: {
          details:
            "Delphi Consulting delivers expert crypto consulting across technology assessment, token advisory, asset intelligence, education, and design services.",
          identity: "2F47665C54DB2742",
          moniker: "Delphi Consulting",
          security_contact: "ops@delphiconsulting.io",
          website: "https://delphidigital.io/consulting",
        },
      },
      isIbc: false,
      isOp: false,
    });

    expect(balanceChanges).toEqual({
      ft: {
        init1e3x65lxn3wjdvsk0vyhf579kk7x27rtfjg2c9vyucmdemnqka06sc4h35h: {
          uinit: "0",
        },
        init1fl48vsnmsdzcv85q5d2q4z5ajdha8yu3mdfuj4: {
          "USDC-INIT": "-3508258915",
        },
        init1jv65s3grqf6v6jl3dp4t6c9t9rk99cd8ffy0za: { uinit: "-10169" },
        init1tygms3xhhs3yv487phx3dw4a95jn7t7l0d4dyp: {
          "USDC-INIT": "3508258915",
        },
        init1xqrvfuga56m4alc7lz0rhnkwy5z8d5pefg8vz9: { uinit: "10169" },
      },
      object: {},
    });

    expect(totalBalanceChanges).toEqual({
      ft: {
        init1e3x65lxn3wjdvsk0vyhf579kk7x27rtfjg2c9vyucmdemnqka06sc4h35h: {
          uinit: "0",
        },
        init1fl48vsnmsdzcv85q5d2q4z5ajdha8yu3mdfuj4: {
          "USDC-INIT": "-3508258915",
        },
        init1jv65s3grqf6v6jl3dp4t6c9t9rk99cd8ffy0za: { uinit: "-10169" },
        init1tygms3xhhs3yv487phx3dw4a95jn7t7l0d4dyp: {
          "USDC-INIT": "3508258915",
        },
        init1xqrvfuga56m4alc7lz0rhnkwy5z8d5pefg8vz9: { uinit: "10169" },
      },
      object: {},
    });
  });
});
