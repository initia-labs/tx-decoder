/**
 * Mock fixture for CW-20 transfer on WASM VM
 * This represents a transfer of CW-20 tokens from one address to another
 */
export const mockCw20Transfer = {
  code: 0,
  codespace: "",
  data: "0A280A262F636F736D7761736D2E7761736D2E76312E4D736745786563757465436F6E7472616374",
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
          key: "sender",
          value: "init1sender123456789abcdefghijklmnopqr"
        }
      ],
      type: "message"
    },
    {
      attributes: [
        {
          index: true,
          key: "fee",
          value: "5000uinit"
        },
        {
          index: true,
          key: "fee_payer",
          value: "init1sender123456789abcdefghijklmnopqr"
        }
      ],
      type: "tx"
    },
    {
      attributes: [
        {
          index: true,
          key: "acc_seq",
          value: "init1sender123456789abcdefghijklmnopqr/42"
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
            "wAl8ckyz35jsc0dd1WKYjdMyY8LwmyNQ7mzcgHs72w8h09w2ZDfjdfNWMgIjQ5/3/yTS/umAt8e/5bHKqPNJvA=="
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
          value: "init1sender123456789abcdefghijklmnopqr"
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
          value: "init1contractaddress123456789abcdefgh"
        },
        {
          index: true,
          key: "action",
          value: "transfer"
        },
        {
          index: true,
          key: "from",
          value: "init1sender123456789abcdefghijklmnopqr"
        },
        {
          index: true,
          key: "to",
          value: "init1receiver123456789abcdefghijklmno"
        },
        {
          index: true,
          key: "amount",
          value: "1000000"
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
  gas_used: "150000",
  gas_wanted: "200000",
  height: "500000",
  info: "",
  logs: [],
  raw_log: "",
  timestamp: "2025-10-29T10:00:00Z",
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
      signer_infos: [
        {
          mode_info: {
            single: {
              mode: "SIGN_MODE_EIP_191"
            }
          },
          public_key: {
            "@type": "/initia.crypto.v1beta1.ethsecp256k1.PubKey",
            key: "Aw+caG0V9v/DRMqpuwnwqKayTgGkbi6/ga57i8awFsOi"
          },
          sequence: "42"
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
          contract: "init1contractaddress123456789abcdefgh",
          funds: [],
          msg: {
            transfer: {
              amount: "1000000",
              recipient: "init1receiver123456789abcdefghijklmno"
            }
          },
          sender: "init1sender123456789abcdefghijklmnopqr"
        }
      ],
      non_critical_extension_options: [],
      timeout_height: "0"
    },
    signatures: [
      "wAl8ckyz35jsc0dd1WKYjdMyY8LwmyNQ7mzcgHs72w8h09w2ZDfjdfNWMgIjQ5/3/yTS/umAt8e/5bHKqPNJvA=="
    ]
  },
  txhash: "CW20TRANSFER1234567890ABCDEF1234567890ABCDEF1234567890ABCDEF1234"
};

/**
 * Mock fixture for CW-20 transfer with base64 encoded message
 * Some transactions encode the msg as base64 string instead of JSON object
 */
export const mockCw20TransferBase64 = {
  code: 0,
  codespace: "",
  data: "0A280A262F636F736D7761736D2E7761736D2E76312E4D736745786563757465436F6E7472616374",
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
          key: "sender",
          value: "init1sender123456789abcdefghijklmnopqr"
        }
      ],
      type: "message"
    },
    {
      attributes: [
        {
          index: true,
          key: "fee",
          value: "5000uinit"
        },
        {
          index: true,
          key: "fee_payer",
          value: "init1sender123456789abcdefghijklmnopqr"
        }
      ],
      type: "tx"
    },
    {
      attributes: [
        {
          index: true,
          key: "acc_seq",
          value: "init1sender123456789abcdefghijklmnopqr/43"
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
            "wAl8ckyz35jsc0dd1WKYjdMyY8LwmyNQ7mzcgHs72w8h09w2ZDfjdfNWMgIjQ5/3/yTS/umAt8e/5bHKqPNJvA=="
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
          value: "init1sender123456789abcdefghijklmnopqr"
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
          value: "init1contractaddress123456789abcdefgh"
        },
        {
          index: true,
          key: "action",
          value: "transfer"
        },
        {
          index: true,
          key: "from",
          value: "init1sender123456789abcdefghijklmnopqr"
        },
        {
          index: true,
          key: "to",
          value: "init1receiver123456789abcdefghijklmno"
        },
        {
          index: true,
          key: "amount",
          value: "500000"
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
  gas_used: "150000",
  gas_wanted: "200000",
  height: "500001",
  info: "",
  logs: [],
  raw_log: "",
  timestamp: "2025-10-29T10:05:00Z",
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
      signer_infos: [
        {
          mode_info: {
            single: {
              mode: "SIGN_MODE_EIP_191"
            }
          },
          public_key: {
            "@type": "/initia.crypto.v1beta1.ethsecp256k1.PubKey",
            key: "Aw+caG0V9v/DRMqpuwnwqKayTgGkbi6/ga57i8awFsOi"
          },
          sequence: "43"
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
          contract: "init1contractaddress123456789abcdefgh",
          funds: [],
          // Base64 encoded: {"transfer":{"recipient":"init1receiver123456789abcdefghijklmno","amount":"500000"}}
          msg: "eyJ0cmFuc2ZlciI6eyJyZWNpcGllbnQiOiJpbml0MXJlY2VpdmVyMTIzNDU2Nzg5YWJjZGVmZ2hpamtsbW5vIiwiYW1vdW50IjoiNTAwMDAwIn19",
          sender: "init1sender123456789abcdefghijklmnopqr"
        }
      ],
      non_critical_extension_options: [],
      timeout_height: "0"
    },
    signatures: [
      "wAl8ckyz35jsc0dd1WKYjdMyY8LwmyNQ7mzcgHs72w8h09w2ZDfjdfNWMgIjQ5/3/yTS/umAt8e/5bHKqPNJvA=="
    ]
  },
  txhash: "CW20TRANSFERBASE641234567890ABCDEF1234567890ABCDEF1234567890ABC"
};
