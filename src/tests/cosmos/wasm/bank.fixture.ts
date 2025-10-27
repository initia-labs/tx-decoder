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
