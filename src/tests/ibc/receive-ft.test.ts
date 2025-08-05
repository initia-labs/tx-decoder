import { TxDecoder } from "@/index";

import {
  mockApiResponsesForMsgIbcRecvPacket,
  mockApiResponsesForMsgIbcRecvPacketFromL2,
  mockMsgIbcFtReceive,
  mockMsgIbcFtReceiveFromL2
} from "../fixtures/ibc/receive-ft.fixture";
import {
  initialize,
  mockedAxios,
  resetMockApi,
  setupMockApi
} from "../helpers";

jest.mock("axios");
let decoder: TxDecoder;

describe("IBC Receive FT Message", () => {
  beforeEach(() => {
    decoder = initialize();
    resetMockApi(mockedAxios);
  });

  it("should decode IBC transfer receive message", async () => {
    setupMockApi(mockedAxios, mockApiResponsesForMsgIbcRecvPacket);

    const decoded = await decoder.decodeTransaction(mockMsgIbcFtReceive);

    expect(decoded.messages).toHaveLength(2);
    expect(decoded.messages[1].decodedMessage).toEqual({
      action: "ibc_ft_receive",
      data: {
        amount: "200000",
        denom:
          "ibc/37A3FB4FED4CA04ED6D9E5DA36C6D27248645F0E22F585576A1488B8A89C5A50",
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
  });

  it("should decode IBC FT receive message from L2 correctly", async () => {
    setupMockApi(mockedAxios, mockApiResponsesForMsgIbcRecvPacketFromL2);

    const decoded = await decoder.decodeTransaction(mockMsgIbcFtReceiveFromL2);

    expect(decoded.messages).toHaveLength(2); // UpdateClient + RecvPacket

    expect(decoded.messages[0].decodedMessage.action).toEqual("not_supported");

    expect(decoded.messages[1].decodedMessage).toEqual({
      action: "ibc_ft_receive",
      data: {
        amount: "41000000",
        denom:
          "ibc/9055D784E46926951D1FF95AA41245B291FA9AAFFAE5C9D0D515877F647D5226",
        dstChainId: "interwoven-1",
        dstChannel: "channel-27",
        dstPort: "transfer",
        receiver:
          "init1222ugqjstnx03xg48c49hf3eau2e592wpkp8ag0x59gsjugemuvs65u8jh",
        sender: "init14dsj37rd5690dla64jl0mznuyhkqejhuyxc6sx",
        sequence: "4599",
        srcChainId: "civitia-1",
        srcChannel: "channel-0",
        srcPort: "transfer",
        timeoutHeight: {
          revision_height: "0",
          revision_number: "0"
        },
        timeoutTimestamp: "1751618649843083000"
      },
      isIbc: true,
      isOp: false
    });

    expect(decoded.messages[1].balanceChanges).toEqual({
      ft: {
        init1lg8fz9022uvtxvv35p7w3jzdyhzgvcx34n74avpl55z26ccpa3mqv6ccu6: {
          "ibc/9055D784E46926951D1FF95AA41245B291FA9AAFFAE5C9D0D515877F647D5226":
            "41000000"
        },
        init1xv9ufx6s9pxcffcnjn3su7367t8ja700fdg2fw4vd37x9qmcm53s8qsyxw: {
          uinit: "-40801114"
        },
        init1yl6hdjhmkf37639730gffanpzndzdpmhqfk6up: {
          "ibc/9055D784E46926951D1FF95AA41245B291FA9AAFFAE5C9D0D515877F647D5226":
            "0"
        },
        init1ylyfh69ndjq5uz6xrmaxffva546t4aeaek8vpn2lq3qzw9n7lw0qn9nzhl: {
          "ibc/9055D784E46926951D1FF95AA41245B291FA9AAFFAE5C9D0D515877F647D5226":
            "0",
          uinit: "0"
        },
        init14dsj37rd5690dla64jl0mznuyhkqejhuyxc6sx: { uinit: "40801114" }
      },
      object: {}
    });

    expect(decoded.totalBalanceChanges).toEqual({
      ft: {
        init1lg8fz9022uvtxvv35p7w3jzdyhzgvcx34n74avpl55z26ccpa3mqv6ccu6: {
          "ibc/9055D784E46926951D1FF95AA41245B291FA9AAFFAE5C9D0D515877F647D5226":
            "41000000"
        },
        init1xv9ufx6s9pxcffcnjn3su7367t8ja700fdg2fw4vd37x9qmcm53s8qsyxw: {
          uinit: "-40801114"
        },
        init1yl6hdjhmkf37639730gffanpzndzdpmhqfk6up: {
          "ibc/9055D784E46926951D1FF95AA41245B291FA9AAFFAE5C9D0D515877F647D5226":
            "0"
        },
        init1ylyfh69ndjq5uz6xrmaxffva546t4aeaek8vpn2lq3qzw9n7lw0qn9nzhl: {
          "ibc/9055D784E46926951D1FF95AA41245B291FA9AAFFAE5C9D0D515877F647D5226":
            "0",
          uinit: "0"
        },
        init14dsj37rd5690dla64jl0mznuyhkqejhuyxc6sx: { uinit: "40801114" }
      },
      object: {}
    });
  });
});
