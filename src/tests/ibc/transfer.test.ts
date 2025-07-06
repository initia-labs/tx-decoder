import {
  mockApiResponsesForMsgIbcRecvPacket,
  mockMsgIbcFtReceive,
} from "../fixtures/ibc/receive-ft.fixture";
import {
  mockApiResponsesForMsgIbcSend,
  mockMsgIbcSendFt,
} from "../fixtures/ibc/send-ft.fixture";
import {
  initialize,
  mockedAxios,
  resetMockApi,
  setupMockApi,
} from "../helpers";

jest.mock("axios");
const decoder = initialize();

describe("IBC Transfer Decoder", () => {
  beforeEach(() => {
    resetMockApi(mockedAxios);
  });

  it("should decode IBC transfer message", async () => {
    setupMockApi(mockedAxios, mockApiResponsesForMsgIbcSend);

    const decoded = await decoder.decodeTransaction(mockMsgIbcSendFt);

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
        srcChainId: "interwoven-1",
        srcChannel: "channel-29",
        srcPort: "transfer",
        timeoutHeight: {
          revision_height: "0",
          revision_number: "0",
        },
        timeoutTimestamp: "1751257396110677500",
      },
      isIbc: true,
      isOp: false,
    });
    expect(decoded.messages[0].balanceChanges).toEqual({
      ft: {
        init1je5zsemauel5dqjwug9snfvkwr8hks9zrfgla2: {
          uinit: "200000",
        },
        init1kw2unuhgfa6mz6r0ehrzlr9k9ftjk7pql8u5fm: {
          uinit: "-200000",
        },
      },
      object: {},
    });
    expect(decoded.totalBalanceChanges).toEqual({
      ft: {
        init1je5zsemauel5dqjwug9snfvkwr8hks9zrfgla2: {
          uinit: "200000",
        },
        init1kw2unuhgfa6mz6r0ehrzlr9k9ftjk7pql8u5fm: {
          uinit: "-200000",
        },
      },
      object: {},
    });
  });

  it("should decode IBC transfer receive message", async () => {
    setupMockApi(mockedAxios, mockApiResponsesForMsgIbcRecvPacket);

    const decoded = await decoder.decodeTransaction(mockMsgIbcFtReceive);

    expect(decoded.messages).toHaveLength(2);
    expect(decoded.messages[1].decodedMessage).toEqual({
      action: "ibc_ft_receive",
      data: {
        amount: "200000",
        denom: "uinit",
        dstChainId: "moo-1",
        dstChannel: "channel-0",
        dstPort: "transfer",
        receiver: "init1kw2unuhgfa6mz6r0ehrzlr9k9ftjk7pql8u5fm",
        sender: "init1kw2unuhgfa6mz6r0ehrzlr9k9ftjk7pql8u5fm",
        srcChainId: "interwoven-1",
        srcChannel: "channel-29",
        srcPort: "transfer",
        timeoutHeight: {
          revision_height: "0",
          revision_number: "0",
        },
        timeoutTimestamp: "1751257396110677500",
      },
      isIbc: true,
      isOp: false,
    });
  });
});
