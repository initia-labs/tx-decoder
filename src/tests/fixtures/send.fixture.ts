export const mockMsgSendWithSingleCoin = {
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
            '{"store_addr":"0xe2d99fcea59da8da2d4095cc11cb83e6ff80cf2e41522c678b8f152233d1b65e","metadata_addr":"0x8e4733bdabcf7d4afc3d14f0dd46c9bf52fb0fce9e4b996c939e195b8bc891d9","amount":"6103"}'
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
            '{"store_addr":"0x66a8cb0bfb991610dcffb8a6543ac0887c7c5405b8f985ebed6d628fe50c4686","metadata_addr":"0x8e4733bdabcf7d4afc3d14f0dd46c9bf52fb0fce9e4b996c939e195b8bc891d9","amount":"6103"}'
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
          value: "6103uinit"
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
          value: "6103uinit"
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
          value: "6103uinit"
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
          value: "6103uinit"
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
          value: "init1kw2unuhgfa6mz6r0ehrzlr9k9ftjk7pql8u5fm/22"
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
            "MiOnd/7iTA4hJvHSoo27HyvInTQt0LdV313+Hz5H/jNSJPeKdoHuNEatY66g3SobQehjSA7ej/3AUMSLCSvcUw=="
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
          value: "init1kw2unuhgfa6mz6r0ehrzlr9k9ftjk7pql8u5fm"
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
          value: "0x1::object::CreateEvent"
        },
        {
          index: true,
          key: "data",
          value:
            '{"object":"0x1ad99353426d05e2ef000df9424c01c8f1d37707667f9b0f2f8aee6ac3410bef","owner":"0x992c4aec66368bfa88205b7edb58a3fa4a81fe73","version":"1"}'
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
          value: "0x1::primary_fungible_store::PrimaryStoreCreatedEvent"
        },
        {
          index: true,
          key: "data",
          value:
            '{"owner_addr":"0x992c4aec66368bfa88205b7edb58a3fa4a81fe73","store_addr":"0x1ad99353426d05e2ef000df9424c01c8f1d37707667f9b0f2f8aee6ac3410bef","metadata_addr":"0x8e4733bdabcf7d4afc3d14f0dd46c9bf52fb0fce9e4b996c939e195b8bc891d9"}'
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
            '{"store_addr":"0x1ad99353426d05e2ef000df9424c01c8f1d37707667f9b0f2f8aee6ac3410bef","metadata_addr":"0x8e4733bdabcf7d4afc3d14f0dd46c9bf52fb0fce9e4b996c939e195b8bc891d9","amount":"100"}'
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
          value: "init1nyky4mrxx69l4zpqtdldkk9rlf9grlnn77djlh"
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
          value: "init1nyky4mrxx69l4zpqtdldkk9rlf9grlnn77djlh"
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
          key: "sender",
          value: "init1kw2unuhgfa6mz6r0ehrzlr9k9ftjk7pql8u5fm"
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
  logs: [],
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
          "@type": "/cosmos.bank.v1beta1.MsgSend",
          amount: [
            {
              amount: "100",
              denom: "uinit"
            }
          ],
          from_address: "init1kw2unuhgfa6mz6r0ehrzlr9k9ftjk7pql8u5fm",
          to_address: "init1nyky4mrxx69l4zpqtdldkk9rlf9grlnn77djlh"
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

export const mockMsgSendWithMultipleCoins = {
  code: 0,
  codespace: "",
  data: "12260A242F636F736D6F732E62616E6B2E763162657461312E4D736753656E64526573706F6E7365",
  events: [
    {
      attributes: [
        {
          index: true,
          key: "sender",
          value: "0x1,0xb9fe1fd018852d49cd066379ba314f94dce57f16"
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
            '{"store_addr":"0xb3a18ed65a760faa12b9fa834f53ac6b413e05e416c29d14488aa45d76f15dd3","metadata_addr":"0x8e4733bdabcf7d4afc3d14f0dd46c9bf52fb0fce9e4b996c939e195b8bc891d9","amount":"7500"}'
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
            '{"store_addr":"0x66a8cb0bfb991610dcffb8a6543ac0887c7c5405b8f985ebed6d628fe50c4686","metadata_addr":"0x8e4733bdabcf7d4afc3d14f0dd46c9bf52fb0fce9e4b996c939e195b8bc891d9","amount":"7500"}'
        }
      ],
      type: "move"
    },
    {
      attributes: [
        {
          index: true,
          key: "spender",
          value: "init1h8lpl5qcs5k5nngxvdum5v20jnww2lckg3n2ta"
        },
        {
          index: true,
          key: "amount",
          value: "7500uinit"
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
          value: "7500uinit"
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
          value: "init1h8lpl5qcs5k5nngxvdum5v20jnww2lckg3n2ta"
        },
        {
          index: true,
          key: "amount",
          value: "7500uinit"
        }
      ],
      type: "transfer"
    },
    {
      attributes: [
        {
          index: true,
          key: "sender",
          value: "init1h8lpl5qcs5k5nngxvdum5v20jnww2lckg3n2ta"
        }
      ],
      type: "message"
    },
    {
      attributes: [
        {
          index: true,
          key: "fee",
          value: "7500uinit"
        },
        {
          index: true,
          key: "fee_payer",
          value: "init1h8lpl5qcs5k5nngxvdum5v20jnww2lckg3n2ta"
        }
      ],
      type: "tx"
    },
    {
      attributes: [
        {
          index: true,
          key: "acc_seq",
          value: "init1h8lpl5qcs5k5nngxvdum5v20jnww2lckg3n2ta/314"
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
            "/WFbBzA0I5r6dJx6N0uvpnaG90d5oBAiZgSxx2jJfLMCQbp5Qx4Loy5RRy5vwSBwYs2lCT2SIm8NFW9rQSmodQ=="
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
          value: "init1h8lpl5qcs5k5nngxvdum5v20jnww2lckg3n2ta"
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
          value: "0x1,0xb9fe1fd018852d49cd066379ba314f94dce57f16"
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
          value: "0x1::object::CreateEvent"
        },
        {
          index: true,
          key: "data",
          value:
            '{"object":"0x27e65918aab6b185e5ce116bd6ce4c1f80a3dffa2935a7477b2938ef08ac7b47","owner":"0x2ab506311ffe3aaf8871f84a7ba8a685e025dbba","version":"1"}'
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
          value: "0x1::primary_fungible_store::PrimaryStoreCreatedEvent"
        },
        {
          index: true,
          key: "data",
          value:
            '{"owner_addr":"0x2ab506311ffe3aaf8871f84a7ba8a685e025dbba","store_addr":"0x27e65918aab6b185e5ce116bd6ce4c1f80a3dffa2935a7477b2938ef08ac7b47","metadata_addr":"0xbe0ef849e425ca89830c1ff0f984f5b0b512b70cab6a5ae294c6255c3ee4cd0c"}'
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
            '{"store_addr":"0xda1068a760b4ae212625d79eba4dc74b6c7c90d4f4294aa01a64f3ddd84d8c3","metadata_addr":"0xbe0ef849e425ca89830c1ff0f984f5b0b512b70cab6a5ae294c6255c3ee4cd0c","amount":"919"}'
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
            '{"store_addr":"0x27e65918aab6b185e5ce116bd6ce4c1f80a3dffa2935a7477b2938ef08ac7b47","metadata_addr":"0xbe0ef849e425ca89830c1ff0f984f5b0b512b70cab6a5ae294c6255c3ee4cd0c","amount":"919"}'
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
          value: "0x1,0xb9fe1fd018852d49cd066379ba314f94dce57f16"
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
            '{"store_addr":"0xb3a18ed65a760faa12b9fa834f53ac6b413e05e416c29d14488aa45d76f15dd3","metadata_addr":"0x8e4733bdabcf7d4afc3d14f0dd46c9bf52fb0fce9e4b996c939e195b8bc891d9","amount":"1000000"}'
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
            '{"store_addr":"0x47eb6bba5d4828067691d06dda5ecb9aa3e4ecb21713a560032d432d96ecdc0b","metadata_addr":"0x8e4733bdabcf7d4afc3d14f0dd46c9bf52fb0fce9e4b996c939e195b8bc891d9","amount":"1000000"}'
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
          value: "0x1,0xb9fe1fd018852d49cd066379ba314f94dce57f16"
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
          value: "0x1::object::CreateEvent"
        },
        {
          index: true,
          key: "data",
          value:
            '{"object":"0x13a6b8d69e854af41ede9265a91c8c443fd9c90367d9ea53b7ce9b18b28f2f53","owner":"0x2ab506311ffe3aaf8871f84a7ba8a685e025dbba","version":"1"}'
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
          value: "0x1::primary_fungible_store::PrimaryStoreCreatedEvent"
        },
        {
          index: true,
          key: "data",
          value:
            '{"owner_addr":"0x2ab506311ffe3aaf8871f84a7ba8a685e025dbba","store_addr":"0x13a6b8d69e854af41ede9265a91c8c443fd9c90367d9ea53b7ce9b18b28f2f53","metadata_addr":"0x29824d952e035490fae7567deea5f15b504a68fa73610063c160ab1fa87dd609"}'
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
            '{"store_addr":"0xf895ccc2d2e0c0f054fb5a1497342b1c83b981617de69939e694fbc43c899564","metadata_addr":"0x29824d952e035490fae7567deea5f15b504a68fa73610063c160ab1fa87dd609","amount":"1024"}'
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
            '{"store_addr":"0x13a6b8d69e854af41ede9265a91c8c443fd9c90367d9ea53b7ce9b18b28f2f53","metadata_addr":"0x29824d952e035490fae7567deea5f15b504a68fa73610063c160ab1fa87dd609","amount":"1024"}'
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
          value: "init1h8lpl5qcs5k5nngxvdum5v20jnww2lckg3n2ta"
        },
        {
          index: true,
          key: "amount",
          value: "919ueth,1000000uinit,1024uusdc"
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
          value: "init1926svvgllca2lzr3lp98h29xshsztka6vua3wf"
        },
        {
          index: true,
          key: "amount",
          value: "919ueth,1000000uinit,1024uusdc"
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
          value: "init1926svvgllca2lzr3lp98h29xshsztka6vua3wf"
        },
        {
          index: true,
          key: "sender",
          value: "init1h8lpl5qcs5k5nngxvdum5v20jnww2lckg3n2ta"
        },
        {
          index: true,
          key: "amount",
          value: "919ueth,1000000uinit,1024uusdc"
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
          value: "init1h8lpl5qcs5k5nngxvdum5v20jnww2lckg3n2ta"
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
  gas_used: "314838",
  gas_wanted: "500000",
  height: "10478519",
  info: "",
  logs: [],
  raw_log: "",
  timestamp: "2025-06-23T10:05:38Z",
  tx: {
    "@type": "/cosmos.tx.v1beta1.Tx",
    auth_info: {
      fee: {
        amount: [
          {
            amount: "7500",
            denom: "uinit"
          }
        ],
        gas_limit: "500000",
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
            "@type": "/cosmos.crypto.secp256k1.PubKey",
            key: "A5vqpm4KH4Qz7T2DC31p3nZ8nK5M6ZrnDa4PcE6zg/Y0"
          },
          sequence: "314"
        }
      ],
      tip: null
    },
    body: {
      extension_options: [],
      memo: "",
      messages: [
        {
          "@type": "/cosmos.bank.v1beta1.MsgSend",
          amount: [
            {
              amount: "919",
              denom: "ueth"
            },
            {
              amount: "1000000",
              denom: "uinit"
            },
            {
              amount: "1024",
              denom: "uusdc"
            }
          ],
          from_address: "init1h8lpl5qcs5k5nngxvdum5v20jnww2lckg3n2ta",
          to_address: "init1926svvgllca2lzr3lp98h29xshsztka6vua3wf"
        }
      ],
      non_critical_extension_options: [],
      timeout_height: "0"
    },
    signatures: [
      "/WFbBzA0I5r6dJx6N0uvpnaG90d5oBAiZgSxx2jJfLMCQbp5Qx4Loy5RRy5vwSBwYs2lCT2SIm8NFW9rQSmodQ=="
    ]
  },
  txhash: "AC795285CB1A11EA9C245218D2557C614524964BA8BE96FBCC60F6BEC0C14B56"
};

export const mockMsgSendWithMultipleMessages = {
  code: 0,
  codespace: "",
  data: "12260A242F636F736D6F732E62616E6B2E763162657461312E4D736753656E64526573706F6E736512260A242F636F736D6F732E62616E6B2E763162657461312E4D736753656E64526573706F6E736512260A242F636F736D6F732E62616E6B2E763162657461312E4D736753656E64526573706F6E736512260A242F636F736D6F732E62616E6B2E763162657461312E4D736753656E64526573706F6E7365",
  events: [
    {
      attributes: [
        {
          index: true,
          key: "sender",
          value: "0x1,0xb9fe1fd018852d49cd066379ba314f94dce57f16"
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
            '{"store_addr":"0xb3a18ed65a760faa12b9fa834f53ac6b413e05e416c29d14488aa45d76f15dd3","metadata_addr":"0x8e4733bdabcf7d4afc3d14f0dd46c9bf52fb0fce9e4b996c939e195b8bc891d9","amount":"7500"}'
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
            '{"store_addr":"0x66a8cb0bfb991610dcffb8a6543ac0887c7c5405b8f985ebed6d628fe50c4686","metadata_addr":"0x8e4733bdabcf7d4afc3d14f0dd46c9bf52fb0fce9e4b996c939e195b8bc891d9","amount":"7500"}'
        }
      ],
      type: "move"
    },
    {
      attributes: [
        {
          index: true,
          key: "spender",
          value: "init1h8lpl5qcs5k5nngxvdum5v20jnww2lckg3n2ta"
        },
        {
          index: true,
          key: "amount",
          value: "7500uinit"
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
          value: "7500uinit"
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
          value: "init1h8lpl5qcs5k5nngxvdum5v20jnww2lckg3n2ta"
        },
        {
          index: true,
          key: "amount",
          value: "7500uinit"
        }
      ],
      type: "transfer"
    },
    {
      attributes: [
        {
          index: true,
          key: "sender",
          value: "init1h8lpl5qcs5k5nngxvdum5v20jnww2lckg3n2ta"
        }
      ],
      type: "message"
    },
    {
      attributes: [
        {
          index: true,
          key: "fee",
          value: "7500uinit"
        },
        {
          index: true,
          key: "fee_payer",
          value: "init1h8lpl5qcs5k5nngxvdum5v20jnww2lckg3n2ta"
        }
      ],
      type: "tx"
    },
    {
      attributes: [
        {
          index: true,
          key: "acc_seq",
          value: "init1h8lpl5qcs5k5nngxvdum5v20jnww2lckg3n2ta/312"
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
            "H1I6m9v7co/NmfrrQogEbZyY6+x7htB+jpNCAu4g7JgvBwPIrBbl6AEMN4SlOiyXgc59VNrawN1FDyaWBfXNxQ=="
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
          value: "init1h8lpl5qcs5k5nngxvdum5v20jnww2lckg3n2ta"
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
          value: "0x1,0xb9fe1fd018852d49cd066379ba314f94dce57f16"
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
          value: "0x1::object::CreateEvent"
        },
        {
          index: true,
          key: "data",
          value:
            '{"object":"0x47eb6bba5d4828067691d06dda5ecb9aa3e4ecb21713a560032d432d96ecdc0b","owner":"0x2ab506311ffe3aaf8871f84a7ba8a685e025dbba","version":"1"}'
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
          value: "0x1::primary_fungible_store::PrimaryStoreCreatedEvent"
        },
        {
          index: true,
          key: "data",
          value:
            '{"owner_addr":"0x2ab506311ffe3aaf8871f84a7ba8a685e025dbba","store_addr":"0x47eb6bba5d4828067691d06dda5ecb9aa3e4ecb21713a560032d432d96ecdc0b","metadata_addr":"0x8e4733bdabcf7d4afc3d14f0dd46c9bf52fb0fce9e4b996c939e195b8bc891d9"}'
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
            '{"store_addr":"0xb3a18ed65a760faa12b9fa834f53ac6b413e05e416c29d14488aa45d76f15dd3","metadata_addr":"0x8e4733bdabcf7d4afc3d14f0dd46c9bf52fb0fce9e4b996c939e195b8bc891d9","amount":"1000000"}'
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
            '{"store_addr":"0x47eb6bba5d4828067691d06dda5ecb9aa3e4ecb21713a560032d432d96ecdc0b","metadata_addr":"0x8e4733bdabcf7d4afc3d14f0dd46c9bf52fb0fce9e4b996c939e195b8bc891d9","amount":"1000000"}'
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
          value: "init1h8lpl5qcs5k5nngxvdum5v20jnww2lckg3n2ta"
        },
        {
          index: true,
          key: "amount",
          value: "1000000uinit"
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
          value: "init1926svvgllca2lzr3lp98h29xshsztka6vua3wf"
        },
        {
          index: true,
          key: "amount",
          value: "1000000uinit"
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
          value: "init1926svvgllca2lzr3lp98h29xshsztka6vua3wf"
        },
        {
          index: true,
          key: "sender",
          value: "init1h8lpl5qcs5k5nngxvdum5v20jnww2lckg3n2ta"
        },
        {
          index: true,
          key: "amount",
          value: "1000000uinit"
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
          value: "init1h8lpl5qcs5k5nngxvdum5v20jnww2lckg3n2ta"
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
          value: "/cosmos.bank.v1beta1.MsgSend"
        },
        {
          index: true,
          key: "sender",
          value: "init1h8lpl5qcs5k5nngxvdum5v20jnww2lckg3n2ta"
        },
        {
          index: true,
          key: "module",
          value: "bank"
        },
        {
          index: true,
          key: "msg_index",
          value: "1"
        }
      ],
      type: "message"
    },
    {
      attributes: [
        {
          index: true,
          key: "sender",
          value: "0x1,0xb9fe1fd018852d49cd066379ba314f94dce57f16"
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
          value: "1"
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
            '{"store_addr":"0xb3a18ed65a760faa12b9fa834f53ac6b413e05e416c29d14488aa45d76f15dd3","metadata_addr":"0x8e4733bdabcf7d4afc3d14f0dd46c9bf52fb0fce9e4b996c939e195b8bc891d9","amount":"1000000"}'
        },
        {
          index: true,
          key: "msg_index",
          value: "1"
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
            '{"store_addr":"0x47eb6bba5d4828067691d06dda5ecb9aa3e4ecb21713a560032d432d96ecdc0b","metadata_addr":"0x8e4733bdabcf7d4afc3d14f0dd46c9bf52fb0fce9e4b996c939e195b8bc891d9","amount":"1000000"}'
        },
        {
          index: true,
          key: "msg_index",
          value: "1"
        }
      ],
      type: "move"
    },
    {
      attributes: [
        {
          index: true,
          key: "spender",
          value: "init1h8lpl5qcs5k5nngxvdum5v20jnww2lckg3n2ta"
        },
        {
          index: true,
          key: "amount",
          value: "1000000uinit"
        },
        {
          index: true,
          key: "msg_index",
          value: "1"
        }
      ],
      type: "coin_spent"
    },
    {
      attributes: [
        {
          index: true,
          key: "receiver",
          value: "init1926svvgllca2lzr3lp98h29xshsztka6vua3wf"
        },
        {
          index: true,
          key: "amount",
          value: "1000000uinit"
        },
        {
          index: true,
          key: "msg_index",
          value: "1"
        }
      ],
      type: "coin_received"
    },
    {
      attributes: [
        {
          index: true,
          key: "recipient",
          value: "init1926svvgllca2lzr3lp98h29xshsztka6vua3wf"
        },
        {
          index: true,
          key: "sender",
          value: "init1h8lpl5qcs5k5nngxvdum5v20jnww2lckg3n2ta"
        },
        {
          index: true,
          key: "amount",
          value: "1000000uinit"
        },
        {
          index: true,
          key: "msg_index",
          value: "1"
        }
      ],
      type: "transfer"
    },
    {
      attributes: [
        {
          index: true,
          key: "sender",
          value: "init1h8lpl5qcs5k5nngxvdum5v20jnww2lckg3n2ta"
        },
        {
          index: true,
          key: "msg_index",
          value: "1"
        }
      ],
      type: "message"
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
          value: "init1h8lpl5qcs5k5nngxvdum5v20jnww2lckg3n2ta"
        },
        {
          index: true,
          key: "module",
          value: "bank"
        },
        {
          index: true,
          key: "msg_index",
          value: "2"
        }
      ],
      type: "message"
    },
    {
      attributes: [
        {
          index: true,
          key: "sender",
          value: "0x1,0xb9fe1fd018852d49cd066379ba314f94dce57f16"
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
          value: "2"
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
            '{"store_addr":"0xb3a18ed65a760faa12b9fa834f53ac6b413e05e416c29d14488aa45d76f15dd3","metadata_addr":"0x8e4733bdabcf7d4afc3d14f0dd46c9bf52fb0fce9e4b996c939e195b8bc891d9","amount":"1000000"}'
        },
        {
          index: true,
          key: "msg_index",
          value: "2"
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
            '{"store_addr":"0x47eb6bba5d4828067691d06dda5ecb9aa3e4ecb21713a560032d432d96ecdc0b","metadata_addr":"0x8e4733bdabcf7d4afc3d14f0dd46c9bf52fb0fce9e4b996c939e195b8bc891d9","amount":"1000000"}'
        },
        {
          index: true,
          key: "msg_index",
          value: "2"
        }
      ],
      type: "move"
    },
    {
      attributes: [
        {
          index: true,
          key: "spender",
          value: "init1h8lpl5qcs5k5nngxvdum5v20jnww2lckg3n2ta"
        },
        {
          index: true,
          key: "amount",
          value: "1000000uinit"
        },
        {
          index: true,
          key: "msg_index",
          value: "2"
        }
      ],
      type: "coin_spent"
    },
    {
      attributes: [
        {
          index: true,
          key: "receiver",
          value: "init1926svvgllca2lzr3lp98h29xshsztka6vua3wf"
        },
        {
          index: true,
          key: "amount",
          value: "1000000uinit"
        },
        {
          index: true,
          key: "msg_index",
          value: "2"
        }
      ],
      type: "coin_received"
    },
    {
      attributes: [
        {
          index: true,
          key: "recipient",
          value: "init1926svvgllca2lzr3lp98h29xshsztka6vua3wf"
        },
        {
          index: true,
          key: "sender",
          value: "init1h8lpl5qcs5k5nngxvdum5v20jnww2lckg3n2ta"
        },
        {
          index: true,
          key: "amount",
          value: "1000000uinit"
        },
        {
          index: true,
          key: "msg_index",
          value: "2"
        }
      ],
      type: "transfer"
    },
    {
      attributes: [
        {
          index: true,
          key: "sender",
          value: "init1h8lpl5qcs5k5nngxvdum5v20jnww2lckg3n2ta"
        },
        {
          index: true,
          key: "msg_index",
          value: "2"
        }
      ],
      type: "message"
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
          value: "init1h8lpl5qcs5k5nngxvdum5v20jnww2lckg3n2ta"
        },
        {
          index: true,
          key: "module",
          value: "bank"
        },
        {
          index: true,
          key: "msg_index",
          value: "3"
        }
      ],
      type: "message"
    },
    {
      attributes: [
        {
          index: true,
          key: "sender",
          value: "0x1,0xb9fe1fd018852d49cd066379ba314f94dce57f16"
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
          value: "3"
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
            '{"store_addr":"0xb3a18ed65a760faa12b9fa834f53ac6b413e05e416c29d14488aa45d76f15dd3","metadata_addr":"0x8e4733bdabcf7d4afc3d14f0dd46c9bf52fb0fce9e4b996c939e195b8bc891d9","amount":"1000000"}'
        },
        {
          index: true,
          key: "msg_index",
          value: "3"
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
            '{"store_addr":"0x47eb6bba5d4828067691d06dda5ecb9aa3e4ecb21713a560032d432d96ecdc0b","metadata_addr":"0x8e4733bdabcf7d4afc3d14f0dd46c9bf52fb0fce9e4b996c939e195b8bc891d9","amount":"1000000"}'
        },
        {
          index: true,
          key: "msg_index",
          value: "3"
        }
      ],
      type: "move"
    },
    {
      attributes: [
        {
          index: true,
          key: "spender",
          value: "init1h8lpl5qcs5k5nngxvdum5v20jnww2lckg3n2ta"
        },
        {
          index: true,
          key: "amount",
          value: "1000000uinit"
        },
        {
          index: true,
          key: "msg_index",
          value: "3"
        }
      ],
      type: "coin_spent"
    },
    {
      attributes: [
        {
          index: true,
          key: "receiver",
          value: "init1926svvgllca2lzr3lp98h29xshsztka6vua3wf"
        },
        {
          index: true,
          key: "amount",
          value: "1000000uinit"
        },
        {
          index: true,
          key: "msg_index",
          value: "3"
        }
      ],
      type: "coin_received"
    },
    {
      attributes: [
        {
          index: true,
          key: "recipient",
          value: "init1926svvgllca2lzr3lp98h29xshsztka6vua3wf"
        },
        {
          index: true,
          key: "sender",
          value: "init1h8lpl5qcs5k5nngxvdum5v20jnww2lckg3n2ta"
        },
        {
          index: true,
          key: "amount",
          value: "1000000uinit"
        },
        {
          index: true,
          key: "msg_index",
          value: "3"
        }
      ],
      type: "transfer"
    },
    {
      attributes: [
        {
          index: true,
          key: "sender",
          value: "init1h8lpl5qcs5k5nngxvdum5v20jnww2lckg3n2ta"
        },
        {
          index: true,
          key: "msg_index",
          value: "3"
        }
      ],
      type: "message"
    }
  ],
  gas_used: "380600",
  gas_wanted: "500000",
  height: "10478444",
  info: "",
  logs: [],
  raw_log: "",
  timestamp: "2025-06-23T10:02:54Z",
  tx: {
    "@type": "/cosmos.tx.v1beta1.Tx",
    auth_info: {
      fee: {
        amount: [
          {
            amount: "7500",
            denom: "uinit"
          }
        ],
        gas_limit: "500000",
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
            "@type": "/cosmos.crypto.secp256k1.PubKey",
            key: "A5vqpm4KH4Qz7T2DC31p3nZ8nK5M6ZrnDa4PcE6zg/Y0"
          },
          sequence: "312"
        }
      ],
      tip: null
    },
    body: {
      extension_options: [],
      memo: "",
      messages: [
        {
          "@type": "/cosmos.bank.v1beta1.MsgSend",
          amount: [
            {
              amount: "1000000",
              denom: "uinit"
            }
          ],
          from_address: "init1h8lpl5qcs5k5nngxvdum5v20jnww2lckg3n2ta",
          to_address: "init1926svvgllca2lzr3lp98h29xshsztka6vua3wf"
        },
        {
          "@type": "/cosmos.bank.v1beta1.MsgSend",
          amount: [
            {
              amount: "1000000",
              denom: "uinit"
            }
          ],
          from_address: "init1h8lpl5qcs5k5nngxvdum5v20jnww2lckg3n2ta",
          to_address: "init1926svvgllca2lzr3lp98h29xshsztka6vua3wf"
        },
        {
          "@type": "/cosmos.bank.v1beta1.MsgSend",
          amount: [
            {
              amount: "1000000",
              denom: "uinit"
            }
          ],
          from_address: "init1h8lpl5qcs5k5nngxvdum5v20jnww2lckg3n2ta",
          to_address: "init1926svvgllca2lzr3lp98h29xshsztka6vua3wf"
        },
        {
          "@type": "/cosmos.bank.v1beta1.MsgSend",
          amount: [
            {
              amount: "1000000",
              denom: "uinit"
            }
          ],
          from_address: "init1h8lpl5qcs5k5nngxvdum5v20jnww2lckg3n2ta",
          to_address: "init1926svvgllca2lzr3lp98h29xshsztka6vua3wf"
        }
      ],
      non_critical_extension_options: [],
      timeout_height: "0"
    },
    signatures: [
      "H1I6m9v7co/NmfrrQogEbZyY6+x7htB+jpNCAu4g7JgvBwPIrBbl6AEMN4SlOiyXgc59VNrawN1FDyaWBfXNxQ=="
    ]
  },
  txhash: "90EADB7E294A82012189E91ACA18578CD39F45EE12D9DB96F87FD72EB25011BE"
};

export const mockMsgSendWithOwnerEvent = {
  code: 0,
  codespace: "",
  data: "12260A242F636F736D6F732E62616E6B2E763162657461312E4D736753656E64526573706F6E7365",
  events: [
    {
      attributes: [
        {
          index: true,
          key: "sender",
          value: "0x1,0x802629b46ade23c857742aed09233e44e7bfeb90"
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
            '{"store_addr":"0x9418834bfb3a2fd9b1597fe1afd477824027e2e51f0dedf96061ada9ccca451","metadata_addr":"0x8e4733bdabcf7d4afc3d14f0dd46c9bf52fb0fce9e4b996c939e195b8bc891d9","amount":"12000"}'
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
          value: '{"owner":"0x802629b46ade23c857742aed09233e44e7bfeb90"}'
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
            '{"store_addr":"0x66a8cb0bfb991610dcffb8a6543ac0887c7c5405b8f985ebed6d628fe50c4686","metadata_addr":"0x8e4733bdabcf7d4afc3d14f0dd46c9bf52fb0fce9e4b996c939e195b8bc891d9","amount":"12000"}'
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
        }
      ],
      type: "move"
    },
    {
      attributes: [
        {
          index: true,
          key: "spender",
          value: "init1sqnzndr2mc3us4m59tksjge7gnnml6usydaskw"
        },
        {
          index: true,
          key: "amount",
          value: "12000uinit"
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
          value: "12000uinit"
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
          value: "init1sqnzndr2mc3us4m59tksjge7gnnml6usydaskw"
        },
        {
          index: true,
          key: "amount",
          value: "12000uinit"
        }
      ],
      type: "transfer"
    },
    {
      attributes: [
        {
          index: true,
          key: "sender",
          value: "init1sqnzndr2mc3us4m59tksjge7gnnml6usydaskw"
        }
      ],
      type: "message"
    },
    {
      attributes: [
        {
          index: true,
          key: "fee",
          value: "12000uinit"
        },
        {
          index: true,
          key: "fee_payer",
          value: "init1sqnzndr2mc3us4m59tksjge7gnnml6usydaskw"
        }
      ],
      type: "tx"
    },
    {
      attributes: [
        {
          index: true,
          key: "acc_seq",
          value: "init1sqnzndr2mc3us4m59tksjge7gnnml6usydaskw/1086"
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
            "WQUSfUGe0NmccCJ/hu2T+DDPQERl3Q593ea4y/QWg0tb7YHRWqgBXGRDBG6j+2N7h3N1af1GK4mqGuGGCws8Sw=="
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
          value: "init1sqnzndr2mc3us4m59tksjge7gnnml6usydaskw"
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
          value: "0x1,0x802629b46ade23c857742aed09233e44e7bfeb90"
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
            '{"store_addr":"0x9418834bfb3a2fd9b1597fe1afd477824027e2e51f0dedf96061ada9ccca451","metadata_addr":"0x8e4733bdabcf7d4afc3d14f0dd46c9bf52fb0fce9e4b996c939e195b8bc891d9","amount":"34365658000"}'
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
          value: '{"owner":"0x802629b46ade23c857742aed09233e44e7bfeb90"}'
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
            '{"store_addr":"0xa067ae682e3a86fe8185e2bb4e19e42db75837b7a21f4e2de31906a654119f47","metadata_addr":"0x8e4733bdabcf7d4afc3d14f0dd46c9bf52fb0fce9e4b996c939e195b8bc891d9","amount":"34365658000"}'
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
          value: '{"owner":"0x32ea8470eb03052a6d6f37d2b6cf80d61c7e98ff"}'
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
          value: "init1sqnzndr2mc3us4m59tksjge7gnnml6usydaskw"
        },
        {
          index: true,
          key: "amount",
          value: "34365658000uinit"
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
          value: "init1xt4ggu8tqvzj5mt0xlftdnuq6cw8ax8lp593zf"
        },
        {
          index: true,
          key: "amount",
          value: "34365658000uinit"
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
          value: "init1xt4ggu8tqvzj5mt0xlftdnuq6cw8ax8lp593zf"
        },
        {
          index: true,
          key: "sender",
          value: "init1sqnzndr2mc3us4m59tksjge7gnnml6usydaskw"
        },
        {
          index: true,
          key: "amount",
          value: "34365658000uinit"
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
          value: "init1sqnzndr2mc3us4m59tksjge7gnnml6usydaskw"
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
  gas_used: "146459",
  gas_wanted: "400000",
  height: "5761105",
  info: "",
  logs: [],
  raw_log: "",
  timestamp: "2025-08-03T14:37:40Z",
  tx: {
    "@type": "/cosmos.tx.v1beta1.Tx",
    auth_info: {
      fee: {
        amount: [
          {
            amount: "12000",
            denom: "uinit"
          }
        ],
        gas_limit: "400000",
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
            "@type": "/cosmos.crypto.secp256k1.PubKey",
            key: "AisZf6W9lN9eTt+b1+y4oUxXsAigp8wI9GhIxWapvyY5"
          },
          sequence: "1086"
        }
      ],
      tip: null
    },
    body: {
      extension_options: [],
      memo: "",
      messages: [
        {
          "@type": "/cosmos.bank.v1beta1.MsgSend",
          amount: [
            {
              amount: "34365658000",
              denom: "uinit"
            }
          ],
          from_address: "init1sqnzndr2mc3us4m59tksjge7gnnml6usydaskw",
          to_address: "init1xt4ggu8tqvzj5mt0xlftdnuq6cw8ax8lp593zf"
        }
      ],
      non_critical_extension_options: [],
      timeout_height: "0"
    },
    signatures: [
      "WQUSfUGe0NmccCJ/hu2T+DDPQERl3Q593ea4y/QWg0tb7YHRWqgBXGRDBG6j+2N7h3N1af1GK4mqGuGGCws8Sw=="
    ]
  },
  txhash: "8279A5CD17D102FE04909E87D8148CC0F26A34D32A5C4CF023D1A2D2E7731B1F"
};

export const mockApiResponsesForSingleCoin = {
  GET: {
    "/initia/move/v1/accounts/0x1ad99353426d05e2ef000df9424c01c8f1d37707667f9b0f2f8aee6ac3410bef/resources":
      {
        pagination: { next_key: null, total: "0" },
        resources: [
          {
            address:
              "0x1ad99353426d05e2ef000df9424c01c8f1d37707667f9b0f2f8aee6ac3410bef",
            move_resource:
              '{"type":"0x1::object::ObjectCore","data":{"allow_ungated_transfer":false,"owner":"0x992c4aec66368bfa88205b7edb58a3fa4a81fe73","version":"1"}}',
            raw_bytes:
              "AAAAAAAAAAAAAAAAmSxK7GY2i/qIIFt+21ij+kqB/nMAAQAAAAAAAAA=",
            struct_tag: "0x1::object::ObjectCore"
          },
          {
            address:
              "0x1ad99353426d05e2ef000df9424c01c8f1d37707667f9b0f2f8aee6ac3410bef",
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

export const mockApiResponsesForMultipleCoins = {
  GET: {
    "/initia/move/v1/accounts/0x13a6b8d69e854af41ede9265a91c8c443fd9c90367d9ea53b7ce9b18b28f2f53/resources":
      {
        pagination: { next_key: null, total: "0" },
        resources: [
          {
            address:
              "0x13a6b8d69e854af41ede9265a91c8c443fd9c90367d9ea53b7ce9b18b28f2f53",
            move_resource:
              '{"type":"0x1::object::ObjectCore","data":{"allow_ungated_transfer":false,"owner":"0x2ab506311ffe3aaf8871f84a7ba8a685e025dbba","version":"1"}}',
            raw_bytes:
              "AAAAAAAAAAAAAAAAKrUGMR/+Oq+IcfhKe6imheAl27oAAQAAAAAAAAA=",
            struct_tag: "0x1::object::ObjectCore"
          },
          {
            address:
              "0x13a6b8d69e854af41ede9265a91c8c443fd9c90367d9ea53b7ce9b18b28f2f53",
            move_resource:
              '{"type":"0x1::fungible_asset::FungibleStore","data":{"balance":"1024","frozen":false,"metadata":{"inner":"0x29824d952e035490fae7567deea5f15b504a68fa73610063c160ab1fa87dd609"}}}',
            raw_bytes:
              "KYJNlS4DVJD651Z97qXxW1BKaPpzYQBjwWCrH6h91gkABAAAAAAAAAA=",
            struct_tag: "0x1::fungible_asset::FungibleStore"
          }
        ]
      },
    "/initia/move/v1/accounts/0x27e65918aab6b185e5ce116bd6ce4c1f80a3dffa2935a7477b2938ef08ac7b47/resources":
      {
        pagination: { next_key: null, total: "0" },
        resources: [
          {
            address:
              "0x27e65918aab6b185e5ce116bd6ce4c1f80a3dffa2935a7477b2938ef08ac7b47",
            move_resource:
              '{"type":"0x1::object::ObjectCore","data":{"allow_ungated_transfer":false,"owner":"0x2ab506311ffe3aaf8871f84a7ba8a685e025dbba","version":"1"}}',
            raw_bytes:
              "AAAAAAAAAAAAAAAAKrUGMR/+Oq+IcfhKe6imheAl27oAAQAAAAAAAAA=",
            struct_tag: "0x1::object::ObjectCore"
          },
          {
            address:
              "0x27e65918aab6b185e5ce116bd6ce4c1f80a3dffa2935a7477b2938ef08ac7b47",
            move_resource:
              '{"type":"0x1::fungible_asset::FungibleStore","data":{"balance":"919","frozen":false,"metadata":{"inner":"0xbe0ef849e425ca89830c1ff0f984f5b0b512b70cab6a5ae294c6255c3ee4cd0c"}}}',
            raw_bytes:
              "vg74SeQlyomDDB/w+YT1sLUStwyralrilMYlXD7kzQyXAwAAAAAAAAA=",
            struct_tag: "0x1::fungible_asset::FungibleStore"
          }
        ]
      },
    "/initia/move/v1/accounts/0x47eb6bba5d4828067691d06dda5ecb9aa3e4ecb21713a560032d432d96ecdc0b/resources":
      {
        pagination: { next_key: null, total: "0" },
        resources: [
          {
            address:
              "0x47eb6bba5d4828067691d06dda5ecb9aa3e4ecb21713a560032d432d96ecdc0b",
            move_resource:
              '{"type":"0x1::object::ObjectCore","data":{"allow_ungated_transfer":false,"owner":"0x2ab506311ffe3aaf8871f84a7ba8a685e025dbba","version":"1"}}',
            raw_bytes:
              "AAAAAAAAAAAAAAAAKrUGMR/+Oq+IcfhKe6imheAl27oAAQAAAAAAAAA=",
            struct_tag: "0x1::object::ObjectCore"
          },
          {
            address:
              "0x47eb6bba5d4828067691d06dda5ecb9aa3e4ecb21713a560032d432d96ecdc0b",
            move_resource:
              '{"type":"0x1::fungible_asset::FungibleStore","data":{"balance":"5000000","frozen":false,"metadata":{"inner":"0x8e4733bdabcf7d4afc3d14f0dd46c9bf52fb0fce9e4b996c939e195b8bc891d9"}}}',
            raw_bytes:
              "jkczvavPfUr8PRTw3UbJv1L7D86eS5lsk54ZW4vIkdlAS0wAAAAAAAA=",
            struct_tag: "0x1::fungible_asset::FungibleStore"
          }
        ]
      },
    "/initia/move/v1/accounts/0xb3a18ed65a760faa12b9fa834f53ac6b413e05e416c29d14488aa45d76f15dd3/resources":
      {
        pagination: { next_key: null, total: "0" },
        resources: [
          {
            address:
              "0xb3a18ed65a760faa12b9fa834f53ac6b413e05e416c29d14488aa45d76f15dd3",
            move_resource:
              '{"type":"0x1::object::ObjectCore","data":{"allow_ungated_transfer":false,"owner":"0xb9fe1fd018852d49cd066379ba314f94dce57f16","version":"1"}}',
            raw_bytes:
              "AAAAAAAAAAAAAAAAuf4f0BiFLUnNBmN5ujFPlNzlfxYAAQAAAAAAAAA=",
            struct_tag: "0x1::object::ObjectCore"
          },
          {
            address:
              "0xb3a18ed65a760faa12b9fa834f53ac6b413e05e416c29d14488aa45d76f15dd3",
            move_resource:
              '{"type":"0x1::fungible_asset::FungibleStore","data":{"balance":"9016995468","frozen":false,"metadata":{"inner":"0x8e4733bdabcf7d4afc3d14f0dd46c9bf52fb0fce9e4b996c939e195b8bc891d9"}}}',
            raw_bytes:
              "jkczvavPfUr8PRTw3UbJv1L7D86eS5lsk54ZW4vIkdmMbnQZAgAAAAA=",
            struct_tag: "0x1::fungible_asset::FungibleStore"
          }
        ]
      },
    "/initia/move/v1/accounts/0xda1068a760b4ae212625d79eba4dc74b6c7c90d4f4294aa01a64f3ddd84d8c3/resources":
      {
        pagination: { next_key: null, total: "0" },
        resources: [
          {
            address:
              "0xda1068a760b4ae212625d79eba4dc74b6c7c90d4f4294aa01a64f3ddd84d8c3",
            move_resource:
              '{"type":"0x1::object::ObjectCore","data":{"allow_ungated_transfer":false,"owner":"0xb9fe1fd018852d49cd066379ba314f94dce57f16","version":"1"}}',
            raw_bytes:
              "AAAAAAAAAAAAAAAAuf4f0BiFLUnNBmN5ujFPlNzlfxYAAQAAAAAAAAA=",
            struct_tag: "0x1::object::ObjectCore"
          },
          {
            address:
              "0xda1068a760b4ae212625d79eba4dc74b6c7c90d4f4294aa01a64f3ddd84d8c3",
            move_resource:
              '{"type":"0x1::fungible_asset::FungibleStore","data":{"balance":"139028","frozen":false,"metadata":{"inner":"0xbe0ef849e425ca89830c1ff0f984f5b0b512b70cab6a5ae294c6255c3ee4cd0c"}}}',
            raw_bytes:
              "vg74SeQlyomDDB/w+YT1sLUStwyralrilMYlXD7kzQwUHwIAAAAAAAA=",
            struct_tag: "0x1::fungible_asset::FungibleStore"
          }
        ]
      },
    "/initia/move/v1/accounts/0xf895ccc2d2e0c0f054fb5a1497342b1c83b981617de69939e694fbc43c899564/resources":
      {
        pagination: { next_key: null, total: "0" },
        resources: [
          {
            address:
              "0xf895ccc2d2e0c0f054fb5a1497342b1c83b981617de69939e694fbc43c899564",
            move_resource:
              '{"type":"0x1::object::ObjectCore","data":{"allow_ungated_transfer":false,"owner":"0xb9fe1fd018852d49cd066379ba314f94dce57f16","version":"1"}}',
            raw_bytes:
              "AAAAAAAAAAAAAAAAuf4f0BiFLUnNBmN5ujFPlNzlfxYAAQAAAAAAAAA=",
            struct_tag: "0x1::object::ObjectCore"
          },
          {
            address:
              "0xf895ccc2d2e0c0f054fb5a1497342b1c83b981617de69939e694fbc43c899564",
            move_resource:
              '{"type":"0x1::fungible_asset::FungibleStore","data":{"balance":"102796117","frozen":false,"metadata":{"inner":"0x29824d952e035490fae7567deea5f15b504a68fa73610063c160ab1fa87dd609"}}}',
            raw_bytes:
              "KYJNlS4DVJD651Z97qXxW1BKaPpzYQBjwWCrH6h91glViyAGAAAAAAA=",
            struct_tag: "0x1::fungible_asset::FungibleStore"
          }
        ]
      },
    "/initia/move/v1/denom?metadata=0x8e4733bdabcf7d4afc3d14f0dd46c9bf52fb0fce9e4b996c939e195b8bc891d9":
      {
        denom: "uinit"
      },
    "/initia/move/v1/denom?metadata=0x29824d952e035490fae7567deea5f15b504a68fa73610063c160ab1fa87dd609":
      {
        denom: "uusdc"
      },
    "/initia/move/v1/denom?metadata=0xbe0ef849e425ca89830c1ff0f984f5b0b512b70cab6a5ae294c6255c3ee4cd0c":
      {
        denom: "ueth"
      }
  },
  POST: {}
};

export const mockApiResponsesForMultipleMessages = {
  GET: {
    "/initia/move/v1/accounts/0x47eb6bba5d4828067691d06dda5ecb9aa3e4ecb21713a560032d432d96ecdc0b/resources":
      {
        pagination: { next_key: null, total: "0" },
        resources: [
          {
            address:
              "0x47eb6bba5d4828067691d06dda5ecb9aa3e4ecb21713a560032d432d96ecdc0b",
            move_resource:
              '{"type":"0x1::object::ObjectCore","data":{"allow_ungated_transfer":false,"owner":"0x2ab506311ffe3aaf8871f84a7ba8a685e025dbba","version":"1"}}',
            raw_bytes:
              "AAAAAAAAAAAAAAAAKrUGMR/+Oq+IcfhKe6imheAl27oAAQAAAAAAAAA=",
            struct_tag: "0x1::object::ObjectCore"
          },
          {
            address:
              "0x47eb6bba5d4828067691d06dda5ecb9aa3e4ecb21713a560032d432d96ecdc0b",
            move_resource:
              '{"type":"0x1::fungible_asset::FungibleStore","data":{"balance":"5000000","frozen":false,"metadata":{"inner":"0x8e4733bdabcf7d4afc3d14f0dd46c9bf52fb0fce9e4b996c939e195b8bc891d9"}}}',
            raw_bytes:
              "jkczvavPfUr8PRTw3UbJv1L7D86eS5lsk54ZW4vIkdlAS0wAAAAAAAA=",
            struct_tag: "0x1::fungible_asset::FungibleStore"
          }
        ]
      },
    "/initia/move/v1/accounts/0xb3a18ed65a760faa12b9fa834f53ac6b413e05e416c29d14488aa45d76f15dd3/resources":
      {
        pagination: { next_key: null, total: "0" },
        resources: [
          {
            address:
              "0xb3a18ed65a760faa12b9fa834f53ac6b413e05e416c29d14488aa45d76f15dd3",
            move_resource:
              '{"type":"0x1::object::ObjectCore","data":{"allow_ungated_transfer":false,"owner":"0xb9fe1fd018852d49cd066379ba314f94dce57f16","version":"1"}}',
            raw_bytes:
              "AAAAAAAAAAAAAAAAuf4f0BiFLUnNBmN5ujFPlNzlfxYAAQAAAAAAAAA=",
            struct_tag: "0x1::object::ObjectCore"
          },
          {
            address:
              "0xb3a18ed65a760faa12b9fa834f53ac6b413e05e416c29d14488aa45d76f15dd3",
            move_resource:
              '{"type":"0x1::fungible_asset::FungibleStore","data":{"balance":"9016995468","frozen":false,"metadata":{"inner":"0x8e4733bdabcf7d4afc3d14f0dd46c9bf52fb0fce9e4b996c939e195b8bc891d9"}}}',
            raw_bytes:
              "jkczvavPfUr8PRTw3UbJv1L7D86eS5lsk54ZW4vIkdmMbnQZAgAAAAA=",
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

export const mockApiResponsesForOwnerEvent = {
  GET: {
    "/initia/move/v1/denom?metadata=0x8e4733bdabcf7d4afc3d14f0dd46c9bf52fb0fce9e4b996c939e195b8bc891d9":
      {
        denom: "uinit"
      }
  },
  POST: {}
};
