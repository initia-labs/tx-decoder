export const mockMsgDepositMinitswap = {
  code: 0,
  codespace: "",
  data: "12240A222F696E697469612E6D6F76652E76312E4D736745786563757465526573706F6E7365",
  events: [
    {
      attributes: [
        {
          index: true,
          key: "sender",
          value: "0x1,0xa48b383a1d5ce0f2a663e69ce2ca5f921fe19fd6"
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
            '{"store_addr":"0x31a358ffa5db08ee9d97b9837247eb1cbb66c1943b323d074d3e241d358edc1e","metadata_addr":"0x8e4733bdabcf7d4afc3d14f0dd46c9bf52fb0fce9e4b996c939e195b8bc891d9","amount":"4020"}'
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
            '{"store_addr":"0x66a8cb0bfb991610dcffb8a6543ac0887c7c5405b8f985ebed6d628fe50c4686","metadata_addr":"0x8e4733bdabcf7d4afc3d14f0dd46c9bf52fb0fce9e4b996c939e195b8bc891d9","amount":"4020"}'
        }
      ],
      type: "move"
    },
    {
      attributes: [
        {
          index: true,
          key: "spender",
          value: "init15j9nswsatns09fnru6ww9jjljg07r87kr56mdc"
        },
        {
          index: true,
          key: "amount",
          value: "4020uinit"
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
          value: "4020uinit"
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
          value: "init15j9nswsatns09fnru6ww9jjljg07r87kr56mdc"
        },
        {
          index: true,
          key: "amount",
          value: "4020uinit"
        }
      ],
      type: "transfer"
    },
    {
      attributes: [
        {
          index: true,
          key: "sender",
          value: "init15j9nswsatns09fnru6ww9jjljg07r87kr56mdc"
        }
      ],
      type: "message"
    },
    {
      attributes: [
        {
          index: true,
          key: "fee",
          value: "4020uinit"
        },
        {
          index: true,
          key: "fee_payer",
          value: "init15j9nswsatns09fnru6ww9jjljg07r87kr56mdc"
        }
      ],
      type: "tx"
    },
    {
      attributes: [
        {
          index: true,
          key: "acc_seq",
          value: "init15j9nswsatns09fnru6ww9jjljg07r87kr56mdc/333"
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
            "a2hUzE5hAb2ShncuTmMjDenoCHUiOAAAhO2G5fwvJVFvdOdpni0Kg/6dUGqQqtGO1JwV3qq4UKTnQkaPuUT6qA=="
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
          value: "init15j9nswsatns09fnru6ww9jjljg07r87kr56mdc"
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
          value: "0xa48b383a1d5ce0f2a663e69ce2ca5f921fe19fd6"
        },
        {
          index: true,
          key: "module_addr",
          value: "0x1"
        },
        {
          index: true,
          key: "module_name",
          value: "minitswap"
        },
        {
          index: true,
          key: "function_name",
          value: "provide"
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
            '{"store_addr":"0x31a358ffa5db08ee9d97b9837247eb1cbb66c1943b323d074d3e241d358edc1e","metadata_addr":"0x8e4733bdabcf7d4afc3d14f0dd46c9bf52fb0fce9e4b996c939e195b8bc891d9","amount":"1000000"}'
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
            '{"store_addr":"0x7d0c81750b50bb4d2fd3efbbbb91ab44646c18717794bd2e75778b351ee5e5e1","metadata_addr":"0x8e4733bdabcf7d4afc3d14f0dd46c9bf52fb0fce9e4b996c939e195b8bc891d9","amount":"1000000"}'
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
          value: "0x1::minitswap::ProvideEvent"
        },
        {
          index: true,
          key: "data",
          value: '{"provide_amount":"1000000","share_amount":"967693"}'
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
          value: "0x1::fungible_asset::MintEvent"
        },
        {
          index: true,
          key: "data",
          value:
            '{"metadata_addr":"0x3ae46e9923ea036dcd788b81ae81b5a1e6dd768cca41a1b18370f858dea883ca","amount":"967693"}'
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
            '{"store_addr":"0x355c88ca14d35a7a4cb45588ab78889ce9e4396c49b786278e8587654e37956","metadata_addr":"0x3ae46e9923ea036dcd788b81ae81b5a1e6dd768cca41a1b18370f858dea883ca","amount":"967693"}'
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
  gas_used: "180830",
  gas_wanted: "260140",
  height: "5134048",
  info: "",
  logs: [],
  raw_log: "",
  timestamp: "2025-07-18T08:04:03Z",
  tx: {
    "@type": "/cosmos.tx.v1beta1.Tx",
    auth_info: {
      fee: {
        amount: [
          {
            amount: "4020",
            denom: "uinit"
          }
        ],
        gas_limit: "260140",
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
            key: "AzTuklyY6zGN3ELkFnWIyF/xv9kVQ5de9RnADowt882h"
          },
          sequence: "333"
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
          args: ["QEIPAAAAAAA=", "ASixDgAAAAAA"],
          function_name: "provide",
          module_address: "0x1",
          module_name: "minitswap",
          sender: "init15j9nswsatns09fnru6ww9jjljg07r87kr56mdc",
          type_args: []
        }
      ],
      non_critical_extension_options: [],
      timeout_height: "0"
    },
    signatures: [
      "a2hUzE5hAb2ShncuTmMjDenoCHUiOAAAhO2G5fwvJVFvdOdpni0Kg/6dUGqQqtGO1JwV3qq4UKTnQkaPuUT6qA=="
    ]
  },
  txhash: "8A4BD50BA02BBFA09D2D931983EB630FD358EA2D44FCD185C695DD7D38136795"
};

export const mockApiResponsesForDepositMinitswap = {
  GET: {
    "/initia/move/v1/accounts/0x7d0c81750b50bb4d2fd3efbbbb91ab44646c18717794bd2e75778b351ee5e5e1/resources":
      {
        pagination: { next_key: null, total: "0" },
        resources: [
          {
            address:
              "0x7d0c81750b50bb4d2fd3efbbbb91ab44646c18717794bd2e75778b351ee5e5e1",
            move_resource:
              '{"type":"0x1::object::ObjectCore","data":{"allow_ungated_transfer":false,"owner":"0x1","version":"1"}}',
            raw_bytes: "AQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEA",
            struct_tag: "0x1::object::ObjectCore"
          },
          {
            address:
              "0x7d0c81750b50bb4d2fd3efbbbb91ab44646c18717794bd2e75778b351ee5e5e1",
            move_resource:
              '{"type":"0x1::fungible_asset::FungibleStore","data":{"balance":"1000000","frozen":false,"metadata":{"inner":"0x8e4733bdabcf7d4afc3d14f0dd46c9bf52fb0fce9e4b996c939e195b8bc891d9"}}}',
            raw_bytes: "jkczvavPfUr8PRTw3UbJv1L7D86eS5lsk54ZW4vIkdmAQ+sDAAAAA=",
            struct_tag: "0x1::fungible_asset::FungibleStore"
          }
        ]
      },
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
            struct_tag: "0x1::object::ObjectCore"
          },
          {
            address:
              "0x31a358ffa5db08ee9d97b9837247eb1cbb66c1943b323d074d3e241d358edc1e",
            move_resource:
              '{"type":"0x1::fungible_asset::FungibleStore","data":{"balance":"583195695","frozen":false,"metadata":{"inner":"0x8e4733bdabcf7d4afc3d14f0dd46c9bf52fb0fce9e4b996c939e195b8bc891d9"}}}',
            raw_bytes:
              "jkczvavPfUr8PRTw3UbJv1L7D86eS5lsk54ZW4vIkdkv3MIiAAAAAAA=",
            struct_tag: "0x1::fungible_asset::FungibleStore"
          }
        ]
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
            struct_tag: "0x1::object::ObjectCore"
          },
          {
            address:
              "0x66a8cb0bfb991610dcffb8a6543ac0887c7c5405b8f985ebed6d628fe50c4686",
            move_resource:
              '{"type":"0x1::fungible_asset::FungibleStore","data":{"balance":"4175","frozen":false,"metadata":{"inner":"0x8e4733bdabcf7d4afc3d14f0dd46c9bf52fb0fce9e4b996c939e195b8bc891d9"}}}',
            raw_bytes:
              "jkczvavPfUr8PRTw3UbJv1L7D86eS5lsk54ZW4vIkdlPEAAAAAAAAAA=",
            struct_tag: "0x1::fungible_asset::FungibleStore"
          }
        ]
      },
    "/initia/move/v1/accounts/0x355c88ca14d35a7a4cb45588ab78889ce9e4396c49b786278e8587654e37956/resources":
      {
        pagination: { next_key: null, total: "0" },
        resources: [
          {
            address:
              "0x355c88ca14d35a7a4cb45588ab78889ce9e4396c49b786278e8587654e37956",
            move_resource:
              '{"type":"0x1::object::ObjectCore","data":{"allow_ungated_transfer":false,"owner":"0xa48b383a1d5ce0f2a663e69ce2ca5f921fe19fd6","version":"1"}}',
            raw_bytes:
              "AAAAAAAAAAAAAAAApIs4Oh1c4PKmY+ac4spfkh/hn9YAAQAAAAAAAAA=",
            struct_tag: "0x1::object::ObjectCore"
          },
          {
            address:
              "0x355c88ca14d35a7a4cb45588ab78889ce9e4396c49b786278e8587654e37956",
            move_resource:
              '{"type":"0x1::fungible_asset::FungibleStore","data":{"balance":"967693","frozen":false,"metadata":{"inner":"0x3ae46e9923ea036dcd788b81ae81b5a1e6dd768cca41a1b18370f858dea883ca"}}}',
            raw_bytes: "Ouko6SPqA23N2LuBruS1oebdnNsjBOhBs3D+DKiNj77ONQAAAAAAA=",
            struct_tag: "0x1::fungible_asset::FungibleStore"
          }
        ]
      },
    "/initia/move/v1/denom?metadata=0x3ae46e9923ea036dcd788b81ae81b5a1e6dd768cca41a1b18370f858dea883ca":
      {
        denom: "uoinit"
      },
    "/initia/move/v1/denom?metadata=0x8e4733bdabcf7d4afc3d14f0dd46c9bf52fb0fce9e4b996c939e195b8bc891d9":
      {
        denom: "uinit"
      }
  }
};
