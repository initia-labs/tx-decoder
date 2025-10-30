/**
 * Mock fixture for WASM contract instantiation
 * This represents instantiating a new contract from a code ID
 * The contract address is extracted from the instantiate event
 */
export const mockInstantiateContract = {
  code: 0,
  codespace: "",
  data: "0A2C0A2A2F636F736D7761736D2E7761736D2E76312E4D7367496E7374616E7469617465436F6E7472616374",
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
          value: "init1sender123456789abcdefghijklmnopqr/100"
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
          value: "/cosmwasm.wasm.v1.MsgInstantiateContract"
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
          value: "init1newcontractaddress1234567890abcd"
        },
        {
          index: true,
          key: "code_id",
          value: "42"
        },
        {
          index: true,
          key: "msg_index",
          value: "0"
        }
      ],
      type: "instantiate"
    },
    {
      attributes: [
        {
          index: true,
          key: "_contract_address",
          value: "init1newcontractaddress1234567890abcd"
        },
        {
          index: true,
          key: "method",
          value: "instantiate"
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
  gas_used: "200000",
  gas_wanted: "300000",
  height: "600000",
  info: "",
  logs: [],
  raw_log: "",
  timestamp: "2025-10-29T12:00:00Z",
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
        gas_limit: "300000",
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
          sequence: "100"
        }
      ],
      tip: null
    },
    body: {
      extension_options: [],
      memo: "",
      messages: [
        {
          "@type": "/cosmwasm.wasm.v1.MsgInstantiateContract",
          admin: "init1admin123456789abcdefghijklmnopqrs",
          code_id: "42",
          funds: [
            {
              amount: "1000",
              denom: "uinit"
            }
          ],
          label: "My CW20 Token",
          msg: {
            decimals: 6,
            initial_balances: [
              {
                address: "init1sender123456789abcdefghijklmnopqr",
                amount: "1000000000"
              }
            ],
            name: "Test Token",
            symbol: "TEST"
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
  txhash: "INSTANTIATE1234567890ABCDEF1234567890ABCDEF1234567890ABCDEF12"
};

/**
 * Mock fixture for WASM contract instantiation with base64 encoded message
 */
export const mockInstantiateContractBase64 = {
  code: 0,
  codespace: "",
  data: "0A2C0A2A2F636F736D7761736D2E7761736D2E76312E4D7367496E7374616E7469617465436F6E7472616374",
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
          value: "init1sender123456789abcdefghijklmnopqr/101"
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
          value: "/cosmwasm.wasm.v1.MsgInstantiateContract"
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
          value: "init1anothercontractaddr1234567890abc"
        },
        {
          index: true,
          key: "code_id",
          value: "99"
        },
        {
          index: true,
          key: "msg_index",
          value: "0"
        }
      ],
      type: "instantiate"
    }
  ],
  gas_used: "180000",
  gas_wanted: "250000",
  height: "600001",
  info: "",
  logs: [],
  raw_log: "",
  timestamp: "2025-10-29T12:05:00Z",
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
        gas_limit: "250000",
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
          sequence: "101"
        }
      ],
      tip: null
    },
    body: {
      extension_options: [],
      memo: "",
      messages: [
        {
          "@type": "/cosmwasm.wasm.v1.MsgInstantiateContract",
          code_id: "99",
          funds: [],
          label: "Simple Contract",
          // Base64 encoded: {"count":0}
          msg: "eyJjb3VudCI6MH0=",
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
  txhash: "INSTANTIATEBASE641234567890ABCDEF1234567890ABCDEF1234567890AB"
};
