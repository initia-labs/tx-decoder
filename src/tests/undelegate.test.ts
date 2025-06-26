import { mockMsgUndelegateLocked } from "@/tests/fixtures/undelegate.fixture";

import {
  mockMsgUndelegate,
  mockMsgUndelegateWithMultipleCoins,
} from "./fixtures/undelegate.fixture";
import { initialize } from "./helpers";

jest.mock("axios");
const decoder = initialize();

describe("Undelegate Message", () => {
  it("should decode an undelegate message correctly", async () => {
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

  it("should decode an undelegate message with multiple coins correctly", async () => {
    const decoded = await decoder.decodeTransaction(
      mockMsgUndelegateWithMultipleCoins
    );

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
          {
            amount: "1234567",
            denom:
              "move/9876543210abcdef1234567890abcdef1234567890abcdef1234567890abcdef",
          },
        ],
        delegatorAddress: "init15elwv4zlwas7zz8mw7lhlcfc3j64uea0dzkew0",
        validatorAddress: "initvaloper1r20z6zmlnqrea5p9cendrgeke35nxzfueqwaz6",
      },
      isIbc: false,
      isOp: false,
    });

    // expect(decoded.balanceChanges).toEqual({
    //   ft: {
    //     init15elwv4zlwas7zz8mw7lhlcfc3j64uea0dzkew0: {
    //       "move/543b35a39cfadad3da3c23249c474455d15efd2f94f849473226dee8a3c7a9e1":
    //         "7618096",
    //       "move/9876543210abcdef1234567890abcdef1234567890abcdef1234567890abcdef":
    //         "1234567",
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
