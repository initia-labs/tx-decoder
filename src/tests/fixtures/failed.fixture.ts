export const mockMsgFailed = {
  code: 1,
  codespace: "undefined",
  data: "",
  events: [
    {
      attributes: [
        {
          index: true,
          key: "sender",
          value: "0x1,0x8a4136ab0e81a533f7cfafafe4f6fb9f314130a2"
        },
        {
          index: true,
          key: "module_addr",
          value: "0x1"
        },
        {
          index: true,
          key: "module_name",
          value: "coin"
        },
        {
          index: true,
          key: "function_name",
          value: "sudo_transfer"
        }
      ],
      type: "execute"
    },
    {
      attributes: [
        {
          index: true,
          key: "type_tag",
          value: "0x1::fungible_asset::WithdrawEvent"
        },
        {
          index: true,
          key: "data",
          value:
            '{"store_addr":"0x27eb49f2bfecacbb9a74df750c564fc7af02ec9da58440c42a6045474ca758ab","metadata_addr":"0x8e4733bdabcf7d4afc3d14f0dd46c9bf52fb0fce9e4b996c939e195b8bc891d9","amount":"54798"}'
        }
      ],
      type: "move"
    },
    {
      attributes: [
        {
          index: true,
          key: "type_tag",
          value: "0x1::fungible_asset::DepositEvent"
        },
        {
          index: true,
          key: "data",
          value:
            '{"store_addr":"0x66a8cb0bfb991610dcffb8a6543ac0887c7c5405b8f985ebed6d628fe50c4686","metadata_addr":"0x8e4733bdabcf7d4afc3d14f0dd46c9bf52fb0fce9e4b996c939e195b8bc891d9","amount":"54798"}'
        }
      ],
      type: "move"
    },
    {
      attributes: [
        {
          index: true,
          key: "spender",
          value: "init13fqnd2cwsxjn8a7047h7fahmnuc5zv9zw3z9yr"
        },
        {
          index: true,
          key: "amount",
          value: "54798uinit"
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
          value: "54798uinit"
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
          value: "init13fqnd2cwsxjn8a7047h7fahmnuc5zv9zw3z9yr"
        },
        {
          index: true,
          key: "amount",
          value: "54798uinit"
        }
      ],
      type: "transfer"
    },
    {
      attributes: [
        {
          index: true,
          key: "sender",
          value: "init13fqnd2cwsxjn8a7047h7fahmnuc5zv9zw3z9yr"
        }
      ],
      type: "message"
    },
    {
      attributes: [
        {
          index: true,
          key: "fee",
          value: "54798uinit"
        },
        {
          index: true,
          key: "fee_payer",
          value: "init13fqnd2cwsxjn8a7047h7fahmnuc5zv9zw3z9yr"
        }
      ],
      type: "tx"
    },
    {
      attributes: [
        {
          index: true,
          key: "acc_seq",
          value: "init13fqnd2cwsxjn8a7047h7fahmnuc5zv9zw3z9yr/1295"
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
            "OErAAhbu1iTXqG9SNG9Cdu1vXyFrAeIeoa93U2t2zmNOrRhDOTAMjxQ2Bj6h57do5tnuUBbDEHUAY/CLkKNXhg=="
        }
      ],
      type: "tx"
    }
  ],
  gas_used: "209173",
  gas_wanted: "365314",
  height: "4593411",
  info: "",
  logs: [],
  raw_log:
    "failed to execute message; message index: 0: VM failure: status ARITHMETIC_ERROR of type Execution with message Subtraction overflow, location=0000000000000000000000000000000000000000000000000000000000000001::dex, function=7, code_offset=75",
  timestamp: "2025-07-04T08:39:54Z",
  tx: {
    "@type": "/cosmos.tx.v1beta1.Tx",
    auth_info: {
      fee: {
        amount: [
          {
            amount: "54798",
            denom: "uinit"
          }
        ],
        gas_limit: "365314",
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
            key: "AyFBhynQlgQYe2AJzO1Zr0jGUfCs+qyAoe09oKiBsBST"
          },
          sequence: "1295"
        }
      ],
      tip: null
    },
    body: {
      extension_options: [],
      memo: "sample memo",
      messages: [
        {
          "@type": "/initia.move.v1.MsgExecute",
          args: ["Ls+3jkSuC4mNj/uufFwP+ad2ymHdNRQ1PGM5Mh0I2sQ="],
          function_name: "provide",
          module_address: "0xd8cba23cdaf8e969fd17c8eabecf82a4f002ee8d",
          module_name: "drop_lp",
          sender: "init13fqnd2cwsxjn8a7047h7fahmnuc5zv9zw3z9yr",
          type_args: []
        }
      ],
      non_critical_extension_options: [],
      timeout_height: "0"
    },
    signatures: [
      "OErAAhbu1iTXqG9SNG9Cdu1vXyFrAeIeoa93U2t2zmNOrRhDOTAMjxQ2Bj6h57do5tnuUBbDEHUAY/CLkKNXhg=="
    ]
  },
  txhash: "B6C52A247196F6D4C361F57C84E74867E871D41430FA93AAD2CC3274015ED638"
};
