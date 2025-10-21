/**
 * EVM transaction payload that mirrors a Cosmos bank send transaction.
 * The `input` field contains the Cosmos transaction hash.
 * This represents the dual-execution where a Cosmos tx is mirrored in EVM format for block consistency.
 */
export const mockEvmMirroredCosmosBankSendPayload = {
  tx: {
    blockHash:
      "0x30558444dba2609c0c0f437d109caa1579d57a1263cc2e1896e86d5e5330074f",
    blockNumber: "16349577",
    chainId: "9223372036854775790",
    from: "0x0000000000000000000000000000000000000000",
    gas: "0",
    gasPrice: "0",
    hash: "0xde734198458d1b763dc9f21554368412dd0eabff84617ee91e22394cf8fdb236",
    input: "0x765b1376d5666ea75c8ee1711c74567578858f9eca31f9cbb20045aed559993c",
    maxFeePerGas: "0",
    maxPriorityFeePerGas: "0",
    nonce: "0",
    r: "0x0",
    s: "0x0",
    to: null,
    transactionIndex: "1",
    type: "0x0",
    v: "0x0",
    value: "0"
  },
  txReceipt: {
    blockHash:
      "0x30558444dba2609c0c0f437d109caa1579d57a1263cc2e1896e86d5e5330074f",
    blockNumber: "16349577",
    contractAddress: null,
    cumulativeGasUsed: "141603",
    effectiveGasPrice: "0",
    from: "0x0000000000000000000000000000000000000000",
    gasUsed: "141603",
    logs: [
      {
        address: "0xe1ff7038eaaaf027031688e1535a055b2bac2546",
        blockHash:
          "0x30558444dba2609c0c0f437d109caa1579d57a1263cc2e1896e86d5e5330074f",
        blockNumber: "16349577",
        data: "0x000000000000000000000000000000000000000000000000000000eb120a9d00",
        logIndex: "0",
        removed: false,
        topics: [
          "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef",
          "0x000000000000000000000000b395c9f2e84f75b1686fcdc62f8cb62a572b7820",
          "0x000000000000000000000000f1829676db577682e944fc3493d451b67ff3e29f"
        ],
        transactionHash:
          "0xde734198458d1b763dc9f21554368412dd0eabff84617ee91e22394cf8fdb236",
        transactionIndex: "1"
      },
      {
        address: "0xe1ff7038eaaaf027031688e1535a055b2bac2546",
        blockHash:
          "0x30558444dba2609c0c0f437d109caa1579d57a1263cc2e1896e86d5e5330074f",
        blockNumber: "16349577",
        data: "0x000000000000000000000000000000000000000000000000000009184e72a000",
        logIndex: "1",
        removed: false,
        topics: [
          "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef",
          "0x000000000000000000000000b395c9f2e84f75b1686fcdc62f8cb62a572b7820",
          "0x000000000000000000000000992c4aec66368bfa88205b7edb58a3fa4a81fe73"
        ],
        transactionHash:
          "0xde734198458d1b763dc9f21554368412dd0eabff84617ee91e22394cf8fdb236",
        transactionIndex: "1"
      }
    ],
    logsBloom:
      "0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000010000010000000008000000000000000000000000000020000000000000400004000000000000000000000000000000000000000000002010000800000000000000000000000000000000000000000000000000000000000000000000000000001000000000000000000000002000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000800000000100000000000008",
    status: true,
    to: null,
    transactionHash:
      "0xde734198458d1b763dc9f21554368412dd0eabff84617ee91e22394cf8fdb236",
    transactionIndex: "1",
    type: "0x0"
  }
};

export const mockApiResponsesForCosmosMirrorBankSend = {
  GET: {
    "/cosmos/tx/v1beta1/txs/765B1376D5666EA75C8EE1711C74567578858F9ECA31F9CBB20045AED559993C":
      {
        tx_response: {
          code: 0,
          codespace: "",
          data: "12260A242F636F736D6F732E62616E6B2E763162657461312E4D736753656E64526573706F6E7365",
          events: [
            {
              attributes: [
                {
                  index: true,
                  key: "contract",
                  value: "0xE1Ff7038eAAAF027031688E1535a055B2Bac2546"
                },
                {
                  index: true,
                  key: "ret",
                  value: "0x"
                }
              ],
              type: "call"
            },
            {
              attributes: [
                {
                  index: true,
                  key: "log",
                  value:
                    '{"address":"0xE1Ff7038eAAAF027031688E1535a055B2Bac2546","topics":["0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef","0x000000000000000000000000b395c9f2e84f75b1686fcdc62f8cb62a572b7820","0x000000000000000000000000f1829676db577682e944fc3493d451b67ff3e29f"],"data":"0x000000000000000000000000000000000000000000000000000000eb120a9d00"}'
                }
              ],
              type: "evm"
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
                    "1009620000000evm/E1Ff7038eAAAF027031688E1535a055B2Bac2546"
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
                    "1009620000000evm/E1Ff7038eAAAF027031688E1535a055B2Bac2546"
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
                    "1009620000000evm/E1Ff7038eAAAF027031688E1535a055B2Bac2546"
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
                    "1009620000000evm/E1Ff7038eAAAF027031688E1535a055B2Bac2546"
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
                  value: "init1kw2unuhgfa6mz6r0ehrzlr9k9ftjk7pql8u5fm/17"
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
                    "mFkOox4Z53Wz6ClS8ETUhcI0rnoHmSo3rJx3RYgvFuRmHEbPHUL4BtvE+HHnbQU/ECAV+MZ9OsCWguHoEwT2UQ=="
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
                  key: "contract",
                  value: "0xE1Ff7038eAAAF027031688E1535a055B2Bac2546"
                },
                {
                  index: true,
                  key: "ret",
                  value: "0x"
                },
                {
                  index: true,
                  key: "msg_index",
                  value: "0"
                }
              ],
              type: "call"
            },
            {
              attributes: [
                {
                  index: true,
                  key: "log",
                  value:
                    '{"address":"0xE1Ff7038eAAAF027031688E1535a055B2Bac2546","topics":["0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef","0x000000000000000000000000b395c9f2e84f75b1686fcdc62f8cb62a572b7820","0x000000000000000000000000992c4aec66368bfa88205b7edb58a3fa4a81fe73"],"data":"0x000000000000000000000000000000000000000000000000000009184e72a000"}'
                },
                {
                  index: true,
                  key: "msg_index",
                  value: "0"
                }
              ],
              type: "evm"
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
                    "10000000000000evm/E1Ff7038eAAAF027031688E1535a055B2Bac2546"
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
                  value: "init1nyky4mrxx69l4zpqtdldkk9rlf9grlnn77djlh"
                },
                {
                  index: true,
                  key: "amount",
                  value:
                    "10000000000000evm/E1Ff7038eAAAF027031688E1535a055B2Bac2546"
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
                  value: "init1nyky4mrxx69l4zpqtdldkk9rlf9grlnn77djlh"
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
                    "10000000000000evm/E1Ff7038eAAAF027031688E1535a055B2Bac2546"
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
          gas_used: "141603",
          gas_wanted: "201924",
          height: "16349577",
          info: "",
          logs: [],
          raw_log: "",
          timestamp: "2025-10-19T18:15:53Z",
          tx: {
            "@type": "/cosmos.tx.v1beta1.Tx",
            auth_info: {
              fee: {
                amount: [
                  {
                    amount: "1009620000000",
                    denom: "evm/E1Ff7038eAAAF027031688E1535a055B2Bac2546"
                  }
                ],
                gas_limit: "201924",
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
                  sequence: "17"
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
                      amount: "10000000000000",
                      denom: "evm/E1Ff7038eAAAF027031688E1535a055B2Bac2546"
                    }
                  ],
                  from_address: "init1kw2unuhgfa6mz6r0ehrzlr9k9ftjk7pql8u5fm",
                  to_address: "init1nyky4mrxx69l4zpqtdldkk9rlf9grlnn77djlh"
                }
              ],
              non_critical_extension_options: [],
              timeout_height: "0"
            },
            signatures: [
              "mFkOox4Z53Wz6ClS8ETUhcI0rnoHmSo3rJx3RYgvFuRmHEbPHUL4BtvE+HHnbQU/ECAV+MZ9OsCWguHoEwT2UQ=="
            ]
          },
          txhash:
            "765B1376D5666EA75C8EE1711C74567578858F9ECA31F9CBB20045AED559993C"
        }
      }
  }
};
