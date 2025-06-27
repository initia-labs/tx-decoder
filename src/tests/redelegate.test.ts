import axios from "axios";

import {
  mockApiResponsesRedelegate,
  mockMsgRedelegate,
} from "@/tests/fixtures/redelegate.fixture";

import { createMockApiHandler, initialize } from "./helpers";

jest.mock("axios");
const decoder = initialize();
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("Redelegate Message", () => {
  it("should decode a redelegate message correctly", async () => {
    mockedAxios.get.mockImplementation(
      createMockApiHandler(mockApiResponsesRedelegate)
    );

    const { messages, totalBalanceChanges } = await decoder.decodeTransaction(
      mockMsgRedelegate
    );
    const { balanceChanges, decodedMessage } = messages[0];

    expect(messages).toHaveLength(1);
    expect(decodedMessage).toEqual({
      action: "redelegate",
      data: {
        coins: [
          {
            amount: "49340",
            denom: "uinit",
          },
        ],
        delegatorAddress: "init1kw2unuhgfa6mz6r0ehrzlr9k9ftjk7pql8u5fm",
        validatorDst: {
          description: {
            details:
              "Cosmostation is an institutional-grade cryptocurrency infrastructure provider, managing billions of dollars across 70 protocols. Since 2018, we have served more than 500k users globally, providing products that enable protocols to scale.",
            identity: "AE4C403A6E7AA1AC",
            moniker: "Cosmostation",
            security_contact: "node@stamper.network",
            website: "https://www.cosmostation.io",
          },
          operator_address:
            "initvaloper19uzc087w778p0l333w52ju0dgsajcj6ydep4rm",
        },
        validatorSrc: {
          description: {
            details: "Provides secure validation services for dPoS networks",
            identity: "8957C5091FBF4192",
            moniker: "B-Harvest",
            security_contact: "contact@bharvest.io",
            website: "https://bharvest.io",
          },
          operator_address:
            "initvaloper1cmlx2pqfgt2kpshe2fmc40epzvg699eqv3ax66",
        },
      },
      isIbc: false,
      isOp: false,
    });

    // This is staking reward
    expect(balanceChanges).toEqual({
      ft: {
        init1jv65s3grqf6v6jl3dp4t6c9t9rk99cd8ffy0za: {
          uinit: "-2",
        },
        init1kw2unuhgfa6mz6r0ehrzlr9k9ftjk7pql8u5fm: {
          uinit: "2",
        },
      },
      object: {},
    });

    // This is staking reward
    expect(totalBalanceChanges).toEqual({
      ft: {
        init1jv65s3grqf6v6jl3dp4t6c9t9rk99cd8ffy0za: {
          uinit: "-2",
        },
        init1kw2unuhgfa6mz6r0ehrzlr9k9ftjk7pql8u5fm: {
          uinit: "2",
        },
      },
      object: {},
    });
  });
});
