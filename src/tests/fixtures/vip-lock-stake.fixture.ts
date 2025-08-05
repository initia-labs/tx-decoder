export const mockMsgVipLockStake = {
  code: 0,
  codespace: "",
  data: "12240A222F696E697469612E6D6F76652E76312E4D736745786563757465526573706F6E736512240A222F696E697469612E6D6F76652E76312E4D736745786563757465526573706F6E7365",
  events: [
    {
      attributes: [
        {
          index: true,
          key: "sender",
          value: "0x1,0x5f7045a41d40a4cf4594b6550a8247fe8f8539e0"
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
            '{"store_addr":"0x809aca4677fca3593d43e5e7b6070cdc9a8f49392e77cb0eaae721a92ab98b64","metadata_addr":"0x8e4733bdabcf7d4afc3d14f0dd46c9bf52fb0fce9e4b996c939e195b8bc891d9","amount":"32149"}'
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
            '{"store_addr":"0x66a8cb0bfb991610dcffb8a6543ac0887c7c5405b8f985ebed6d628fe50c4686","metadata_addr":"0x8e4733bdabcf7d4afc3d14f0dd46c9bf52fb0fce9e4b996c939e195b8bc891d9","amount":"32149"}'
        }
      ],
      type: "move"
    },
    {
      attributes: [
        {
          index: true,
          key: "spender",
          value: "init1tacytfqagzjv73v5ke2s4qj8l68c2w0q4v0q0n"
        },
        {
          index: true,
          key: "amount",
          value: "32149uinit"
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
          value: "32149uinit"
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
          value: "init1tacytfqagzjv73v5ke2s4qj8l68c2w0q4v0q0n"
        },
        {
          index: true,
          key: "amount",
          value: "32149uinit"
        }
      ],
      type: "transfer"
    },
    {
      attributes: [
        {
          index: true,
          key: "sender",
          value: "init1tacytfqagzjv73v5ke2s4qj8l68c2w0q4v0q0n"
        }
      ],
      type: "message"
    },
    {
      attributes: [
        {
          index: true,
          key: "fee",
          value: "32149uinit"
        },
        {
          index: true,
          key: "fee_payer",
          value: "init1tacytfqagzjv73v5ke2s4qj8l68c2w0q4v0q0n"
        }
      ],
      type: "tx"
    },
    {
      attributes: [
        {
          index: true,
          key: "acc_seq",
          value: "init1tacytfqagzjv73v5ke2s4qj8l68c2w0q4v0q0n/37"
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
            "5wWLkZEIqTYrRDW0f8RBiT7IfqLu9LOYAj3NtQdTAyAPaOcaDA0yteosHJ1RylpgIA3fsmZ49YyqCh9lE4W4AA=="
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
          value: "init1tacytfqagzjv73v5ke2s4qj8l68c2w0q4v0q0n"
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
          value: "0x5f7045a41d40a4cf4594b6550a8247fe8f8539e0"
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
          value: "vip"
        },
        {
          index: true,
          key: "function_name",
          value: "batch_claim_user_reward_script"
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
            "0x3a886b32a802582f2e446e74d4a24d1d7ed01adf46d2a8f65c5723887e708789::tvl_manager::TVLSnapshotEvent"
        },
        {
          index: true,
          key: "data",
          value:
            '{"stage":"4","bridge_id":"11","time":"1749201246","tvl":"7849160193"}'
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
            "0x3a886b32a802582f2e446e74d4a24d1d7ed01adf46d2a8f65c5723887e708789::tvl_manager::TVLSnapshotEvent"
        },
        {
          index: true,
          key: "data",
          value:
            '{"stage":"4","bridge_id":"12","time":"1749201246","tvl":"1675176975771"}'
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
            "0x3a886b32a802582f2e446e74d4a24d1d7ed01adf46d2a8f65c5723887e708789::tvl_manager::TVLSnapshotEvent"
        },
        {
          index: true,
          key: "data",
          value:
            '{"stage":"4","bridge_id":"13","time":"1749201246","tvl":"7500001"}'
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
            "0x3a886b32a802582f2e446e74d4a24d1d7ed01adf46d2a8f65c5723887e708789::tvl_manager::TVLSnapshotEvent"
        },
        {
          index: true,
          key: "data",
          value:
            '{"stage":"4","bridge_id":"16","time":"1749201246","tvl":"1110432538897"}'
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
            "0x3a886b32a802582f2e446e74d4a24d1d7ed01adf46d2a8f65c5723887e708789::tvl_manager::TVLSnapshotEvent"
        },
        {
          index: true,
          key: "data",
          value:
            '{"stage":"4","bridge_id":"17","time":"1749201246","tvl":"237206495634"}'
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
            "0x3a886b32a802582f2e446e74d4a24d1d7ed01adf46d2a8f65c5723887e708789::tvl_manager::TVLSnapshotEvent"
        },
        {
          index: true,
          key: "data",
          value:
            '{"stage":"4","bridge_id":"27","time":"1749201246","tvl":"57254104668"}'
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
            "0x3a886b32a802582f2e446e74d4a24d1d7ed01adf46d2a8f65c5723887e708789::tvl_manager::TVLSnapshotEvent"
        },
        {
          index: true,
          key: "data",
          value:
            '{"stage":"4","bridge_id":"28","time":"1749201246","tvl":"22794448107"}'
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
            "0x3a886b32a802582f2e446e74d4a24d1d7ed01adf46d2a8f65c5723887e708789::tvl_manager::TVLSnapshotEvent"
        },
        {
          index: true,
          key: "data",
          value:
            '{"stage":"4","bridge_id":"29","time":"1749201246","tvl":"122710949090"}'
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
            "0x3a886b32a802582f2e446e74d4a24d1d7ed01adf46d2a8f65c5723887e708789::tvl_manager::TVLSnapshotEvent"
        },
        {
          index: true,
          key: "data",
          value:
            '{"stage":"4","bridge_id":"30","time":"1749201246","tvl":"6793165128"}'
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
            "0x3a886b32a802582f2e446e74d4a24d1d7ed01adf46d2a8f65c5723887e708789::tvl_manager::TVLSnapshotEvent"
        },
        {
          index: true,
          key: "data",
          value:
            '{"stage":"4","bridge_id":"31","time":"1749201246","tvl":"133394081621"}'
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
            "0x3a886b32a802582f2e446e74d4a24d1d7ed01adf46d2a8f65c5723887e708789::tvl_manager::TVLSnapshotEvent"
        },
        {
          index: true,
          key: "data",
          value:
            '{"stage":"4","bridge_id":"32","time":"1749201246","tvl":"1024690955221"}'
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
            "0x3a886b32a802582f2e446e74d4a24d1d7ed01adf46d2a8f65c5723887e708789::vesting::UserVestingCreateEvent"
        },
        {
          index: true,
          key: "data",
          value:
            '{"account":"0x5f7045a41d40a4cf4594b6550a8247fe8f8539e0","bridge_id":"16","version":"1","start_stage":"2","end_stage":"28","l2_score":"23796858889","minimum_score":"11898429444","initial_reward":"24907654"}'
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
          key: "action",
          value: "/initia.move.v1.MsgExecute"
        },
        {
          index: true,
          key: "sender",
          value: "init1tacytfqagzjv73v5ke2s4qj8l68c2w0q4v0q0n"
        },
        {
          index: true,
          key: "module",
          value: "move"
        },
        {
          index: true,
          key: "msg_index",
          value: "1"
        }
      ],
      type: "message"
    },
    {
      attributes: [
        {
          index: true,
          key: "sender",
          value: "0x5f7045a41d40a4cf4594b6550a8247fe8f8539e0"
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
          value: "vip"
        },
        {
          index: true,
          key: "function_name",
          value: "batch_lock_stake_script"
        },
        {
          index: true,
          key: "msg_index",
          value: "1"
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
            "0x3a886b32a802582f2e446e74d4a24d1d7ed01adf46d2a8f65c5723887e708789::vesting::UserVestingChangedEvent"
        },
        {
          index: true,
          key: "data",
          value:
            '{"account":"0x5f7045a41d40a4cf4594b6550a8247fe8f8539e0","bridge_id":"16","version":"1","start_stage":"2","initial_reward":"24907654","remaining_reward":"23907654","penalty_reward":"0"}'
        },
        {
          index: true,
          key: "msg_index",
          value: "1"
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
            '{"store_addr":"0x523bd8fb61230d8b2bc9c070d684e3482cf9c4ef7d08ebfcc9f756c36b229558","metadata_addr":"0x8e4733bdabcf7d4afc3d14f0dd46c9bf52fb0fce9e4b996c939e195b8bc891d9","amount":"1000000"}'
        },
        {
          index: true,
          key: "msg_index",
          value: "1"
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
            "0x3a886b32a802582f2e446e74d4a24d1d7ed01adf46d2a8f65c5723887e708789::vip::LockStakeEvent"
        },
        {
          index: true,
          key: "data",
          value:
            '{"account":"0x5f7045a41d40a4cf4594b6550a8247fe8f8539e0","bridge_id":"16","version":"1","stage":"2","amount":"1000000"}'
        },
        {
          index: true,
          key: "msg_index",
          value: "1"
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
            '{"store_addr":"0x4b1bd70991e1ebd13a221530a74891cfc6a47e12bbe13b87e4948cf7d5b16bd8","metadata_addr":"0xe0e9394b24e53775d6af87934ac02d73536ad58b7894f6ccff3f5e7c0d548e55","amount":"170330"}'
        },
        {
          index: true,
          key: "msg_index",
          value: "1"
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
            '{"coin_a":"0xe0e9394b24e53775d6af87934ac02d73536ad58b7894f6ccff3f5e7c0d548e55","coin_b":"0x8e4733bdabcf7d4afc3d14f0dd46c9bf52fb0fce9e4b996c939e195b8bc891d9","liquidity_token":"0x543b35a39cfadad3da3c23249c474455d15efd2f94f849473226dee8a3c7a9e1","coin_a_amount":"170330","coin_b_amount":"1000000","liquidity":"1083469"}'
        },
        {
          index: true,
          key: "msg_index",
          value: "1"
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
            '{"store_addr":"0x39e454a8b7b1b71b2c0c27bf4ce1fbe234652f2c40f1fc209b023beaa7ece013","metadata_addr":"0xe0e9394b24e53775d6af87934ac02d73536ad58b7894f6ccff3f5e7c0d548e55","amount":"170330"}'
        },
        {
          index: true,
          key: "msg_index",
          value: "1"
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
            '{"store_addr":"0xd8d20f9cd225d52f126bd3f973cbb83de3212b1b3dae547f13dd01f593d537b3","metadata_addr":"0x8e4733bdabcf7d4afc3d14f0dd46c9bf52fb0fce9e4b996c939e195b8bc891d9","amount":"1000000"}'
        },
        {
          index: true,
          key: "msg_index",
          value: "1"
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
            '{"metadata_addr":"0x543b35a39cfadad3da3c23249c474455d15efd2f94f849473226dee8a3c7a9e1","amount":"1083469"}'
        },
        {
          index: true,
          key: "msg_index",
          value: "1"
        }
      ],
      type: "move"
    },
    {
      attributes: [
        {
          index: true,
          key: "type_tag",
          value: "0x1::object::CreateEvent"
        },
        {
          index: true,
          key: "data",
          value:
            '{"object":"0xcb742b118741fdb2936bc7a3ade5c62a18c0bf6b0116a1a713614dcc665bbcec","owner":"0x5f7045a41d40a4cf4594b6550a8247fe8f8539e0","version":"1"}'
        },
        {
          index: true,
          key: "msg_index",
          value: "1"
        }
      ],
      type: "move"
    },
    {
      attributes: [
        {
          index: true,
          key: "type_tag",
          value: "0x1::object::CreateEvent"
        },
        {
          index: true,
          key: "data",
          value:
            '{"object":"0xe83e7c79b5b7e0e23a210fd5bfbd951c36f2388e55590a3b33552a55ca94067f","owner":"0xcb742b118741fdb2936bc7a3ade5c62a18c0bf6b0116a1a713614dcc665bbcec","version":"1"}'
        },
        {
          index: true,
          key: "msg_index",
          value: "1"
        }
      ],
      type: "move"
    },
    {
      attributes: [
        {
          index: true,
          key: "type_tag",
          value: "0x1::primary_fungible_store::PrimaryStoreCreatedEvent"
        },
        {
          index: true,
          key: "data",
          value:
            '{"owner_addr":"0xcb742b118741fdb2936bc7a3ade5c62a18c0bf6b0116a1a713614dcc665bbcec","store_addr":"0xe83e7c79b5b7e0e23a210fd5bfbd951c36f2388e55590a3b33552a55ca94067f","metadata_addr":"0x543b35a39cfadad3da3c23249c474455d15efd2f94f849473226dee8a3c7a9e1"}'
        },
        {
          index: true,
          key: "msg_index",
          value: "1"
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
            '{"store_addr":"0xe83e7c79b5b7e0e23a210fd5bfbd951c36f2388e55590a3b33552a55ca94067f","metadata_addr":"0x543b35a39cfadad3da3c23249c474455d15efd2f94f849473226dee8a3c7a9e1","amount":"1083469"}'
        },
        {
          index: true,
          key: "msg_index",
          value: "1"
        }
      ],
      type: "move"
    },
    {
      attributes: [
        {
          index: true,
          key: "sender",
          value:
            "0x1,0xcb742b118741fdb2936bc7a3ade5c62a18c0bf6b0116a1a713614dcc665bbcec"
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
          value: "1"
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
            '{"store_addr":"0xe83e7c79b5b7e0e23a210fd5bfbd951c36f2388e55590a3b33552a55ca94067f","metadata_addr":"0x543b35a39cfadad3da3c23249c474455d15efd2f94f849473226dee8a3c7a9e1","amount":"1083469"}'
        },
        {
          index: true,
          key: "msg_index",
          value: "1"
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
            '{"store_addr":"0xeae8f912db9acfb4901766874adc7f6dbb1d5fea4785a423671ba5afc59a710f","metadata_addr":"0x543b35a39cfadad3da3c23249c474455d15efd2f94f849473226dee8a3c7a9e1","amount":"1083469"}'
        },
        {
          index: true,
          key: "msg_index",
          value: "1"
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
            "init1ed6zkyv8g87m9ymtc736mewx9gvvp0mtqyt2rfcnv9xucejmhnkqe22kyd"
        },
        {
          index: true,
          key: "amount",
          value:
            "1083469move/543b35a39cfadad3da3c23249c474455d15efd2f94f849473226dee8a3c7a9e1"
        },
        {
          index: true,
          key: "msg_index",
          value: "1"
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
            "1083469move/543b35a39cfadad3da3c23249c474455d15efd2f94f849473226dee8a3c7a9e1"
        },
        {
          index: true,
          key: "msg_index",
          value: "1"
        }
      ],
      type: "coin_received"
    },
    {
      attributes: [
        {
          index: true,
          key: "validator",
          value: "initvaloper1qgje6dgazcruzsashpqektp2yaf47x2wyysjqx"
        },
        {
          index: true,
          key: "delegator",
          value:
            "init1ed6zkyv8g87m9ymtc736mewx9gvvp0mtqyt2rfcnv9xucejmhnkqe22kyd"
        },
        {
          index: true,
          key: "amount",
          value:
            "1083469move/543b35a39cfadad3da3c23249c474455d15efd2f94f849473226dee8a3c7a9e1"
        },
        {
          index: true,
          key: "new_shares",
          value:
            "1083469.000000000000000000move/543b35a39cfadad3da3c23249c474455d15efd2f94f849473226dee8a3c7a9e1"
        },
        {
          index: true,
          key: "msg_index",
          value: "1"
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
          value: "1"
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
            "0xcb742b118741fdb2936bc7a3ade5c62a18c0bf6b0116a1a713614dcc665bbcec"
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
          value: "1"
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
            '{"staking_account":"0xcb742b118741fdb2936bc7a3ade5c62a18c0bf6b0116a1a713614dcc665bbcec","metadata":"0x543b35a39cfadad3da3c23249c474455d15efd2f94f849473226dee8a3c7a9e1","release_time":"1780650846","validator":"initvaloper1qgje6dgazcruzsashpqektp2yaf47x2wyysjqx","locked_share":"1083469"}'
        },
        {
          index: true,
          key: "msg_index",
          value: "1"
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
          value: "1"
        }
      ],
      type: "submsg"
    }
  ],
  gas_used: "1525930",
  gas_wanted: "2143248",
  height: "3511018",
  info: "",
  logs: [],
  raw_log: "",
  timestamp: "2025-06-06T09:14:06Z",
  tx: {
    "@type": "/cosmos.tx.v1beta1.Tx",
    auth_info: {
      fee: {
        amount: [
          {
            amount: "32149",
            denom: "uinit"
          }
        ],
        gas_limit: "2143248",
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
            key: "AwjKrreRGET4kTltnMpmySmtuHyg9y7mHQNSAc306K0z"
          },
          sequence: "37"
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
            "EAAAAAAAAAA=",
            "AQAAAAAAAAA=",
            "AQIAAAAAAAAA",
            "AQogICiEvzvklmSXiNzOxnaFWZagpbuS8UTHkXa09qSSgiwgB78NonJR7+xG+VBtBBBoHvJVdtUH40mxJ+rvi++0Vf0gPCMbWKBNvMxUXOapYV4SnvZTbPVq5P/i+3jfd/aPB9cgObTVskikKFA1C2VOlesuQXrHpjhdwmW9WMYydq4GGcggJaHeSgo35/G1gbJeZ2JkJ/UbHfMJH1QlVYpefoVQolAgrWRuZQLLcGY1y7Oi8G9e3ZGmVwAB68l2d9kQclipbe4gKJN1dTxSwUbCgjPpE3ZHeZvN10B4/R4GuMmo23jY9/4gwi+lKbWtimiNdI1qVBpEquXmnX1SNASIW0RZRvDkpU4gf9/rseci1GnRmQ3k1UUfazseU/zfihBaFGeg0JZvtkkgUx0AcZ8mdq+RNNlszh0XciDwLVBX6Y4Cwe+/oAe/rWA=",
            "AQlAZ4oFAAAA"
          ],
          function_name: "batch_claim_user_reward_script",
          module_address:
            "0x3a886b32a802582f2e446e74d4a24d1d7ed01adf46d2a8f65c5723887e708789",
          module_name: "vip",
          sender: "init1tacytfqagzjv73v5ke2s4qj8l68c2w0q4v0q0n",
          type_args: []
        },
        {
          "@type": "/initia.move.v1.MsgExecute",
          args: [
            "EAAAAAAAAAA=",
            "AQAAAAAAAAA=",
            "VDs1o5z62tPaPCMknEdEVdFe/S+U+ElHMibe6KPHqeE=",
            "ASRzEAAAAAAA",
            "MmluaXR2YWxvcGVyMXFnamU2ZGdhemNydXpzYXNocHFla3RwMnlhZjQ3eDJ3eXlzanF4",
            "AQIAAAAAAAAA",
            "AUBCDwAAAAAA",
            "4Ok5SyTlN3XWr4eTSsAtc1Nq1Yt4lPbM/z9efA1UjlU=",
            "WpkCAAAAAAA=",
            "AA=="
          ],
          function_name: "batch_lock_stake_script",
          module_address:
            "0x3a886b32a802582f2e446e74d4a24d1d7ed01adf46d2a8f65c5723887e708789",
          module_name: "vip",
          sender: "init1tacytfqagzjv73v5ke2s4qj8l68c2w0q4v0q0n",
          type_args: []
        }
      ],
      non_critical_extension_options: [],
      timeout_height: "0"
    },
    signatures: [
      "5wWLkZEIqTYrRDW0f8RBiT7IfqLu9LOYAj3NtQdTAyAPaOcaDA0yteosHJ1RylpgIA3fsmZ49YyqCh9lE4W4AA=="
    ]
  },
  txhash: "0647FC591F248F64F5F4DE533EA6D7A63BE7306B8EAD148A0808DE580626D712"
};

export const mockApiResponsesForVipLockStake = {
  GET: {
    "/initia/move/v1/accounts/0x4b1bd70991e1ebd13a221530a74891cfc6a47e12bbe13b87e4948cf7d5b16bd8/resources":
      {
        pagination: { next_key: null, total: "0" },
        resources: [
          {
            address:
              "0x4b1bd70991e1ebd13a221530a74891cfc6a47e12bbe13b87e4948cf7d5b16bd8",
            move_resource:
              '{"type":"0x1::object::ObjectCore","data":{"allow_ungated_transfer":false,"owner":"0x5f7045a41d40a4cf4594b6550a8247fe8f8539e0","version":"1"}}',
            raw_bytes:
              "AAAAAAAAAAAAAAAAX3BFpB1ApM9FlLZVCoJH/o+FOeAAAQAAAAAAAAA=",
            struct_tag: "0x1::object::ObjectCore"
          },
          {
            address:
              "0x4b1bd70991e1ebd13a221530a74891cfc6a47e12bbe13b87e4948cf7d5b16bd8",
            move_resource:
              '{"type":"0x1::fungible_asset::FungibleStore","data":{"balance":"4560528983","frozen":false,"metadata":{"inner":"0xe0e9394b24e53775d6af87934ac02d73536ad58b7894f6ccff3f5e7c0d548e55"}}}',
            raw_bytes:
              "4Ok5SyTlN3XWr4eTSsAtc1Nq1Yt4lPbM/z9efA1UjlVXJtQPAQAAAAA=",
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
              '{"type":"0x1::fungible_asset::FungibleStore","data":{"balance":"2767065902149","frozen":false,"metadata":{"inner":"0xe0e9394b24e53775d6af87934ac02d73536ad58b7894f6ccff3f5e7c0d548e55"}}}',
            raw_bytes:
              "4Ok5SyTlN3XWr4eTSsAtc1Nq1Yt4lPbM/z9efA1UjlVF7PpBhAIAAAA=",
            struct_tag: "0x1::fungible_asset::FungibleStore"
          }
        ]
      },
    "/initia/move/v1/accounts/0x523bd8fb61230d8b2bc9c070d684e3482cf9c4ef7d08ebfcc9f756c36b229558/resources":
      {
        pagination: { next_key: null, total: "0" },
        resources: [
          {
            address:
              "0x523bd8fb61230d8b2bc9c070d684e3482cf9c4ef7d08ebfcc9f756c36b229558",
            move_resource:
              '{"type":"0x1::object::ObjectCore","data":{"allow_ungated_transfer":false,"owner":"0x53cf2ef2c1173f340555a6f2c024c1de8e509e7b5baccb3153e3c05e2df537e7","version":"1"}}',
            raw_bytes:
              "U88u8sEXPzQFVabywCTB3o5QnntbrMsxU+PAXi31N+cAAQAAAAAAAAA=",
            struct_tag: "0x1::object::ObjectCore"
          },
          {
            address:
              "0x523bd8fb61230d8b2bc9c070d684e3482cf9c4ef7d08ebfcc9f756c36b229558",
            move_resource:
              '{"type":"0x1::fungible_asset::FungibleStore","data":{"balance":"16501298393670","frozen":false,"metadata":{"inner":"0x8e4733bdabcf7d4afc3d14f0dd46c9bf52fb0fce9e4b996c939e195b8bc891d9"}}}',
            raw_bytes:
              "jkczvavPfUr8PRTw3UbJv1L7D86eS5lsk54ZW4vIkdlGcgcCAg8AAAA=",
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
              '{"type":"0x1::fungible_asset::FungibleStore","data":{"balance":"24962858438859","frozen":false,"metadata":{"inner":"0x8e4733bdabcf7d4afc3d14f0dd46c9bf52fb0fce9e4b996c939e195b8bc891d9"}}}',
            raw_bytes:
              "jkczvavPfUr8PRTw3UbJv1L7D86eS5lsk54ZW4vIkdnLUE8etBYAAAA=",
            struct_tag: "0x1::fungible_asset::FungibleStore"
          }
        ]
      },
    "/initia/move/v1/accounts/0xe83e7c79b5b7e0e23a210fd5bfbd951c36f2388e55590a3b33552a55ca94067f/resources":
      {
        pagination: { next_key: null, total: "0" },
        resources: [
          {
            address:
              "0xe83e7c79b5b7e0e23a210fd5bfbd951c36f2388e55590a3b33552a55ca94067f",
            move_resource:
              '{"type":"0x1::object::ObjectCore","data":{"allow_ungated_transfer":false,"owner":"0xcb742b118741fdb2936bc7a3ade5c62a18c0bf6b0116a1a713614dcc665bbcec","version":"1"}}',
            raw_bytes:
              "y3QrEYdB/bKTa8ejreXGKhjAv2sBFqGnE2FNzGZbvOwAAQAAAAAAAAA=",
            struct_tag: "0x1::object::ObjectCore"
          },
          {
            address:
              "0xe83e7c79b5b7e0e23a210fd5bfbd951c36f2388e55590a3b33552a55ca94067f",
            move_resource:
              '{"type":"0x1::fungible_asset::FungibleStore","data":{"balance":"0","frozen":false,"metadata":{"inner":"0x543b35a39cfadad3da3c23249c474455d15efd2f94f849473226dee8a3c7a9e1"}}}',
            raw_bytes:
              "VDs1o5z62tPaPCMknEdEVdFe/S+U+ElHMibe6KPHqeEAAAAAAAAAAAA=",
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
              '{"type":"0x1::fungible_asset::FungibleStore","data":{"balance":"18696651030647","frozen":false,"metadata":{"inner":"0x543b35a39cfadad3da3c23249c474455d15efd2f94f849473226dee8a3c7a9e1"}}}',
            raw_bytes:
              "VDs1o5z62tPaPCMknEdEVdFe/S+U+ElHMibe6KPHqeF3QD4nAREAAAA=",
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
    "/initia/mstaking/v1/validators/initvaloper1qgje6dgazcruzsashpqektp2yaf47x2wyysjqx":
      {
        validator: {
          description: {
            details:
              "Delphi Consulting delivers expert crypto consulting across technology assessment, token advisory, asset intelligence, education, and design services.",
            identity: "2F47665C54DB2742",
            moniker: "Delphi Consulting",
            security_contact: "ops@delphiconsulting.io",
            website: "https://delphidigital.io/consulting"
          },
          operator_address: "initvaloper1qgje6dgazcruzsashpqektp2yaf47x2wyysjqx"
        }
      }
  },
  POST: {}
};
