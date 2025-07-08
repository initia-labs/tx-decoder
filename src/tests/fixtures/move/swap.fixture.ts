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

export const mockMsgStableSwap = {
  code: 0,
  codespace: "",
  data: "12240A222F696E697469612E6D6F76652E76312E4D736745786563757465526573706F6E7365",
  events: [
    {
      attributes: [
        {
          index: true,
          key: "sender",
          value: "0x1,0x473d3a2005499301dc353afa9d0c9c5980b5188c",
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
            '{"store_addr":"0x94ce2e092b254fe5bc5c055c9f1ed20438e5403fe700ef1a85fc41434bdf1b78","metadata_addr":"0x8e4733bdabcf7d4afc3d14f0dd46c9bf52fb0fce9e4b996c939e195b8bc891d9","amount":"4578"}',
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
            '{"store_addr":"0x66a8cb0bfb991610dcffb8a6543ac0887c7c5405b8f985ebed6d628fe50c4686","metadata_addr":"0x8e4733bdabcf7d4afc3d14f0dd46c9bf52fb0fce9e4b996c939e195b8bc891d9","amount":"4578"}',
        },
      ],
      type: "move",
    },
    {
      attributes: [
        {
          index: true,
          key: "spender",
          value: "init1gu7n5gq9fxfsrhp48taf6ryutxqt2xyvedujpk",
        },
        {
          index: true,
          key: "amount",
          value: "4578uinit",
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
          value: "4578uinit",
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
          value: "init1gu7n5gq9fxfsrhp48taf6ryutxqt2xyvedujpk",
        },
        {
          index: true,
          key: "amount",
          value: "4578uinit",
        },
      ],
      type: "transfer",
    },
    {
      attributes: [
        {
          index: true,
          key: "sender",
          value: "init1gu7n5gq9fxfsrhp48taf6ryutxqt2xyvedujpk",
        },
      ],
      type: "message",
    },
    {
      attributes: [
        {
          index: true,
          key: "fee",
          value: "4578uinit",
        },
        {
          index: true,
          key: "fee_payer",
          value: "init1gu7n5gq9fxfsrhp48taf6ryutxqt2xyvedujpk",
        },
      ],
      type: "tx",
    },
    {
      attributes: [
        {
          index: true,
          key: "acc_seq",
          value: "init1gu7n5gq9fxfsrhp48taf6ryutxqt2xyvedujpk/251",
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
            "l7Q9bzEXKHDKo3dm6CbfE6Y3K++J+oVLJMcUaSlbtUY0R7GVRCq0rccmOABAbOMOnMfG0XstEhQV+DXQLtnHAA==",
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
          value: "init1gu7n5gq9fxfsrhp48taf6ryutxqt2xyvedujpk",
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
          value: "0x473d3a2005499301dc353afa9d0c9c5980b5188c",
        },
        {
          index: true,
          key: "module_addr",
          value: "0x1",
        },
        {
          index: true,
          key: "module_name",
          value: "stableswap",
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
            '{"store_addr":"0x6692d3dbb03407110ce655011638490b88365216b5b0be47b28a054e75e71919","metadata_addr":"0x47111f2a0a2e58e3ec0837938fe97b5cae5cf4872505d9c03e077422fea4b162","amount":"1000000000"}',
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
            '{"store_addr":"0x88ca3d6a30433857b7709b1201c6c665f62e3b96701ed555adcaa631b976e364","metadata_addr":"0x47111f2a0a2e58e3ec0837938fe97b5cae5cf4872505d9c03e077422fea4b162","amount":"1000000000"}',
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
            '{"store_addr":"0x1a7b036ef7b20a137c7029e879b775ead4a65d935506808cc654a7987233e495","metadata_addr":"0x8e4733bdabcf7d4afc3d14f0dd46c9bf52fb0fce9e4b996c939e195b8bc891d9","amount":"1016957925"}',
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
          value: "0x1::stableswap::SwapEvent",
        },
        {
          index: true,
          key: "data",
          value:
            '{"offer_coin":"0x47111f2a0a2e58e3ec0837938fe97b5cae5cf4872505d9c03e077422fea4b162","return_coin":"0x8e4733bdabcf7d4afc3d14f0dd46c9bf52fb0fce9e4b996c939e195b8bc891d9","liquidity_token":"0x5ac318c3479d518f7b9baf80a9c9533475434b645316d266a12e66a349a9f2ae","offer_amount":"1000000000","return_amount":"1016957925","fee_amount":"305179"}',
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
            '{"store_addr":"0x94ce2e092b254fe5bc5c055c9f1ed20438e5403fe700ef1a85fc41434bdf1b78","metadata_addr":"0x8e4733bdabcf7d4afc3d14f0dd46c9bf52fb0fce9e4b996c939e195b8bc891d9","amount":"1016957925"}',
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
  gas_used: "212983",
  gas_wanted: "305158",
  height: "4014431",
  info: "",
  logs: [],
  raw_log: "",
  timestamp: "2025-06-19T09:42:23Z",
  tx: {
    "@type": "/cosmos.tx.v1beta1.Tx",
    auth_info: {
      fee: {
        amount: [
          {
            amount: "4578",
            denom: "uinit",
          },
        ],
        gas_limit: "305158",
        granter: "",
        payer: "",
      },
      signer_infos: [
        {
          mode_info: {
            single: {
              mode: "SIGN_MODE_EIP_191",
            },
          },
          public_key: {
            "@type": "/initia.crypto.v1beta1.ethsecp256k1.PubKey",
            key: "ArxmoKCjmkn5FfzZOamDf7DQ7+EIu9bCmbDB8MLCGkSd",
          },
          sequence: "251",
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
            "WsMYw0edUY97m6+AqclTNHVDS2RTFtJmoS5mo0mp8q4=",
            "RxEfKgouWOPsCDeTj+l7XK5c9IclBdnAPgd0Iv6ksWI=",
            "jkczvavPfUr8PRTw3UbJv1L7D86eS5lsk54ZW4vIkdk=",
            "AMqaOwAAAAA=",
            "AW/1TzwAAAAA",
          ],
          function_name: "swap_script",
          module_address: "0x1",
          module_name: "stableswap",
          sender: "init1gu7n5gq9fxfsrhp48taf6ryutxqt2xyvedujpk",
          type_args: [],
        },
      ],
      non_critical_extension_options: [],
      timeout_height: "0",
    },
    signatures: [
      "l7Q9bzEXKHDKo3dm6CbfE6Y3K++J+oVLJMcUaSlbtUY0R7GVRCq0rccmOABAbOMOnMfG0XstEhQV+DXQLtnHAA==",
    ],
  },
  txhash: "D04651CBA89740800425C02DE1996C6EBEE0C5133F8190ACC75A34DD0EBB6D68",
};

export const mockApiResponsesForDexSwap = {
  GET: {
    "/initia/move/v1/accounts/0x39e454a8b7b1b71b2c0c27bf4ce1fbe234652f2c40f1fc209b023beaa7ece013/resources":
      {
        pagination: { next_key: null, total: "0" },
        resources: [
          {
            address:
              "0x39e454a8b7b1b71b2c0c27bf4ce1fbe234652f2c40f1fc209b023beaa7ece013",
            move_resource:
              '{"type":"0x1::object::ObjectCore","data":{"allow_ungated_transfer":false,"owner":"0x543b35a39cfadad3da3c23249c474455d15efd2f94f849473226dee8a3c7a9e1","version":"1"}}',
            raw_bytes:
              "VDs1o5z62tPaPCMknEdEVdFe/S+U+ElHMibe6KPHqeEAAQAAAAAAAAA=",
            struct_tag: "0x1::object::ObjectCore",
          },
          {
            address:
              "0x39e454a8b7b1b71b2c0c27bf4ce1fbe234652f2c40f1fc209b023beaa7ece013",
            move_resource:
              '{"type":"0x1::fungible_asset::FungibleStore","data":{"balance":"2573412691216","frozen":false,"metadata":{"inner":"0xe0e9394b24e53775d6af87934ac02d73536ad58b7894f6ccff3f5e7c0d548e55"}}}',
            raw_bytes:
              "4Ok5SyTlN3XWr4eTSsAtc1Nq1Yt4lPbM/z9efA1UjlUQbVkrVwIAAAA=",
            struct_tag: "0x1::fungible_asset::FungibleStore",
          },
        ],
      },
    "/initia/move/v1/accounts/0xbc1a8cf487e5c788c88b0584354fffb3a9fdfc944aa6902a5fd437e6a9cef0d5/resources":
      {
        pagination: { next_key: null, total: "0" },
        resources: [
          {
            address:
              "0xbc1a8cf487e5c788c88b0584354fffb3a9fdfc944aa6902a5fd437e6a9cef0d5",
            move_resource:
              '{"type":"0x1::object::ObjectCore","data":{"allow_ungated_transfer":false,"owner":"0x8a79728e80cf68ebea6f0b3477f89a5406bdfd8a","version":"1"}}',
            raw_bytes:
              "AAAAAAAAAAAAAAAAinlyjoDPaOvqbws0d/iaVAa9/YoAAQAAAAAAAAA=",
            struct_tag: "0x1::object::ObjectCore",
          },
          {
            address:
              "0xbc1a8cf487e5c788c88b0584354fffb3a9fdfc944aa6902a5fd437e6a9cef0d5",
            move_resource:
              '{"type":"0x1::fungible_asset::FungibleStore","data":{"balance":"40540184537","frozen":false,"metadata":{"inner":"0xe0e9394b24e53775d6af87934ac02d73536ad58b7894f6ccff3f5e7c0d548e55"}}}',
            raw_bytes:
              "4Ok5SyTlN3XWr4eTSsAtc1Nq1Yt4lPbM/z9efA1UjlXZH2JwCQAAAAA=",
            struct_tag: "0x1::fungible_asset::FungibleStore",
          },
        ],
      },
    "/initia/move/v1/accounts/0xd8d20f9cd225d52f126bd3f973cbb83de3212b1b3dae547f13dd01f593d537b3/resources":
      {
        pagination: { next_key: null, total: "0" },
        resources: [
          {
            address:
              "0xd8d20f9cd225d52f126bd3f973cbb83de3212b1b3dae547f13dd01f593d537b3",
            move_resource:
              '{"type":"0x1::object::ObjectCore","data":{"allow_ungated_transfer":false,"owner":"0x543b35a39cfadad3da3c23249c474455d15efd2f94f849473226dee8a3c7a9e1","version":"1"}}',
            raw_bytes:
              "VDs1o5z62tPaPCMknEdEVdFe/S+U+ElHMibe6KPHqeEAAQAAAAAAAAA=",
            struct_tag: "0x1::object::ObjectCore",
          },
          {
            address:
              "0xd8d20f9cd225d52f126bd3f973cbb83de3212b1b3dae547f13dd01f593d537b3",
            move_resource:
              '{"type":"0x1::fungible_asset::FungibleStore","data":{"balance":"24962858438859","frozen":false,"metadata":{"inner":"0x8e4733bdabcf7d4afc3d14f0dd46c9bf52fb0fce9e4b996c939e195b8bc891d9"}}}',
            raw_bytes:
              "jkczvavPfUr8PRTw3UbJv1L7D86eS5lsk54ZW4vIkdnLUE8etBYAAAA=",
            struct_tag: "0x1::fungible_asset::FungibleStore",
          },
        ],
      },
    "/initia/move/v1/accounts/0xed98f86bdc9213aba7aa97b99d9def9d5dee9cb450863b0098d76ebeac45edb0/resources":
      {
        pagination: { next_key: null, total: "0" },
        resources: [
          {
            address:
              "0xed98f86bdc9213aba7aa97b99d9def9d5dee9cb450863b0098d76ebeac45edb0",
            move_resource:
              '{"type":"0x1::object::ObjectCore","data":{"allow_ungated_transfer":false,"owner":"0x8a79728e80cf68ebea6f0b3477f89a5406bdfd8a","version":"1"}}',
            raw_bytes:
              "AAAAAAAAAAAAAAAAinlyjoDPaOvqbws0d/iaVAa9/YoAAQAAAAAAAAA=",
            struct_tag: "0x1::object::ObjectCore",
          },
          {
            address:
              "0xed98f86bdc9213aba7aa97b99d9def9d5dee9cb450863b0098d76ebeac45edb0",
            move_resource:
              '{"type":"0x1::fungible_asset::FungibleStore","data":{"balance":"50605923144","frozen":false,"metadata":{"inner":"0x8e4733bdabcf7d4afc3d14f0dd46c9bf52fb0fce9e4b996c939e195b8bc891d9"}}}',
            raw_bytes:
              "jkczvavPfUr8PRTw3UbJv1L7D86eS5lsk54ZW4vIkdlIG1nICwAAAAA=",
            struct_tag: "0x1::fungible_asset::FungibleStore",
          },
        ],
      },
    "/initia/move/v1/denom?metadata=0x8e4733bdabcf7d4afc3d14f0dd46c9bf52fb0fce9e4b996c939e195b8bc891d9":
      {
        denom: "uinit",
      },
    "/initia/move/v1/denom?metadata=0xe0e9394b24e53775d6af87934ac02d73536ad58b7894f6ccff3f5e7c0d548e55":
      {
        denom:
          "ibc/6490A7EAB61059BFC1CDDEB05917DD70BDF3A611654162A1A47DB930D40D8AF4",
      },
  },
  POST: {},
};

export const mockApiResponsesForStableSwap = {
  GET: {
    "/initia/move/v1/accounts/0x1a7b036ef7b20a137c7029e879b775ead4a65d935506808cc654a7987233e495/resources":
      {
        pagination: { next_key: null, total: "0" },
        resources: [
          {
            address:
              "0x1a7b036ef7b20a137c7029e879b775ead4a65d935506808cc654a7987233e495",
            move_resource:
              '{"type":"0x1::object::ObjectCore","data":{"allow_ungated_transfer":false,"owner":"0x5ac318c3479d518f7b9baf80a9c9533475434b645316d266a12e66a349a9f2ae","version":"1"}}',
            raw_bytes:
              "WsMYw0edUY97m6+AqclTNHVDS2RTFtJmoS5mo0mp8q4AAQAAAAAAAAA=",
            struct_tag: "0x1::object::ObjectCore",
          },
          {
            address:
              "0x1a7b036ef7b20a137c7029e879b775ead4a65d935506808cc654a7987233e495",
            move_resource:
              '{"type":"0x1::fungible_asset::FungibleStore","data":{"balance":"111746127618","frozen":false,"metadata":{"inner":"0x8e4733bdabcf7d4afc3d14f0dd46c9bf52fb0fce9e4b996c939e195b8bc891d9"}}}',
            raw_bytes:
              "jkczvavPfUr8PRTw3UbJv1L7D86eS5lsk54ZW4vIkdkCl5YEGgAAAAA=",
            struct_tag: "0x1::fungible_asset::FungibleStore",
          },
        ],
      },
    "/initia/move/v1/accounts/0x88ca3d6a30433857b7709b1201c6c665f62e3b96701ed555adcaa631b976e364/resources":
      {
        pagination: { next_key: null, total: "0" },
        resources: [
          {
            address:
              "0x88ca3d6a30433857b7709b1201c6c665f62e3b96701ed555adcaa631b976e364",
            move_resource:
              '{"type":"0x1::object::ObjectCore","data":{"allow_ungated_transfer":false,"owner":"0x5ac318c3479d518f7b9baf80a9c9533475434b645316d266a12e66a349a9f2ae","version":"1"}}',
            raw_bytes:
              "WsMYw0edUY97m6+AqclTNHVDS2RTFtJmoS5mo0mp8q4AAQAAAAAAAAA=",
            struct_tag: "0x1::object::ObjectCore",
          },
          {
            address:
              "0x88ca3d6a30433857b7709b1201c6c665f62e3b96701ed555adcaa631b976e364",
            move_resource:
              '{"type":"0x1::fungible_asset::FungibleStore","data":{"balance":"84762424703","frozen":false,"metadata":{"inner":"0x47111f2a0a2e58e3ec0837938fe97b5cae5cf4872505d9c03e077422fea4b162"}}}',
            raw_bytes:
              "RxEfKgouWOPsCDeTj+l7XK5c9IclBdnAPgd0Iv6ksWJ/9Tu8EwAAAAA=",
            struct_tag: "0x1::fungible_asset::FungibleStore",
          },
        ],
      },
    "/initia/move/v1/accounts/0x94ce2e092b254fe5bc5c055c9f1ed20438e5403fe700ef1a85fc41434bdf1b78/resources":
      {
        pagination: { next_key: null, total: "0" },
        resources: [
          {
            address:
              "0x94ce2e092b254fe5bc5c055c9f1ed20438e5403fe700ef1a85fc41434bdf1b78",
            move_resource:
              '{"type":"0x1::object::ObjectCore","data":{"allow_ungated_transfer":false,"owner":"0x473d3a2005499301dc353afa9d0c9c5980b5188c","version":"1"}}',
            raw_bytes:
              "AAAAAAAAAAAAAAAARz06IAVJkwHcNTr6nQycWYC1GIwAAQAAAAAAAAA=",
            struct_tag: "0x1::object::ObjectCore",
          },
          {
            address:
              "0x94ce2e092b254fe5bc5c055c9f1ed20438e5403fe700ef1a85fc41434bdf1b78",
            move_resource:
              '{"type":"0x1::fungible_asset::FungibleStore","data":{"balance":"49479353","frozen":false,"metadata":{"inner":"0x8e4733bdabcf7d4afc3d14f0dd46c9bf52fb0fce9e4b996c939e195b8bc891d9"}}}',
            raw_bytes:
              "jkczvavPfUr8PRTw3UbJv1L7D86eS5lsk54ZW4vIkdm5/vICAAAAAAA=",
            struct_tag: "0x1::fungible_asset::FungibleStore",
          },
        ],
      },
    "/initia/move/v1/accounts/0x6692d3dbb03407110ce655011638490b88365216b5b0be47b28a054e75e71919/resources":
      {
        pagination: { next_key: null, total: "0" },
        resources: [
          {
            address:
              "0x6692d3dbb03407110ce655011638490b88365216b5b0be47b28a054e75e71919",
            move_resource:
              '{"type":"0x1::object::ObjectCore","data":{"allow_ungated_transfer":false,"owner":"0x473d3a2005499301dc353afa9d0c9c5980b5188c","version":"1"}}',
            raw_bytes:
              "AAAAAAAAAAAAAAAARz06IAVJkwHcNTr6nQycWYC1GIwAAQAAAAAAAAA=",
            struct_tag: "0x1::object::ObjectCore",
          },
          {
            address:
              "0x6692d3dbb03407110ce655011638490b88365216b5b0be47b28a054e75e71919",
            move_resource:
              '{"type":"0x1::fungible_asset::FungibleStore","data":{"balance":"0","frozen":false,"metadata":{"inner":"0x47111f2a0a2e58e3ec0837938fe97b5cae5cf4872505d9c03e077422fea4b162"}}}',
            raw_bytes:
              "RxEfKgouWOPsCDeTj+l7XK5c9IclBdnAPgd0Iv6ksWIAAAAAAAAAAAA=",
            struct_tag: "0x1::fungible_asset::FungibleStore",
          },
        ],
      },
    "/initia/move/v1/denom?metadata=0x8e4733bdabcf7d4afc3d14f0dd46c9bf52fb0fce9e4b996c939e195b8bc891d9":
      {
        denom: "uinit",
      },
    "/initia/move/v1/denom?metadata=0x47111f2a0a2e58e3ec0837938fe97b5cae5cf4872505d9c03e077422fea4b162":
      {
        denom:
          "ibc/39B55F22F15FB09189045A993817CDF0D388D3FF8773B2E22B6DE7B222636EEA",
      },
  },
  POST: {},
};
