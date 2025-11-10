/**
 * Real CW721 NFT mint transaction on WASM VM (moo-1 chain)
 * TX Hash: 5D67772AA09E80007CA80FC3485BB7DF8E1D94BED00B0E91FC9636254AADB009
 * This represents minting a CW721 NFT (token_id: "1") to an owner
 * Block Height: 415297
 * Timestamp: 2025-10-06T09:41:46Z
 */
export const mockCw721Mint = {
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
            "3503ibc/37A3FB4FED4CA04ED6D9E5DA36C6D27248645F0E22F585576A1488B8A89C5A50"
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
            "3503ibc/37A3FB4FED4CA04ED6D9E5DA36C6D27248645F0E22F585576A1488B8A89C5A50"
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
            "3503ibc/37A3FB4FED4CA04ED6D9E5DA36C6D27248645F0E22F585576A1488B8A89C5A50"
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
            "3503ibc/37A3FB4FED4CA04ED6D9E5DA36C6D27248645F0E22F585576A1488B8A89C5A50"
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
          value: "init1dw49mn7s2r5mskjdmus5hth80zz8wwaywycq06/34"
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
            "W8Mq4fBGvbVLkTKln27IuOei1FoqTB1/lHplWLVRs+YmRfuokpzXbSNz/2H1aRwMHWHjCk692059F1qPkf7ZZA=="
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
          value: "mint"
        },
        {
          index: true,
          key: "minter",
          value: "init1dw49mn7s2r5mskjdmus5hth80zz8wwaywycq06"
        },
        {
          index: true,
          key: "owner",
          value: "init1dw49mn7s2r5mskjdmus5hth80zz8wwaywycq06"
        },
        {
          index: true,
          key: "token_id",
          value: "1"
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
  gas_used: "151285",
  gas_wanted: "233515",
  height: "415297",
  info: "",
  logs: [],
  raw_log: "",
  timestamp: "2025-10-06T09:41:46Z",
  tx: {
    "@type": "/cosmos.tx.v1beta1.Tx",
    auth_info: {
      fee: {
        amount: [
          {
            amount: "3503",
            denom:
              "ibc/37A3FB4FED4CA04ED6D9E5DA36C6D27248645F0E22F585576A1488B8A89C5A50"
          }
        ],
        gas_limit: "233515",
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
          sequence: "34"
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
            mint: {
              owner: "init1dw49mn7s2r5mskjdmus5hth80zz8wwaywycq06",
              token_id: "1",
              token_uri: "https://nft-rho-ten.vercel.app/saint_seiya/1.json"
            }
          },
          sender: "init1dw49mn7s2r5mskjdmus5hth80zz8wwaywycq06"
        }
      ],
      non_critical_extension_options: [],
      timeout_height: "0"
    },
    signatures: [
      "W8Mq4fBGvbVLkTKln27IuOei1FoqTB1/lHplWLVRs+YmRfuokpzXbSNz/2H1aRwMHWHjCk692059F1qPkf7ZZA=="
    ]
  },
  txhash: "5D67772AA09E80007CA80FC3485BB7DF8E1D94BED00B0E91FC9636254AADB009"
};
