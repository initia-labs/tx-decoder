export const mockMsgSendWasm = {
  code: 0,
  codespace: "",
  data: "12260A242F636F736D6F732E62616E6B2E763162657461312E4D736753656E64526573706F6E7365",
  events: [
    {
      attributes: [
        {
          index: true,
          key: "spender",
          value: "init1yrs3xrph7pj6napfud94t8zr9ldkcz4z7dvyx9"
        },
        {
          index: true,
          key: "amount",
          value:
            "5271l2/fb936ffef4eb4019d82941992cc09ae2788ce7197fcb08cb00c4fe6f5e79184e"
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
            "5271l2/fb936ffef4eb4019d82941992cc09ae2788ce7197fcb08cb00c4fe6f5e79184e"
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
          value: "init1yrs3xrph7pj6napfud94t8zr9ldkcz4z7dvyx9"
        },
        {
          index: true,
          key: "amount",
          value:
            "5271l2/fb936ffef4eb4019d82941992cc09ae2788ce7197fcb08cb00c4fe6f5e79184e"
        }
      ],
      type: "transfer"
    },
    {
      attributes: [
        {
          index: true,
          key: "sender",
          value: "init1yrs3xrph7pj6napfud94t8zr9ldkcz4z7dvyx9"
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
            "5271l2/fb936ffef4eb4019d82941992cc09ae2788ce7197fcb08cb00c4fe6f5e79184e"
        },
        {
          index: true,
          key: "fee_payer",
          value: "init1yrs3xrph7pj6napfud94t8zr9ldkcz4z7dvyx9"
        }
      ],
      type: "tx"
    },
    {
      attributes: [
        {
          index: true,
          key: "acc_seq",
          value: "init1yrs3xrph7pj6napfud94t8zr9ldkcz4z7dvyx9/12"
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
            "AJG25yYGcQHLAWtoXl9b8BOzZokqPpE+FIaBVAvvZewVwkt5JtzEiDHi4J2087ZvTveDs+Olc1jOGFUsGiWJuA=="
        }
      ],
      type: "tx"
    },
    {
      attributes: [
        {
          index: true,
          key: "action",
          value: "/cosmos.bank.v1beta1.MsgSend"
        },
        {
          index: true,
          key: "sender",
          value: "init1yrs3xrph7pj6napfud94t8zr9ldkcz4z7dvyx9"
        },
        {
          index: true,
          key: "module",
          value: "bank"
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
          key: "spender",
          value: "init1yrs3xrph7pj6napfud94t8zr9ldkcz4z7dvyx9"
        },
        {
          index: true,
          key: "amount",
          value:
            "41l2/fb936ffef4eb4019d82941992cc09ae2788ce7197fcb08cb00c4fe6f5e79184e"
        },
        {
          index: true,
          key: "msg_index",
          value: "0"
        }
      ],
      type: "coin_spent"
    },
    {
      attributes: [
        {
          index: true,
          key: "receiver",
          value: "init1jwte7rs3p5clnmn73at9ft2s3ad246dvtec8uh"
        },
        {
          index: true,
          key: "amount",
          value:
            "41l2/fb936ffef4eb4019d82941992cc09ae2788ce7197fcb08cb00c4fe6f5e79184e"
        },
        {
          index: true,
          key: "msg_index",
          value: "0"
        }
      ],
      type: "coin_received"
    },
    {
      attributes: [
        {
          index: true,
          key: "recipient",
          value: "init1jwte7rs3p5clnmn73at9ft2s3ad246dvtec8uh"
        },
        {
          index: true,
          key: "sender",
          value: "init1yrs3xrph7pj6napfud94t8zr9ldkcz4z7dvyx9"
        },
        {
          index: true,
          key: "amount",
          value:
            "41l2/fb936ffef4eb4019d82941992cc09ae2788ce7197fcb08cb00c4fe6f5e79184e"
        },
        {
          index: true,
          key: "msg_index",
          value: "0"
        }
      ],
      type: "transfer"
    },
    {
      attributes: [
        {
          index: true,
          key: "sender",
          value: "init1yrs3xrph7pj6napfud94t8zr9ldkcz4z7dvyx9"
        },
        {
          index: true,
          key: "msg_index",
          value: "0"
        }
      ],
      type: "message"
    }
  ],
  gas_used: "109193",
  gas_wanted: "175681",
  height: "509806",
  info: "",
  logs: [],
  raw_log: "",
  timestamp: "2025-10-26T01:20:52Z",
  tx: {
    "@type": "/cosmos.tx.v1beta1.Tx",
    auth_info: {
      fee: {
        amount: [
          {
            amount: "5271",
            denom:
              "l2/fb936ffef4eb4019d82941992cc09ae2788ce7197fcb08cb00c4fe6f5e79184e"
          }
        ],
        gas_limit: "175681",
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
          sequence: "12"
        }
      ],
      tip: null
    },
    body: {
      extension_options: [],
      memo: "",
      messages: [
        {
          "@type": "/cosmos.bank.v1beta1.MsgSend",
          amount: [
            {
              amount: "41",
              denom:
                "l2/fb936ffef4eb4019d82941992cc09ae2788ce7197fcb08cb00c4fe6f5e79184e"
            }
          ],
          from_address: "init1yrs3xrph7pj6napfud94t8zr9ldkcz4z7dvyx9",
          to_address: "init1jwte7rs3p5clnmn73at9ft2s3ad246dvtec8uh"
        }
      ],
      non_critical_extension_options: [],
      timeout_height: "0"
    },
    signatures: [
      "AJG25yYGcQHLAWtoXl9b8BOzZokqPpE+FIaBVAvvZewVwkt5JtzEiDHi4J2087ZvTveDs+Olc1jOGFUsGiWJuA=="
    ]
  },
  txhash: "E6B70170747E9B7E6A33CEF1AD800EC7FE2641366888BE3BEA90BBCCD4A2198C"
};

/**
 * Mock fixture for multi-coin transfer on WASM VM
 * Tests that the transfer processor correctly handles multiple coins in a single transfer event
 * Transfer event has amount: "100uinit,200ufoo" which should be parsed into separate balance changes
 */
export const mockMsgSendMultiCoinWasm = {
  code: 0,
  codespace: "",
  data: "12260A242F636F736D6F732E62616E6B2E763162657461312E4D736753656E64526573706F6E7365",
  events: [
    {
      attributes: [
        {
          index: true,
          key: "recipient",
          value: "init1receiver123456789abcdefghijklmno"
        },
        {
          index: true,
          key: "sender",
          value: "init1sender123456789abcdefghijklmnopqr"
        },
        {
          index: true,
          key: "amount",
          value: "100uinit,200ufoo" // Multiple coins in comma-separated format
        },
        {
          index: true,
          key: "msg_index",
          value: "0"
        }
      ],
      type: "transfer"
    }
  ],
  gas_used: "109193",
  gas_wanted: "175681",
  height: "509806",
  info: "",
  logs: [],
  raw_log: "",
  timestamp: "2025-10-26T01:20:52Z",
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
        gas_limit: "175681",
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
          sequence: "12"
        }
      ],
      tip: null
    },
    body: {
      extension_options: [],
      memo: "",
      messages: [
        {
          "@type": "/cosmos.bank.v1beta1.MsgSend",
          amount: [
            {
              amount: "100",
              denom: "uinit"
            },
            {
              amount: "200",
              denom: "ufoo"
            }
          ],
          from_address: "init1sender123456789abcdefghijklmnopqr",
          to_address: "init1receiver123456789abcdefghijklmno"
        }
      ],
      non_critical_extension_options: [],
      timeout_height: "0"
    },
    signatures: [
      "AJG25yYGcQHLAWtoXl9b8BOzZokqPpE+FIaBVAvvZewVwkt5JtzEiDHi4J2087ZvTveDs+Olc1jOGFUsGiWJuA=="
    ]
  },
  txhash: "MULTI123170747E9B7E6A33CEF1AD800EC7FE2641366888BE3BEA90BBCCD4A2198C"
};

/**
 * Mock fixture for self-transfer on WASM VM
 * Tests that the transfer processor correctly handles self-transfers (sender === recipient)
 * In self-transfer cases, the net balance change should be "0" to avoid key collision
 * The transfer event has sender and recipient both set to "init1kw2unuhgfa6mz6r0ehrzlr9k9ftjk7pql8u5fm"
 */
export const mockMsgSendSelfTransferWasm = {
  code: 0,
  codespace: "",
  data: "12260A242F636F736D6F732E62616E6B2E763162657461312E4D736753656E64526573706F6E7365",
  events: [
    {
      attributes: [
        {
          index: true,
          key: "spender",
          value: "init1kw2unuhgfa6mz6r0ehrzlr9k9ftjk7pql8u5fm"
        },
        {
          index: true,
          key: "amount",
          value:
            "4721l2/fb936ffef4eb4019d82941992cc09ae2788ce7197fcb08cb00c4fe6f5e79184e"
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
            "4721l2/fb936ffef4eb4019d82941992cc09ae2788ce7197fcb08cb00c4fe6f5e79184e"
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
          value: "init1kw2unuhgfa6mz6r0ehrzlr9k9ftjk7pql8u5fm"
        },
        {
          index: true,
          key: "amount",
          value:
            "4721l2/fb936ffef4eb4019d82941992cc09ae2788ce7197fcb08cb00c4fe6f5e79184e"
        }
      ],
      type: "transfer"
    },
    {
      attributes: [
        {
          index: true,
          key: "sender",
          value: "init1kw2unuhgfa6mz6r0ehrzlr9k9ftjk7pql8u5fm"
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
            "4721l2/fb936ffef4eb4019d82941992cc09ae2788ce7197fcb08cb00c4fe6f5e79184e"
        },
        {
          index: true,
          key: "fee_payer",
          value: "init1kw2unuhgfa6mz6r0ehrzlr9k9ftjk7pql8u5fm"
        }
      ],
      type: "tx"
    },
    {
      attributes: [
        {
          index: true,
          key: "acc_seq",
          value: "init1kw2unuhgfa6mz6r0ehrzlr9k9ftjk7pql8u5fm/1"
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
          value: "/cosmos.bank.v1beta1.MsgSend"
        },
        {
          index: true,
          key: "sender",
          value: "init1kw2unuhgfa6mz6r0ehrzlr9k9ftjk7pql8u5fm"
        },
        {
          index: true,
          key: "module",
          value: "bank"
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
          key: "spender",
          value: "init1kw2unuhgfa6mz6r0ehrzlr9k9ftjk7pql8u5fm"
        },
        {
          index: true,
          key: "amount",
          value:
            "10000l2/fb936ffef4eb4019d82941992cc09ae2788ce7197fcb08cb00c4fe6f5e79184e"
        },
        {
          index: true,
          key: "msg_index",
          value: "0"
        }
      ],
      type: "coin_spent"
    },
    {
      attributes: [
        {
          index: true,
          key: "receiver",
          value: "init1kw2unuhgfa6mz6r0ehrzlr9k9ftjk7pql8u5fm"
        },
        {
          index: true,
          key: "amount",
          value:
            "10000l2/fb936ffef4eb4019d82941992cc09ae2788ce7197fcb08cb00c4fe6f5e79184e"
        },
        {
          index: true,
          key: "msg_index",
          value: "0"
        }
      ],
      type: "coin_received"
    },
    {
      attributes: [
        {
          index: true,
          key: "recipient",
          value: "init1kw2unuhgfa6mz6r0ehrzlr9k9ftjk7pql8u5fm"
        },
        {
          index: true,
          key: "sender",
          value: "init1kw2unuhgfa6mz6r0ehrzlr9k9ftjk7pql8u5fm"
        },
        {
          index: true,
          key: "amount",
          value:
            "10000l2/fb936ffef4eb4019d82941992cc09ae2788ce7197fcb08cb00c4fe6f5e79184e"
        },
        {
          index: true,
          key: "msg_index",
          value: "0"
        }
      ],
      type: "transfer"
    },
    {
      attributes: [
        {
          index: true,
          key: "sender",
          value: "init1kw2unuhgfa6mz6r0ehrzlr9k9ftjk7pql8u5fm"
        },
        {
          index: true,
          key: "msg_index",
          value: "0"
        }
      ],
      type: "message"
    }
  ],
  gas_used: "96104",
  gas_wanted: "157356",
  height: "511572",
  info: "",
  logs: [],
  raw_log: "",
  timestamp: "2025-10-27T04:35:21Z",
  tx: {
    "@type": "/cosmos.tx.v1beta1.Tx",
    auth_info: {
      fee: {
        amount: [
          {
            amount: "4721",
            denom:
              "l2/fb936ffef4eb4019d82941992cc09ae2788ce7197fcb08cb00c4fe6f5e79184e"
          }
        ],
        gas_limit: "157356",
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
            key: "Axdt0OtFq4TF/TA4EnlF4J0Lv6E+9jFccR2/ULQVXP2a"
          },
          sequence: "1"
        }
      ],
      tip: null
    },
    body: {
      extension_options: [],
      memo: "",
      messages: [
        {
          "@type": "/cosmos.bank.v1beta1.MsgSend",
          amount: [
            {
              amount: "10000",
              denom:
                "l2/fb936ffef4eb4019d82941992cc09ae2788ce7197fcb08cb00c4fe6f5e79184e"
            }
          ],
          from_address: "init1kw2unuhgfa6mz6r0ehrzlr9k9ftjk7pql8u5fm",
          to_address: "init1kw2unuhgfa6mz6r0ehrzlr9k9ftjk7pql8u5fm"
        }
      ],
      non_critical_extension_options: [],
      timeout_height: "0"
    },
    signatures: [
      "wAl8ckyz35jsc0dd1WKYjdMyY8LwmyNQ7mzcgHs72w8h09w2ZDfjdfNWMgIjQ5/3/yTS/umAt8e/5bHKqPNJvA=="
    ]
  },
  txhash: "7CC1396C1C35555F2FD815C5B7E5521C86DE4DE96D5501C63959E5F8337B94DC"
};
