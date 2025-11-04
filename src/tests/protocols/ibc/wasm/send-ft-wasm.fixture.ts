/**
 * Real IBC FT send transaction on WASM VM (moo-1 chain)
 * TX Hash: 59CA813C64F68ECB31919A04F527DB5193B08654E9439C7670B6A9CEF6902439
 * Block Height: 513326
 * Timestamp: 2025-10-28T09:46:09Z
 * This represents an IBC fungible token send with WASM/Move integration
 */
export const mockFtSendWasmTransaction = {
  code: 0,
  codespace: "",
  data: "12380A312F6962632E6170706C69636174696F6E732E7472616E736665722E76312E4D73675472616E73666572526573706F6E73651203088749",
  events: [
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
            "6498l2/fb936ffef4eb4019d82941992cc09ae2788ce7197fcb08cb00c4fe6f5e79184e"
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
            "6498l2/fb936ffef4eb4019d82941992cc09ae2788ce7197fcb08cb00c4fe6f5e79184e"
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
            "6498l2/fb936ffef4eb4019d82941992cc09ae2788ce7197fcb08cb00c4fe6f5e79184e"
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
            "6498l2/fb936ffef4eb4019d82941992cc09ae2788ce7197fcb08cb00c4fe6f5e79184e"
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
          value: "init1dw49mn7s2r5mskjdmus5hth80zz8wwaywycq06/79"
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
            "jHcl8IjMFRmew6m7IVa+lvbxvO28zlKsiXInUqjRTYp1BhpB2hQSIgWW2MBFQldm4ds8FYgXUv7448zbiYEcXg=="
        }
      ],
      type: "tx"
    },
    {
      attributes: [
        {
          index: true,
          key: "action",
          value: "/ibc.applications.transfer.v1.MsgTransfer"
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
          key: "spender",
          value: "init1dw49mn7s2r5mskjdmus5hth80zz8wwaywycq06"
        },
        {
          index: true,
          key: "amount",
          value:
            "10000l2/fb936ffef4eb4019d82941992cc09ae2788ce7197fcb08cb00c4fe6f5e79184e"
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
          value: "init1a53udazy8ayufvy0s434pfwjcedzqv34c6zkqv"
        },
        {
          index: true,
          key: "amount",
          value:
            "10000l2/fb936ffef4eb4019d82941992cc09ae2788ce7197fcb08cb00c4fe6f5e79184e"
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
          value: "init1a53udazy8ayufvy0s434pfwjcedzqv34c6zkqv"
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
            "10000l2/fb936ffef4eb4019d82941992cc09ae2788ce7197fcb08cb00c4fe6f5e79184e"
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
          key: "packet_data",
          value:
            '{"amount":"10000","denom":"l2/fb936ffef4eb4019d82941992cc09ae2788ce7197fcb08cb00c4fe6f5e79184e","memo":"{\\"move\\":{\\"message\\":{\\"args\\":[\\"AgIA\\",\\"AA==\\",\\"ECcAAAAAAAA=\\",\\"WwYAAAAAAAA=\\",\\"AgFEaWJjL0YwQjhENkNBNjJEODg0QUExREFCMERDMDcxOTBBNDBCNTVDRjUwRkJERkJCMzdCRTg0MDM2QkJCQ0MyODM4MzYBRW1vdmUvNTQzYjM1YTM5Y2ZhZGFkM2RhM2MyMzI0OWM0NzQ0NTVkMTVlZmQyZjk0Zjg0OTQ3MzIyNmRlZThhM2M3YTllMQ==\\",\\"AgJEaWJjL0YwQjhENkNBNjJEODg0QUExREFCMERDMDcxOTBBNDBCNTVDRjUwRkJERkJCMzdCRTg0MDM2QkJCQ0MyODM4MzYFdWluaXQCBXVpbml0RGliYy82NDkwQTdFQUI2MTA1OUJGQzFDRERFQjA1OTE3REQ3MEJERjNBNjExNjU0MTYyQTFBNDdEQjkzMEQ0MEQ4QUY0\\",\\"Aw==\\",\\"OvcFuuKechg=\\",\\"K2luaXQxZHc0OW1uN3MycjVtc2tqZG11czVodGg4MHp6OHd3YXl3eWNxMDY=\\",\\"AwgfAAAAAAAAACwraW5pdDFkdzQ5bW43czJyNW1za2pkbXVzNWh0aDgweno4d3dheXd5Y3EwNgEA\\"],\\"function_name\\":\\"swap_and_action_with_recover\\",\\"module_address\\":\\"0xd921c61c7e7d2eead33bdff4c5c2941e66d488f0a15fe7fbc432565dc04b3710\\",\\"module_name\\":\\"entry_point\\",\\"type_args\\":[]}}}","receiver":"init1kvms7tk5dpg9v2e24f3k69v6gwwu8vls0q3dahxluw5g0qwp02nsm8934k","sender":"init1dw49mn7s2r5mskjdmus5hth80zz8wwaywycq06"}'
        },
        {
          index: true,
          key: "packet_data_hex",
          value:
            "7b22616d6f756e74223a223130303030222c2264656e6f6d223a226c322f66623933366666656634656234303139643832393431393932636330396165323738386365373139376663623038636230306334666536663565373931383465222c226d656d6f223a227b5c226d6f76655c223a7b5c226d6573736167655c223a7b5c22617267735c223a5b5c22416749415c222c5c2241413d3d5c222c5c2245436341414141414141413d5c222c5c2257775941414141414141413d5c222c5c224167464561574a6a4c305977516a68454e6b4e424e6a4a454f44673051554578524546434d4552444d4463784f5442424e4442434e545644526a5577526b4a45526b4a434d7a6443525467304d444d32516b4a4351304d794f444d344d7a594252573176646d55764e54517a596a4d3159544d3559325a685a47466b4d3252684d324d794d7a49304f574d304e7a51304e54566b4d54566c5a6d51795a6a6b305a6a67304f5451334d7a49794e6d526c5a5468684d324d3359546c6c4d513d3d5c222c5c2241674a4561574a6a4c305977516a68454e6b4e424e6a4a454f44673051554578524546434d4552444d4463784f5442424e4442434e545644526a5577526b4a45526b4a434d7a6443525467304d444d32516b4a4351304d794f444d344d7a594664576c756158514342585670626d6c3052476c69597938324e446b7751546446515549324d5441314f554a47517a464452455246516a41314f544533524551334d454a45526a4e424e6a45784e6a55304d545979515446424e446445516a6b7a4d4551304d455134515559305c222c5c2241773d3d5c222c5c224f76634675754b656368673d5c222c5c224b326c75615851785a4863304f5731754e334d79636a5674633274715a473131637a566f644767344d4870364f48643359586c3365574e784d44593d5c222c5c2241776766414141414141414141437772615735706444466b647a513562573433637a4a794e57317a6132706b6258567a4e57683061446777656e6f346433646865586435593345774e6745415c225d2c5c2266756e6374696f6e5f6e616d655c223a5c22737761705f616e645f616374696f6e5f776974685f7265636f7665725c222c5c226d6f64756c655f616464726573735c223a5c223078643932316336316337653764326565616433336264666634633563323934316536366434383866306131356665376662633433323536356463303462333731305c222c5c226d6f64756c655f6e616d655c223a5c22656e7472795f706f696e745c222c5c22747970655f617267735c223a5b5d7d7d7d222c227265636569766572223a22696e6974316b766d7337746b3564706739763265323466336b363976366777777538766c73307133646168786c757735673071777030326e736d383933346b222c2273656e646572223a22696e697431647734396d6e37733272356d736b6a646d75733568746838307a7a3877776179777963713036227d"
        },
        {
          index: true,
          key: "packet_timeout_height",
          value: "0-0"
        },
        {
          index: true,
          key: "packet_timeout_timestamp",
          value: "1761645100876013056"
        },
        {
          index: true,
          key: "packet_sequence",
          value: "9351"
        },
        {
          index: true,
          key: "packet_src_port",
          value: "transfer"
        },
        {
          index: true,
          key: "packet_src_channel",
          value: "channel-0"
        },
        {
          index: true,
          key: "packet_dst_port",
          value: "transfer"
        },
        {
          index: true,
          key: "packet_dst_channel",
          value: "channel-66"
        },
        {
          index: true,
          key: "packet_channel_ordering",
          value: "ORDER_UNORDERED"
        },
        {
          index: true,
          key: "packet_connection",
          value: "connection-0"
        },
        {
          index: true,
          key: "connection_id",
          value: "connection-0"
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
          value:
            "init1kvms7tk5dpg9v2e24f3k69v6gwwu8vls0q3dahxluw5g0qwp02nsm8934k"
        },
        {
          index: true,
          key: "amount",
          value: "10000"
        },
        {
          index: true,
          key: "denom",
          value:
            "l2/fb936ffef4eb4019d82941992cc09ae2788ce7197fcb08cb00c4fe6f5e79184e"
        },
        {
          index: true,
          key: "memo",
          value:
            '{"move":{"message":{"args":["AgIA","AA==","ECcAAAAAAAA=","WwYAAAAAAAA=","AgFEaWJjL0YwQjhENkNBNjJEODg0QUExREFCMERDMDcxOTBBNDBCNTVDRjUwRkJERkJCMzdCRTg0MDM2QkJCQ0MyODM4MzYBRW1vdmUvNTQzYjM1YTM5Y2ZhZGFkM2RhM2MyMzI0OWM0NzQ0NTVkMTVlZmQyZjk0Zjg0OTQ3MzIyNmRlZThhM2M3YTllMQ==","AgJEaWJjL0YwQjhENkNBNjJEODg0QUExREFCMERDMDcxOTBBNDBCNTVDRjUwRkJERkJCMzdCRTg0MDM2QkJCQ0MyODM4MzYFdWluaXQCBXVpbml0RGliYy82NDkwQTdFQUI2MTA1OUJGQzFDRERFQjA1OTE3REQ3MEJERjNBNjExNjU0MTYyQTFBNDdEQjkzMEQ0MEQ4QUY0","Aw==","OvcFuuKechg=","K2luaXQxZHc0OW1uN3MycjVtc2tqZG11czVodGg4MHp6OHd3YXl3eWNxMDY=","AwgfAAAAAAAAACwraW5pdDFkdzQ5bW43czJyNW1za2pkbXVzNWh0aDgweno4d3dheXd5Y3EwNgEA"],"function_name":"swap_and_action_with_recover","module_address":"0xd921c61c7e7d2eead33bdff4c5c2941e66d488f0a15fe7fbc432565dc04b3710","module_name":"entry_point","type_args":[]}}}'
        },
        {
          index: true,
          key: "msg_index",
          value: "0"
        }
      ],
      type: "ibc_transfer"
    },
    {
      attributes: [
        {
          index: true,
          key: "module",
          value: "transfer"
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
  gas_used: "138363",
  gas_wanted: "216575",
  height: "513326",
  info: "",
  logs: [],
  raw_log: "",
  timestamp: "2025-10-28T09:46:09Z",
  tx: {
    "@type": "/cosmos.tx.v1beta1.Tx",
    auth_info: {
      fee: {
        amount: [
          {
            amount: "6498",
            denom:
              "l2/fb936ffef4eb4019d82941992cc09ae2788ce7197fcb08cb00c4fe6f5e79184e"
          }
        ],
        gas_limit: "216575",
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
          sequence: "79"
        }
      ],
      tip: null
    },
    body: {
      extension_options: [],
      memo: "",
      messages: [
        {
          "@type": "/ibc.applications.transfer.v1.MsgTransfer",
          memo: '{"move":{"message":{"args":["AgIA","AA==","ECcAAAAAAAA=","WwYAAAAAAAA=","AgFEaWJjL0YwQjhENkNBNjJEODg0QUExREFCMERDMDcxOTBBNDBCNTVDRjUwRkJERkJCMzdCRTg0MDM2QkJCQ0MyODM4MzYBRW1vdmUvNTQzYjM1YTM5Y2ZhZGFkM2RhM2MyMzI0OWM0NzQ0NTVkMTVlZmQyZjk0Zjg0OTQ3MzIyNmRlZThhM2M3YTllMQ==","AgJEaWJjL0YwQjhENkNBNjJEODg0QUExREFCMERDMDcxOTBBNDBCNTVDRjUwRkJERkJCMzdCRTg0MDM2QkJCQ0MyODM4MzYFdWluaXQCBXVpbml0RGliYy82NDkwQTdFQUI2MTA1OUJGQzFDRERFQjA1OTE3REQ3MEJERjNBNjExNjU0MTYyQTFBNDdEQjkzMEQ0MEQ4QUY0","Aw==","OvcFuuKechg=","K2luaXQxZHc0OW1uN3MycjVtc2tqZG11czVodGg4MHp6OHd3YXl3eWNxMDY=","AwgfAAAAAAAAACwraW5pdDFkdzQ5bW43czJyNW1za2pkbXVzNWh0aDgweno4d3dheXd5Y3EwNgEA"],"function_name":"swap_and_action_with_recover","module_address":"0xd921c61c7e7d2eead33bdff4c5c2941e66d488f0a15fe7fbc432565dc04b3710","module_name":"entry_point","type_args":[]}}}',
          receiver:
            "init1kvms7tk5dpg9v2e24f3k69v6gwwu8vls0q3dahxluw5g0qwp02nsm8934k",
          sender: "init1dw49mn7s2r5mskjdmus5hth80zz8wwaywycq06",
          source_channel: "channel-0",
          source_port: "transfer",
          timeout_height: {
            revision_height: "0",
            revision_number: "0"
          },
          timeout_timestamp: "1761645100876013056",
          token: {
            amount: "10000",
            denom:
              "l2/fb936ffef4eb4019d82941992cc09ae2788ce7197fcb08cb00c4fe6f5e79184e"
          }
        }
      ],
      non_critical_extension_options: [],
      timeout_height: "0"
    },
    signatures: [
      "jHcl8IjMFRmew6m7IVa+lvbxvO28zlKsiXInUqjRTYp1BhpB2hQSIgWW2MBFQldm4ds8FYgXUv7448zbiYEcXg=="
    ]
  },
  txhash: "59CA813C64F68ECB31919A04F527DB5193B08654E9439C7670B6A9CEF6902439"
};

export const mockApiResponsesForFtSendWasm = {
  GET: {
    "/chains.json": [
      {
        bech32_prefix: "init",
        chain_id: "moo-1",
        chain_name: "moo",
        description: "MilkyWay L2 blockchain",
        metadata: {
          ibc_channels: [
            {
              chain_id: "interwoven-1",
              channel_id: "channel-0",
              port_id: "transfer",
              version: "ics20-1"
            },
            {
              chain_id: "interwoven-1",
              channel_id: "channel-1",
              port_id:
                "wasm.init1wug8sewp6cedgkmrmvhl3lf3tulagm9hnvy8p0rppz9yjw0g4wtq7947m6",
              version: "ics721-1"
            }
          ]
        },
        network_type: "mainnet",
        pretty_name: "MilkyWay",
        slip44: 60,
        website: "https://initia.xyz"
      },
      {
        bech32_prefix: "init",
        chain_id: "interwoven-1",
        chain_name: "initia",
        description: "Initia L1 blockchain",
        is_l1: true,
        metadata: {
          ibc_channels: [
            {
              chain_id: "moo-1",
              channel_id: "channel-66",
              port_id: "transfer",
              version: "ics20-1"
            },
            {
              chain_id: "moo-1",
              channel_id: "channel-30",
              port_id: "nft-transfer",
              version: "ics721-1"
            }
          ]
        },
        network_type: "mainnet",
        pretty_name: "Initia",
        slip44: 60,
        website: "https://initia.xyz"
      }
    ],
    "/cosmos/base/tendermint/v1beta1/node_info": {
      default_node_info: {
        network: "moo-1"
      }
    }
  },
  POST: {}
};
