import {
  initialize,
  mockedAxios,
  resetMockApi,
  setupMockApi
} from "@/tests/_shared/helpers";

import {
  mockApiResponsesForFtSendMove,
  mockFtSendMoveTransaction
} from "./send-ft-move.fixture";

jest.mock("axios");
const decoder = initialize();

describe("IBC Send FT Message", () => {
  beforeEach(() => {
    resetMockApi(mockedAxios);
  });

  it("should decode IBC transfer message", async () => {
    setupMockApi(mockedAxios, mockApiResponsesForFtSendMove);

    const decoded = await decoder.decodeCosmosTransaction(
      mockFtSendMoveTransaction
    );

    expect(decoded.messages).toHaveLength(1);
    expect(decoded.messages[0].decodedMessage).toEqual({
      action: "ibc_ft_send",
      data: {
        amount: "200000",
        denom: "uinit",
        dstChainId: "moo-1",
        dstChannel: "channel-0",
        dstPort: "transfer",
        receiver: "init1kw2unuhgfa6mz6r0ehrzlr9k9ftjk7pql8u5fm",
        sender: "init1kw2unuhgfa6mz6r0ehrzlr9k9ftjk7pql8u5fm",
        sequence: "2898",
        srcChainId: "interwoven-1",
        srcChannel: "channel-29",
        srcPort: "transfer",
        timeoutHeight: {
          revision_height: "0",
          revision_number: "0"
        },
        timeoutTimestamp: "1751257396110677500"
      },
      isIbc: true,
      isOp: false
    });
    expect(decoded.messages[0].balanceChanges).toEqual({
      ft: {
        init1je5zsemauel5dqjwug9snfvkwr8hks9zrfgla2: {
          uinit: "200000"
        },
        init1kw2unuhgfa6mz6r0ehrzlr9k9ftjk7pql8u5fm: {
          uinit: "-200000"
        }
      },
      object: {},
      vm: "move"
    });
    expect(decoded.totalBalanceChanges).toEqual({
      ft: {
        init1je5zsemauel5dqjwug9snfvkwr8hks9zrfgla2: {
          uinit: "200000"
        },
        init1kw2unuhgfa6mz6r0ehrzlr9k9ftjk7pql8u5fm: {
          uinit: "-200000"
        }
      },
      object: {},
      vm: "move"
    });
  });
});
