// Authz MsgExec wrapping a MsgSend
export const mockMsgExecWithSendMessage = {
  code: 0,
  codespace: "",
  data: "12260A242F636F736D6F732E62616E6B2E763162657461312E4D736753656E64526573706F6E7365",
  events: [
    {
      attributes: [
        {
          index: true,
          key: "sender",
          value: "0x1,0xb395c9f2e84f75b1686fcdc62f8cb62a572b7820"
        },
        {
          index: true,
          key: "module_addr",
          value: "0x1"
        },
        {
          index: true,
          key: "module_name",
          value: "coin"
        },
        {
          index: true,
          key: "function_name",
          value: "sudo_transfer"
        }
      ],
      type: "execute"
    },
    {
      attributes: [
        {
          index: true,
          key: "type_tag",
          value: "0x1::fungible_asset::WithdrawEvent"
        },
        {
          index: true,
          key: "data",
          value:
            '{"store_addr":"0xe2d99fcea59da8da2d4095cc11cb83e6ff80cf2e41522c678b8f152233d1b65e","metadata_addr":"0x8e4733bdabcf7d4afc3d14f0dd46c9bf52fb0fce9e4b996c939e195b8bc891d9","amount":"100"}'
        }
      ],
      type: "move"
    },
    {
      attributes: [
        {
          index: true,
          key: "type_tag",
          value: "0x1::fungible_asset::DepositEvent"
        },
        {
          index: true,
          key: "data",
          value:
            '{"store_addr":"0x66a8cb0bfb991610dcffb8a6543ac0887c7c5405b8f985ebed6d628fe50c4686","metadata_addr":"0x8e4733bdabcf7d4afc3d14f0dd46c9bf52fb0fce9e4b996c939e195b8bc891d9","amount":"100"}'
        }
      ],
      type: "move"
    },
    {
      attributes: [
        {
          index: true,
          key: "spender",
          value: "init1kw2unuhgfa6mz6r0ehrzlr9k9ftjk7pql8u5fm"
        },
        {
          index: true,
          key: "amount",
          value: "100uinit"
        }
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
        {
          index: true,
          key: "amount",
          value: "100uinit"
        }
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
        {
          index: true,
          key: "amount",
          value: "100uinit"
        }
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
        {
          index: true,
          key: "sender",
          value: "init1nyky4mrxx69l4zpqtdldkk9rlf9grlnn77djlh"
        },
        {
          index: true,
          key: "module",
          value: "authz"
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
          key: "sender",
          value: "init1nyky4mrxx69l4zpqtdldkk9rlf9grlnn77djlh"
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
  gas_used: "201637",
  gas_wanted: "339037",
  height: "4169271",
  info: "",
  logs: [
    {
      events: [
        {
          attributes: [
            {
              index: true,
              key: "sender",
              value: "0x1,0xb395c9f2e84f75b1686fcdc62f8cb62a572b7820"
            },
            {
              index: true,
              key: "module_addr",
              value: "0x1"
            },
            {
              index: true,
              key: "module_name",
              value: "coin"
            },
            {
              index: true,
              key: "function_name",
              value: "sudo_transfer"
            },
            {
              index: true,
              key: "msg_index",
              value: "0"
            }
          ],
          type: "execute"
        },
        {
          attributes: [
            {
              index: true,
              key: "type_tag",
              value: "0x1::fungible_asset::WithdrawEvent"
            },
            {
              index: true,
              key: "data",
              value:
                '{"store_addr":"0xe2d99fcea59da8da2d4095cc11cb83e6ff80cf2e41522c678b8f152233d1b65e","metadata_addr":"0x8e4733bdabcf7d4afc3d14f0dd46c9bf52fb0fce9e4b996c939e195b8bc891d9","amount":"100"}'
            },
            {
              index: true,
              key: "msg_index",
              value: "0"
            }
          ],
          type: "move"
        },
        {
          attributes: [
            {
              index: true,
              key: "type_tag",
              value: "0x1::fungible_asset::DepositEvent"
            },
            {
              index: true,
              key: "data",
              value:
                '{"store_addr":"0x66a8cb0bfb991610dcffb8a6543ac0887c7c5405b8f985ebed6d628fe50c4686","metadata_addr":"0x8e4733bdabcf7d4afc3d14f0dd46c9bf52fb0fce9e4b996c939e195b8bc891d9","amount":"100"}'
            },
            {
              index: true,
              key: "msg_index",
              value: "0"
            }
          ],
          type: "move"
        },
        {
          attributes: [
            {
              index: true,
              key: "spender",
              value: "init1kw2unuhgfa6mz6r0ehrzlr9k9ftjk7pql8u5fm"
            },
            {
              index: true,
              key: "amount",
              value: "100uinit"
            },
            {
              index: true,
              key: "msg_index",
              value: "0"
            }
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
            {
              index: true,
              key: "amount",
              value: "100uinit"
            },
            {
              index: true,
              key: "msg_index",
              value: "0"
            }
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
            {
              index: true,
              key: "amount",
              value: "100uinit"
            },
            {
              index: true,
              key: "msg_index",
              value: "0"
            }
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
            {
              index: true,
              key: "sender",
              value: "init1nyky4mrxx69l4zpqtdldkk9rlf9grlnn77djlh"
            },
            {
              index: true,
              key: "module",
              value: "authz"
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
              key: "sender",
              value: "init1nyky4mrxx69l4zpqtdldkk9rlf9grlnn77djlh"
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
      log: "",
      msg_index: 0
    }
  ],
  raw_log: "",
  timestamp: "2025-06-23T09:43:18Z",
  tx: {
    "@type": "/cosmos.tx.v1beta1.Tx",
    auth_info: {
      fee: {
        amount: [
          {
            amount: "6103",
            denom: "uinit"
          }
        ],
        gas_limit: "339037",
        granter: "",
        payer: ""
      },
      signer_infos: [
        {
          mode_info: {
            single: {
              mode: "SIGN_MODE_LEGACY_AMINO_JSON"
            }
          },
          public_key: {
            "@type": "/initia.crypto.v1beta1.ethsecp256k1.PubKey",
            key: "Axdt0OtFq4TF/TA4EnlF4J0Lv6E+9jFccR2/ULQVXP2a"
          },
          sequence: "22"
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
          grantee: "init1nyky4mrxx69l4zpqtdldkk9rlf9grlnn77djlh",
          msgs: [
            {
              "@type": "/cosmos.bank.v1beta1.MsgSend",
              amount: [
                {
                  amount: "100",
                  denom: "uinit"
                }
              ],
              from_address: "init1kw2unuhgfa6mz6r0ehrzlr9k9ftjk7pql8u5fm",
              to_address: "init17xpfvakm2amg962yls6f84z3kell8c5l70rnql"
            }
          ]
        }
      ],
      non_critical_extension_options: [],
      timeout_height: "0"
    },
    signatures: [
      "MiOnd/7iTA4hJvHSoo27HyvInTQt0LdV313+Hz5H/jNSJPeKdoHuNEatY66g3SobQehjSA7ej/3AUMSLCSvcUw=="
    ]
  },
  txhash: "7C8164D579F96B5C3C43BA2AB63A85B889A4917E5B29ECE801FD9F177DF71AAE"
};

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
              '{"type":"0x1::fungible_asset::FungibleStore","data":{"balance":"100","frozen":false,"metadata":{"inner":"0x8e4733bdabcf7d4afc3d14f0dd46c9bf52fb0fce9e4b996c939e195b8bc891d9"}}}',
            raw_bytes:
              "jkczvavPfUr8PRTw3UbJv1L7D86eS5lsk54ZW4vIkdlkAAAAAAAAAAA=",
            struct_tag: "0x1::fungible_asset::FungibleStore"
          }
        ]
      },
    "/initia/move/v1/accounts/0xe2d99fcea59da8da2d4095cc11cb83e6ff80cf2e41522c678b8f152233d1b65e/resources":
      {
        pagination: { next_key: null, total: "0" },
        resources: [
          {
            address:
              "0xe2d99fcea59da8da2d4095cc11cb83e6ff80cf2e41522c678b8f152233d1b65e",
            move_resource:
              '{"type":"0x1::object::ObjectCore","data":{"allow_ungated_transfer":false,"owner":"0xb395c9f2e84f75b1686fcdc62f8cb62a572b7820","version":"1"}}',
            raw_bytes:
              "AAAAAAAAAAAAAAAAs5XJ8uhPdbFob83GL4y2KlcreCAAAQAAAAAAAAA=",
            struct_tag: "0x1::object::ObjectCore"
          },
          {
            address:
              "0xe2d99fcea59da8da2d4095cc11cb83e6ff80cf2e41522c678b8f152233d1b65e",
            move_resource:
              '{"type":"0x1::fungible_asset::FungibleStore","data":{"balance":"74857716271","frozen":false,"metadata":{"inner":"0x8e4733bdabcf7d4afc3d14f0dd46c9bf52fb0fce9e4b996c939e195b8bc891d9"}}}',
            raw_bytes:
              "jkczvavPfUr8PRTw3UbJv1L7D86eS5lsk54ZW4vIkdkvGt5tEQAAAAA=",
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

// Real transaction from Initia blockchain
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

// Real transaction with different from/to addresses
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
