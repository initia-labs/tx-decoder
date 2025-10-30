/**
 * Mock fixture for CW-721 NFT mint on WASM VM
 * This represents minting a new NFT to an owner
 */
export const mockCw721Mint = {
  code: 0,
  codespace: "",
  data: "0A280A262F636F736D7761736D2E7761736D2E76312E4D736745786563757465436F6E7472616374",
  events: [
    {
      attributes: [
        {
          index: true,
          key: "spender",
          value: "init1minter123456789abcdefghijklmnopqr"
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
          key: "action",
          value: "/cosmwasm.wasm.v1.MsgExecuteContract"
        },
        {
          index: true,
          key: "sender",
          value: "init1minter123456789abcdefghijklmnopqr"
        },
        {
          index: true,
          key: "module",
          value: "wasm"
        }
      ],
      type: "message"
    },
    {
      attributes: [
        {
          index: true,
          key: "_contract_address",
          value: "init1nftcontract123456789abcdefghijkl"
        },
        {
          index: true,
          key: "action",
          value: "mint"
        },
        {
          index: true,
          key: "owner",
          value: "init1nftowner123456789abcdefghijklmno"
        },
        {
          index: true,
          key: "token_id",
          value: "newtoken789"
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
  gas_used: "180000",
  gas_wanted: "250000",
  height: "800000",
  info: "",
  logs: [],
  raw_log: "",
  timestamp: "2025-10-30T11:00:00Z",
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
      signer_infos: []
    },
    body: {
      extension_options: [],
      memo: "",
      messages: [
        {
          "@type": "/cosmwasm.wasm.v1.MsgExecuteContract",
          contract: "init1nftcontract123456789abcdefghijkl",
          funds: [],
          msg: {
            mint: {
              owner: "init1nftowner123456789abcdefghijklmno",
              token_id: "newtoken789",
              token_uri: "https://example.com/metadata/newtoken789.json"
            }
          },
          sender: "init1minter123456789abcdefghijklmnopqr"
        }
      ],
      non_critical_extension_options: [],
      timeout_height: "0"
    },
    signatures: []
  },
  txhash: "CW721MINT1234567890ABCDEF1234567890ABCDEF1234567890ABCDEF123456"
};

/**
 * Mock fixture for CW-721 NFT mint with base64 encoded message and extension
 */
export const mockCw721MintBase64 = {
  code: 0,
  codespace: "",
  data: "0A280A262F636F736D7761736D2E7761736D2E76312E4D736745786563757465436F6E7472616374",
  events: [
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
          value: "init1minter123456789abcdefghijklmnopqr"
        },
        {
          index: true,
          key: "module",
          value: "wasm"
        }
      ],
      type: "message"
    },
    {
      attributes: [
        {
          index: true,
          key: "_contract_address",
          value: "init1nftcontract123456789abcdefghijkl"
        },
        {
          index: true,
          key: "action",
          value: "mint"
        },
        {
          index: true,
          key: "owner",
          value: "init1specialowner123456789abcdefghijk"
        },
        {
          index: true,
          key: "token_id",
          value: "special999"
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
  gas_wanted: "280000",
  height: "800001",
  info: "",
  logs: [],
  raw_log: "",
  timestamp: "2025-10-30T11:05:00Z",
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
        gas_limit: "280000",
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
          "@type": "/cosmwasm.wasm.v1.MsgExecuteContract",
          contract: "init1nftcontract123456789abcdefghijkl",
          funds: [],
          // Base64 encoded: {"mint":{"extension":{"rarity":"legendary","power":100},"owner":"init1specialowner123456789abcdefghijk","token_id":"special999"}}
          msg: "eyJtaW50Ijp7ImV4dGVuc2lvbiI6eyJyYXJpdHkiOiJsZWdlbmRhcnkiLCJwb3dlciI6MTAwfSwib3duZXIiOiJpbml0MXNwZWNpYWxvd25lcjEyMzQ1Njc4OWFiY2RlZmdoaWprIiwidG9rZW5faWQiOiJzcGVjaWFsOTk5In19",
          sender: "init1minter123456789abcdefghijklmnopqr"
        }
      ],
      non_critical_extension_options: [],
      timeout_height: "0"
    },
    signatures: []
  },
  txhash: "CW721MINTBASE641234567890ABCDEF1234567890ABCDEF1234567890ABCD"
};
