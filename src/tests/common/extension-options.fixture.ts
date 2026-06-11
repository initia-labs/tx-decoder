// Real tx 5126CB517545FE819676F16656D5944C2F53ABDD180A1EE4A326EC5EC7F0CBE4 on initiation-2,
// a queued tx whose body carries a non-empty extension_options array with a
// proto-JSON Any ({"@type": "/initia.tx.v1.ExtensionOptionQueuedTx"}).
export const mockMsgSendWithQueuedTxExtension = {
  code: 0,
  codespace: "",
  data: "12260A242F636F736D6F732E62616E6B2E763162657461312E4D736753656E64526573706F6E7365",
  events: [
    {
      attributes: [
        {
          index: true,
          key: "sender",
          value: "0x1,0x980643075e1aba826fc90f87b898d5179da640b3"
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
            '{"store_addr":"0x7d78fdbbdc7b04b0f02c98b68ba0c093463bba6f327356694b67bc767e52ff1d","metadata_addr":"0x8e4733bdabcf7d4afc3d14f0dd46c9bf52fb0fce9e4b996c939e195b8bc891d9","amount":"3000"}'
        },
        {
          index: true,
          key: "amount",
          value: "3000"
        },
        {
          index: true,
          key: "metadata_addr",
          value:
            "0x8e4733bdabcf7d4afc3d14f0dd46c9bf52fb0fce9e4b996c939e195b8bc891d9"
        },
        {
          index: true,
          key: "store_addr",
          value:
            "0x7d78fdbbdc7b04b0f02c98b68ba0c093463bba6f327356694b67bc767e52ff1d"
        }
      ],
      type: "move"
    },
    {
      attributes: [
        {
          index: true,
          key: "type_tag",
          value: "0x1::fungible_asset::WithdrawOwnerEvent"
        },
        {
          index: true,
          key: "data",
          value: '{"owner":"0x980643075e1aba826fc90f87b898d5179da640b3"}'
        },
        {
          index: true,
          key: "owner",
          value: "0x980643075e1aba826fc90f87b898d5179da640b3"
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
            '{"store_addr":"0x66a8cb0bfb991610dcffb8a6543ac0887c7c5405b8f985ebed6d628fe50c4686","metadata_addr":"0x8e4733bdabcf7d4afc3d14f0dd46c9bf52fb0fce9e4b996c939e195b8bc891d9","amount":"3000"}'
        },
        {
          index: true,
          key: "amount",
          value: "3000"
        },
        {
          index: true,
          key: "metadata_addr",
          value:
            "0x8e4733bdabcf7d4afc3d14f0dd46c9bf52fb0fce9e4b996c939e195b8bc891d9"
        },
        {
          index: true,
          key: "store_addr",
          value:
            "0x66a8cb0bfb991610dcffb8a6543ac0887c7c5405b8f985ebed6d628fe50c4686"
        }
      ],
      type: "move"
    },
    {
      attributes: [
        {
          index: true,
          key: "type_tag",
          value: "0x1::fungible_asset::DepositOwnerEvent"
        },
        {
          index: true,
          key: "data",
          value: '{"owner":"0xf1829676db577682e944fc3493d451b67ff3e29f"}'
        },
        {
          index: true,
          key: "owner",
          value: "0xf1829676db577682e944fc3493d451b67ff3e29f"
        }
      ],
      type: "move"
    },
    {
      attributes: [
        {
          index: true,
          key: "spender",
          value: "init1nqryxp67r2agym7fp7rm3xx4z7w6vs9nwtmk74"
        },
        {
          index: true,
          key: "amount",
          value: "3000uinit"
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
          value: "3000uinit"
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
          value: "init1nqryxp67r2agym7fp7rm3xx4z7w6vs9nwtmk74"
        },
        {
          index: true,
          key: "amount",
          value: "3000uinit"
        }
      ],
      type: "transfer"
    },
    {
      attributes: [
        {
          index: true,
          key: "sender",
          value: "init1nqryxp67r2agym7fp7rm3xx4z7w6vs9nwtmk74"
        }
      ],
      type: "message"
    },
    {
      attributes: [
        {
          index: true,
          key: "fee",
          value: "3000uinit"
        },
        {
          index: true,
          key: "fee_payer",
          value: "init1nqryxp67r2agym7fp7rm3xx4z7w6vs9nwtmk74"
        }
      ],
      type: "tx"
    },
    {
      attributes: [
        {
          index: true,
          key: "acc_seq",
          value: "init1nqryxp67r2agym7fp7rm3xx4z7w6vs9nwtmk74/23"
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
            "SkQG4m/JXhFnekRSX+08BQ7d/iATI+ioeVbgzrUXAhgw/BOTfe6N26EGO+clQrchhh3zmYsNir9A3meyPEFXchw="
        }
      ],
      type: "tx"
    },
    {
      attributes: [
        {
          index: true,
          key: "action",
          value: "/cosmos.bank.v1beta1.MsgSend"
        },
        {
          index: true,
          key: "sender",
          value: "init1nqryxp67r2agym7fp7rm3xx4z7w6vs9nwtmk74"
        },
        {
          index: true,
          key: "module",
          value: "bank"
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
          value: "0x1,0x980643075e1aba826fc90f87b898d5179da640b3"
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
            '{"store_addr":"0x7d78fdbbdc7b04b0f02c98b68ba0c093463bba6f327356694b67bc767e52ff1d","metadata_addr":"0x8e4733bdabcf7d4afc3d14f0dd46c9bf52fb0fce9e4b996c939e195b8bc891d9","amount":"6"}'
        },
        {
          index: true,
          key: "amount",
          value: "6"
        },
        {
          index: true,
          key: "metadata_addr",
          value:
            "0x8e4733bdabcf7d4afc3d14f0dd46c9bf52fb0fce9e4b996c939e195b8bc891d9"
        },
        {
          index: true,
          key: "store_addr",
          value:
            "0x7d78fdbbdc7b04b0f02c98b68ba0c093463bba6f327356694b67bc767e52ff1d"
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
          value: "0x1::fungible_asset::WithdrawOwnerEvent"
        },
        {
          index: true,
          key: "data",
          value: '{"owner":"0x980643075e1aba826fc90f87b898d5179da640b3"}'
        },
        {
          index: true,
          key: "owner",
          value: "0x980643075e1aba826fc90f87b898d5179da640b3"
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
            '{"store_addr":"0xdb6fb6470683e72cbc456ee0e99239bb1482fd9748fff2c6d6c918c21475f8bc","metadata_addr":"0x8e4733bdabcf7d4afc3d14f0dd46c9bf52fb0fce9e4b996c939e195b8bc891d9","amount":"6"}'
        },
        {
          index: true,
          key: "amount",
          value: "6"
        },
        {
          index: true,
          key: "metadata_addr",
          value:
            "0x8e4733bdabcf7d4afc3d14f0dd46c9bf52fb0fce9e4b996c939e195b8bc891d9"
        },
        {
          index: true,
          key: "store_addr",
          value:
            "0xdb6fb6470683e72cbc456ee0e99239bb1482fd9748fff2c6d6c918c21475f8bc"
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
          value: "0x1::fungible_asset::DepositOwnerEvent"
        },
        {
          index: true,
          key: "data",
          value: '{"owner":"0x1"}'
        },
        {
          index: true,
          key: "owner",
          value: "0x1"
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
          value: "init1nqryxp67r2agym7fp7rm3xx4z7w6vs9nwtmk74"
        },
        {
          index: true,
          key: "amount",
          value: "6uinit"
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
          value: "init1qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqpqr5e3d"
        },
        {
          index: true,
          key: "amount",
          value: "6uinit"
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
          value: "init1qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqpqr5e3d"
        },
        {
          index: true,
          key: "sender",
          value: "init1nqryxp67r2agym7fp7rm3xx4z7w6vs9nwtmk74"
        },
        {
          index: true,
          key: "amount",
          value: "6uinit"
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
          key: "sender",
          value: "init1nqryxp67r2agym7fp7rm3xx4z7w6vs9nwtmk74"
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
  gas_used: "111945",
  gas_wanted: "200000",
  height: "24278741",
  info: "",
  logs: [],
  raw_log: "",
  timestamp: "2026-06-11T11:46:04Z",
  tx: {
    "@type": "/cosmos.tx.v1beta1.Tx",
    auth_info: {
      fee: {
        amount: [
          {
            amount: "3000",
            denom: "uinit"
          }
        ],
        gas_limit: "200000",
        granter: "",
        payer: ""
      },
      signer_infos: [
        {
          mode_info: {
            single: {
              mode: "SIGN_MODE_DIRECT"
            }
          },
          public_key: {
            "@type": "/initia.crypto.v1beta1.ethsecp256k1.PubKey",
            key: "At6WyJuRS1U/YfUapHgKg/Ul5gbxP1yG7OR3pkhS5svl"
          },
          sequence: "23"
        }
      ],
      tip: null
    },
    body: {
      extension_options: [
        {
          "@type": "/initia.tx.v1.ExtensionOptionQueuedTx"
        }
      ],
      memo: "",
      messages: [
        {
          "@type": "/cosmos.bank.v1beta1.MsgSend",
          amount: [
            {
              amount: "6",
              denom: "uinit"
            }
          ],
          from_address: "init1nqryxp67r2agym7fp7rm3xx4z7w6vs9nwtmk74",
          to_address: "init1qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqpqr5e3d"
        }
      ],
      non_critical_extension_options: [],
      timeout_height: "0"
    },
    signatures: [
      "SkQG4m/JXhFnekRSX+08BQ7d/iATI+ioeVbgzrUXAhgw/BOTfe6N26EGO+clQrchhh3zmYsNir9A3meyPEFXchw="
    ]
  },
  txhash: "5126CB517545FE819676F16656D5944C2F53ABDD180A1EE4A326EC5EC7F0CBE4"
};

export const mockApiResponsesForQueuedTx = {
  GET: {
    "/initia/move/v1/denom?metadata=0x8e4733bdabcf7d4afc3d14f0dd46c9bf52fb0fce9e4b996c939e195b8bc891d9":
      {
        denom: "uinit"
      }
  },
  POST: {}
};
