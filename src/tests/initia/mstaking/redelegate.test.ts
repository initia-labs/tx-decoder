import {
  initialize,
  mockedAxios,
  resetMockApi,
  setupMockApi
} from "@/tests/_shared/helpers";

import {
  mockApiResponsesForRedelegate,
  mockApiResponsesForRedelegateLocked,
  mockMsgRedelegate,
  mockMsgRedelegateLocked
} from "./redelegate.fixture";

jest.mock("axios");

const decoder = initialize();

describe("Staking Messages - Redelegate", () => {
  beforeEach(() => {
    resetMockApi(mockedAxios);
  });

  it("should decode a redelegate message correctly", async () => {
    setupMockApi(mockedAxios, mockApiResponsesForRedelegate);

    const { messages, totalBalanceChanges } =
      await decoder.decodeTransaction(mockMsgRedelegate);
    const { balanceChanges, decodedMessage } = messages[0];

    expect(messages).toHaveLength(1);
    expect(decodedMessage).toEqual({
      action: "redelegate",
      data: {
        coins: [
          {
            amount: "49340",
            denom: "uinit"
          }
        ],
        delegatorAddress: "init1kw2unuhgfa6mz6r0ehrzlr9k9ftjk7pql8u5fm",
        validatorDst: {
          description: {
            details:
              "Cosmostation is an institutional-grade cryptocurrency infrastructure provider, managing billions of dollars across 70 protocols. Since 2018, we have served more than 500k users globally, providing products that enable protocols to scale.",
            identity: "AE4C403A6E7AA1AC",
            moniker: "Cosmostation",
            security_contact: "node@stamper.network",
            website: "https://www.cosmostation.io"
          },
          operator_address: "initvaloper19uzc087w778p0l333w52ju0dgsajcj6ydep4rm"
        },
        validatorDstAddress:
          "initvaloper19uzc087w778p0l333w52ju0dgsajcj6ydep4rm",
        validatorSrc: {
          description: {
            details: "Provides secure validation services for dPoS networks",
            identity: "8957C5091FBF4192",
            moniker: "B-Harvest",
            security_contact: "contact@bharvest.io",
            website: "https://bharvest.io"
          },
          operator_address: "initvaloper1cmlx2pqfgt2kpshe2fmc40epzvg699eqv3ax66"
        },
        validatorSrcAddress:
          "initvaloper1cmlx2pqfgt2kpshe2fmc40epzvg699eqv3ax66"
      },
      isIbc: false,
      isOp: false
    });

    // This is staking reward
    expect(balanceChanges).toEqual({
      ft: {
        init1jv65s3grqf6v6jl3dp4t6c9t9rk99cd8ffy0za: {
          uinit: "-2"
        },
        init1kw2unuhgfa6mz6r0ehrzlr9k9ftjk7pql8u5fm: {
          uinit: "2"
        }
      },
      object: {},
      vm: "move"
    });

    // This is staking reward
    expect(totalBalanceChanges).toEqual({
      ft: {
        init1jv65s3grqf6v6jl3dp4t6c9t9rk99cd8ffy0za: {
          uinit: "-2"
        },
        init1kw2unuhgfa6mz6r0ehrzlr9k9ftjk7pql8u5fm: {
          uinit: "2"
        }
      },
      object: {},
      vm: "move"
    });
  });

  it("should decode a redelegate locked message correctly", async () => {
    setupMockApi(mockedAxios, mockApiResponsesForRedelegateLocked);
    const { messages, totalBalanceChanges } = await decoder.decodeTransaction(
      mockMsgRedelegateLocked
    );

    const { balanceChanges, decodedMessage } = messages[0];

    expect(messages).toHaveLength(1);
    expect(decodedMessage).toEqual({
      action: "redelegate",
      data: {
        coins: [
          {
            amount: "1083469",
            denom:
              "move/543b35a39cfadad3da3c23249c474455d15efd2f94f849473226dee8a3c7a9e1"
          }
        ],
        delegatorAddress: "init1tacytfqagzjv73v5ke2s4qj8l68c2w0q4v0q0n",
        validatorDst: {
          description: {
            details:
              "Four Pillars is a global blockchain research firm dedicated to providing insights and guidance for builders in the Web3 space. We track emerging blockchain trends, spotlight innovative crypto projects, and partner with companies that share our vision.",
            identity: "40FCEFE83A8394E3",
            moniker: "Four Pillars",
            security_contact: "",
            website: "https://4pillars.io"
          },
          operator_address: "initvaloper13ze0ryc7vfj2n86sfxfugww4qygjf8mnxxy9uk"
        },
        validatorDstAddress:
          "initvaloper13ze0ryc7vfj2n86sfxfugww4qygjf8mnxxy9uk",
        validatorSrc: {
          description: {
            details:
              "Delphi Consulting delivers expert crypto consulting across technology assessment, token advisory, asset intelligence, education, and design services.",
            identity: "2F47665C54DB2742",
            moniker: "Delphi Consulting",
            security_contact: "ops@delphiconsulting.io",
            website: "https://delphidigital.io/consulting"
          },
          operator_address: "initvaloper1qgje6dgazcruzsashpqektp2yaf47x2wyysjqx"
        },
        validatorSrcAddress:
          "initvaloper1qgje6dgazcruzsashpqektp2yaf47x2wyysjqx"
      },
      isIbc: false,
      isOp: false
    });

    expect(balanceChanges).toEqual({
      ft: {
        init1ed6zkyv8g87m9ymtc736mewx9gvvp0mtqyt2rfcnv9xucejmhnkqe22kyd: {
          uinit: "0"
        },
        init1jv65s3grqf6v6jl3dp4t6c9t9rk99cd8ffy0za: { uinit: "-33" },
        init1tacytfqagzjv73v5ke2s4qj8l68c2w0q4v0q0n: { uinit: "33" }
      },
      object: {},
      vm: "move"
    });

    expect(totalBalanceChanges).toEqual({
      ft: {
        init1ed6zkyv8g87m9ymtc736mewx9gvvp0mtqyt2rfcnv9xucejmhnkqe22kyd: {
          uinit: "0"
        },
        init1jv65s3grqf6v6jl3dp4t6c9t9rk99cd8ffy0za: { uinit: "-33" },
        init1tacytfqagzjv73v5ke2s4qj8l68c2w0q4v0q0n: { uinit: "33" }
      },
      object: {},
      vm: "move"
    });
  });
});
