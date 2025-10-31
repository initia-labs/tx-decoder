/**
 * Real WASM execute contract transaction (CW20 mint) on WASM VM (moo-1 chain)
 * TX Hash: B78909158B27D095ACEFBE871072195B1BE1326627FF40AB256A295C7703C4AA
 * This represents executing a contract with mint action (amount: "5000000")
 * Block Height: 361325
 * Timestamp: 2025-09-05T03:49:57Z
 */
export const mockExecuteContract = {
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
            "3406ibc/37A3FB4FED4CA04ED6D9E5DA36C6D27248645F0E22F585576A1488B8A89C5A50"
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
            "3406ibc/37A3FB4FED4CA04ED6D9E5DA36C6D27248645F0E22F585576A1488B8A89C5A50"
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
            "3406ibc/37A3FB4FED4CA04ED6D9E5DA36C6D27248645F0E22F585576A1488B8A89C5A50"
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
            "3406ibc/37A3FB4FED4CA04ED6D9E5DA36C6D27248645F0E22F585576A1488B8A89C5A50"
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
          value: "init1dw49mn7s2r5mskjdmus5hth80zz8wwaywycq06/14"
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
            "AtKlK/sVdmU/TQA3ZjOijQxnu40ZfrZMMpuVq30lZs9OwoBRHLjS9WLz3BKkRspdkTLrlFGL//tIvuA/QPs4tA=="
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
          value: "mint"
        },
        {
          index: true,
          key: "to",
          value: "init1dw49mn7s2r5mskjdmus5hth80zz8wwaywycq06"
        },
        {
          index: true,
          key: "amount",
          value: "5000000"
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
  gas_used: "146633",
  gas_wanted: "227048",
  height: "361325",
  info: "",
  logs: [],
  raw_log: "",
  timestamp: "2025-09-05T03:49:57Z",
  tx: {
    "@type": "/cosmos.tx.v1beta1.Tx",
    auth_info: {
      fee: {
        amount: [
          {
            amount: "3406",
            denom:
              "ibc/37A3FB4FED4CA04ED6D9E5DA36C6D27248645F0E22F585576A1488B8A89C5A50"
          }
        ],
        gas_limit: "227048",
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
          sequence: "14"
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
            mint: {
              amount: "5000000",
              recipient: "init1dw49mn7s2r5mskjdmus5hth80zz8wwaywycq06"
            }
          },
          sender: "init1dw49mn7s2r5mskjdmus5hth80zz8wwaywycq06"
        }
      ],
      non_critical_extension_options: [],
      timeout_height: "0"
    },
    signatures: [
      "AtKlK/sVdmU/TQA3ZjOijQxnu40ZfrZMMpuVq30lZs9OwoBRHLjS9WLz3BKkRspdkTLrlFGL//tIvuA/QPs4tA=="
    ]
  },
  txhash: "B78909158B27D095ACEFBE871072195B1BE1326627FF40AB256A295C7703C4AA"
};
