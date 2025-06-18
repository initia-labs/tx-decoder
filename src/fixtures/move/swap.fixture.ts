export const mockMsgDexSwap = {
  code: 0,
  codespace: "",
  data: "12240A222F696E697469612E6D6F76652E76312E4D736745786563757465526573706F6E7365",
  events: [
    {
      attributes: [
        {
          index: true,
          key: "sender",
          value: "0x1,0x8a79728e80cf68ebea6f0b3477f89a5406bdfd8a",
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
            '{"store_addr":"0xed98f86bdc9213aba7aa97b99d9def9d5dee9cb450863b0098d76ebeac45edb0","metadata_addr":"0x8e4733bdabcf7d4afc3d14f0dd46c9bf52fb0fce9e4b996c939e195b8bc891d9","amount":"4282"}',
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
            '{"store_addr":"0x66a8cb0bfb991610dcffb8a6543ac0887c7c5405b8f985ebed6d628fe50c4686","metadata_addr":"0x8e4733bdabcf7d4afc3d14f0dd46c9bf52fb0fce9e4b996c939e195b8bc891d9","amount":"4282"}',
        },
      ],
      type: "move",
    },
    {
      attributes: [
        {
          index: true,
          key: "spender",
          value: "init13fuh9r5qea5wh6n0pv6807y62srtmlv246mqgv",
        },
        {
          index: true,
          key: "amount",
          value: "4282uinit",
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
          value: "4282uinit",
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
          value: "init13fuh9r5qea5wh6n0pv6807y62srtmlv246mqgv",
        },
        {
          index: true,
          key: "amount",
          value: "4282uinit",
        },
      ],
      type: "transfer",
    },
    {
      attributes: [
        {
          index: true,
          key: "sender",
          value: "init13fuh9r5qea5wh6n0pv6807y62srtmlv246mqgv",
        },
      ],
      type: "message",
    },
    {
      attributes: [
        {
          index: true,
          key: "fee",
          value: "4282uinit",
        },
        {
          index: true,
          key: "fee_payer",
          value: "init13fuh9r5qea5wh6n0pv6807y62srtmlv246mqgv",
        },
      ],
      type: "tx",
    },
    {
      attributes: [
        {
          index: true,
          key: "acc_seq",
          value: "init13fuh9r5qea5wh6n0pv6807y62srtmlv246mqgv/31659",
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
            "P1Q+RerAw7SBdXXq3iXkLOgPb80dOjLbtsVFIugEw7YR5sL7KIUQDVH5NRdLwdf8NJPvsbaqpev0bvEYm8LtTQ==",
        },
      ],
      type: "tx",
    },
    {
      attributes: [
        {
          index: true,
          key: "action",
          value: "/initia.move.v1.MsgExecute",
        },
        {
          index: true,
          key: "sender",
          value: "init13fuh9r5qea5wh6n0pv6807y62srtmlv246mqgv",
        },
        {
          index: true,
          key: "module",
          value: "move",
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
          value: "0x8a79728e80cf68ebea6f0b3477f89a5406bdfd8a",
        },
        {
          index: true,
          key: "module_addr",
          value: "0x1",
        },
        {
          index: true,
          key: "module_name",
          value: "dex",
        },
        {
          index: true,
          key: "function_name",
          value: "swap_script",
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
            '{"store_addr":"0xed98f86bdc9213aba7aa97b99d9def9d5dee9cb450863b0098d76ebeac45edb0","metadata_addr":"0x8e4733bdabcf7d4afc3d14f0dd46c9bf52fb0fce9e4b996c939e195b8bc891d9","amount":"7100000000"}',
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
            '{"store_addr":"0xd8d20f9cd225d52f126bd3f973cbb83de3212b1b3dae547f13dd01f593d537b3","metadata_addr":"0x8e4733bdabcf7d4afc3d14f0dd46c9bf52fb0fce9e4b996c939e195b8bc891d9","amount":"7100000000"}',
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
            '{"store_addr":"0x39e454a8b7b1b71b2c0c27bf4ce1fbe234652f2c40f1fc209b023beaa7ece013","metadata_addr":"0xe0e9394b24e53775d6af87934ac02d73536ad58b7894f6ccff3f5e7c0d548e55","amount":"3563468757"}',
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
          value: "0x1::dex::SwapEvent",
        },
        {
          index: true,
          key: "data",
          value:
            '{"offer_coin":"0x8e4733bdabcf7d4afc3d14f0dd46c9bf52fb0fce9e4b996c939e195b8bc891d9","return_coin":"0xe0e9394b24e53775d6af87934ac02d73536ad58b7894f6ccff3f5e7c0d548e55","liquidity_token":"0x543b35a39cfadad3da3c23249c474455d15efd2f94f849473226dee8a3c7a9e1","offer_amount":"7100000000","return_amount":"3563468757","fee_amount":"21300000"}',
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
            '{"store_addr":"0xbc1a8cf487e5c788c88b0584354fffb3a9fdfc944aa6902a5fd437e6a9cef0d5","metadata_addr":"0xe0e9394b24e53775d6af87934ac02d73536ad58b7894f6ccff3f5e7c0d548e55","amount":"3563468757"}',
        },
        {
          index: true,
          key: "msg_index",
          value: "0",
        },
      ],
      type: "move",
    },
  ],
  gas_used: "185159",
  gas_wanted: "285433",
  height: "3965068",
  info: "",
  logs: [],
  raw_log: "",
  timestamp: "2025-06-18T03:03:12Z",
  tx: {
    "@type": "/cosmos.tx.v1beta1.Tx",
    auth_info: {
      fee: {
        amount: [
          {
            amount: "4282",
            denom: "uinit",
          },
        ],
        gas_limit: "285433",
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
            "@type": "/initia.crypto.v1beta1.ethsecp256k1.PubKey",
            key: "A4d0hxq+JGPbGLv5QURYZNQfEbyc0ljjdkci9x3wMk00",
          },
          sequence: "31659",
        },
      ],
      tip: null,
    },
    body: {
      extension_options: [],
      memo: "",
      messages: [
        {
          "@type": "/initia.move.v1.MsgExecute",
          args: [
            "VDs1o5z62tPaPCMknEdEVdFe/S+U+ElHMibe6KPHqeE=",
            "jkczvavPfUr8PRTw3UbJv1L7D86eS5lsk54ZW4vIkdk=",
            "AGcxpwEAAAA=",
            "AWnWNdQAAAAA",
          ],
          function_name: "swap_script",
          module_address: "0x1",
          module_name: "dex",
          sender: "init13fuh9r5qea5wh6n0pv6807y62srtmlv246mqgv",
          type_args: [],
        },
      ],
      non_critical_extension_options: [],
      timeout_height: "0",
    },
    signatures: [
      "P1Q+RerAw7SBdXXq3iXkLOgPb80dOjLbtsVFIugEw7YR5sL7KIUQDVH5NRdLwdf8NJPvsbaqpev0bvEYm8LtTQ==",
    ],
  },
  txhash: "DD29EE2D167676BE9445FC715B5347D6E52D326329B38157825B42FF438AD94E",
};
