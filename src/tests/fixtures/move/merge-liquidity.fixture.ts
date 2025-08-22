export const mockMsgMergeLiquidity = {
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
            '{"store_addr":"0x31a358ffa5db08ee9d97b9837247eb1cbb66c1943b323d074d3e241d358edc1e","metadata_addr":"0x8e4733bdabcf7d4afc3d14f0dd46c9bf52fb0fce9e4b996c939e195b8bc891d9","amount":"5177"}'
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
            '{"store_addr":"0x66a8cb0bfb991610dcffb8a6543ac0887c7c5405b8f985ebed6d628fe50c4686","metadata_addr":"0x8e4733bdabcf7d4afc3d14f0dd46c9bf52fb0fce9e4b996c939e195b8bc891d9","amount":"5177"}'
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
          value: "5177uinit"
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
          value: "5177uinit"
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
          value: "5177uinit"
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
          value: "5177uinit"
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
          value: "init15j9nswsatns09fnru6ww9jjljg07r87kr56mdc/330"
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
            "yg5S9c2Nrw6K2jXOot76zcfI1KRXyS0OIGowfLTZEvZD7+gfhvEYuzWA0fxjm377nhJ/sLWEITV+7wsh5ptDbg=="
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
          value:
            "0x3a886b32a802582f2e446e74d4a24d1d7ed01adf46d2a8f65c5723887e708789"
        },
        {
          index: true,
          key: "module_name",
          value: "lock_staking"
        },
        {
          index: true,
          key: "function_name",
          value: "batch_extend"
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
            "0x3a886b32a802582f2e446e74d4a24d1d7ed01adf46d2a8f65c5723887e708789::lock_staking::WithdrawDelegationEvent"
        },
        {
          index: true,
          key: "data",
          value:
            '{"staking_account":"0x48a642ebc654e13aef01d2fdd17c66aecd32f84dcfd02fa66e896188698375f0","metadata":"0x543b35a39cfadad3da3c23249c474455d15efd2f94f849473226dee8a3c7a9e1","release_time":"1754822099","validator":"initvaloper1qx6ghyv83caecuxgl77lvlnha9d9y6fntryc8a","locked_share":"10000"}'
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
          value:
            "0x3a886b32a802582f2e446e74d4a24d1d7ed01adf46d2a8f65c5723887e708789::lock_staking::DepositDelegationEvent"
        },
        {
          index: true,
          key: "data",
          value:
            '{"staking_account":"0x48a642ebc654e13aef01d2fdd17c66aecd32f84dcfd02fa66e896188698375f0","metadata":"0x543b35a39cfadad3da3c23249c474455d15efd2f94f849473226dee8a3c7a9e1","release_time":"1755417811","validator":"initvaloper1qx6ghyv83caecuxgl77lvlnha9d9y6fntryc8a","locked_share":"10000"}'
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
  gas_used: "234352",
  gas_wanted: "335071",
  height: "5134006",
  info: "",
  logs: [],
  raw_log: "",
  timestamp: "2025-07-18T08:02:28Z",
  tx: {
    "@type": "/cosmos.tx.v1beta1.Tx",
    auth_info: {
      fee: {
        amount: [
          {
            amount: "5177",
            denom: "uinit"
          }
        ],
        gas_limit: "335071",
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
          sequence: "330"
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
            "AVQ7NaOc+trT2jwjJJxHRFXRXv0vlPhJRzIm3uijx6nh",
            "AQA=",
            "AdN1mGgAAAAA",
            "ATJpbml0dmFsb3BlcjFxeDZnaHl2ODNjYWVjdXhnbDc3bHZsbmhhOWQ5eTZmbnRyeWM4YQ==",
            "AdOMoWgAAAAA"
          ],
          function_name: "batch_extend",
          module_address:
            "0x3a886b32a802582f2e446e74d4a24d1d7ed01adf46d2a8f65c5723887e708789",
          module_name: "lock_staking",
          sender: "init15j9nswsatns09fnru6ww9jjljg07r87kr56mdc",
          type_args: []
        }
      ],
      non_critical_extension_options: [],
      timeout_height: "0"
    },
    signatures: [
      "yg5S9c2Nrw6K2jXOot76zcfI1KRXyS0OIGowfLTZEvZD7+gfhvEYuzWA0fxjm377nhJ/sLWEITV+7wsh5ptDbg=="
    ]
  },
  txhash: "7E3185E07E88188728CFE1D7D57B1BCE602E5D86F1B9D75838D77742B6EE8E9E"
};

export const mockMsgMergeLiquidityMultiplePositions = {
  code: 0,
  codespace: "",
  data: "12240A222F696E697469612E6D6F76652E76312E4D736745786563757465526573706F6E7365",
  events: [
    {
      attributes: [
        {
          index: true,
          key: "sender",
          value: "0x1,0x49ea950eccaa6743d54ef7302d9279e984d7fc09"
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
            '{"store_addr":"0xbcc4ecd72bebf8da1666c4628467d7fd5b3b285404130d947aee80ff77ef3d59","metadata_addr":"0x8e4733bdabcf7d4afc3d14f0dd46c9bf52fb0fce9e4b996c939e195b8bc891d9","amount":"5289"}'
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
          value: '{"owner":"0x49ea950eccaa6743d54ef7302d9279e984d7fc09"}'
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
            '{"store_addr":"0x66a8cb0bfb991610dcffb8a6543ac0887c7c5405b8f985ebed6d628fe50c4686","metadata_addr":"0x8e4733bdabcf7d4afc3d14f0dd46c9bf52fb0fce9e4b996c939e195b8bc891d9","amount":"5289"}'
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
          value: "init1f84f2rkv4fn5842w7uczmyneaxzd0lqfjh5xxs"
        },
        {
          index: true,
          key: "amount",
          value: "5289uinit"
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
          value: "5289uinit"
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
          value: "init1f84f2rkv4fn5842w7uczmyneaxzd0lqfjh5xxs"
        },
        {
          index: true,
          key: "amount",
          value: "5289uinit"
        }
      ],
      type: "transfer"
    },
    {
      attributes: [
        {
          index: true,
          key: "sender",
          value: "init1f84f2rkv4fn5842w7uczmyneaxzd0lqfjh5xxs"
        }
      ],
      type: "message"
    },
    {
      attributes: [
        {
          index: true,
          key: "fee",
          value: "5289uinit"
        },
        {
          index: true,
          key: "fee_payer",
          value: "init1f84f2rkv4fn5842w7uczmyneaxzd0lqfjh5xxs"
        }
      ],
      type: "tx"
    },
    {
      attributes: [
        {
          index: true,
          key: "acc_seq",
          value: "init1f84f2rkv4fn5842w7uczmyneaxzd0lqfjh5xxs/213"
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
            "kShJlff+/Unyw/8Pb3VxMmUsyRXo16bDjb5mGKDMf1kCfCaLtkA4aEFm7c1adUq8X2GgtmDdfbaBot40nF49zg=="
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
          value: "init1f84f2rkv4fn5842w7uczmyneaxzd0lqfjh5xxs"
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
          value: "0x49ea950eccaa6743d54ef7302d9279e984d7fc09"
        },
        {
          index: true,
          key: "module_addr",
          value:
            "0x3a886b32a802582f2e446e74d4a24d1d7ed01adf46d2a8f65c5723887e708789"
        },
        {
          index: true,
          key: "module_name",
          value: "lock_staking"
        },
        {
          index: true,
          key: "function_name",
          value: "batch_extend"
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
            "0x3a886b32a802582f2e446e74d4a24d1d7ed01adf46d2a8f65c5723887e708789::lock_staking::WithdrawDelegationEvent"
        },
        {
          index: true,
          key: "data",
          value:
            '{"staking_account":"0xb4e163d12b45a77ae8d088858cb882945054220e9c1f980684173ab54e26b327","metadata":"0x543b35a39cfadad3da3c23249c474455d15efd2f94f849473226dee8a3c7a9e1","release_time":"1785820872","validator":"initvaloper1gs7kwd5jm8ghnvx4z973aqcenfcej6ykpuydc4","locked_share":"29752524"}'
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
          value:
            "0x3a886b32a802582f2e446e74d4a24d1d7ed01adf46d2a8f65c5723887e708789::lock_staking::DepositDelegationEvent"
        },
        {
          index: true,
          key: "data",
          value:
            '{"staking_account":"0xb4e163d12b45a77ae8d088858cb882945054220e9c1f980684173ab54e26b327","metadata":"0x543b35a39cfadad3da3c23249c474455d15efd2f94f849473226dee8a3c7a9e1","release_time":"1785820991","validator":"initvaloper1gs7kwd5jm8ghnvx4z973aqcenfcej6ykpuydc4","locked_share":"29752524"}'
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
          value:
            "0x3a886b32a802582f2e446e74d4a24d1d7ed01adf46d2a8f65c5723887e708789::lock_staking::WithdrawDelegationEvent"
        },
        {
          index: true,
          key: "data",
          value:
            '{"staking_account":"0xb4e163d12b45a77ae8d088858cb882945054220e9c1f980684173ab54e26b327","metadata":"0x543b35a39cfadad3da3c23249c474455d15efd2f94f849473226dee8a3c7a9e1","release_time":"1785820951","validator":"initvaloper1gs7kwd5jm8ghnvx4z973aqcenfcej6ykpuydc4","locked_share":"3719219"}'
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
          value:
            "0x3a886b32a802582f2e446e74d4a24d1d7ed01adf46d2a8f65c5723887e708789::lock_staking::DepositDelegationEvent"
        },
        {
          index: true,
          key: "data",
          value:
            '{"staking_account":"0xb4e163d12b45a77ae8d088858cb882945054220e9c1f980684173ab54e26b327","metadata":"0x543b35a39cfadad3da3c23249c474455d15efd2f94f849473226dee8a3c7a9e1","release_time":"1785820991","validator":"initvaloper1gs7kwd5jm8ghnvx4z973aqcenfcej6ykpuydc4","locked_share":"3719219"}'
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
  gas_used: "248323",
  gas_wanted: "352578",
  height: "5838642",
  info: "",
  logs: [],
  raw_log: "",
  timestamp: "2025-08-05T14:53:49Z",
  tx: {
    "@type": "/cosmos.tx.v1beta1.Tx",
    auth_info: {
      fee: {
        amount: [
          {
            amount: "5289",
            denom: "uinit"
          }
        ],
        gas_limit: "352578",
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
            key: "AzedVOrp5DX9FupcgUTmo6G11nymw9LXMsW6HeOwMMm2"
          },
          sequence: "213"
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
            "AlQ7NaOc+trT2jwjJJxHRFXRXv0vlPhJRzIm3uijx6nhVDs1o5z62tPaPCMknEdEVdFe/S+U+ElHMibe6KPHqeE=",
            "AgAA",
            "Ash2cWoAAAAAF3dxagAAAAA=",
            "AjJpbml0dmFsb3BlcjFnczdrd2Q1am04Z2hudng0ejk3M2FxY2VuZmNlajZ5a3B1eWRjNDJpbml0dmFsb3BlcjFnczdrd2Q1am04Z2hudng0ejk3M2FxY2VuZmNlajZ5a3B1eWRjNA==",
            "Aj93cWoAAAAAP3dxagAAAAA="
          ],
          function_name: "batch_extend",
          module_address:
            "0x3a886b32a802582f2e446e74d4a24d1d7ed01adf46d2a8f65c5723887e708789",
          module_name: "lock_staking",
          sender: "init1f84f2rkv4fn5842w7uczmyneaxzd0lqfjh5xxs",
          type_args: []
        }
      ],
      non_critical_extension_options: [],
      timeout_height: "0"
    },
    signatures: [
      "kShJlff+/Unyw/8Pb3VxMmUsyRXo16bDjb5mGKDMf1kCfCaLtkA4aEFm7c1adUq8X2GgtmDdfbaBot40nF49zg=="
    ]
  },
  txhash: "250A79ED86C9B1ECEC66330B8DC31407D857FC2755FB4A3CDB112612FDA21BDC"
};

export const mockApiResponsesForMergeLiquidity = {
  GET: {
    "/initia/move/v1/denom?metadata=0x543b35a39cfadad3da3c23249c474455d15efd2f94f849473226dee8a3c7a9e1":
      {
        denom:
          "move/543b35a39cfadad3da3c23249c474455d15efd2f94f849473226dee8a3c7a9e1"
      },
    "/initia/mstaking/v1/validators/initvaloper1qx6ghyv83caecuxgl77lvlnha9d9y6fntryc8a":
      {
        validator: {
          description: {
            details: "",
            identity: "A2879F08F59FB0AF",
            moniker: "Orbital Command",
            security_contact: "",
            website: "https://orbitalcommand.io"
          },
          operator_address: "initvaloper1qx6ghyv83caecuxgl77lvlnha9d9y6fntryc8a"
        }
      }
  }
};

export const mockApiResponsesForMergeLiquidityMultiplePositions = {
  GET: {
    "/initia/move/v1/denom?metadata=0x543b35a39cfadad3da3c23249c474455d15efd2f94f849473226dee8a3c7a9e1":
      {
        denom:
          "move/543b35a39cfadad3da3c23249c474455d15efd2f94f849473226dee8a3c7a9e1"
      },
    "/initia/mstaking/v1/validators/initvaloper1gs7kwd5jm8ghnvx4z973aqcenfcej6ykpuydc4":
      {
        validator: {
          description: {
            details: "",
            identity: "1F41B95A84CFA4B6",
            moniker: "Inertia Foundation | 🎁 Delegation Drop 🎁",
            security_contact: "",
            website: "https://inrt.fi"
          },
          operator_address: "initvaloper1gs7kwd5jm8ghnvx4z973aqcenfcej6ykpuydc4"
        }
      }
  }
};
