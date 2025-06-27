import axios from "axios";

import { mockApiResponsesRedelegate, mockMsgRedelegate } from "@/tests/fixtures/redelegate.fixture";

import { createMockApiHandler, initialize } from "./helpers";

jest.mock("axios");
const decoder = initialize();
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("Redelegate Message", () => {
  it("should decode a redelegate message correctly", async () => {
    mockedAxios.get.mockImplementation(createMockApiHandler(mockApiResponsesRedelegate));

    const decoded = await decoder.decodeTransaction(mockMsgRedelegate);

    expect(decoded.messages).toHaveLength(1);
    expect(decoded.messages[0].decodedMessage).toEqual({
      action: "redelegate",
      data: {
        coins: [
          {
            amount: "49340",
            denom: "uinit",
          },
        ],
        delegatorAddress: "init1kw2unuhgfa6mz6r0ehrzlr9k9ftjk7pql8u5fm",
        validatorDstAddress: "initvaloper19uzc087w778p0l333w52ju0dgsajcj6ydep4rm",
        validatorSrcAddress: "initvaloper1cmlx2pqfgt2kpshe2fmc40epzvg699eqv3ax66",
      },
      isIbc: false,
      isOp: false,
    });

    expect(decoded.messages[0].balanceChanges).toEqual({
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

    expect(decoded.totalBalanceChanges).toEqual({
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
