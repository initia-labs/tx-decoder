import axios from "axios";

import {
  mockMsgUndelegate,
  mockMsgUndelegateLocked,
} from "./fixtures/undelegate.fixture";
import { createMockApiHandler, initialize } from "./helpers";

jest.mock("axios");
const decoder = initialize();
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("Undelegate Message", () => {
  it("should decode an undelegate message correctly", async () => {
    const mockApiHandler = createMockApiHandler(mockMsgUndelegate);
    mockedAxios.get.mockImplementation(mockApiHandler);
    const decoded = await decoder.decodeTransaction(mockMsgUndelegate);

    expect(decoded.messages).toHaveLength(1);
    expect(decoded.messages[0].decodedMessage).toEqual({
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
        validatorAddress: "initvaloper1r20z6zmlnqrea5p9cendrgeke35nxzfueqwaz6",
      },
      isIbc: false,
      isOp: false,
    });
    expect(decoded.messages[0].balanceChanges).toEqual({
      ft: {
        init15elwv4zlwas7zz8mw7lhlcfc3j64uea0dzkew0: {
          "move/543b35a39cfadad3da3c23249c474455d15efd2f94f849473226dee8a3c7a9e1":
            "7618096",
        },
      },
      object: {},
    });

    // expect(decoded.balanceChanges).toEqual({
    //   ft: {
    //     init15elwv4zlwas7zz8mw7lhlcfc3j64uea0dzkew0: {
    //       "move/543b35a39cfadad3da3c23249c474455d15efd2f94f849473226dee8a3c7a9e1":
    //         "7618096",
    //     },
    //   },
    //   object: {},
    // });
  });

  it("should decode an undelegate locked message correctly", async () => {
    const decoded = await decoder.decodeTransaction(mockMsgUndelegateLocked);

    expect(decoded.messages).toHaveLength(1);
    expect(decoded.messages[0].decodedMessage).toEqual({
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
        validatorAddress: "initvaloper1qgje6dgazcruzsashpqektp2yaf47x2wyysjqx",
      },
      isIbc: false,
      isOp: false,
    });

    // expect(decoded.balanceChanges).toEqual({
    //   ft: {
    //     init1xqrvfuga56m4alc7lz0rhnkwy5z8d5pefg8vz9: {
    //       "move/543b35a39cfadad3da3c23249c474455d15efd2f94f849473226dee8a3c7a9e1":
    //         "3508258915",
    //     },
    //   },
    //   object: {},
    // });
  });
});
