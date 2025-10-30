/**
 * Mock fixture for IBC fungible token send on WASM VM
 */
export const mockFtSendWasmTransaction = {
  code: 0,
  codespace: "",
  data: "12380A312F6962632E6170706C69636174696F6E732E7472616E736665722E76312E4D73675472616E73666572526573706F6E7365120308D216",
  events: [
    {
      attributes: [
        {
          index: true,
          key: "spender",
          value: "init1sender123456789abcdefghijklmnopqr"
        },
        {
          index: true,
          key: "amount",
          value: "5000uinit"
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
          value: "5000uinit"
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
          value: "init1sender123456789abcdefghijklmnopqr"
        },
        {
          index: true,
          key: "amount",
          value: "5000uinit"
        }
      ],
      type: "transfer"
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
          value: "init1sender123456789abcdefghijklmnopqr"
        },
        {
          index: true,
          key: "module",
          value: "ibc_transfer"
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
            '{"amount":"100000","denom":"uinit","receiver":"init1receiver123456789abcdefghijklmno","sender":"init1sender123456789abcdefghijklmnopqr"}'
        },
        {
          index: true,
          key: "packet_timeout_height",
          value: "0-0"
        },
        {
          index: true,
          key: "packet_timeout_timestamp",
          value: "1751257396110677500"
        },
        {
          index: true,
          key: "packet_sequence",
          value: "100"
        },
        {
          index: true,
          key: "packet_src_port",
          value: "transfer"
        },
        {
          index: true,
          key: "packet_src_channel",
          value: "channel-1"
        },
        {
          index: true,
          key: "packet_dst_port",
          value: "transfer"
        },
        {
          index: true,
          key: "packet_dst_channel",
          value: "channel-0"
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
          key: "sender",
          value: "init1sender123456789abcdefghijklmnopqr"
        },
        {
          index: true,
          key: "receiver",
          value: "init1receiver123456789abcdefghijklmno"
        },
        {
          index: true,
          key: "amount",
          value: "100000"
        },
        {
          index: true,
          key: "denom",
          value: "uinit"
        },
        {
          index: true,
          key: "memo",
          value: ""
        },
        {
          index: true,
          key: "msg_index",
          value: "0"
        }
      ],
      type: "ibc_transfer"
    }
  ],
  gas_used: "150000",
  gas_wanted: "200000",
  height: "500000",
  info: "",
  logs: [],
  raw_log: "",
  timestamp: "2025-10-30T10:00:00Z",
  tx: {
    "@type": "/cosmos.tx.v1beta1.Tx",
    auth_info: {
      fee: {
        amount: [
          {
            amount: "5000",
            denom: "uinit"
          }
        ],
        gas_limit: "200000",
        granter: "",
        payer: ""
      },
      signer_infos: []
    },
    body: {
      extension_options: [],
      memo: "",
      messages: [
        {
          "@type": "/ibc.applications.transfer.v1.MsgTransfer",
          memo: "",
          receiver: "init1receiver123456789abcdefghijklmno",
          sender: "init1sender123456789abcdefghijklmnopqr",
          source_channel: "channel-1",
          source_port: "transfer",
          timeout_height: {
            revision_height: "0",
            revision_number: "0"
          },
          timeout_timestamp: "1751257396110677500",
          token: {
            amount: "100000",
            denom: "uinit"
          }
        }
      ],
      non_critical_extension_options: [],
      timeout_height: "0"
    },
    signatures: []
  },
  txhash: "IBCFTSENDWASM1234567890ABCDEF1234567890ABCDEF1234567890ABCDEF12"
};

export const mockApiResponsesForFtSendWasm = {
  GET: {
    "/chains.json": [
      {
        chain_id: "initia-1",
        chain_name: "initia",
        metadata: {
          ibc_channels: [
            {
              chain_id: "osmosis-1",
              channel_id: "channel-1",
              port_id: "transfer",
              version: "ics20-1"
            }
          ]
        }
      },
      {
        chain_id: "osmosis-1",
        chain_name: "osmosis",
        metadata: {
          ibc_channels: [
            {
              chain_id: "initia-1",
              channel_id: "channel-0",
              port_id: "transfer",
              version: "ics20-1"
            }
          ]
        }
      }
    ],
    "/cosmos/base/tendermint/v1beta1/node_info": {
      default_node_info: {
        network: "initia-1"
      }
    }
  },
  POST: {}
};
