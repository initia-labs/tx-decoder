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
          value: "0x1,0xb395c9f2e84f75b1686fcdc62f8cb62a572b7820",
        },
        {
          index: true,
          key: "module_addr",
          value: "0x1",
        },
        {
          index: true,
          key: "module_name",
          value: "coin",
        },
        {
          index: true,
          key: "function_name",
          value: "sudo_transfer",
        },
      ],
      type: "execute",
    },
    {
      attributes: [
        {
          index: true,
          key: "type_tag",
          value: "0x1::fungible_asset::WithdrawEvent",
        },
        {
          index: true,
          key: "data",
          value:
            '{"store_addr":"0xe2d99fcea59da8da2d4095cc11cb83e6ff80cf2e41522c678b8f152233d1b65e","metadata_addr":"0x8e4733bdabcf7d4afc3d14f0dd46c9bf52fb0fce9e4b996c939e195b8bc891d9","amount":"6103"}',
        },
      ],
      type: "move",
    },
    {
      attributes: [
        {
          index: true,
          key: "type_tag",
          value: "0x1::fungible_asset::DepositEvent",
        },
        {
          index: true,
          key: "data",
          value:
            '{"store_addr":"0x66a8cb0bfb991610dcffb8a6543ac0887c7c5405b8f985ebed6d628fe50c4686","metadata_addr":"0x8e4733bdabcf7d4afc3d14f0dd46c9bf52fb0fce9e4b996c939e195b8bc891d9","amount":"6103"}',
        },
      ],
      type: "move",
    },
    {
      attributes: [
        {
          index: true,
          key: "spender",
          value: "init1kw2unuhgfa6mz6r0ehrzlr9k9ftjk7pql8u5fm",
        },
        {
          index: true,
          key: "amount",
          value: "6103uinit",
        },
      ],
      type: "coin_spent",
    },
    {
      attributes: [
        {
          index: true,
          key: "receiver",
          value: "init17xpfvakm2amg962yls6f84z3kell8c5l70rnql",
        },
        {
          index: true,
          key: "amount",
          value: "6103uinit",
        },
      ],
      type: "coin_received",
    },
    {
      attributes: [
        {
          index: true,
          key: "recipient",
          value: "init17xpfvakm2amg962yls6f84z3kell8c5l70rnql",
        },
        {
          index: true,
          key: "sender",
          value: "init1kw2unuhgfa6mz6r0ehrzlr9k9ftjk7pql8u5fm",
        },
        {
          index: true,
          key: "amount",
          value: "6103uinit",
        },
      ],
      type: "transfer",
    },
    {
      attributes: [
        {
          index: true,
          key: "sender",
          value: "init1kw2unuhgfa6mz6r0ehrzlr9k9ftjk7pql8u5fm",
        },
      ],
      type: "message",
    },
    {
      attributes: [
        {
          index: true,
          key: "fee",
          value: "6103uinit",
        },
        {
          index: true,
          key: "fee_payer",
          value: "init1kw2unuhgfa6mz6r0ehrzlr9k9ftjk7pql8u5fm",
        },
      ],
      type: "tx",
    },
    {
      attributes: [
        {
          index: true,
          key: "acc_seq",
          value: "init1kw2unuhgfa6mz6r0ehrzlr9k9ftjk7pql8u5fm/22",
        },
      ],
      type: "tx",
    },
    {
      attributes: [
        {
          index: true,
          key: "signature",
          value:
            "MiOnd/7iTA4hJvHSoo27HyvInTQt0LdV313+Hz5H/jNSJPeKdoHuNEatY66g3SobQehjSA7ej/3AUMSLCSvcUw==",
        },
      ],
      type: "tx",
    },
    {
      attributes: [
        {
          index: true,
          key: "action",
          value: "/cosmos.bank.v1beta1.MsgSend",
        },
        {
          index: true,
          key: "sender",
          value: "init1kw2unuhgfa6mz6r0ehrzlr9k9ftjk7pql8u5fm",
        },
        {
          index: true,
          key: "module",
          value: "bank",
        },
        {
          index: true,
          key: "msg_index",
          value: "0",
        },
      ],
      type: "message",
    },
    {
      attributes: [
        {
          index: true,
          key: "sender",
          value: "0x1,0xb395c9f2e84f75b1686fcdc62f8cb62a572b7820",
        },
        {
          index: true,
          key: "module_addr",
          value: "0x1",
        },
        {
          index: true,
          key: "module_name",
          value: "coin",
        },
        {
          index: true,
          key: "function_name",
          value: "sudo_transfer",
        },
        {
          index: true,
          key: "msg_index",
          value: "0",
        },
      ],
      type: "execute",
    },
    {
      attributes: [
        {
          index: true,
          key: "type_tag",
          value: "0x1::object::CreateEvent",
        },
        {
          index: true,
          key: "data",
          value:
            '{"object":"0x1ad99353426d05e2ef000df9424c01c8f1d37707667f9b0f2f8aee6ac3410bef","owner":"0x992c4aec66368bfa88205b7edb58a3fa4a81fe73","version":"1"}',
        },
        {
          index: true,
          key: "msg_index",
          value: "0",
        },
      ],
      type: "move",
    },
    {
      attributes: [
        {
          index: true,
          key: "type_tag",
          value: "0x1::primary_fungible_store::PrimaryStoreCreatedEvent",
        },
        {
          index: true,
          key: "data",
          value:
            '{"owner_addr":"0x992c4aec66368bfa88205b7edb58a3fa4a81fe73","store_addr":"0x1ad99353426d05e2ef000df9424c01c8f1d37707667f9b0f2f8aee6ac3410bef","metadata_addr":"0x8e4733bdabcf7d4afc3d14f0dd46c9bf52fb0fce9e4b996c939e195b8bc891d9"}',
        },
        {
          index: true,
          key: "msg_index",
          value: "0",
        },
      ],
      type: "move",
    },
    {
      attributes: [
        {
          index: true,
          key: "type_tag",
          value: "0x1::fungible_asset::WithdrawEvent",
        },
        {
          index: true,
          key: "data",
          value:
            '{"store_addr":"0xe2d99fcea59da8da2d4095cc11cb83e6ff80cf2e41522c678b8f152233d1b65e","metadata_addr":"0x8e4733bdabcf7d4afc3d14f0dd46c9bf52fb0fce9e4b996c939e195b8bc891d9","amount":"100"}',
        },
        {
          index: true,
          key: "msg_index",
          value: "0",
        },
      ],
      type: "move",
    },
    {
      attributes: [
        {
          index: true,
          key: "type_tag",
          value: "0x1::fungible_asset::DepositEvent",
        },
        {
          index: true,
          key: "data",
          value:
            '{"store_addr":"0x1ad99353426d05e2ef000df9424c01c8f1d37707667f9b0f2f8aee6ac3410bef","metadata_addr":"0x8e4733bdabcf7d4afc3d14f0dd46c9bf52fb0fce9e4b996c939e195b8bc891d9","amount":"100"}',
        },
        {
          index: true,
          key: "msg_index",
          value: "0",
        },
      ],
      type: "move",
    },
    {
      attributes: [
        {
          index: true,
          key: "spender",
          value: "init1kw2unuhgfa6mz6r0ehrzlr9k9ftjk7pql8u5fm",
        },
        {
          index: true,
          key: "amount",
          value: "100uinit",
        },
        {
          index: true,
          key: "msg_index",
          value: "0",
        },
      ],
      type: "coin_spent",
    },
    {
      attributes: [
        {
          index: true,
          key: "receiver",
          value: "init1nyky4mrxx69l4zpqtdldkk9rlf9grlnn77djlh",
        },
        {
          index: true,
          key: "amount",
          value: "100uinit",
        },
        {
          index: true,
          key: "msg_index",
          value: "0",
        },
      ],
      type: "coin_received",
    },
    {
      attributes: [
        {
          index: true,
          key: "recipient",
          value: "init1nyky4mrxx69l4zpqtdldkk9rlf9grlnn77djlh",
        },
        {
          index: true,
          key: "sender",
          value: "init1kw2unuhgfa6mz6r0ehrzlr9k9ftjk7pql8u5fm",
        },
        {
          index: true,
          key: "amount",
          value: "100uinit",
        },
        {
          index: true,
          key: "msg_index",
          value: "0",
        },
      ],
      type: "transfer",
    },
    {
      attributes: [
        {
          index: true,
          key: "sender",
          value: "init1kw2unuhgfa6mz6r0ehrzlr9k9ftjk7pql8u5fm",
        },
        {
          index: true,
          key: "msg_index",
          value: "0",
        },
      ],
      type: "message",
    },
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
            denom: "uinit",
          },
        ],
        gas_limit: "339037",
        granter: "",
        payer: "",
      },
      signer_infos: [
        {
          mode_info: {
            single: {
              mode: "SIGN_MODE_LEGACY_AMINO_JSON",
            },
          },
          public_key: {
            "@type": "/initia.crypto.v1beta1.ethsecp256k1.PubKey",
            key: "Axdt0OtFq4TF/TA4EnlF4J0Lv6E+9jFccR2/ULQVXP2a",
          },
          sequence: "22",
        },
      ],
      tip: null,
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
              denom: "uinit",
            },
          ],
          from_address: "init1kw2unuhgfa6mz6r0ehrzlr9k9ftjk7pql8u5fm",
          to_address: "init1nyky4mrxx69l4zpqtdldkk9rlf9grlnn77djlh",
        },
      ],
      non_critical_extension_options: [],
      timeout_height: "0",
    },
    signatures: [
      "MiOnd/7iTA4hJvHSoo27HyvInTQt0LdV313+Hz5H/jNSJPeKdoHuNEatY66g3SobQehjSA7ej/3AUMSLCSvcUw==",
    ],
  },
  txhash: "7C8164D579F96B5C3C43BA2AB63A85B889A4917E5B29ECE801FD9F177DF71AAE",
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
          value: "0x1,0xb9fe1fd018852d49cd066379ba314f94dce57f16",
        },
        {
          index: true,
          key: "module_addr",
          value: "0x1",
        },
        {
          index: true,
          key: "module_name",
          value: "coin",
        },
        {
          index: true,
          key: "function_name",
          value: "sudo_transfer",
        },
      ],
      type: "execute",
    },
    {
      attributes: [
        {
          index: true,
          key: "type_tag",
          value: "0x1::fungible_asset::WithdrawEvent",
        },
        {
          index: true,
          key: "data",
          value:
            '{"store_addr":"0xb3a18ed65a760faa12b9fa834f53ac6b413e05e416c29d14488aa45d76f15dd3","metadata_addr":"0x8e4733bdabcf7d4afc3d14f0dd46c9bf52fb0fce9e4b996c939e195b8bc891d9","amount":"7500"}',
        },
      ],
      type: "move",
    },
    {
      attributes: [
        {
          index: true,
          key: "type_tag",
          value: "0x1::fungible_asset::DepositEvent",
        },
        {
          index: true,
          key: "data",
          value:
            '{"store_addr":"0x66a8cb0bfb991610dcffb8a6543ac0887c7c5405b8f985ebed6d628fe50c4686","metadata_addr":"0x8e4733bdabcf7d4afc3d14f0dd46c9bf52fb0fce9e4b996c939e195b8bc891d9","amount":"7500"}',
        },
      ],
      type: "move",
    },
    {
      attributes: [
        {
          index: true,
          key: "spender",
          value: "init1h8lpl5qcs5k5nngxvdum5v20jnww2lckg3n2ta",
        },
        {
          index: true,
          key: "amount",
          value: "7500uinit",
        },
      ],
      type: "coin_spent",
    },
    {
      attributes: [
        {
          index: true,
          key: "receiver",
          value: "init17xpfvakm2amg962yls6f84z3kell8c5l70rnql",
        },
        {
          index: true,
          key: "amount",
          value: "7500uinit",
        },
      ],
      type: "coin_received",
    },
    {
      attributes: [
        {
          index: true,
          key: "recipient",
          value: "init17xpfvakm2amg962yls6f84z3kell8c5l70rnql",
        },
        {
          index: true,
          key: "sender",
          value: "init1h8lpl5qcs5k5nngxvdum5v20jnww2lckg3n2ta",
        },
        {
          index: true,
          key: "amount",
          value: "7500uinit",
        },
      ],
      type: "transfer",
    },
    {
      attributes: [
        {
          index: true,
          key: "sender",
          value: "init1h8lpl5qcs5k5nngxvdum5v20jnww2lckg3n2ta",
        },
      ],
      type: "message",
    },
    {
      attributes: [
        {
          index: true,
          key: "fee",
          value: "7500uinit",
        },
        {
          index: true,
          key: "fee_payer",
          value: "init1h8lpl5qcs5k5nngxvdum5v20jnww2lckg3n2ta",
        },
      ],
      type: "tx",
    },
    {
      attributes: [
        {
          index: true,
          key: "acc_seq",
          value: "init1h8lpl5qcs5k5nngxvdum5v20jnww2lckg3n2ta/314",
        },
      ],
      type: "tx",
    },
    {
      attributes: [
        {
          index: true,
          key: "signature",
          value:
            "/WFbBzA0I5r6dJx6N0uvpnaG90d5oBAiZgSxx2jJfLMCQbp5Qx4Loy5RRy5vwSBwYs2lCT2SIm8NFW9rQSmodQ==",
        },
      ],
      type: "tx",
    },
    {
      attributes: [
        {
          index: true,
          key: "action",
          value: "/cosmos.bank.v1beta1.MsgSend",
        },
        {
          index: true,
          key: "sender",
          value: "init1h8lpl5qcs5k5nngxvdum5v20jnww2lckg3n2ta",
        },
        {
          index: true,
          key: "module",
          value: "bank",
        },
        {
          index: true,
          key: "msg_index",
          value: "0",
        },
      ],
      type: "message",
    },
    {
      attributes: [
        {
          index: true,
          key: "sender",
          value: "0x1,0xb9fe1fd018852d49cd066379ba314f94dce57f16",
        },
        {
          index: true,
          key: "module_addr",
          value: "0x1",
        },
        {
          index: true,
          key: "module_name",
          value: "coin",
        },
        {
          index: true,
          key: "function_name",
          value: "sudo_transfer",
        },
        {
          index: true,
          key: "msg_index",
          value: "0",
        },
      ],
      type: "execute",
    },
    {
      attributes: [
        {
          index: true,
          key: "type_tag",
          value: "0x1::object::CreateEvent",
        },
        {
          index: true,
          key: "data",
          value:
            '{"object":"0x27e65918aab6b185e5ce116bd6ce4c1f80a3dffa2935a7477b2938ef08ac7b47","owner":"0x2ab506311ffe3aaf8871f84a7ba8a685e025dbba","version":"1"}',
        },
        {
          index: true,
          key: "msg_index",
          value: "0",
        },
      ],
      type: "move",
    },
    {
      attributes: [
        {
          index: true,
          key: "type_tag",
          value: "0x1::primary_fungible_store::PrimaryStoreCreatedEvent",
        },
        {
          index: true,
          key: "data",
          value:
            '{"owner_addr":"0x2ab506311ffe3aaf8871f84a7ba8a685e025dbba","store_addr":"0x27e65918aab6b185e5ce116bd6ce4c1f80a3dffa2935a7477b2938ef08ac7b47","metadata_addr":"0xbe0ef849e425ca89830c1ff0f984f5b0b512b70cab6a5ae294c6255c3ee4cd0c"}',
        },
        {
          index: true,
          key: "msg_index",
          value: "0",
        },
      ],
      type: "move",
    },
    {
      attributes: [
        {
          index: true,
          key: "type_tag",
          value: "0x1::fungible_asset::WithdrawEvent",
        },
        {
          index: true,
          key: "data",
          value:
            '{"store_addr":"0xda1068a760b4ae212625d79eba4dc74b6c7c90d4f4294aa01a64f3ddd84d8c3","metadata_addr":"0xbe0ef849e425ca89830c1ff0f984f5b0b512b70cab6a5ae294c6255c3ee4cd0c","amount":"919"}',
        },
        {
          index: true,
          key: "msg_index",
          value: "0",
        },
      ],
      type: "move",
    },
    {
      attributes: [
        {
          index: true,
          key: "type_tag",
          value: "0x1::fungible_asset::DepositEvent",
        },
        {
          index: true,
          key: "data",
          value:
            '{"store_addr":"0x27e65918aab6b185e5ce116bd6ce4c1f80a3dffa2935a7477b2938ef08ac7b47","metadata_addr":"0xbe0ef849e425ca89830c1ff0f984f5b0b512b70cab6a5ae294c6255c3ee4cd0c","amount":"919"}',
        },
        {
          index: true,
          key: "msg_index",
          value: "0",
        },
      ],
      type: "move",
    },
    {
      attributes: [
        {
          index: true,
          key: "sender",
          value: "0x1,0xb9fe1fd018852d49cd066379ba314f94dce57f16",
        },
        {
          index: true,
          key: "module_addr",
          value: "0x1",
        },
        {
          index: true,
          key: "module_name",
          value: "coin",
        },
        {
          index: true,
          key: "function_name",
          value: "sudo_transfer",
        },
        {
          index: true,
          key: "msg_index",
          value: "0",
        },
      ],
      type: "execute",
    },
    {
      attributes: [
        {
          index: true,
          key: "type_tag",
          value: "0x1::fungible_asset::WithdrawEvent",
        },
        {
          index: true,
          key: "data",
          value:
            '{"store_addr":"0xb3a18ed65a760faa12b9fa834f53ac6b413e05e416c29d14488aa45d76f15dd3","metadata_addr":"0x8e4733bdabcf7d4afc3d14f0dd46c9bf52fb0fce9e4b996c939e195b8bc891d9","amount":"1000000"}',
        },
        {
          index: true,
          key: "msg_index",
          value: "0",
        },
      ],
      type: "move",
    },
    {
      attributes: [
        {
          index: true,
          key: "type_tag",
          value: "0x1::fungible_asset::DepositEvent",
        },
        {
          index: true,
          key: "data",
          value:
            '{"store_addr":"0x47eb6bba5d4828067691d06dda5ecb9aa3e4ecb21713a560032d432d96ecdc0b","metadata_addr":"0x8e4733bdabcf7d4afc3d14f0dd46c9bf52fb0fce9e4b996c939e195b8bc891d9","amount":"1000000"}',
        },
        {
          index: true,
          key: "msg_index",
          value: "0",
        },
      ],
      type: "move",
    },
    {
      attributes: [
        {
          index: true,
          key: "sender",
          value: "0x1,0xb9fe1fd018852d49cd066379ba314f94dce57f16",
        },
        {
          index: true,
          key: "module_addr",
          value: "0x1",
        },
        {
          index: true,
          key: "module_name",
          value: "coin",
        },
        {
          index: true,
          key: "function_name",
          value: "sudo_transfer",
        },
        {
          index: true,
          key: "msg_index",
          value: "0",
        },
      ],
      type: "execute",
    },
    {
      attributes: [
        {
          index: true,
          key: "type_tag",
          value: "0x1::object::CreateEvent",
        },
        {
          index: true,
          key: "data",
          value:
            '{"object":"0x13a6b8d69e854af41ede9265a91c8c443fd9c90367d9ea53b7ce9b18b28f2f53","owner":"0x2ab506311ffe3aaf8871f84a7ba8a685e025dbba","version":"1"}',
        },
        {
          index: true,
          key: "msg_index",
          value: "0",
        },
      ],
      type: "move",
    },
    {
      attributes: [
        {
          index: true,
          key: "type_tag",
          value: "0x1::primary_fungible_store::PrimaryStoreCreatedEvent",
        },
        {
          index: true,
          key: "data",
          value:
            '{"owner_addr":"0x2ab506311ffe3aaf8871f84a7ba8a685e025dbba","store_addr":"0x13a6b8d69e854af41ede9265a91c8c443fd9c90367d9ea53b7ce9b18b28f2f53","metadata_addr":"0x29824d952e035490fae7567deea5f15b504a68fa73610063c160ab1fa87dd609"}',
        },
        {
          index: true,
          key: "msg_index",
          value: "0",
        },
      ],
      type: "move",
    },
    {
      attributes: [
        {
          index: true,
          key: "type_tag",
          value: "0x1::fungible_asset::WithdrawEvent",
        },
        {
          index: true,
          key: "data",
          value:
            '{"store_addr":"0xf895ccc2d2e0c0f054fb5a1497342b1c83b981617de69939e694fbc43c899564","metadata_addr":"0x29824d952e035490fae7567deea5f15b504a68fa73610063c160ab1fa87dd609","amount":"1024"}',
        },
        {
          index: true,
          key: "msg_index",
          value: "0",
        },
      ],
      type: "move",
    },
    {
      attributes: [
        {
          index: true,
          key: "type_tag",
          value: "0x1::fungible_asset::DepositEvent",
        },
        {
          index: true,
          key: "data",
          value:
            '{"store_addr":"0x13a6b8d69e854af41ede9265a91c8c443fd9c90367d9ea53b7ce9b18b28f2f53","metadata_addr":"0x29824d952e035490fae7567deea5f15b504a68fa73610063c160ab1fa87dd609","amount":"1024"}',
        },
        {
          index: true,
          key: "msg_index",
          value: "0",
        },
      ],
      type: "move",
    },
    {
      attributes: [
        {
          index: true,
          key: "spender",
          value: "init1h8lpl5qcs5k5nngxvdum5v20jnww2lckg3n2ta",
        },
        {
          index: true,
          key: "amount",
          value: "919ueth,1000000uinit,1024uusdc",
        },
        {
          index: true,
          key: "msg_index",
          value: "0",
        },
      ],
      type: "coin_spent",
    },
    {
      attributes: [
        {
          index: true,
          key: "receiver",
          value: "init1926svvgllca2lzr3lp98h29xshsztka6vua3wf",
        },
        {
          index: true,
          key: "amount",
          value: "919ueth,1000000uinit,1024uusdc",
        },
        {
          index: true,
          key: "msg_index",
          value: "0",
        },
      ],
      type: "coin_received",
    },
    {
      attributes: [
        {
          index: true,
          key: "recipient",
          value: "init1926svvgllca2lzr3lp98h29xshsztka6vua3wf",
        },
        {
          index: true,
          key: "sender",
          value: "init1h8lpl5qcs5k5nngxvdum5v20jnww2lckg3n2ta",
        },
        {
          index: true,
          key: "amount",
          value: "919ueth,1000000uinit,1024uusdc",
        },
        {
          index: true,
          key: "msg_index",
          value: "0",
        },
      ],
      type: "transfer",
    },
    {
      attributes: [
        {
          index: true,
          key: "sender",
          value: "init1h8lpl5qcs5k5nngxvdum5v20jnww2lckg3n2ta",
        },
        {
          index: true,
          key: "msg_index",
          value: "0",
        },
      ],
      type: "message",
    },
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
            denom: "uinit",
          },
        ],
        gas_limit: "500000",
        granter: "",
        payer: "",
      },
      signer_infos: [
        {
          mode_info: {
            single: {
              mode: "SIGN_MODE_DIRECT",
            },
          },
          public_key: {
            "@type": "/cosmos.crypto.secp256k1.PubKey",
            key: "A5vqpm4KH4Qz7T2DC31p3nZ8nK5M6ZrnDa4PcE6zg/Y0",
          },
          sequence: "314",
        },
      ],
      tip: null,
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
              denom: "ueth",
            },
            {
              amount: "1000000",
              denom: "uinit",
            },
            {
              amount: "1024",
              denom: "uusdc",
            },
          ],
          from_address: "init1h8lpl5qcs5k5nngxvdum5v20jnww2lckg3n2ta",
          to_address: "init1926svvgllca2lzr3lp98h29xshsztka6vua3wf",
        },
      ],
      non_critical_extension_options: [],
      timeout_height: "0",
    },
    signatures: [
      "/WFbBzA0I5r6dJx6N0uvpnaG90d5oBAiZgSxx2jJfLMCQbp5Qx4Loy5RRy5vwSBwYs2lCT2SIm8NFW9rQSmodQ==",
    ],
  },
  txhash: "AC795285CB1A11EA9C245218D2557C614524964BA8BE96FBCC60F6BEC0C14B56",
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
          value: "0x1,0xb9fe1fd018852d49cd066379ba314f94dce57f16",
        },
        {
          index: true,
          key: "module_addr",
          value: "0x1",
        },
        {
          index: true,
          key: "module_name",
          value: "coin",
        },
        {
          index: true,
          key: "function_name",
          value: "sudo_transfer",
        },
      ],
      type: "execute",
    },
    {
      attributes: [
        {
          index: true,
          key: "type_tag",
          value: "0x1::fungible_asset::WithdrawEvent",
        },
        {
          index: true,
          key: "data",
          value:
            '{"store_addr":"0xb3a18ed65a760faa12b9fa834f53ac6b413e05e416c29d14488aa45d76f15dd3","metadata_addr":"0x8e4733bdabcf7d4afc3d14f0dd46c9bf52fb0fce9e4b996c939e195b8bc891d9","amount":"7500"}',
        },
      ],
      type: "move",
    },
    {
      attributes: [
        {
          index: true,
          key: "type_tag",
          value: "0x1::fungible_asset::DepositEvent",
        },
        {
          index: true,
          key: "data",
          value:
            '{"store_addr":"0x66a8cb0bfb991610dcffb8a6543ac0887c7c5405b8f985ebed6d628fe50c4686","metadata_addr":"0x8e4733bdabcf7d4afc3d14f0dd46c9bf52fb0fce9e4b996c939e195b8bc891d9","amount":"7500"}',
        },
      ],
      type: "move",
    },
    {
      attributes: [
        {
          index: true,
          key: "spender",
          value: "init1h8lpl5qcs5k5nngxvdum5v20jnww2lckg3n2ta",
        },
        {
          index: true,
          key: "amount",
          value: "7500uinit",
        },
      ],
      type: "coin_spent",
    },
    {
      attributes: [
        {
          index: true,
          key: "receiver",
          value: "init17xpfvakm2amg962yls6f84z3kell8c5l70rnql",
        },
        {
          index: true,
          key: "amount",
          value: "7500uinit",
        },
      ],
      type: "coin_received",
    },
    {
      attributes: [
        {
          index: true,
          key: "recipient",
          value: "init17xpfvakm2amg962yls6f84z3kell8c5l70rnql",
        },
        {
          index: true,
          key: "sender",
          value: "init1h8lpl5qcs5k5nngxvdum5v20jnww2lckg3n2ta",
        },
        {
          index: true,
          key: "amount",
          value: "7500uinit",
        },
      ],
      type: "transfer",
    },
    {
      attributes: [
        {
          index: true,
          key: "sender",
          value: "init1h8lpl5qcs5k5nngxvdum5v20jnww2lckg3n2ta",
        },
      ],
      type: "message",
    },
    {
      attributes: [
        {
          index: true,
          key: "fee",
          value: "7500uinit",
        },
        {
          index: true,
          key: "fee_payer",
          value: "init1h8lpl5qcs5k5nngxvdum5v20jnww2lckg3n2ta",
        },
      ],
      type: "tx",
    },
    {
      attributes: [
        {
          index: true,
          key: "acc_seq",
          value: "init1h8lpl5qcs5k5nngxvdum5v20jnww2lckg3n2ta/312",
        },
      ],
      type: "tx",
    },
    {
      attributes: [
        {
          index: true,
          key: "signature",
          value:
            "H1I6m9v7co/NmfrrQogEbZyY6+x7htB+jpNCAu4g7JgvBwPIrBbl6AEMN4SlOiyXgc59VNrawN1FDyaWBfXNxQ==",
        },
      ],
      type: "tx",
    },
    {
      attributes: [
        {
          index: true,
          key: "action",
          value: "/cosmos.bank.v1beta1.MsgSend",
        },
        {
          index: true,
          key: "sender",
          value: "init1h8lpl5qcs5k5nngxvdum5v20jnww2lckg3n2ta",
        },
        {
          index: true,
          key: "module",
          value: "bank",
        },
        {
          index: true,
          key: "msg_index",
          value: "0",
        },
      ],
      type: "message",
    },
    {
      attributes: [
        {
          index: true,
          key: "sender",
          value: "0x1,0xb9fe1fd018852d49cd066379ba314f94dce57f16",
        },
        {
          index: true,
          key: "module_addr",
          value: "0x1",
        },
        {
          index: true,
          key: "module_name",
          value: "coin",
        },
        {
          index: true,
          key: "function_name",
          value: "sudo_transfer",
        },
        {
          index: true,
          key: "msg_index",
          value: "0",
        },
      ],
      type: "execute",
    },
    {
      attributes: [
        {
          index: true,
          key: "type_tag",
          value: "0x1::object::CreateEvent",
        },
        {
          index: true,
          key: "data",
          value:
            '{"object":"0x47eb6bba5d4828067691d06dda5ecb9aa3e4ecb21713a560032d432d96ecdc0b","owner":"0x2ab506311ffe3aaf8871f84a7ba8a685e025dbba","version":"1"}',
        },
        {
          index: true,
          key: "msg_index",
          value: "0",
        },
      ],
      type: "move",
    },
    {
      attributes: [
        {
          index: true,
          key: "type_tag",
          value: "0x1::primary_fungible_store::PrimaryStoreCreatedEvent",
        },
        {
          index: true,
          key: "data",
          value:
            '{"owner_addr":"0x2ab506311ffe3aaf8871f84a7ba8a685e025dbba","store_addr":"0x47eb6bba5d4828067691d06dda5ecb9aa3e4ecb21713a560032d432d96ecdc0b","metadata_addr":"0x8e4733bdabcf7d4afc3d14f0dd46c9bf52fb0fce9e4b996c939e195b8bc891d9"}',
        },
        {
          index: true,
          key: "msg_index",
          value: "0",
        },
      ],
      type: "move",
    },
    {
      attributes: [
        {
          index: true,
          key: "type_tag",
          value: "0x1::fungible_asset::WithdrawEvent",
        },
        {
          index: true,
          key: "data",
          value:
            '{"store_addr":"0xb3a18ed65a760faa12b9fa834f53ac6b413e05e416c29d14488aa45d76f15dd3","metadata_addr":"0x8e4733bdabcf7d4afc3d14f0dd46c9bf52fb0fce9e4b996c939e195b8bc891d9","amount":"1000000"}',
        },
        {
          index: true,
          key: "msg_index",
          value: "0",
        },
      ],
      type: "move",
    },
    {
      attributes: [
        {
          index: true,
          key: "type_tag",
          value: "0x1::fungible_asset::DepositEvent",
        },
        {
          index: true,
          key: "data",
          value:
            '{"store_addr":"0x47eb6bba5d4828067691d06dda5ecb9aa3e4ecb21713a560032d432d96ecdc0b","metadata_addr":"0x8e4733bdabcf7d4afc3d14f0dd46c9bf52fb0fce9e4b996c939e195b8bc891d9","amount":"1000000"}',
        },
        {
          index: true,
          key: "msg_index",
          value: "0",
        },
      ],
      type: "move",
    },
    {
      attributes: [
        {
          index: true,
          key: "spender",
          value: "init1h8lpl5qcs5k5nngxvdum5v20jnww2lckg3n2ta",
        },
        {
          index: true,
          key: "amount",
          value: "1000000uinit",
        },
        {
          index: true,
          key: "msg_index",
          value: "0",
        },
      ],
      type: "coin_spent",
    },
    {
      attributes: [
        {
          index: true,
          key: "receiver",
          value: "init1926svvgllca2lzr3lp98h29xshsztka6vua3wf",
        },
        {
          index: true,
          key: "amount",
          value: "1000000uinit",
        },
        {
          index: true,
          key: "msg_index",
          value: "0",
        },
      ],
      type: "coin_received",
    },
    {
      attributes: [
        {
          index: true,
          key: "recipient",
          value: "init1926svvgllca2lzr3lp98h29xshsztka6vua3wf",
        },
        {
          index: true,
          key: "sender",
          value: "init1h8lpl5qcs5k5nngxvdum5v20jnww2lckg3n2ta",
        },
        {
          index: true,
          key: "amount",
          value: "1000000uinit",
        },
        {
          index: true,
          key: "msg_index",
          value: "0",
        },
      ],
      type: "transfer",
    },
    {
      attributes: [
        {
          index: true,
          key: "sender",
          value: "init1h8lpl5qcs5k5nngxvdum5v20jnww2lckg3n2ta",
        },
        {
          index: true,
          key: "msg_index",
          value: "0",
        },
      ],
      type: "message",
    },
    {
      attributes: [
        {
          index: true,
          key: "action",
          value: "/cosmos.bank.v1beta1.MsgSend",
        },
        {
          index: true,
          key: "sender",
          value: "init1h8lpl5qcs5k5nngxvdum5v20jnww2lckg3n2ta",
        },
        {
          index: true,
          key: "module",
          value: "bank",
        },
        {
          index: true,
          key: "msg_index",
          value: "1",
        },
      ],
      type: "message",
    },
    {
      attributes: [
        {
          index: true,
          key: "sender",
          value: "0x1,0xb9fe1fd018852d49cd066379ba314f94dce57f16",
        },
        {
          index: true,
          key: "module_addr",
          value: "0x1",
        },
        {
          index: true,
          key: "module_name",
          value: "coin",
        },
        {
          index: true,
          key: "function_name",
          value: "sudo_transfer",
        },
        {
          index: true,
          key: "msg_index",
          value: "1",
        },
      ],
      type: "execute",
    },
    {
      attributes: [
        {
          index: true,
          key: "type_tag",
          value: "0x1::fungible_asset::WithdrawEvent",
        },
        {
          index: true,
          key: "data",
          value:
            '{"store_addr":"0xb3a18ed65a760faa12b9fa834f53ac6b413e05e416c29d14488aa45d76f15dd3","metadata_addr":"0x8e4733bdabcf7d4afc3d14f0dd46c9bf52fb0fce9e4b996c939e195b8bc891d9","amount":"1000000"}',
        },
        {
          index: true,
          key: "msg_index",
          value: "1",
        },
      ],
      type: "move",
    },
    {
      attributes: [
        {
          index: true,
          key: "type_tag",
          value: "0x1::fungible_asset::DepositEvent",
        },
        {
          index: true,
          key: "data",
          value:
            '{"store_addr":"0x47eb6bba5d4828067691d06dda5ecb9aa3e4ecb21713a560032d432d96ecdc0b","metadata_addr":"0x8e4733bdabcf7d4afc3d14f0dd46c9bf52fb0fce9e4b996c939e195b8bc891d9","amount":"1000000"}',
        },
        {
          index: true,
          key: "msg_index",
          value: "1",
        },
      ],
      type: "move",
    },
    {
      attributes: [
        {
          index: true,
          key: "spender",
          value: "init1h8lpl5qcs5k5nngxvdum5v20jnww2lckg3n2ta",
        },
        {
          index: true,
          key: "amount",
          value: "1000000uinit",
        },
        {
          index: true,
          key: "msg_index",
          value: "1",
        },
      ],
      type: "coin_spent",
    },
    {
      attributes: [
        {
          index: true,
          key: "receiver",
          value: "init1926svvgllca2lzr3lp98h29xshsztka6vua3wf",
        },
        {
          index: true,
          key: "amount",
          value: "1000000uinit",
        },
        {
          index: true,
          key: "msg_index",
          value: "1",
        },
      ],
      type: "coin_received",
    },
    {
      attributes: [
        {
          index: true,
          key: "recipient",
          value: "init1926svvgllca2lzr3lp98h29xshsztka6vua3wf",
        },
        {
          index: true,
          key: "sender",
          value: "init1h8lpl5qcs5k5nngxvdum5v20jnww2lckg3n2ta",
        },
        {
          index: true,
          key: "amount",
          value: "1000000uinit",
        },
        {
          index: true,
          key: "msg_index",
          value: "1",
        },
      ],
      type: "transfer",
    },
    {
      attributes: [
        {
          index: true,
          key: "sender",
          value: "init1h8lpl5qcs5k5nngxvdum5v20jnww2lckg3n2ta",
        },
        {
          index: true,
          key: "msg_index",
          value: "1",
        },
      ],
      type: "message",
    },
    {
      attributes: [
        {
          index: true,
          key: "action",
          value: "/cosmos.bank.v1beta1.MsgSend",
        },
        {
          index: true,
          key: "sender",
          value: "init1h8lpl5qcs5k5nngxvdum5v20jnww2lckg3n2ta",
        },
        {
          index: true,
          key: "module",
          value: "bank",
        },
        {
          index: true,
          key: "msg_index",
          value: "2",
        },
      ],
      type: "message",
    },
    {
      attributes: [
        {
          index: true,
          key: "sender",
          value: "0x1,0xb9fe1fd018852d49cd066379ba314f94dce57f16",
        },
        {
          index: true,
          key: "module_addr",
          value: "0x1",
        },
        {
          index: true,
          key: "module_name",
          value: "coin",
        },
        {
          index: true,
          key: "function_name",
          value: "sudo_transfer",
        },
        {
          index: true,
          key: "msg_index",
          value: "2",
        },
      ],
      type: "execute",
    },
    {
      attributes: [
        {
          index: true,
          key: "type_tag",
          value: "0x1::fungible_asset::WithdrawEvent",
        },
        {
          index: true,
          key: "data",
          value:
            '{"store_addr":"0xb3a18ed65a760faa12b9fa834f53ac6b413e05e416c29d14488aa45d76f15dd3","metadata_addr":"0x8e4733bdabcf7d4afc3d14f0dd46c9bf52fb0fce9e4b996c939e195b8bc891d9","amount":"1000000"}',
        },
        {
          index: true,
          key: "msg_index",
          value: "2",
        },
      ],
      type: "move",
    },
    {
      attributes: [
        {
          index: true,
          key: "type_tag",
          value: "0x1::fungible_asset::DepositEvent",
        },
        {
          index: true,
          key: "data",
          value:
            '{"store_addr":"0x47eb6bba5d4828067691d06dda5ecb9aa3e4ecb21713a560032d432d96ecdc0b","metadata_addr":"0x8e4733bdabcf7d4afc3d14f0dd46c9bf52fb0fce9e4b996c939e195b8bc891d9","amount":"1000000"}',
        },
        {
          index: true,
          key: "msg_index",
          value: "2",
        },
      ],
      type: "move",
    },
    {
      attributes: [
        {
          index: true,
          key: "spender",
          value: "init1h8lpl5qcs5k5nngxvdum5v20jnww2lckg3n2ta",
        },
        {
          index: true,
          key: "amount",
          value: "1000000uinit",
        },
        {
          index: true,
          key: "msg_index",
          value: "2",
        },
      ],
      type: "coin_spent",
    },
    {
      attributes: [
        {
          index: true,
          key: "receiver",
          value: "init1926svvgllca2lzr3lp98h29xshsztka6vua3wf",
        },
        {
          index: true,
          key: "amount",
          value: "1000000uinit",
        },
        {
          index: true,
          key: "msg_index",
          value: "2",
        },
      ],
      type: "coin_received",
    },
    {
      attributes: [
        {
          index: true,
          key: "recipient",
          value: "init1926svvgllca2lzr3lp98h29xshsztka6vua3wf",
        },
        {
          index: true,
          key: "sender",
          value: "init1h8lpl5qcs5k5nngxvdum5v20jnww2lckg3n2ta",
        },
        {
          index: true,
          key: "amount",
          value: "1000000uinit",
        },
        {
          index: true,
          key: "msg_index",
          value: "2",
        },
      ],
      type: "transfer",
    },
    {
      attributes: [
        {
          index: true,
          key: "sender",
          value: "init1h8lpl5qcs5k5nngxvdum5v20jnww2lckg3n2ta",
        },
        {
          index: true,
          key: "msg_index",
          value: "2",
        },
      ],
      type: "message",
    },
    {
      attributes: [
        {
          index: true,
          key: "action",
          value: "/cosmos.bank.v1beta1.MsgSend",
        },
        {
          index: true,
          key: "sender",
          value: "init1h8lpl5qcs5k5nngxvdum5v20jnww2lckg3n2ta",
        },
        {
          index: true,
          key: "module",
          value: "bank",
        },
        {
          index: true,
          key: "msg_index",
          value: "3",
        },
      ],
      type: "message",
    },
    {
      attributes: [
        {
          index: true,
          key: "sender",
          value: "0x1,0xb9fe1fd018852d49cd066379ba314f94dce57f16",
        },
        {
          index: true,
          key: "module_addr",
          value: "0x1",
        },
        {
          index: true,
          key: "module_name",
          value: "coin",
        },
        {
          index: true,
          key: "function_name",
          value: "sudo_transfer",
        },
        {
          index: true,
          key: "msg_index",
          value: "3",
        },
      ],
      type: "execute",
    },
    {
      attributes: [
        {
          index: true,
          key: "type_tag",
          value: "0x1::fungible_asset::WithdrawEvent",
        },
        {
          index: true,
          key: "data",
          value:
            '{"store_addr":"0xb3a18ed65a760faa12b9fa834f53ac6b413e05e416c29d14488aa45d76f15dd3","metadata_addr":"0x8e4733bdabcf7d4afc3d14f0dd46c9bf52fb0fce9e4b996c939e195b8bc891d9","amount":"1000000"}',
        },
        {
          index: true,
          key: "msg_index",
          value: "3",
        },
      ],
      type: "move",
    },
    {
      attributes: [
        {
          index: true,
          key: "type_tag",
          value: "0x1::fungible_asset::DepositEvent",
        },
        {
          index: true,
          key: "data",
          value:
            '{"store_addr":"0x47eb6bba5d4828067691d06dda5ecb9aa3e4ecb21713a560032d432d96ecdc0b","metadata_addr":"0x8e4733bdabcf7d4afc3d14f0dd46c9bf52fb0fce9e4b996c939e195b8bc891d9","amount":"1000000"}',
        },
        {
          index: true,
          key: "msg_index",
          value: "3",
        },
      ],
      type: "move",
    },
    {
      attributes: [
        {
          index: true,
          key: "spender",
          value: "init1h8lpl5qcs5k5nngxvdum5v20jnww2lckg3n2ta",
        },
        {
          index: true,
          key: "amount",
          value: "1000000uinit",
        },
        {
          index: true,
          key: "msg_index",
          value: "3",
        },
      ],
      type: "coin_spent",
    },
    {
      attributes: [
        {
          index: true,
          key: "receiver",
          value: "init1926svvgllca2lzr3lp98h29xshsztka6vua3wf",
        },
        {
          index: true,
          key: "amount",
          value: "1000000uinit",
        },
        {
          index: true,
          key: "msg_index",
          value: "3",
        },
      ],
      type: "coin_received",
    },
    {
      attributes: [
        {
          index: true,
          key: "recipient",
          value: "init1926svvgllca2lzr3lp98h29xshsztka6vua3wf",
        },
        {
          index: true,
          key: "sender",
          value: "init1h8lpl5qcs5k5nngxvdum5v20jnww2lckg3n2ta",
        },
        {
          index: true,
          key: "amount",
          value: "1000000uinit",
        },
        {
          index: true,
          key: "msg_index",
          value: "3",
        },
      ],
      type: "transfer",
    },
    {
      attributes: [
        {
          index: true,
          key: "sender",
          value: "init1h8lpl5qcs5k5nngxvdum5v20jnww2lckg3n2ta",
        },
        {
          index: true,
          key: "msg_index",
          value: "3",
        },
      ],
      type: "message",
    },
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
            denom: "uinit",
          },
        ],
        gas_limit: "500000",
        granter: "",
        payer: "",
      },
      signer_infos: [
        {
          mode_info: {
            single: {
              mode: "SIGN_MODE_DIRECT",
            },
          },
          public_key: {
            "@type": "/cosmos.crypto.secp256k1.PubKey",
            key: "A5vqpm4KH4Qz7T2DC31p3nZ8nK5M6ZrnDa4PcE6zg/Y0",
          },
          sequence: "312",
        },
      ],
      tip: null,
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
              denom: "uinit",
            },
          ],
          from_address: "init1h8lpl5qcs5k5nngxvdum5v20jnww2lckg3n2ta",
          to_address: "init1926svvgllca2lzr3lp98h29xshsztka6vua3wf",
        },
        {
          "@type": "/cosmos.bank.v1beta1.MsgSend",
          amount: [
            {
              amount: "1000000",
              denom: "uinit",
            },
          ],
          from_address: "init1h8lpl5qcs5k5nngxvdum5v20jnww2lckg3n2ta",
          to_address: "init1926svvgllca2lzr3lp98h29xshsztka6vua3wf",
        },
        {
          "@type": "/cosmos.bank.v1beta1.MsgSend",
          amount: [
            {
              amount: "1000000",
              denom: "uinit",
            },
          ],
          from_address: "init1h8lpl5qcs5k5nngxvdum5v20jnww2lckg3n2ta",
          to_address: "init1926svvgllca2lzr3lp98h29xshsztka6vua3wf",
        },
        {
          "@type": "/cosmos.bank.v1beta1.MsgSend",
          amount: [
            {
              amount: "1000000",
              denom: "uinit",
            },
          ],
          from_address: "init1h8lpl5qcs5k5nngxvdum5v20jnww2lckg3n2ta",
          to_address: "init1926svvgllca2lzr3lp98h29xshsztka6vua3wf",
        },
      ],
      non_critical_extension_options: [],
      timeout_height: "0",
    },
    signatures: [
      "H1I6m9v7co/NmfrrQogEbZyY6+x7htB+jpNCAu4g7JgvBwPIrBbl6AEMN4SlOiyXgc59VNrawN1FDyaWBfXNxQ==",
    ],
  },
  txhash: "90EADB7E294A82012189E91ACA18578CD39F45EE12D9DB96F87FD72EB25011BE",
};
