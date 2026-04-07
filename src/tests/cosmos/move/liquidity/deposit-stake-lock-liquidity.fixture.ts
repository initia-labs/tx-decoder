export const mockMsgDepositStakeLockLiquidity = {
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
            '{"store_addr":"0x31a358ffa5db08ee9d97b9837247eb1cbb66c1943b323d074d3e241d358edc1e","metadata_addr":"0x8e4733bdabcf7d4afc3d14f0dd46c9bf52fb0fce9e4b996c939e195b8bc891d9","amount":"18888"}'
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
            '{"store_addr":"0x66a8cb0bfb991610dcffb8a6543ac0887c7c5405b8f985ebed6d628fe50c4686","metadata_addr":"0x8e4733bdabcf7d4afc3d14f0dd46c9bf52fb0fce9e4b996c939e195b8bc891d9","amount":"18888"}'
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
          value: "18888uinit"
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
          value: "18888uinit"
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
          value: "18888uinit"
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
          value: "18888uinit"
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
          value: "init15j9nswsatns09fnru6ww9jjljg07r87kr56mdc/325"
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
            "rL3Pt82eWFy1mgqEMnLIllVhxNMoWxpQJjTAmHF5wDRg0mxzkcHIjitfWSY10u3WWojHmHHyNZPtyK07yFUGXA=="
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
          value: "0xb6bf50aa9d5f827458a5424d41ef81a4ef8d7fd0"
        },
        {
          index: true,
          key: "module_name",
          value: "dex_utils"
        },
        {
          index: true,
          key: "function_name",
          value: "unproportional_provide_lock_stake"
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
            '{"store_addr":"0xbae31176bdad6a44f2a660d73fd95e48d914c7ae5bd52f3f99eb2833579ce51c","metadata_addr":"0xe0e9394b24e53775d6af87934ac02d73536ad58b7894f6ccff3f5e7c0d548e55","amount":"1000000"}'
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
            '{"store_addr":"0x31a358ffa5db08ee9d97b9837247eb1cbb66c1943b323d074d3e241d358edc1e","metadata_addr":"0x8e4733bdabcf7d4afc3d14f0dd46c9bf52fb0fce9e4b996c939e195b8bc891d9","amount":"8449282"}'
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
          value: "0x1::dex::ProvideEvent"
        },
        {
          index: true,
          key: "data",
          value:
            '{"coin_a":"0xe0e9394b24e53775d6af87934ac02d73536ad58b7894f6ccff3f5e7c0d548e55","coin_b":"0x8e4733bdabcf7d4afc3d14f0dd46c9bf52fb0fce9e4b996c939e195b8bc891d9","liquidity_token":"0x543b35a39cfadad3da3c23249c474455d15efd2f94f849473226dee8a3c7a9e1","coin_a_amount":"995524","coin_b_amount":"8449282","liquidity":"8391799"}'
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
            '{"store_addr":"0x39e454a8b7b1b71b2c0c27bf4ce1fbe234652f2c40f1fc209b023beaa7ece013","metadata_addr":"0xe0e9394b24e53775d6af87934ac02d73536ad58b7894f6ccff3f5e7c0d548e55","amount":"995524"}'
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
            '{"store_addr":"0xd8d20f9cd225d52f126bd3f973cbb83de3212b1b3dae547f13dd01f593d537b3","metadata_addr":"0x8e4733bdabcf7d4afc3d14f0dd46c9bf52fb0fce9e4b996c939e195b8bc891d9","amount":"8449282"}'
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
            '{"metadata_addr":"0x543b35a39cfadad3da3c23249c474455d15efd2f94f849473226dee8a3c7a9e1","amount":"8391799"}'
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
            '{"store_addr":"0x39e454a8b7b1b71b2c0c27bf4ce1fbe234652f2c40f1fc209b023beaa7ece013","metadata_addr":"0xe0e9394b24e53775d6af87934ac02d73536ad58b7894f6ccff3f5e7c0d548e55","amount":"4476"}'
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
          value: "0x1::dex::SingleAssetProvideEvent"
        },
        {
          index: true,
          key: "data",
          value:
            '{"coin_a":"0xe0e9394b24e53775d6af87934ac02d73536ad58b7894f6ccff3f5e7c0d548e55","coin_b":"0x8e4733bdabcf7d4afc3d14f0dd46c9bf52fb0fce9e4b996c939e195b8bc891d9","liquidity_token":"0x543b35a39cfadad3da3c23249c474455d15efd2f94f849473226dee8a3c7a9e1","provide_coin":"0xe0e9394b24e53775d6af87934ac02d73536ad58b7894f6ccff3f5e7c0d548e55","provide_amount":"4476","fee_amount":"11","liquidity":"7527"}'
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
            '{"metadata_addr":"0x543b35a39cfadad3da3c23249c474455d15efd2f94f849473226dee8a3c7a9e1","amount":"7527"}'
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
            '{"store_addr":"0x4f73485a3e840d0d3baa691a6432e1f31c91e4f97cdc0dff465ab7d28e75379e","metadata_addr":"0x543b35a39cfadad3da3c23249c474455d15efd2f94f849473226dee8a3c7a9e1","amount":"8399326"}'
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
            '{"store_addr":"0x4f73485a3e840d0d3baa691a6432e1f31c91e4f97cdc0dff465ab7d28e75379e","metadata_addr":"0x543b35a39cfadad3da3c23249c474455d15efd2f94f849473226dee8a3c7a9e1","amount":"8399326"}'
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
            '{"store_addr":"0x84f9cc0aeed221dc8f39caf1bb8b79803e073493bf017514156e41d46060fb04","metadata_addr":"0x543b35a39cfadad3da3c23249c474455d15efd2f94f849473226dee8a3c7a9e1","amount":"8399326"}'
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
          value: "0x1,0x93354845030274cd4bf1686abd60ab28ec52e1a7"
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
            '{"store_addr":"0xba2a23251eb06923fadb03ea9856c66510fefc4dfa9abe92cfb2961c9145cfb3","metadata_addr":"0x8e4733bdabcf7d4afc3d14f0dd46c9bf52fb0fce9e4b996c939e195b8bc891d9","amount":"11"}'
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
            '{"store_addr":"0x1e2141f755b89422e8fc4b348e7a2f4b43a06cc3356f643fde7ccc6f6d7f1cb4","metadata_addr":"0x8e4733bdabcf7d4afc3d14f0dd46c9bf52fb0fce9e4b996c939e195b8bc891d9","amount":"11"}'
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
          value: "init1jv65s3grqf6v6jl3dp4t6c9t9rk99cd8ffy0za"
        },
        {
          index: true,
          key: "amount",
          value: "11uinit"
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
          value:
            "init1fzny967x2nsn4mcp6t7azlrx4mxn97zdelgzlfnw39scs6vrwhcqglyesr"
        },
        {
          index: true,
          key: "amount",
          value: "11uinit"
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
          value:
            "init1fzny967x2nsn4mcp6t7azlrx4mxn97zdelgzlfnw39scs6vrwhcqglyesr"
        },
        {
          index: true,
          key: "sender",
          value: "init1jv65s3grqf6v6jl3dp4t6c9t9rk99cd8ffy0za"
        },
        {
          index: true,
          key: "amount",
          value: "11uinit"
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
          value: "init1jv65s3grqf6v6jl3dp4t6c9t9rk99cd8ffy0za"
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
          value:
            "0x1,0x48a642ebc654e13aef01d2fdd17c66aecd32f84dcfd02fa66e896188698375f0"
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
            '{"store_addr":"0x84f9cc0aeed221dc8f39caf1bb8b79803e073493bf017514156e41d46060fb04","metadata_addr":"0x543b35a39cfadad3da3c23249c474455d15efd2f94f849473226dee8a3c7a9e1","amount":"8399326"}'
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
            '{"store_addr":"0xeae8f912db9acfb4901766874adc7f6dbb1d5fea4785a423671ba5afc59a710f","metadata_addr":"0x543b35a39cfadad3da3c23249c474455d15efd2f94f849473226dee8a3c7a9e1","amount":"8399326"}'
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
          value:
            "init1fzny967x2nsn4mcp6t7azlrx4mxn97zdelgzlfnw39scs6vrwhcqglyesr"
        },
        {
          index: true,
          key: "amount",
          value:
            "8399326move/543b35a39cfadad3da3c23249c474455d15efd2f94f849473226dee8a3c7a9e1"
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
          value: "init1fl48vsnmsdzcv85q5d2q4z5ajdha8yu3mdfuj4"
        },
        {
          index: true,
          key: "amount",
          value:
            "8399326move/543b35a39cfadad3da3c23249c474455d15efd2f94f849473226dee8a3c7a9e1"
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
          key: "validator",
          value: "initvaloper1qx6ghyv83caecuxgl77lvlnha9d9y6fntryc8a"
        },
        {
          index: true,
          key: "delegator",
          value:
            "init1fzny967x2nsn4mcp6t7azlrx4mxn97zdelgzlfnw39scs6vrwhcqglyesr"
        },
        {
          index: true,
          key: "amount",
          value:
            "8399326move/543b35a39cfadad3da3c23249c474455d15efd2f94f849473226dee8a3c7a9e1"
        },
        {
          index: true,
          key: "new_shares",
          value:
            "8399326.000000000000000000move/543b35a39cfadad3da3c23249c474455d15efd2f94f849473226dee8a3c7a9e1"
        },
        {
          index: true,
          key: "msg_index",
          value: "0"
        }
      ],
      type: "delegate"
    },
    {
      attributes: [
        {
          index: true,
          key: "success",
          value: "true"
        },
        {
          index: true,
          key: "msg_index",
          value: "0"
        }
      ],
      type: "submsg"
    },
    {
      attributes: [
        {
          index: true,
          key: "sender",
          value:
            "0x48a642ebc654e13aef01d2fdd17c66aecd32f84dcfd02fa66e896188698375f0"
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
          value: "delegate_hook"
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
            "0x3a886b32a802582f2e446e74d4a24d1d7ed01adf46d2a8f65c5723887e708789::lock_staking::DepositDelegationEvent"
        },
        {
          index: true,
          key: "data",
          value:
            '{"staking_account":"0x48a642ebc654e13aef01d2fdd17c66aecd32f84dcfd02fa66e896188698375f0","metadata":"0x543b35a39cfadad3da3c23249c474455d15efd2f94f849473226dee8a3c7a9e1","release_time":"1755418211","validator":"initvaloper1qx6ghyv83caecuxgl77lvlnha9d9y6fntryc8a","locked_share":"8399326"}'
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
            '{"store_addr":"0x1e2141f755b89422e8fc4b348e7a2f4b43a06cc3356f643fde7ccc6f6d7f1cb4","metadata_addr":"0x8e4733bdabcf7d4afc3d14f0dd46c9bf52fb0fce9e4b996c939e195b8bc891d9","amount":"11"}'
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
            '{"store_addr":"0x31a358ffa5db08ee9d97b9837247eb1cbb66c1943b323d074d3e241d358edc1e","metadata_addr":"0x8e4733bdabcf7d4afc3d14f0dd46c9bf52fb0fce9e4b996c939e195b8bc891d9","amount":"11"}'
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
          key: "success",
          value: "true"
        },
        {
          index: true,
          key: "msg_index",
          value: "0"
        }
      ],
      type: "submsg"
    }
  ],
  gas_used: "868249",
  gas_wanted: "1222513",
  height: "5133948",
  info: "",
  logs: [],
  raw_log: "",
  timestamp: "2025-07-18T08:00:18Z",
  tx: {
    "@type": "/cosmos.tx.v1beta1.Tx",
    auth_info: {
      fee: {
        amount: [
          {
            amount: "18888",
            denom: "uinit"
          }
        ],
        gas_limit: "1222513",
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
          sequence: "325"
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
            "VDs1o5z62tPaPCMknEdEVdFe/S+U+ElHMibe6KPHqeE=",
            "QEIPAAAAAAA=",
            "Au2AAAAAAAA=",
            "AdKFfwAAAAAA",
            "Y46haAAAAAA=",
            "MmluaXR2YWxvcGVyMXF4NmdoeXY4M2NhZWN1eGdsNzdsdmxuaGE5ZDl5NmZudHJ5Yzhh"
          ],
          function_name: "unproportional_provide_lock_stake",
          module_address: "0xb6bf50aa9d5f827458a5424d41ef81a4ef8d7fd0",
          module_name: "dex_utils",
          sender: "init15j9nswsatns09fnru6ww9jjljg07r87kr56mdc",
          type_args: []
        }
      ],
      non_critical_extension_options: [],
      timeout_height: "0"
    },
    signatures: [
      "rL3Pt82eWFy1mgqEMnLIllVhxNMoWxpQJjTAmHF5wDRg0mxzkcHIjitfWSY10u3WWojHmHHyNZPtyK07yFUGXA=="
    ]
  },
  txhash: "3007A14BC461255137C726C0ECC008C4449CCBECA831906ADB23528085001314"
};

export const mockApiResponsesForDepositStakeLockLiquidity = {
  GET: {
    "/initia/move/v1/accounts/0x1e2141f755b89422e8fc4b348e7a2f4b43a06cc3356f643fde7ccc6f6d7f1cb4/resources":
      {
        pagination: { next_key: null, total: "0" },
        resources: [
          {
            address:
              "0x1e2141f755b89422e8fc4b348e7a2f4b43a06cc3356f643fde7ccc6f6d7f1cb4",
            move_resource:
              '{"type":"0x1::object::ObjectCore","data":{"allow_ungated_transfer":false,"owner":"0x93354845030274cd4bf1686abd60ab28ec52e1a7","version":"1"}}',
            raw_bytes:
              "AAAAAAAAAAAAAAAAAJNVSEUDAidNS/FoarvWCrKOxS4X8AAQAAAAAAAAA=",
            struct_tag: "0x1::object::ObjectCore"
          },
          {
            address:
              "0x1e2141f755b89422e8fc4b348e7a2f4b43a06cc3356f643fde7ccc6f6d7f1cb4",
            move_resource:
              '{"type":"0x1::fungible_asset::FungibleStore","data":{"balance":"0","frozen":false,"metadata":{"inner":"0x8e4733bdabcf7d4afc3d14f0dd46c9bf52fb0fce9e4b996c939e195b8bc891d9"}}}',
            raw_bytes:
              "jkczvavPfUr8PRTw3UbJv1L7D86eS5lsk54ZW4vIkdkAAAAAAAAAAAA=",
            struct_tag: "0x1::fungible_asset::FungibleStore"
          }
        ]
      },
    "/initia/move/v1/accounts/0x4f73485a3e840d0d3baa691a6432e1f31c91e4f97cdc0dff465ab7d28e75379e/resources":
      {
        pagination: { next_key: null, total: "0" },
        resources: [
          {
            address:
              "0x4f73485a3e840d0d3baa691a6432e1f31c91e4f97cdc0dff465ab7d28e75379e",
            move_resource:
              '{"type":"0x1::object::ObjectCore","data":{"allow_ungated_transfer":false,"owner":"0xa48b383a1d5ce0f2a663e69ce2ca5f921fe19fd6","version":"1"}}',
            raw_bytes:
              "AAAAAAAAAAAAAAAApIs4Oh1c4PKmY+ac4spfkh/hn9YAAQAAAAAAAAA=",
            struct_tag: "0x1::object::ObjectCore"
          },
          {
            address:
              "0x4f73485a3e840d0d3baa691a6432e1f31c91e4f97cdc0dff465ab7d28e75379e",
            move_resource:
              '{"type":"0x1::fungible_asset::FungibleStore","data":{"balance":"25356075","frozen":false,"metadata":{"inner":"0x543b35a39cfadad3da3c23249c474455d15efd2f94f849473226dee8a3c7a9e1"}}}',
            raw_bytes:
              "VDs1o5z62tPaPCMknEdEVdFe/S+U+ElHMibe6KPHqeEr54IBAAAAAAA=",
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
            struct_tag: "0x1::object::ObjectCore"
          },
          {
            address:
              "0x39e454a8b7b1b71b2c0c27bf4ce1fbe234652f2c40f1fc209b023beaa7ece013",
            move_resource:
              '{"type":"0x1::fungible_asset::FungibleStore","data":{"balance":"2300487677883","frozen":false,"metadata":{"inner":"0xe0e9394b24e53775d6af87934ac02d73536ad58b7894f6ccff3f5e7c0d548e55"}}}',
            raw_bytes:
              "4Ok5SyTlN3XWr4eTSsAtc1Nq1Yd4lPbM/z9efA1UjlW7N8CfFwIAAAA=",
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
              '{"type":"0x1::fungible_asset::FungibleStore","data":{"balance":"0","frozen":false,"metadata":{"inner":"0x8e4733bdabcf7d4afc3d14f0dd46c9bf52fb0fce9e4b996c939e195b8bc891d9"}}}',
            raw_bytes:
              "jkczvavPfUr8PRTw3UbJv1L7D86eS5lsk54ZW4vIkdkAAAAAAAAAAAA=",
            struct_tag: "0x1::fungible_asset::FungibleStore"
          }
        ]
      },
    "/initia/move/v1/accounts/0x84f9cc0aeed221dc8f39caf1bb8b79803e073493bf017514156e41d46060fb04/resources":
      {
        pagination: { next_key: null, total: "0" },
        resources: [
          {
            address:
              "0x84f9cc0aeed221dc8f39caf1bb8b79803e073493bf017514156e41d46060fb04",
            move_resource:
              '{"type":"0x1::object::ObjectCore","data":{"allow_ungated_transfer":false,"owner":"0x48a642ebc654e13aef01d2fdd17c66aecd32f84dcfd02fa66e896188698375f0","version":"1"}}',
            raw_bytes:
              "AAAAAAAAAAAAAAASH6ZC68ZU4Trv4dL90XxmrsyjL4TPz6L6ZuiWGIaYN18AAQAAAAAAAAA=",
            struct_tag: "0x1::object::ObjectCore"
          },
          {
            address:
              "0x84f9cc0aeed221dc8f39caf1bb8b79803e073493bf017514156e41d46060fb04",
            move_resource:
              '{"type":"0x1::fungible_asset::FungibleStore","data":{"balance":"0","frozen":false,"metadata":{"inner":"0x543b35a39cfadad3da3c23249c474455d15efd2f94f849473226dee8a3c7a9e1"}}}',
            raw_bytes:
              "VDs1o5z62tPaPCMknEdEVdFe/S+U+ElHMibe6KPHqeEAAAAAAAAAAAA=",
            struct_tag: "0x1::fungible_asset::FungibleStore"
          }
        ]
      },
    "/initia/move/v1/accounts/0xba2a23251eb06923fadb03ea9856c66510fefc4dfa9abe92cfb2961c9145cfb3/resources":
      {
        pagination: { next_key: null, total: "0" },
        resources: [
          {
            address:
              "0xba2a23251eb06923fadb03ea9856c66510fefc4dfa9abe92cfb2961c9145cfb3",
            move_resource:
              '{"type":"0x1::object::ObjectCore","data":{"allow_ungated_transfer":false,"owner":"0x93354845030274cd4bf1686abd60ab28ec52e1a7","version":"1"}}',
            raw_bytes:
              "AAAAAAAAAAAAAAAAAJNVSEUDAidNS/FoarvWCrKOxS4X8AAQAAAAAAAAA=",
            struct_tag: "0x1::object::ObjectCore"
          },
          {
            address:
              "0xba2a23251eb06923fadb03ea9856c66510fefc4dfa9abe92cfb2961c9145cfb3",
            move_resource:
              '{"type":"0x1::fungible_asset::FungibleStore","data":{"balance":"0","frozen":false,"metadata":{"inner":"0x8e4733bdabcf7d4afc3d14f0dd46c9bf52fb0fce9e4b996c939e195b8bc891d9"}}}',
            raw_bytes:
              "jkczvavPfUr8PRTw3UbJv1L7D86eS5lsk54ZW4vIkdkAAAAAAAAAAAA=",
            struct_tag: "0x1::fungible_asset::FungibleStore"
          }
        ]
      },
    "/initia/move/v1/accounts/0xbae31176bdad6a44f2a660d73fd95e48d914c7ae5bd52f3f99eb2833579ce51c/resources":
      {
        pagination: { next_key: null, total: "0" },
        resources: [
          {
            address:
              "0xbae31176bdad6a44f2a660d73fd95e48d914c7ae5bd52f3f99eb2833579ce51c",
            move_resource:
              '{"type":"0x1::object::ObjectCore","data":{"allow_ungated_transfer":false,"owner":"0xa48b383a1d5ce0f2a663e69ce2ca5f921fe19fd6","version":"1"}}',
            raw_bytes:
              "AAAAAAAAAAAAAAAApIs4Oh1c4PKmY+ac4spfkh/hn9YAAQAAAAAAAAA=",
            struct_tag: "0x1::object::ObjectCore"
          },
          {
            address:
              "0xbae31176bdad6a44f2a660d73fd95e48d914c7ae5bd52f3f99eb2833579ce51c",
            move_resource:
              '{"type":"0x1::fungible_asset::FungibleStore","data":{"balance":"5229099","frozen":false,"metadata":{"inner":"0xe0e9394b24e53775d6af87934ac02d73536ad58b7894f6ccff3f5e7c0d548e55"}}}',
            raw_bytes:
              "4Ok5SyTlN3XWr4eTSsAtc1Nq1Yd4lPbM/z9efA1UjlUryk8AAAAAAAA=",
            struct_tag: "0x1::fungible_asset::FungibleStore"
          }
        ]
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
            struct_tag: "0x1::object::ObjectCore"
          },
          {
            address:
              "0xd8d20f9cd225d52f126bd3f973cbb83de3212b1b3dae547f13dd01f593d537b3",
            move_resource:
              '{"type":"0x1::fungible_asset::FungibleStore","data":{"balance":"20997773153743","frozen":false,"metadata":{"inner":"0x8e4733bdabcf7d4afc3d14f0dd46c9bf52fb0fce9e4b996c939e195b8bc891d9"}}}',
            raw_bytes:
              "jkczvavPfUr8PRTw3UbJv1L7D86eS5lsk54ZW4vIkdnPVc/sGBMAAAA=",
            struct_tag: "0x1::fungible_asset::FungibleStore"
          }
        ]
      },
    "/initia/move/v1/accounts/0xeae8f912db9acfb4901766874adc7f6dbb1d5fea4785a423671ba5afc59a710f/resources":
      {
        pagination: { next_key: null, total: "0" },
        resources: [
          {
            address:
              "0xeae8f912db9acfb4901766874adc7f6dbb1d5fea4785a423671ba5afc59a710f",
            move_resource:
              '{"type":"0x1::object::ObjectCore","data":{"allow_ungated_transfer":false,"owner":"0x4fea76427b8345861e80a3540a8a9d936fd39391","version":"1"}}',
            raw_bytes:
              "AAAAAAAAAAAAAAAAT+p2QnuDRYYegKNUCoqdk2/Tk5EAAQAAAAAAAAA=",
            struct_tag: "0x1::object::ObjectCore"
          },
          {
            address:
              "0xeae8f912db9acfb4901766874adc7f6dbb1d5fea4785a423671ba5afc59a710f",
            move_resource:
              '{"type":"0x1::fungible_asset::FungibleStore","data":{"balance":"19165899045508","frozen":false,"metadata":{"inner":"0x543b35a39cfadad3da3c23249c474455d15efd2f94f849473226dee8a3c7a9e1"}}}',
            raw_bytes:
              "VDs1o5z62tPaPCMknEdEVdFe/S+U+ElHMibe6KPHqeGEuppobhEAAAA=",
            struct_tag: "0x1::fungible_asset::FungibleStore"
          }
        ]
      },
    "/initia/move/v1/denom?metadata=0x8e4733bdabcf7d4afc3d14f0dd46c9bf52fb0fce9e4b996c939e195b8bc891d9":
      {
        denom: "uinit"
      },
    "/initia/move/v1/denom?metadata=0x543b35a39cfadad3da3c23249c474455d15efd2f94f849473226dee8a3c7a9e1":
      {
        denom:
          "move/543b35a39cfadad3da3c23249c474455d15efd2f94f849473226dee8a3c7a9e1"
      },
    "/initia/move/v1/denom?metadata=0xe0e9394b24e53775d6af87934ac02d73536ad58b7894f6ccff3f5e7c0d548e55":
      {
        denom:
          "ibc/6490A7EAB61059BFC1CDDEB05917DD70BDF3A611654162A1A47DB930D40D8AF4"
      },
    "/initia/mstaking/v1/validators/initvaloper1qx6ghyv83caecuxgl77lvlnha9d9y6fntryc8a":
      {
        validator: {
          commission: {
            commission_rates: {
              max_change_rate: "0.010000000000000000",
              max_rate: "0.200000000000000000",
              rate: "0.050000000000000000"
            },
            update_time: "2023-05-15T07:00:00Z"
          },
          consensus_pubkey: {
            "@type": "/cosmos.crypto.ed25519.PubKey",
            key: "example_key"
          },
          delegator_shares: "1204902178007.000000000000000000",
          description: {
            details: "",
            identity: "A2879F08F59FB0AF",
            moniker: "Orbital Command",
            security_contact: "",
            website: "https://orbitalcommand.io"
          },
          jailed: false,
          min_self_delegation: "1",
          operator_address:
            "initvaloper1qx6ghyv83caecuxgl77lvlnha9d9y6fntryc8a",
          status: "BOND_STATUS_BONDED",
          tokens: {
            "move/543b35a39cfadad3da3c23249c474455d15efd2f94f849473226dee8a3c7a9e1":
              "606012699156",
            uinit: "578509960082"
          },
          unbonding_height: "0",
          unbonding_time: "1970-01-01T00:00:00Z"
        }
      }
  },
  POST: {}
};
