/**
 * Real WASM contract instantiation transactions on WASM VM
 */

/**
 * Successful contract instantiation (ICS721)
 * TX Hash: 66B60FA1D1ED928D607EC34E4AF9AAFE3CD4F164AD5AEC7A906C3E0B97F29814
 * Block Height: 7
 * Timestamp: 2025-03-17T14:55:56Z
 * Code ID: 2
 */
export const mockInstantiateContract = {
  code: 0,
  codespace: "",
  data: "12750A302F636F736D7761736D2E7761736D2E76312E4D7367496E7374616E7469617465436F6E7472616374526573706F6E736512410A3F696E697431777567387365777036636564676B6D726D76686C336C663374756C61676D39686E76793870307270707A39796A77306734777471373934376D36",
  events: [
    {
      attributes: [
        {
          index: true,
          key: "fee",
          value: ""
        },
        {
          index: true,
          key: "fee_payer",
          value: "init1r2cwhxsspwa48aujwfvgy6lvg9ylc948t3874v"
        }
      ],
      type: "tx"
    },
    {
      attributes: [
        {
          index: true,
          key: "acc_seq",
          value: "init1r2cwhxsspwa48aujwfvgy6lvg9ylc948t3874v/2"
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
            "g+b18vhZPispl4pUYGvBz8KjPdmn9ToptInimZa3ebJ4+X6sZbqfxoeX9vI1JTXuq8MVJPCA/3iuTgTB5phbMA=="
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
          value: "init1r2cwhxsspwa48aujwfvgy6lvg9ylc948t3874v"
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
            "init1wug8sewp6cedgkmrmvhl3lf3tulagm9hnvy8p0rppz9yjw0g4wtq7947m6"
        },
        {
          index: true,
          key: "code_id",
          value: "2"
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
          value:
            "init1wug8sewp6cedgkmrmvhl3lf3tulagm9hnvy8p0rppz9yjw0g4wtq7947m6"
        },
        {
          index: true,
          key: "method",
          value: "instantiate"
        },
        {
          index: true,
          key: "cw721_code_id",
          value: "1"
        },
        {
          index: true,
          key: "cw721_admin",
          value: "immutable"
        },
        {
          index: true,
          key: "contract_addr_length",
          value: "none"
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
  gas_used: "204969",
  gas_wanted: "10000000",
  height: "7",
  info: "",
  logs: [],
  raw_log: "",
  timestamp: "2025-03-17T14:55:56Z",
  tx: {
    "@type": "/cosmos.tx.v1beta1.Tx",
    auth_info: {
      fee: {
        amount: [],
        gas_limit: "10000000",
        granter: "",
        payer: ""
      },
      signer_infos: [
        {
          mode_info: {
            single: {
              mode: "SIGN_MODE_DIRECT"
            }
          },
          public_key: {
            "@type": "/cosmos.crypto.secp256k1.PubKey",
            key: "A6Pbd3taTmYplPcfj+FzFW/D2C6Dm77OVtywE9POdyhX"
          },
          sequence: "2"
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
          admin: "init1r2cwhxsspwa48aujwfvgy6lvg9ylc948t3874v",
          code_id: "2",
          funds: [],
          label: "ics721",
          msg: {
            cw721_base_code_id: 1
          },
          sender: "init1r2cwhxsspwa48aujwfvgy6lvg9ylc948t3874v"
        }
      ],
      non_critical_extension_options: [],
      timeout_height: "0"
    },
    signatures: [
      "g+b18vhZPispl4pUYGvBz8KjPdmn9ToptInimZa3ebJ4+X6sZbqfxoeX9vI1JTXuq8MVJPCA/3iuTgTB5phbMA=="
    ]
  },
  txhash: "66B60FA1D1ED928D607EC34E4AF9AAFE3CD4F164AD5AEC7A906C3E0B97F29814"
};

/**
 * Real failed contract instantiation transaction on WASM VM (moo-1 chain)
 * TX Hash: 41787FF63125791ECFB396A625D365CAFD61C68C1ACF7E3707220CE6BEDBC53C
 * Block Height: 460979
 * Timestamp: 2025-10-30T11:37:21Z
 * Error: failed to execute message; message index: 0: Generic error: addr_validate errored: decoding bech32 f...
 */
export const mockInstantiateContractFailed = {
  code: 4,
  codespace: "wasm",
  data: "",
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
            "4321ibc/37A3FB4FED4CA04ED6D9E5DA36C6D27248645F0E22F585576A1488B8A89C5A50"
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
            "4321ibc/37A3FB4FED4CA04ED6D9E5DA36C6D27248645F0E22F585576A1488B8A89C5A50"
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
            "4321ibc/37A3FB4FED4CA04ED6D9E5DA36C6D27248645F0E22F585576A1488B8A89C5A50"
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
            "4321ibc/37A3FB4FED4CA04ED6D9E5DA36C6D27248645F0E22F585576A1488B8A89C5A50"
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
          value: "init1dw49mn7s2r5mskjdmus5hth80zz8wwaywycq06/64"
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
            "4vGxO8AKTqeyDYtDdgkbB4VT73JlMDlsixAc/gt2tBh6TLfguh7LHx19cSGt75mnpodXXho9MWfZERhB8qBSLRs="
        }
      ],
      type: "tx"
    }
  ],
  gas_used: "156375",
  gas_wanted: "288052",
  height: "460979",
  info: "",
  logs: [],
  raw_log:
    "failed to execute message; message index: 0: Generic error: addr_validate errored: decoding bech32 failed: invalid checksum (expected 3fextf got ywycq0): instantiate wasm contract failed",
  timestamp: "2025-10-30T11:37:21Z",
  tx: {
    "@type": "/cosmos.tx.v1beta1.Tx",
    auth_info: {
      fee: {
        amount: [
          {
            amount: "4321",
            denom:
              "ibc/37A3FB4FED4CA04ED6D9E5DA36C6D27248645F0E22F585576A1488B8A89C5A50"
          }
        ],
        gas_limit: "288052",
        granter: "",
        payer: ""
      },
      signer_infos: [
        {
          mode_info: {
            single: {
              mode: "SIGN_MODE_DIRECT"
            }
          },
          public_key: {
            "@type": "/initia.crypto.v1beta1.ethsecp256k1.PubKey",
            key: "A4shR8ybPUPxzBXqi4W6BH+MtTkuonZcw3xOFkT+7tE1"
          },
          sequence: "64"
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
          admin: "init1dw49mn7s2r5mskjdmus5hth80zz8wwaywycq06",
          code_id: "10",
          funds: [],
          label: "ztest",
          msg: {
            decimals: 0,
            initial_balances: [
              {
                address: "init1dw49mn7s2r5mskjdmus5hth80zz8wwaywycq0",
                amount: "199999999999999999999999999999999999"
              }
            ],
            name: "My Token",
            symbol: "MTKKKKKKKKK"
          },
          sender: "init1dw49mn7s2r5mskjdmus5hth80zz8wwaywycq06"
        }
      ],
      non_critical_extension_options: [],
      timeout_height: "0"
    },
    signatures: [
      "4vGxO8AKTqeyDYtDdgkbB4VT73JlMDlsixAc/gt2tBh6TLfguh7LHx19cSGt75mnpodXXho9MWfZERhB8qBSLRs="
    ]
  },
  txhash: "41787FF63125791ECFB396A625D365CAFD61C68C1ACF7E3707220CE6BEDBC53C"
};
