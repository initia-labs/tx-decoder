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
