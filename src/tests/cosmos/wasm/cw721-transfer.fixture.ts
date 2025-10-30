/**
 * Mock fixture for CW-721 NFT transfer on WASM VM
 * This represents a transfer of an NFT from one address to another
 */
export const mockCw721Transfer = {
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
          value: "transfer_nft"
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
          key: "token_id",
          value: "token123"
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
  height: "700000",
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
          "@type": "/cosmwasm.wasm.v1.MsgExecuteContract",
          contract: "init1nftcontract123456789abcdefghijkl",
          funds: [],
          msg: {
            transfer_nft: {
              recipient: "init1receiver123456789abcdefghijklmno",
              token_id: "token123"
            }
          },
          sender: "init1sender123456789abcdefghijklmnopqr"
        }
      ],
      non_critical_extension_options: [],
      timeout_height: "0"
    },
    signatures: []
  },
  txhash: "CW721TRANSFER1234567890ABCDEF1234567890ABCDEF1234567890ABCDEF12"
};

/**
 * Mock fixture for CW-721 NFT transfer with base64 encoded message
 */
export const mockCw721TransferBase64 = {
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
          value: "init1sender123456789abcdefghijklmnopqr"
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
          value: "transfer_nft"
        },
        {
          index: true,
          key: "from",
          value: "init1sender123456789abcdefghijklmnopqr"
        },
        {
          index: true,
          key: "to",
          value: "init1newowner123456789abcdefghijklmno"
        },
        {
          index: true,
          key: "token_id",
          value: "nft456"
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
  gas_used: "140000",
  gas_wanted: "180000",
  height: "700001",
  info: "",
  logs: [],
  raw_log: "",
  timestamp: "2025-10-30T10:05:00Z",
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
        gas_limit: "180000",
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
          // Base64 encoded: {"transfer_nft":{"recipient":"init1newowner123456789abcdefghijklmno","token_id":"nft456"}}
          msg: "eyJ0cmFuc2Zlcl9uZnQiOnsicmVjaXBpZW50IjoiaW5pdDFuZXdvd25lcjEyMzQ1Njc4OWFiY2RlZmdoaWprbG1ubyIsInRva2VuX2lkIjoibmZ0NDU2In19",
          sender: "init1sender123456789abcdefghijklmnopqr"
        }
      ],
      non_critical_extension_options: [],
      timeout_height: "0"
    },
    signatures: []
  },
  txhash: "CW721TRANSFERBASE641234567890ABCDEF1234567890ABCDEF1234567890A"
};
