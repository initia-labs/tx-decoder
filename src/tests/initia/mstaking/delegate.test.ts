import {
  initialize,
  mockedAxios,
  resetMockApi,
  setupMockApi
} from "@/tests/_shared/helpers";

import {
  mockApiResponsesForDelegate,
  mockApiResponsesForDelegateLocked,
  mockMsgDelegate,
  mockMsgDelegateLocked
} from "./delegate.fixture";

jest.mock("axios");

const decoder = initialize();

describe("Staking Messages - Delegate", () => {
  beforeEach(() => {
    resetMockApi(mockedAxios);
  });

  it("should decode a delegate message correctly", async () => {
    setupMockApi(mockedAxios, mockApiResponsesForDelegate);

    const { messages, totalBalanceChanges } =
      await decoder.decodeTransaction(mockMsgDelegate);

    expect(messages).toHaveLength(1);
    expect(messages[0]).toEqual({
      balanceChanges: {
        ft: {
          init1fl48vsnmsdzcv85q5d2q4z5ajdha8yu3mdfuj4: {
            uinit: "100000"
          },
          init1kw2unuhgfa6mz6r0ehrzlr9k9ftjk7pql8u5fm: {
            uinit: "-100000"
          }
        },
        object: {}
      },
      decodedMessage: {
        action: "delegate",
        data: {
          coins: [
            {
              amount: "100000",
              denom: "uinit"
            }
          ],
          delegatorAddress: "init1kw2unuhgfa6mz6r0ehrzlr9k9ftjk7pql8u5fm",
          validator: {
            description: {
              details: "Provides secure validation services for dPoS networks",
              identity: "8957C5091FBF4192",
              moniker: "B-Harvest",
              security_contact: "contact@bharvest.io",
              website: "https://bharvest.io"
            },
            operator_address:
              "initvaloper1cmlx2pqfgt2kpshe2fmc40epzvg699eqv3ax66"
          },
          validatorAddress: "initvaloper1cmlx2pqfgt2kpshe2fmc40epzvg699eqv3ax66"
        },
        isIbc: false,
        isOp: false
      }
    });

    expect(totalBalanceChanges).toEqual({
      ft: {
        init1fl48vsnmsdzcv85q5d2q4z5ajdha8yu3mdfuj4: {
          uinit: "100000"
        },
        init1kw2unuhgfa6mz6r0ehrzlr9k9ftjk7pql8u5fm: {
          uinit: "-100000"
        }
      },
      object: {}
    });
  });

  it("should decode a delegate locked message correctly", async () => {
    setupMockApi(mockedAxios, mockApiResponsesForDelegateLocked);

    const decoded = await decoder.decodeTransaction(mockMsgDelegateLocked);

    expect(decoded.messages).toHaveLength(1);
    expect(decoded.messages[0].decodedMessage).toEqual({
      action: "delegate",
      data: {
        coins: [
          {
            amount: "400000",
            denom: "uinit"
          }
        ],
        delegatorAddress: "init1kw2unuhgfa6mz6r0ehrzlr9k9ftjk7pql8u5fm",
        releaseTimestamp: "1753234484",
        validator: {
          description: {
            details:
              "Secure, enterprise-grade validator committed to investing heavily in educating, promoting, and expanding the Initia community and ecosystem.",
            identity: "A2879F08F59FB0AF",
            moniker: "Orbital Command",
            security_contact: "",
            website: "https://orbitalcommand.io"
          },
          operator_address: "initvaloper1qx6ghyv83caecuxgl77lvlnha9d9y6fntryc8a"
        },
        validatorAddress: "initvaloper1qx6ghyv83caecuxgl77lvlnha9d9y6fntryc8a"
      },
      isIbc: false,
      isOp: false
    });
    expect(decoded.messages[0].balanceChanges).toEqual({
      ft: {
        init1fl48vsnmsdzcv85q5d2q4z5ajdha8yu3mdfuj4: {
          uinit: "400000"
        },
        init1kw2unuhgfa6mz6r0ehrzlr9k9ftjk7pql8u5fm: {
          uinit: "-400000"
        },
        init1q42q8rd6a9yyy7um0kqc4xqgudn8tjpxwezt9rd9udaycccd4tys30hvzx: {
          uinit: "0"
        }
      },
      object: {}
    });

    expect(decoded.totalBalanceChanges).toEqual({
      ft: {
        init1fl48vsnmsdzcv85q5d2q4z5ajdha8yu3mdfuj4: {
          uinit: "400000"
        },
        init1kw2unuhgfa6mz6r0ehrzlr9k9ftjk7pql8u5fm: {
          uinit: "-400000"
        },
        init1q42q8rd6a9yyy7um0kqc4xqgudn8tjpxwezt9rd9udaycccd4tys30hvzx: {
          uinit: "0"
        }
      },
      object: {}
    });
  });
});
