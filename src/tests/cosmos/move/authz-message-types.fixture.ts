// Fixtures for testing MsgExec with various message types

export const mockMsgExecWithDelegate = {
  code: 0,
  codespace: "",
  data: "12290A272F696E697469612E6D7374616B696E672E76312E4D736744656C6567617465526573706F6E7365",
  events: [],
  gas_used: "240849",
  gas_wanted: "344162",
  height: "4141866",
  info: "",
  logs: [
    {
      events: [
        {
          attributes: [
            {
              index: true,
              key: "validator",
              value: "initvaloper1cmlx2pqfgt2kpshe2fmc40epzvg699eqv3ax66"
            },
            {
              index: true,
              key: "delegator",
              value: "init1kw2unuhgfa6mz6r0ehrzlr9k9ftjk7pql8u5fm"
            },
            { index: true, key: "amount", value: "100000uinit" },
            {
              index: true,
              key: "new_shares",
              value: "100000.000000000000000000uinit"
            },
            { index: true, key: "msg_index", value: "0" },
            { index: true, key: "authz_msg_index", value: "0" }
          ],
          type: "delegate"
        },
        {
          attributes: [
            {
              index: true,
              key: "spender",
              value: "init1kw2unuhgfa6mz6r0ehrzlr9k9ftjk7pql8u5fm"
            },
            { index: true, key: "amount", value: "100000uinit" },
            { index: true, key: "msg_index", value: "0" },
            { index: true, key: "authz_msg_index", value: "0" }
          ],
          type: "coin_spent"
        },
        {
          attributes: [
            {
              index: true,
              key: "receiver",
              value: "init17xpfvakm2amg962yls6f84z3kell8c5l70rnql"
            },
            { index: true, key: "amount", value: "100000uinit" },
            { index: true, key: "msg_index", value: "0" },
            { index: true, key: "authz_msg_index", value: "0" }
          ],
          type: "coin_received"
        },
        {
          attributes: [
            {
              index: true,
              key: "recipient",
              value: "init17xpfvakm2amg962yls6f84z3kell8c5l70rnql"
            },
            {
              index: true,
              key: "sender",
              value: "init1kw2unuhgfa6mz6r0ehrzlr9k9ftjk7pql8u5fm"
            },
            { index: true, key: "amount", value: "100000uinit" },
            { index: true, key: "msg_index", value: "0" },
            { index: true, key: "authz_msg_index", value: "0" }
          ],
          type: "transfer"
        },
        {
          attributes: [
            {
              index: true,
              key: "action",
              value: "/cosmos.authz.v1beta1.MsgExec"
            },
            { index: true, key: "sender", value: "init1testgrantee" },
            { index: true, key: "module", value: "authz" },
            { index: true, key: "msg_index", value: "0" }
          ],
          type: "message"
        }
      ],
      log: "",
      msg_index: 0
    }
  ],
  raw_log: "",
  timestamp: "2023-10-20T10:00:00Z",
  tx: {
    "@type": "/cosmos.tx.v1beta1.Tx",
    auth_info: {
      fee: {
        amount: [{ amount: "5000", denom: "uinit" }],
        gas_limit: "344162",
        granter: "",
        payer: ""
      },
      signer_infos: [
        {
          mode_info: { single: { mode: "SIGN_MODE_DIRECT" } },
          public_key: {
            "@type": "/cosmos.crypto.secp256k1.PubKey",
            key: "test"
          },
          sequence: "1"
        }
      ],
      tip: null
    },
    body: {
      extension_options: [],
      memo: "",
      messages: [
        {
          "@type": "/cosmos.authz.v1beta1.MsgExec",
          grantee: "init1testgrantee",
          msgs: [
            {
              "@type": "/initia.mstaking.v1.MsgDelegate",
              amount: [{ amount: "100000", denom: "uinit" }],
              delegator_address: "init1kw2unuhgfa6mz6r0ehrzlr9k9ftjk7pql8u5fm",
              validator_address:
                "initvaloper1cmlx2pqfgt2kpshe2fmc40epzvg699eqv3ax66"
            }
          ]
        }
      ],
      non_critical_extension_options: [],
      timeout_height: "0"
    },
    signatures: ["test"]
  },
  txhash: "TESTDELEGATE123"
};

export const mockApiResponsesForDelegate = {
  GET: {
    "/initia/move/v1/accounts/0x2bb7235591022997f63404a8dbfd94175806ff5644ea7ccc61a15eaac9c8674d/resources":
      {
        pagination: { next_key: null, total: "0" },
        resources: [
          {
            address:
              "0x2bb7235591022997f63404a8dbfd94175806ff5644ea7ccc61a15eaac9c8674d",
            move_resource:
              '{"type":"0x1::object::ObjectCore","data":{"allow_ungated_transfer":false,"owner":"0x4fea76427b8345861e80a3540a8a9d936fd39391","version":"1"}}',
            raw_bytes:
              "AAAAAAAAAAAAAAAAT+p2QnuDRYYegKNUCoqdk2/Tk5EAAQAAAAAAAAA=",
            struct_tag: "0x1::object::ObjectCore"
          },
          {
            address:
              "0x2bb7235591022997f63404a8dbfd94175806ff5644ea7ccc61a15eaac9c8674d",
            move_resource:
              '{"type":"0x1::fungible_asset::FungibleStore","data":{"balance":"109114080715522","frozen":false,"metadata":{"inner":"0x8e4733bdabcf7d4afc3d14f0dd46c9bf52fb0fce9e4b996c939e195b8bc891d9"}}}',
            raw_bytes:
              "jkczvavPfUr8PRTw3UbJv1L7D86eS5lsk54ZW4vIkdkCYwUaPWMAAAA=",
            struct_tag: "0x1::fungible_asset::FungibleStore"
          }
        ]
      },
    "/initia/move/v1/accounts/0x66a8cb0bfb991610dcffb8a6543ac0887c7c5405b8f985ebed6d628fe50c4686/resources":
      {
        pagination: { next_key: null, total: "0" },
        resources: [
          {
            address:
              "0x66a8cb0bfb991610dcffb8a6543ac0887c7c5405b8f985ebed6d628fe50c4686",
            move_resource:
              '{"type":"0x1::object::ObjectCore","data":{"allow_ungated_transfer":false,"owner":"0xb395c9f2e84f75b1686fcdc62f8cb62a572b7820","version":"3"}}',
            raw_bytes:
              "AAAAAAAAAAAAAACzlcny6E91sWhu/cYvjLYqVyt4IAADAAAAAgAAAA==",
            struct_tag: "0x1::object::ObjectCore"
          }
        ]
      },
    "/initia/move/v1/metadata/0x8e4733bdabcf7d4afc3d14f0dd46c9bf52fb0fce9e4b996c939e195b8bc891d9":
      {
        metadata: {
          decimals: 6,
          denom: "uinit",
          symbol: "INIT"
        }
      },
    "/initia/mstaking/v1/validators/initvaloper1cmlx2pqfgt2kpshe2fmc40epzvg699eqv3ax66":
      {
        validator: {
          commission: {
            commission_rates: {
              max_change_rate: "0.010000000000000000",
              max_rate: "0.200000000000000000",
              rate: "0.100000000000000000"
            }
          },
          description: {
            details: "Provides secure validation services for dPoS networks",
            identity: "8957C5091FBF4192",
            moniker: "B-Harvest",
            security_contact: "contact@bharvest.io",
            website: "https://bharvest.io"
          },
          operator_address: "initvaloper1cmlx2pqfgt2kpshe2fmc40epzvg699eqv3ax66"
        }
      }
  },
  POST: {}
};

export const mockMsgExecWithWithdrawReward = {
  code: 0,
  codespace: "",
  data: "12410A3F2F636F736D6F732E646973747269627574696F6E2E763162657461312E4D7367576974686472617744656C656761746F72526577617264526573706F6E7365",
  events: [],
  gas_used: "240849",
  gas_wanted: "344162",
  height: "4141866",
  info: "",
  logs: [
    {
      events: [
        {
          attributes: [
            { index: true, key: "amount", value: "33490255uinit" },
            {
              index: true,
              key: "validator",
              value: "initvaloper1gs7kwd5jm8ghnvx4z973aqcenfcej6ykpuydc4"
            },
            { index: true, key: "msg_index", value: "0" },
            { index: true, key: "authz_msg_index", value: "0" }
          ],
          type: "withdraw_rewards"
        },
        {
          attributes: [
            {
              index: true,
              key: "spender",
              value: "init1jv65s3grqf6v6jl3dp4t6c9t9rk99cd8ffy0za"
            },
            { index: true, key: "amount", value: "33490255uinit" },
            { index: true, key: "msg_index", value: "0" },
            { index: true, key: "authz_msg_index", value: "0" }
          ],
          type: "coin_spent"
        },
        {
          attributes: [
            {
              index: true,
              key: "receiver",
              value: "init13thkj7pxgr3l6hzymklfeprh0fka8n6mzckr78"
            },
            { index: true, key: "amount", value: "33490255uinit" },
            { index: true, key: "msg_index", value: "0" },
            { index: true, key: "authz_msg_index", value: "0" }
          ],
          type: "coin_received"
        },
        {
          attributes: [
            {
              index: true,
              key: "recipient",
              value: "init13thkj7pxgr3l6hzymklfeprh0fka8n6mzckr78"
            },
            {
              index: true,
              key: "sender",
              value: "init1jv65s3grqf6v6jl3dp4t6c9t9rk99cd8ffy0za"
            },
            { index: true, key: "amount", value: "33490255uinit" },
            { index: true, key: "msg_index", value: "0" },
            { index: true, key: "authz_msg_index", value: "0" }
          ],
          type: "transfer"
        },
        {
          attributes: [
            {
              index: true,
              key: "action",
              value: "/cosmos.authz.v1beta1.MsgExec"
            },
            { index: true, key: "sender", value: "init1testgrantee" },
            { index: true, key: "module", value: "authz" },
            { index: true, key: "msg_index", value: "0" }
          ],
          type: "message"
        }
      ],
      log: "",
      msg_index: 0
    }
  ],
  raw_log: "",
  timestamp: "2023-10-20T10:00:00Z",
  tx: {
    "@type": "/cosmos.tx.v1beta1.Tx",
    auth_info: {
      fee: {
        amount: [{ amount: "5000", denom: "uinit" }],
        gas_limit: "344162",
        granter: "",
        payer: ""
      },
      signer_infos: [
        {
          mode_info: { single: { mode: "SIGN_MODE_DIRECT" } },
          public_key: {
            "@type": "/cosmos.crypto.secp256k1.PubKey",
            key: "test"
          },
          sequence: "1"
        }
      ],
      tip: null
    },
    body: {
      extension_options: [],
      memo: "",
      messages: [
        {
          "@type": "/cosmos.authz.v1beta1.MsgExec",
          grantee: "init1testgrantee",
          msgs: [
            {
              "@type":
                "/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward",
              delegator_address: "init13thkj7pxgr3l6hzymklfeprh0fka8n6mzckr78",
              validator_address:
                "initvaloper1gs7kwd5jm8ghnvx4z973aqcenfcej6ykpuydc4"
            }
          ]
        }
      ],
      non_critical_extension_options: [],
      timeout_height: "0"
    },
    signatures: ["test"]
  },
  txhash: "TESTWITHDRAW123"
};

export const mockApiResponsesForWithdrawReward = {
  GET: {
    "/initia/move/v1/accounts/0x1f4590c6fe1596a76c2d3414bc1ab4e8b4c4a5a25853625abff6684e580a634f/resources":
      {
        pagination: { next_key: null, total: "0" },
        resources: [
          {
            address:
              "0x1f4590c6fe1596a76c2d3414bc1ab4e8b4c4a5a25853625abff6684e580a634f",
            move_resource:
              '{"type":"0x1::object::ObjectCore","data":{"allow_ungated_transfer":false,"owner":"0x8aef69782640e3fd5c44ddbe9c84777a6dd3cf5b","version":"1"}}',
            raw_bytes:
              "AAAAAAAAAAAAAAAAiu9peCZA4/1cRN2+nIR3em3Tz1sAAQAAAAAAAAA=",
            struct_tag: "0x1::object::ObjectCore"
          },
          {
            address:
              "0x1f4590c6fe1596a76c2d3414bc1ab4e8b4c4a5a25853625abff6684e580a634f",
            move_resource:
              '{"type":"0x1::fungible_asset::FungibleStore","data":{"balance":"0","frozen":false,"metadata":{"inner":"0x8e4733bdabcf7d4afc3d14f0dd46c9bf52fb0fce9e4b996c939e195b8bc891d9"}}}',
            raw_bytes: "jkczvavPfUr8PRTw3UbJv1L7D86eS5lsk54ZW4vIkdkAAA==",
            struct_tag: "0x1::fungible_asset::FungibleStore"
          }
        ]
      },
    "/initia/move/v1/accounts/0x66a8cb0bfb991610dcffb8a6543ac0887c7c5405b8f985ebed6d628fe50c4686/resources":
      {
        pagination: { next_key: null, total: "0" },
        resources: [
          {
            address:
              "0x66a8cb0bfb991610dcffb8a6543ac0887c7c5405b8f985ebed6d628fe50c4686",
            move_resource:
              '{"type":"0x1::object::ObjectCore","data":{"allow_ungated_transfer":false,"owner":"0x8aef69782640e3fd5c44ddbe9c84777a6dd3cf5b","version":"3"}}',
            raw_bytes:
              "AAAAAAAAAAAAAACKr2l4JkDj/VxE3b6chHd6bdPPWwADAAAAAgAAAA==",
            struct_tag: "0x1::object::ObjectCore"
          }
        ]
      },
    "/initia/move/v1/metadata/0x8e4733bdabcf7d4afc3d14f0dd46c9bf52fb0fce9e4b996c939e195b8bc891d9":
      {
        metadata: {
          decimals: 6,
          denom: "uinit",
          symbol: "INIT"
        }
      },
    "/initia/mstaking/v1/validators/initvaloper1gs7kwd5jm8ghnvx4z973aqcenfcej6ykpuydc4":
      {
        validator: {
          commission: {
            commission_rates: {
              max_change_rate: "0.010000000000000000",
              max_rate: "0.200000000000000000",
              rate: "0.050000000000000000"
            }
          },
          description: {
            details: "",
            identity: "1F41B95A84CFA4B6",
            moniker: "Inertia Foundation | 🎁 Delegation Drop 🎁",
            security_contact: "",
            website: "https://inrt.fi"
          },
          operator_address: "initvaloper1gs7kwd5jm8ghnvx4z973aqcenfcej6ykpuydc4"
        }
      }
  },
  POST: {}
};

export const mockMsgExecWithUndelegate = {
  code: 0,
  codespace: "",
  data: "122B0A292F696E697469612E6D7374616B696E672E76312E4D7367556E64656C6567617465526573706F6E7365",
  events: [],
  gas_used: "240849",
  gas_wanted: "344162",
  height: "4141866",
  info: "",
  logs: [
    {
      events: [
        {
          attributes: [
            {
              index: true,
              key: "validator",
              value: "initvaloper1cmlx2pqfgt2kpshe2fmc40epzvg699eqv3ax66"
            },
            { index: true, key: "amount", value: "50000uinit" },
            {
              index: true,
              key: "completion_time",
              value: "2024-11-03T10:00:00Z"
            },
            { index: true, key: "msg_index", value: "0" },
            { index: true, key: "authz_msg_index", value: "0" }
          ],
          type: "unbond"
        },
        {
          attributes: [
            {
              index: true,
              key: "action",
              value: "/cosmos.authz.v1beta1.MsgExec"
            },
            { index: true, key: "sender", value: "init1testgrantee" },
            { index: true, key: "module", value: "authz" },
            { index: true, key: "msg_index", value: "0" }
          ],
          type: "message"
        }
      ],
      log: "",
      msg_index: 0
    }
  ],
  raw_log: "",
  timestamp: "2023-10-20T10:00:00Z",
  tx: {
    "@type": "/cosmos.tx.v1beta1.Tx",
    auth_info: {
      fee: {
        amount: [{ amount: "5000", denom: "uinit" }],
        gas_limit: "344162",
        granter: "",
        payer: ""
      },
      signer_infos: [
        {
          mode_info: { single: { mode: "SIGN_MODE_DIRECT" } },
          public_key: {
            "@type": "/cosmos.crypto.secp256k1.PubKey",
            key: "test"
          },
          sequence: "1"
        }
      ],
      tip: null
    },
    body: {
      extension_options: [],
      memo: "",
      messages: [
        {
          "@type": "/cosmos.authz.v1beta1.MsgExec",
          grantee: "init1testgrantee",
          msgs: [
            {
              "@type": "/initia.mstaking.v1.MsgUndelegate",
              amount: [{ amount: "50000", denom: "uinit" }],
              delegator_address: "init1kw2unuhgfa6mz6r0ehrzlr9k9ftjk7pql8u5fm",
              validator_address:
                "initvaloper1cmlx2pqfgt2kpshe2fmc40epzvg699eqv3ax66"
            }
          ]
        }
      ],
      non_critical_extension_options: [],
      timeout_height: "0"
    },
    signatures: ["test"]
  },
  txhash: "TESTUNDELEGATE123"
};

export const mockApiResponsesForUndelegate = mockApiResponsesForDelegate;
