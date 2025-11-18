import {
  initialize,
  mockedAxios,
  resetMockApi,
  setupMockApi
} from "@/tests/_shared/helpers";

import {
  mockMixedFeegrantAuthzTransaction,
  mockMsgGrantAllowance,
  mockMsgGrantAllowanceWithSpendLimit,
  mockMsgRevokeAllowance
} from "./feegrant.fixture";

jest.mock("axios");

const decoder = initialize();

describe("Feegrant Messages", () => {
  beforeEach(() => {
    resetMockApi(mockedAxios);
  });

  describe("MsgGrantAllowance", () => {
    it("should decode MsgGrantAllowance correctly", async () => {
      setupMockApi(mockedAxios, {});

      const decoded = await decoder.decodeCosmosTransaction(
        mockMsgGrantAllowance
      );

      expect(decoded.messages).toHaveLength(1);
      expect(decoded.messages[0].decodedMessage).toEqual({
        action: "feegrant_grant_allowance",
        data: {
          allowance: {
            "@type": "/cosmos.feegrant.v1beta1.BasicAllowance",
            expiration: "2025-11-03T09:51:56.513Z",
            spend_limit: []
          },
          grantee: "init1rw34mgv2y626996n2ccpl6lfctk43v7azmarvg",
          granter: "init1ryrg0mha5stezucvajy3mne8a74uhgmygdlnxp"
        },
        isIbc: false,
        isOp: false
      });
    });

    it("should decode MsgGrantAllowance with spend limit correctly", async () => {
      setupMockApi(mockedAxios, {});

      const decoded = await decoder.decodeCosmosTransaction(
        mockMsgGrantAllowanceWithSpendLimit
      );

      expect(decoded.messages).toHaveLength(1);
      expect(decoded.messages[0].decodedMessage).toEqual({
        action: "feegrant_grant_allowance",
        data: {
          allowance: {
            "@type": "/cosmos.feegrant.v1beta1.BasicAllowance",
            expiration: "2026-01-01T00:00:00.000Z",
            spend_limit: [{ amount: "1000000", denom: "uinit" }]
          },
          grantee: "init1abc123",
          granter: "init1xyz789"
        },
        isIbc: false,
        isOp: false
      });
    });
  });

  describe("MsgRevokeAllowance", () => {
    it("should decode MsgRevokeAllowance correctly", async () => {
      setupMockApi(mockedAxios, {});

      const decoded = await decoder.decodeCosmosTransaction(
        mockMsgRevokeAllowance
      );

      expect(decoded.messages).toHaveLength(1);
      expect(decoded.messages[0].decodedMessage).toEqual({
        action: "feegrant_revoke_allowance",
        data: {
          grantee: "init1rw34mgv2y626996n2ccpl6lfctk43v7azmarvg",
          granter: "init1ryrg0mha5stezucvajy3mne8a74uhgmygdlnxp"
        },
        isIbc: false,
        isOp: false
      });
    });
  });

  describe("Mixed transactions", () => {
    it("should decode transaction with both MsgGrantAllowance and MsgGrant", async () => {
      setupMockApi(mockedAxios, {});

      const decoded = await decoder.decodeCosmosTransaction(
        mockMixedFeegrantAuthzTransaction
      );

      expect(decoded.messages).toHaveLength(2);

      // Check feegrant grant allowance
      expect(decoded.messages[0].decodedMessage).toEqual({
        action: "feegrant_grant_allowance",
        data: {
          allowance: {
            "@type": "/cosmos.feegrant.v1beta1.BasicAllowance",
            expiration: "2025-11-03T09:51:56.513Z",
            spend_limit: []
          },
          grantee: "init1rw34mgv2y626996n2ccpl6lfctk43v7azmarvg",
          granter: "init1ryrg0mha5stezucvajy3mne8a74uhgmygdlnxp"
        },
        isIbc: false,
        isOp: false
      });

      // Check authz grant
      expect(decoded.messages[1].decodedMessage).toEqual({
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
});
