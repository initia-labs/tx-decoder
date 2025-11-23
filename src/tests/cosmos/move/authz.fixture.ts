export const mockApiResponsesForAuthzExec = {
  GET: {
    "/initia/move/v1/accounts/0x66a8cb0bfb991610dcffb8a6543ac0887c7c5405b8f985ebed6d628fe50c4686/resources":
      {
        pagination: { next_key: null, total: "0" },
        resources: [
          {
            address:
              "0x66a8cb0bfb991610dcffb8a6543ac0887c7c5405b8f985ebed6d628fe50c4686",
            move_resource:
              '{"type":"0x1::object::ObjectCore","data":{"allow_ungated_transfer":false,"owner":"0xf1829676db577682e944fc3493d451b67ff3e29f","version":"1"}}',
            raw_bytes:
              "AAAAAAAAAAAAAAAA8YKWdttXdoLpRPw0k9RRtn/z4p8AAQAAAAAAAAA=",
            struct_tag: "0x1::object::ObjectCore"
          },
          {
            address:
              "0x66a8cb0bfb991610dcffb8a6543ac0887c7c5405b8f985ebed6d628fe50c4686",
            move_resource:
              '{"type":"0x1::fungible_asset::FungibleStore","data":{"balance":"1000000","frozen":false,"metadata":{"inner":"0x8e4733bdabcf7d4afc3d14f0dd46c9bf52fb0fce9e4b996c939e195b8bc891d9"}}}',
            raw_bytes:
              "jkczvavPfUr8PRTw3UbJv1L7D86eS5lsk54ZW4vIkdlAQg8AAAAAAA==",
            struct_tag: "0x1::fungible_asset::FungibleStore"
          }
        ]
      },
    "/initia/move/v1/accounts/0xe498fd3cd677d753de48bea10c4ebeb8ff99d8be88d442fcf156687ff3f8add7/resources":
      {
        pagination: { next_key: null, total: "0" },
        resources: [
          {
            address:
              "0xe498fd3cd677d753de48bea10c4ebeb8ff99d8be88d442fcf156687ff3f8add7",
            move_resource:
              '{"type":"0x1::object::ObjectCore","data":{"allow_ungated_transfer":false,"owner":"0x190687eefda41791730cec891dcf27efabcba364","version":"1"}}',
            raw_bytes:
              "AAAAAAAAAAAAAAAAGJOH7v2kF5FzDOyJHc8n76vLo2QAAQAAAAAAAAA=",
            struct_tag: "0x1::object::ObjectCore"
          },
          {
            address:
              "0xe498fd3cd677d753de48bea10c4ebeb8ff99d8be88d442fcf156687ff3f8add7",
            move_resource:
              '{"type":"0x1::fungible_asset::FungibleStore","data":{"balance":"1000000","frozen":false,"metadata":{"inner":"0x8e4733bdabcf7d4afc3d14f0dd46c9bf52fb0fce9e4b996c939e195b8bc891d9"}}}',
            raw_bytes:
              "jkczvavPfUr8PRTw3UbJv1L7D86eS5lsk54ZW4vIkdlAQg8AAAAAAA==",
            struct_tag: "0x1::fungible_asset::FungibleStore"
          }
        ]
      },
    "/initia/move/v1/denom?metadata=0x8e4733bdabcf7d4afc3d14f0dd46c9bf52fb0fce9e4b996c939e195b8bc891d9":
      {
        denom: "uinit"
      }
  },
  POST: {}
};

// Source: https://scan-api.initia.xyz/v1/initia/interwoven-1/txs/4600CD81879C9D99A4C9EA4692448E3E40C4BBE0DB707C2E578CC2FEDC66CB71
export const mockRealMsgExecTransaction = {
  code: 0,
  codespace: "",
  data: "122B0A252F636F736D6F732E617574687A2E763162657461312E4D736745786563526573706F6E736512020A00",
  events: [
    {
      attributes: [
        {
          key: "granter",
          value: "init1ryrg0mha5stezucvajy3mne8a74uhgmygdlnxp"
        },
        { key: "grantee", value: "init1rw34mgv2y626996n2ccpl6lfctk43v7azmarvg" }
      ],
      type: "use_feegrant"
    },
    {
      attributes: [
        {
          key: "granter",
          value: "init1ryrg0mha5stezucvajy3mne8a74uhgmygdlnxp"
        },
        { key: "grantee", value: "init1rw34mgv2y626996n2ccpl6lfctk43v7azmarvg" }
      ],
      type: "update_feegrant"
    },
    {
      attributes: [
        {
          key: "sender",
          value: "0x1,0x190687eefda41791730cec891dcf27efabcba364"
        },
        { key: "module_addr", value: "0x1" },
        { key: "module_name", value: "coin" },
        { key: "function_name", value: "sudo_transfer" }
      ],
      type: "execute"
    },
    {
      attributes: [
        { key: "type_tag", value: "0x1::fungible_asset::WithdrawEvent" },
        {
          key: "data",
          value:
            '{"store_addr":"0xe498fd3cd677d753de48bea10c4ebeb8ff99d8be88d442fcf156687ff3f8add7","metadata_addr":"0x8e4733bdabcf7d4afc3d14f0dd46c9bf52fb0fce9e4b996c939e195b8bc891d9","amount":"3075"}'
        }
      ],
      type: "move"
    },
    {
      attributes: [
        { key: "type_tag", value: "0x1::fungible_asset::WithdrawOwnerEvent" },
        {
          key: "data",
          value: '{"owner":"0x190687eefda41791730cec891dcf27efabcba364"}'
        }
      ],
      type: "move"
    },
    {
      attributes: [
        { key: "type_tag", value: "0x1::fungible_asset::DepositEvent" },
        {
          key: "data",
          value:
            '{"store_addr":"0x66a8cb0bfb991610dcffb8a6543ac0887c7c5405b8f985ebed6d628fe50c4686","metadata_addr":"0x8e4733bdabcf7d4afc3d14f0dd46c9bf52fb0fce9e4b996c939e195b8bc891d9","amount":"3075"}'
        }
      ],
      type: "move"
    },
    {
      attributes: [
        { key: "type_tag", value: "0x1::fungible_asset::DepositOwnerEvent" },
        {
          key: "data",
          value: '{"owner":"0xf1829676db577682e944fc3493d451b67ff3e29f"}'
        }
      ],
      type: "move"
    },
    {
      attributes: [
        {
          key: "spender",
          value: "init1ryrg0mha5stezucvajy3mne8a74uhgmygdlnxp"
        },
        { key: "amount", value: "3075uinit" }
      ],
      type: "coin_spent"
    },
    {
      attributes: [
        {
          key: "receiver",
          value: "init17xpfvakm2amg962yls6f84z3kell8c5l70rnql"
        },
        { key: "amount", value: "3075uinit" }
      ],
      type: "coin_received"
    },
    {
      attributes: [
        {
          key: "recipient",
          value: "init17xpfvakm2amg962yls6f84z3kell8c5l70rnql"
        },
        { key: "sender", value: "init1ryrg0mha5stezucvajy3mne8a74uhgmygdlnxp" },
        { key: "amount", value: "3075uinit" }
      ],
      type: "transfer"
    },
    {
      attributes: [
        { key: "sender", value: "init1ryrg0mha5stezucvajy3mne8a74uhgmygdlnxp" }
      ],
      type: "message"
    },
    {
      attributes: [
        { key: "fee", value: "3075uinit" },
        {
          key: "fee_payer",
          value: "init1ryrg0mha5stezucvajy3mne8a74uhgmygdlnxp"
        }
      ],
      type: "tx"
    },
    {
      attributes: [
        {
          key: "acc_seq",
          value: "init1rw34mgv2y626996n2ccpl6lfctk43v7azmarvg/5"
        }
      ],
      type: "tx"
    },
    {
      attributes: [
        {
          key: "signature",
          value:
            "SMTTAEoUbh8j4P7x2lNe5BtT1BDGu/NmSpNgg/IxlftsOl4c8fd9Nfrp8OaxQ7XyDaPNvj+01tB4XASLO98aTw=="
        }
      ],
      type: "tx"
    },
    {
      attributes: [
        { key: "action", value: "/cosmos.authz.v1beta1.MsgExec" },
        { key: "sender", value: "init1rw34mgv2y626996n2ccpl6lfctk43v7azmarvg" },
        { key: "module", value: "authz" },
        { key: "msg_index", value: "0" }
      ],
      type: "message"
    },
    {
      attributes: [
        {
          key: "sender",
          value: "0x1,0x190687eefda41791730cec891dcf27efabcba364"
        },
        { key: "module_addr", value: "0x1" },
        { key: "module_name", value: "coin" },
        { key: "function_name", value: "sudo_transfer" },
        { key: "authz_msg_index", value: "0" },
        { key: "msg_index", value: "0" }
      ],
      type: "execute"
    },
    {
      attributes: [
        { key: "type_tag", value: "0x1::fungible_asset::WithdrawEvent" },
        {
          key: "data",
          value:
            '{"store_addr":"0xe498fd3cd677d753de48bea10c4ebeb8ff99d8be88d442fcf156687ff3f8add7","metadata_addr":"0x8e4733bdabcf7d4afc3d14f0dd46c9bf52fb0fce9e4b996c939e195b8bc891d9","amount":"1000000"}'
        },
        { key: "authz_msg_index", value: "0" },
        { key: "msg_index", value: "0" }
      ],
      type: "move"
    },
    {
      attributes: [
        { key: "type_tag", value: "0x1::fungible_asset::WithdrawOwnerEvent" },
        {
          key: "data",
          value: '{"owner":"0x190687eefda41791730cec891dcf27efabcba364"}'
        },
        { key: "authz_msg_index", value: "0" },
        { key: "msg_index", value: "0" }
      ],
      type: "move"
    },
    {
      attributes: [
        { key: "type_tag", value: "0x1::fungible_asset::DepositEvent" },
        {
          key: "data",
          value:
            '{"store_addr":"0xe498fd3cd677d753de48bea10c4ebeb8ff99d8be88d442fcf156687ff3f8add7","metadata_addr":"0x8e4733bdabcf7d4afc3d14f0dd46c9bf52fb0fce9e4b996c939e195b8bc891d9","amount":"1000000"}'
        },
        { key: "authz_msg_index", value: "0" },
        { key: "msg_index", value: "0" }
      ],
      type: "move"
    },
    {
      attributes: [
        { key: "type_tag", value: "0x1::fungible_asset::DepositOwnerEvent" },
        {
          key: "data",
          value: '{"owner":"0x190687eefda41791730cec891dcf27efabcba364"}'
        },
        { key: "authz_msg_index", value: "0" },
        { key: "msg_index", value: "0" }
      ],
      type: "move"
    },
    {
      attributes: [
        {
          key: "spender",
          value: "init1ryrg0mha5stezucvajy3mne8a74uhgmygdlnxp"
        },
        { key: "amount", value: "1000000uinit" },
        { key: "authz_msg_index", value: "0" },
        { key: "msg_index", value: "0" }
      ],
      type: "coin_spent"
    },
    {
      attributes: [
        {
          key: "receiver",
          value: "init1ryrg0mha5stezucvajy3mne8a74uhgmygdlnxp"
        },
        { key: "amount", value: "1000000uinit" },
        { key: "authz_msg_index", value: "0" },
        { key: "msg_index", value: "0" }
      ],
      type: "coin_received"
    },
    {
      attributes: [
        {
          key: "recipient",
          value: "init1ryrg0mha5stezucvajy3mne8a74uhgmygdlnxp"
        },
        { key: "sender", value: "init1ryrg0mha5stezucvajy3mne8a74uhgmygdlnxp" },
        { key: "amount", value: "1000000uinit" },
        { key: "authz_msg_index", value: "0" },
        { key: "msg_index", value: "0" }
      ],
      type: "transfer"
    },
    {
      attributes: [
        { key: "sender", value: "init1ryrg0mha5stezucvajy3mne8a74uhgmygdlnxp" },
        { key: "authz_msg_index", value: "0" },
        { key: "msg_index", value: "0" }
      ],
      type: "message"
    }
  ],
  gas_used: "156566",
  gas_wanted: "204960",
  height: "9303763",
  info: "",
  logs: [
    {
      events: [
        {
          attributes: [
            {
              key: "sender",
              value: "0x1,0x190687eefda41791730cec891dcf27efabcba364"
            },
            { key: "module_addr", value: "0x1" },
            { key: "module_name", value: "coin" },
            { key: "function_name", value: "sudo_transfer" },
            { key: "authz_msg_index", value: "0" },
            { key: "msg_index", value: "0" }
          ],
          type: "execute"
        },
        {
          attributes: [
            { key: "type_tag", value: "0x1::fungible_asset::WithdrawEvent" },
            {
              key: "data",
              value:
                '{"store_addr":"0xe498fd3cd677d753de48bea10c4ebeb8ff99d8be88d442fcf156687ff3f8add7","metadata_addr":"0x8e4733bdabcf7d4afc3d14f0dd46c9bf52fb0fce9e4b996c939e195b8bc891d9","amount":"1000000"}'
            },
            { key: "authz_msg_index", value: "0" },
            { key: "msg_index", value: "0" }
          ],
          type: "move"
        },
        {
          attributes: [
            {
              key: "type_tag",
              value: "0x1::fungible_asset::WithdrawOwnerEvent"
            },
            {
              key: "data",
              value: '{"owner":"0x190687eefda41791730cec891dcf27efabcba364"}'
            },
            { key: "authz_msg_index", value: "0" },
            { key: "msg_index", value: "0" }
          ],
          type: "move"
        },
        {
          attributes: [
            { key: "type_tag", value: "0x1::fungible_asset::DepositEvent" },
            {
              key: "data",
              value:
                '{"store_addr":"0xe498fd3cd677d753de48bea10c4ebeb8ff99d8be88d442fcf156687ff3f8add7","metadata_addr":"0x8e4733bdabcf7d4afc3d14f0dd46c9bf52fb0fce9e4b996c939e195b8bc891d9","amount":"1000000"}'
            },
            { key: "authz_msg_index", value: "0" },
            { key: "msg_index", value: "0" }
          ],
          type: "move"
        },
        {
          attributes: [
            {
              key: "type_tag",
              value: "0x1::fungible_asset::DepositOwnerEvent"
            },
            {
              key: "data",
              value: '{"owner":"0x190687eefda41791730cec891dcf27efabcba364"}'
            },
            { key: "authz_msg_index", value: "0" },
            { key: "msg_index", value: "0" }
          ],
          type: "move"
        },
        {
          attributes: [
            {
              key: "spender",
              value: "init1ryrg0mha5stezucvajy3mne8a74uhgmygdlnxp"
            },
            { key: "amount", value: "1000000uinit" },
            { key: "authz_msg_index", value: "0" },
            { key: "msg_index", value: "0" }
          ],
          type: "coin_spent"
        },
        {
          attributes: [
            {
              key: "receiver",
              value: "init1ryrg0mha5stezucvajy3mne8a74uhgmygdlnxp"
            },
            { key: "amount", value: "1000000uinit" },
            { key: "authz_msg_index", value: "0" },
            { key: "msg_index", value: "0" }
          ],
          type: "coin_received"
        },
        {
          attributes: [
            {
              key: "recipient",
              value: "init1ryrg0mha5stezucvajy3mne8a74uhgmygdlnxp"
            },
            {
              key: "sender",
              value: "init1ryrg0mha5stezucvajy3mne8a74uhgmygdlnxp"
            },
            { key: "amount", value: "1000000uinit" },
            { key: "authz_msg_index", value: "0" },
            { key: "msg_index", value: "0" }
          ],
          type: "transfer"
        },
        {
          attributes: [
            { key: "action", value: "/cosmos.authz.v1beta1.MsgExec" },
            {
              key: "sender",
              value: "init1rw34mgv2y626996n2ccpl6lfctk43v7azmarvg"
            },
            { key: "module", value: "authz" },
            { key: "msg_index", value: "0" }
          ],
          type: "message"
        },
        {
          attributes: [
            {
              key: "sender",
              value: "init1ryrg0mha5stezucvajy3mne8a74uhgmygdlnxp"
            },
            { key: "authz_msg_index", value: "0" },
            { key: "msg_index", value: "0" }
          ],
          type: "message"
        }
      ],
      log: "",
      msg_index: 0
    }
  ],
  raw_log: "",
  timestamp: "2025-11-03T09:04:15Z",
  tx: {
    "@type": "/cosmos.tx.v1beta1.Tx",
    auth_info: {
      fee: {
        amount: [{ amount: "3075", denom: "uinit" }],
        gas_limit: "204960",
        granter: "init1ryrg0mha5stezucvajy3mne8a74uhgmygdlnxp",
        payer: ""
      },
      signer_infos: [
        {
          mode_info: { single: { mode: "SIGN_MODE_EIP_191" } },
          public_key: {
            "@type": "/initia.crypto.v1beta1.ethsecp256k1.PubKey",
            key: "Asnlgbxa6R/heXxfbYAJEELDsXuohrHFB3YftSIPJL+e"
          },
          sequence: "5"
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
          grantee: "init1rw34mgv2y626996n2ccpl6lfctk43v7azmarvg",
          msgs: [
            {
              "@type": "/cosmos.bank.v1beta1.MsgSend",
              amount: [{ amount: "1000000", denom: "uinit" }],
              from_address: "init1ryrg0mha5stezucvajy3mne8a74uhgmygdlnxp",
              to_address: "init1ryrg0mha5stezucvajy3mne8a74uhgmygdlnxp"
            }
          ]
        }
      ],
      non_critical_extension_options: [],
      timeout_height: "0"
    },
    signatures: [
      "SMTTAEoUbh8j4P7x2lNe5BtT1BDGu/NmSpNgg/IxlftsOl4c8fd9Nfrp8OaxQ7XyDaPNvj+01tB4XASLO98aTw=="
    ]
  },
  txhash: "4600CD81879C9D99A4C9EA4692448E3E40C4BBE0DB707C2E578CC2FEDC66CB71"
};

export const mockApiResponsesForRealTx = {
  GET: {
    "/initia/move/v1/accounts/0xe498fd3cd677d753de48bea10c4ebeb8ff99d8be88d442fcf156687ff3f8add7/resources":
      {
        pagination: { next_key: null, total: "0" },
        resources: [
          {
            address:
              "0xe498fd3cd677d753de48bea10c4ebeb8ff99d8be88d442fcf156687ff3f8add7",
            move_resource:
              '{"type":"0x1::object::ObjectCore","data":{"allow_ungated_transfer":false,"owner":"0x190687eefda41791730cec891dcf27efabcba364","version":"1"}}',
            raw_bytes:
              "AAAAAAAAAAAAAAAAGJOH7v2kF5FzDOyJHc8n76vLo2QAAQAAAAAAAAA=",
            struct_tag: "0x1::object::ObjectCore"
          },
          {
            address:
              "0xe498fd3cd677d753de48bea10c4ebeb8ff99d8be88d442fcf156687ff3f8add7",
            move_resource:
              '{"type":"0x1::fungible_asset::FungibleStore","data":{"balance":"1000000","frozen":false,"metadata":{"inner":"0x8e4733bdabcf7d4afc3d14f0dd46c9bf52fb0fce9e4b996c939e195b8bc891d9"}}}',
            raw_bytes:
              "jkczvavPfUr8PRTw3UbJv1L7D86eS5lsk54ZW4vIkdlAQg8AAAAAAA==",
            struct_tag: "0x1::fungible_asset::FungibleStore"
          }
        ]
      },
    "/initia/move/v1/denom?metadata=0x8e4733bdabcf7d4afc3d14f0dd46c9bf52fb0fce9e4b996c939e195b8bc891d9":
      { denom: "uinit" }
  },
  POST: {}
};

// Source: https://scan-api.initia.xyz/v1/initia/interwoven-1/txs/C6E8685C20434A97A52EE3B040DB82B313323BB08407C5A58AB7CEA3448EB46F
export const mockRealMsgExecWithDifferentAddresses = {
  code: 0,
  codespace: "",
  data: "122B0A252F636F736D6F732E617574687A2E763162657461312E4D736745786563526573706F6E736512020A00",
  events: [
    {
      attributes: [
        {
          key: "granter",
          value: "init1ryrg0mha5stezucvajy3mne8a74uhgmygdlnxp"
        },
        { key: "grantee", value: "init1rw34mgv2y626996n2ccpl6lfctk43v7azmarvg" }
      ],
      type: "use_feegrant"
    },
    {
      attributes: [
        {
          key: "granter",
          value: "init1ryrg0mha5stezucvajy3mne8a74uhgmygdlnxp"
        },
        { key: "grantee", value: "init1rw34mgv2y626996n2ccpl6lfctk43v7azmarvg" }
      ],
      type: "update_feegrant"
    },
    {
      attributes: [
        {
          key: "sender",
          value: "0x1,0x190687eefda41791730cec891dcf27efabcba364"
        },
        { key: "module_addr", value: "0x1" },
        { key: "module_name", value: "coin" },
        { key: "function_name", value: "sudo_transfer" }
      ],
      type: "execute"
    },
    {
      attributes: [
        { key: "type_tag", value: "0x1::fungible_asset::WithdrawEvent" },
        {
          key: "data",
          value:
            '{"store_addr":"0xe498fd3cd677d753de48bea10c4ebeb8ff99d8be88d442fcf156687ff3f8add7","metadata_addr":"0x8e4733bdabcf7d4afc3d14f0dd46c9bf52fb0fce9e4b996c939e195b8bc891d9","amount":"3164"}'
        }
      ],
      type: "move"
    },
    {
      attributes: [
        { key: "type_tag", value: "0x1::fungible_asset::WithdrawOwnerEvent" },
        {
          key: "data",
          value: '{"owner":"0x190687eefda41791730cec891dcf27efabcba364"}'
        }
      ],
      type: "move"
    },
    {
      attributes: [
        { key: "type_tag", value: "0x1::fungible_asset::DepositEvent" },
        {
          key: "data",
          value:
            '{"store_addr":"0x66a8cb0bfb991610dcffb8a6543ac0887c7c5405b8f985ebed6d628fe50c4686","metadata_addr":"0x8e4733bdabcf7d4afc3d14f0dd46c9bf52fb0fce9e4b996c939e195b8bc891d9","amount":"3164"}'
        }
      ],
      type: "move"
    },
    {
      attributes: [
        { key: "type_tag", value: "0x1::fungible_asset::DepositOwnerEvent" },
        {
          key: "data",
          value: '{"owner":"0xf1829676db577682e944fc3493d451b67ff3e29f"}'
        }
      ],
      type: "move"
    },
    {
      attributes: [
        {
          key: "spender",
          value: "init1ryrg0mha5stezucvajy3mne8a74uhgmygdlnxp"
        },
        { key: "amount", value: "3164uinit" }
      ],
      type: "coin_spent"
    },
    {
      attributes: [
        {
          key: "receiver",
          value: "init17xpfvakm2amg962yls6f84z3kell8c5l70rnql"
        },
        { key: "amount", value: "3164uinit" }
      ],
      type: "coin_received"
    },
    {
      attributes: [
        {
          key: "recipient",
          value: "init17xpfvakm2amg962yls6f84z3kell8c5l70rnql"
        },
        { key: "sender", value: "init1ryrg0mha5stezucvajy3mne8a74uhgmygdlnxp" },
        { key: "amount", value: "3164uinit" }
      ],
      type: "transfer"
    },
    {
      attributes: [
        { key: "sender", value: "init1ryrg0mha5stezucvajy3mne8a74uhgmygdlnxp" }
      ],
      type: "message"
    },
    {
      attributes: [
        { key: "fee", value: "3164uinit" },
        {
          key: "fee_payer",
          value: "init1ryrg0mha5stezucvajy3mne8a74uhgmygdlnxp"
        }
      ],
      type: "tx"
    },
    {
      attributes: [
        {
          key: "acc_seq",
          value: "init1rw34mgv2y626996n2ccpl6lfctk43v7azmarvg/6"
        }
      ],
      type: "tx"
    },
    {
      attributes: [
        {
          key: "signature",
          value:
            "Kn9W/NZdIyalI71QT1fUN9kniYMYyDMvT1Hf1DafUr1tmlp6A+ASxyhhUb+Sc7ZTCbjRTswb5Z5S5E07Cz5Q9A=="
        }
      ],
      type: "tx"
    },
    {
      attributes: [
        { key: "action", value: "/cosmos.authz.v1beta1.MsgExec" },
        { key: "sender", value: "init1rw34mgv2y626996n2ccpl6lfctk43v7azmarvg" },
        { key: "module", value: "authz" },
        { key: "msg_index", value: "0" }
      ],
      type: "message"
    },
    {
      attributes: [
        {
          key: "sender",
          value: "0x1,0x190687eefda41791730cec891dcf27efabcba364"
        },
        { key: "module_addr", value: "0x1" },
        { key: "module_name", value: "coin" },
        { key: "function_name", value: "sudo_transfer" },
        { key: "authz_msg_index", value: "0" },
        { key: "msg_index", value: "0" }
      ],
      type: "execute"
    },
    {
      attributes: [
        { key: "type_tag", value: "0x1::fungible_asset::WithdrawEvent" },
        {
          key: "data",
          value:
            '{"store_addr":"0xe498fd3cd677d753de48bea10c4ebeb8ff99d8be88d442fcf156687ff3f8add7","metadata_addr":"0x8e4733bdabcf7d4afc3d14f0dd46c9bf52fb0fce9e4b996c939e195b8bc891d9","amount":"1000000"}'
        },
        { key: "authz_msg_index", value: "0" },
        { key: "msg_index", value: "0" }
      ],
      type: "move"
    },
    {
      attributes: [
        { key: "type_tag", value: "0x1::fungible_asset::WithdrawOwnerEvent" },
        {
          key: "data",
          value: '{"owner":"0x190687eefda41791730cec891dcf27efabcba364"}'
        },
        { key: "authz_msg_index", value: "0" },
        { key: "msg_index", value: "0" }
      ],
      type: "move"
    },
    {
      attributes: [
        { key: "type_tag", value: "0x1::fungible_asset::DepositEvent" },
        {
          key: "data",
          value:
            '{"store_addr":"0xe4216a00894a4981c78ee0071e5025a1dae88fcda8d82f2e53d9c61b68258e3e","metadata_addr":"0x8e4733bdabcf7d4afc3d14f0dd46c9bf52fb0fce9e4b996c939e195b8bc891d9","amount":"1000000"}'
        },
        { key: "authz_msg_index", value: "0" },
        { key: "msg_index", value: "0" }
      ],
      type: "move"
    },
    {
      attributes: [
        { key: "type_tag", value: "0x1::fungible_asset::DepositOwnerEvent" },
        {
          key: "data",
          value: '{"owner":"0xf6675f0bc278299b9d20ef71f225b0b3fd10e1b0"}'
        },
        { key: "authz_msg_index", value: "0" },
        { key: "msg_index", value: "0" }
      ],
      type: "move"
    },
    {
      attributes: [
        {
          key: "spender",
          value: "init1ryrg0mha5stezucvajy3mne8a74uhgmygdlnxp"
        },
        { key: "amount", value: "1000000uinit" },
        { key: "authz_msg_index", value: "0" },
        { key: "msg_index", value: "0" }
      ],
      type: "coin_spent"
    },
    {
      attributes: [
        {
          key: "receiver",
          value: "init17en47z7z0q5eh8fqaaclyfdsk073pcds5pu0gr"
        },
        { key: "amount", value: "1000000uinit" },
        { key: "authz_msg_index", value: "0" },
        { key: "msg_index", value: "0" }
      ],
      type: "coin_received"
    },
    {
      attributes: [
        {
          key: "recipient",
          value: "init17en47z7z0q5eh8fqaaclyfdsk073pcds5pu0gr"
        },
        { key: "sender", value: "init1ryrg0mha5stezucvajy3mne8a74uhgmygdlnxp" },
        { key: "amount", value: "1000000uinit" },
        { key: "authz_msg_index", value: "0" },
        { key: "msg_index", value: "0" }
      ],
      type: "transfer"
    },
    {
      attributes: [
        { key: "sender", value: "init1ryrg0mha5stezucvajy3mne8a74uhgmygdlnxp" },
        { key: "authz_msg_index", value: "0" },
        { key: "msg_index", value: "0" }
      ],
      type: "message"
    }
  ],
  gas_used: "160812",
  gas_wanted: "210905",
  height: "9303853",
  info: "",
  logs: [
    {
      events: [
        {
          attributes: [
            {
              key: "sender",
              value: "0x1,0x190687eefda41791730cec891dcf27efabcba364"
            },
            { key: "module_addr", value: "0x1" },
            { key: "module_name", value: "coin" },
            { key: "function_name", value: "sudo_transfer" },
            { key: "authz_msg_index", value: "0" },
            { key: "msg_index", value: "0" }
          ],
          type: "execute"
        },
        {
          attributes: [
            { key: "type_tag", value: "0x1::fungible_asset::WithdrawEvent" },
            {
              key: "data",
              value:
                '{"store_addr":"0xe498fd3cd677d753de48bea10c4ebeb8ff99d8be88d442fcf156687ff3f8add7","metadata_addr":"0x8e4733bdabcf7d4afc3d14f0dd46c9bf52fb0fce9e4b996c939e195b8bc891d9","amount":"1000000"}'
            },
            { key: "authz_msg_index", value: "0" },
            { key: "msg_index", value: "0" }
          ],
          type: "move"
        },
        {
          attributes: [
            {
              key: "type_tag",
              value: "0x1::fungible_asset::WithdrawOwnerEvent"
            },
            {
              key: "data",
              value: '{"owner":"0x190687eefda41791730cec891dcf27efabcba364"}'
            },
            { key: "authz_msg_index", value: "0" },
            { key: "msg_index", value: "0" }
          ],
          type: "move"
        },
        {
          attributes: [
            { key: "type_tag", value: "0x1::fungible_asset::DepositEvent" },
            {
              key: "data",
              value:
                '{"store_addr":"0xe4216a00894a4981c78ee0071e5025a1dae88fcda8d82f2e53d9c61b68258e3e","metadata_addr":"0x8e4733bdabcf7d4afc3d14f0dd46c9bf52fb0fce9e4b996c939e195b8bc891d9","amount":"1000000"}'
            },
            { key: "authz_msg_index", value: "0" },
            { key: "msg_index", value: "0" }
          ],
          type: "move"
        },
        {
          attributes: [
            {
              key: "type_tag",
              value: "0x1::fungible_asset::DepositOwnerEvent"
            },
            {
              key: "data",
              value: '{"owner":"0xf6675f0bc278299b9d20ef71f225b0b3fd10e1b0"}'
            },
            { key: "authz_msg_index", value: "0" },
            { key: "msg_index", value: "0" }
          ],
          type: "move"
        },
        {
          attributes: [
            {
              key: "spender",
              value: "init1ryrg0mha5stezucvajy3mne8a74uhgmygdlnxp"
            },
            { key: "amount", value: "1000000uinit" },
            { key: "authz_msg_index", value: "0" },
            { key: "msg_index", value: "0" }
          ],
          type: "coin_spent"
        },
        {
          attributes: [
            {
              key: "receiver",
              value: "init17en47z7z0q5eh8fqaaclyfdsk073pcds5pu0gr"
            },
            { key: "amount", value: "1000000uinit" },
            { key: "authz_msg_index", value: "0" },
            { key: "msg_index", value: "0" }
          ],
          type: "coin_received"
        },
        {
          attributes: [
            {
              key: "recipient",
              value: "init17en47z7z0q5eh8fqaaclyfdsk073pcds5pu0gr"
            },
            {
              key: "sender",
              value: "init1ryrg0mha5stezucvajy3mne8a74uhgmygdlnxp"
            },
            { key: "amount", value: "1000000uinit" },
            { key: "authz_msg_index", value: "0" },
            { key: "msg_index", value: "0" }
          ],
          type: "transfer"
        },
        {
          attributes: [
            { key: "action", value: "/cosmos.authz.v1beta1.MsgExec" },
            {
              key: "sender",
              value: "init1rw34mgv2y626996n2ccpl6lfctk43v7azmarvg"
            },
            { key: "module", value: "authz" },
            { key: "msg_index", value: "0" }
          ],
          type: "message"
        },
        {
          attributes: [
            {
              key: "sender",
              value: "init1ryrg0mha5stezucvajy3mne8a74uhgmygdlnxp"
            },
            { key: "authz_msg_index", value: "0" },
            { key: "msg_index", value: "0" }
          ],
          type: "message"
        }
      ],
      log: "",
      msg_index: 0
    }
  ],
  raw_log: "",
  timestamp: "2025-11-03T09:07:34Z",
  tx: {
    "@type": "/cosmos.tx.v1beta1.Tx",
    auth_info: {
      fee: {
        amount: [{ amount: "3164", denom: "uinit" }],
        gas_limit: "210905",
        granter: "init1ryrg0mha5stezucvajy3mne8a74uhgmygdlnxp",
        payer: ""
      },
      signer_infos: [
        {
          mode_info: { single: { mode: "SIGN_MODE_EIP_191" } },
          public_key: {
            "@type": "/initia.crypto.v1beta1.ethsecp256k1.PubKey",
            key: "Asnlgbxa6R/heXxfbYAJEELDsXuohrHFB3YftSIPJL+e"
          },
          sequence: "6"
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
          grantee: "init1rw34mgv2y626996n2ccpl6lfctk43v7azmarvg",
          msgs: [
            {
              "@type": "/cosmos.bank.v1beta1.MsgSend",
              amount: [{ amount: "1000000", denom: "uinit" }],
              from_address: "init1ryrg0mha5stezucvajy3mne8a74uhgmygdlnxp",
              to_address: "init17en47z7z0q5eh8fqaaclyfdsk073pcds5pu0gr"
            }
          ]
        }
      ],
      non_critical_extension_options: [],
      timeout_height: "0"
    },
    signatures: [
      "Kn9W/NZdIyalI71QT1fUN9kniYMYyDMvT1Hf1DafUr1tmlp6A+ASxyhhUb+Sc7ZTCbjRTswb5Z5S5E07Cz5Q9A=="
    ]
  },
  txhash: "C6E8685C20434A97A52EE3B040DB82B313323BB08407C5A58AB7CEA3448EB46F"
};

export const mockApiResponsesForRealTx2 = {
  GET: {
    "/initia/move/v1/accounts/0xe498fd3cd677d753de48bea10c4ebeb8ff99d8be88d442fcf156687ff3f8add7/resources":
      {
        pagination: { next_key: null, total: "0" },
        resources: [
          {
            address:
              "0xe498fd3cd677d753de48bea10c4ebeb8ff99d8be88d442fcf156687ff3f8add7",
            move_resource:
              '{"type":"0x1::object::ObjectCore","data":{"allow_ungated_transfer":false,"owner":"0x190687eefda41791730cec891dcf27efabcba364","version":"1"}}',
            raw_bytes:
              "AAAAAAAAAAAAAAAAGJOH7v2kF5FzDOyJHc8n76vLo2QAAQAAAAAAAAA=",
            struct_tag: "0x1::object::ObjectCore"
          },
          {
            address:
              "0xe498fd3cd677d753de48bea10c4ebeb8ff99d8be88d442fcf156687ff3f8add7",
            move_resource:
              '{"type":"0x1::fungible_asset::FungibleStore","data":{"balance":"1000000","frozen":false,"metadata":{"inner":"0x8e4733bdabcf7d4afc3d14f0dd46c9bf52fb0fce9e4b996c939e195b8bc891d9"}}}',
            raw_bytes:
              "jkczvavPfUr8PRTw3UbJv1L7D86eS5lsk54ZW4vIkdlAQg8AAAAAAA==",
            struct_tag: "0x1::fungible_asset::FungibleStore"
          }
        ]
      },
    "/initia/move/v1/accounts/0xe4216a00894a4981c78ee0071e5025a1dae88fcda8d82f2e53d9c61b68258e3e/resources":
      {
        pagination: { next_key: null, total: "0" },
        resources: [
          {
            address:
              "0xe4216a00894a4981c78ee0071e5025a1dae88fcda8d82f2e53d9c61b68258e3e",
            move_resource:
              '{"type":"0x1::object::ObjectCore","data":{"allow_ungated_transfer":false,"owner":"0xf6675f0bc278299b9d20ef71f225b0b3fd10e1b0","version":"1"}}',
            raw_bytes:
              "AAAAAAAAAAAAAAAA9mdl8Lwngpm50g73HyJbCz/RDhsAAQAAAAAAAAA=",
            struct_tag: "0x1::object::ObjectCore"
          },
          {
            address:
              "0xe4216a00894a4981c78ee0071e5025a1dae88fcda8d82f2e53d9c61b68258e3e",
            move_resource:
              '{"type":"0x1::fungible_asset::FungibleStore","data":{"balance":"1000000","frozen":false,"metadata":{"inner":"0x8e4733bdabcf7d4afc3d14f0dd46c9bf52fb0fce9e4b996c939e195b8bc891d9"}}}',
            raw_bytes:
              "jkczvavPfUr8PRTw3UbJv1L7D86eS5lsk54ZW4vIkdlAQg8AAAAAAA==",
            struct_tag: "0x1::fungible_asset::FungibleStore"
          }
        ]
      },
    "/initia/move/v1/denom?metadata=0x8e4733bdabcf7d4afc3d14f0dd46c9bf52fb0fce9e4b996c939e195b8bc891d9":
      { denom: "uinit" }
  },
  POST: {}
};

export const mockMsgExecWithMultiple = {
  code: 0,
  codespace: "",
  data: "TEST",
  events: [],
  gas_used: "250000",
  gas_wanted: "400000",
  height: "1000002",
  info: "",
  logs: [
    {
      events: [
        {
          attributes: [
            { key: "spender", value: "init1sender" },
            { key: "amount", value: "100uinit" },
            { key: "msg_index", value: "0" },
            { key: "authz_msg_index", value: "0" }
          ],
          type: "coin_spent"
        },
        {
          attributes: [
            { key: "receiver", value: "init1receiver1" },
            { key: "amount", value: "100uinit" },
            { key: "msg_index", value: "0" },
            { key: "authz_msg_index", value: "0" }
          ],
          type: "coin_received"
        },
        {
          attributes: [
            { key: "recipient", value: "init1receiver1" },
            { key: "sender", value: "init1sender" },
            { key: "amount", value: "100uinit" },
            { key: "msg_index", value: "0" },
            { key: "authz_msg_index", value: "0" }
          ],
          type: "transfer"
        },
        {
          attributes: [
            { key: "spender", value: "init1sender" },
            { key: "amount", value: "200uinit" },
            { key: "msg_index", value: "0" },
            { key: "authz_msg_index", value: "1" }
          ],
          type: "coin_spent"
        },
        {
          attributes: [
            { key: "receiver", value: "init1receiver2" },
            { key: "amount", value: "200uinit" },
            { key: "msg_index", value: "0" },
            { key: "authz_msg_index", value: "1" }
          ],
          type: "coin_received"
        },
        {
          attributes: [
            { key: "recipient", value: "init1receiver2" },
            { key: "sender", value: "init1sender" },
            { key: "amount", value: "200uinit" },
            { key: "msg_index", value: "0" },
            { key: "authz_msg_index", value: "1" }
          ],
          type: "transfer"
        },
        {
          attributes: [
            { key: "action", value: "/cosmos.authz.v1beta1.MsgExec" },
            { key: "msg_index", value: "0" }
          ],
          type: "message"
        }
      ],
      log: "",
      msg_index: 0
    }
  ],
  raw_log: "",
  timestamp: "2025-11-03T10:10:00Z",
  tx: {
    "@type": "/cosmos.tx.v1beta1.Tx",
    auth_info: {
      fee: {
        amount: [{ amount: "6000", denom: "uinit" }],
        gas_limit: "400000",
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
          sequence: "3"
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
              "@type": "/cosmos.bank.v1beta1.MsgSend",
              amount: [{ amount: "100", denom: "uinit" }],
              from_address: "init1sender",
              to_address: "init1receiver1"
            },
            {
              "@type": "/cosmos.bank.v1beta1.MsgSend",
              amount: [{ amount: "200", denom: "uinit" }],
              from_address: "init1sender",
              to_address: "init1receiver2"
            }
          ]
        }
      ],
      non_critical_extension_options: [],
      timeout_height: "0"
    },
    signatures: ["test"]
  },
  txhash: "TEST789"
};

export const mockMsgExecGranteeExecutesForGranter = {
  code: 0,
  codespace: "",
  data: "TEST",
  events: [],
  gas_used: "150000",
  gas_wanted: "250000",
  height: "1000000",
  info: "",
  logs: [
    {
      events: [
        {
          attributes: [
            { index: true, key: "spender", value: "init1granter" },
            { index: true, key: "amount", value: "500uinit" },
            { index: true, key: "msg_index", value: "0" },
            { index: true, key: "authz_msg_index", value: "0" }
          ],
          type: "coin_spent"
        },
        {
          attributes: [
            { index: true, key: "receiver", value: "init1recipient" },
            { index: true, key: "amount", value: "500uinit" },
            { index: true, key: "msg_index", value: "0" },
            { index: true, key: "authz_msg_index", value: "0" }
          ],
          type: "coin_received"
        },
        {
          attributes: [
            { index: true, key: "recipient", value: "init1recipient" },
            { index: true, key: "sender", value: "init1granter" },
            { index: true, key: "amount", value: "500uinit" },
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
            { index: true, key: "sender", value: "init1grantee" },
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
  timestamp: "2025-11-03T10:00:00Z",
  tx: {
    "@type": "/cosmos.tx.v1beta1.Tx",
    auth_info: {
      fee: {
        amount: [{ amount: "3000", denom: "uinit" }],
        gas_limit: "250000",
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
          grantee: "init1grantee",
          msgs: [
            {
              "@type": "/cosmos.bank.v1beta1.MsgSend",
              amount: [{ amount: "500", denom: "uinit" }],
              from_address: "init1granter",
              to_address: "init1recipient"
            }
          ]
        }
      ],
      non_critical_extension_options: [],
      timeout_height: "0"
    },
    signatures: ["test"]
  },
  txhash: "TESTAUTHZABC"
};

export const mockAuthzGrantTransaction = {
  code: 0,
  codespace: "",
  data: "12280A262F636F736D6F732E617574687A2E763162657461312E4D73674772616E74526573706F6E7365",
  events: [
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
  txhash: "TEST_AUTHZ_GRANT_HASH"
};

export const mockAuthzRevokeTransaction = {
  code: 0,
  codespace: "",
  data: "12290A272F636F736D6F732E617574687A2E763162657461312E4D73675265766F6B65526573706F6E7365",
  events: [
    {
      attributes: [
        {
          index: true,
          key: "action",
          value: "/cosmos.authz.v1beta1.MsgRevoke"
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
          "@type": "/cosmos.authz.v1beta1.MsgRevoke",
          grantee: "init1rw34mgv2y626996n2ccpl6lfctk43v7azmarvg",
          granter: "init1ryrg0mha5stezucvajy3mne8a74uhgmygdlnxp",
          msg_type_url: "/cosmos.bank.v1beta1.MsgSend"
        }
      ],
      non_critical_extension_options: [],
      timeout_height: "0"
    },
    signatures: []
  },
  txhash: "TEST_AUTHZ_REVOKE_HASH"
};

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
