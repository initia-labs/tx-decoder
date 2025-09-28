export const mockMsgIbcSendNft = {
  code: 0,
  codespace: "",
  data: "123B0A352F6962632E6170706C69636174696F6E732E6E66745F7472616E736665722E76312E4D73675472616E73666572526573706F6E73651202080D",
  events: [
    {
      attributes: [
        {
          index: true,
          key: "sender",
          value: "0x1,0x6baa5dcfd050e9b85a4ddf214baee77884773ba4"
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
            '{"store_addr":"0x7341d788e0f74c3af56fbe850e61574374baed6ab9bcd24c20e92e74759cd7ba","metadata_addr":"0x8e4733bdabcf7d4afc3d14f0dd46c9bf52fb0fce9e4b996c939e195b8bc891d9","amount":"3079"}'
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
            '{"store_addr":"0x66a8cb0bfb991610dcffb8a6543ac0887c7c5405b8f985ebed6d628fe50c4686","metadata_addr":"0x8e4733bdabcf7d4afc3d14f0dd46c9bf52fb0fce9e4b996c939e195b8bc891d9","amount":"3079"}'
        }
      ],
      type: "move"
    },
    {
      attributes: [
        {
          index: true,
          key: "spender",
          value: "init1dw49mn7s2r5mskjdmus5hth80zz8wwaywycq06"
        },
        {
          index: true,
          key: "amount",
          value: "3079uinit"
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
          value: "3079uinit"
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
          value: "init1dw49mn7s2r5mskjdmus5hth80zz8wwaywycq06"
        },
        {
          index: true,
          key: "amount",
          value: "3079uinit"
        }
      ],
      type: "transfer"
    },
    {
      attributes: [
        {
          index: true,
          key: "sender",
          value: "init1dw49mn7s2r5mskjdmus5hth80zz8wwaywycq06"
        }
      ],
      type: "message"
    },
    {
      attributes: [
        {
          index: true,
          key: "fee",
          value: "3079uinit"
        },
        {
          index: true,
          key: "fee_payer",
          value: "init1dw49mn7s2r5mskjdmus5hth80zz8wwaywycq06"
        }
      ],
      type: "tx"
    },
    {
      attributes: [
        {
          index: true,
          key: "acc_seq",
          value: "init1dw49mn7s2r5mskjdmus5hth80zz8wwaywycq06/294"
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
            "/1LwNiJBmIve7tnDQJxal/GEbiintI+xdJopg9arAYch07xCfYAhAFEtUElR2YmMyDG7PW/tGJodKkKBcd081w=="
        }
      ],
      type: "tx"
    },
    {
      attributes: [
        {
          index: true,
          key: "action",
          value: "/ibc.applications.nft_transfer.v1.MsgTransfer"
        },
        {
          index: true,
          key: "sender",
          value: "init1dw49mn7s2r5mskjdmus5hth80zz8wwaywycq06"
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
          value: "0x6baa5dcfd050e9b85a4ddf214baee77884773ba4"
        },
        {
          index: true,
          key: "module_addr",
          value: "0x1"
        },
        {
          index: true,
          key: "module_name",
          value: "object"
        },
        {
          index: true,
          key: "function_name",
          value: "transfer"
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
          value: "0x1::object::TransferEvent"
        },
        {
          index: true,
          key: "data",
          value:
            '{"object":"0x628d39fde7251e7ce340a82b73006aeb1b927238cba83322ee9ce8b892b2bb55","from":"0x6baa5dcfd050e9b85a4ddf214baee77884773ba4","to":"0x93ec9e2eabf1ce88173afd7a025fd08850e5bb28"}'
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
          key: "packet_data",
          value:
            '{"classData":"eyJuYW1lIjoiSmVubmllIiwiZGVzY3JpcHRpb24iOiJKZW5uaWUgeW91IGtub3cgYW5kIGxvdmUsIG5vdyBsaXZpbmcgcmVudC1mcmVlIGluIHlvdXIgd2FsbGV0LiBTaGUnbGwgYWNjb21wYW55IHlvdSB3aGVyZXZlciB5b3UgZ28uIn0=","classId":"move/4b224b3b82140614fbe0706b421d887f4532ea91d4ad0cf2b99a1251c06dfa9a","classUri":"https://jennie.initia.xyz/data/collection.json","receiver":"init1ulw753hxh4mrc9ss7p2y7h8emjxxyw6uce0hk9","sender":"init1dw49mn7s2r5mskjdmus5hth80zz8wwaywycq06","tokenData":["eyJkZXNjcmlwdGlvbiI6IkF2YXRhciBKZW5uaWUsIHRoZSBtYXN0ZXIgb2YgYWxsIGVsZW1lbnRzLiBBbiB1bnBhcmFsbGVsZWQgU2lnbWEsIGFuZCBhIGZvcmNlIHRvIGJlIHJlY2tvbmVkIHdpdGguIn0="],"tokenIds":["1"],"tokenUris":["https://jennie.initia.xyz/data/9_4.json"]}'
        },
        {
          index: true,
          key: "packet_data_hex",
          value:
            "7b22636c61737344617461223a2265794a755957316c496a6f69536d5675626d6c6c496977695a47567a59334a7063485270623234694f694a4b5a573575615755676557393149477475623363675957356b49477876646d5573494735766479427361585a70626d6367636d56756443316d636d566c49476c7549486c766458496764324673624756304c6942546147556e6247776759574e6a623231775957353549486c7664534233614756795a585a6c63694235623355675a323875496e303d222c22636c6173734964223a226d6f76652f34623232346233623832313430363134666265303730366234323164383837663435333265613931643461643063663262393961313235316330366466613961222c22636c617373557269223a2268747470733a2f2f6a656e6e69652e696e697469612e78797a2f646174612f636f6c6c656374696f6e2e6a736f6e222c227265636569766572223a22696e697431756c77373533687868346d726339737337703279376838656d6a787879773675636530686b39222c2273656e646572223a22696e697431647734396d6e37733272356d736b6a646d75733568746838307a7a3877776179777963713036222c22746f6b656e44617461223a5b2265794a6b5a584e6a636d6c7764476c7662694936496b4632595852686369424b5a573575615755734948526f5a53427459584e305a5849676232596759577873494756735a57316c626e527a4c69424262694231626e4268636d4673624756735a57516755326c6e62574573494746755a43426849475a76636d4e6c4948527649474a6c49484a6c59327476626d566b4948647064476775496e303d225d2c22746f6b656e496473223a5b2231225d2c22746f6b656e55726973223a5b2268747470733a2f2f6a656e6e69652e696e697469612e78797a2f646174612f395f342e6a736f6e225d7d"
        },
        {
          index: true,
          key: "packet_timeout_height",
          value: "0-0"
        },
        {
          index: true,
          key: "packet_timeout_timestamp",
          value: "1749471966170000000"
        },
        {
          index: true,
          key: "packet_sequence",
          value: "13"
        },
        {
          index: true,
          key: "packet_src_port",
          value: "nft-transfer"
        },
        {
          index: true,
          key: "packet_src_channel",
          value: "channel-28"
        },
        {
          index: true,
          key: "packet_dst_port",
          value: "nft-transfer"
        },
        {
          index: true,
          key: "packet_dst_channel",
          value: "channel-1"
        },
        {
          index: true,
          key: "packet_channel_ordering",
          value: "ORDER_UNORDERED"
        },
        {
          index: true,
          key: "packet_connection",
          value: "connection-15"
        },
        {
          index: true,
          key: "connection_id",
          value: "connection-15"
        },
        {
          index: true,
          key: "msg_index",
          value: "0"
        }
      ],
      type: "send_packet"
    },
    {
      attributes: [
        {
          index: true,
          key: "module",
          value: "ibc_channel"
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
          value: "init1dw49mn7s2r5mskjdmus5hth80zz8wwaywycq06"
        },
        {
          index: true,
          key: "receiver",
          value: "init1ulw753hxh4mrc9ss7p2y7h8emjxxyw6uce0hk9"
        },
        {
          index: true,
          key: "class_id",
          value:
            "move/4b224b3b82140614fbe0706b421d887f4532ea91d4ad0cf2b99a1251c06dfa9a"
        },
        {
          index: true,
          key: "token_ids",
          value: "1"
        },
        {
          index: true,
          key: "msg_index",
          value: "0"
        }
      ],
      type: "ibc_nft_transfer"
    },
    {
      attributes: [
        {
          index: true,
          key: "module",
          value: "nonfungibletokentransfer"
        },
        {
          index: true,
          key: "msg_index",
          value: "0"
        }
      ],
      type: "message"
    }
  ],
  gas_used: "137341",
  gas_wanted: "199255",
  height: "3632268",
  info: "",
  logs: [],
  raw_log: "",
  timestamp: "2025-06-09T12:16:18Z",
  tx: {
    "@type": "/cosmos.tx.v1beta1.Tx",
    auth_info: {
      fee: {
        amount: [
          {
            amount: "3079",
            denom: "uinit"
          }
        ],
        gas_limit: "199255",
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
            key: "A4shR8ybPUPxzBXqi4W6BH+MtTkuonZcw3xOFkT+7tE1"
          },
          sequence: "294"
        }
      ],
      tip: null
    },
    body: {
      extension_options: [],
      memo: "",
      messages: [
        {
          "@type": "/ibc.applications.nft_transfer.v1.MsgTransfer",
          class_id:
            "move/4b224b3b82140614fbe0706b421d887f4532ea91d4ad0cf2b99a1251c06dfa9a",
          memo: "",
          receiver: "init1ulw753hxh4mrc9ss7p2y7h8emjxxyw6uce0hk9",
          sender: "init1dw49mn7s2r5mskjdmus5hth80zz8wwaywycq06",
          source_channel: "channel-28",
          source_port: "nft-transfer",
          timeout_height: {
            revision_height: "0",
            revision_number: "0"
          },
          timeout_timestamp: "1749471966170000000",
          token_ids: ["1"]
        }
      ],
      non_critical_extension_options: [],
      timeout_height: "0"
    },
    signatures: [
      "/1LwNiJBmIve7tnDQJxal/GEbiintI+xdJopg9arAYch07xCfYAhAFEtUElR2YmMyDG7PW/tGJodKkKBcd081w=="
    ]
  },
  txhash: "799FE662461D38A08D617C4E60025ED373177B9912B6C3468FDDE2B1825CD4AC"
};

export const mockApiResponsesForIbcSendNft = {
  GET: {
    "/chains.json": [
      {
        chain_id: "interwoven-1",
        chain_name: "initia",
        metadata: {
          ibc_channels: [
            {
              chain_id: "civitia-1",
              channel_id: "channel-28",
              port_id: "nft-transfer",
              version: "ics721-1"
            }
          ]
        }
      }
    ],
    "/cosmos/base/tendermint/v1beta1/node_info": {
      default_node_info: {
        network: "interwoven-1"
      }
    },
    "/initia/move/v1/accounts/0x4b224b3b82140614fbe0706b421d887f4532ea91d4ad0cf2b99a1251c06dfa9a/resources":
      {
        pagination: { next_key: null, total: "0" },
        resources: [
          {
            address:
              "0x4b224b3b82140614fbe0706b421d887f4532ea91d4ad0cf2b99a1251c06dfa9a",
            move_resource:
              '{"type":"0x1::object::ObjectCore","data":{"allow_ungated_transfer":true,"owner":"0x8a662b087dc53e629b3ca6d6778d4e7aeffac0b387b99414539d733b90354907","version":"1"}}',
            raw_bytes:
              "imYrCH3FPmKbPKbWd41Oeu/6wLOHuZQUU51zO5A1SQcBAQAAAAAAAAA=",
            struct_tag: "0x1::object::ObjectCore"
          },
          {
            address:
              "0x4b224b3b82140614fbe0706b421d887f4532ea91d4ad0cf2b99a1251c06dfa9a",
            move_resource:
              '{"type":"0x1::collection::Collection","data":{"creator":"0x8a662b087dc53e629b3ca6d6778d4e7aeffac0b387b99414539d733b90354907","description":"Jennie you know and love, now living rent-free in your wallet. She\'ll accompany you wherever you go.","name":"Jennie","nfts":{"handle":"0x58eedf73fc03d68e013a695a722170f9df5764f0d08c001d4053f0aecf6ae0b2","length":"212663"},"uri":"https://jennie.initia.xyz/data/collection.json"}}',
            raw_bytes:
              "imYrCH3FPmKbPKbWd41Oeu/6wLOHuZQUU51zO5A1SQdkSmVubmllIHlvdSBrbm93IGFuZCBsb3ZlLCBub3cgbGl2aW5nIHJlbnQtZnJlZSBpbiB5b3VyIHdhbGxldC4gU2hlJ2xsIGFjY29tcGFueSB5b3Ugd2hlcmV2ZXIgeW91IGdvLgZKZW5uaWUuaHR0cHM6Ly9qZW5uaWUuaW5pdGlhLnh5ei9kYXRhL2NvbGxlY3Rpb24uanNvblju33P8A9aOATppWnIhcPnfV2Tw0IwAHUBT8K7PauCytz4DAAAAAAA=",
            struct_tag: "0x1::collection::Collection"
          },
          {
            address:
              "0x4b224b3b82140614fbe0706b421d887f4532ea91d4ad0cf2b99a1251c06dfa9a",
            move_resource:
              '{"type":"0x1::collection::UnlimitedSupply","data":{"current_supply":"212663","total_minted":"212663"}}',
            raw_bytes: "tz4DAAAAAAC3PgMAAAAAAA==",
            struct_tag: "0x1::collection::UnlimitedSupply"
          }
        ]
      },
    "/initia/move/v1/accounts/0x628d39fde7251e7ce340a82b73006aeb1b927238cba83322ee9ce8b892b2bb55/resources":
      {
        pagination: { next_key: null, total: "0" },
        resources: [
          {
            address:
              "0x628d39fde7251e7ce340a82b73006aeb1b927238cba83322ee9ce8b892b2bb55",
            move_resource:
              '{"type":"0x1::nft::Nft","data":{"collection":{"inner":"0x4b224b3b82140614fbe0706b421d887f4532ea91d4ad0cf2b99a1251c06dfa9a"},"description":"Avatar Jennie, the master of all elements. An unparalleled Sigma, and a force to be reckoned with.","token_id":"1","uri":"https://jennie.initia.xyz/data/9_4.json"}}',
            raw_bytes:
              "SyJLO4IUBhT74HBrQh2If0Uy6pHUrQzyuZoSUcBt+ppiQXZhdGFyIEplbm5pZSwgdGhlIG1hc3RlciBvZiBhbGwgZWxlbWVudHMuIEFuIHVucGFyYWxsZWxlZCBTaWdtYSwgYW5kIGEgZm9yY2UgdG8gYmUgcmVja29uZWQgd2l0aC4BMSdodHRwczovL2plbm5pZS5pbml0aWEueHl6L2RhdGEvOV80Lmpzb24=",
            struct_tag: "0x1::nft::Nft"
          },
          {
            address:
              "0x628d39fde7251e7ce340a82b73006aeb1b927238cba83322ee9ce8b892b2bb55",
            move_resource:
              '{"type":"0x1::object::ObjectCore","data":{"allow_ungated_transfer":true,"owner":"0x6baa5dcfd050e9b85a4ddf214baee77884773ba4","version":"1"}}',
            raw_bytes:
              "AAAAAAAAAAAAAAAAa6pdz9BQ6bhaTd8hS67neIR3O6QBAQAAAAAAAAA=",
            struct_tag: "0x1::object::ObjectCore"
          }
        ]
      }
  }
};
