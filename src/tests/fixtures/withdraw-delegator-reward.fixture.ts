export const mockMsgWithdrawDelegatorReward = {
  code: 0,
  codespace: "",
  data: "12410A3F2F636F736D6F732E646973747269627574696F6E2E763162657461312E4D7367576974686472617744656C656761746F72526577617264526573706F6E7365",
  events: [
    {
      attributes: [
        {
          index: true,
          key: "sender",
          value: "0x1,0x8aef69782640e3fd5c44ddbe9c84777a6dd3cf5b",
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
            '{"store_addr":"0x1f4590c6fe1596a76c2d3414bc1ab4e8b4c4a5a25853625abff6684e580a634f","metadata_addr":"0x8e4733bdabcf7d4afc3d14f0dd46c9bf52fb0fce9e4b996c939e195b8bc891d9","amount":"5697"}',
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
            '{"store_addr":"0x66a8cb0bfb991610dcffb8a6543ac0887c7c5405b8f985ebed6d628fe50c4686","metadata_addr":"0x8e4733bdabcf7d4afc3d14f0dd46c9bf52fb0fce9e4b996c939e195b8bc891d9","amount":"5697"}',
        },
      ],
      type: "move",
    },
    {
      attributes: [
        {
          index: true,
          key: "spender",
          value: "init13thkj7pxgr3l6hzymklfeprh0fka8n6mzckr78",
        },
        {
          index: true,
          key: "amount",
          value: "5697uinit",
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
          value: "5697uinit",
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
          value: "init13thkj7pxgr3l6hzymklfeprh0fka8n6mzckr78",
        },
        {
          index: true,
          key: "amount",
          value: "5697uinit",
        },
      ],
      type: "transfer",
    },
    {
      attributes: [
        {
          index: true,
          key: "sender",
          value: "init13thkj7pxgr3l6hzymklfeprh0fka8n6mzckr78",
        },
      ],
      type: "message",
    },
    {
      attributes: [
        {
          index: true,
          key: "fee",
          value: "5697uinit",
        },
        {
          index: true,
          key: "fee_payer",
          value: "init13thkj7pxgr3l6hzymklfeprh0fka8n6mzckr78",
        },
      ],
      type: "tx",
    },
    {
      attributes: [
        {
          index: true,
          key: "acc_seq",
          value: "init13thkj7pxgr3l6hzymklfeprh0fka8n6mzckr78/342",
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
            "KSd4DOmAlgwX0ych5uWUUB+YFI9pr/z2r8JHq1E1xihVfegZVtQ3dg00QAmi0VT+MkVLpfwWG6ufzDqg8LKYcg==",
        },
      ],
      type: "tx",
    },
    {
      attributes: [
        {
          index: true,
          key: "action",
          value: "/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward",
        },
        {
          index: true,
          key: "sender",
          value: "init13thkj7pxgr3l6hzymklfeprh0fka8n6mzckr78",
        },
        {
          index: true,
          key: "module",
          value: "distribution",
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
            '{"store_addr":"0xba2a23251eb06923fadb03ea9856c66510fefc4dfa9abe92cfb2961c9145cfb3","metadata_addr":"0x8e4733bdabcf7d4afc3d14f0dd46c9bf52fb0fce9e4b996c939e195b8bc891d9","amount":"33490255"}',
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
            '{"store_addr":"0x1f4590c6fe1596a76c2d3414bc1ab4e8b4c4a5a25853625abff6684e580a634f","metadata_addr":"0x8e4733bdabcf7d4afc3d14f0dd46c9bf52fb0fce9e4b996c939e195b8bc891d9","amount":"33490255"}',
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
          value: "33490255uinit",
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
          value: "init13thkj7pxgr3l6hzymklfeprh0fka8n6mzckr78",
        },
        {
          index: true,
          key: "amount",
          value: "33490255uinit",
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
          value: "init13thkj7pxgr3l6hzymklfeprh0fka8n6mzckr78",
        },
        {
          index: true,
          key: "sender",
          value: "init1jv65s3grqf6v6jl3dp4t6c9t9rk99cd8ffy0za",
        },
        {
          index: true,
          key: "amount",
          value: "33490255uinit",
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
          key: "validator",
          value: "initvaloper1gs7kwd5jm8ghnvx4z973aqcenfcej6ykpuydc4",
        },
        {
          index: true,
          key: "amount",
          value: "33490255uinit",
        },
        {
          index: true,
          key: "amount_per_pool",
          value:
            'denom:"move/543b35a39cfadad3da3c23249c474455d15efd2f94f849473226dee8a3c7a9e1" coins:<denom:"uinit" amount:"33490255" > ',
        },
        {
          index: true,
          key: "msg_index",
          value: "0",
        },
      ],
      type: "withdraw_rewards",
    },
  ],
  gas_used: "227914",
  gas_wanted: "345228",
  height: "3962641",
  info: "",
  logs: [],
  raw_log: "",
  timestamp: "2025-06-18T01:32:58Z",
  tx: {
    "@type": "/cosmos.tx.v1beta1.Tx",
    auth_info: {
      fee: {
        amount: [
          {
            amount: "5697",
            denom: "uinit",
          },
        ],
        gas_limit: "345228",
        granter: "",
        payer: "",
      },
      signer_infos: [
        {
          mode_info: {
            single: {
              mode: "SIGN_MODE_LEGACY_AMINO_JSON",
            },
          },
          public_key: {
            "@type": "/initia.crypto.v1beta1.ethsecp256k1.PubKey",
            key: "A8ERwJQmmSwYlA9XlFgBZufCvxXw9dqTIHPPkQtSxDNO",
          },
          sequence: "342",
        },
      ],
      tip: null,
    },
    body: {
      extension_options: [],
      memo: "",
      messages: [
        {
          "@type": "/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward",
          delegator_address: "init13thkj7pxgr3l6hzymklfeprh0fka8n6mzckr78",
          validator_address:
            "initvaloper1gs7kwd5jm8ghnvx4z973aqcenfcej6ykpuydc4",
        },
      ],
      non_critical_extension_options: [],
      timeout_height: "0",
    },
    signatures: [
      "KSd4DOmAlgwX0ych5uWUUB+YFI9pr/z2r8JHq1E1xihVfegZVtQ3dg00QAmi0VT+MkVLpfwWG6ufzDqg8LKYcg==",
    ],
  },
  txhash: "01C91C1DC4EB69A6C7CE1F98BCA2EB037AB9A30915C539F0984C37F4B0F7A2B2",
};

export const mockApiResponsesWithdrawDelegatorReward = {
  "/initia/move/v1/accounts/0x1f4590c6fe1596a76c2d3414bc1ab4e8b4c4a5a25853625abff6684e580a634f/resources":
    {
      pagination: {
        next_key: null,
        total: "0",
      },
      resources: [
        {
          address:
            "0x1f4590c6fe1596a76c2d3414bc1ab4e8b4c4a5a25853625abff6684e580a634f",
          move_resource:
            '{"type":"0x1::object::ObjectCore","data":{"allow_ungated_transfer":false,"owner":"0x8aef69782640e3fd5c44ddbe9c84777a6dd3cf5b","version":"1"}}',
          raw_bytes: "AAAAAAAAAAAAAAAAiu9peCZA4/1cRN2+nIR3em3Tz1sAAQAAAAAAAAA=",
          struct_tag: "0x1::object::ObjectCore",
        },
        {
          address:
            "0x1f4590c6fe1596a76c2d3414bc1ab4e8b4c4a5a25853625abff6684e580a634f",
          move_resource:
            '{"type":"0x1::fungible_asset::FungibleStore","data":{"balance":"109337339","frozen":false,"metadata":{"inner":"0x8e4733bdabcf7d4afc3d14f0dd46c9bf52fb0fce9e4b996c939e195b8bc891d9"}}}',
          raw_bytes: "jkczvavPfUr8PRTw3UbJv1L7D86eS5lsk54ZW4vIkdn7WoQGAAAAAAA=",
          struct_tag: "0x1::fungible_asset::FungibleStore",
        },
      ],
    },
  "/initia/move/v1/accounts/0x8e4733bdabcf7d4afc3d14f0dd46c9bf52fb0fce9e4b996c939e195b8bc891d9/resources":
    {
      pagination: {
        next_key: null,
        total: "0",
      },
      resources: [
        {
          address:
            "0x8e4733bdabcf7d4afc3d14f0dd46c9bf52fb0fce9e4b996c939e195b8bc891d9",
          move_resource:
            '{"type":"0x1::coin::ManagingRefs","data":{"burn_ref":{"metadata":{"inner":"0x8e4733bdabcf7d4afc3d14f0dd46c9bf52fb0fce9e4b996c939e195b8bc891d9"}},"mint_ref":{"metadata":{"inner":"0x8e4733bdabcf7d4afc3d14f0dd46c9bf52fb0fce9e4b996c939e195b8bc891d9"}},"transfer_ref":{"metadata":{"inner":"0x8e4733bdabcf7d4afc3d14f0dd46c9bf52fb0fce9e4b996c939e195b8bc891d9"}}}}',
          raw_bytes:
            "jkczvavPfUr8PRTw3UbJv1L7D86eS5lsk54ZW4vIkdmORzO9q899Svw9FPDdRsm/UvsPzp5LmWyTnhlbi8iR2Y5HM72rz31K/D0U8N1Gyb9S+w/OnkuZbJOeGVuLyJHZ",
          struct_tag: "0x1::coin::ManagingRefs",
        },
        {
          address:
            "0x8e4733bdabcf7d4afc3d14f0dd46c9bf52fb0fce9e4b996c939e195b8bc891d9",
          move_resource:
            '{"type":"0x1::object::ObjectCore","data":{"allow_ungated_transfer":true,"owner":"0x1","version":"1"}}',
          raw_bytes: "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEBAQAAAAAAAAA=",
          struct_tag: "0x1::object::ObjectCore",
        },
        {
          address:
            "0x8e4733bdabcf7d4afc3d14f0dd46c9bf52fb0fce9e4b996c939e195b8bc891d9",
          move_resource:
            '{"type":"0x1::managed_coin::Capabilities","data":{"burn_cap":{"metadata":{"inner":"0x8e4733bdabcf7d4afc3d14f0dd46c9bf52fb0fce9e4b996c939e195b8bc891d9"}},"freeze_cap":{"metadata":{"inner":"0x8e4733bdabcf7d4afc3d14f0dd46c9bf52fb0fce9e4b996c939e195b8bc891d9"}},"mint_cap":{"metadata":{"inner":"0x8e4733bdabcf7d4afc3d14f0dd46c9bf52fb0fce9e4b996c939e195b8bc891d9"}}}}',
          raw_bytes:
            "jkczvavPfUr8PRTw3UbJv1L7D86eS5lsk54ZW4vIkdmORzO9q899Svw9FPDdRsm/UvsPzp5LmWyTnhlbi8iR2Y5HM72rz31K/D0U8N1Gyb9S+w/OnkuZbJOeGVuLyJHZ",
          struct_tag: "0x1::managed_coin::Capabilities",
        },
        {
          address:
            "0x8e4733bdabcf7d4afc3d14f0dd46c9bf52fb0fce9e4b996c939e195b8bc891d9",
          move_resource:
            '{"type":"0x1::fungible_asset::Supply","data":{"current":"1000000000000000","maximum":null}}',
          raw_bytes: "AIDGpH6NAwAAAAAAAAAAAAA=",
          struct_tag: "0x1::fungible_asset::Supply",
        },
        {
          address:
            "0x8e4733bdabcf7d4afc3d14f0dd46c9bf52fb0fce9e4b996c939e195b8bc891d9",
          move_resource:
            '{"type":"0x1::fungible_asset::Metadata","data":{"decimals":0,"icon_uri":"","name":"uinit Coin","project_uri":"","symbol":"uinit"}}',
          raw_bytes: "CnVpbml0IENvaW4FdWluaXQAAAA=",
          struct_tag: "0x1::fungible_asset::Metadata",
        },
        {
          address:
            "0x8e4733bdabcf7d4afc3d14f0dd46c9bf52fb0fce9e4b996c939e195b8bc891d9",
          move_resource:
            '{"type":"0x1::primary_fungible_store::DeriveRefPod","data":{"metadata_derive_ref":{"self":"0x8e4733bdabcf7d4afc3d14f0dd46c9bf52fb0fce9e4b996c939e195b8bc891d9","version":"1"}}}',
          raw_bytes: "jkczvavPfUr8PRTw3UbJv1L7D86eS5lsk54ZW4vIkdkBAAAAAAAAAA==",
          struct_tag: "0x1::primary_fungible_store::DeriveRefPod",
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
          raw_bytes: "AAAAAAAAAAAAAAAAkzVIRQMCdM1L8WhqvWCrKOxS4acAAQAAAAAAAAA=",
          struct_tag: "0x1::object::ObjectCore",
        },
        {
          address:
            "0xba2a23251eb06923fadb03ea9856c66510fefc4dfa9abe92cfb2961c9145cfb3",
          move_resource:
            '{"type":"0x1::fungible_asset::FungibleStore","data":{"balance":"1561829929769","frozen":false,"metadata":{"inner":"0x8e4733bdabcf7d4afc3d14f0dd46c9bf52fb0fce9e4b996c939e195b8bc891d9"}}}',
          raw_bytes: "jkczvavPfUr8PRTw3UbJv1L7D86eS5lsk54ZW4vIkdkpc1GkawEAAAA=",
          struct_tag: "0x1::fungible_asset::FungibleStore",
        },
      ],
    },
};
