export const mockMsgGrantAllowance = {
  code: 0,
  codespace: "",
  data: "12340A322F636F736D6F732E6665656772616E742E763162657461312E4D73674772616E74416C6C6F77616E6365526573706F6E7365",
  events: [
    {
      attributes: [
        {
          index: true,
          key: "action",
          value: "/cosmos.feegrant.v1beta1.MsgGrantAllowance"
        },
        {
          index: true,
          key: "sender",
          value: "init1ryrg0mha5stezucvajy3mne8a74uhgmygdlnxp"
        },
        {
          index: true,
          key: "module",
          value: "feegrant"
        },
        {
          index: true,
          key: "msg_index",
          value: "0"
        }
      ],
      type: "message"
    },
    {
      attributes: [
        {
          index: true,
          key: "granter",
          value: "init1ryrg0mha5stezucvajy3mne8a74uhgmygdlnxp"
        },
        {
          index: true,
          key: "grantee",
          value: "init1rw34mgv2y626996n2ccpl6lfctk43v7azmarvg"
        },
        {
          index: true,
          key: "msg_index",
          value: "0"
        }
      ],
      type: "set_feegrant"
    }
  ],
  gas_used: "61281",
  gas_wanted: "88254",
  height: "9304783",
  info: "",
  logs: [],
  raw_log: "",
  timestamp: "2025-11-03T09:42:01Z",
  tx: {
    "@type": "/cosmos.tx.v1beta1.Tx",
    auth_info: {
      fee: {
        amount: [{ amount: "1324", denom: "uinit" }],
        gas_limit: "88254",
        granter: "",
        payer: ""
      },
      signer_infos: []
    },
    body: {
      extension_options: [],
      memo: "",
      messages: [
        {
          "@type": "/cosmos.feegrant.v1beta1.MsgGrantAllowance",
          allowance: {
            "@type": "/cosmos.feegrant.v1beta1.BasicAllowance",
            expiration: "2025-11-03T09:51:56.513Z",
            spend_limit: []
          },
          grantee: "init1rw34mgv2y626996n2ccpl6lfctk43v7azmarvg",
          granter: "init1ryrg0mha5stezucvajy3mne8a74uhgmygdlnxp"
        }
      ],
      non_critical_extension_options: [],
      timeout_height: "0"
    },
    signatures: []
  },
  txhash: "TEST_FEEGRANT_GRANT_ALLOWANCE_HASH"
};

export const mockMsgGrantAllowanceWithSpendLimit = {
  code: 0,
  codespace: "",
  data: "12340A322F636F736D6F732E6665656772616E742E763162657461312E4D73674772616E74416C6C6F77616E6365526573706F6E7365",
  events: [
    {
      attributes: [
        {
          index: true,
          key: "action",
          value: "/cosmos.feegrant.v1beta1.MsgGrantAllowance"
        },
        {
          index: true,
          key: "msg_index",
          value: "0"
        }
      ],
      type: "message"
    }
  ],
  gas_used: "61281",
  gas_wanted: "88254",
  height: "9304783",
  info: "",
  logs: [],
  raw_log: "",
  timestamp: "2025-11-03T09:42:01Z",
  tx: {
    "@type": "/cosmos.tx.v1beta1.Tx",
    auth_info: {
      fee: {
        amount: [{ amount: "1324", denom: "uinit" }],
        gas_limit: "88254",
        granter: "",
        payer: ""
      },
      signer_infos: []
    },
    body: {
      extension_options: [],
      memo: "",
      messages: [
        {
          "@type": "/cosmos.feegrant.v1beta1.MsgGrantAllowance",
          allowance: {
            "@type": "/cosmos.feegrant.v1beta1.BasicAllowance",
            expiration: "2026-01-01T00:00:00.000Z",
            spend_limit: [{ amount: "1000000", denom: "uinit" }]
          },
          grantee: "init1abc123",
          granter: "init1xyz789"
        }
      ],
      non_critical_extension_options: [],
      timeout_height: "0"
    },
    signatures: []
  },
  txhash: "TEST_FEEGRANT_WITH_SPEND_LIMIT_HASH"
};

export const mockMsgRevokeAllowance = {
  code: 0,
  codespace: "",
  data: "12350A332F636F736D6F732E6665656772616E742E763162657461312E4D73675265766F6B65416C6C6F77616E6365526573706F6E7365",
  events: [
    {
      attributes: [
        {
          index: true,
          key: "action",
          value: "/cosmos.feegrant.v1beta1.MsgRevokeAllowance"
        },
        {
          index: true,
          key: "sender",
          value: "init1ryrg0mha5stezucvajy3mne8a74uhgmygdlnxp"
        },
        {
          index: true,
          key: "module",
          value: "feegrant"
        },
        {
          index: true,
          key: "msg_index",
          value: "0"
        }
      ],
      type: "message"
    },
    {
      attributes: [
        {
          index: true,
          key: "granter",
          value: "init1ryrg0mha5stezucvajy3mne8a74uhgmygdlnxp"
        },
        {
          index: true,
          key: "grantee",
          value: "init1rw34mgv2y626996n2ccpl6lfctk43v7azmarvg"
        },
        {
          index: true,
          key: "msg_index",
          value: "0"
        }
      ],
      type: "revoke_feegrant"
    }
  ],
  gas_used: "50587",
  gas_wanted: "73283",
  height: "9304830",
  info: "",
  logs: [],
  raw_log: "",
  timestamp: "2025-11-03T09:43:45Z",
  tx: {
    "@type": "/cosmos.tx.v1beta1.Tx",
    auth_info: {
      fee: {
        amount: [{ amount: "1099", denom: "uinit" }],
        gas_limit: "73283",
        granter: "",
        payer: ""
      },
      signer_infos: []
    },
    body: {
      extension_options: [],
      memo: "",
      messages: [
        {
          "@type": "/cosmos.feegrant.v1beta1.MsgRevokeAllowance",
          grantee: "init1rw34mgv2y626996n2ccpl6lfctk43v7azmarvg",
          granter: "init1ryrg0mha5stezucvajy3mne8a74uhgmygdlnxp"
        }
      ],
      non_critical_extension_options: [],
      timeout_height: "0"
    },
    signatures: []
  },
  txhash: "TEST_FEEGRANT_REVOKE_ALLOWANCE_HASH"
};

export const mockMixedFeegrantAuthzTransaction = {
  code: 0,
  codespace: "",
  data: "12340A322F636F736D6F732E6665656772616E742E763162657461312E4D73674772616E74416C6C6F77616E6365526573706F6E736512280A262F636F736D6F732E617574687A2E763162657461312E4D73674772616E74526573706F6E7365",
  events: [
    {
      attributes: [
        {
          index: true,
          key: "action",
          value: "/cosmos.feegrant.v1beta1.MsgGrantAllowance"
        },
        {
          index: true,
          key: "msg_index",
          value: "0"
        }
      ],
      type: "message"
    },
    {
      attributes: [
        {
          index: true,
          key: "action",
          value: "/cosmos.authz.v1beta1.MsgGrant"
        },
        {
          index: true,
          key: "msg_index",
          value: "1"
        }
      ],
      type: "message"
    }
  ],
  gas_used: "122562",
  gas_wanted: "176508",
  height: "9304783",
  info: "",
  logs: [],
  raw_log: "",
  timestamp: "2025-11-03T09:42:01Z",
  tx: {
    "@type": "/cosmos.tx.v1beta1.Tx",
    auth_info: {
      fee: {
        amount: [{ amount: "2648", denom: "uinit" }],
        gas_limit: "176508",
        granter: "",
        payer: ""
      },
      signer_infos: []
    },
    body: {
      extension_options: [],
      memo: "",
      messages: [
        {
          "@type": "/cosmos.feegrant.v1beta1.MsgGrantAllowance",
          allowance: {
            "@type": "/cosmos.feegrant.v1beta1.BasicAllowance",
            expiration: "2025-11-03T09:51:56.513Z",
            spend_limit: []
          },
          grantee: "init1rw34mgv2y626996n2ccpl6lfctk43v7azmarvg",
          granter: "init1ryrg0mha5stezucvajy3mne8a74uhgmygdlnxp"
        },
        {
          "@type": "/cosmos.authz.v1beta1.MsgGrant",
          grant: {
            authorization: {
              "@type": "/cosmos.authz.v1beta1.GenericAuthorization",
              msg: "/cosmos.bank.v1beta1.MsgSend"
            },
            expiration: "2025-11-03T09:51:56.513Z"
          },
          grantee: "init1rw34mgv2y626996n2ccpl6lfctk43v7azmarvg",
          granter: "init1ryrg0mha5stezucvajy3mne8a74uhgmygdlnxp"
        }
      ],
      non_critical_extension_options: [],
      timeout_height: "0"
    },
    signatures: []
  },
  txhash: "D2A8706153B5E0323F499A13A5D2E4EEF53D6BACF9BBC1B08D8E161EE42B8828"
};
