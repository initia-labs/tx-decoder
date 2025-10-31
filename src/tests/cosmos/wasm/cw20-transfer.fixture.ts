/**
 * Real CW20 transfer transaction on WASM VM (moo-1 chain)
 * TX Hash: 5FE874409CCB68FF8CD2904760F3841350014FE30DF4E577CD46AF9ACD023603
 * This represents a transfer of CW20 tokens from one address to another
 * Block Height: 457548
 * Timestamp: 2025-10-28T10:06:14Z
 */
export const mockCw20Transfer = {
  code: 0,
  codespace: "",
  data: "122E0A2C2F636F736D7761736D2E7761736D2E76312E4D736745786563757465436F6E7472616374526573706F6E7365",
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
            "3333ibc/37A3FB4FED4CA04ED6D9E5DA36C6D27248645F0E22F585576A1488B8A89C5A50"
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
            "3333ibc/37A3FB4FED4CA04ED6D9E5DA36C6D27248645F0E22F585576A1488B8A89C5A50"
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
            "3333ibc/37A3FB4FED4CA04ED6D9E5DA36C6D27248645F0E22F585576A1488B8A89C5A50"
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
            "3333ibc/37A3FB4FED4CA04ED6D9E5DA36C6D27248645F0E22F585576A1488B8A89C5A50"
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
          value: "init1dw49mn7s2r5mskjdmus5hth80zz8wwaywycq06/60"
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
            "QIkfhoAQtE1VbvA0IFV2extxtynTK6fOlLesYHF/iRwKJAdReBf+de/wcVLK7NAgst+KADx2m13e/tt5MEosJg=="
        }
      ],
      type: "tx"
    },
    {
      attributes: [
        {
          index: true,
          key: "action",
          value: "/cosmwasm.wasm.v1.MsgExecuteContract"
        },
        {
          index: true,
          key: "sender",
          value: "init1dw49mn7s2r5mskjdmus5hth80zz8wwaywycq06"
        },
        {
          index: true,
          key: "module",
          value: "wasm"
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
          key: "_contract_address",
          value:
            "init1fuyxwxlsgjkfjmxfthq8427dm2am3ya3cwcdr8gls29l7jadtazswg0k5g"
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
          key: "_contract_address",
          value:
            "init1fuyxwxlsgjkfjmxfthq8427dm2am3ya3cwcdr8gls29l7jadtazswg0k5g"
        },
        {
          index: true,
          key: "action",
          value: "transfer"
        },
        {
          index: true,
          key: "from",
          value: "init1dw49mn7s2r5mskjdmus5hth80zz8wwaywycq06"
        },
        {
          index: true,
          key: "to",
          value: "init1c90j0nxt28ehunm53zfl2x8lrha27da8t3dmfl"
        },
        {
          index: true,
          key: "amount",
          value: "1000"
        },
        {
          index: true,
          key: "msg_index",
          value: "0"
        }
      ],
      type: "wasm"
    }
  ],
  gas_used: "143187",
  gas_wanted: "222178",
  height: "457548",
  info: "",
  logs: [
    {
      events: [
        {
          attributes: [
            {
              index: true,
              key: "_contract_address",
              value:
                "init1fuyxwxlsgjkfjmxfthq8427dm2am3ya3cwcdr8gls29l7jadtazswg0k5g"
            },
            {
              index: true,
              key: "action",
              value: "transfer"
            },
            {
              index: true,
              key: "from",
              value: "init1dw49mn7s2r5mskjdmus5hth80zz8wwaywycq06"
            },
            {
              index: true,
              key: "to",
              value: "init1c90j0nxt28ehunm53zfl2x8lrha27da8t3dmfl"
            },
            {
              index: true,
              key: "amount",
              value: "1000"
            },
            {
              index: true,
              key: "msg_index",
              value: "0"
            }
          ],
          type: "wasm"
        }
      ],
      log: "",
      msg_index: 0
    }
  ],
  raw_log: "",
  timestamp: "2025-10-28T10:06:14Z",
  tx: {
    "@type": "/cosmos.tx.v1beta1.Tx",
    auth_info: {
      fee: {
        amount: [
          {
            amount: "3333",
            denom:
              "ibc/37A3FB4FED4CA04ED6D9E5DA36C6D27248645F0E22F585576A1488B8A89C5A50"
          }
        ],
        gas_limit: "222178",
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
          sequence: "60"
        }
      ],
      tip: null
    },
    body: {
      extension_options: [],
      memo: "",
      messages: [
        {
          "@type": "/cosmwasm.wasm.v1.MsgExecuteContract",
          contract:
            "init1fuyxwxlsgjkfjmxfthq8427dm2am3ya3cwcdr8gls29l7jadtazswg0k5g",
          funds: [],
          msg: {
            transfer: {
              amount: "1000",
              recipient: "init1c90j0nxt28ehunm53zfl2x8lrha27da8t3dmfl"
            }
          },
          sender: "init1dw49mn7s2r5mskjdmus5hth80zz8wwaywycq06"
        }
      ],
      non_critical_extension_options: [],
      timeout_height: "0"
    },
    signatures: [
      "QIkfhoAQtE1VbvA0IFV2extxtynTK6fOlLesYHF/iRwKJAdReBf+de/wcVLK7NAgst+KADx2m13e/tt5MEosJg=="
    ]
  },
  txhash: "5FE874409CCB68FF8CD2904760F3841350014FE30DF4E577CD46AF9ACD023603"
};
