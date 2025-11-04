/**
 * Real CW721 NFT transfer transaction on WASM VM (moo-1 chain)
 * TX Hash: BF64DF89FB95567626A123D0ACAE1CBD959CE1E2B62F20731A6A0B692AC63E2D
 * This represents a transfer of CW721 NFT (token_id: "2") from one address to another
 * Block Height: 441805
 * Timestamp: 2025-10-20T03:34:28Z
 */
export const mockCw721Transfer = {
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
            "3437ibc/37A3FB4FED4CA04ED6D9E5DA36C6D27248645F0E22F585576A1488B8A89C5A50"
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
            "3437ibc/37A3FB4FED4CA04ED6D9E5DA36C6D27248645F0E22F585576A1488B8A89C5A50"
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
            "3437ibc/37A3FB4FED4CA04ED6D9E5DA36C6D27248645F0E22F585576A1488B8A89C5A50"
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
            "3437ibc/37A3FB4FED4CA04ED6D9E5DA36C6D27248645F0E22F585576A1488B8A89C5A50"
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
          value: "init1dw49mn7s2r5mskjdmus5hth80zz8wwaywycq06/49"
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
            "Q91i97so81BqZ/sC2DYg3p6JuFErSBIq6ZwcwiL9VGkxg+CgV/H/SeMvmCEPWfwVZcDU78PiAymPkZVSptuc1A=="
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
            "init1qyygux5t4s3a3l25k8psxjydhtudu5lnt0tk0szm8q4s27xa980scjvh6c"
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
            "init1qyygux5t4s3a3l25k8psxjydhtudu5lnt0tk0szm8q4s27xa980scjvh6c"
        },
        {
          index: true,
          key: "action",
          value: "transfer_nft"
        },
        {
          index: true,
          key: "sender",
          value: "init1dw49mn7s2r5mskjdmus5hth80zz8wwaywycq06"
        },
        {
          index: true,
          key: "recipient",
          value: "init1veaum7vy45fzw5x4mflskgx5lnmwmxx5wm3x8p"
        },
        {
          index: true,
          key: "token_id",
          value: "2"
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
  gas_used: "148153",
  gas_wanted: "229130",
  height: "441805",
  info: "",
  logs: [],
  raw_log: "",
  timestamp: "2025-10-20T03:34:28Z",
  tx: {
    "@type": "/cosmos.tx.v1beta1.Tx",
    auth_info: {
      fee: {
        amount: [
          {
            amount: "3437",
            denom:
              "ibc/37A3FB4FED4CA04ED6D9E5DA36C6D27248645F0E22F585576A1488B8A89C5A50"
          }
        ],
        gas_limit: "229130",
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
          sequence: "49"
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
            "init1qyygux5t4s3a3l25k8psxjydhtudu5lnt0tk0szm8q4s27xa980scjvh6c",
          funds: [],
          msg: {
            transfer_nft: {
              recipient: "init1veaum7vy45fzw5x4mflskgx5lnmwmxx5wm3x8p",
              token_id: "2"
            }
          },
          sender: "init1dw49mn7s2r5mskjdmus5hth80zz8wwaywycq06"
        }
      ],
      non_critical_extension_options: [],
      timeout_height: "0"
    },
    signatures: [
      "Q91i97so81BqZ/sC2DYg3p6JuFErSBIq6ZwcwiL9VGkxg+CgV/H/SeMvmCEPWfwVZcDU78PiAymPkZVSptuc1A=="
    ]
  },
  txhash: "BF64DF89FB95567626A123D0ACAE1CBD959CE1E2B62F20731A6A0B692AC63E2D"
};
