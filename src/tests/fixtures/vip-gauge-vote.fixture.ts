export const mockMsgVipGaugeVote = {
  code: 0,
  codespace: "",
  data: "12240A222F696E697469612E6D6F76652E76312E4D736745786563757465526573706F6E7365",
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
            '{"store_addr":"0xe2d99fcea59da8da2d4095cc11cb83e6ff80cf2e41522c678b8f152233d1b65e","metadata_addr":"0x8e4733bdabcf7d4afc3d14f0dd46c9bf52fb0fce9e4b996c939e195b8bc891d9","amount":"12260"}'
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
            '{"store_addr":"0x66a8cb0bfb991610dcffb8a6543ac0887c7c5405b8f985ebed6d628fe50c4686","metadata_addr":"0x8e4733bdabcf7d4afc3d14f0dd46c9bf52fb0fce9e4b996c939e195b8bc891d9","amount":"12260"}'
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
          value: "12260uinit"
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
          value: "12260uinit"
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
          value: "12260uinit"
        }
      ],
      type: "transfer"
    },
    {
      attributes: [
        {
          index: true,
          key: "sender",
          value: "init1kw2unuhgfa6mz6r0ehrzlr9k9ftjk7pql8u5fm"
        }
      ],
      type: "message"
    },
    {
      attributes: [
        {
          index: true,
          key: "fee",
          value: "12260uinit"
        },
        {
          index: true,
          key: "fee_payer",
          value: "init1kw2unuhgfa6mz6r0ehrzlr9k9ftjk7pql8u5fm"
        }
      ],
      type: "tx"
    },
    {
      attributes: [
        {
          index: true,
          key: "acc_seq",
          value: "init1kw2unuhgfa6mz6r0ehrzlr9k9ftjk7pql8u5fm/70"
        }
      ],
      type: "tx"
    },
    {
      attributes: [
        {
          index: true,
          key: "signature",
          value:
            "AsFhD7WMbOYLuXH41vTjN3PfaqcNPtYGMjpFYqnlLPt08OWZ1tGqEh5Q7+keAVuBINM/dIU+Gb9uILGcUEOhgw=="
        }
      ],
      type: "tx"
    },
    {
      attributes: [
        {
          index: true,
          key: "action",
          value: "/initia.move.v1.MsgExecute"
        },
        {
          index: true,
          key: "sender",
          value: "init1kw2unuhgfa6mz6r0ehrzlr9k9ftjk7pql8u5fm"
        },
        {
          index: true,
          key: "module",
          value: "move"
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
          value: "0xb395c9f2e84f75b1686fcdc62f8cb62a572b7820"
        },
        {
          index: true,
          key: "module_addr",
          value:
            "0x3a886b32a802582f2e446e74d4a24d1d7ed01adf46d2a8f65c5723887e708789"
        },
        {
          index: true,
          key: "module_name",
          value: "weight_vote"
        },
        {
          index: true,
          key: "function_name",
          value: "vote"
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
          value:
            "0x3a886b32a802582f2e446e74d4a24d1d7ed01adf46d2a8f65c5723887e708789::weight_vote::VoteEvent"
        },
        {
          index: true,
          key: "data",
          value:
            '{"account":"0xb395c9f2e84f75b1686fcdc62f8cb62a572b7820","cycle":"8","max_voting_power":"903526","voting_power":"903526","weights":[{"bridge_id":"16","weight":"0.1"},{"bridge_id":"27","weight":"0.3"},{"bridge_id":"17","weight":"0.4"},{"bridge_id":"31","weight":"0.1"},{"bridge_id":"32","weight":"0.1"}]}'
        },
        {
          index: true,
          key: "msg_index",
          value: "0"
        }
      ],
      type: "move"
    }
  ],
  gas_used: "578815",
  gas_wanted: "817301",
  height: "5666687",
  info: "",
  logs: [],
  raw_log: "",
  timestamp: "2025-08-01T03:57:50Z",
  tx: {
    "@type": "/cosmos.tx.v1beta1.Tx",
    auth_info: {
      fee: {
        amount: [
          {
            amount: "12260",
            denom: "uinit"
          }
        ],
        gas_limit: "817301",
        granter: "",
        payer: ""
      },
      signer_infos: [
        {
          mode_info: {
            single: {
              mode: "SIGN_MODE_EIP_191"
            }
          },
          public_key: {
            "@type": "/initia.crypto.v1beta1.ethsecp256k1.PubKey",
            key: "Axdt0OtFq4TF/TA4EnlF4J0Lv6E+9jFccR2/ULQVXP2a"
          },
          sequence: "70"
        }
      ],
      tip: null
    },
    body: {
      extension_options: [],
      memo: "",
      messages: [
        {
          "@type": "/initia.move.v1.MsgExecute",
          args: [
            "CAAAAAAAAAA=",
            "BSAAAAAAAAAAHwAAAAAAAAARAAAAAAAAABsAAAAAAAAAEAAAAAAAAAA=",
            "BQgAAIpdeEVjAQgAAIpdeEVjAQgAACh24RWNBQgAAJ4YadApBAgAAIpdeEVjAQ=="
          ],
          function_name: "vote",
          module_address:
            "0x3a886b32a802582f2e446e74d4a24d1d7ed01adf46d2a8f65c5723887e708789",
          module_name: "weight_vote",
          sender: "init1kw2unuhgfa6mz6r0ehrzlr9k9ftjk7pql8u5fm",
          type_args: []
        }
      ],
      non_critical_extension_options: [],
      timeout_height: "0"
    },
    signatures: [
      "AsFhD7WMbOYLuXH41vTjN3PfaqcNPtYGMjpFYqnlLPt08OWZ1tGqEh5Q7+keAVuBINM/dIU+Gb9uILGcUEOhgw=="
    ]
  },
  txhash: "38574FB233CACAEA253FEC4433C659B734CDAD783585E7257CEA5612A983F586"
};

export const mockApiResponsesForVipGaugeVote = {
  GET: {
    "/chains.json": [
      {
        chain_id: "echelon-1",
        chain_name: "echelon",
        metadata: {
          ibc_channels: [],
          op_bridge_id: "16"
        }
      },
      {
        chain_id: "ingnetwork-1",
        chain_name: "ingnetwork",
        metadata: {
          ibc_channels: [],
          op_bridge_id: "27"
        }
      },
      {
        chain_id: "rave-1",
        chain_name: "rave",
        metadata: {
          ibc_channels: [],
          op_bridge_id: "17"
        }
      },
      {
        chain_id: "intergaze-1",
        chain_name: "intergaze",
        metadata: {
          ibc_channels: [],
          op_bridge_id: "31"
        }
      },
      {
        chain_id: "inertia-2",
        chain_name: "inertia",
        metadata: {
          ibc_channels: [],
          op_bridge_id: "32"
        }
      }
    ],
    "/initia/move/v1/accounts/0x66a8cb0bfb991610dcffb8a6543ac0887c7c5405b8f985ebed6d628fe50c4686/resources":
      {
        pagination: {
          next_key: null,
          total: "0"
        },
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
              '{"type":"0x1::fungible_asset::FungibleStore","data":{"balance":"0","frozen":false,"metadata":{"inner":"0x8e4733bdabcf7d4afc3d14f0dd46c9bf52fb0fce9e4b996c939e195b8bc891d9"}}}',
            raw_bytes:
              "jkczvavPfUr8PRTw3UbJv1L7D86eS5lsk54ZW4vIkdkAAAAAAAAAAAA=",
            struct_tag: "0x1::fungible_asset::FungibleStore"
          }
        ]
      },
    "/initia/move/v1/accounts/0xe2d99fcea59da8da2d4095cc11cb83e6ff80cf2e41522c678b8f152233d1b65e/resources":
      {
        pagination: {
          next_key: null,
          total: "0"
        },
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
              '{"type":"0x1::fungible_asset::FungibleStore","data":{"balance":"0","frozen":false,"metadata":{"inner":"0x8e4733bdabcf7d4afc3d14f0dd46c9bf52fb0fce9e4b996c939e195b8bc891d9"}}}',
            raw_bytes:
              "jkczvavPfUr8PRTw3UbJv1L7D86eS5lsk54ZW4vIkdkAAAAAAAAAAAA=",
            struct_tag: "0x1::fungible_asset::FungibleStore"
          }
        ]
      },
    "/initia/move/v1/denom?metadata=0x8e4733bdabcf7d4afc3d14f0dd46c9bf52fb0fce9e4b996c939e195b8bc891d9":
      {
        denom: "uinit"
      }
  }
};
