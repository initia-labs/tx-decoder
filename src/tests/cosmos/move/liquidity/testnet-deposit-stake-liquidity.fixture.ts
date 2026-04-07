export const mockMsgTestnetDepositStakeLiquidity = {
  code: 0,
  codespace: "",
  data: "12240A222F696E697469612E6D6F76652E76312E4D736745786563757465526573706F6E7365",
  events: [
    {
      attributes: [
        {
          index: true,
          key: "sender",
          value: "0x1,0xfb681c72543098a422f2c81f09b1511d11cd187c"
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
            '{"store_addr":"0x19b16123f9d58f89e161158b7852144ca8afce634a782806377d507494bb5b10","metadata_addr":"0x8e4733bdabcf7d4afc3d14f0dd46c9bf52fb0fce9e4b996c939e195b8bc891d9","amount":"13911"}'
        },
        {
          index: true,
          key: "amount",
          value: "13911"
        },
        {
          index: true,
          key: "metadata_addr",
          value:
            "0x8e4733bdabcf7d4afc3d14f0dd46c9bf52fb0fce9e4b996c939e195b8bc891d9"
        },
        {
          index: true,
          key: "store_addr",
          value:
            "0x19b16123f9d58f89e161158b7852144ca8afce634a782806377d507494bb5b10"
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
          value: '{"owner":"0xfb681c72543098a422f2c81f09b1511d11cd187c"}'
        },
        {
          index: true,
          key: "owner",
          value: "0xfb681c72543098a422f2c81f09b1511d11cd187c"
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
            '{"store_addr":"0x66a8cb0bfb991610dcffb8a6543ac0887c7c5405b8f985ebed6d628fe50c4686","metadata_addr":"0x8e4733bdabcf7d4afc3d14f0dd46c9bf52fb0fce9e4b996c939e195b8bc891d9","amount":"13911"}'
        },
        {
          index: true,
          key: "amount",
          value: "13911"
        },
        {
          index: true,
          key: "metadata_addr",
          value:
            "0x8e4733bdabcf7d4afc3d14f0dd46c9bf52fb0fce9e4b996c939e195b8bc891d9"
        },
        {
          index: true,
          key: "store_addr",
          value:
            "0x66a8cb0bfb991610dcffb8a6543ac0887c7c5405b8f985ebed6d628fe50c4686"
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
        },
        {
          index: true,
          key: "owner",
          value: "0xf1829676db577682e944fc3493d451b67ff3e29f"
        }
      ],
      type: "move"
    },
    {
      attributes: [
        {
          index: true,
          key: "spender",
          value: "init1ld5pcuj5xzv2gghjeq0snv23r5gu6xruz3mnq4"
        },
        {
          index: true,
          key: "amount",
          value: "13911uinit"
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
          value: "13911uinit"
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
          value: "init1ld5pcuj5xzv2gghjeq0snv23r5gu6xruz3mnq4"
        },
        {
          index: true,
          key: "amount",
          value: "13911uinit"
        }
      ],
      type: "transfer"
    },
    {
      attributes: [
        {
          index: true,
          key: "sender",
          value: "init1ld5pcuj5xzv2gghjeq0snv23r5gu6xruz3mnq4"
        }
      ],
      type: "message"
    },
    {
      attributes: [
        {
          index: true,
          key: "fee",
          value: "13911uinit"
        },
        {
          index: true,
          key: "fee_payer",
          value: "init1ld5pcuj5xzv2gghjeq0snv23r5gu6xruz3mnq4"
        }
      ],
      type: "tx"
    },
    {
      attributes: [
        {
          index: true,
          key: "acc_seq",
          value: "init1ld5pcuj5xzv2gghjeq0snv23r5gu6xruz3mnq4/226"
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
            "zPFank41YKzRTpr7puR9odGY0AxPt47qg7N0QFMAHOR0o6+R+/YKZaoBHqGD2yu8nGBuwLgtCK4KClmiDP/MBw=="
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
          value: "init1ld5pcuj5xzv2gghjeq0snv23r5gu6xruz3mnq4"
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
          value: "0xfb681c72543098a422f2c81f09b1511d11cd187c"
        },
        {
          index: true,
          key: "module_addr",
          value:
            "0x42cd8467b1c86e59bf319e5664a09b6b5840bb3fac64f5ce690b5041c530565a"
        },
        {
          index: true,
          key: "module_name",
          value: "dex_utils"
        },
        {
          index: true,
          key: "function_name",
          value: "provide_stake"
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
            '{"store_addr":"0x1aeea76e7eee9ceecb2b6f802e6963e751924be9be0cb4bab29713881b8d56ae","metadata_addr":"0x29824d952e035490fae7567deea5f15b504a68fa73610063c160ab1fa87dd609","amount":"4000000"}'
        },
        {
          index: true,
          key: "amount",
          value: "4000000"
        },
        {
          index: true,
          key: "metadata_addr",
          value:
            "0x29824d952e035490fae7567deea5f15b504a68fa73610063c160ab1fa87dd609"
        },
        {
          index: true,
          key: "store_addr",
          value:
            "0x1aeea76e7eee9ceecb2b6f802e6963e751924be9be0cb4bab29713881b8d56ae"
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
          value: "0x1::fungible_asset::WithdrawOwnerEvent"
        },
        {
          index: true,
          key: "data",
          value: '{"owner":"0xfb681c72543098a422f2c81f09b1511d11cd187c"}'
        },
        {
          index: true,
          key: "owner",
          value: "0xfb681c72543098a422f2c81f09b1511d11cd187c"
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
            '{"store_addr":"0x19b16123f9d58f89e161158b7852144ca8afce634a782806377d507494bb5b10","metadata_addr":"0x8e4733bdabcf7d4afc3d14f0dd46c9bf52fb0fce9e4b996c939e195b8bc891d9","amount":"17001940"}'
        },
        {
          index: true,
          key: "amount",
          value: "17001940"
        },
        {
          index: true,
          key: "metadata_addr",
          value:
            "0x8e4733bdabcf7d4afc3d14f0dd46c9bf52fb0fce9e4b996c939e195b8bc891d9"
        },
        {
          index: true,
          key: "store_addr",
          value:
            "0x19b16123f9d58f89e161158b7852144ca8afce634a782806377d507494bb5b10"
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
          value: "0x1::fungible_asset::WithdrawOwnerEvent"
        },
        {
          index: true,
          key: "data",
          value: '{"owner":"0xfb681c72543098a422f2c81f09b1511d11cd187c"}'
        },
        {
          index: true,
          key: "owner",
          value: "0xfb681c72543098a422f2c81f09b1511d11cd187c"
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
          value: `{"coin_a":"0x29824d952e035490fae7567deea5f15b504a68fa73610063c160ab1fa87dd609","coin_b":"0x8e4733bdabcf7d4afc3d14f0dd46c9bf52fb0fce9e4b996c939e195b8bc891d9","liquidity_token":"0xdbf06c48af3984ec6d9ae8a9aa7dbb0bb1e784aa9b8c4a5681af660cf8558d7d","coin_a_amount":"4000000","coin_b_amount":"17001940","liquidity":"16606146"}`
        },
        {
          index: true,
          key: "coin_a",
          value:
            "0x29824d952e035490fae7567deea5f15b504a68fa73610063c160ab1fa87dd609"
        },
        {
          index: true,
          key: "coin_a_amount",
          value: "4000000"
        },
        {
          index: true,
          key: "coin_b",
          value:
            "0x8e4733bdabcf7d4afc3d14f0dd46c9bf52fb0fce9e4b996c939e195b8bc891d9"
        },
        {
          index: true,
          key: "coin_b_amount",
          value: "17001940"
        },
        {
          index: true,
          key: "liquidity",
          value: "16606146"
        },
        {
          index: true,
          key: "liquidity_token",
          value:
            "0xdbf06c48af3984ec6d9ae8a9aa7dbb0bb1e784aa9b8c4a5681af660cf8558d7d"
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
            '{"store_addr":"0x7f257dda81d5565f9191345a2293772092812665be76d13fd586abb22fe3ac17","metadata_addr":"0x29824d952e035490fae7567deea5f15b504a68fa73610063c160ab1fa87dd609","amount":"4000000"}'
        },
        {
          index: true,
          key: "amount",
          value: "4000000"
        },
        {
          index: true,
          key: "metadata_addr",
          value:
            "0x29824d952e035490fae7567deea5f15b504a68fa73610063c160ab1fa87dd609"
        },
        {
          index: true,
          key: "store_addr",
          value:
            "0x7f257dda81d5565f9191345a2293772092812665be76d13fd586abb22fe3ac17"
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
          value: "0x1::fungible_asset::DepositOwnerEvent"
        },
        {
          index: true,
          key: "data",
          value:
            '{"owner":"0xdbf06c48af3984ec6d9ae8a9aa7dbb0bb1e784aa9b8c4a5681af660cf8558d7d"}'
        },
        {
          index: true,
          key: "owner",
          value:
            "0xdbf06c48af3984ec6d9ae8a9aa7dbb0bb1e784aa9b8c4a5681af660cf8558d7d"
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
            '{"store_addr":"0x64b609ae7d33397671de3808da2f46ecacc8bdf2ab5376757a805950f1c9f77b","metadata_addr":"0x8e4733bdabcf7d4afc3d14f0dd46c9bf52fb0fce9e4b996c939e195b8bc891d9","amount":"17001940"}'
        },
        {
          index: true,
          key: "amount",
          value: "17001940"
        },
        {
          index: true,
          key: "metadata_addr",
          value:
            "0x8e4733bdabcf7d4afc3d14f0dd46c9bf52fb0fce9e4b996c939e195b8bc891d9"
        },
        {
          index: true,
          key: "store_addr",
          value:
            "0x64b609ae7d33397671de3808da2f46ecacc8bdf2ab5376757a805950f1c9f77b"
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
          value: "0x1::fungible_asset::DepositOwnerEvent"
        },
        {
          index: true,
          key: "data",
          value:
            '{"owner":"0xdbf06c48af3984ec6d9ae8a9aa7dbb0bb1e784aa9b8c4a5681af660cf8558d7d"}'
        },
        {
          index: true,
          key: "owner",
          value:
            "0xdbf06c48af3984ec6d9ae8a9aa7dbb0bb1e784aa9b8c4a5681af660cf8558d7d"
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
            '{"metadata_addr":"0xdbf06c48af3984ec6d9ae8a9aa7dbb0bb1e784aa9b8c4a5681af660cf8558d7d","amount":"16606146"}'
        },
        {
          index: true,
          key: "amount",
          value: "16606146"
        },
        {
          index: true,
          key: "metadata_addr",
          value:
            "0xdbf06c48af3984ec6d9ae8a9aa7dbb0bb1e784aa9b8c4a5681af660cf8558d7d"
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
            '{"store_addr":"0xdfc2bfed358e9980d870e70172819585c21b9d4a17f53039f8f12f84125038c9","metadata_addr":"0xdbf06c48af3984ec6d9ae8a9aa7dbb0bb1e784aa9b8c4a5681af660cf8558d7d","amount":"16606146"}'
        },
        {
          index: true,
          key: "amount",
          value: "16606146"
        },
        {
          index: true,
          key: "metadata_addr",
          value:
            "0xdbf06c48af3984ec6d9ae8a9aa7dbb0bb1e784aa9b8c4a5681af660cf8558d7d"
        },
        {
          index: true,
          key: "store_addr",
          value:
            "0xdfc2bfed358e9980d870e70172819585c21b9d4a17f53039f8f12f84125038c9"
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
          value: "0x1::fungible_asset::DepositOwnerEvent"
        },
        {
          index: true,
          key: "data",
          value: '{"owner":"0xfb681c72543098a422f2c81f09b1511d11cd187c"}'
        },
        {
          index: true,
          key: "owner",
          value: "0xfb681c72543098a422f2c81f09b1511d11cd187c"
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
            '{"store_addr":"0xba2a23251eb06923fadb03ea9856c66510fefc4dfa9abe92cfb2961c9145cfb3","metadata_addr":"0x8e4733bdabcf7d4afc3d14f0dd46c9bf52fb0fce9e4b996c939e195b8bc891d9","amount":"482"}'
        },
        {
          index: true,
          key: "amount",
          value: "482"
        },
        {
          index: true,
          key: "metadata_addr",
          value:
            "0x8e4733bdabcf7d4afc3d14f0dd46c9bf52fb0fce9e4b996c939e195b8bc891d9"
        },
        {
          index: true,
          key: "store_addr",
          value:
            "0xba2a23251eb06923fadb03ea9856c66510fefc4dfa9abe92cfb2961c9145cfb3"
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
          value: "0x1::fungible_asset::WithdrawOwnerEvent"
        },
        {
          index: true,
          key: "data",
          value: '{"owner":"0x93354845030274cd4bf1686abd60ab28ec52e1a7"}'
        },
        {
          index: true,
          key: "owner",
          value: "0x93354845030274cd4bf1686abd60ab28ec52e1a7"
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
            '{"store_addr":"0x19b16123f9d58f89e161158b7852144ca8afce634a782806377d507494bb5b10","metadata_addr":"0x8e4733bdabcf7d4afc3d14f0dd46c9bf52fb0fce9e4b996c939e195b8bc891d9","amount":"482"}'
        },
        {
          index: true,
          key: "amount",
          value: "482"
        },
        {
          index: true,
          key: "metadata_addr",
          value:
            "0x8e4733bdabcf7d4afc3d14f0dd46c9bf52fb0fce9e4b996c939e195b8bc891d9"
        },
        {
          index: true,
          key: "store_addr",
          value:
            "0x19b16123f9d58f89e161158b7852144ca8afce634a782806377d507494bb5b10"
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
          value: "0x1::fungible_asset::DepositOwnerEvent"
        },
        {
          index: true,
          key: "data",
          value: '{"owner":"0xfb681c72543098a422f2c81f09b1511d11cd187c"}'
        },
        {
          index: true,
          key: "owner",
          value: "0xfb681c72543098a422f2c81f09b1511d11cd187c"
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
          value: "482uinit"
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
          value: "init1ld5pcuj5xzv2gghjeq0snv23r5gu6xruz3mnq4"
        },
        {
          index: true,
          key: "amount",
          value: "482uinit"
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
          value: "init1ld5pcuj5xzv2gghjeq0snv23r5gu6xruz3mnq4"
        },
        {
          index: true,
          key: "sender",
          value: "init1jv65s3grqf6v6jl3dp4t6c9t9rk99cd8ffy0za"
        },
        {
          index: true,
          key: "amount",
          value: "482uinit"
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
          value: "0x1,0xfb681c72543098a422f2c81f09b1511d11cd187c"
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
            '{"store_addr":"0xdfc2bfed358e9980d870e70172819585c21b9d4a17f53039f8f12f84125038c9","metadata_addr":"0xdbf06c48af3984ec6d9ae8a9aa7dbb0bb1e784aa9b8c4a5681af660cf8558d7d","amount":"16606146"}'
        },
        {
          index: true,
          key: "amount",
          value: "16606146"
        },
        {
          index: true,
          key: "metadata_addr",
          value:
            "0xdbf06c48af3984ec6d9ae8a9aa7dbb0bb1e784aa9b8c4a5681af660cf8558d7d"
        },
        {
          index: true,
          key: "store_addr",
          value:
            "0xdfc2bfed358e9980d870e70172819585c21b9d4a17f53039f8f12f84125038c9"
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
          value: "0x1::fungible_asset::WithdrawOwnerEvent"
        },
        {
          index: true,
          key: "data",
          value: '{"owner":"0xfb681c72543098a422f2c81f09b1511d11cd187c"}'
        },
        {
          index: true,
          key: "owner",
          value: "0xfb681c72543098a422f2c81f09b1511d11cd187c"
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
            '{"store_addr":"0xa15b6b9a18f347838b1ff6af22cf5704d7541471f678f4470f610c5d00825d73","metadata_addr":"0xdbf06c48af3984ec6d9ae8a9aa7dbb0bb1e784aa9b8c4a5681af660cf8558d7d","amount":"16606146"}'
        },
        {
          index: true,
          key: "amount",
          value: "16606146"
        },
        {
          index: true,
          key: "metadata_addr",
          value:
            "0xdbf06c48af3984ec6d9ae8a9aa7dbb0bb1e784aa9b8c4a5681af660cf8558d7d"
        },
        {
          index: true,
          key: "store_addr",
          value:
            "0xa15b6b9a18f347838b1ff6af22cf5704d7541471f678f4470f610c5d00825d73"
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
          value: "0x1::fungible_asset::DepositOwnerEvent"
        },
        {
          index: true,
          key: "data",
          value: '{"owner":"0x4fea76427b8345861e80a3540a8a9d936fd39391"}'
        },
        {
          index: true,
          key: "owner",
          value: "0x4fea76427b8345861e80a3540a8a9d936fd39391"
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
          value: "init1ld5pcuj5xzv2gghjeq0snv23r5gu6xruz3mnq4"
        },
        {
          index: true,
          key: "amount",
          value:
            "16606146move/dbf06c48af3984ec6d9ae8a9aa7dbb0bb1e784aa9b8c4a5681af660cf8558d7d"
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
            "16606146move/dbf06c48af3984ec6d9ae8a9aa7dbb0bb1e784aa9b8c4a5681af660cf8558d7d"
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
          value: "initvaloper1jt9w26mpxxjsk63mvd4m2ynj0af09cslej8vvr"
        },
        {
          index: true,
          key: "delegator",
          value: "init1ld5pcuj5xzv2gghjeq0snv23r5gu6xruz3mnq4"
        },
        {
          index: true,
          key: "amount",
          value:
            "16606146move/dbf06c48af3984ec6d9ae8a9aa7dbb0bb1e784aa9b8c4a5681af660cf8558d7d"
        },
        {
          index: true,
          key: "new_shares",
          value:
            "16606146.000000000000000000move/dbf06c48af3984ec6d9ae8a9aa7dbb0bb1e784aa9b8c4a5681af660cf8558d7d"
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
    }
  ],
  gas_used: "641243",
  gas_wanted: "927391",
  height: "21380131",
  info: "",
  logs: [],
  raw_log: "",
  timestamp: "2026-03-29T11:49:07Z",
  tx: {
    "@type": "/cosmos.tx.v1beta1.Tx",
    auth_info: {
      fee: {
        amount: [
          {
            amount: "13911",
            denom: "uinit"
          }
        ],
        gas_limit: "927391",
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
            key: "AwKQf9Z/07/GjnYDT5cOoBdB4TCo44/ZLNHTo5JB769U"
          },
          sequence: "226"
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
            "2/BsSK85hOxtmuipqn27C7HnhKqbjEpWga9mDPhVjX0=",
            "AAk9AAAAAAA=",
            "1G0DAQAAAAA=",
            "AWsf/AAAAAAA",
            "MmluaXR2YWxvcGVyMWp0OXcyNm1weHhqc2s2M212ZDRtMnluajBhZjA5Y3NsZWo4dnZy"
          ],
          function_name: "provide_stake",
          module_address:
            "0x42cd8467b1c86e59bf319e5664a09b6b5840bb3fac64f5ce690b5041c530565a",
          module_name: "dex_utils",
          sender: "init1ld5pcuj5xzv2gghjeq0snv23r5gu6xruz3mnq4",
          type_args: []
        }
      ],
      non_critical_extension_options: [],
      timeout_height: "0"
    },
    signatures: [
      "zPFank41YKzRTpr7puR9odGY0AxPt47qg7N0QFMAHOR0o6+R+/YKZaoBHqGD2yu8nGBuwLgtCK4KClmiDP/MBw=="
    ]
  },
  txhash: "CF1FF5862210FC1EFDE2920DD793B8ACCA2664E9F75AC9639082B62070E54825"
};

export const mockApiResponsesForTestnetDepositStakeLiquidity = {
  GET: {
    "/initia/move/v1/denom?metadata=0x8e4733bdabcf7d4afc3d14f0dd46c9bf52fb0fce9e4b996c939e195b8bc891d9":
      {
        denom: "uinit"
      },
    "/initia/move/v1/denom?metadata=0x29824d952e035490fae7567deea5f15b504a68fa73610063c160ab1fa87dd609":
      {
        denom: "uusdc"
      },
    "/initia/move/v1/denom?metadata=0xdbf06c48af3984ec6d9ae8a9aa7dbb0bb1e784aa9b8c4a5681af660cf8558d7d":
      {
        denom:
          "move/dbf06c48af3984ec6d9ae8a9aa7dbb0bb1e784aa9b8c4a5681af660cf8558d7d"
      },
    "/initia/mstaking/v1/validators/initvaloper1jt9w26mpxxjsk63mvd4m2ynj0af09cslej8vvr":
      {
        validator: {
          commission: {
            commission_rates: {
              max_change_rate: "0.050000000000000000",
              max_rate: "0.100000000000000000",
              rate: "0.050000000000000000"
            },
            update_time: "2024-09-27T04:55:49.396291799Z"
          },
          consensus_pubkey: {
            "@type": "/cosmos.crypto.ed25519.PubKey",
            key: "example_key"
          },
          delegator_shares: "1114247891236.000000000000000000",
          description: {
            details:
              "Polkachu is the trusted staking service provider for blockchain projects. 100% refund for downtime slash. Contact us at hello@polkachu.com",
            identity: "0A6AF02D1557E5B4",
            moniker: "polkachu.com",
            security_contact: "hello@polkachu.com",
            website: ""
          },
          jailed: true,
          min_self_delegation: "1",
          operator_address:
            "initvaloper1jt9w26mpxxjsk63mvd4m2ynj0af09cslej8vvr",
          status: "BOND_STATUS_UNBONDING",
          tokens: {
            "move/dbf06c48af3984ec6d9ae8a9aa7dbb0bb1e784aa9b8c4a5681af660cf8558d7d":
              "1113133643345",
            uinit: "13970814126830"
          },
          unbonding_height: "21500229",
          unbonding_time: "2026-04-22T22:34:49.766231699Z"
        }
      }
  },
  POST: {}
};
