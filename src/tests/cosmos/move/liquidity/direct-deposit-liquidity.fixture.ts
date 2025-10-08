export const mockMsgDirectDepositLiquidity = {
  code: 0,
  codespace: "",
  data: "12240A222F696E697469612E6D6F76652E76312E4D736745786563757465526573706F6E7365",
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
            '{"store_addr":"0x37736f7c96f6ba1dde1ec152e14c705a333b172a658cdd0d22b434122d712e16","metadata_addr":"0xe0e9394b24e53775d6af87934ac02d73536ad58b7894f6ccff3f5e7c0d548e55","amount":"1880"}'
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
          value: '{"owner":"0x6baa5dcfd050e9b85a4ddf214baee77884773ba4"}'
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
            '{"store_addr":"0x5c8edb2aff315409e899a3cbabeaa8741eb8044448d2c28a37a8d0d6e5d96528","metadata_addr":"0xe0e9394b24e53775d6af87934ac02d73536ad58b7894f6ccff3f5e7c0d548e55","amount":"1880"}'
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
          value:
            "1880ibc/6490A7EAB61059BFC1CDDEB05917DD70BDF3A611654162A1A47DB930D40D8AF4"
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
          value:
            "1880ibc/6490A7EAB61059BFC1CDDEB05917DD70BDF3A611654162A1A47DB930D40D8AF4"
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
          value:
            "1880ibc/6490A7EAB61059BFC1CDDEB05917DD70BDF3A611654162A1A47DB930D40D8AF4"
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
          value:
            "1880ibc/6490A7EAB61059BFC1CDDEB05917DD70BDF3A611654162A1A47DB930D40D8AF4"
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
          value: "init1dw49mn7s2r5mskjdmus5hth80zz8wwaywycq06/509"
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
            "k1gVRPqY9DXXPIcfUtkEOwtY8ktfxWVayypmLSFa+Awt3rBhTrTCn7NrsRx0P5zu6opSuVo9vst+JAGGGriWTg=="
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
          value: "init1dw49mn7s2r5mskjdmus5hth80zz8wwaywycq06"
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
          value: "dex"
        },
        {
          index: true,
          key: "function_name",
          value: "provide_liquidity_script"
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
            '{"store_addr":"0x63f1e66e0b35ce5b3a27058ccecf0831a0952c6882741c41fba4d2139002df82","metadata_addr":"0xd310d6ebd7c9ffb6d63bdc5d3e3227a767149411e5ab711b483635adb2f4c85f","amount":"10000"}'
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
          value: '{"owner":"0x6baa5dcfd050e9b85a4ddf214baee77884773ba4"}'
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
            '{"store_addr":"0x7341d788e0f74c3af56fbe850e61574374baed6ab9bcd24c20e92e74759cd7ba","metadata_addr":"0x8e4733bdabcf7d4afc3d14f0dd46c9bf52fb0fce9e4b996c939e195b8bc891d9","amount":"11000"}'
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
          value: '{"owner":"0x6baa5dcfd050e9b85a4ddf214baee77884773ba4"}'
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
            '{"coin_a":"0xd310d6ebd7c9ffb6d63bdc5d3e3227a767149411e5ab711b483635adb2f4c85f","coin_b":"0x8e4733bdabcf7d4afc3d14f0dd46c9bf52fb0fce9e4b996c939e195b8bc891d9","liquidity_token":"0x7d1fef22a2d391eb47922148d58dc77db025f12d014ae98437a6fac051de4c4","coin_a_amount":"10000","coin_b_amount":"11000","liquidity":"55981"}'
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
            '{"store_addr":"0xbc6a43df3806afd6f651f1f1ad1a8cdc3a828a1c3d1e07baec29857dcd18eca3","metadata_addr":"0xd310d6ebd7c9ffb6d63bdc5d3e3227a767149411e5ab711b483635adb2f4c85f","amount":"10000"}'
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
            '{"owner":"0x7d1fef22a2d391eb47922148d58dc77db025f12d014ae98437a6fac051de4c4"}'
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
            '{"store_addr":"0x6d5c78a6860d595996de6268224bfb48f556eee6decd11bad7bccc15fe2bd7fc","metadata_addr":"0x8e4733bdabcf7d4afc3d14f0dd46c9bf52fb0fce9e4b996c939e195b8bc891d9","amount":"11000"}'
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
            '{"owner":"0x7d1fef22a2d391eb47922148d58dc77db025f12d014ae98437a6fac051de4c4"}'
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
            '{"metadata_addr":"0x7d1fef22a2d391eb47922148d58dc77db025f12d014ae98437a6fac051de4c4","amount":"55981"}'
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
            '{"store_addr":"0xad7d067cbdd2dd8621181df4d452bc0b6db223e471669eb0d27536ac6ace72f6","metadata_addr":"0x7d1fef22a2d391eb47922148d58dc77db025f12d014ae98437a6fac051de4c4","amount":"55981"}'
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
          value: '{"owner":"0x6baa5dcfd050e9b85a4ddf214baee77884773ba4"}'
        },
        {
          index: true,
          key: "msg_index",
          value: "0"
        }
      ],
      type: "move"
    }
  ],
  gas_used: "224960",
  gas_wanted: "318969",
  height: "6435894",
  info: "",
  logs: [],
  raw_log: "",
  timestamp: "2025-08-21T02:48:10Z",
  tx: {
    "@type": "/cosmos.tx.v1beta1.Tx",
    auth_info: {
      fee: {
        amount: [
          {
            amount: "1880",
            denom:
              "ibc/6490A7EAB61059BFC1CDDEB05917DD70BDF3A611654162A1A47DB930D40D8AF4"
          }
        ],
        gas_limit: "318969",
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
          sequence: "509"
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
            "B9H+8iotOR60eSIUjVjcd9sCXxLQFK6YQ3pvrAUd5MQ=",
            "ECcAAAAAAAA=",
            "+CoAAAAAAAA=",
            "AZXZAAAAAAAA"
          ],
          function_name: "provide_liquidity_script",
          module_address: "0x1",
          module_name: "dex",
          sender: "init1dw49mn7s2r5mskjdmus5hth80zz8wwaywycq06",
          type_args: []
        }
      ],
      non_critical_extension_options: [],
      timeout_height: "0"
    },
    signatures: [
      "k1gVRPqY9DXXPIcfUtkEOwtY8ktfxWVayypmLSFa+Awt3rBhTrTCn7NrsRx0P5zu6opSuVo9vst+JAGGGriWTg=="
    ]
  },
  txhash: "9D539B8BEB61D435BDDDAB5CF3EE48720AE13D4B3B0F3AFE079B38B4601F23D3"
};

export const mockApiResponsesForDirectDepositLiquidity = {
  GET: {
    "/initia/move/v1/denom?metadata=0x7d1fef22a2d391eb47922148d58dc77db025f12d014ae98437a6fac051de4c4":
      {
        denom:
          "move/7d1fef22a2d391eb47922148d58dc77db025f12d014ae98437a6fac051de4c4"
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
    "/initia/move/v1/denom?metadata=0xd310d6ebd7c9ffb6d63bdc5d3e3227a767149411e5ab711b483635adb2f4c85f":
      {
        denom:
          "ibc/74CDBCE5F520CD29B32692645382E168032121F7DC3B3FDC79B0D37FB4E0916D"
      }
  },
  POST: {}
};
