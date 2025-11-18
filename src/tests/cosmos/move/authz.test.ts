import {
  initialize,
  mockedAxios,
  resetMockApi,
  setupMockApi
} from "@/tests/_shared/helpers";

import {
  mockApiResponsesForAuthzExec,
  mockApiResponsesForDelegate,
  mockApiResponsesForRealTx,
  mockApiResponsesForRealTx2,
  mockApiResponsesForUndelegate,
  mockApiResponsesForWithdrawReward,
  mockAuthzGrantTransaction,
  mockAuthzRevokeTransaction,
  mockMsgExecGranteeExecutesForGranter,
  mockMsgExecWithDelegate,
  mockMsgExecWithMultiple,
  mockMsgExecWithUndelegate,
  mockMsgExecWithWithdrawReward,
  mockRealMsgExecTransaction,
  mockRealMsgExecWithDifferentAddresses
} from "./authz.fixture";

jest.mock("axios");

const decoder = initialize();

describe("Authz Messages", () => {
  beforeEach(() => {
    resetMockApi(mockedAxios);
  });

  describe("MsgExec", () => {
    it("should decode real MsgExec transaction from blockchain", async () => {
      // Real transaction: https://scan-api.initia.xyz/v1/initia/interwoven-1/txs/4600CD81879C9D99A4C9EA4692448E3E40C4BBE0DB707C2E578CC2FEDC66CB71
      setupMockApi(mockedAxios, mockApiResponsesForRealTx);

      const decoded = await decoder.decodeCosmosTransaction(
        mockRealMsgExecTransaction
      );

      expect(decoded.messages).toHaveLength(1);
      expect(decoded.messages[0].decodedMessage).toEqual({
        action: "authz_exec",
        data: {
          grantee: "init1rw34mgv2y626996n2ccpl6lfctk43v7azmarvg",
          messages: [
            {
              action: "send",
              data: {
                coins: [{ amount: "1000000", denom: "uinit" }],
                from: "init1ryrg0mha5stezucvajy3mne8a74uhgmygdlnxp",
                to: "init1ryrg0mha5stezucvajy3mne8a74uhgmygdlnxp"
              },
              isIbc: false,
              isOp: false
            }
          ]
        },
        isIbc: false,
        isOp: false
      });

      // Since this is a self-send transaction, balance changes should net to zero
      expect(decoded.totalBalanceChanges).toEqual({
        ft: {
          init1ryrg0mha5stezucvajy3mne8a74uhgmygdlnxp: { uinit: "0" }
        },
        object: {},
        vm: "move"
      });
    });

    it("should decode real MsgExec with different addresses", async () => {
      setupMockApi(mockedAxios, mockApiResponsesForRealTx2);

      const decoded = await decoder.decodeCosmosTransaction(
        mockRealMsgExecWithDifferentAddresses
      );

      expect(decoded.messages).toHaveLength(1);
      expect(decoded.messages[0].decodedMessage).toEqual({
        action: "authz_exec",
        data: {
          grantee: "init1rw34mgv2y626996n2ccpl6lfctk43v7azmarvg",
          messages: [
            {
              action: "send",
              data: {
                coins: [{ amount: "1000000", denom: "uinit" }],
                from: "init1ryrg0mha5stezucvajy3mne8a74uhgmygdlnxp",
                to: "init17en47z7z0q5eh8fqaaclyfdsk073pcds5pu0gr"
              },
              isIbc: false,
              isOp: false
            }
          ]
        },
        isIbc: false,
        isOp: false
      });

      // Balance changes should show the transfer
      expect(decoded.messages[0].balanceChanges).toEqual({
        ft: {
          init1ryrg0mha5stezucvajy3mne8a74uhgmygdlnxp: { uinit: "-1000000" },
          init17en47z7z0q5eh8fqaaclyfdsk073pcds5pu0gr: { uinit: "1000000" }
        },
        object: {},
        vm: "move"
      });

      expect(decoded.totalBalanceChanges).toEqual({
        ft: {
          init1ryrg0mha5stezucvajy3mne8a74uhgmygdlnxp: { uinit: "-1000000" },
          init17en47z7z0q5eh8fqaaclyfdsk073pcds5pu0gr: { uinit: "1000000" }
        },
        object: {},
        vm: "move"
      });
    });

    it("should decode MsgExec wrapping multiple MsgSend messages", async () => {
      setupMockApi(mockedAxios, mockApiResponsesForAuthzExec);

      const decoded = await decoder.decodeCosmosTransaction(
        mockMsgExecWithMultiple
      );

      expect(decoded.messages).toHaveLength(1);
      expect(decoded.messages[0].decodedMessage.action).toBe("authz_exec");

      if (decoded.messages[0].decodedMessage.action === "authz_exec") {
        expect(decoded.messages[0].decodedMessage.data.grantee).toBe(
          "init1testgrantee"
        );
        expect(decoded.messages[0].decodedMessage.data.messages).toHaveLength(
          2
        );

        // First inner message: MsgSend
        expect(decoded.messages[0].decodedMessage.data.messages[0].action).toBe(
          "send"
        );
        if (
          decoded.messages[0].decodedMessage.data.messages[0].action === "send"
        ) {
          expect(
            decoded.messages[0].decodedMessage.data.messages[0].data.from
          ).toBe("init1sender");
          expect(
            decoded.messages[0].decodedMessage.data.messages[0].data.to
          ).toBe("init1receiver1");
        }

        // Second inner message: MsgSend
        expect(decoded.messages[0].decodedMessage.data.messages[1].action).toBe(
          "send"
        );
        if (
          decoded.messages[0].decodedMessage.data.messages[1].action === "send"
        ) {
          expect(
            decoded.messages[0].decodedMessage.data.messages[1].data.from
          ).toBe("init1sender");
          expect(
            decoded.messages[0].decodedMessage.data.messages[1].data.to
          ).toBe("init1receiver2");
        }
      }
    });

    it("should decode MsgExec wrapping MsgDelegate", async () => {
      setupMockApi(mockedAxios, mockApiResponsesForDelegate);

      const decoded = await decoder.decodeCosmosTransaction(
        mockMsgExecWithDelegate
      );

      expect(decoded.messages).toHaveLength(1);
      expect(decoded.messages[0].decodedMessage.action).toBe("authz_exec");

      if (decoded.messages[0].decodedMessage.action === "authz_exec") {
        expect(decoded.messages[0].decodedMessage.data.grantee).toBe(
          "init1testgrantee"
        );
        expect(decoded.messages[0].decodedMessage.data.messages).toHaveLength(
          1
        );

        const innerMessage =
          decoded.messages[0].decodedMessage.data.messages[0];
        expect(innerMessage.action).toBe("delegate");

        if (innerMessage.action === "delegate") {
          expect(innerMessage.data.delegatorAddress).toBe(
            "init1kw2unuhgfa6mz6r0ehrzlr9k9ftjk7pql8u5fm"
          );
          expect(innerMessage.data.validatorAddress).toBe(
            "initvaloper1cmlx2pqfgt2kpshe2fmc40epzvg699eqv3ax66"
          );
          expect(innerMessage.data.coins).toEqual([
            { amount: "100000", denom: "uinit" }
          ]);
          expect(innerMessage.data.validator).toEqual({
            description: {
              details: "Provides secure validation services for dPoS networks",
              identity: "8957C5091FBF4192",
              moniker: "B-Harvest",
              security_contact: "contact@bharvest.io",
              website: "https://bharvest.io"
            },
            operator_address:
              "initvaloper1cmlx2pqfgt2kpshe2fmc40epzvg699eqv3ax66"
          });
        }
      }
    });

    it("should decode MsgExec wrapping MsgWithdrawDelegatorReward", async () => {
      setupMockApi(mockedAxios, mockApiResponsesForWithdrawReward);

      const decoded = await decoder.decodeCosmosTransaction(
        mockMsgExecWithWithdrawReward
      );

      expect(decoded.messages).toHaveLength(1);
      expect(decoded.messages[0].decodedMessage.action).toBe("authz_exec");

      if (decoded.messages[0].decodedMessage.action === "authz_exec") {
        expect(decoded.messages[0].decodedMessage.data.grantee).toBe(
          "init1testgrantee"
        );
        expect(decoded.messages[0].decodedMessage.data.messages).toHaveLength(
          1
        );

        const innerMessage =
          decoded.messages[0].decodedMessage.data.messages[0];
        expect(innerMessage.action).toBe("withdraw_delegator_reward");

        if (innerMessage.action === "withdraw_delegator_reward") {
          expect(innerMessage.data.delegatorAddress).toBe(
            "init13thkj7pxgr3l6hzymklfeprh0fka8n6mzckr78"
          );
          expect(innerMessage.data.validatorAddress).toBe(
            "initvaloper1gs7kwd5jm8ghnvx4z973aqcenfcej6ykpuydc4"
          );
          expect(innerMessage.data.coins).toEqual([
            { amount: "33490255", denom: "uinit" }
          ]);
          expect(innerMessage.data.validator).toEqual({
            description: {
              details: "",
              identity: "1F41B95A84CFA4B6",
              moniker: "Inertia Foundation | 🎁 Delegation Drop 🎁",
              security_contact: "",
              website: "https://inrt.fi"
            },
            operator_address:
              "initvaloper1gs7kwd5jm8ghnvx4z973aqcenfcej6ykpuydc4"
          });
        }
      }
    });

    it("should decode MsgExec wrapping MsgUndelegate", async () => {
      setupMockApi(mockedAxios, mockApiResponsesForUndelegate);

      const decoded = await decoder.decodeCosmosTransaction(
        mockMsgExecWithUndelegate
      );

      expect(decoded.messages).toHaveLength(1);
      expect(decoded.messages[0].decodedMessage.action).toBe("authz_exec");

      if (decoded.messages[0].decodedMessage.action === "authz_exec") {
        expect(decoded.messages[0].decodedMessage.data.grantee).toBe(
          "init1testgrantee"
        );
        expect(decoded.messages[0].decodedMessage.data.messages).toHaveLength(
          1
        );

        const innerMessage =
          decoded.messages[0].decodedMessage.data.messages[0];
        expect(innerMessage.action).toBe("undelegate");

        if (innerMessage.action === "undelegate") {
          expect(innerMessage.data.delegatorAddress).toBe(
            "init1kw2unuhgfa6mz6r0ehrzlr9k9ftjk7pql8u5fm"
          );
          expect(innerMessage.data.validatorAddress).toBe(
            "initvaloper1cmlx2pqfgt2kpshe2fmc40epzvg699eqv3ax66"
          );
          expect(innerMessage.data.coins).toEqual([
            { amount: "50000", denom: "uinit" }
          ]);
          expect(innerMessage.data.validator).toEqual({
            description: {
              details: "Provides secure validation services for dPoS networks",
              identity: "8957C5091FBF4192",
              moniker: "B-Harvest",
              security_contact: "contact@bharvest.io",
              website: "https://bharvest.io"
            },
            operator_address:
              "initvaloper1cmlx2pqfgt2kpshe2fmc40epzvg699eqv3ax66"
          });
        }
      }
    });

    it("should correctly identify sender when grantee A sends granter B's tokens to C", async () => {
      setupMockApi(mockedAxios, mockApiResponsesForAuthzExec);

      const decoded = await decoder.decodeCosmosTransaction(
        mockMsgExecGranteeExecutesForGranter
      );

      expect(decoded.messages).toHaveLength(1);
      expect(decoded.messages[0].decodedMessage.action).toBe("authz_exec");

      if (decoded.messages[0].decodedMessage.action === "authz_exec") {
        expect(decoded.messages[0].decodedMessage.data.grantee).toBe(
          "init1grantee"
        );
        expect(decoded.messages[0].decodedMessage.data.messages).toHaveLength(
          1
        );

        const innerMessage =
          decoded.messages[0].decodedMessage.data.messages[0];
        expect(innerMessage.action).toBe("send");

        if (innerMessage.action === "send") {
          expect(innerMessage.data.from).toBe("init1granter");
          expect(innerMessage.data.to).toBe("init1recipient");
          expect(innerMessage.data.coins).toEqual([
            { amount: "500", denom: "uinit" }
          ]);
        }
      }
    });
  });

  describe("MsgGrant", () => {
    it("should decode MsgGrant correctly", async () => {
      setupMockApi(mockedAxios, {});

      const decoded = await decoder.decodeCosmosTransaction(
        mockAuthzGrantTransaction
      );

      expect(decoded.messages).toHaveLength(1);
      expect(decoded.messages[0].decodedMessage).toEqual({
        action: "authz_grant",
        data: {
          authorization: {
            "@type": "/cosmos.authz.v1beta1.GenericAuthorization",
            msg: "/cosmos.bank.v1beta1.MsgSend"
          },
          expiration: "2025-11-03T09:51:56.513Z",
          grantee: "init1rw34mgv2y626996n2ccpl6lfctk43v7azmarvg",
          granter: "init1ryrg0mha5stezucvajy3mne8a74uhgmygdlnxp"
        },
        isIbc: false,
        isOp: false
      });
    });
  });

  describe("MsgRevoke", () => {
    it("should decode MsgRevoke correctly", async () => {
      setupMockApi(mockedAxios, {});

      const decoded = await decoder.decodeCosmosTransaction(
        mockAuthzRevokeTransaction
      );

      expect(decoded.messages).toHaveLength(1);
      expect(decoded.messages[0].decodedMessage).toEqual({
        action: "authz_revoke",
        data: {
          grantee: "init1rw34mgv2y626996n2ccpl6lfctk43v7azmarvg",
          granter: "init1ryrg0mha5stezucvajy3mne8a74uhgmygdlnxp",
          msg_type_url: "/cosmos.bank.v1beta1.MsgSend"
        },
        isIbc: false,
        isOp: false
      });
    });
  });
});
