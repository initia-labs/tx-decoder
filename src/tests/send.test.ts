import { decodeTx } from "../index";

describe("Transaction Decoder", () => {
  it("should decode a simple send transaction correctly", () => {
    const sendTxResponse = {
      code: 0,
      codespace: "",
      data: "12260A242F636F736D6F732E62616E6B2E763162657461312E4D736753656E64526573706F6E7365",
      events: [
        {
          attributes: [
            {
              index: true,
              key: "sender",
              value: "0x1,0x6e1818d1e5e86b48287fc7b63b1532996dcbd447",
            },
            {
              index: true,
              key: "module_addr",
              value: "0x1",
            },
            {
              index: true,
              key: "module_name",
              value: "coin",
            },
            {
              index: true,
              key: "function_name",
              value: "sudo_transfer",
            },
          ],
          type: "execute",
        },
        {
          attributes: [
            {
              index: true,
              key: "type_tag",
              value: "0x1::fungible_asset::WithdrawEvent",
            },
            {
              index: true,
              key: "data",
              value:
                '{"amount":"43271","metadata_addr":"0x8e4733bdabcf7d4afc3d14f0dd46c9bf52fb0fce9e4b996c939e195b8bc891d9","store_addr":"0xf46000d9990fe57ea22069e3accab667de3f53a5813248f0030dacf8c16e18f3"}',
            },
          ],
          type: "move",
        },
        {
          attributes: [
            {
              index: true,
              key: "type_tag",
              value: "0x1::fungible_asset::DepositEvent",
            },
            {
              index: true,
              key: "data",
              value:
                '{"amount":"43271","metadata_addr":"0x8e4733bdabcf7d4afc3d14f0dd46c9bf52fb0fce9e4b996c939e195b8bc891d9","store_addr":"0x66a8cb0bfb991610dcffb8a6543ac0887c7c5405b8f985ebed6d628fe50c4686"}',
            },
          ],
          type: "move",
        },
        {
          attributes: [
            {
              index: true,
              key: "spender",
              value: "init1dcvp3509ap45s2rlc7mrk9fjn9kuh4z8cy0jcr",
            },
            {
              index: true,
              key: "amount",
              value: "43271uinit",
            },
          ],
          type: "coin_spent",
        },
        {
          attributes: [
            {
              index: true,
              key: "receiver",
              value: "init17xpfvakm2amg962yls6f84z3kell8c5l70rnql",
            },
            {
              index: true,
              key: "amount",
              value: "43271uinit",
            },
          ],
          type: "coin_received",
        },
        {
          attributes: [
            {
              index: true,
              key: "recipient",
              value: "init17xpfvakm2amg962yls6f84z3kell8c5l70rnql",
            },
            {
              index: true,
              key: "sender",
              value: "init1dcvp3509ap45s2rlc7mrk9fjn9kuh4z8cy0jcr",
            },
            {
              index: true,
              key: "amount",
              value: "43271uinit",
            },
          ],
          type: "transfer",
        },
        {
          attributes: [
            {
              index: true,
              key: "sender",
              value: "init1dcvp3509ap45s2rlc7mrk9fjn9kuh4z8cy0jcr",
            },
          ],
          type: "message",
        },
        {
          attributes: [
            {
              index: true,
              key: "fee",
              value: "43271uinit",
            },
            {
              index: true,
              key: "fee_payer",
              value: "init1dcvp3509ap45s2rlc7mrk9fjn9kuh4z8cy0jcr",
            },
          ],
          type: "tx",
        },
        {
          attributes: [
            {
              index: true,
              key: "acc_seq",
              value: "init1dcvp3509ap45s2rlc7mrk9fjn9kuh4z8cy0jcr/23",
            },
          ],
          type: "tx",
        },
        {
          attributes: [
            {
              index: true,
              key: "signature",
              value:
                "ECfM2JhzICEVuyj93l3tU8vnvfEuYlMH66bfG1leflF4xU8s7iwSse8NW6Ab6KBTSMCN+uzZg1EGj/v1vrpaCg==",
            },
          ],
          type: "tx",
        },
        {
          attributes: [
            {
              index: true,
              key: "action",
              value: "/cosmos.bank.v1beta1.MsgSend",
            },
            {
              index: true,
              key: "sender",
              value: "init1dcvp3509ap45s2rlc7mrk9fjn9kuh4z8cy0jcr",
            },
            {
              index: true,
              key: "module",
              value: "bank",
            },
            {
              index: true,
              key: "msg_index",
              value: "0",
            },
          ],
          type: "message",
        },
        {
          attributes: [
            {
              index: true,
              key: "sender",
              value: "0x1,0x6e1818d1e5e86b48287fc7b63b1532996dcbd447",
            },
            {
              index: true,
              key: "module_addr",
              value: "0x1",
            },
            {
              index: true,
              key: "module_name",
              value: "coin",
            },
            {
              index: true,
              key: "function_name",
              value: "sudo_transfer",
            },
            {
              index: true,
              key: "msg_index",
              value: "0",
            },
          ],
          type: "execute",
        },
        {
          attributes: [
            {
              index: true,
              key: "type_tag",
              value: "0x1::object::CreateEvent",
            },
            {
              index: true,
              key: "data",
              value:
                '{"object":"0x8a266f4ca0b407677ecabd8a47e5629c9e0ac233fa8d6ba4ce51153f34477b3e","owner":"0xc4207caee27090284b40d621924f7d8cb6b3a9ff","version":"1"}',
            },
            {
              index: true,
              key: "msg_index",
              value: "0",
            },
          ],
          type: "move",
        },
        {
          attributes: [
            {
              index: true,
              key: "type_tag",
              value: "0x1::primary_fungible_store::PrimaryStoreCreatedEvent",
            },
            {
              index: true,
              key: "data",
              value:
                '{"metadata_addr":"0x8e4733bdabcf7d4afc3d14f0dd46c9bf52fb0fce9e4b996c939e195b8bc891d9","owner_addr":"0xc4207caee27090284b40d621924f7d8cb6b3a9ff","store_addr":"0x8a266f4ca0b407677ecabd8a47e5629c9e0ac233fa8d6ba4ce51153f34477b3e"}',
            },
            {
              index: true,
              key: "msg_index",
              value: "0",
            },
          ],
          type: "move",
        },
        {
          attributes: [
            {
              index: true,
              key: "type_tag",
              value: "0x1::fungible_asset::WithdrawEvent",
            },
            {
              index: true,
              key: "data",
              value:
                '{"amount":"1000000","metadata_addr":"0x8e4733bdabcf7d4afc3d14f0dd46c9bf52fb0fce9e4b996c939e195b8bc891d9","store_addr":"0xf46000d9990fe57ea22069e3accab667de3f53a5813248f0030dacf8c16e18f3"}',
            },
            {
              index: true,
              key: "msg_index",
              value: "0",
            },
          ],
          type: "move",
        },
        {
          attributes: [
            {
              index: true,
              key: "type_tag",
              value: "0x1::fungible_asset::DepositEvent",
            },
            {
              index: true,
              key: "data",
              value:
                '{"amount":"1000000","metadata_addr":"0x8e4733bdabcf7d4afc3d14f0dd46c9bf52fb0fce9e4b996c939e195b8bc891d9","store_addr":"0x8a266f4ca0b407677ecabd8a47e5629c9e0ac233fa8d6ba4ce51153f34477b3e"}',
            },
            {
              index: true,
              key: "msg_index",
              value: "0",
            },
          ],
          type: "move",
        },
        {
          attributes: [
            {
              index: true,
              key: "spender",
              value: "init1dcvp3509ap45s2rlc7mrk9fjn9kuh4z8cy0jcr",
            },
            {
              index: true,
              key: "amount",
              value: "1000000uinit",
            },
            {
              index: true,
              key: "msg_index",
              value: "0",
            },
          ],
          type: "coin_spent",
        },
        {
          attributes: [
            {
              index: true,
              key: "receiver",
              value: "init1css8ethzwzgzsj6q6cseynma3jmt820lk0hqpl",
            },
            {
              index: true,
              key: "amount",
              value: "1000000uinit",
            },
            {
              index: true,
              key: "msg_index",
              value: "0",
            },
          ],
          type: "coin_received",
        },
        {
          attributes: [
            {
              index: true,
              key: "recipient",
              value: "init1css8ethzwzgzsj6q6cseynma3jmt820lk0hqpl",
            },
            {
              index: true,
              key: "sender",
              value: "init1dcvp3509ap45s2rlc7mrk9fjn9kuh4z8cy0jcr",
            },
            {
              index: true,
              key: "amount",
              value: "1000000uinit",
            },
            {
              index: true,
              key: "msg_index",
              value: "0",
            },
          ],
          type: "transfer",
        },
        {
          attributes: [
            {
              index: true,
              key: "sender",
              value: "init1dcvp3509ap45s2rlc7mrk9fjn9kuh4z8cy0jcr",
            },
            {
              index: true,
              key: "msg_index",
              value: "0",
            },
          ],
          type: "message",
        },
      ],
      gas_used: "200816",
      gas_wanted: "288473",
      height: "3711014",
      info: "",
      logs: [],
      raw_log: "",
      timestamp: "2025-01-02T07:59:54Z",
      tx: {
        "@type": "/cosmos.tx.v1beta1.Tx",
        auth_info: {
          fee: {
            amount: [
              {
                amount: "43271",
                denom: "uinit",
              },
            ],
            gas_limit: "288473",
            granter: "",
            payer: "",
          },
          signer_infos: [
            {
              mode_info: {
                single: {
                  mode: "SIGN_MODE_DIRECT",
                },
              },
              public_key: {
                "@type": "/cosmos.crypto.secp256k1.PubKey",
                key: "AzoGBZIzv7eTVsEWqPVw+VRav0Xe0Lwk1xlXtPo9r0MV",
              },
              sequence: "23",
            },
          ],
          tip: null,
        },
        body: {
          extension_options: [],
          memo: "",
          messages: [
            {
              "@type": "/cosmos.bank.v1beta1.MsgSend",
              amount: [
                {
                  amount: "1000000",
                  denom: "uinit",
                },
              ],
              from_address: "init1dcvp3509ap45s2rlc7mrk9fjn9kuh4z8cy0jcr",
              to_address: "init1css8ethzwzgzsj6q6cseynma3jmt820lk0hqpl",
            },
          ],
          non_critical_extension_options: [],
          timeout_height: "0",
        },
        signatures: [
          "ECfM2JhzICEVuyj93l3tU8vnvfEuYlMH66bfG1leflF4xU8s7iwSse8NW6Ab6KBTSMCN+uzZg1EGj/v1vrpaCg==",
        ],
      },
      txhash:
        "25E973182D5377DE9760A42822F91DFF15F39AE8C838CAAEA20AFE4D6D538A58",
    };

    const decoded = decodeTx(sendTxResponse);

    expect(decoded?.messages).toHaveLength(1);
    const message = decoded?.messages[0];

    if (message.action === "send") {
      expect(message.action === "send").toBe(true);
      expect(
        message.data.from === "init1dcvp3509ap45s2rlc7mrk9fjn9kuh4z8cy0jcr"
      ).toBe(true);
      expect(
        message.data.to === "init1css8ethzwzgzsj6q6cseynma3jmt820lk0hqpl"
      ).toBe(true);
      expect(message.data.amount === "1000000").toBe(true);
      expect(message.data.denom === "uinit").toBe(true);
    }

    expect(
      decoded.balanceChanges.ft["init1dcvp3509ap45s2rlc7mrk9fjn9kuh4z8cy0jcr"][
        "uinit"
      ]
    ).toBe("-1000000");
    expect(
      decoded.balanceChanges.ft["init1css8ethzwzgzsj6q6cseynma3jmt820lk0hqpl"][
        "uinit"
      ]
    ).toBe("1000000");
  });
});
