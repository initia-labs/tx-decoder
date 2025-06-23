export const mockMsgRedelegateLocked = {
  code: 0,
  codespace: "",
  data: "12240A222F696E697469612E6D6F76652E76312E4D736745786563757465526573706F6E7365",
  events: [
    {
      attributes: [
        {
          index: true,
          key: "sender",
          value: "0x1,0x5f7045a41d40a4cf4594b6550a8247fe8f8539e0",
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
            '{"store_addr":"0x809aca4677fca3593d43e5e7b6070cdc9a8f49392e77cb0eaae721a92ab98b64","metadata_addr":"0x8e4733bdabcf7d4afc3d14f0dd46c9bf52fb0fce9e4b996c939e195b8bc891d9","amount":"19304"}',
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
            '{"store_addr":"0x66a8cb0bfb991610dcffb8a6543ac0887c7c5405b8f985ebed6d628fe50c4686","metadata_addr":"0x8e4733bdabcf7d4afc3d14f0dd46c9bf52fb0fce9e4b996c939e195b8bc891d9","amount":"19304"}',
        },
      ],
      type: "move",
    },
    {
      attributes: [
        {
          index: true,
          key: "spender",
          value: "init1tacytfqagzjv73v5ke2s4qj8l68c2w0q4v0q0n",
        },
        {
          index: true,
          key: "amount",
          value: "19304uinit",
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
          value: "19304uinit",
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
          value: "init1tacytfqagzjv73v5ke2s4qj8l68c2w0q4v0q0n",
        },
        {
          index: true,
          key: "amount",
          value: "19304uinit",
        },
      ],
      type: "transfer",
    },
    {
      attributes: [
        {
          index: true,
          key: "sender",
          value: "init1tacytfqagzjv73v5ke2s4qj8l68c2w0q4v0q0n",
        },
      ],
      type: "message",
    },
    {
      attributes: [
        {
          index: true,
          key: "fee",
          value: "19304uinit",
        },
        {
          index: true,
          key: "fee_payer",
          value: "init1tacytfqagzjv73v5ke2s4qj8l68c2w0q4v0q0n",
        },
      ],
      type: "tx",
    },
    {
      attributes: [
        {
          index: true,
          key: "acc_seq",
          value: "init1tacytfqagzjv73v5ke2s4qj8l68c2w0q4v0q0n/38",
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
            "4g7NJndN8W8Hs9mWZzr7rttVFhTzZ/QlSQfGSHDBdk8LdP/DvkWode11yWfE6nEg/LC2H5QEa7znE4OYNhZjeg==",
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
          value: "init1tacytfqagzjv73v5ke2s4qj8l68c2w0q4v0q0n",
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
          value: "0x5f7045a41d40a4cf4594b6550a8247fe8f8539e0",
        },
        {
          index: true,
          key: "module_addr",
          value: "0x3a886b32a802582f2e446e74d4a24d1d7ed01adf46d2a8f65c5723887e708789",
        },
        {
          index: true,
          key: "module_name",
          value: "lock_staking",
        },
        {
          index: true,
          key: "function_name",
          value: "redelegate",
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
          value: "0x1::object::CreateEvent",
        },
        {
          index: true,
          key: "data",
          value:
            '{"object":"0x7a2bc535e8f0cb78ed3750ae917240ab6e7421c3c344a4effd67efc444a1b4bf","owner":"0xcb742b118741fdb2936bc7a3ade5c62a18c0bf6b0116a1a713614dcc665bbcec","version":"1"}',
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
          value: "0x1::primary_fungible_store::PrimaryStoreCreatedEvent",
        },
        {
          index: true,
          key: "data",
          value:
            '{"owner_addr":"0xcb742b118741fdb2936bc7a3ade5c62a18c0bf6b0116a1a713614dcc665bbcec","store_addr":"0x7a2bc535e8f0cb78ed3750ae917240ab6e7421c3c344a4effd67efc444a1b4bf","metadata_addr":"0x8e4733bdabcf7d4afc3d14f0dd46c9bf52fb0fce9e4b996c939e195b8bc891d9"}',
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
            '{"store_addr":"0xba2a23251eb06923fadb03ea9856c66510fefc4dfa9abe92cfb2961c9145cfb3","metadata_addr":"0x8e4733bdabcf7d4afc3d14f0dd46c9bf52fb0fce9e4b996c939e195b8bc891d9","amount":"33"}',
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
            '{"store_addr":"0x7a2bc535e8f0cb78ed3750ae917240ab6e7421c3c344a4effd67efc444a1b4bf","metadata_addr":"0x8e4733bdabcf7d4afc3d14f0dd46c9bf52fb0fce9e4b996c939e195b8bc891d9","amount":"33"}',
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
          value: "33uinit",
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
          value: "init1ed6zkyv8g87m9ymtc736mewx9gvvp0mtqyt2rfcnv9xucejmhnkqe22kyd",
        },
        {
          index: true,
          key: "amount",
          value: "33uinit",
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
          value: "init1ed6zkyv8g87m9ymtc736mewx9gvvp0mtqyt2rfcnv9xucejmhnkqe22kyd",
        },
        {
          index: true,
          key: "sender",
          value: "init1jv65s3grqf6v6jl3dp4t6c9t9rk99cd8ffy0za",
        },
        {
          index: true,
          key: "amount",
          value: "33uinit",
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
          key: "delegator",
          value: "init1ed6zkyv8g87m9ymtc736mewx9gvvp0mtqyt2rfcnv9xucejmhnkqe22kyd",
        },
        {
          index: true,
          key: "source_validator",
          value: "initvaloper1qgje6dgazcruzsashpqektp2yaf47x2wyysjqx",
        },
        {
          index: true,
          key: "destination_validator",
          value: "initvaloper13ze0ryc7vfj2n86sfxfugww4qygjf8mnxxy9uk",
        },
        {
          index: true,
          key: "amount",
          value: "1083469move/543b35a39cfadad3da3c23249c474455d15efd2f94f849473226dee8a3c7a9e1",
        },
        {
          index: true,
          key: "completion_time",
          value: "2025-06-27T09:40:06Z",
        },
        {
          index: true,
          key: "msg_index",
          value: "0",
        },
      ],
      type: "redelegate",
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
          value: "0xcb742b118741fdb2936bc7a3ade5c62a18c0bf6b0116a1a713614dcc665bbcec",
        },
        {
          index: true,
          key: "module_addr",
          value: "0x3a886b32a802582f2e446e74d4a24d1d7ed01adf46d2a8f65c5723887e708789",
        },
        {
          index: true,
          key: "module_name",
          value: "lock_staking",
        },
        {
          index: true,
          key: "function_name",
          value: "redelegate_hook_v2",
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
            '{"staking_account":"0xcb742b118741fdb2936bc7a3ade5c62a18c0bf6b0116a1a713614dcc665bbcec","metadata":"0x543b35a39cfadad3da3c23249c474455d15efd2f94f849473226dee8a3c7a9e1","release_time":"1780650846","validator":"initvaloper1qgje6dgazcruzsashpqektp2yaf47x2wyysjqx","locked_share":"1083469"}',
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
            '{"staking_account":"0xcb742b118741fdb2936bc7a3ade5c62a18c0bf6b0116a1a713614dcc665bbcec","metadata":"0x543b35a39cfadad3da3c23249c474455d15efd2f94f849473226dee8a3c7a9e1","release_time":"1780650846","validator":"initvaloper13ze0ryc7vfj2n86sfxfugww4qygjf8mnxxy9uk","locked_share":"1083469"}',
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
            '{"store_addr":"0x7a2bc535e8f0cb78ed3750ae917240ab6e7421c3c344a4effd67efc444a1b4bf","metadata_addr":"0x8e4733bdabcf7d4afc3d14f0dd46c9bf52fb0fce9e4b996c939e195b8bc891d9","amount":"33"}',
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
            '{"store_addr":"0x809aca4677fca3593d43e5e7b6070cdc9a8f49392e77cb0eaae721a92ab98b64","metadata_addr":"0x8e4733bdabcf7d4afc3d14f0dd46c9bf52fb0fce9e4b996c939e195b8bc891d9","amount":"33"}',
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
  gas_used: "914260",
  gas_wanted: "1286924",
  height: "3511719",
  info: "",
  logs: [],
  raw_log: "",
  timestamp: "2025-06-06T09:40:06Z",
  tx: {
    "@type": "/cosmos.tx.v1beta1.Tx",
    auth_info: {
      fee: {
        amount: [
          {
            amount: "19304",
            denom: "uinit",
          },
        ],
        gas_limit: "1286924",
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
            key: "AwjKrreRGET4kTltnMpmySmtuHyg9y7mHQNSAc306K0z",
          },
          sequence: "38",
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
            "XpMiagAAAAA=",
            "MmluaXR2YWxvcGVyMXFnamU2ZGdhemNydXpzYXNocHFla3RwMnlhZjQ3eDJ3eXlzanF4",
            "XpMiagAAAAA=",
            "MmluaXR2YWxvcGVyMTN6ZTByeWM3dmZqMm44NnNmeGZ1Z3d3NHF5Z2pmOG1ueHh5OXVr",
          ],
          function_name: "redelegate",
          module_address: "0x3a886b32a802582f2e446e74d4a24d1d7ed01adf46d2a8f65c5723887e708789",
          module_name: "lock_staking",
          sender: "init1tacytfqagzjv73v5ke2s4qj8l68c2w0q4v0q0n",
          type_args: [],
        },
      ],
      non_critical_extension_options: [],
      timeout_height: "0",
    },
    signatures: [
      "4g7NJndN8W8Hs9mWZzr7rttVFhTzZ/QlSQfGSHDBdk8LdP/DvkWode11yWfE6nEg/LC2H5QEa7znE4OYNhZjeg==",
    ],
  },
  txhash: "605F7D5A02600A5E8C5F829DBD1D4FEDAE714D39FA1DD269FCC8CBD57CDEDB56",
};
