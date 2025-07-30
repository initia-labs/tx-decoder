export const mockMsgWithdrawMinitswap = {
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
            '{"store_addr":"0x31a358ffa5db08ee9d97b9837247eb1cbb66c1943b323d074d3e241d358edc1e","metadata_addr":"0x8e4733bdabcf7d4afc3d14f0dd46c9bf52fb0fce9e4b996c939e195b8bc891d9","amount":"3095"}',
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
            '{"store_addr":"0x66a8cb0bfb991610dcffb8a6543ac0887c7c5405b8f985ebed6d628fe50c4686","metadata_addr":"0x8e4733bdabcf7d4afc3d14f0dd46c9bf52fb0fce9e4b996c939e195b8bc891d9","amount":"3095"}',
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
          value: "3095uinit",
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
          value: "3095uinit",
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
          value: "3095uinit",
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
          value: "3095uinit",
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
          value: "init15j9nswsatns09fnru6ww9jjljg07r87kr56mdc/334",
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
            "bgA47QdzGEqctXJMYxvQgfgdAbsCa+D15UuxQxemU5ovn4t4ZHQ4DBrTVWQoVJk+2zyjn+vNdQkeVY2kVTsVpA==",
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
          value: "minitswap",
        },
        {
          index: true,
          key: "function_name",
          value: "unbond",
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
            '{"store_addr":"0x355c88ca14d35a7a4cb45588ab78889ce9e4396c49b786278e8587654e37956","metadata_addr":"0x3ae46e9923ea036dcd788b81ae81b5a1e6dd768cca41a1b18370f858dea883ca","amount":"1000000"}',
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
            '{"metadata_addr":"0x3ae46e9923ea036dcd788b81ae81b5a1e6dd768cca41a1b18370f858dea883ca","amount":"1000000"}',
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
          value: "0x1::minitswap::UnbondEvent",
        },
        {
          index: true,
          key: "data",
          value:
            '{"account":"0xa48b383a1d5ce0f2a663e69ce2ca5f921fe19fd6","share_amount":"1000000","withdraw_amount":"1033384","release_time":"1753430669"}',
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
  gas_used: "138068",
  gas_wanted: "200273",
  height: "5134060",
  info: "",
  logs: [],
  raw_log: "",
  timestamp: "2025-07-18T08:04:29Z",
  tx: {
    "@type": "/cosmos.tx.v1beta1.Tx",
    auth_info: {
      fee: {
        amount: [
          {
            amount: "3095",
            denom: "uinit",
          },
        ],
        gas_limit: "200273",
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
          sequence: "334",
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
          args: ["QEIPAAAAAAA="],
          function_name: "unbond",
          module_address: "0x1",
          module_name: "minitswap",
          sender: "init15j9nswsatns09fnru6ww9jjljg07r87kr56mdc",
          type_args: [],
        },
      ],
      non_critical_extension_options: [],
      timeout_height: "0",
    },
    signatures: [
      "bgA47QdzGEqctXJMYxvQgfgdAbsCa+D15UuxQxemU5ovn4t4ZHQ4DBrTVWQoVJk+2zyjn+vNdQkeVY2kVTsVpA==",
    ],
  },
  txhash: "2563F8DC425F3E4639294EFD4EB1EE3DCC3D7A8B293C07106AA1BBC0A1EA2F1F",
};

export const mockApiResponsesForDepositMinitswap = {
  GET: {
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
            struct_tag: "0x1::object::ObjectCore",
          },
          {
            address:
              "0x355c88ca14d35a7a4cb45588ab78889ce9e4396c49b786278e8587654e37956",
            move_resource:
              '{"type":"0x1::fungible_asset::FungibleStore","data":{"balance":"1000000","frozen":false,"metadata":{"inner":"0x3ae46e9923ea036dcd788b81ae81b5a1e6dd768cca41a1b18370f858dea883ca"}}}',
            raw_bytes: "Ouko6SPqA23N2LuBruS1oebdnNsjBOhBs3D+DKiNj77ONQAAAAAAA=",
            struct_tag: "0x1::fungible_asset::FungibleStore",
          },
        ],
      },
    "/initia/move/v1/denom?metadata=0x3ae46e9923ea036dcd788b81ae81b5a1e6dd768cca41a1b18370f858dea883ca":
      {
        denom: "uoinit",
      },
  },
};
