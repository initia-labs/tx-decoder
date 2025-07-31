export const mockMsgExtendLiquidity = {
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
            '{"store_addr":"0x31a358ffa5db08ee9d97b9837247eb1cbb66c1943b323d074d3e241d358edc1e","metadata_addr":"0x8e4733bdabcf7d4afc3d14f0dd46c9bf52fb0fce9e4b996c939e195b8bc891d9","amount":"5192"}',
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
            '{"store_addr":"0x66a8cb0bfb991610dcffb8a6543ac0887c7c5405b8f985ebed6d628fe50c4686","metadata_addr":"0x8e4733bdabcf7d4afc3d14f0dd46c9bf52fb0fce9e4b996c939e195b8bc891d9","amount":"5192"}',
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
          value: "5192uinit",
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
          value: "5192uinit",
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
          value: "5192uinit",
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
          value: "5192uinit",
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
          value: "init15j9nswsatns09fnru6ww9jjljg07r87kr56mdc/329",
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
            "JQTo9qReJq4j7cFAP2JLCU2z8oHhnMiUatctfpk5rxddXkpYz0+jO5kiJarI57vHMz+dbzy0hY4XxPQD7GF6GA==",
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
          value: "extend",
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
            '{"staking_account":"0x48a642ebc654e13aef01d2fdd17c66aecd32f84dcfd02fa66e896188698375f0","metadata":"0x543b35a39cfadad3da3c23249c474455d15efd2f94f849473226dee8a3c7a9e1","release_time":"1754562899","validator":"initvaloper1qx6ghyv83caecuxgl77lvlnha9d9y6fntryc8a","locked_share":"80000"}',
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
          value:
            "0x3a886b32a802582f2e446e74d4a24d1d7ed01adf46d2a8f65c5723887e708789::lock_staking::DepositDelegationEvent",
        },
        {
          index: true,
          key: "data",
          value:
            '{"staking_account":"0x48a642ebc654e13aef01d2fdd17c66aecd32f84dcfd02fa66e896188698375f0","metadata":"0x543b35a39cfadad3da3c23249c474455d15efd2f94f849473226dee8a3c7a9e1","release_time":"1755426899","validator":"initvaloper1qx6ghyv83caecuxgl77lvlnha9d9y6fntryc8a","locked_share":"80000"}',
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
  gas_used: "235050",
  gas_wanted: "336048",
  height: "5133993",
  info: "",
  logs: [],
  raw_log: "",
  timestamp: "2025-07-18T08:02:00Z",
  tx: {
    "@type": "/cosmos.tx.v1beta1.Tx",
    auth_info: {
      fee: {
        amount: [
          {
            amount: "5192",
            denom: "uinit",
          },
        ],
        gas_limit: "336048",
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
          sequence: "329",
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
            "U4GUaAAAAAA=",
            "MmluaXR2YWxvcGVyMXF4NmdoeXY4M2NhZWN1eGdsNzdsdmxuaGE5ZDl5NmZudHJ5Yzhh",
            "U7ChaAAAAAA=",
          ],
          function_name: "extend",
          module_address:
            "0x3a886b32a802582f2e446e74d4a24d1d7ed01adf46d2a8f65c5723887e708789",
          module_name: "lock_staking",
          sender: "init15j9nswsatns09fnru6ww9jjljg07r87kr56mdc",
          type_args: [],
        },
      ],
      non_critical_extension_options: [],
      timeout_height: "0",
    },
    signatures: [
      "JQTo9qReJq4j7cFAP2JLCU2z8oHhnMiUatctfpk5rxddXkpYz0+jO5kiJarI57vHMz+dbzy0hY4XxPQD7GF6GA==",
    ],
  },
  txhash: "940633FD9F58BDD730AA7B3260116BBB4940B18C3973B5C9D4790837EF5B93C4",
};

export const mockApiResponsesForExtendLiquidity = {
  GET: {
    "/initia/move/v1/accounts/0x31a358ffa5db08ee9d97b9837247eb1cbb66c1943b323d074d3e241d358edc1e/resources":
      {
        pagination: { next_key: null, total: "0" },
        resources: [
          {
            address:
              "0x31a358ffa5db08ee9d97b9837247eb1cbb66c1943b323d074d3e241d358edc1e",
            move_resource:
              '{"type":"0x1::object::ObjectCore","data":{"allow_ungated_transfer":false,"owner":"0xa48b383a1d5ce0f2a663e69ce2ca5f921fe19fd6","version":"1"}}',
            raw_bytes:
              "AAAAAAAAAAAAAAAApIs4Oh1c4PKmY+ac4spfkh/hn9YAAQAAAAAAAAA=",
            struct_tag: "0x1::object::ObjectCore",
          },
          {
            address:
              "0x31a358ffa5db08ee9d97b9837247eb1cbb66c1943b323d074d3e241d358edc1e",
            move_resource:
              '{"type":"0x1::fungible_asset::FungibleStore","data":{"balance":"583295670","frozen":false,"metadata":{"inner":"0x8e4733bdabcf7d4afc3d14f0dd46c9bf52fb0fce9e4b996c939e195b8bc891d9"}}}',
            raw_bytes:
              "jkczvavPfUr8PRTw3UbJv1L7D86eS5lsk54ZW4vIkdm2ysaiAAAAAAA=",
            struct_tag: "0x1::fungible_asset::FungibleStore",
          },
        ],
      },
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
            struct_tag: "0x1::object::ObjectCore",
          },
          {
            address:
              "0x66a8cb0bfb991610dcffb8a6543ac0887c7c5405b8f985ebed6d628fe50c4686",
            move_resource:
              '{"type":"0x1::fungible_asset::FungibleStore","data":{"balance":"0","frozen":false,"metadata":{"inner":"0x8e4733bdabcf7d4afc3d14f0dd46c9bf52fb0fce9e4b996c939e195b8bc891d9"}}}',
            raw_bytes:
              "jkczvavPfUr8PRTw3UbJv1L7D86eS5lsk54ZW4vIkdkAAAAAAAAAAAA=",
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
    "/initia/mstaking/v1/validators/initvaloper1qx6ghyv83caecuxgl77lvlnha9d9y6fntryc8a":
      {
        validator: {
          description: {
            details: "",
            identity: "A2879F08F59FB0AF",
            moniker: "Orbital Command",
            security_contact: "",
            website: "https://orbitalcommand.io",
          },
          operator_address:
            "initvaloper1qx6ghyv83caecuxgl77lvlnha9d9y6fntryc8a",
        },
      },
  },
};
