export const mockMsgNftBurn = {
  code: 0,
  codespace: "",
  data: "12280A262F696E697469612E6D6F76652E76312E4D7367457865637574654A534F4E526573706F6E7365",
  events: [
    {
      attributes: [
        {
          index: true,
          key: "sender",
          value: "0x1,0x596de3ee0472f3a91aa219ac12d43d2f0bfef4a1"
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
            '{"store_addr":"0x674779659018404f3bb32fdd5a10d255507a4e40e580b04b5887fe715f36194","metadata_addr":"0xe0e9394b24e53775d6af87934ac02d73536ad58b7894f6ccff3f5e7c0d548e55","amount":"1438"}'
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
            '{"store_addr":"0x5c8edb2aff315409e899a3cbabeaa8741eb8044448d2c28a37a8d0d6e5d96528","metadata_addr":"0xe0e9394b24e53775d6af87934ac02d73536ad58b7894f6ccff3f5e7c0d548e55","amount":"1438"}'
        }
      ],
      type: "move"
    },
    {
      attributes: [
        {
          index: true,
          key: "spender",
          value: "init1t9k78msywte6jx4zrxkp94pa9u9laa9pqfpytk"
        },
        {
          index: true,
          key: "amount",
          value:
            "1438ibc/6490A7EAB61059BFC1CDDEB05917DD70BDF3A611654162A1A47DB930D40D8AF4"
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
            "1438ibc/6490A7EAB61059BFC1CDDEB05917DD70BDF3A611654162A1A47DB930D40D8AF4"
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
          value: "init1t9k78msywte6jx4zrxkp94pa9u9laa9pqfpytk"
        },
        {
          index: true,
          key: "amount",
          value:
            "1438ibc/6490A7EAB61059BFC1CDDEB05917DD70BDF3A611654162A1A47DB930D40D8AF4"
        }
      ],
      type: "transfer"
    },
    {
      attributes: [
        {
          index: true,
          key: "sender",
          value: "init1t9k78msywte6jx4zrxkp94pa9u9laa9pqfpytk"
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
            "1438ibc/6490A7EAB61059BFC1CDDEB05917DD70BDF3A611654162A1A47DB930D40D8AF4"
        },
        {
          index: true,
          key: "fee_payer",
          value: "init1t9k78msywte6jx4zrxkp94pa9u9laa9pqfpytk"
        }
      ],
      type: "tx"
    },
    {
      attributes: [
        {
          index: true,
          key: "acc_seq",
          value: "init1t9k78msywte6jx4zrxkp94pa9u9laa9pqfpytk/20"
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
            "hoEEXgcq8YycWwcQcORdccUEMlFHYiFar+01aqgp3JNa/40Oom7yYd9GNfx1ISFfPYKRPFY8Rw4I45kXSByWuw=="
        }
      ],
      type: "tx"
    },
    {
      attributes: [
        {
          index: true,
          key: "action",
          value: "/initia.move.v1.MsgExecuteJSON"
        },
        {
          index: true,
          key: "sender",
          value: "init1t9k78msywte6jx4zrxkp94pa9u9laa9pqfpytk"
        },
        {
          index: true,
          key: "module",
          value: "move"
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
          key: "sender",
          value: "0x596de3ee0472f3a91aa219ac12d43d2f0bfef4a1"
        },
        {
          index: true,
          key: "module_addr",
          value: "0x1"
        },
        {
          index: true,
          key: "module_name",
          value: "simple_nft"
        },
        {
          index: true,
          key: "function_name",
          value: "burn"
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
          key: "type_tag",
          value: "0x1::collection::BurnEvent"
        },
        {
          index: true,
          key: "data",
          value:
            '{"collection":"0x6490737f36898086529ecc342f6abe7846d12d40d7df2a4f392e6df9b57af0f4","token_id":"1","nft":"0x3d879bacd0cb90899bacfa30385498cdd522b06a6e7b8352e9e62aaa1036f814"}'
        },
        {
          index: true,
          key: "msg_index",
          value: "0"
        }
      ],
      type: "move"
    }
  ],
  gas_used: "128472",
  gas_wanted: "185939",
  height: "4043783",
  info: "",
  logs: [],
  raw_log: "",
  timestamp: "2025-06-20T03:55:00Z",
  tx: {
    "@type": "/cosmos.tx.v1beta1.Tx",
    auth_info: {
      fee: {
        amount: [
          {
            amount: "1438",
            denom:
              "ibc/6490A7EAB61059BFC1CDDEB05917DD70BDF3A611654162A1A47DB930D40D8AF4"
          }
        ],
        gas_limit: "185939",
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
            key: "AqmPQP4jOEZ55llQXjfQIL6tzTj2O1o+LCZO1IjLvTcb"
          },
          sequence: "20"
        }
      ],
      tip: null
    },
    body: {
      extension_options: [],
      memo: "",
      messages: [
        {
          "@type": "/initia.move.v1.MsgExecuteJSON",
          args: [
            '"0x3d879bacd0cb90899bacfa30385498cdd522b06a6e7b8352e9e62aaa1036f814"'
          ],
          function_name: "burn",
          module_address: "0x1",
          module_name: "simple_nft",
          sender: "init1t9k78msywte6jx4zrxkp94pa9u9laa9pqfpytk",
          type_args: ["0x1::simple_nft::SimpleNft"]
        }
      ],
      non_critical_extension_options: [],
      timeout_height: "0"
    },
    signatures: [
      "hoEEXgcq8YycWwcQcORdccUEMlFHYiFar+01aqgp3JNa/40Oom7yYd9GNfx1ISFfPYKRPFY8Rw4I45kXSByWuw=="
    ]
  },
  txhash: "2CD6B210462AC8A86E8F545E5F691096290406C9AEC81478F1B89A22C5F97C02"
};

export const mockApiResponsesForNftBurn = {
  GET: {
    "/initia/move/v1/accounts/0x6490737f36898086529ecc342f6abe7846d12d40d7df2a4f392e6df9b57af0f4/resources":
      {
        pagination: { next_key: null, total: "0" },
        resources: [
          {
            address:
              "0x6490737f36898086529ecc342f6abe7846d12d40d7df2a4f392e6df9b57af0f4",
            move_resource:
              '{"type":"0x1::object::ObjectCore","data":{"allow_ungated_transfer":true,"owner":"0xe7ddea46e6bd763c1610f0544f5cf9dc8c623b5c","version":"1"}}',
            raw_bytes:
              "AAAAAAAAAAAAAAAA593qRua9djwWEPBUT1z53IxiO1wBAQAAAAAAAAA=",
            struct_tag: "0x1::object::ObjectCore"
          },
          {
            address:
              "0x6490737f36898086529ecc342f6abe7846d12d40d7df2a4f392e6df9b57af0f4",
            move_resource:
              '{"type":"0x1::royalty::Royalty","data":{"payee_address":"0xe7ddea46e6bd763c1610f0544f5cf9dc8c623b5c","royalty":"0.05"}}',
            raw_bytes:
              "BwAAxS68orEAAAAAAAAAAAAAAADn3epG5r12PBYQ8FRPXPncjGI7XA==",
            struct_tag: "0x1::royalty::Royalty"
          },
          {
            address:
              "0x6490737f36898086529ecc342f6abe7846d12d40d7df2a4f392e6df9b57af0f4",
            move_resource:
              '{"type":"0x1::collection::Collection","data":{"creator":"0xe7ddea46e6bd763c1610f0544f5cf9dc8c623b5c","description":"Saint Seiya - Knights of the Zodiac NFT Collection. Burn your Cosmos and fight for justice! Each NFT represents a legendary Bronze Saint.","name":"Saint Seiya - Knights of the Zodiac","nfts":{"handle":"0x216d92fa05c1e9621a4ce949682e780b30ee650b0c1f0c0807510fd6343553c4","length":"7"},"uri":"https://nft-rho-ten.vercel.app/saint_seiya"}}',
            raw_bytes:
              "AAAAAAAAAAAAAAAA593qRua9djwWEPBUT1z53IxiO1yJAVNhaW50IFNlaXlhIC0gS25pZ2h0cyBvZiB0aGUgWm9kaWFjIE5GVCBDb2xsZWN0aW9uLiBCdXJuIHlvdXIgQ29zbW9zIGFuZCBmaWdodCBmb3IganVzdGljZSEgRWFjaCBORlQgcmVwcmVzZW50cyBhIGxlZ2VuZGFyeSBCcm9uemUgU2FpbnQuI1NhaW50IFNlaXlhIC0gS25pZ2h0cyBvZiB0aGUgWm9kaWFjKmh0dHBzOi8vbmZ0LXJoby10ZW4udmVyY2VsLmFwcC9zYWludF9zZWl5YSFtkvoFweliGkzpSWgueAsw7mULDB8MCAdRD9Y0NVPEBwAAAAAAAAA=",
            struct_tag: "0x1::collection::Collection"
          },
          {
            address:
              "0x6490737f36898086529ecc342f6abe7846d12d40d7df2a4f392e6df9b57af0f4",
            move_resource:
              '{"type":"0x1::collection::FixedSupply","data":{"current_supply":"7","max_supply":"100","total_minted":"9"}}',
            raw_bytes: "BwAAAAAAAABkAAAAAAAAAAkAAAAAAAAA",
            struct_tag: "0x1::collection::FixedSupply"
          },
          {
            address:
              "0x6490737f36898086529ecc342f6abe7846d12d40d7df2a4f392e6df9b57af0f4",
            move_resource:
              '{"type":"0x1::initia_nft::InitiaNftCollection","data":{"mutable_description":true,"mutable_nft_description":true,"mutable_nft_uri":true,"mutable_uri":true,"mutator_ref":{"self":"0x6490737f36898086529ecc342f6abe7846d12d40d7df2a4f392e6df9b57af0f4"},"royalty_mutator_ref":{"inner":{"self":"0x6490737f36898086529ecc342f6abe7846d12d40d7df2a4f392e6df9b57af0f4","version":"1"}}}}',
            raw_bytes:
              "AWSQc382iYCGUp7MNC9qvnhG0S1A198qTzkubfm1evD0AWSQc382iYCGUp7MNC9qvnhG0S1A198qTzkubfm1evD0AQAAAAAAAAABAQEB",
            struct_tag: "0x1::initia_nft::InitiaNftCollection"
          },
          {
            address:
              "0x6490737f36898086529ecc342f6abe7846d12d40d7df2a4f392e6df9b57af0f4",
            move_resource:
              '{"type":"0x1::simple_nft::SimpleNftCollection","data":{"mutable_nft_properties":true}}',
            raw_bytes: "AQ==",
            struct_tag: "0x1::simple_nft::SimpleNftCollection"
          }
        ]
      }
  },
  POST: {}
};
