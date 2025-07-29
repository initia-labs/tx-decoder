export const mockMsgWithdrawLiquidity = {
  code: 0,
  codespace: "",
  data: "12240A222F696E697469612E6D6F76652E76312E4D736745786563757465526573706F6E7365",
  events: [
    {
      attributes: [
        {
          index: true,
          key: "sender",
          value: "0x1,0xa48b383a1d5ce0f2a663e69ce2ca5f921fe19fd6",
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
            '{"store_addr":"0x31a358ffa5db08ee9d97b9837247eb1cbb66c1943b323d074d3e241d358edc1e","metadata_addr":"0x8e4733bdabcf7d4afc3d14f0dd46c9bf52fb0fce9e4b996c939e195b8bc891d9","amount":"4300"}',
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
            '{"store_addr":"0x66a8cb0bfb991610dcffb8a6543ac0887c7c5405b8f985ebed6d628fe50c4686","metadata_addr":"0x8e4733bdabcf7d4afc3d14f0dd46c9bf52fb0fce9e4b996c939e195b8bc891d9","amount":"4300"}',
        },
      ],
      type: "move",
    },
    {
      attributes: [
        {
          index: true,
          key: "spender",
          value: "init15j9nswsatns09fnru6ww9jjljg07r87kr56mdc",
        },
        {
          index: true,
          key: "amount",
          value: "4300uinit",
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
          value: "4300uinit",
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
          value: "init15j9nswsatns09fnru6ww9jjljg07r87kr56mdc",
        },
        {
          index: true,
          key: "amount",
          value: "4300uinit",
        },
      ],
      type: "transfer",
    },
    {
      attributes: [
        {
          index: true,
          key: "sender",
          value: "init15j9nswsatns09fnru6ww9jjljg07r87kr56mdc",
        },
      ],
      type: "message",
    },
    {
      attributes: [
        {
          index: true,
          key: "fee",
          value: "4300uinit",
        },
        {
          index: true,
          key: "fee_payer",
          value: "init15j9nswsatns09fnru6ww9jjljg07r87kr56mdc",
        },
      ],
      type: "tx",
    },
    {
      attributes: [
        {
          index: true,
          key: "acc_seq",
          value: "init15j9nswsatns09fnru6ww9jjljg07r87kr56mdc/326",
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
            "bafAJVMJSuoZOf1GIK/to9fGk+RD8cJuxqmHxGeRsl1bxb9cQ4g0ncSbhOMsitofVq8y7cYwf6Tg+hFijXkcyw==",
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
          value: "init15j9nswsatns09fnru6ww9jjljg07r87kr56mdc",
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
          value: "0xa48b383a1d5ce0f2a663e69ce2ca5f921fe19fd6",
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
          value: "withdraw_liquidity_script",
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
            '{"store_addr":"0x4f73485a3e840d0d3baa691a6432e1f31c91e4f97cdc0dff465ab7d28e75379e","metadata_addr":"0x543b35a39cfadad3da3c23249c474455d15efd2f94f849473226dee8a3c7a9e1","amount":"1000000"}',
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
          value: "0x1::fungible_asset::BurnEvent",
        },
        {
          index: true,
          key: "data",
          value:
            '{"metadata_addr":"0x543b35a39cfadad3da3c23249c474455d15efd2f94f849473226dee8a3c7a9e1","amount":"1000000"}',
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
          value: "0x1::dex::WithdrawEvent",
        },
        {
          index: true,
          key: "data",
          value:
            '{"coin_a":"0xe0e9394b24e53775d6af87934ac02d73536ad58b7894f6ccff3f5e7c0d548e55","coin_b":"0x8e4733bdabcf7d4afc3d14f0dd46c9bf52fb0fce9e4b996c939e195b8bc891d9","liquidity_token":"0x543b35a39cfadad3da3c23249c474455d15efd2f94f849473226dee8a3c7a9e1","coin_a_amount":"118630","coin_b_amount":"1006848","liquidity":"1000000"}',
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
            '{"store_addr":"0x39e454a8b7b1b71b2c0c27bf4ce1fbe234652f2c40f1fc209b023beaa7ece013","metadata_addr":"0xe0e9394b24e53775d6af87934ac02d73536ad58b7894f6ccff3f5e7c0d548e55","amount":"118630"}',
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
            '{"store_addr":"0xd8d20f9cd225d52f126bd3f973cbb83de3212b1b3dae547f13dd01f593d537b3","metadata_addr":"0x8e4733bdabcf7d4afc3d14f0dd46c9bf52fb0fce9e4b996c939e195b8bc891d9","amount":"1006848"}',
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
            '{"store_addr":"0xbae31176bdad6a44f2a660d73fd95e48d914c7ae5bd52f3f99eb2833579ce51c","metadata_addr":"0xe0e9394b24e53775d6af87934ac02d73536ad58b7894f6ccff3f5e7c0d548e55","amount":"118630"}',
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
            '{"store_addr":"0x31a358ffa5db08ee9d97b9837247eb1cbb66c1943b323d074d3e241d358edc1e","metadata_addr":"0x8e4733bdabcf7d4afc3d14f0dd46c9bf52fb0fce9e4b996c939e195b8bc891d9","amount":"1006848"}',
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
  gas_used: "193794",
  gas_wanted: "278290",
  height: "5133958",
  info: "",
  logs: [],
  raw_log: "",
  timestamp: "2025-07-18T08:00:41Z",
  tx: {
    "@type": "/cosmos.tx.v1beta1.Tx",
    auth_info: {
      fee: {
        amount: [
          {
            amount: "4300",
            denom: "uinit",
          },
        ],
        gas_limit: "278290",
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
            key: "AzTuklyY6zGN3ELkFnWIyF/xv9kVQ5de9RnADowt882h",
          },
          sequence: "326",
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
            "QEIPAAAAAAA=",
            "ARXNAQAAAAAA",
            "AVZJDwAAAAAA",
          ],
          function_name: "withdraw_liquidity_script",
          module_address: "0x1",
          module_name: "dex",
          sender: "init15j9nswsatns09fnru6ww9jjljg07r87kr56mdc",
          type_args: [],
        },
      ],
      non_critical_extension_options: [],
      timeout_height: "0",
    },
    signatures: [
      "bafAJVMJSuoZOf1GIK/to9fGk+RD8cJuxqmHxGeRsl1bxb9cQ4g0ncSbhOMsitofVq8y7cYwf6Tg+hFijXkcyw==",
    ],
  },
  txhash: "4D71874FC13728A582DB33B580D9A39F8A561018C546BB648E1697D9CC1AFEAC",
};

export const mockApiResponsesForWithdrawLiquidity = {
  GET: {
    "/initia/move/v1/denom?metadata=0xe0e9394b24e53775d6af87934ac02d73536ad58b7894f6ccff3f5e7c0d548e55":
      {
        denom:
          "ibc/6490A7EAB61059BFC1CDDEB05917DD70BDF3A611654162A1A47DB930D40D8AF4",
      },
    "/initia/move/v1/denom?metadata=0x8e4733bdabcf7d4afc3d14f0dd46c9bf52fb0fce9e4b996c939e195b8bc891d9":
      {
        denom: "uinit",
      },
    "/initia/move/v1/denom?metadata=0x543b35a39cfadad3da3c23249c474455d15efd2f94f849473226dee8a3c7a9e1":
      {
        denom:
          "move/543b35a39cfadad3da3c23249c474455d15efd2f94f849473226dee8a3c7a9e1",
      },
    "/initia/move/v1/accounts/0x4f73485a3e840d0d3baa691a6432e1f31c91e4f97cdc0dff465ab7d28e75379e/resources":
      {
        resources: [
          {
            move_resource:
              '{"type":"0x1::object::ObjectCore","data":{"owner":"init15j9nswsatns09fnru6ww9jjljg07r87kr56mdc"}}',
            struct_tag: "0x1::object::ObjectCore",
          },
        ],
      },
    "/initia/move/v1/accounts/0x39e454a8b7b1b71b2c0c27bf4ce1fbe234652f2c40f1fc209b023beaa7ece013/resources":
      {
        resources: [
          {
            move_resource:
              '{"type":"0x1::object::ObjectCore","data":{"owner":"init15j9nswsatns09fnru6ww9jjljg07r87kr56mdc"}}',
            struct_tag: "0x1::object::ObjectCore",
          },
        ],
      },
    "/initia/move/v1/accounts/0xd8d20f9cd225d52f126bd3f973cbb83de3212b1b3dae547f13dd01f593d537b3/resources":
      {
        resources: [
          {
            move_resource:
              '{"type":"0x1::object::ObjectCore","data":{"owner":"init17xpfvakm2amg962yls6f84z3kell8c5l70rnql"}}',
            struct_tag: "0x1::object::ObjectCore",
          },
        ],
      },
    "/initia/move/v1/accounts/0xbae31176bdad6a44f2a660d73fd95e48d914c7ae5bd52f3f99eb2833579ce51c/resources":
      {
        resources: [
          {
            move_resource:
              '{"type":"0x1::object::ObjectCore","data":{"owner":"init15j9nswsatns09fnru6ww9jjljg07r87kr56mdc"}}',
            struct_tag: "0x1::object::ObjectCore",
          },
        ],
      },
    "/initia/move/v1/accounts/0x31a358ffa5db08ee9d97b9837247eb1cbb66c1943b323d074d3e241d358edc1e/resources":
      {
        resources: [
          {
            move_resource:
              '{"type":"0x1::object::ObjectCore","data":{"owner":"init17xpfvakm2amg962yls6f84z3kell8c5l70rnql"}}',
            struct_tag: "0x1::object::ObjectCore",
          },
        ],
      },
    "/initia/move/v1/accounts/0x66a8cb0bfb991610dcffb8a6543ac0887c7c5405b8f985ebed6d628fe50c4686/resources":
      {
        resources: [
          {
            move_resource:
              '{"type":"0x1::object::ObjectCore","data":{"owner":"init17xpfvakm2amg962yls6f84z3kell8c5l70rnql"}}',
            struct_tag: "0x1::object::ObjectCore",
          },
        ],
      },
  },
};
