import axios from "axios";

import {
  mockApiResponsesDelegate,
  mockApiResponsesDelegateLocked,
  mockMsgDelegate,
  mockMsgDelegateLocked,
} from "./fixtures/delegate.fixture";
import { createMockApiHandler, initialize } from "./helpers";

jest.mock("axios");

const decoder = initialize();
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("Delegate Message", () => {
  beforeEach(() => {
    mockedAxios.get.mockReset();
  });

  it("should decode a delegate message correctly", async () => {
    mockedAxios.get.mockImplementation(
      createMockApiHandler(mockApiResponsesDelegate)
    );

    const decoded = await decoder.decodeTransaction(mockMsgDelegate);

    expect(decoded.messages).toHaveLength(1);
    expect(decoded.messages[0]).toEqual({
      balanceChanges: {
        ft: {
          init1fl48vsnmsdzcv85q5d2q4z5ajdha8yu3mdfuj4: {
            uinit: "100000",
          },
          init1kw2unuhgfa6mz6r0ehrzlr9k9ftjk7pql8u5fm: {
            uinit: "-100000",
          },
        },
        object: {},
      },
      decodedMessage: {
        action: "delegate",
        data: {
          coins: [
            {
              amount: "100000",
              denom: "uinit",
            },
          ],
          delegatorAddress: "init1kw2unuhgfa6mz6r0ehrzlr9k9ftjk7pql8u5fm",
          validatorAddress:
            "initvaloper1cmlx2pqfgt2kpshe2fmc40epzvg699eqv3ax66",
        },
        isIbc: false,
        isOp: false,
      },
    });

    expect(decoded.totalBalanceChanges).toEqual({
      ft: {
        init1fl48vsnmsdzcv85q5d2q4z5ajdha8yu3mdfuj4: {
          uinit: "100000",
        },
        init1kw2unuhgfa6mz6r0ehrzlr9k9ftjk7pql8u5fm: {
          uinit: "-100000",
        },
      },
      object: {},
    });
  });

  it("should decode a delegate locked message correctly", async () => {
    mockedAxios.get.mockImplementation(
      createMockApiHandler(mockApiResponsesDelegateLocked)
    );

    const decoded = await decoder.decodeTransaction(mockMsgDelegateLocked);

    expect(decoded.messages).toHaveLength(1);
    expect(decoded.messages[0].decodedMessage).toEqual({
      action: "delegate",
      data: {
        coins: [
          {
            amount: "400000",
            denom: "uinit",
          },
        ],
        delegatorAddress: "init1kw2unuhgfa6mz6r0ehrzlr9k9ftjk7pql8u5fm",
        validatorAddress: "initvaloper1qx6ghyv83caecuxgl77lvlnha9d9y6fntryc8a",
      },
      isIbc: false,
      isOp: false,
    });
    expect(decoded.messages[0].balanceChanges).toEqual({
      ft: {
        init1fl48vsnmsdzcv85q5d2q4z5ajdha8yu3mdfuj4: {
          uinit: "400000",
        },
        init1kw2unuhgfa6mz6r0ehrzlr9k9ftjk7pql8u5fm: {
          uinit: "-400000",
        },
        init1q42q8rd6a9yyy7um0kqc4xqgudn8tjpxwezt9rd9udaycccd4tys30hvzx: {
          uinit: "0",
        },
      },
      object: {},
    });

    expect(decoded.totalBalanceChanges).toEqual({
      ft: {
        init1fl48vsnmsdzcv85q5d2q4z5ajdha8yu3mdfuj4: {
          uinit: "400000",
        },
        init1kw2unuhgfa6mz6r0ehrzlr9k9ftjk7pql8u5fm: {
          uinit: "-400000",
        },
        init1q42q8rd6a9yyy7um0kqc4xqgudn8tjpxwezt9rd9udaycccd4tys30hvzx: {
          uinit: "0",
        },
      },
      object: {},
    });
  });
});
