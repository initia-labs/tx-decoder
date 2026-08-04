export const mockMsgSkipSwap = {
  code: 0,
  codespace: "",
  data: "12240A222F696E697469612E6D6F76652E76312E4D736745786563757465526573706F6E7365",
  events: [
    {
      attributes: [
        {
          index: true,
          key: "sender",
          value: "0x1,0xe85690a0c770c63a75655125b83018d6062a5f89"
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
            '{"store_addr":"0xa86658a064e83a161765a2ca6df6f63458e2d376656555855d52282af4597e9","metadata_addr":"0x8e4733bdabcf7d4afc3d14f0dd46c9bf52fb0fce9e4b996c939e195b8bc891d9","amount":"13091"}'
        },
        {
          index: true,
          key: "amount",
          value: "13091"
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
            "0xa86658a064e83a161765a2ca6df6f63458e2d376656555855d52282af4597e9"
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
          value: '{"owner":"0xe85690a0c770c63a75655125b83018d6062a5f89"}'
        },
        {
          index: true,
          key: "owner",
          value: "0xe85690a0c770c63a75655125b83018d6062a5f89"
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
            '{"store_addr":"0x66a8cb0bfb991610dcffb8a6543ac0887c7c5405b8f985ebed6d628fe50c4686","metadata_addr":"0x8e4733bdabcf7d4afc3d14f0dd46c9bf52fb0fce9e4b996c939e195b8bc891d9","amount":"13091"}'
        },
        {
          index: true,
          key: "amount",
          value: "13091"
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
          value: "init1aptfpgx8wrrr5at92yjmsvqc6crz5huf9gxtd3"
        },
        {
          index: true,
          key: "amount",
          value: "13091uinit"
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
          value: "13091uinit"
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
          value: "init1aptfpgx8wrrr5at92yjmsvqc6crz5huf9gxtd3"
        },
        {
          index: true,
          key: "amount",
          value: "13091uinit"
        }
      ],
      type: "transfer"
    },
    {
      attributes: [
        {
          index: true,
          key: "sender",
          value: "init1aptfpgx8wrrr5at92yjmsvqc6crz5huf9gxtd3"
        }
      ],
      type: "message"
    },
    {
      attributes: [
        {
          index: true,
          key: "fee",
          value: "13091uinit"
        },
        {
          index: true,
          key: "fee_payer",
          value: "init1aptfpgx8wrrr5at92yjmsvqc6crz5huf9gxtd3"
        }
      ],
      type: "tx"
    },
    {
      attributes: [
        {
          index: true,
          key: "acc_seq",
          value: "init1aptfpgx8wrrr5at92yjmsvqc6crz5huf9gxtd3/48"
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
            "Rj5H0R2GSD/6SauUHSyMYdjB9Jg6kb6mz3VW9ZcilAM1o5PiMZiF6NjV/V3ImQ+6MGNpxyJYrLsBFGmKMzQ4wQ=="
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
          value: "init1aptfpgx8wrrr5at92yjmsvqc6crz5huf9gxtd3"
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
          value: "0xe85690a0c770c63a75655125b83018d6062a5f89"
        },
        {
          index: true,
          key: "module_addr",
          value:
            "0xd921c61c7e7d2eead33bdff4c5c2941e66d488f0a15fe7fbc432565dc04b3710"
        },
        {
          index: true,
          key: "module_name",
          value: "entry_point"
        },
        {
          index: true,
          key: "function_name",
          value: "swap_and_action_with_recover"
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
            "0xd921c61c7e7d2eead33bdff4c5c2941e66d488f0a15fe7fbc432565dc04b3710::ack_callback::StoreRecoverAddress"
        },
        {
          index: true,
          key: "data",
          value:
            '{"callback_id":"8","recover_address":"0xe85690a0c770c63a75655125b83018d6062a5f89","coin_metadata":"0xe0e9394b24e53775d6af87934ac02d73536ad58b7894f6ccff3f5e7c0d548e55"}'
        },
        {
          index: true,
          key: "callback_id",
          value: "8"
        },
        {
          index: true,
          key: "coin_metadata",
          value:
            "0xe0e9394b24e53775d6af87934ac02d73536ad58b7894f6ccff3f5e7c0d548e55"
        },
        {
          index: true,
          key: "recover_address",
          value: "0xe85690a0c770c63a75655125b83018d6062a5f89"
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
          key: "sender",
          value: "0xe85690a0c770c63a75655125b83018d6062a5f89"
        },
        {
          index: true,
          key: "module_addr",
          value:
            "0xd921c61c7e7d2eead33bdff4c5c2941e66d488f0a15fe7fbc432565dc04b3710"
        },
        {
          index: true,
          key: "module_name",
          value: "entry_point"
        },
        {
          index: true,
          key: "function_name",
          value: "swap_and_action"
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
            '{"store_addr":"0xcb75e0437cda5031d908b5ab4c8a0423c4e4db51ed411dab4eb88367243b7811","metadata_addr":"0xe0e9394b24e53775d6af87934ac02d73536ad58b7894f6ccff3f5e7c0d548e55","amount":"500000000"}'
        },
        {
          index: true,
          key: "amount",
          value: "500000000"
        },
        {
          index: true,
          key: "metadata_addr",
          value:
            "0xe0e9394b24e53775d6af87934ac02d73536ad58b7894f6ccff3f5e7c0d548e55"
        },
        {
          index: true,
          key: "store_addr",
          value:
            "0xcb75e0437cda5031d908b5ab4c8a0423c4e4db51ed411dab4eb88367243b7811"
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
          value: '{"owner":"0xe85690a0c770c63a75655125b83018d6062a5f89"}'
        },
        {
          index: true,
          key: "owner",
          value: "0xe85690a0c770c63a75655125b83018d6062a5f89"
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
            '{"store_addr":"0x39e454a8b7b1b71b2c0c27bf4ce1fbe234652f2c40f1fc209b023beaa7ece013","metadata_addr":"0xe0e9394b24e53775d6af87934ac02d73536ad58b7894f6ccff3f5e7c0d548e55","amount":"500000000"}'
        },
        {
          index: true,
          key: "amount",
          value: "500000000"
        },
        {
          index: true,
          key: "metadata_addr",
          value:
            "0xe0e9394b24e53775d6af87934ac02d73536ad58b7894f6ccff3f5e7c0d548e55"
        },
        {
          index: true,
          key: "store_addr",
          value:
            "0x39e454a8b7b1b71b2c0c27bf4ce1fbe234652f2c40f1fc209b023beaa7ece013"
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
          value:
            '{"owner":"0x543b35a39cfadad3da3c23249c474455d15efd2f94f849473226dee8a3c7a9e1"}'
        },
        {
          index: true,
          key: "owner",
          value:
            "0x543b35a39cfadad3da3c23249c474455d15efd2f94f849473226dee8a3c7a9e1"
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
          value: "0x1::fungible_asset::WithdrawEvent"
        },
        {
          index: true,
          key: "data",
          value:
            '{"store_addr":"0xd8d20f9cd225d52f126bd3f973cbb83de3212b1b3dae547f13dd01f593d537b3","metadata_addr":"0x8e4733bdabcf7d4afc3d14f0dd46c9bf52fb0fce9e4b996c939e195b8bc891d9","amount":"10185848708"}'
        },
        {
          index: true,
          key: "amount",
          value: "10185848708"
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
            "0xd8d20f9cd225d52f126bd3f973cbb83de3212b1b3dae547f13dd01f593d537b3"
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
          value:
            '{"owner":"0x543b35a39cfadad3da3c23249c474455d15efd2f94f849473226dee8a3c7a9e1"}'
        },
        {
          index: true,
          key: "owner",
          value:
            "0x543b35a39cfadad3da3c23249c474455d15efd2f94f849473226dee8a3c7a9e1"
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
          value: "0x1::dex::SwapEvent"
        },
        {
          index: true,
          key: "data",
          value:
            '{"offer_coin":"0xe0e9394b24e53775d6af87934ac02d73536ad58b7894f6ccff3f5e7c0d548e55","return_coin":"0x8e4733bdabcf7d4afc3d14f0dd46c9bf52fb0fce9e4b996c939e195b8bc891d9","liquidity_token":"0x543b35a39cfadad3da3c23249c474455d15efd2f94f849473226dee8a3c7a9e1","offer_amount":"500000000","return_amount":"10185848708","fee_amount":"1500000"}'
        },
        {
          index: true,
          key: "fee_amount",
          value: "1500000"
        },
        {
          index: true,
          key: "liquidity_token",
          value:
            "0x543b35a39cfadad3da3c23249c474455d15efd2f94f849473226dee8a3c7a9e1"
        },
        {
          index: true,
          key: "offer_amount",
          value: "500000000"
        },
        {
          index: true,
          key: "offer_coin",
          value:
            "0xe0e9394b24e53775d6af87934ac02d73536ad58b7894f6ccff3f5e7c0d548e55"
        },
        {
          index: true,
          key: "return_amount",
          value: "10185848708"
        },
        {
          index: true,
          key: "return_coin",
          value:
            "0x8e4733bdabcf7d4afc3d14f0dd46c9bf52fb0fce9e4b996c939e195b8bc891d9"
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
            '{"store_addr":"0xa86658a064e83a161765a2ca6df6f63458e2d376656555855d52282af4597e9","metadata_addr":"0x8e4733bdabcf7d4afc3d14f0dd46c9bf52fb0fce9e4b996c939e195b8bc891d9","amount":"10185848708"}'
        },
        {
          index: true,
          key: "amount",
          value: "10185848708"
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
            "0xa86658a064e83a161765a2ca6df6f63458e2d376656555855d52282af4597e9"
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
          value: '{"owner":"0xe85690a0c770c63a75655125b83018d6062a5f89"}'
        },
        {
          index: true,
          key: "owner",
          value: "0xe85690a0c770c63a75655125b83018d6062a5f89"
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
          value: "0x1::fungible_asset::WithdrawEvent"
        },
        {
          index: true,
          key: "data",
          value:
            '{"store_addr":"0xa86658a064e83a161765a2ca6df6f63458e2d376656555855d52282af4597e9","metadata_addr":"0x8e4733bdabcf7d4afc3d14f0dd46c9bf52fb0fce9e4b996c939e195b8bc891d9","amount":"10185848708"}'
        },
        {
          index: true,
          key: "amount",
          value: "10185848708"
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
            "0xa86658a064e83a161765a2ca6df6f63458e2d376656555855d52282af4597e9"
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
          value: '{"owner":"0xe85690a0c770c63a75655125b83018d6062a5f89"}'
        },
        {
          index: true,
          key: "owner",
          value: "0xe85690a0c770c63a75655125b83018d6062a5f89"
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
            '{"store_addr":"0xa86658a064e83a161765a2ca6df6f63458e2d376656555855d52282af4597e9","metadata_addr":"0x8e4733bdabcf7d4afc3d14f0dd46c9bf52fb0fce9e4b996c939e195b8bc891d9","amount":"10185848708"}'
        },
        {
          index: true,
          key: "amount",
          value: "10185848708"
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
            "0xa86658a064e83a161765a2ca6df6f63458e2d376656555855d52282af4597e9"
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
          value: '{"owner":"0xe85690a0c770c63a75655125b83018d6062a5f89"}'
        },
        {
          index: true,
          key: "owner",
          value: "0xe85690a0c770c63a75655125b83018d6062a5f89"
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
          key: "success",
          value: "true"
        },
        {
          index: true,
          key: "msg_index",
          value: "0"
        }
      ],
      type: "submsg"
    },
    {
      attributes: [
        {
          index: true,
          key: "sender",
          value: "0xe85690a0c770c63a75655125b83018d6062a5f89"
        },
        {
          index: true,
          key: "module_addr",
          value:
            "0xd921c61c7e7d2eead33bdff4c5c2941e66d488f0a15fe7fbc432565dc04b3710"
        },
        {
          index: true,
          key: "module_name",
          value: "ack_callback"
        },
        {
          index: true,
          key: "function_name",
          value: "recover"
        },
        {
          index: true,
          key: "msg_index",
          value: "0"
        }
      ],
      type: "execute"
    }
  ],
  gas_used: "602187",
  gas_wanted: "872704",
  height: "20109560",
  info: "",
  logs: [],
  raw_log: "",
  timestamp: "2026-07-31T03:47:43Z",
  tx: {
    "@type": "/cosmos.tx.v1beta1.Tx",
    auth_info: {
      fee: {
        amount: [
          {
            amount: "13091",
            denom: "uinit"
          }
        ],
        gas_limit: "872704",
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
            key: "A88UL3Q7HkDxPcqV5HjxSIJq+dk48e8ooenW9CT/X/40"
          },
          sequence: "48"
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
            "AQA=",
            "AA==",
            "AGXNHQAAAAA=",
            "DEuEXgIAAAA=",
            "AQFFbW92ZS81NDNiMzVhMzljZmFkYWQzZGEzYzIzMjQ5YzQ3NDQ1NWQxNWVmZDJmOTRmODQ5NDczMjI2ZGVlOGEzYzdhOWUx",
            "AQJEaWJjLzY0OTBBN0VBQjYxMDU5QkZDMUNEREVCMDU5MTdERDcwQkRGM0E2MTE2NTQxNjJBMUE0N0RCOTMwRDQwRDhBRjQFdWluaXQ=",
            "AA==",
            "6qjgiXdDxxg=",
            "K2luaXQxYXB0ZnBneDh3cnJyNWF0OTJ5am1zdnFjNmNyejVodWY5Z3h0ZDM=",
            "ASwraW5pdDFhcHRmcGd4OHdycnI1YXQ5MnlqbXN2cWM2Y3J6NWh1ZjlneHRkMw=="
          ],
          function_name: "swap_and_action_with_recover",
          module_address:
            "0xd921c61c7e7d2eead33bdff4c5c2941e66d488f0a15fe7fbc432565dc04b3710",
          module_name: "entry_point",
          sender: "init1aptfpgx8wrrr5at92yjmsvqc6crz5huf9gxtd3",
          type_args: []
        }
      ],
      non_critical_extension_options: [],
      timeout_height: "0"
    },
    signatures: [
      "Rj5H0R2GSD/6SauUHSyMYdjB9Jg6kb6mz3VW9ZcilAM1o5PiMZiF6NjV/V3ImQ+6MGNpxyJYrLsBFGmKMzQ4wQ=="
    ]
  },
  txhash: "F54F0CBAEFB5509845C482C3D7AF01B2CAEB8AA15B36201A00631405F2DA920D"
};

export const mockApiResponsesForSkipSwap = {
  GET: {
    "/initia/move/v1/denom?metadata=0x8e4733bdabcf7d4afc3d14f0dd46c9bf52fb0fce9e4b996c939e195b8bc891d9":
      {
        denom: "uinit"
      },
    "/initia/move/v1/denom?metadata=0xe0e9394b24e53775d6af87934ac02d73536ad58b7894f6ccff3f5e7c0d548e55":
      {
        denom:
          "ibc/6490A7EAB61059BFC1CDDEB05917DD70BDF3A611654162A1A47DB930D40D8AF4"
      }
  },
  POST: {}
};
