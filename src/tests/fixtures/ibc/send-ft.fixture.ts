export const mockMsgIbcSendFt = {
  code: 0,
  codespace: "",
  data: "12380A312F6962632E6170706C69636174696F6E732E7472616E736665722E76312E4D73675472616E73666572526573706F6E7365120308D216",
  events: [
    {
      attributes: [
        {
          index: true,
          key: "sender",
          value: "0x1,0xb395c9f2e84f75b1686fcdc62f8cb62a572b7820",
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
            '{"store_addr":"0x2c80bab0f53aecc06e06ebf1dd70f2a07fae9fa050ad010a7e0d6ffe1795f7a5","metadata_addr":"0xe0e9394b24e53775d6af87934ac02d73536ad58b7894f6ccff3f5e7c0d548e55","amount":"1779"}',
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
            '{"store_addr":"0x5c8edb2aff315409e899a3cbabeaa8741eb8044448d2c28a37a8d0d6e5d96528","metadata_addr":"0xe0e9394b24e53775d6af87934ac02d73536ad58b7894f6ccff3f5e7c0d548e55","amount":"1779"}',
        },
      ],
      type: "move",
    },
    {
      attributes: [
        {
          index: true,
          key: "spender",
          value: "init1kw2unuhgfa6mz6r0ehrzlr9k9ftjk7pql8u5fm",
        },
        {
          index: true,
          key: "amount",
          value:
            "1779ibc/6490A7EAB61059BFC1CDDEB05917DD70BDF3A611654162A1A47DB930D40D8AF4",
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
          value:
            "1779ibc/6490A7EAB61059BFC1CDDEB05917DD70BDF3A611654162A1A47DB930D40D8AF4",
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
          value: "init1kw2unuhgfa6mz6r0ehrzlr9k9ftjk7pql8u5fm",
        },
        {
          index: true,
          key: "amount",
          value:
            "1779ibc/6490A7EAB61059BFC1CDDEB05917DD70BDF3A611654162A1A47DB930D40D8AF4",
        },
      ],
      type: "transfer",
    },
    {
      attributes: [
        {
          index: true,
          key: "sender",
          value: "init1kw2unuhgfa6mz6r0ehrzlr9k9ftjk7pql8u5fm",
        },
      ],
      type: "message",
    },
    {
      attributes: [
        {
          index: true,
          key: "fee",
          value:
            "1779ibc/6490A7EAB61059BFC1CDDEB05917DD70BDF3A611654162A1A47DB930D40D8AF4",
        },
        {
          index: true,
          key: "fee_payer",
          value: "init1kw2unuhgfa6mz6r0ehrzlr9k9ftjk7pql8u5fm",
        },
      ],
      type: "tx",
    },
    {
      attributes: [
        {
          index: true,
          key: "acc_seq",
          value: "init1kw2unuhgfa6mz6r0ehrzlr9k9ftjk7pql8u5fm/34",
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
            "/8qaRva/OMtU0LPkxHDp1uHTSao4W3LAMDY3JyZkFjcrK9ymJOUmW9dI7QIUy9fklIdoeMRBHG3/Fa/im8jkNA==",
        },
      ],
      type: "tx",
    },
    {
      attributes: [
        {
          index: true,
          key: "action",
          value: "/ibc.applications.transfer.v1.MsgTransfer",
        },
        {
          index: true,
          key: "sender",
          value: "init1kw2unuhgfa6mz6r0ehrzlr9k9ftjk7pql8u5fm",
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
          value: "0x1,0xb395c9f2e84f75b1686fcdc62f8cb62a572b7820",
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
            '{"store_addr":"0xe2d99fcea59da8da2d4095cc11cb83e6ff80cf2e41522c678b8f152233d1b65e","metadata_addr":"0x8e4733bdabcf7d4afc3d14f0dd46c9bf52fb0fce9e4b996c939e195b8bc891d9","amount":"200000"}',
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
            '{"store_addr":"0x873cbc9d221091c5711ca3341776caa29a9e8a51ed31bc6791c98e3298f6a10b","metadata_addr":"0x8e4733bdabcf7d4afc3d14f0dd46c9bf52fb0fce9e4b996c939e195b8bc891d9","amount":"200000"}',
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
          value: "init1kw2unuhgfa6mz6r0ehrzlr9k9ftjk7pql8u5fm",
        },
        {
          index: true,
          key: "amount",
          value: "200000uinit",
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
          value: "init1je5zsemauel5dqjwug9snfvkwr8hks9zrfgla2",
        },
        {
          index: true,
          key: "amount",
          value: "200000uinit",
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
          value: "init1je5zsemauel5dqjwug9snfvkwr8hks9zrfgla2",
        },
        {
          index: true,
          key: "sender",
          value: "init1kw2unuhgfa6mz6r0ehrzlr9k9ftjk7pql8u5fm",
        },
        {
          index: true,
          key: "amount",
          value: "200000uinit",
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
          value: "init1kw2unuhgfa6mz6r0ehrzlr9k9ftjk7pql8u5fm",
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
          key: "packet_data",
          value:
            '{"amount":"200000","denom":"uinit","receiver":"init1kw2unuhgfa6mz6r0ehrzlr9k9ftjk7pql8u5fm","sender":"init1kw2unuhgfa6mz6r0ehrzlr9k9ftjk7pql8u5fm"}',
        },
        {
          index: true,
          key: "packet_data_hex",
          value:
            "7b22616d6f756e74223a22323030303030222c2264656e6f6d223a2275696e6974222c227265636569766572223a22696e6974316b7732756e7568676661366d7a3672306568727a6c72396b3966746a6b3770716c387535666d222c2273656e646572223a22696e6974316b7732756e7568676661366d7a3672306568727a6c72396b3966746a6b3770716c387535666d227d",
        },
        {
          index: true,
          key: "packet_timeout_height",
          value: "0-0",
        },
        {
          index: true,
          key: "packet_timeout_timestamp",
          value: "1751257396110677500",
        },
        {
          index: true,
          key: "packet_sequence",
          value: "2898",
        },
        {
          index: true,
          key: "packet_src_port",
          value: "transfer",
        },
        {
          index: true,
          key: "packet_src_channel",
          value: "channel-29",
        },
        {
          index: true,
          key: "packet_dst_port",
          value: "transfer",
        },
        {
          index: true,
          key: "packet_dst_channel",
          value: "channel-0",
        },
        {
          index: true,
          key: "packet_channel_ordering",
          value: "ORDER_UNORDERED",
        },
        {
          index: true,
          key: "packet_connection",
          value: "connection-16",
        },
        {
          index: true,
          key: "connection_id",
          value: "connection-16",
        },
        {
          index: true,
          key: "msg_index",
          value: "0",
        },
      ],
      type: "send_packet",
    },
    {
      attributes: [
        {
          index: true,
          key: "module",
          value: "ibc_channel",
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
          value: "init1kw2unuhgfa6mz6r0ehrzlr9k9ftjk7pql8u5fm",
        },
        {
          index: true,
          key: "receiver",
          value: "init1kw2unuhgfa6mz6r0ehrzlr9k9ftjk7pql8u5fm",
        },
        {
          index: true,
          key: "amount",
          value: "200000",
        },
        {
          index: true,
          key: "denom",
          value: "uinit",
        },
        {
          index: true,
          key: "memo",
          value: "",
        },
        {
          index: true,
          key: "msg_index",
          value: "0",
        },
      ],
      type: "ibc_transfer",
    },
    {
      attributes: [
        {
          index: true,
          key: "module",
          value: "transfer",
        },
        {
          index: true,
          key: "msg_index",
          value: "0",
        },
      ],
      type: "message",
    },
  ],
  gas_used: "176158",
  gas_wanted: "252699",
  height: "4431409",
  info: "",
  logs: [],
  raw_log: "",
  timestamp: "2025-06-30T04:18:25Z",
  tx: {
    "@type": "/cosmos.tx.v1beta1.Tx",
    auth_info: {
      fee: {
        amount: [
          {
            amount: "1779",
            denom:
              "ibc/6490A7EAB61059BFC1CDDEB05917DD70BDF3A611654162A1A47DB930D40D8AF4",
          },
        ],
        gas_limit: "252699",
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
            key: "Axdt0OtFq4TF/TA4EnlF4J0Lv6E+9jFccR2/ULQVXP2a",
          },
          sequence: "34",
        },
      ],
      tip: null,
    },
    body: {
      extension_options: [],
      memo: "",
      messages: [
        {
          "@type": "/ibc.applications.transfer.v1.MsgTransfer",
          memo: "",
          receiver: "init1kw2unuhgfa6mz6r0ehrzlr9k9ftjk7pql8u5fm",
          sender: "init1kw2unuhgfa6mz6r0ehrzlr9k9ftjk7pql8u5fm",
          source_channel: "channel-29",
          source_port: "transfer",
          timeout_height: {
            revision_height: "0",
            revision_number: "0",
          },
          timeout_timestamp: "1751257396110677500",
          token: {
            amount: "200000",
            denom: "uinit",
          },
        },
      ],
      non_critical_extension_options: [],
      timeout_height: "0",
    },
    signatures: [
      "/8qaRva/OMtU0LPkxHDp1uHTSao4W3LAMDY3JyZkFjcrK9ymJOUmW9dI7QIUy9fklIdoeMRBHG3/Fa/im8jkNA==",
    ],
  },
  txhash: "12B2F51153D9308C079DDF6FD5964B411BA512E52CBF8F6A63D7A0898C580CB4",
};

export const mockApiResponsesForMsgIbcSend = {
  GET: {
    "/chains.json": [
      {
        chain_id: "interwoven-1",
        chain_name: "initia",
        metadata: {
          ibc_channels: [
            {
              chain_id: "moo-1",
              channel_id: "channel-29",
              port_id: "transfer",
              version: "ics20-1",
            },
          ],
        },
      },
      {
        chain_id: "moo-1",
        chain_name: "moo",
        metadata: {
          ibc_channels: [
            {
              chain_id: "interwoven-1",
              channel_id: "channel-0",
              port_id: "transfer",
              version: "ics20-1",
            },
            {
              chain_id: "interwoven-1",
              channel_id: "channel-1",
              port_id:
                "wasm.init1wug8sewp6cedgkmrmvhl3lf3tulagm9hnvy8p0rppz9yjw0g4wtq7947m6",
              version: "ics721-1",
            },
          ],
        },
      },
    ],
    "/cosmos/base/tendermint/v1beta1/node_info": {
      default_node_info: {
        network: "interwoven-1",
      },
    },
    "/initia/move/v1/accounts/0x873cbc9d221091c5711ca3341776caa29a9e8a51ed31bc6791c98e3298f6a10b/resources":
      {
        pagination: { next_key: null, total: "0" },
        resources: [
          {
            address:
              "0x873cbc9d221091c5711ca3341776caa29a9e8a51ed31bc6791c98e3298f6a10b",
            move_resource:
              '{"type":"0x1::object::ObjectCore","data":{"allow_ungated_transfer":false,"owner":"0x966828677de67f46824ee20b09a59670cf7b40a2","version":"1"}}',
            raw_bytes:
              "AAAAAAAAAAAAAAAAlmgoZ33mf0aCTuILCaWWcM97QKIAAQAAAAAAAAA=",
            struct_tag: "0x1::object::ObjectCore",
          },
          {
            address:
              "0x873cbc9d221091c5711ca3341776caa29a9e8a51ed31bc6791c98e3298f6a10b",
            move_resource:
              '{"type":"0x1::fungible_asset::FungibleStore","data":{"balance":"20137660564","frozen":false,"metadata":{"inner":"0x8e4733bdabcf7d4afc3d14f0dd46c9bf52fb0fce9e4b996c939e195b8bc891d9"}}}',
            raw_bytes:
              "jkczvavPfUr8PRTw3UbJv1L7D86eS5lsk54ZW4vIkdmUUEywBAAAAAA=",
            struct_tag: "0x1::fungible_asset::FungibleStore",
          },
        ],
      },
    "/initia/move/v1/accounts/0xe2d99fcea59da8da2d4095cc11cb83e6ff80cf2e41522c678b8f152233d1b65e/resources":
      {
        pagination: { next_key: null, total: "0" },
        resources: [
          {
            address:
              "0xe2d99fcea59da8da2d4095cc11cb83e6ff80cf2e41522c678b8f152233d1b65e",
            move_resource:
              '{"type":"0x1::object::ObjectCore","data":{"allow_ungated_transfer":false,"owner":"0xb395c9f2e84f75b1686fcdc62f8cb62a572b7820","version":"1"}}',
            raw_bytes:
              "AAAAAAAAAAAAAAAAs5XJ8uhPdbFob83GL4y2KlcreCAAAQAAAAAAAAA=",
            struct_tag: "0x1::object::ObjectCore",
          },
          {
            address:
              "0xe2d99fcea59da8da2d4095cc11cb83e6ff80cf2e41522c678b8f152233d1b65e",
            move_resource:
              '{"type":"0x1::fungible_asset::FungibleStore","data":{"balance":"3312995","frozen":false,"metadata":{"inner":"0x8e4733bdabcf7d4afc3d14f0dd46c9bf52fb0fce9e4b996c939e195b8bc891d9"}}}',
            raw_bytes:
              "jkczvavPfUr8PRTw3UbJv1L7D86eS5lsk54ZW4vIkdljjTIAAAAAAAA=",
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
