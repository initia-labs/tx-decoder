export const mockMsgNftMint = {
  code: 0,
  codespace: "",
  data: "12280A262F696E697469612E6D6F76652E76312E4D7367457865637574654A534F4E526573706F6E7365",
  events: [
    {
      attributes: [
        {
          index: true,
          key: "sender",
          value: "0x1,0xe7ddea46e6bd763c1610f0544f5cf9dc8c623b5c",
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
            '{"store_addr":"0x57337d6e7d4acc7f875cb2ef0fe20911ff816e4faeca075237a523ca14dfdca2","metadata_addr":"0x8e4733bdabcf7d4afc3d14f0dd46c9bf52fb0fce9e4b996c939e195b8bc891d9","amount":"4002"}',
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
            '{"store_addr":"0x66a8cb0bfb991610dcffb8a6543ac0887c7c5405b8f985ebed6d628fe50c4686","metadata_addr":"0x8e4733bdabcf7d4afc3d14f0dd46c9bf52fb0fce9e4b996c939e195b8bc891d9","amount":"4002"}',
        },
      ],
      type: "move",
    },
    {
      attributes: [
        {
          index: true,
          key: "spender",
          value: "init1ulw753hxh4mrc9ss7p2y7h8emjxxyw6uce0hk9",
        },
        {
          index: true,
          key: "amount",
          value: "4002uinit",
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
          value: "4002uinit",
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
          value: "init1ulw753hxh4mrc9ss7p2y7h8emjxxyw6uce0hk9",
        },
        {
          index: true,
          key: "amount",
          value: "4002uinit",
        },
      ],
      type: "transfer",
    },
    {
      attributes: [
        {
          index: true,
          key: "sender",
          value: "init1ulw753hxh4mrc9ss7p2y7h8emjxxyw6uce0hk9",
        },
      ],
      type: "message",
    },
    {
      attributes: [
        {
          index: true,
          key: "fee",
          value: "4002uinit",
        },
        {
          index: true,
          key: "fee_payer",
          value: "init1ulw753hxh4mrc9ss7p2y7h8emjxxyw6uce0hk9",
        },
      ],
      type: "tx",
    },
    {
      attributes: [
        {
          index: true,
          key: "acc_seq",
          value: "init1ulw753hxh4mrc9ss7p2y7h8emjxxyw6uce0hk9/155",
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
            "v2cLt99KmoV6vGl6Ag6bXEk7UwgocDsa1JeH2yYwaolyydknoyW7vH+zQl/SVyIuLV66LeMomgx2sJrfmq/HJA==",
        },
      ],
      type: "tx",
    },
    {
      attributes: [
        {
          index: true,
          key: "action",
          value: "/initia.move.v1.MsgExecuteJSON",
        },
        {
          index: true,
          key: "sender",
          value: "init1ulw753hxh4mrc9ss7p2y7h8emjxxyw6uce0hk9",
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
          value: "0xe7ddea46e6bd763c1610f0544f5cf9dc8c623b5c",
        },
        {
          index: true,
          key: "module_addr",
          value: "0x1",
        },
        {
          index: true,
          key: "module_name",
          value: "simple_nft",
        },
        {
          index: true,
          key: "function_name",
          value: "mint",
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
            '{"object":"0xeafbe62f2441e2ecce99db4cfbab294f7542d78ce2d82ca28de13da0a9d41b86","owner":"0xe7ddea46e6bd763c1610f0544f5cf9dc8c623b5c","version":"1"}',
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
          value: "0x1::collection::MintEvent",
        },
        {
          index: true,
          key: "data",
          value:
            '{"collection":"0x597cd3f37f21f59c771731a31e92ac1214f72b4f8a86541a94b50f0308f4e20","token_id":"1","nft":"0xeafbe62f2441e2ecce99db4cfbab294f7542d78ce2d82ca28de13da0a9d41b86"}',
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
  gas_used: "185544",
  gas_wanted: "266744",
  height: "3935988",
  info: "",
  logs: [],
  raw_log: "",
  timestamp: "2025-06-17T09:00:14Z",
  tx: {
    "@type": "/cosmos.tx.v1beta1.Tx",
    auth_info: {
      fee: {
        amount: [
          {
            amount: "4002",
            denom: "uinit",
          },
        ],
        gas_limit: "266744",
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
            key: "AyrN3+u8LuLyUvAHjfIuCb6Tq9Rok6jvWDkDvRAyq4O0",
          },
          sequence: "155",
        },
      ],
      tip: null,
    },
    body: {
      extension_options: [],
      memo: "",
      messages: [
        {
          "@type": "/initia.move.v1.MsgExecuteJSON",
          args: [
            '"Favorite food"',
            '"Chongqing Xiaomian - Authentic spicy noodles from the mountain city, featuring numbing Sichuan peppercorns and bold chili oil"',
            '"1"',
            '"https://nft-rho-ten.vercel.app/favoritefood/1"',
            "[]",
            "[]",
            "[]",
            "null",
          ],
          function_name: "mint",
          module_address: "0x1",
          module_name: "simple_nft",
          sender: "init1ulw753hxh4mrc9ss7p2y7h8emjxxyw6uce0hk9",
          type_args: [],
        },
      ],
      non_critical_extension_options: [],
      timeout_height: "0",
    },
    signatures: [
      "v2cLt99KmoV6vGl6Ag6bXEk7UwgocDsa1JeH2yYwaolyydknoyW7vH+zQl/SVyIuLV66LeMomgx2sJrfmq/HJA==",
    ],
  },
  txhash: "C6047C38A5B9FD443DDCB2713574EECCF71E035712F1CF6735232967EE219935",
};

export const mockApiResponsesForNftMint = {
  GET: {
    "/initia/move/v1/accounts/0x597cd3f37f21f59c771731a31e92ac1214f72b4f8a86541a94b50f0308f4e20/resources":
      {
        pagination: { next_key: null, total: "0" },
        resources: [
          {
            address:
              "0x597cd3f37f21f59c771731a31e92ac1214f72b4f8a86541a94b50f0308f4e20",
            move_resource:
              '{"type":"0x1::object::ObjectCore","data":{"allow_ungated_transfer":true,"owner":"0xe7ddea46e6bd763c1610f0544f5cf9dc8c623b5c","version":"1"}}',
            raw_bytes:
              "AAAAAAAAAAAAAAAA593qRua9djwWEPBUT1z53IxiO1wBAQAAAAAAAAA=",
            struct_tag: "0x1::object::ObjectCore",
          },
          {
            address:
              "0x597cd3f37f21f59c771731a31e92ac1214f72b4f8a86541a94b50f0308f4e20",
            move_resource:
              '{"type":"0x1::royalty::Royalty","data":{"payee_address":"0xe7ddea46e6bd763c1610f0544f5cf9dc8c623b5c","royalty":"0.05"}}',
            raw_bytes:
              "BwAAxS68orEAAAAAAAAAAAAAAADn3epG5r12PBYQ8FRPXPncjGI7XA==",
            struct_tag: "0x1::royalty::Royalty",
          },
          {
            address:
              "0x597cd3f37f21f59c771731a31e92ac1214f72b4f8a86541a94b50f0308f4e20",
            move_resource:
              '{"type":"0x1::collection::Collection","data":{"creator":"0xe7ddea46e6bd763c1610f0544f5cf9dc8c623b5c","description":"Food collection that I suggest - Discover amazing dishes and culinary experiences from around the world","name":"Favorite food","nfts":{"handle":"0xbf4463da1c576eaf1543d528e8dc7b37db5bb996acddfd62a2f5504996496712","length":"5"},"uri":"https://nft-rho-ten.vercel.app/favoritefood"}}',
            raw_bytes:
              "AAAAAAAAAAAAAAAA593qRua9djwWEPBUT1z53IxiO1xnRm9vZCBjb2xsZWN0aW9uIHRoYXQgSSBzdWdnZXN0IC0gRGlzY292ZXIgYW1hemluZyBkaXNoZXMgYW5kIGN1bGluYXJ5IGV4cGVyaWVuY2VzIGZyb20gYXJvdW5kIHRoZSB3b3JsZA1GYXZvcml0ZSBmb29kK2h0dHBzOi8vbmZ0LXJoby10ZW4udmVyY2VsLmFwcC9mYXZvcml0ZWZvb2S/RGPaHFdurxVD1Sjo3Hs321u5lqzd/WKi9VBJlklnEgUAAAAAAAAA",
            struct_tag: "0x1::collection::Collection",
          },
          {
            address:
              "0x597cd3f37f21f59c771731a31e92ac1214f72b4f8a86541a94b50f0308f4e20",
            move_resource:
              '{"type":"0x1::collection::FixedSupply","data":{"current_supply":"5","max_supply":"100","total_minted":"5"}}',
            raw_bytes: "BQAAAAAAAABkAAAAAAAAAAUAAAAAAAAA",
            struct_tag: "0x1::collection::FixedSupply",
          },
          {
            address:
              "0x597cd3f37f21f59c771731a31e92ac1214f72b4f8a86541a94b50f0308f4e20",
            move_resource:
              '{"type":"0x1::initia_nft::InitiaNftCollection","data":{"mutable_description":true,"mutable_nft_description":true,"mutable_nft_uri":true,"mutable_uri":true,"mutator_ref":{"self":"0x597cd3f37f21f59c771731a31e92ac1214f72b4f8a86541a94b50f0308f4e20"},"royalty_mutator_ref":{"inner":{"self":"0x597cd3f37f21f59c771731a31e92ac1214f72b4f8a86541a94b50f0308f4e20","version":"1"}}}}',
            raw_bytes:
              "AQWXzT838h9Zx3FzGjHpKsEhT3K0+KhlQalLUPAwj04gAQWXzT838h9Zx3FzGjHpKsEhT3K0+KhlQalLUPAwj04gAQAAAAAAAAABAQEB",
            struct_tag: "0x1::initia_nft::InitiaNftCollection",
          },
          {
            address:
              "0x597cd3f37f21f59c771731a31e92ac1214f72b4f8a86541a94b50f0308f4e20",
            move_resource:
              '{"type":"0x1::simple_nft::SimpleNftCollection","data":{"mutable_nft_properties":true}}',
            raw_bytes: "AQ==",
            struct_tag: "0x1::simple_nft::SimpleNftCollection",
          },
        ],
      },
    "/initia/move/v1/accounts/0xeafbe62f2441e2ecce99db4cfbab294f7542d78ce2d82ca28de13da0a9d41b86/resources":
      {
        pagination: { next_key: null, total: "0" },
        resources: [
          {
            address:
              "0xeafbe62f2441e2ecce99db4cfbab294f7542d78ce2d82ca28de13da0a9d41b86",
            move_resource:
              '{"type":"0x1::nft::Nft","data":{"collection":{"inner":"0x597cd3f37f21f59c771731a31e92ac1214f72b4f8a86541a94b50f0308f4e20"},"description":"Chongqing Xiaomian - Authentic spicy noodles from the mountain city, featuring numbing Sichuan peppercorns and bold chili oil","token_id":"1","uri":"https://nft-rho-ten.vercel.app/favoritefood/1"}}',
            raw_bytes:
              "BZfNPzfyH1nHcXMaMekqwSFPcrT4qGVBqUtQ8DCPTiB9Q2hvbmdxaW5nIFhpYW9taWFuIC0gQXV0aGVudGljIHNwaWN5IG5vb2RsZXMgZnJvbSB0aGUgbW91bnRhaW4gY2l0eSwgZmVhdHVyaW5nIG51bWJpbmcgU2ljaHVhbiBwZXBwZXJjb3JucyBhbmQgYm9sZCBjaGlsaSBvaWwBMS1odHRwczovL25mdC1yaG8tdGVuLnZlcmNlbC5hcHAvZmF2b3JpdGVmb29kLzE=",
            struct_tag: "0x1::nft::Nft",
          },
          {
            address:
              "0xeafbe62f2441e2ecce99db4cfbab294f7542d78ce2d82ca28de13da0a9d41b86",
            move_resource:
              '{"type":"0x1::object::ObjectCore","data":{"allow_ungated_transfer":true,"owner":"0xe7ddea46e6bd763c1610f0544f5cf9dc8c623b5c","version":"1"}}',
            raw_bytes:
              "AAAAAAAAAAAAAAAA593qRua9djwWEPBUT1z53IxiO1wBAQAAAAAAAAA=",
            struct_tag: "0x1::object::ObjectCore",
          },
          {
            address:
              "0xeafbe62f2441e2ecce99db4cfbab294f7542d78ce2d82ca28de13da0a9d41b86",
            move_resource:
              '{"type":"0x1::initia_nft::InitiaNft","data":{"burn_ref":{"delete_ref":{"self":"0xeafbe62f2441e2ecce99db4cfbab294f7542d78ce2d82ca28de13da0a9d41b86","version":"1"}},"mutator_ref":{"self":"0xeafbe62f2441e2ecce99db4cfbab294f7542d78ce2d82ca28de13da0a9d41b86"}}}',
            raw_bytes:
              "Aer75i8kQeLszpnbTPurKU91QteM4tgsoo3hPaCp1BuGAQAAAAAAAAAB6vvmLyRB4uzOmdtM+6spT3VC14zi2CyijeE9oKnUG4Y=",
            struct_tag: "0x1::initia_nft::InitiaNft",
          },
        ],
      },
  },
  POST: {},
};
