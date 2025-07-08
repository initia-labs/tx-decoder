export const mockMsgUndelegate = {
  code: 0,
  codespace: "",
  data: "128D010A292F696E697469612E6D7374616B696E672E76312E4D7367556E64656C6567617465526573706F6E736512600A0C08E1D3BEC30610F3F0BFB40312500A456D6F76652F35343362333561333963666164616433646133633233323439633437343435356431356566643266393466383439343733323236646565386133633761396531120737363138303936",
  events: [
    {
      attributes: [
        {
          index: true,
          key: "sender",
          value: "0x1,0xa67ee6545f7761e108fb77bf7fe1388cb55e67af",
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
            '{"store_addr":"0xaafbaf2274a047479819798aebd39a0ee2e8e126be835b8fe8954f29883593a1","metadata_addr":"0xe0e9394b24e53775d6af87934ac02d73536ad58b7894f6ccff3f5e7c0d548e55","amount":"3864"}',
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
            '{"store_addr":"0x5c8edb2aff315409e899a3cbabeaa8741eb8044448d2c28a37a8d0d6e5d96528","metadata_addr":"0xe0e9394b24e53775d6af87934ac02d73536ad58b7894f6ccff3f5e7c0d548e55","amount":"3864"}',
        },
      ],
      type: "move",
    },
    {
      attributes: [
        {
          index: true,
          key: "spender",
          value: "init15elwv4zlwas7zz8mw7lhlcfc3j64uea0dzkew0",
        },
        {
          index: true,
          key: "amount",
          value:
            "3864ibc/6490A7EAB61059BFC1CDDEB05917DD70BDF3A611654162A1A47DB930D40D8AF4",
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
          value:
            "3864ibc/6490A7EAB61059BFC1CDDEB05917DD70BDF3A611654162A1A47DB930D40D8AF4",
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
          value: "init15elwv4zlwas7zz8mw7lhlcfc3j64uea0dzkew0",
        },
        {
          index: true,
          key: "amount",
          value:
            "3864ibc/6490A7EAB61059BFC1CDDEB05917DD70BDF3A611654162A1A47DB930D40D8AF4",
        },
      ],
      type: "transfer",
    },
    {
      attributes: [
        {
          index: true,
          key: "sender",
          value: "init15elwv4zlwas7zz8mw7lhlcfc3j64uea0dzkew0",
        },
      ],
      type: "message",
    },
    {
      attributes: [
        {
          index: true,
          key: "fee",
          value:
            "3864ibc/6490A7EAB61059BFC1CDDEB05917DD70BDF3A611654162A1A47DB930D40D8AF4",
        },
        {
          index: true,
          key: "fee_payer",
          value: "init15elwv4zlwas7zz8mw7lhlcfc3j64uea0dzkew0",
        },
      ],
      type: "tx",
    },
    {
      attributes: [
        {
          index: true,
          key: "acc_seq",
          value: "init15elwv4zlwas7zz8mw7lhlcfc3j64uea0dzkew0/3",
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
            "zTUetmCkcZvKDr34EoO2JlpDI884CQvNSyopxAPVXfxEb8gKrOu0EQmhm5k6z61xUXwktLU2upiXBfhdtvBM6g==",
        },
      ],
      type: "tx",
    },
    {
      attributes: [
        {
          index: true,
          key: "action",
          value: "/initia.mstaking.v1.MsgUndelegate",
        },
        {
          index: true,
          key: "sender",
          value: "init15elwv4zlwas7zz8mw7lhlcfc3j64uea0dzkew0",
        },
        {
          index: true,
          key: "module",
          value: "mstaking",
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
          value: "0x1,0x93354845030274cd4bf1686abd60ab28ec52e1a7",
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
            '{"store_addr":"0xba2a23251eb06923fadb03ea9856c66510fefc4dfa9abe92cfb2961c9145cfb3","metadata_addr":"0x8e4733bdabcf7d4afc3d14f0dd46c9bf52fb0fce9e4b996c939e195b8bc891d9","amount":"776583"}',
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
            '{"store_addr":"0xe50fe7e60a99b369db27c5ddfdd176da6da5c5cf7bcc870d36482798b64859e","metadata_addr":"0x8e4733bdabcf7d4afc3d14f0dd46c9bf52fb0fce9e4b996c939e195b8bc891d9","amount":"776583"}',
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
          value: "init1jv65s3grqf6v6jl3dp4t6c9t9rk99cd8ffy0za",
        },
        {
          index: true,
          key: "amount",
          value: "776583uinit",
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
          value: "init15elwv4zlwas7zz8mw7lhlcfc3j64uea0dzkew0",
        },
        {
          index: true,
          key: "amount",
          value: "776583uinit",
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
          value: "init15elwv4zlwas7zz8mw7lhlcfc3j64uea0dzkew0",
        },
        {
          index: true,
          key: "sender",
          value: "init1jv65s3grqf6v6jl3dp4t6c9t9rk99cd8ffy0za",
        },
        {
          index: true,
          key: "amount",
          value: "776583uinit",
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
          value: "init1jv65s3grqf6v6jl3dp4t6c9t9rk99cd8ffy0za",
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
          value: "0x1,0x4fea76427b8345861e80a3540a8a9d936fd39391",
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
            '{"store_addr":"0xeae8f912db9acfb4901766874adc7f6dbb1d5fea4785a423671ba5afc59a710f","metadata_addr":"0x543b35a39cfadad3da3c23249c474455d15efd2f94f849473226dee8a3c7a9e1","amount":"7618096"}',
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
            '{"store_addr":"0xdbf5f63baed73fadc32636ad8b5bd2161217298d81f2688ffca682d056506d7d","metadata_addr":"0x543b35a39cfadad3da3c23249c474455d15efd2f94f849473226dee8a3c7a9e1","amount":"7618096"}',
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
          value: "init1fl48vsnmsdzcv85q5d2q4z5ajdha8yu3mdfuj4",
        },
        {
          index: true,
          key: "amount",
          value:
            "7618096move/543b35a39cfadad3da3c23249c474455d15efd2f94f849473226dee8a3c7a9e1",
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
          value: "init1tygms3xhhs3yv487phx3dw4a95jn7t7l0d4dyp",
        },
        {
          index: true,
          key: "amount",
          value:
            "7618096move/543b35a39cfadad3da3c23249c474455d15efd2f94f849473226dee8a3c7a9e1",
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
          value: "init1tygms3xhhs3yv487phx3dw4a95jn7t7l0d4dyp",
        },
        {
          index: true,
          key: "sender",
          value: "init1fl48vsnmsdzcv85q5d2q4z5ajdha8yu3mdfuj4",
        },
        {
          index: true,
          key: "amount",
          value:
            "7618096move/543b35a39cfadad3da3c23249c474455d15efd2f94f849473226dee8a3c7a9e1",
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
          value: "init1fl48vsnmsdzcv85q5d2q4z5ajdha8yu3mdfuj4",
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
          key: "validator",
          value: "initvaloper1r20z6zmlnqrea5p9cendrgeke35nxzfueqwaz6",
        },
        {
          index: true,
          key: "delegator",
          value: "init15elwv4zlwas7zz8mw7lhlcfc3j64uea0dzkew0",
        },
        {
          index: true,
          key: "amount",
          value:
            "7618096move/543b35a39cfadad3da3c23249c474455d15efd2f94f849473226dee8a3c7a9e1",
        },
        {
          index: true,
          key: "completion_time",
          value: "2025-07-10T11:54:09Z",
        },
        {
          index: true,
          key: "msg_index",
          value: "0",
        },
      ],
      type: "unbond",
    },
  ],
  gas_used: "350605",
  gas_wanted: "492355",
  height: "4017972",
  info: "",
  logs: [],
  raw_log: "",
  timestamp: "2025-06-19T11:54:09Z",
  tx: {
    "@type": "/cosmos.tx.v1beta1.Tx",
    auth_info: {
      fee: {
        amount: [
          {
            amount: "3864",
            denom:
              "ibc/6490A7EAB61059BFC1CDDEB05917DD70BDF3A611654162A1A47DB930D40D8AF4",
          },
        ],
        gas_limit: "492355",
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
            key: "Ar2fDeJ+86HUL11PJi4zHva0NOVpci0gcHYx10JhKGNr",
          },
          sequence: "3",
        },
      ],
      tip: null,
    },
    body: {
      extension_options: [],
      memo: "",
      messages: [
        {
          "@type": "/initia.mstaking.v1.MsgUndelegate",
          amount: [
            {
              amount: "7618096",
              denom:
                "move/543b35a39cfadad3da3c23249c474455d15efd2f94f849473226dee8a3c7a9e1",
            },
          ],
          delegator_address: "init15elwv4zlwas7zz8mw7lhlcfc3j64uea0dzkew0",
          validator_address:
            "initvaloper1r20z6zmlnqrea5p9cendrgeke35nxzfueqwaz6",
        },
      ],
      non_critical_extension_options: [],
      timeout_height: "0",
    },
    signatures: [
      "zTUetmCkcZvKDr34EoO2JlpDI884CQvNSyopxAPVXfxEb8gKrOu0EQmhm5k6z61xUXwktLU2upiXBfhdtvBM6g==",
    ],
  },
  txhash: "42B7DE076F3F0E1C43DC2EC3356E6B4D9DBE63ACDCEB16059D3099453E7F015E",
};

export const mockMsgUndelegateLocked = {
  code: 0,
  codespace: "",
  data: "12240A222F696E697469612E6D6F76652E76312E4D736745786563757465526573706F6E7365",
  events: [
    {
      attributes: [
        {
          index: true,
          key: "sender",
          value: "0x1,0x3006c4f11da6b75eff1ef89e3bcece250476d039",
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
            '{"store_addr":"0x68ef2e298ab51ffb49355e7973f5ba454199ee10155dc222c733aa9db0cac05f","metadata_addr":"0x8e4733bdabcf7d4afc3d14f0dd46c9bf52fb0fce9e4b996c939e195b8bc891d9","amount":"16925"}',
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
            '{"store_addr":"0x66a8cb0bfb991610dcffb8a6543ac0887c7c5405b8f985ebed6d628fe50c4686","metadata_addr":"0x8e4733bdabcf7d4afc3d14f0dd46c9bf52fb0fce9e4b996c939e195b8bc891d9","amount":"16925"}',
        },
      ],
      type: "move",
    },
    {
      attributes: [
        {
          index: true,
          key: "spender",
          value: "init1xqrvfuga56m4alc7lz0rhnkwy5z8d5pefg8vz9",
        },
        {
          index: true,
          key: "amount",
          value: "16925uinit",
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
          value: "16925uinit",
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
          value: "init1xqrvfuga56m4alc7lz0rhnkwy5z8d5pefg8vz9",
        },
        {
          index: true,
          key: "amount",
          value: "16925uinit",
        },
      ],
      type: "transfer",
    },
    {
      attributes: [
        {
          index: true,
          key: "sender",
          value: "init1xqrvfuga56m4alc7lz0rhnkwy5z8d5pefg8vz9",
        },
      ],
      type: "message",
    },
    {
      attributes: [
        {
          index: true,
          key: "fee",
          value: "16925uinit",
        },
        {
          index: true,
          key: "fee_payer",
          value: "init1xqrvfuga56m4alc7lz0rhnkwy5z8d5pefg8vz9",
        },
      ],
      type: "tx",
    },
    {
      attributes: [
        {
          index: true,
          key: "acc_seq",
          value: "init1xqrvfuga56m4alc7lz0rhnkwy5z8d5pefg8vz9/30",
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
            "6uZXsNdnDDJcgxEEMnaIYNcEB9ajh6rUuGc6m07sJOQDJ35eQ+bvOWuOQaaoPHUbsrrxgEp1MwQmdbLCNL+4PA==",
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
          value: "init1xqrvfuga56m4alc7lz0rhnkwy5z8d5pefg8vz9",
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
          value: "0x3006c4f11da6b75eff1ef89e3bcece250476d039",
        },
        {
          index: true,
          key: "module_addr",
          value:
            "0x3a886b32a802582f2e446e74d4a24d1d7ed01adf46d2a8f65c5723887e708789",
        },
        {
          index: true,
          key: "module_name",
          value: "lock_staking",
        },
        {
          index: true,
          key: "function_name",
          value: "undelegate",
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
          key: "sender",
          value: "0x1,0x93354845030274cd4bf1686abd60ab28ec52e1a7",
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
            '{"store_addr":"0xba2a23251eb06923fadb03ea9856c66510fefc4dfa9abe92cfb2961c9145cfb3","metadata_addr":"0x8e4733bdabcf7d4afc3d14f0dd46c9bf52fb0fce9e4b996c939e195b8bc891d9","amount":"10169"}',
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
            '{"store_addr":"0xd4383b07302090e2835664d26c42eb6087d64736977a04c7b898caddcb728403","metadata_addr":"0x8e4733bdabcf7d4afc3d14f0dd46c9bf52fb0fce9e4b996c939e195b8bc891d9","amount":"10169"}',
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
          value: "init1jv65s3grqf6v6jl3dp4t6c9t9rk99cd8ffy0za",
        },
        {
          index: true,
          key: "amount",
          value: "10169uinit",
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
          value:
            "init1e3x65lxn3wjdvsk0vyhf579kk7x27rtfjg2c9vyucmdemnqka06sc4h35h",
        },
        {
          index: true,
          key: "amount",
          value: "10169uinit",
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
          value:
            "init1e3x65lxn3wjdvsk0vyhf579kk7x27rtfjg2c9vyucmdemnqka06sc4h35h",
        },
        {
          index: true,
          key: "sender",
          value: "init1jv65s3grqf6v6jl3dp4t6c9t9rk99cd8ffy0za",
        },
        {
          index: true,
          key: "amount",
          value: "10169uinit",
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
          value: "init1jv65s3grqf6v6jl3dp4t6c9t9rk99cd8ffy0za",
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
          value: "0x1,0x4fea76427b8345861e80a3540a8a9d936fd39391",
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
            '{"store_addr":"0xeae8f912db9acfb4901766874adc7f6dbb1d5fea4785a423671ba5afc59a710f","metadata_addr":"0x543b35a39cfadad3da3c23249c474455d15efd2f94f849473226dee8a3c7a9e1","amount":"3508258915"}',
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
            '{"store_addr":"0xdbf5f63baed73fadc32636ad8b5bd2161217298d81f2688ffca682d056506d7d","metadata_addr":"0x543b35a39cfadad3da3c23249c474455d15efd2f94f849473226dee8a3c7a9e1","amount":"3508258915"}',
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
          value: "init1fl48vsnmsdzcv85q5d2q4z5ajdha8yu3mdfuj4",
        },
        {
          index: true,
          key: "amount",
          value:
            "3508258915move/543b35a39cfadad3da3c23249c474455d15efd2f94f849473226dee8a3c7a9e1",
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
          value: "init1tygms3xhhs3yv487phx3dw4a95jn7t7l0d4dyp",
        },
        {
          index: true,
          key: "amount",
          value:
            "3508258915move/543b35a39cfadad3da3c23249c474455d15efd2f94f849473226dee8a3c7a9e1",
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
          value: "init1tygms3xhhs3yv487phx3dw4a95jn7t7l0d4dyp",
        },
        {
          index: true,
          key: "sender",
          value: "init1fl48vsnmsdzcv85q5d2q4z5ajdha8yu3mdfuj4",
        },
        {
          index: true,
          key: "amount",
          value:
            "3508258915move/543b35a39cfadad3da3c23249c474455d15efd2f94f849473226dee8a3c7a9e1",
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
          value: "init1fl48vsnmsdzcv85q5d2q4z5ajdha8yu3mdfuj4",
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
          key: "validator",
          value: "initvaloper1qgje6dgazcruzsashpqektp2yaf47x2wyysjqx",
        },
        {
          index: true,
          key: "delegator",
          value:
            "init1e3x65lxn3wjdvsk0vyhf579kk7x27rtfjg2c9vyucmdemnqka06sc4h35h",
        },
        {
          index: true,
          key: "amount",
          value:
            "3508258915move/543b35a39cfadad3da3c23249c474455d15efd2f94f849473226dee8a3c7a9e1",
        },
        {
          index: true,
          key: "completion_time",
          value: "2025-06-26T03:55:51Z",
        },
        {
          index: true,
          key: "msg_index",
          value: "0",
        },
      ],
      type: "unbond",
    },
    {
      attributes: [
        {
          index: true,
          key: "success",
          value: "true",
        },
        {
          index: true,
          key: "msg_index",
          value: "0",
        },
      ],
      type: "submsg",
    },
    {
      attributes: [
        {
          index: true,
          key: "sender",
          value:
            "0xcc4daa7cd38ba4d642cf612e9a78b6b78caf0d69921582b09cc6db9dcc16ebf5",
        },
        {
          index: true,
          key: "module_addr",
          value:
            "0x3a886b32a802582f2e446e74d4a24d1d7ed01adf46d2a8f65c5723887e708789",
        },
        {
          index: true,
          key: "module_name",
          value: "lock_staking",
        },
        {
          index: true,
          key: "function_name",
          value: "undelegate_hook",
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
          value:
            "0x3a886b32a802582f2e446e74d4a24d1d7ed01adf46d2a8f65c5723887e708789::lock_staking::WithdrawDelegationEvent",
        },
        {
          index: true,
          key: "data",
          value:
            '{"staking_account":"0xcc4daa7cd38ba4d642cf612e9a78b6b78caf0d69921582b09cc6db9dcc16ebf5","metadata":"0x543b35a39cfadad3da3c23249c474455d15efd2f94f849473226dee8a3c7a9e1","release_time":"1748095098","validator":"initvaloper1qgje6dgazcruzsashpqektp2yaf47x2wyysjqx","locked_share":"3508258915"}',
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
            '{"store_addr":"0xd4383b07302090e2835664d26c42eb6087d64736977a04c7b898caddcb728403","metadata_addr":"0x8e4733bdabcf7d4afc3d14f0dd46c9bf52fb0fce9e4b996c939e195b8bc891d9","amount":"10169"}',
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
            '{"store_addr":"0x68ef2e298ab51ffb49355e7973f5ba454199ee10155dc222c733aa9db0cac05f","metadata_addr":"0x8e4733bdabcf7d4afc3d14f0dd46c9bf52fb0fce9e4b996c939e195b8bc891d9","amount":"10169"}',
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
          key: "success",
          value: "true",
        },
        {
          index: true,
          key: "msg_index",
          value: "0",
        },
      ],
      type: "submsg",
    },
  ],
  gas_used: "800945",
  gas_wanted: "1128283",
  height: "3463703",
  info: "",
  logs: [],
  raw_log: "",
  timestamp: "2025-06-05T03:55:51Z",
  tx: {
    "@type": "/cosmos.tx.v1beta1.Tx",
    auth_info: {
      fee: {
        amount: [
          {
            amount: "16925",
            denom: "uinit",
          },
        ],
        gas_limit: "1128283",
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
            key: "AxaojMt2I3wTjfiYXEKWEEonVJRAWBWpRbFDvpIu0JKI",
          },
          sequence: "30",
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
            "AA==",
            "etAxaAAAAAA=",
            "MmluaXR2YWxvcGVyMXFnamU2ZGdhemNydXpzYXNocHFla3RwMnlhZjQ3eDJ3eXlzanF4",
          ],
          function_name: "undelegate",
          module_address:
            "0x3a886b32a802582f2e446e74d4a24d1d7ed01adf46d2a8f65c5723887e708789",
          module_name: "lock_staking",
          sender: "init1xqrvfuga56m4alc7lz0rhnkwy5z8d5pefg8vz9",
          type_args: [],
        },
      ],
      non_critical_extension_options: [],
      timeout_height: "0",
    },
    signatures: [
      "6uZXsNdnDDJcgxEEMnaIYNcEB9ajh6rUuGc6m07sJOQDJ35eQ+bvOWuOQaaoPHUbsrrxgEp1MwQmdbLCNL+4PA==",
    ],
  },
  txhash: "6BEDE796A3AFE2AA15BE995FD66AACA06B6C8ABBFB7047004EFFC7C317B1D55F",
};

export const mockApiResponseForUndelegate = {
  GET: {
    "/initia/move/v1/accounts/0x68ef2e298ab51ffb49355e7973f5ba454199ee10155dc222c733aa9db0cac05f/resources":
      {
        pagination: {
          next_key: null,
          total: "0",
        },
        resources: [
          {
            address:
              "0x68ef2e298ab51ffb49355e7973f5ba454199ee10155dc222c733aa9db0cac05f",
            move_resource:
              '{"type":"0x1::object::ObjectCore","data":{"allow_ungated_transfer":false,"owner":"0x3006c4f11da6b75eff1ef89e3bcece250476d039","version":"1"}}',
            raw_bytes:
              "AAAAAAAAAAAAAAAAMAbE8R2mt17/HvieO87OJQR20DkAAQAAAAAAAAA=",
            struct_tag: "0x1::object::ObjectCore",
          },
          {
            address:
              "0x68ef2e298ab51ffb49355e7973f5ba454199ee10155dc222c733aa9db0cac05f",
            move_resource:
              '{"type":"0x1::fungible_asset::FungibleStore","data":{"balance":"521587402","frozen":false,"metadata":{"inner":"0x8e4733bdabcf7d4afc3d14f0dd46c9bf52fb0fce9e4b996c939e195b8bc891d9"}}}',
            raw_bytes:
              "jkczvavPfUr8PRTw3UbJv1L7D86eS5lsk54ZW4vIkdnKyhYfAAAAAAA=",
            struct_tag: "0x1::fungible_asset::FungibleStore",
          },
        ],
      },
    "/initia/move/v1/accounts/0xba2a23251eb06923fadb03ea9856c66510fefc4dfa9abe92cfb2961c9145cfb3/resources":
      {
        pagination: {
          next_key: null,
          total: "0",
        },
        resources: [
          {
            address:
              "0xba2a23251eb06923fadb03ea9856c66510fefc4dfa9abe92cfb2961c9145cfb3",
            move_resource:
              '{"type":"0x1::object::ObjectCore","data":{"allow_ungated_transfer":false,"owner":"0x93354845030274cd4bf1686abd60ab28ec52e1a7","version":"1"}}',
            raw_bytes:
              "AAAAAAAAAAAAAAAAkzVIRQMCdM1L8WhqvWCrKOxS4acAAQAAAAAAAAA=",
            struct_tag: "0x1::object::ObjectCore",
          },
          {
            address:
              "0xba2a23251eb06923fadb03ea9856c66510fefc4dfa9abe92cfb2961c9145cfb3",
            move_resource:
              '{"type":"0x1::fungible_asset::FungibleStore","data":{"balance":"1551532370785","frozen":false,"metadata":{"inner":"0x8e4733bdabcf7d4afc3d14f0dd46c9bf52fb0fce9e4b996c939e195b8bc891d9"}}}',
            raw_bytes:
              "jkczvavPfUr8PRTw3UbJv1L7D86eS5lsk54ZW4vIkdlhK4k+aQEAAAA=",
            struct_tag: "0x1::fungible_asset::FungibleStore",
          },
        ],
      },
    "/initia/move/v1/accounts/0xdbf5f63baed73fadc32636ad8b5bd2161217298d81f2688ffca682d056506d7d/resources":
      {
        pagination: {
          next_key: null,
          total: "0",
        },
        resources: [
          {
            address:
              "0xdbf5f63baed73fadc32636ad8b5bd2161217298d81f2688ffca682d056506d7d",
            move_resource:
              '{"type":"0x1::object::ObjectCore","data":{"allow_ungated_transfer":false,"owner":"0x5911b844d7bc224654fe0dcd16babd2d253f2fdf","version":"1"}}',
            raw_bytes:
              "AAAAAAAAAAAAAAAAWRG4RNe8IkZU/g3NFrq9LSU/L98AAQAAAAAAAAA=",
            struct_tag: "0x1::object::ObjectCore",
          },
          {
            address:
              "0xdbf5f63baed73fadc32636ad8b5bd2161217298d81f2688ffca682d056506d7d",
            move_resource:
              '{"type":"0x1::fungible_asset::FungibleStore","data":{"balance":"3712282863831","frozen":false,"metadata":{"inner":"0x543b35a39cfadad3da3c23249c474455d15efd2f94f849473226dee8a3c7a9e1"}}}',
            raw_bytes:
              "VDs1o5z62tPaPCMknEdEVdFe/S+U+ElHMibe6KPHqeHXKE1VYAMAAAA=",
            struct_tag: "0x1::fungible_asset::FungibleStore",
          },
        ],
      },
    "/initia/move/v1/accounts/0xe50fe7e60a99b369db27c5ddfdd176da6da5c5cf7bcc870d36482798b64859e/resources":
      {
        pagination: {
          next_key: null,
          total: "0",
        },
        resources: [
          {
            address:
              "0xe50fe7e60a99b369db27c5ddfdd176da6da5c5cf7bcc870d36482798b64859e",
            move_resource:
              '{"type":"0x1::object::ObjectCore","data":{"allow_ungated_transfer":false,"owner":"0xa67ee6545f7761e108fb77bf7fe1388cb55e67af","version":"1"}}',
            raw_bytes:
              "AAAAAAAAAAAAAAAApn7mVF93YeEI+3e/f+E4jLVeZ68AAQAAAAAAAAA=",
            struct_tag: "0x1::object::ObjectCore",
          },
          {
            address:
              "0xe50fe7e60a99b369db27c5ddfdd176da6da5c5cf7bcc870d36482798b64859e",
            move_resource:
              '{"type":"0x1::fungible_asset::FungibleStore","data":{"balance":"989813","frozen":false,"metadata":{"inner":"0x8e4733bdabcf7d4afc3d14f0dd46c9bf52fb0fce9e4b996c939e195b8bc891d9"}}}',
            raw_bytes:
              "jkczvavPfUr8PRTw3UbJv1L7D86eS5lsk54ZW4vIkdl1Gg8AAAAAAAA=",
            struct_tag: "0x1::fungible_asset::FungibleStore",
          },
        ],
      },
    "/initia/move/v1/accounts/0xeae8f912db9acfb4901766874adc7f6dbb1d5fea4785a423671ba5afc59a710f/resources":
      {
        pagination: {
          next_key: null,
          total: "0",
        },
        resources: [
          {
            address:
              "0xeae8f912db9acfb4901766874adc7f6dbb1d5fea4785a423671ba5afc59a710f",
            move_resource:
              '{"type":"0x1::object::ObjectCore","data":{"allow_ungated_transfer":false,"owner":"0x4fea76427b8345861e80a3540a8a9d936fd39391","version":"1"}}',
            raw_bytes:
              "AAAAAAAAAAAAAAAAT+p2QnuDRYYegKNUCoqdk2/Tk5EAAQAAAAAAAAA=",
            struct_tag: "0x1::object::ObjectCore",
          },
          {
            address:
              "0xeae8f912db9acfb4901766874adc7f6dbb1d5fea4785a423671ba5afc59a710f",
            move_resource:
              '{"type":"0x1::fungible_asset::FungibleStore","data":{"balance":"17796198821399","frozen":false,"metadata":{"inner":"0x543b35a39cfadad3da3c23249c474455d15efd2f94f849473226dee8a3c7a9e1"}}}',
            raw_bytes:
              "VDs1o5z62tPaPCMknEdEVdFe/S+U+ElHMibe6KPHqeEX7huALxAAAAA=",
            struct_tag: "0x1::fungible_asset::FungibleStore",
          },
        ],
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
    "/initia/mstaking/v1/validators/initvaloper1r20z6zmlnqrea5p9cendrgeke35nxzfueqwaz6":
      {
        validator: {
          description: {
            details:
              "The go-to blockchain security firm for top teams, specializing in Cosmos, EVM, ZK, Move (Aptos and Sui). We solve your hardest security problems.\\nTwitter: https://twitter.com/zellic_io\\nTelegram: t.me/zellic_io",
            identity: "609C091636D1330B",
            moniker: "Zellic",
            security_contact: "security@zellic.io",
            website: "https://zellic.io/",
          },
          operator_address:
            "initvaloper1r20z6zmlnqrea5p9cendrgeke35nxzfueqwaz6",
        },
      },
  },
  POST: {},
};

export const mockApiResponseForUndelegateLocked = {
  GET: {
    "/initia/move/v1/accounts/0x68ef2e298ab51ffb49355e7973f5ba454199ee10155dc222c733aa9db0cac05f/resources":
      {
        pagination: {
          next_key: null,
          total: "0",
        },
        resources: [
          {
            address:
              "0x68ef2e298ab51ffb49355e7973f5ba454199ee10155dc222c733aa9db0cac05f",
            move_resource:
              '{"type":"0x1::object::ObjectCore","data":{"allow_ungated_transfer":false,"owner":"0x3006c4f11da6b75eff1ef89e3bcece250476d039","version":"1"}}',
            raw_bytes:
              "AAAAAAAAAAAAAAAAMAbE8R2mt17/HvieO87OJQR20DkAAQAAAAAAAAA=",
            struct_tag: "0x1::object::ObjectCore",
          },
          {
            address:
              "0x68ef2e298ab51ffb49355e7973f5ba454199ee10155dc222c733aa9db0cac05f",
            move_resource:
              '{"type":"0x1::fungible_asset::FungibleStore","data":{"balance":"37376524","frozen":false,"metadata":{"inner":"0x8e4733bdabcf7d4afc3d14f0dd46c9bf52fb0fce9e4b996c939e195b8bc891d9"}}}',
            raw_bytes:
              "jkczvavPfUr8PRTw3UbJv1L7D86eS5lsk54ZW4vIkdkMUjoCAAAAAAA=",
            struct_tag: "0x1::fungible_asset::FungibleStore",
          },
        ],
      },
    "/initia/move/v1/accounts/0xba2a23251eb06923fadb03ea9856c66510fefc4dfa9abe92cfb2961c9145cfb3/resources":
      {
        pagination: {
          next_key: null,
          total: "0",
        },
        resources: [
          {
            address:
              "0xba2a23251eb06923fadb03ea9856c66510fefc4dfa9abe92cfb2961c9145cfb3",
            move_resource:
              '{"type":"0x1::object::ObjectCore","data":{"allow_ungated_transfer":false,"owner":"0x93354845030274cd4bf1686abd60ab28ec52e1a7","version":"1"}}',
            raw_bytes:
              "AAAAAAAAAAAAAAAAkzVIRQMCdM1L8WhqvWCrKOxS4acAAQAAAAAAAAA=",
            struct_tag: "0x1::object::ObjectCore",
          },
          {
            address:
              "0xba2a23251eb06923fadb03ea9856c66510fefc4dfa9abe92cfb2961c9145cfb3",
            move_resource:
              '{"type":"0x1::fungible_asset::FungibleStore","data":{"balance":"1552497732953","frozen":false,"metadata":{"inner":"0x8e4733bdabcf7d4afc3d14f0dd46c9bf52fb0fce9e4b996c939e195b8bc891d9"}}}',
            raw_bytes:
              "jkczvavPfUr8PRTw3UbJv1L7D86eS5lsk54ZW4vIkdlZbRN4aQEAAAA=",
            struct_tag: "0x1::fungible_asset::FungibleStore",
          },
        ],
      },
    "/initia/move/v1/accounts/0xd4383b07302090e2835664d26c42eb6087d64736977a04c7b898caddcb728403/resources":
      {
        pagination: {
          next_key: null,
          total: "0",
        },
        resources: [
          {
            address:
              "0xd4383b07302090e2835664d26c42eb6087d64736977a04c7b898caddcb728403",
            move_resource:
              '{"type":"0x1::object::ObjectCore","data":{"allow_ungated_transfer":false,"owner":"0xcc4daa7cd38ba4d642cf612e9a78b6b78caf0d69921582b09cc6db9dcc16ebf5","version":"1"}}',
            raw_bytes:
              "zE2qfNOLpNZCz2Eumni2t4yvDWmSFYKwnMbbncwW6/UAAQAAAAAAAAA=",
            struct_tag: "0x1::object::ObjectCore",
          },
          {
            address:
              "0xd4383b07302090e2835664d26c42eb6087d64736977a04c7b898caddcb728403",
            move_resource:
              '{"type":"0x1::fungible_asset::FungibleStore","data":{"balance":"0","frozen":false,"metadata":{"inner":"0x8e4733bdabcf7d4afc3d14f0dd46c9bf52fb0fce9e4b996c939e195b8bc891d9"}}}',
            raw_bytes:
              "jkczvavPfUr8PRTw3UbJv1L7D86eS5lsk54ZW4vIkdkAAAAAAAAAAAA=",
            struct_tag: "0x1::fungible_asset::FungibleStore",
          },
        ],
      },
    "/initia/move/v1/accounts/0xdbf5f63baed73fadc32636ad8b5bd2161217298d81f2688ffca682d056506d7d/resources":
      {
        pagination: {
          next_key: null,
          total: "0",
        },
        resources: [
          {
            address:
              "0xdbf5f63baed73fadc32636ad8b5bd2161217298d81f2688ffca682d056506d7d",
            move_resource:
              '{"type":"0x1::object::ObjectCore","data":{"allow_ungated_transfer":false,"owner":"0x5911b844d7bc224654fe0dcd16babd2d253f2fdf","version":"1"}}',
            raw_bytes:
              "AAAAAAAAAAAAAAAAWRG4RNe8IkZU/g3NFrq9LSU/L98AAQAAAAAAAAA=",
            struct_tag: "0x1::object::ObjectCore",
          },
          {
            address:
              "0xdbf5f63baed73fadc32636ad8b5bd2161217298d81f2688ffca682d056506d7d",
            move_resource:
              '{"type":"0x1::fungible_asset::FungibleStore","data":{"balance":"3711997416901","frozen":false,"metadata":{"inner":"0x543b35a39cfadad3da3c23249c474455d15efd2f94f849473226dee8a3c7a9e1"}}}',
            raw_bytes:
              "VDs1o5z62tPaPCMknEdEVdFe/S+U+ElHMibe6KPHqeHFlUlEYAMAAAA=",
            struct_tag: "0x1::fungible_asset::FungibleStore",
          },
        ],
      },
    "/initia/move/v1/accounts/0xeae8f912db9acfb4901766874adc7f6dbb1d5fea4785a423671ba5afc59a710f/resources":
      {
        pagination: {
          next_key: null,
          total: "0",
        },
        resources: [
          {
            address:
              "0xeae8f912db9acfb4901766874adc7f6dbb1d5fea4785a423671ba5afc59a710f",
            move_resource:
              '{"type":"0x1::object::ObjectCore","data":{"allow_ungated_transfer":false,"owner":"0x4fea76427b8345861e80a3540a8a9d936fd39391","version":"1"}}',
            raw_bytes:
              "AAAAAAAAAAAAAAAAT+p2QnuDRYYegKNUCoqdk2/Tk5EAAQAAAAAAAAA=",
            struct_tag: "0x1::object::ObjectCore",
          },
          {
            address:
              "0xeae8f912db9acfb4901766874adc7f6dbb1d5fea4785a423671ba5afc59a710f",
            move_resource:
              '{"type":"0x1::fungible_asset::FungibleStore","data":{"balance":"17796903631803","frozen":false,"metadata":{"inner":"0x543b35a39cfadad3da3c23249c474455d15efd2f94f849473226dee8a3c7a9e1"}}}',
            raw_bytes:
              "VDs1o5z62tPaPCMknEdEVdFe/S+U+ElHMibe6KPHqeG7ex6qLxAAAAA=",
            struct_tag: "0x1::fungible_asset::FungibleStore",
          },
        ],
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
    "/initia/mstaking/v1/validators/initvaloper1qgje6dgazcruzsashpqektp2yaf47x2wyysjqx":
      {
        validator: {
          description: {
            details:
              "Delphi Consulting delivers expert crypto consulting across technology assessment, token advisory, asset intelligence, education, and design services.",
            identity: "2F47665C54DB2742",
            moniker: "Delphi Consulting",
            security_contact: "ops@delphiconsulting.io",
            website: "https://delphidigital.io/consulting",
          },
          operator_address:
            "initvaloper1qgje6dgazcruzsashpqektp2yaf47x2wyysjqx",
        },
      },
  },
  POST: {},
};
