export const mockMsgFinalizeTokenWithdrawal = {
  code: 0,
  codespace: "",
  data: "12360A342F6F70696E69742E6F70686F73742E76312E4D736746696E616C697A65546F6B656E5769746864726177616C526573706F6E7365",
  events: [
    {
      attributes: [
        {
          index: true,
          key: "sender",
          value: "0x1,0x19577a28b8cda4d7b236193bbb43c44e8478a820",
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
            '{"store_addr":"0x44dca07a407c21bbbc1ce5ad9c54507b137bb772787b3c732f921cd79f0790e2","metadata_addr":"0x8e4733bdabcf7d4afc3d14f0dd46c9bf52fb0fce9e4b996c939e195b8bc891d9","amount":"3308"}',
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
            '{"store_addr":"0x66a8cb0bfb991610dcffb8a6543ac0887c7c5405b8f985ebed6d628fe50c4686","metadata_addr":"0x8e4733bdabcf7d4afc3d14f0dd46c9bf52fb0fce9e4b996c939e195b8bc891d9","amount":"3308"}',
        },
      ],
      type: "move",
    },
    {
      attributes: [
        {
          index: true,
          key: "spender",
          value: "init1r9th529cekjd0v3kryamks7yf6z832pqsapys7",
        },
        {
          index: true,
          key: "amount",
          value: "3308uinit",
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
          value: "3308uinit",
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
          value: "init1r9th529cekjd0v3kryamks7yf6z832pqsapys7",
        },
        {
          index: true,
          key: "amount",
          value: "3308uinit",
        },
      ],
      type: "transfer",
    },
    {
      attributes: [
        {
          index: true,
          key: "sender",
          value: "init1r9th529cekjd0v3kryamks7yf6z832pqsapys7",
        },
      ],
      type: "message",
    },
    {
      attributes: [
        {
          index: true,
          key: "fee",
          value: "3308uinit",
        },
        {
          index: true,
          key: "fee_payer",
          value: "init1r9th529cekjd0v3kryamks7yf6z832pqsapys7",
        },
      ],
      type: "tx",
    },
    {
      attributes: [
        {
          index: true,
          key: "acc_seq",
          value: "init1r9th529cekjd0v3kryamks7yf6z832pqsapys7/7",
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
            "i28k2DlYf6sLHsj9+AzXvI6U9GKUieRJ1HfUbOUbFcE2MPOvlU9GT6ZWyDPARYNvAGzv4dgq/qubnyZrjoiW7g==",
        },
      ],
      type: "tx",
    },
    {
      attributes: [
        {
          index: true,
          key: "action",
          value: "/opinit.ophost.v1.MsgFinalizeTokenWithdrawal",
        },
        {
          index: true,
          key: "sender",
          value: "init1r9th529cekjd0v3kryamks7yf6z832pqsapys7",
        },
        {
          index: true,
          key: "module",
          value: "ophost",
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
          value:
            "0x1,0xc628a1449fc2e148d66e49593b51274f6be1bcd9cd9ddf8d830a2d5d578d8c75",
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
            '{"store_addr":"0xad531c65fc7ef214089dd4a9e4d5375186833221bf150dc101f90af9c61b78b3","metadata_addr":"0x8e4733bdabcf7d4afc3d14f0dd46c9bf52fb0fce9e4b996c939e195b8bc891d9","amount":"716000000"}',
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
            '{"store_addr":"0x44dca07a407c21bbbc1ce5ad9c54507b137bb772787b3c732f921cd79f0790e2","metadata_addr":"0x8e4733bdabcf7d4afc3d14f0dd46c9bf52fb0fce9e4b996c939e195b8bc891d9","amount":"716000000"}',
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
          value:
            "init1cc52z3ylcts534nwf9vnk5f8fa47r0xeekwalrvrpgk464ud336srpv5mk",
        },
        {
          index: true,
          key: "amount",
          value: "716000000uinit",
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
          value: "init1r9th529cekjd0v3kryamks7yf6z832pqsapys7",
        },
        {
          index: true,
          key: "amount",
          value: "716000000uinit",
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
          value: "init1r9th529cekjd0v3kryamks7yf6z832pqsapys7",
        },
        {
          index: true,
          key: "sender",
          value:
            "init1cc52z3ylcts534nwf9vnk5f8fa47r0xeekwalrvrpgk464ud336srpv5mk",
        },
        {
          index: true,
          key: "amount",
          value: "716000000uinit",
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
          value:
            "init1cc52z3ylcts534nwf9vnk5f8fa47r0xeekwalrvrpgk464ud336srpv5mk",
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
          key: "bridge_id",
          value: "12",
        },
        {
          index: true,
          key: "output_index",
          value: "2991",
        },
        {
          index: true,
          key: "l2_sequence",
          value: "347",
        },
        {
          index: true,
          key: "from",
          value: "init1r9th529cekjd0v3kryamks7yf6z832pqsapys7",
        },
        {
          index: true,
          key: "to",
          value: "init1r9th529cekjd0v3kryamks7yf6z832pqsapys7",
        },
        {
          index: true,
          key: "l1_denom",
          value: "uinit",
        },
        {
          index: true,
          key: "l2_denom",
          value:
            "l2/2b2d36f666e98b9eecf70d6ec24b882b79f2c8e2af73f54f97b8b670dbb87605",
        },
        {
          index: true,
          key: "amount",
          value: "716000000",
        },
        {
          index: true,
          key: "msg_index",
          value: "0",
        },
      ],
      type: "finalize_token_withdrawal",
    },
  ],
  gas_used: "152522",
  gas_wanted: "220509",
  height: "3936520",
  info: "",
  logs: [],
  raw_log: "",
  timestamp: "2025-06-17T09:20:03Z",
  tx: {
    "@type": "/cosmos.tx.v1beta1.Tx",
    auth_info: {
      fee: {
        amount: [
          {
            amount: "3308",
            denom: "uinit",
          },
        ],
        gas_limit: "220509",
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
            key: "A+aDESsIdzyCgxVmTupw7y/OdZMQQ+LGComgjiWH6LA9",
          },
          sequence: "7",
        },
      ],
      tip: null,
    },
    body: {
      extension_options: [],
      memo: "",
      messages: [
        {
          "@type": "/opinit.ophost.v1.MsgFinalizeTokenWithdrawal",
          amount: {
            amount: "716000000",
            denom: "uinit",
          },
          bridge_id: "12",
          from: "init1r9th529cekjd0v3kryamks7yf6z832pqsapys7",
          last_block_hash: "2qo/1SHfY37dWA+P73+5l1G3Z/02jiJ1Q6VhlDVRmYE=",
          output_index: "2991",
          sender: "init1r9th529cekjd0v3kryamks7yf6z832pqsapys7",
          sequence: "347",
          storage_root: "e60Ba2riRXRZE+aQaQ4eLPla7UJkYJETMEyN0eh0mbo=",
          to: "init1r9th529cekjd0v3kryamks7yf6z832pqsapys7",
          version: "AQ==",
          withdrawal_proofs: ["OEfUQghgYOMa2k3Hvje3xYEbLv8ualy7y6c/N+X8RQk="],
        },
      ],
      non_critical_extension_options: [],
      timeout_height: "0",
    },
    signatures: [
      "i28k2DlYf6sLHsj9+AzXvI6U9GKUieRJ1HfUbOUbFcE2MPOvlU9GT6ZWyDPARYNvAGzv4dgq/qubnyZrjoiW7g==",
    ],
  },
  txhash: "69C3617C88920F5C85D77004EEB83CE382654FA0D32B9091818DE6D8B5B42016",
};

export const mockApiResponsesForFinalizeTokenWithdrawal = {
  GET: {
    "/initia/move/v1/accounts/0x8e4733bdabcf7d4afc3d14f0dd46c9bf52fb0fce9e4b996c939e195b8bc891d9/resources":
      {
        pagination: { next_key: null, total: "0" },
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
            raw_bytes:
              "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEBAQAAAAAAAAA=",
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
              '{"type":"0x1::fungible_asset::Supply","data":{"current":"1000007461173507","maximum":null}}',
            raw_bytes: "A/l+YYCNAwAAAAAAAAAAAAA=",
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
            raw_bytes:
              "jkczvavPfUr8PRTw3UbJv1L7D86eS5lsk54ZW4vIkdkBAAAAAAAAAA==",
            struct_tag: "0x1::primary_fungible_store::DeriveRefPod",
          },
        ],
      },
    "/initia/move/v1/accounts/0x44dca07a407c21bbbc1ce5ad9c54507b137bb772787b3c732f921cd79f0790e2/resources":
      {
        pagination: { next_key: null, total: "0" },
        resources: [
          {
            address:
              "0x44dca07a407c21bbbc1ce5ad9c54507b137bb772787b3c732f921cd79f0790e2",
            move_resource:
              '{"type":"0x1::object::ObjectCore","data":{"allow_ungated_transfer":false,"owner":"0x19577a28b8cda4d7b236193bbb43c44e8478a820","version":"1"}}',
            raw_bytes:
              "AAAAAAAAAAAAAAAAGVd6KLjNpNeyNhk7u0PEToR4qCAAAQAAAAAAAAA=",
            struct_tag: "0x1::object::ObjectCore",
          },
          {
            address:
              "0x44dca07a407c21bbbc1ce5ad9c54507b137bb772787b3c732f921cd79f0790e2",
            move_resource:
              '{"type":"0x1::fungible_asset::FungibleStore","data":{"balance":"98515","frozen":false,"metadata":{"inner":"0x8e4733bdabcf7d4afc3d14f0dd46c9bf52fb0fce9e4b996c939e195b8bc891d9"}}}',
            raw_bytes:
              "jkczvavPfUr8PRTw3UbJv1L7D86eS5lsk54ZW4vIkdnTgAEAAAAAAAA=",
            struct_tag: "0x1::fungible_asset::FungibleStore",
          },
        ],
      },
    "/initia/move/v1/accounts/0xad531c65fc7ef214089dd4a9e4d5375186833221bf150dc101f90af9c61b78b3/resources":
      {
        pagination: { next_key: null, total: "0" },
        resources: [
          {
            address:
              "0xad531c65fc7ef214089dd4a9e4d5375186833221bf150dc101f90af9c61b78b3",
            move_resource:
              '{"type":"0x1::object::ObjectCore","data":{"allow_ungated_transfer":false,"owner":"0xc628a1449fc2e148d66e49593b51274f6be1bcd9cd9ddf8d830a2d5d578d8c75","version":"1"}}',
            raw_bytes:
              "xiihRJ/C4UjWbklZO1EnT2vhvNnNnd+NgwotXVeNjHUAAQAAAAAAAAA=",
            struct_tag: "0x1::object::ObjectCore",
          },
          {
            address:
              "0xad531c65fc7ef214089dd4a9e4d5375186833221bf150dc101f90af9c61b78b3",
            move_resource:
              '{"type":"0x1::fungible_asset::FungibleStore","data":{"balance":"559710275862","frozen":false,"metadata":{"inner":"0x8e4733bdabcf7d4afc3d14f0dd46c9bf52fb0fce9e4b996c939e195b8bc891d9"}}}',
            raw_bytes:
              "jkczvavPfUr8PRTw3UbJv1L7D86eS5lsk54ZW4vIkdkWCVVRggAAAAA=",
            struct_tag: "0x1::fungible_asset::FungibleStore",
          },
        ],
      },
  },
  POST: {
    "/initia/move/v1/view/json": [
      {
        payload: {
          address: "0x1",
          args: [
            '"0x8e4733bdabcf7d4afc3d14f0dd46c9bf52fb0fce9e4b996c939e195b8bc891d9"',
          ],
          function_name: "metadata_to_denom",
          module_name: "coin",
          typeArgs: [],
        },
        response: { data: '"uinit"', events: [], gas_used: "6507" },
      },
    ],
  },
};
