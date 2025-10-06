export const mockNftSendEvmTransaction = {
  code: 0,
  codespace: "",
  data: "123B0A352F6962632E6170706C69636174696F6E732E6E66745F7472616E736665722E76312E4D73675472616E73666572526573706F6E736512020802",
  events: [
    {
      attributes: [
        {
          index: true,
          key: "contract",
          value: "0x4f7566f67941283a30cf65de7b9c6fdf2c04FCA1"
        },
        { index: true, key: "ret", value: "0x" }
      ],
      type: "call"
    },
    {
      attributes: [
        {
          index: true,
          key: "log",
          value:
            '{"address":"0x4f7566f67941283a30cf65de7b9c6fdf2c04FCA1","topics":["0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef","0x0000000000000000000000006baa5dcfd050e9b85a4ddf214baee77884773ba4","0x000000000000000000000000f1829676db577682e944fc3493d451b67ff3e29f"],"data":"0x000000000000000000000000000000000000000000000000000186f458ff9e00"}'
        }
      ],
      type: "evm"
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
          value: "429859000000000evm/4f7566f67941283a30cf65de7b9c6fdf2c04FCA1"
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
          value: "429859000000000evm/4f7566f67941283a30cf65de7b9c6fdf2c04FCA1"
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
          value: "429859000000000evm/4f7566f67941283a30cf65de7b9c6fdf2c04FCA1"
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
          value: "429859000000000evm/4f7566f67941283a30cf65de7b9c6fdf2c04FCA1"
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
          value: "init1dw49mn7s2r5mskjdmus5hth80zz8wwaywycq06/3"
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
            "uCwveHQwpNwKbtFrFYWeSuK7V6wcH49vfUaYO8Q+EJZgc8Z+V0mI8XwKInKUXUYIdQbvIizBkh+TFAEpcxZYkA=="
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
        { index: true, key: "msg_index", value: "0" }
      ],
      type: "message"
    },
    {
      attributes: [
        {
          index: true,
          key: "contract",
          value: "0x83769BeEB7e5405ef0B7dc3C66C43E3a51A6d27f"
        },
        { index: true, key: "ret", value: "0x" },
        { index: true, key: "msg_index", value: "0" }
      ],
      type: "call"
    },
    {
      attributes: [
        {
          index: true,
          key: "log",
          value:
            '{"address":"0x83769BeEB7e5405ef0B7dc3C66C43E3a51A6d27f","topics":["0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef","0x0000000000000000000000006baa5dcfd050e9b85a4ddf214baee77884773ba4","0x0000000000000000000000000000000000000000000000000000000000000000","0x6b86b273ff34fce19d6b804eff5a3f5747ada4eaa22f1d49c01e52ddb7875b4b"],"data":"0x"}'
        },
        { index: true, key: "msg_index", value: "0" }
      ],
      type: "evm"
    },
    {
      attributes: [
        {
          index: true,
          key: "contract",
          value: "0x83769BeEB7e5405ef0B7dc3C66C43E3a51A6d27f"
        },
        {
          index: true,
          key: "token_id",
          value:
            "48635463943209834798109814161294753926839975257569795305637098542720658922315"
        },
        { index: true, key: "msg_index", value: "0" }
      ],
      type: "erc721_burned"
    },
    {
      attributes: [
        {
          index: true,
          key: "packet_data",
          value:
            '{"classData":"eyJuYW1lIjoiSmVubmllIiwiZGVzY3JpcHRpb24iOiJKZW5uaWUgeW91IGtub3cgYW5kIGxvdmUsIG5vdyBsaXZpbmcgcmVudC1mcmVlIGluIHlvdXIgd2FsbGV0LiBTaGUnbGwgYWNjb21wYW55IHlvdSB3aGVyZXZlciB5b3UgZ28uIn0=","classId":"nft-transfer/channel-1/move/4b224b3b82140614fbe0706b421d887f4532ea91d4ad0cf2b99a1251c06dfa9a","classUri":"https://jennie.initia.xyz/data/collection.json","memo":"{\\"move\\":{\\"message\\":{\\"args\\":[\\"AAAAAAAAAAAAAAAAa6pdz9BQ6bhaTd8hS67neIR3O6Q=\\",\\"K2luaXQxZHc0OW1uN3MycjVtc2tqZG11czVodGg4MHp6OHd3YXl3eWNxMDY=\\",\\"SyJLO4IUBhT74HBrQh2If0Uy6pHUrQzyuZoSUcBt+po=\\",\\"AQEx\\",\\"DG5mdC10cmFuc2Zlcg==\\",\\"CmNoYW5uZWwtNTk=\\",\\"AAAAAAAAAAA=\\",\\"AAAAAAAAAAA=\\",\\"gMSc9koYQxg=\\",\\"AA==\\"],\\"function_name\\":\\"nft_transfer\\",\\"module_address\\":\\"0xb845fba0d0072c282f6284465933c4b32b1a0d4071604935a7a8d999c85d01fb\\",\\"module_name\\":\\"nft_transfer\\",\\"type_args\\":[]}}}","receiver":"0xb845fba0d0072c282f6284465933c4b32b1a0d4071604935a7a8d999c85d01fb::nft_transfer::nft_transfer","sender":"init1dw49mn7s2r5mskjdmus5hth80zz8wwaywycq06","tokenData":["eyJkZXNjcmlwdGlvbiI6IkF2YXRhciBKZW5uaWUsIHRoZSBtYXN0ZXIgb2YgYWxsIGVsZW1lbnRzLiBBbiB1bnBhcmFsbGVsZWQgU2lnbWEsIGFuZCBhIGZvcmNlIHRvIGJlIHJlY2tvbmVkIHdpdGguIn0="],"tokenIds":["1"],"tokenUris":["https://jennie.initia.xyz/data/9_4.json"]}'
        },
        {
          index: true,
          key: "packet_data_hex",
          value:
            "7b22636c61737344617461223a2265794a755957316c496a6f69536d5675626d6c6c496977695a47567a59334a7063485270623234694f694a4b5a573575615755676557393149477475623363675957356b49477876646d5573494735766479427361585a70626d6367636d56756443316d636d566c49476c7549486c766458496764324673624756304c6942546147556e6247776759574e6a623231775957353549486c7664534233614756795a585a6c63694235623355675a323875496e303d222c22636c6173734964223a226e66742d7472616e736665722f6368616e6e656c2d312f6d6f76652f34623232346233623832313430363134666265303730366234323164383837663435333265613931643461643063663262393961313235316330366466613961222c22636c617373557269223a2268747470733a2f2f6a656e6e69652e696e697469612e78797a2f646174612f636f6c6c656374696f6e2e6a736f6e222c226d656d6f223a227b5c226d6f76655c223a7b5c226d6573736167655c223a7b5c22617267735c223a5b5c2241414141414141414141414141414141613670647a39425136626861546438685336376e654952334f36513d5c222c5c224b326c75615851785a4863304f5731754e334d79636a5674633274715a473131637a566f644867344d4870364f48643359586c3365574e784d44593d5c222c5c2253794a4c4f344955426854373448427251683249663055793670485572517a79755a6f53556342742b706f3d5c222c5c22415145785c222c5c224447356d64433130636d467563325a6c63673d3d5c222c5c22436d4e6f595735755a5777744e546b3d5c222c5c2241414141414141414141413d5c222c5c2241414141414141414141413d5c222c5c22674d5363396b6f595178673d5c222c5c2241413d3d5c225d2c5c2266756e6374696f6e5f6e616d655c223a5c226e66745f7472616e736665725c222c5c226d6f64756c655f616464726573735c223a5c223078623834356662613064303037326332383266363238343436353933336334623332623161306434303731363034393335613761386439393963383564303166625c222c5c226d6f64756c655f6e616d655c223a5c226e66745f7472616e736665725c222c5c22747970655f617267735c223a5b5d7d7d7d222c227265636569766572223a223078623834356662613064303037326332383266363238343436353933336334623332623161306434303731363034393335613761386439393963383564303166623a3a6e66745f7472616e736665723a3a6e66745f7472616e73666572222c2273656e646572223a22696e697431647734396d6e37733272356d736b6a646d75733568746838307a7a3877776179777963713036222c22746f6b656e44617461223a5b2265794a6b5a584e6a636d6c7764476c7662694936496b4632595852686369424b5a573575615755734948526f5a53427459584e305a5849676232596759577773494756735a57316c626e527a4c69424262694231626e4268636d4673624756735a57516755326c6e62574573494746755a43426849475a76636d4e6c4948527649474a6c49484a6c59327476626d566b4948647064476775496e303d225d2c22746f6b656e496473223a5b2231225d2c22746f6b656e55726973223a5b2268747470733a2f2f6a656e6e69652e696e697469612e78797a2f646174612f395f342e6a736f6e225d7d"
        },
        { index: true, key: "packet_timeout_height", value: "0-0" },
        {
          index: true,
          key: "packet_timeout_timestamp",
          value: "1748267790595000000"
        },
        { index: true, key: "packet_sequence", value: "2" },
        { index: true, key: "packet_src_port", value: "nft-transfer" },
        { index: true, key: "packet_src_channel", value: "channel-1" },
        { index: true, key: "packet_dst_port", value: "nft-transfer" },
        { index: true, key: "packet_dst_channel", value: "channel-63" },
        {
          index: true,
          key: "packet_channel_ordering",
          value: "ORDER_UNORDERED"
        },
        { index: true, key: "packet_connection", value: "connection-0" },
        { index: true, key: "connection_id", value: "connection-0" },
        { index: true, key: "msg_index", value: "0" }
      ],
      type: "send_packet"
    },
    {
      attributes: [
        { index: true, key: "module", value: "ibc_channel" },
        { index: true, key: "msg_index", value: "0" }
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
          value:
            "0xb845fba0d0072c282f6284465933c4b32b1a0d4071604935a7a8d999c85d01fb::nft_transfer::nft_transfer"
        },
        {
          index: true,
          key: "class_id",
          value:
            "ibc/28B13B47C4342699063DDD3E07B7BBCEEDB1CBFBFE2C70296C69A7AA91A14448"
        },
        { index: true, key: "token_ids", value: "1" },
        { index: true, key: "msg_index", value: "0" }
      ],
      type: "ibc_nft_transfer"
    },
    {
      attributes: [
        { index: true, key: "module", value: "nonfungibletokentransfer" },
        { index: true, key: "msg_index", value: "0" }
      ],
      type: "message"
    }
  ],
  gas_used: "304256",
  gas_wanted: "429859",
  height: "1607703",
  info: "",
  logs: [],
  raw_log: "",
  timestamp: "2025-05-26T13:46:31Z",
  tx: {
    "@type": "/cosmos.tx.v1beta1.Tx",
    auth_info: {
      fee: {
        amount: [
          {
            amount: "429859000000000",
            denom: "evm/4f7566f67941283a30cf65de7b9c6fdf2c04FCA1"
          }
        ],
        gas_limit: "429859",
        granter: "",
        payer: ""
      },
      signer_infos: [
        {
          mode_info: { single: { mode: "SIGN_MODE_EIP_191" } },
          public_key: {
            "@type": "/initia.crypto.v1beta1.ethsecp256k1.PubKey",
            key: "A4shR8ybPUPxzBXqi4W6BH+MtTkuonZcw3xOFkT+7tE1"
          },
          sequence: "3"
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
            "ibc/28B13B47C4342699063DDD3E07B7BBCEEDB1CBFBFE2C70296C69A7AA91A14448",
          memo: '{"move":{"message":{"args":["AAAAAAAAAAAAAAAAa6pdz9BQ6bhaTd8hS67neIR3O6Q=","K2luaXQxZHc0OW1uN3MycjVtc2tqZG11czVodGg4MHp6OHd3YXl3eWNxMDY=","SyJLO4IUBhT74HBrQh2If0Uy6pHUrQzyuZoSUcBt+po=","AQEx","DG5mdC10cmFuc2Zlcg==","CmNoYW5uZWwtNTk=","AAAAAAAAAAA=","AAAAAAAAAAA=","gMSc9koYQxg=","AA=="],"function_name":"nft_transfer","module_address":"0xb845fba0d0072c282f6284465933c4b32b1a0d4071604935a7a8d999c85d01fb","module_name":"nft_transfer","type_args":[]}}}',
          receiver:
            "0xb845fba0d0072c282f6284465933c4b32b1a0d4071604935a7a8d999c85d01fb::nft_transfer::nft_transfer",
          sender: "init1dw49mn7s2r5mskjdmus5hth80zz8wwaywycq06",
          source_channel: "channel-1",
          source_port: "nft-transfer",
          timeout_height: { revision_height: "0", revision_number: "0" },
          timeout_timestamp: "1748267790595000000",
          token_ids: ["1"]
        }
      ],
      non_critical_extension_options: [],
      timeout_height: "0"
    },
    signatures: [
      "uCwveHQwpNwKbtFrFYWeSuK7V6wcH49vfUaYO8Q+EJZgc8Z+V0mI8XwKInKUXUYIdQbvIizBkh+TFAEpcxZYkA=="
    ]
  },
  txhash: "3F85A69F5D5042ECD39438E938F1659C91967BAC5E07CA182DB123A9F856AF0A"
};

export const mockApiResponsesForNftSendEvm = {
  GET: {
    "/chains.json": [
      {
        chain_id: "yominet-1",
        chain_name: "yominet",
        metadata: {
          ibc_channels: [
            {
              chain_id: "civitia-1",
              channel_id: "channel-1",
              port_id: "nft-transfer",
              version: "ics721-1"
            }
          ]
        }
      }
    ],
    "/cosmos/base/tendermint/v1beta1/node_info": {
      default_node_info: {
        network: "yominet-1"
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
              '{"type":"0x1::object::ObjectCore","data":{"guid_creation_num":"2","owner":"0x6baa5dcfd050e9b85a4ddf214baee77884773ba4","allow_ungated_transfer":false}}',
            raw_bytes:
              "AAAAAAAAAAAAAAAAa6pdz9BQ6bhaTd8hS67neIR3O6QCAAAAAAAAAAA=",
            struct_tag: "0x1::object::ObjectCore"
          },
          {
            address:
              "0x4b224b3b82140614fbe0706b421d887f4532ea91d4ad0cf2b99a1251c06dfa9a",
            move_resource:
              '{"type":"0x1::nft::Nft","data":{"collection":"0x28b13b47c4342699063ddd3e07b7bbceedb1cbfbfe2c70296c69a7aa91a14448","description":"Jennie you know and love, now living rent-free in your wallet. She\'ll accompany you wherever you go.","name":"Jennie #1","uri":"https://jennie.initia.xyz/data/9_4.json"}}',
            raw_bytes:
              "KBOxtHxDQmmQY933DrcO7O7bHL+/4sQpbGmmerkaFEhmSmVubmllIHlvdSBrbm93IGFuZCBsb3ZlLCBub3cgbGl2aW5nIHJlbnQtZnJlZSBpbiB5b3VyIHdhbGxldC4gU2hlJ2xsIGFjY29tcGFueSB5b3Ugd2hlcmV2ZXIgeW91IGdvLghKZW5uaWUgIzEnaHR0cHM6Ly9qZW5uaWUuaW5pdGlhLnh5ei9kYXRhLzlfNC5qc29u",
            struct_tag: "0x1::nft::Nft"
          }
        ]
      },
    "/initia/move/v1/accounts/0x28b13b47c4342699063ddd3e07b7bbceedb1cbfbfe2c70296c69a7aa91a14448/resources":
      {
        pagination: { next_key: null, total: "0" },
        resources: [
          {
            address:
              "0x28b13b47c4342699063ddd3e07b7bbceedb1cbfbfe2c70296c69a7aa91a14448",
            move_resource:
              '{"type":"0x1::collection::Collection","data":{"creator":"init13fnzkzrac5lx9xeu5mt80r2w0thl4s9ns7ueg9znn4enhyp4fyrsgkt9zc","description":"Jennie you know and love, now living rent-free in your wallet. She\'ll accompany you wherever you go.","name":"Jennie","uri":"https://jennie.initia.xyz/data/collection.json"}}',
            raw_bytes:
              "imYrCH3FPmKbPKbWd41Oeu/6wLOHuZQUU51zO5A1SQdkSmVubmllIHlvdSBrbm93IGFuZCBsb3ZlLCBub3cgbGl2aW5nIHJlbnQtZnJlZSBpbiB5b3VyIHdhbGxldC4gU2hlJ2xsIGFjY29tcGFueSB5b3Ugd2hlcmV2ZXIgeW91IGdvLgZKZW5uaWUuaHR0cHM6Ly9qZW5uaWUuaW5pdGlhLnh5ei9kYXRhL2NvbGxlY3Rpb24uanNvbg==",
            struct_tag: "0x1::collection::Collection"
          },
          {
            address:
              "0x28b13b47c4342699063ddd3e07b7bbceedb1cbfbfe2c70296c69a7aa91a14448",
            move_resource:
              '{"type":"0x1::object::ObjectCore","data":{"guid_creation_num":"2","owner":"init1v2xnnl08y508ec6q4q4hxqr2avdeyu3cew5rxghwnn5t3y4jhd2smmah7n","allow_ungated_transfer":false}}',
            raw_bytes:
              "VqJpfV/7a98fVt9fG4LMy+/Yp8Jewk8sWAAAAAAAAAAAACAAAAAAAAAAAA==",
            struct_tag: "0x1::object::ObjectCore"
          }
        ]
      },
    "/initia/move/v1/accounts/0xfbd3b9eab0ca94f25a4e6d9bd1c49df64b6d4abacb0c0c12b43bcdea4a0d1e8b/resources":
      {
        pagination: { next_key: null, total: "0" },
        resources: [
          {
            address:
              "0xfbd3b9eab0ca94f25a4e6d9bd1c49df64b6d4abacb0c0c12b43bcdea4a0d1e8b",
            move_resource:
              '{"type":"0x1::collection::Collection","data":{"creator":"init13fnzkzrac5lx9xeu5mt80r2w0thl4s9ns7ueg9znn4enhyp4fyrsgkt9zc","description":"Jennie you know and love, now living rent-free in your wallet. She\'ll accompany you wherever you go.","name":"Jennie","uri":"https://jennie.initia.xyz/data/collection.json"}}',
            raw_bytes:
              "imYrCH3FPmKbPKbWd41Oeu/6wLOHuZQUU51zO5A1SQdkSmVubmllIHlvdSBrbm93IGFuZCBsb3ZlLCBub3cgbGl2aW5nIHJlbnQtZnJlZSBpbiB5b3VyIHdhbGxldC4gU2hlJ2xsIGFjY29tcGFueSB5b3Ugd2hlcmV2ZXIgeW91IGdvLgZKZW5uaWUuaHR0cHM6Ly9qZW5uaWUuaW5pdGlhLnh5ei9kYXRhL2NvbGxlY3Rpb24uanNvbg==",
            struct_tag: "0x1::collection::Collection"
          },
          {
            address:
              "0xfbd3b9eab0ca94f25a4e6d9bd1c49df64b6d4abacb0c0c12b43bcdea4a0d1e8b",
            move_resource:
              '{"type":"0x1::object::ObjectCore","data":{"guid_creation_num":"2","owner":"init1v2xnnl08y508ec6q4q4hxqr2avdeyu3cew5rxghwnn5t3y4jhd2smmah7n","allow_ungated_transfer":false}}',
            raw_bytes:
              "VqJpfV/7a98fVt9fG4LMy+/Yp8Jewk8sWAAAAAAAAAAAACAAAAAAAAAAAA==",
            struct_tag: "0x1::object::ObjectCore"
          }
        ]
      }
  },
  POST: {}
};
