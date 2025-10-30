/**
 * Mock fixture for generic WASM execute contract on WASM VM
 * This represents executing a contract function (increase_allowance)
 */
export const mockExecuteContract = {
  code: 0,
  codespace: "",
  data: "0A280A262F636F736D7761736D2E7761736D2E76312E4D736745786563757465436F6E7472616374",
  events: [
    {
      attributes: [
        {
          index: true,
          key: "spender",
          value: "init1abc123"
        },
        {
          index: true,
          key: "amount",
          value: "1000uinit"
        }
      ],
      type: "coin_spent"
    },
    {
      attributes: [
        {
          index: true,
          key: "receiver",
          value: "init1contractaddress"
        },
        {
          index: true,
          key: "amount",
          value: "1000uinit"
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
          value: "init1abc123"
        },
        {
          index: true,
          key: "module",
          value: "wasm"
        }
      ],
      type: "message"
    }
  ],
  gas_used: "150000",
  gas_wanted: "200000",
  height: "1000000",
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
          contract: "init1contractaddress",
          funds: [
            {
              amount: "1000",
              denom: "uinit"
            }
          ],
          msg: {
            increase_allowance: {
              amount: "1000000",
              spender: "init1spender"
            }
          },
          sender: "init1abc123"
        }
      ],
      non_critical_extension_options: [],
      timeout_height: "0"
    },
    signatures: []
  },
  txhash: "4A9A37E38D23CE08A0F9734F0A4EF4C14EB87E8B47FED7B48A96B0B0B0ABCDEF"
};

/**
 * Mock fixture for generic WASM execute contract with base64 encoded message
 * This represents executing a contract function (mint) with base64 encoded msg
 */
export const mockExecuteContractBase64 = {
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
          value: "init1xyz789"
        },
        {
          index: true,
          key: "module",
          value: "wasm"
        }
      ],
      type: "message"
    }
  ],
  gas_used: "150000",
  gas_wanted: "200000",
  height: "1000001",
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
          contract: "init1anothercontract",
          funds: [],
          // Base64 encoded: {"mint":{"amount":"5000000","recipient":"init1receiver"}}
          msg: "eyJtaW50Ijp7ImFtb3VudCI6IjUwMDAwMDAiLCJyZWNpcGllbnQiOiJpbml0MXJlY2VpdmVyIn19",
          sender: "init1xyz789"
        }
      ],
      non_critical_extension_options: [],
      timeout_height: "0"
    },
    signatures: []
  },
  txhash: "5B1B48F49E34DF19B1G0845G1B5FG5D25FC98F9C58GFE8C59BA7C1C1C1BCDEFG"
};
