import { TxDecoder } from "@/index";
import {
  initialize,
  mockedAxios,
  resetMockApi,
  setupMockApi
} from "@/tests/_shared/helpers";

import {
  mockApiResponsesForFtReceiveMove,
  mockApiResponsesForFtReceiveMoveFromL2,
  mockApiResponsesForFtReceiveMoveUnwoundFromL2,
  mockFtReceiveMoveFromL2Transaction,
  mockFtReceiveMoveTransaction,
  mockFtReceiveMoveUnwoundFromL2Transaction
} from "./receive-ft-move.fixture";

jest.mock("axios");
let decoder: TxDecoder;

describe("IBC Receive FT Message", () => {
  beforeEach(() => {
    decoder = initialize();
    resetMockApi(mockedAxios);
  });

  it("should decode IBC transfer receive message", async () => {
    setupMockApi(mockedAxios, mockApiResponsesForFtReceiveMove);

    const decoded = await decoder.decodeCosmosTransaction(
      mockFtReceiveMoveTransaction
    );

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
    setupMockApi(mockedAxios, mockApiResponsesForFtReceiveMoveFromL2);

    const decoded = await decoder.decodeCosmosTransaction(
      mockFtReceiveMoveFromL2Transaction
    );

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
      object: {},
      vm: "move"
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
      object: {},
      vm: "move"
    });
  });

  it("should decode IBC FT receive of a non-native token returning from L2", async () => {
    setupMockApi(mockedAxios, mockApiResponsesForFtReceiveMoveUnwoundFromL2);

    const decoded = await decoder.decodeCosmosTransaction(
      mockFtReceiveMoveUnwoundFromL2Transaction
    );

    expect(decoded.messages).toHaveLength(2);

    expect(decoded.messages[1].decodedMessage).toEqual({
      action: "ibc_ft_receive",
      data: {
        amount: "1443943",
        denom:
          "ibc/6490A7EAB61059BFC1CDDEB05917DD70BDF3A611654162A1A47DB930D40D8AF4",
        dstChainId: "interwoven-1",
        dstChannel: "channel-35",
        dstPort: "transfer",
        receiver:
          "init1kvms7tk5dpg9v2e24f3k69v6gwwu8vls0q3dahxluw5g0qwp02nsm8934k",
        sender: "init1erf482y7vfp8dg8jut672e9zenyw4gxxk54wjq",
        sequence: "20240",
        srcChainId: "echelon-1",
        srcChannel: "channel-0",
        srcPort: "transfer",
        timeoutHeight: {
          revision_height: "0",
          revision_number: "0"
        },
        timeoutTimestamp: "1793593105158000000"
      },
      isIbc: true,
      isOp: false
    });

    expect(decoded.messages[1].balanceChanges).toEqual({
      ft: {
        init1erf482y7vfp8dg8jut672e9zenyw4gxxk54wjq: {
          "ibc/6490A7EAB61059BFC1CDDEB05917DD70BDF3A611654162A1A47DB930D40D8AF4":
            "1443943"
        },
        init16yjjgtmrnux5e7yv4g4an9zm3s27x2e2val75ef88l6kjcektr4q3zkj2r: {
          "ibc/6490A7EAB61059BFC1CDDEB05917DD70BDF3A611654162A1A47DB930D40D8AF4":
            "0"
        },
        init18hp3fwp29gqvl6a0uz034thj2nr25s3zrz3kg4: {
          "ibc/6490A7EAB61059BFC1CDDEB05917DD70BDF3A611654162A1A47DB930D40D8AF4":
            "-1443943"
        }
      },
      object: {},
      vm: "move"
    });

    expect(decoded.totalBalanceChanges).toEqual(
      decoded.messages[1].balanceChanges
    );
  });
});
