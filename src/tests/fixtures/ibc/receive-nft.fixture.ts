export const mockMsgIbcReceiveNftSourceToken = {
  code: 0,
  codespace: "",
  data: "122D0A2B2F6962632E636F72652E636C69656E742E76312E4D7367557064617465436C69656E74526573706F6E736512300A2A2F6962632E636F72652E6368616E6E656C2E76312E4D7367526563765061636B6574526573706F6E736512020802",
  events: [
    {
      attributes: [
        {
          index: true,
          key: "sender",
          value: "0x1,0xc0e7a50f114895331aa16fda36a973e06d6788b",
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
            '{"store_addr":"0xe49b3dcc6b7f5354cedebb5264528c1c1fc3d26b30add9e26b2a5251c6415123","metadata_addr":"0x8e4733bdabcf7d4afc3d14f0dd46c9bf52fb0fce9e4b996c939e195b8bc891d9","amount":"5676"}',
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
            '{"store_addr":"0x66a8cb0bfb991610dcffb8a6543ac0887c7c5405b8f985ebed6d628fe50c4686","metadata_addr":"0x8e4733bdabcf7d4afc3d14f0dd46c9bf52fb0fce9e4b996c939e195b8bc891d9","amount":"5676"}',
        },
      ],
      type: "move",
    },
    {
      attributes: [
        {
          index: true,
          key: "spender",
          value: "init1ps885583zjy4xvd2zm76x65h8crdv7yt484vws",
        },
        {
          index: true,
          key: "amount",
          value: "5676uinit",
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
          value: "5676uinit",
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
          value: "init1ps885583zjy4xvd2zm76x65h8crdv7yt484vws",
        },
        {
          index: true,
          key: "amount",
          value: "5676uinit",
        },
      ],
      type: "transfer",
    },
    {
      attributes: [
        {
          index: true,
          key: "sender",
          value: "init1ps885583zjy4xvd2zm76x65h8crdv7yt484vws",
        },
      ],
      type: "message",
    },
    {
      attributes: [
        {
          index: true,
          key: "fee",
          value: "5676uinit",
        },
        {
          index: true,
          key: "fee_payer",
          value: "init1ps885583zjy4xvd2zm76x65h8crdv7yt484vws",
        },
      ],
      type: "tx",
    },
    {
      attributes: [
        {
          index: true,
          key: "acc_seq",
          value: "init1ps885583zjy4xvd2zm76x65h8crdv7yt484vws/4830",
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
            "62NhEM+sfSQ52c/L3dx19ur3sXZYvRRFYfKPklZKcHdswa8+Sn78aOOqvNz51AZcfD+o07NtYdayN9UQpgvk8Q==",
        },
      ],
      type: "tx",
    },
    {
      attributes: [
        {
          index: true,
          key: "action",
          value: "/ibc.core.client.v1.MsgUpdateClient",
        },
        {
          index: true,
          key: "sender",
          value: "init1ps885583zjy4xvd2zm76x65h8crdv7yt484vws",
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
          key: "client_id",
          value: "07-tendermint-15",
        },
        {
          index: true,
          key: "client_type",
          value: "07-tendermint",
        },
        {
          index: true,
          key: "consensus_height",
          value: "1-431430",
        },
        {
          index: true,
          key: "consensus_heights",
          value: "1-431430",
        },
        {
          index: true,
          key: "header",
          value:
            "0a262f6962632e6c69676874636c69656e74732e74656e6465726d696e742e76312e48656164657212da060acf040a91030a02080b1209636976697469612d3118c6aa1a220c08b884d5c20610c8a69dfe022a480a20291e2c7c4348f1f68e45306585a7bc19a68a89994fb3b3cd3006c98834d54448122408011220337a40bc6591d3b7717691acba8f40df424b9396e1fb62655ad2d8b48ef11dc63220c0d44d73b38e29ac1f46f03c44d64344691cd415060b06731725a8c072fffbf73a20e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855422026d9c00cd24725276918fa7e4ffd5b14c227a8e559e517f96e494095e4c594dc4a2026d9c00cd24725276918fa7e4ffd5b14c227a8e559e517f96e494095e4c594dc52201bf2556ca5d5d7effb540f34cb0ffc77a3202e32275557afbd219882a9e42acf5a20e1ff11ccb14eadff2bb3e7f14ea03e650b760e41c29bd025f512549fb28156d26220e9689265335f07712fce95fb200d624b724e84eda5f53fbe8f58d87e1bc369dc6a20e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b85572148d612667cffd7ac56b2e6eecd26d5c1948f7da8912b80108c6aa1a1a480a2076bd04d54f211865526dd1e5bd4ef61bd3eba027cef86ce798063a3532d7425e12240801122064f71e39423c7c9fc96f9c7e7efe17f3002b3138712b2714b0d8a96b7cce629f2268080212148d612667cffd7ac56b2e6eecd26d5c1948f7da891a0c08b984d5c20610d4b3bc97012240ffb77a3e82ff2df200686dbe0d36513d0b274778bda8b4a673722aceb0fa42e66c5b6af59579320bbbf575a88a9f394d0c25122741c995e52ce1e4afe70c260a127e0a3c0a148d612667cffd7ac56b2e6eecd26d5c1948f7da8912220a206f9b5484cb92e8e9a366f0d8ea19cdbe028bbbbc60474a9f97d594033a06cbf61801123c0a148d612667cffd7ac56b2e6eecd26d5c1948f7da8912220a206f9b5484cb92e8e9a366f0d8ea19cdbe028bbbbc60474a9f97d594033a06cbf6180118011a0608011088aa1a227e0a3c0a148d612667cffd7ac56b2e6eecd26d5c1948f7da8912220a206f9b5484cb92e8e9a366f0d8ea19cdbe028bbbbc60474a9f97d594033a06cbf61801123c0a148d612667cffd7ac56b2e6eecd26d5c1948f7da8912220a206f9b5484cb92e8e9a366f0d8ea19cdbe028bbbbc60474a9f97d594033a06cbf618011801",
        },
        {
          index: true,
          key: "msg_index",
          value: "0",
        },
      ],
      type: "update_client",
    },
    {
      attributes: [
        {
          index: true,
          key: "module",
          value: "ibc_client",
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
          key: "action",
          value: "/ibc.core.channel.v1.MsgRecvPacket",
        },
        {
          index: true,
          key: "sender",
          value: "init1ps885583zjy4xvd2zm76x65h8crdv7yt484vws",
        },
        {
          index: true,
          key: "msg_index",
          value: "1",
        },
      ],
      type: "message",
    },
    {
      attributes: [
        {
          index: true,
          key: "packet_data",
          value:
            '{"classData":"eyJuYW1lIjoiVGhhaWxhbmQgcGxhY2VzIiwiZGVzY3JpcHRpb24iOiJHb29kIHBsYWNlcyB0byB2aXNpdCBpbiBUaGFpbGFuZCAtIEV4cGxvcmUgYmVhdXRpZnVsIGRlc3RpbmF0aW9ucyBhbmQgY3VsdHVyYWwgbGFuZG1hcmtzIn0=","classId":"nft-transfer/channel-1/move/9af765d811209d39bd35ff1d75f5cf0cf46663cfd7a5455a948266db188d67f3","classUri":"https://nft-rho-ten.vercel.app/thailand","receiver":"init1t9k78msywte6jx4zrxkp94pa9u9laa9pqfpytk","sender":"init1t9k78msywte6jx4zrxkp94pa9u9laa9pqfpytk","tokenData":["eyJkZXNjcmlwdGlvbiI6IlVib24gUmF0Y2hhdGhhbmksIGEgZ29vZCBwbGFjZSB0byB0YXN0ZSBtdXNocm9vbSJ9"],"tokenIds":["1"],"tokenUris":["https://nft-rho-ten.vercel.app/thailand/1"]}',
        },
        {
          index: true,
          key: "packet_data_hex",
          value:
            "7b22636c61737344617461223a2265794a755957316c496a6f695647686861577868626d5167634778685932567a496977695a47567a59334a7063485270623234694f694a486232396b4948427359574e6c637942306279423261584e70644342706269425561474670624746755a4341744945563463477876636d5567596d5668645852705a6e56734947526c63335270626d46306157397563794268626d5167593356736448567959577767624746755a473168636d747a496e303d222c22636c6173734964223a226e66742d7472616e736665722f6368616e6e656c2d312f6d6f76652f39616637363564383131323039643339626433356666316437356635636630636634363636336366643761353435356139343832363664623138386436376633222c22636c617373557269223a2268747470733a2f2f6e66742d72686f2d74656e2e76657263656c2e6170702f746861696c616e64222c227265636569766572223a22696e69743174396b37386d7379777465366a78347a72786b70393470613975396c6161397071667079746b222c2273656e646572223a22696e69743174396b37386d7379777465366a78347a72786b70393470613975396c6161397071667079746b222c22746f6b656e44617461223a5b2265794a6b5a584e6a636d6c7764476c7662694936496c566962323467556d46305932686864476868626d6b73494745675a3239765a4342776247466a5a5342306279423059584e305a53427464584e6f636d397662534a39225d2c22746f6b656e496473223a5b2231225d2c22746f6b656e55726973223a5b2268747470733a2f2f6e66742d72686f2d74656e2e76657263656c2e6170702f746861696c616e642f31225d7d",
        },
        {
          index: true,
          key: "packet_timeout_height",
          value: "0-0",
        },
        {
          index: true,
          key: "packet_timeout_timestamp",
          value: "1750418571134000000",
        },
        {
          index: true,
          key: "packet_sequence",
          value: "15",
        },
        {
          index: true,
          key: "packet_src_port",
          value: "nft-transfer",
        },
        {
          index: true,
          key: "packet_src_channel",
          value: "channel-1",
        },
        {
          index: true,
          key: "packet_dst_port",
          value: "nft-transfer",
        },
        {
          index: true,
          key: "packet_dst_channel",
          value: "channel-28",
        },
        {
          index: true,
          key: "packet_channel_ordering",
          value: "ORDER_UNORDERED",
        },
        {
          index: true,
          key: "packet_connection",
          value: "connection-15",
        },
        {
          index: true,
          key: "connection_id",
          value: "connection-15",
        },
        {
          index: true,
          key: "msg_index",
          value: "1",
        },
      ],
      type: "recv_packet",
    },
    {
      attributes: [
        {
          index: true,
          key: "module",
          value: "ibc_channel",
        },
        {
          index: true,
          key: "msg_index",
          value: "1",
        },
      ],
      type: "message",
    },
    {
      attributes: [
        {
          index: true,
          key: "sender",
          value: "0x93ec9e2eabf1ce88173afd7a025fd08850e5bb28",
        },
        {
          index: true,
          key: "module_addr",
          value: "0x1",
        },
        {
          index: true,
          key: "module_name",
          value: "object",
        },
        {
          index: true,
          key: "function_name",
          value: "transfer",
        },
        {
          index: true,
          key: "msg_index",
          value: "1",
        },
      ],
      type: "execute",
    },
    {
      attributes: [
        {
          index: true,
          key: "type_tag",
          value: "0x1::object::TransferEvent",
        },
        {
          index: true,
          key: "data",
          value:
            '{"object":"0x1a4bdc22b8ce68ecfd35900171b8d10b2a9d169dcbe4be8b2a5da0623a08f6b7","from":"0x93ec9e2eabf1ce88173afd7a025fd08850e5bb28","to":"0x596de3ee0472f3a91aa219ac12d43d2f0bfef4a1"}',
        },
        {
          index: true,
          key: "msg_index",
          value: "1",
        },
      ],
      type: "move",
    },
    {
      attributes: [
        {
          index: true,
          key: "module",
          value: "nonfungibletokentransfer",
        },
        {
          index: true,
          key: "sender",
          value: "init1t9k78msywte6jx4zrxkp94pa9u9laa9pqfpytk",
        },
        {
          index: true,
          key: "receiver",
          value: "init1t9k78msywte6jx4zrxkp94pa9u9laa9pqfpytk",
        },
        {
          index: true,
          key: "class_id",
          value:
            "nft-transfer/channel-1/move/9af765d811209d39bd35ff1d75f5cf0cf46663cfd7a5455a948266db188d67f3",
        },
        {
          index: true,
          key: "token_ids",
          value: "1",
        },
        {
          index: true,
          key: "memo",
          value: "",
        },
        {
          index: true,
          key: "success",
          value: "true",
        },
        {
          index: true,
          key: "msg_index",
          value: "1",
        },
      ],
      type: "non_fungible_token_packet",
    },
    {
      attributes: [
        {
          index: true,
          key: "packet_data",
          value:
            '{"classData":"eyJuYW1lIjoiVGhhaWxhbmQgcGxhY2VzIiwiZGVzY3JpcHRpb24iOiJHb29kIHBsYWNlcyB0byB2aXNpdCBpbiBUaGFpbGFuZCAtIEV4cGxvcmUgYmVhdXRpZnVsIGRlc3RpbmF0aW9ucyBhbmQgY3VsdHVyYWwgbGFuZG1hcmtzIn0=","classId":"nft-transfer/channel-1/move/9af765d811209d39bd35ff1d75f5cf0cf46663cfd7a5455a948266db188d67f3","classUri":"https://nft-rho-ten.vercel.app/thailand","receiver":"init1t9k78msywte6jx4zrxkp94pa9u9laa9pqfpytk","sender":"init1t9k78msywte6jx4zrxkp94pa9u9laa9pqfpytk","tokenData":["eyJkZXNjcmlwdGlvbiI6IlVib24gUmF0Y2hhdGhhbmksIGEgZ29vZCBwbGFjZSB0byB0YXN0ZSBtdXNocm9vbSJ9"],"tokenIds":["1"],"tokenUris":["https://nft-rho-ten.vercel.app/thailand/1"]}',
        },
        {
          index: true,
          key: "packet_data_hex",
          value:
            "7b22636c61737344617461223a2265794a755957316c496a6f695647686861577868626d5167634778685932567a496977695a47567a59334a7063485270623234694f694a486232396b4948427359574e6c637942306279423261584e70644342706269425561474670624746755a4341744945563463477876636d5567596d5668645852705a6e56734947526c63335270626d46306157397563794268626d5167593356736448567959577767624746755a473168636d747a496e303d222c22636c6173734964223a226e66742d7472616e736665722f6368616e6e656c2d312f6d6f76652f39616637363564383131323039643339626433356666316437356635636630636634363636336366643761353435356139343832363664623138386436376633222c22636c617373557269223a2268747470733a2f2f6e66742d72686f2d74656e2e76657263656c2e6170702f746861696c616e64222c227265636569766572223a22696e69743174396b37386d7379777465366a78347a72786b70393470613975396c6161397071667079746b222c2273656e646572223a22696e69743174396b37386d7379777465366a78347a72786b70393470613975396c6161397071667079746b222c22746f6b656e44617461223a5b2265794a6b5a584e6a636d6c7764476c7662694936496c566962323467556d46305932686864476868626d6b73494745675a3239765a4342776247466a5a5342306279423059584e305a53427464584e6f636d397662534a39225d2c22746f6b656e496473223a5b2231225d2c22746f6b656e55726973223a5b2268747470733a2f2f6e66742d72686f2d74656e2e76657263656c2e6170702f746861696c616e642f31225d7d",
        },
        {
          index: true,
          key: "packet_timeout_height",
          value: "0-0",
        },
        {
          index: true,
          key: "packet_timeout_timestamp",
          value: "1750418571134000000",
        },
        {
          index: true,
          key: "packet_sequence",
          value: "15",
        },
        {
          index: true,
          key: "packet_src_port",
          value: "nft-transfer",
        },
        {
          index: true,
          key: "packet_src_channel",
          value: "channel-1",
        },
        {
          index: true,
          key: "packet_dst_port",
          value: "nft-transfer",
        },
        {
          index: true,
          key: "packet_dst_channel",
          value: "channel-28",
        },
        {
          index: true,
          key: "packet_ack",
          value:
            '{"app_acknowledgement":"eyJyZXN1bHQiOiJBUT09In0=","forward_relayer_address":"","underlying_app_success":true}',
        },
        {
          index: true,
          key: "packet_ack_hex",
          value:
            "7b226170705f61636b6e6f776c656467656d656e74223a2265794a795a584e31624851694f694a4255543039496e303d222c22666f72776172645f72656c617965725f61646472657373223a22222c22756e6465726c79696e675f6170705f73756363657373223a747275657d",
        },
        {
          index: true,
          key: "packet_channel_ordering",
          value: "ORDER_UNORDERED",
        },
        {
          index: true,
          key: "packet_connection",
          value: "connection-15",
        },
        {
          index: true,
          key: "connection_id",
          value: "connection-15",
        },
        {
          index: true,
          key: "msg_index",
          value: "1",
        },
      ],
      type: "write_acknowledgement",
    },
    {
      attributes: [
        {
          index: true,
          key: "module",
          value: "ibc_channel",
        },
        {
          index: true,
          key: "msg_index",
          value: "1",
        },
      ],
      type: "message",
    },
  ],
  gas_used: "211116",
  gas_wanted: "378357",
  height: "4055557",
  info: "",
  logs: [],
  raw_log: "",
  timestamp: "2025-06-20T11:12:56Z",
  tx: {
    "@type": "/cosmos.tx.v1beta1.Tx",
    auth_info: {
      fee: {
        amount: [
          {
            amount: "5676",
            denom: "uinit",
          },
        ],
        gas_limit: "378357",
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
            key: "AoCLmT5KcPY3Ha5t2ojDJM4S7A73QhJ2T2oOX5gBpZTQ",
          },
          sequence: "4830",
        },
      ],
      tip: null,
    },
    body: {
      extension_options: [],
      memo: "",
      messages: [
        {
          "@type": "/ibc.core.client.v1.MsgUpdateClient",
          client_id: "07-tendermint-15",
          client_message: {
            "@type": "/ibc.lightclients.tendermint.v1.Header",
            signed_header: {
              commit: {
                block_id: {
                  hash: "dr0E1U8hGGVSbdHlvU72G9ProCfO+GznmAY6NTLXQl4=",
                  part_set_header: {
                    hash: "ZPceOUI8fJ/Jb5x+fv4X8wArMThxKycUsNipa3zOYp8=",
                    total: 1,
                  },
                },
                height: "431430",
                round: 0,
                signatures: [
                  {
                    block_id_flag: "BLOCK_ID_FLAG_COMMIT",
                    signature:
                      "/7d6PoL/LfIAaG2+DTZRPQsnR3i9qLSmc3IqzrD6QuZsW2r1lXkyC7v1daiKnzlNDCUSJ0HJleUs4eSv5wwmCg==",
                    timestamp: "2025-06-20T11:12:57.317659604Z",
                    validator_address: "jWEmZ8/9esVrLm7s0m1cGUj32ok=",
                  },
                ],
              },
              header: {
                app_hash: "4f8RzLFOrf8rs+fxTqA+ZQt2DkHCm9Al9RJUn7KBVtI=",
                chain_id: "civitia-1",
                consensus_hash: "G/JVbKXV1+/7VA80yw/8d6MgLjInVVevvSGYgqnkKs8=",
                data_hash: "47DEQpj8HBSa+/TImW+5JCeuQeRkm5NMpJWZG3hSuFU=",
                evidence_hash: "47DEQpj8HBSa+/TImW+5JCeuQeRkm5NMpJWZG3hSuFU=",
                height: "431430",
                last_block_id: {
                  hash: "KR4sfENI8faORTBlhae8GaaKiZlPs7PNMAbJiDTVREg=",
                  part_set_header: {
                    hash: "M3pAvGWR07dxdpGsuo9A30JLk5bh+2JlWtLYtI7xHcY=",
                    total: 1,
                  },
                },
                last_commit_hash:
                  "wNRNc7OOKawfRvA8RNZDRGkc1BUGCwZzFyWowHL/+/c=",
                last_results_hash:
                  "6WiSZTNfB3EvzpX7IA1iS3JOhO2l9T++j1jYfhvDadw=",
                next_validators_hash:
                  "JtnADNJHJSdpGPp+T/1bFMInqOVZ5Rf5bklAleTFlNw=",
                proposer_address: "jWEmZ8/9esVrLm7s0m1cGUj32ok=",
                time: "2025-06-20T11:12:56.801592136Z",
                validators_hash: "JtnADNJHJSdpGPp+T/1bFMInqOVZ5Rf5bklAleTFlNw=",
                version: {
                  app: "0",
                  block: "11",
                },
              },
            },
            trusted_height: {
              revision_height: "431368",
              revision_number: "1",
            },
            trusted_validators: {
              proposer: {
                address: "jWEmZ8/9esVrLm7s0m1cGUj32ok=",
                proposer_priority: "0",
                pub_key: {
                  ed25519: "b5tUhMuS6OmjZvDY6hnNvgKLu7xgR0qfl9WUAzoGy/Y=",
                },
                voting_power: "1",
              },
              total_voting_power: "1",
              validators: [
                {
                  address: "jWEmZ8/9esVrLm7s0m1cGUj32ok=",
                  proposer_priority: "0",
                  pub_key: {
                    ed25519: "b5tUhMuS6OmjZvDY6hnNvgKLu7xgR0qfl9WUAzoGy/Y=",
                  },
                  voting_power: "1",
                },
              ],
            },
            validator_set: {
              proposer: {
                address: "jWEmZ8/9esVrLm7s0m1cGUj32ok=",
                proposer_priority: "0",
                pub_key: {
                  ed25519: "b5tUhMuS6OmjZvDY6hnNvgKLu7xgR0qfl9WUAzoGy/Y=",
                },
                voting_power: "1",
              },
              total_voting_power: "1",
              validators: [
                {
                  address: "jWEmZ8/9esVrLm7s0m1cGUj32ok=",
                  proposer_priority: "0",
                  pub_key: {
                    ed25519: "b5tUhMuS6OmjZvDY6hnNvgKLu7xgR0qfl9WUAzoGy/Y=",
                  },
                  voting_power: "1",
                },
              ],
            },
          },
          signer: "init1ps885583zjy4xvd2zm76x65h8crdv7yt484vws",
        },
        {
          "@type": "/ibc.core.channel.v1.MsgRecvPacket",
          packet: {
            data: "eyJjbGFzc0RhdGEiOiJleUp1WVcxbElqb2lWR2hoYVd4aGJtUWdjR3hoWTJWeklpd2laR1Z6WTNKcGNIUnBiMjRpT2lKSGIyOWtJSEJzWVdObGN5QjBieUIyYVhOcGRDQnBiaUJVYUdGcGJHRnVaQ0F0SUVWNGNHeHZjbVVnWW1WaGRYUnBablZzSUdSbGMzUnBibUYwYVc5dWN5QmhibVFnWTNWc2RIVnlZV3dnYkdGdVpHMWhjbXR6SW4wPSIsImNsYXNzSWQiOiJuZnQtdHJhbnNmZXIvY2hhbm5lbC0xL21vdmUvOWFmNzY1ZDgxMTIwOWQzOWJkMzVmZjFkNzVmNWNmMGNmNDY2NjNjZmQ3YTU0NTVhOTQ4MjY2ZGIxODhkNjdmMyIsImNsYXNzVXJpIjoiaHR0cHM6Ly9uZnQtcmhvLXRlbi52ZXJjZWwuYXBwL3RoYWlsYW5kIiwicmVjZWl2ZXIiOiJpbml0MXQ5azc4bXN5d3RlNmp4NHpyeGtwOTRwYTl1OWxhYTlwcWZweXRrIiwic2VuZGVyIjoiaW5pdDF0OWs3OG1zeXd0ZTZqeDR6cnhrcDk0cGE5dTlsYWE5cHFmcHl0ayIsInRva2VuRGF0YSI6WyJleUprWlhOamNtbHdkR2x2YmlJNklsVmliMjRnVW1GMFkyaGhkR2hoYm1rc0lHRWdaMjl2WkNCd2JHRmpaU0IwYnlCMFlYTjBaU0J0ZFhOb2NtOXZiU0o5Il0sInRva2VuSWRzIjpbIjEiXSwidG9rZW5VcmlzIjpbImh0dHBzOi8vbmZ0LXJoby10ZW4udmVyY2VsLmFwcC90aGFpbGFuZC8xIl19",
            destination_channel: "channel-28",
            destination_port: "nft-transfer",
            sequence: "15",
            source_channel: "channel-1",
            source_port: "nft-transfer",
            timeout_height: {
              revision_height: "0",
              revision_number: "0",
            },
            timeout_timestamp: "1750418571134000000",
          },
          proof_commitment:
            "CogGCoUGCj5jb21taXRtZW50cy9wb3J0cy9uZnQtdHJhbnNmZXIvY2hhbm5lbHMvY2hhbm5lbC0xL3NlcXVlbmNlcy8xNRIg22NV1M5Y5Ldl9O2QoEk3yoeR1QfLQesmlVXtwb1YtC0aDQgBGAEgASoFAAKG1TQiKwgBEicCBIrVNCBm20EeUFuvnpDMb2eQsB5yqbOVfrO1rm9Df1WydGhNISAiLQgBEgYECIrVNCAaISDg85kKfygFrc5zBcmxU4E6iC+JzO+gWOE6xvoUSuVXEyItCAESBgYMitU0IBohIKoKsoKYfFRDiUK6WNKmdOUhQ9fb3tc2H3ySfUG+CskrIi0IARIGCBqK1TQgGiEgPLVQZzU7lIRcCBel21LrCaqL+yfpSA2bhKGHa3qhVFgiLQgBEgYMRIrVNCAaISD8Gz20Fe+QEI/F0xGhWKJHcMAx2autD2hj+iRJvqVRbCItCAESBg5qitU0IBohIP52aUyR6IGeSbiOFUeTufsBKA1P7Quvy+DE7XqDb9aHIi4IARIHEPoBitU0IBohIDTvdOuGPzuipYMtKXBhJDXj4iP8ZHKSP3mgfLXm65kWIi4IARIHEvgDitU0IBohIM+ekmzDQxskM+VYpd77XZ5WjWJP0RDS7DmwF0OrT6/lIi4IARIHFOIHitU0IBohIC+cllJS5gbbK5skabpceeISPA8eyMbCjBADJ6jtx70jIi4IARIHGOYRitU0IBohIPqDBqHDLEuEchGdczQHI2ViUz0NsLtKpMXTwLpyu8KvIiwIARIoGrxLitU0ILC+cqA+pk606y5abEnf8NFgtoyChoROJVGkVeD5XM3YICIsCAESKBz6eYrVNCC5egNm/WKArgKhOmhmuuWOo/zLxG+MflF/zfH6gCP5uSAiLwgBEgge0scBitU0IBohIOQjfvp557OSNC5+1I6j0BpiJNYFOxpFxCUlZ0BYr2q1Ii0IARIpIrzfBIrVNCDPcn7d5BN2Z7EJvlVAwxSqbdGEKp/mydRRYP4XIQm9XSAK/gEK+wEKA2liYxIgTDjOxe885RG+4JuTBetbmENkXHzGwZYVJ1PxGZXhu2YaCQgBGAEgASoBACInCAESAQEaICzYtQcAlQVGGArZeRNahwjC6iCY//at4xt+QOtdz3wFIicIARIBARogDpYLJiVVN0Yu89r2q9O17RUGYGrgELH4jpVOjq7zfSIiJQgBEiEBvHiIexpm89+eLHW3kxlPMRkMaOkFJxGz90UBjsT13lwiJQgBEiEBHdxXeRLT+/7ViRueGk6Z9JyIu79n0PG0MOtLVgs2qU4iJwgBEgEBGiCreBxYVQ+TTG1DP57j7iUpVImj5x8nKCDKcqWe/jrQqw==",
          proof_height: {
            revision_height: "431430",
            revision_number: "1",
          },
          signer: "init1ps885583zjy4xvd2zm76x65h8crdv7yt484vws",
        },
      ],
      non_critical_extension_options: [],
      timeout_height: "0",
    },
    signatures: [
      "62NhEM+sfSQ52c/L3dx19ur3sXZYvRRFYfKPklZKcHdswa8+Sn78aOOqvNz51AZcfD+o07NtYdayN9UQpgvk8Q==",
    ],
  },
  txhash: "6D393A7B4C97631996E411DAC52A423471CC855593F3748CEEC90BE29177C66A",
};

export const mockMsgIbcReceiveNftRemoteToken = {
  code: 0,
  codespace: "",
  data: "122D0A2B2F6962632E636F72652E636C69656E742E76312E4D7367557064617465436C69656E74526573706F6E736512300A2A2F6962632E636F72652E6368616E6E656C2E76312E4D7367526563765061636B6574526573706F6E736512020802",
  events: [
    {
      attributes: [
        {
          index: true,
          key: "sender",
          value: "0x1,0xf96a8aaf2f175fefa9f42ea350699f284522fab8",
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
            '{"store_addr":"0x964243ba1efe52a31c262ca274ea214e99ef4e273131e70340ed629c049d7dfd","metadata_addr":"0x8e4733bdabcf7d4afc3d14f0dd46c9bf52fb0fce9e4b996c939e195b8bc891d9","amount":"12123"}',
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
            '{"store_addr":"0x66a8cb0bfb991610dcffb8a6543ac0887c7c5405b8f985ebed6d628fe50c4686","metadata_addr":"0x8e4733bdabcf7d4afc3d14f0dd46c9bf52fb0fce9e4b996c939e195b8bc891d9","amount":"12123"}',
        },
      ],
      type: "move",
    },
    {
      attributes: [
        {
          index: true,
          key: "spender",
          value: "init1l94g4te0za07l2059634q6vl9pzj974cxfcgwy",
        },
        {
          index: true,
          key: "amount",
          value: "12123uinit",
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
          value: "12123uinit",
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
          value: "init1l94g4te0za07l2059634q6vl9pzj974cxfcgwy",
        },
        {
          index: true,
          key: "amount",
          value: "12123uinit",
        },
      ],
      type: "transfer",
    },
    {
      attributes: [
        {
          index: true,
          key: "sender",
          value: "init1l94g4te0za07l2059634q6vl9pzj974cxfcgwy",
        },
      ],
      type: "message",
    },
    {
      attributes: [
        {
          index: true,
          key: "fee",
          value: "12123uinit",
        },
        {
          index: true,
          key: "fee_payer",
          value: "init1l94g4te0za07l2059634q6vl9pzj974cxfcgwy",
        },
      ],
      type: "tx",
    },
    {
      attributes: [
        {
          index: true,
          key: "acc_seq",
          value: "init1l94g4te0za07l2059634q6vl9pzj974cxfcgwy/1760",
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
            "cOs3psvUBGVsiBa2NfrfaH5FI87MXkdR2zfvRkNIx7MOvhINVVLX+KhGFNgaFwZLea4x24GIWO8iGkv4pQpV5g==",
        },
      ],
      type: "tx",
    },
    {
      attributes: [
        {
          index: true,
          key: "action",
          value: "/ibc.core.client.v1.MsgUpdateClient",
        },
        {
          index: true,
          key: "sender",
          value: "init1l94g4te0za07l2059634q6vl9pzj974cxfcgwy",
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
          key: "client_id",
          value: "07-tendermint-35",
        },
        {
          index: true,
          key: "client_type",
          value: "07-tendermint",
        },
        {
          index: true,
          key: "consensus_height",
          value: "1-37709",
        },
        {
          index: true,
          key: "consensus_heights",
          value: "1-37709",
        },
        {
          index: true,
          key: "header",
          value:
            "0a262f6962632e6c69676874636c69656e74732e74656e6465726d696e742e76312e48656164657212d8060ad1040a93030a02080b120b696e74657267617a652d3118cda602220c0884f2c9c00610c484e5d0032a480a201692ed52107f2ba8bdf621c922678b70db8126e185aacdfe0ee4f6720cce92c2122408011220d3cfb139060c805ac64948b07fe5690daf1b95787aad65d78ae1727cce322ef43220f4dea6caf7134ccc8e81868403f006fcf2fea7bf191fb95ab58c0bacb64931e63a20e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b8554220b3a6ba93649b76ba0a1e08b718053512aaffe20803c8bfe14ccc985ec2364aa34a20b3a6ba93649b76ba0a1e08b718053512aaffe20803c8bfe14ccc985ec2364aa3522022e3fa2d1695ae7db62e55677bf0c914b1ec88d64cd8d280cf2e29b2e06d09655a20f699eadc5d113a6a3bdca03e1354bba311bc764780621ea84dbd4d9244768e676220bd4972d356b436a2e394cf1bdb271c0a7b77c9fbd4bf484b0a345284424cdf4e6a20e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b8557214ff47464008ba8e62142e4d1e2e8a25a219cecbf912b80108cda6021a480a20b814101d092d36084ba9418cc46a0877511378a45c5ffa8a899368e8126479f412240801122025fa0ced0c2b0a1b3bec8ae33f375dfee4836a3674ea40dd14c88620bc0c0ad5226808021214ff47464008ba8e62142e4d1e2e8a25a219cecbf91a0c0885f2c9c00610cb8c89e4012240b440ea9a00e757ceebbf222ada9b61470b723cfc224264951aff77a69395a7abb3dc9bf8a459c5b74893da54d3e8a4d8f6048c2ef744afff99eb74fd64b2fb0e127c0a3c0a14ff47464008ba8e62142e4d1e2e8a25a219cecbf912220a20bdfc0be060a5c3bbbe1a2f1a18aba4397a4599c872cff158a5e1cfb8be3887051801123c0a14ff47464008ba8e62142e4d1e2e8a25a219cecbf912220a20bdfc0be060a5c3bbbe1a2f1a18aba4397a4599c872cff158a5e1cfb8be38870518011a06080110c5a602227c0a3c0a14ff47464008ba8e62142e4d1e2e8a25a219cecbf912220a20bdfc0be060a5c3bbbe1a2f1a18aba4397a4599c872cff158a5e1cfb8be3887051801123c0a14ff47464008ba8e62142e4d1e2e8a25a219cecbf912220a20bdfc0be060a5c3bbbe1a2f1a18aba4397a4599c872cff158a5e1cfb8be3887051801",
        },
        {
          index: true,
          key: "msg_index",
          value: "0",
        },
      ],
      type: "update_client",
    },
    {
      attributes: [
        {
          index: true,
          key: "module",
          value: "ibc_client",
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
          key: "action",
          value: "/ibc.core.channel.v1.MsgRecvPacket",
        },
        {
          index: true,
          key: "sender",
          value: "init1l94g4te0za07l2059634q6vl9pzj974cxfcgwy",
        },
        {
          index: true,
          key: "msg_index",
          value: "1",
        },
      ],
      type: "message",
    },
    {
      attributes: [
        {
          index: true,
          key: "packet_data",
          value:
            '{"classId":"init1k6ra07c0eu4x48d7dw0c2hv76mczsvg49xc7aj9mv4u2zjus7skqaguerl","classUri":null,"classData":"eyJvd25lciI6ImluaXQxd2M1M3U5c21uenV3cGt6NzA4a3dqNXMzeGV2cXN4MjYzajAwaGx1N25jbXNja3oyZ2NmczVqeDJtayIsImNvbnRyYWN0X2luZm8iOnsiY29kZV9pZCI6MTIsImNyZWF0b3IiOiJpbml0MXdjNTN1OXNtbnp1d3BrejcwOGt3ajVzM3hldnFzeDI2M2owMGhsdTduY21zY2t6MmdjZnM1angybWsiLCJhZG1pbiI6ImluaXQxcDV3N3h3OXA2c2pheWMybjN2djA1NnU1MGM1azdxYWU3YXBhazkiLCJwaW5uZWQiOmZhbHNlLCJpYmNfcG9ydCI6bnVsbH0sIm51bV90b2tlbnMiOjM0ODEsIm5hbWUiOiJUVVpJIiwic3ltYm9sIjoiVFVaSSIsImV4dGVuc2lvbiI6bnVsbH0=","tokenIds":["6089"],"tokenUris":["ipfs://bafybeifye6qvvdw45he36lfoqolfxunwvk3k3vh4b2ahloubv7cnstt56i/6089"],"tokenData":null,"sender":"init18cd6ufdufm4crr4tjr23uwhn26qz6ndea57aya","receiver":"init18cd6ufdufm4crr4tjr23uwhn26qz6ndea57aya","memo":null}',
        },
        {
          index: true,
          key: "packet_data_hex",
          value:
            "7b22636c6173734964223a22696e6974316b3672613037633065753478343864376477306332687637366d637a7376673439786337616a396d763475327a6a757337736b7161677565726c222c22636c617373557269223a6e756c6c2c22636c61737344617461223a2265794a766432356c63694936496d6c756158517864324d314d33553563323175656e5633634774364e7a4134613364714e584d7a6547563263584e344d6a597a616a4177614778314e32356a62584e6a61336f795a324e6d637a567165444a7461794973496d4e76626e527959574e3058326c755a6d38694f6e73695932396b5a5639705a4349364d544973496d4e795a574630623349694f694a70626d6c304d58646a4e544e314f584e74626e703164334272656a63774f477433616a567a4d33686c646e467a654449324d326f774d476873645464755932317a593274364d6d646a5a6e4d31616e6779625773694c434a685a47317062694936496d6c7561585178634456334e3368334f5841326332706865574d79626a4e32646a41314e6e55314d474d31617a64785957553359584268617a6b694c434a77615735755a5751694f6d5a6862484e6c4c434a70596d4e666347397964434936626e567362483073496d3531625639306232746c626e4d694f6a4d304f444573496d3568625755694f694a555656704a4969776963336c74596d3973496a6f695646566153534973496d56346447567563326c7662694936626e56736248303d222c22746f6b656e496473223a5b2236303839225d2c22746f6b656e55726973223a5b22697066733a2f2f626166796265696679653671767664773435686533366c666f716f6c6678756e77766b336b33766834623261686c6f75627637636e7374743536692f36303839225d2c22746f6b656e44617461223a6e756c6c2c2273656e646572223a22696e6974313863643675666475666d3463727234746a7232337577686e3236717a366e6465613537617961222c227265636569766572223a22696e6974313863643675666475666d3463727234746a7232337577686e3236717a366e6465613537617961222c226d656d6f223a6e756c6c7d",
        },
        {
          index: true,
          key: "packet_timeout_height",
          value: "0-0",
        },
        {
          index: true,
          key: "packet_timeout_timestamp",
          value: "1746042009484000000",
        },
        {
          index: true,
          key: "packet_sequence",
          value: "1",
        },
        {
          index: true,
          key: "packet_src_port",
          value:
            "wasm.init1wug8sewp6cedgkmrmvhl3lf3tulagm9hnvy8p0rppz9yjw0g4wtq7947m6",
        },
        {
          index: true,
          key: "packet_src_channel",
          value: "channel-1",
        },
        {
          index: true,
          key: "packet_dst_port",
          value: "nft-transfer",
        },
        {
          index: true,
          key: "packet_dst_channel",
          value: "channel-67",
        },
        {
          index: true,
          key: "packet_channel_ordering",
          value: "ORDER_UNORDERED",
        },
        {
          index: true,
          key: "packet_connection",
          value: "connection-35",
        },
        {
          index: true,
          key: "connection_id",
          value: "connection-35",
        },
        {
          index: true,
          key: "msg_index",
          value: "1",
        },
      ],
      type: "recv_packet",
    },
    {
      attributes: [
        {
          index: true,
          key: "module",
          value: "ibc_channel",
        },
        {
          index: true,
          key: "msg_index",
          value: "1",
        },
      ],
      type: "message",
    },
    {
      attributes: [
        {
          index: true,
          key: "trace_hash",
          value:
            "0A1FFECF8C217E1630E58ABF7BF857FD7CC762D165DF018D94DACBC8881209E2",
        },
        {
          index: true,
          key: "class_id",
          value:
            "ibc/0A1FFECF8C217E1630E58ABF7BF857FD7CC762D165DF018D94DACBC8881209E2",
        },
        {
          index: true,
          key: "msg_index",
          value: "1",
        },
      ],
      type: "class_trace",
    },
    {
      attributes: [
        {
          index: true,
          key: "sender",
          value: "0x1",
        },
        {
          index: true,
          key: "module_addr",
          value: "0x1",
        },
        {
          index: true,
          key: "module_name",
          value: "initia_nft",
        },
        {
          index: true,
          key: "function_name",
          value: "create_collection",
        },
        {
          index: true,
          key: "msg_index",
          value: "1",
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
            '{"object":"0xfa4e6b1a87f3acefcf070ecee04eb1e0ce4c6c5c89b87fe026b99c6ac47b010c","owner":"0x1","version":"1"}',
        },
        {
          index: true,
          key: "msg_index",
          value: "1",
        },
      ],
      type: "move",
    },
    {
      attributes: [
        {
          index: true,
          key: "type_tag",
          value: "0x1::collection::CreateCollectionEvent",
        },
        {
          index: true,
          key: "data",
          value:
            '{"collection":"0xfa4e6b1a87f3acefcf070ecee04eb1e0ce4c6c5c89b87fe026b99c6ac47b010c","creator":"0x1","name":"ibc/0A1FFECF8C217E1630E58ABF7BF857FD7CC762D165DF018D94DACBC8881209E2"}',
        },
        {
          index: true,
          key: "msg_index",
          value: "1",
        },
      ],
      type: "move",
    },
    {
      attributes: [
        {
          index: true,
          key: "sender",
          value: "0x1",
        },
        {
          index: true,
          key: "module_addr",
          value: "0x1",
        },
        {
          index: true,
          key: "module_name",
          value: "initia_nft",
        },
        {
          index: true,
          key: "function_name",
          value: "mint",
        },
        {
          index: true,
          key: "msg_index",
          value: "1",
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
            '{"object":"0x5eab800f87ca40210f6905ac31341352575a44246302c5b27f438e978071bf73","owner":"0x1","version":"1"}',
        },
        {
          index: true,
          key: "msg_index",
          value: "1",
        },
      ],
      type: "move",
    },
    {
      attributes: [
        {
          index: true,
          key: "type_tag",
          value: "0x1::collection::MintEvent",
        },
        {
          index: true,
          key: "data",
          value:
            '{"collection":"0xfa4e6b1a87f3acefcf070ecee04eb1e0ce4c6c5c89b87fe026b99c6ac47b010c","token_id":"6089","nft":"0x5eab800f87ca40210f6905ac31341352575a44246302c5b27f438e978071bf73"}',
        },
        {
          index: true,
          key: "msg_index",
          value: "1",
        },
      ],
      type: "move",
    },
    {
      attributes: [
        {
          index: true,
          key: "type_tag",
          value: "0x1::object::TransferEvent",
        },
        {
          index: true,
          key: "data",
          value:
            '{"object":"0x5eab800f87ca40210f6905ac31341352575a44246302c5b27f438e978071bf73","from":"0x1","to":"0x3e1bae25bc4eeb818eab90d51e3af356802d4db9"}',
        },
        {
          index: true,
          key: "msg_index",
          value: "1",
        },
      ],
      type: "move",
    },
    {
      attributes: [
        {
          index: true,
          key: "module",
          value: "nonfungibletokentransfer",
        },
        {
          index: true,
          key: "sender",
          value: "init18cd6ufdufm4crr4tjr23uwhn26qz6ndea57aya",
        },
        {
          index: true,
          key: "receiver",
          value: "init18cd6ufdufm4crr4tjr23uwhn26qz6ndea57aya",
        },
        {
          index: true,
          key: "class_id",
          value:
            "init1k6ra07c0eu4x48d7dw0c2hv76mczsvg49xc7aj9mv4u2zjus7skqaguerl",
        },
        {
          index: true,
          key: "token_ids",
          value: "6089",
        },
        {
          index: true,
          key: "memo",
          value: "",
        },
        {
          index: true,
          key: "success",
          value: "true",
        },
        {
          index: true,
          key: "msg_index",
          value: "1",
        },
      ],
      type: "non_fungible_token_packet",
    },
    {
      attributes: [
        {
          index: true,
          key: "packet_data",
          value:
            '{"classId":"init1k6ra07c0eu4x48d7dw0c2hv76mczsvg49xc7aj9mv4u2zjus7skqaguerl","classUri":null,"classData":"eyJvd25lciI6ImluaXQxd2M1M3U5c21uenV3cGt6NzA4a3dqNXMzeGV2cXN4MjYzajAwaGx1N25jbXNja3oyZ2NmczVqeDJtayIsImNvbnRyYWN0X2luZm8iOnsiY29kZV9pZCI6MTIsImNyZWF0b3IiOiJpbml0MXdjNTN1OXNtbnp1d3BrejcwOGt3ajVzM3hldnFzeDI2M2owMGhsdTduY21zY2t6MmdjZnM1angybWsiLCJhZG1pbiI6ImluaXQxcDV3N3h3OXA2c2pheWMybjN2djA1NnU1MGM1azdxYWU3YXBhazkiLCJwaW5uZWQiOmZhbHNlLCJpYmNfcG9ydCI6bnVsbH0sIm51bV90b2tlbnMiOjM0ODEsIm5hbWUiOiJUVVpJIiwic3ltYm9sIjoiVFVaSSIsImV4dGVuc2lvbiI6bnVsbH0=","tokenIds":["6089"],"tokenUris":["ipfs://bafybeifye6qvvdw45he36lfoqolfxunwvk3k3vh4b2ahloubv7cnstt56i/6089"],"tokenData":null,"sender":"init18cd6ufdufm4crr4tjr23uwhn26qz6ndea57aya","receiver":"init18cd6ufdufm4crr4tjr23uwhn26qz6ndea57aya","memo":null}',
        },
        {
          index: true,
          key: "packet_data_hex",
          value:
            "7b22636c6173734964223a22696e6974316b3672613037633065753478343864376477306332687637366d637a7376673439786337616a396d763475327a6a757337736b7161677565726c222c22636c617373557269223a6e756c6c2c22636c61737344617461223a2265794a766432356c63694936496d6c756158517864324d314d33553563323175656e5633634774364e7a4134613364714e584d7a6547563263584e344d6a597a616a4177614778314e32356a62584e6a61336f795a324e6d637a567165444a7461794973496d4e76626e527959574e3058326c755a6d38694f6e73695932396b5a5639705a4349364d544973496d4e795a574630623349694f694a70626d6c304d58646a4e544e314f584e74626e703164334272656a63774f477433616a567a4d33686c646e467a654449324d326f774d476873645464755932317a593274364d6d646a5a6e4d31616e6779625773694c434a685a47317062694936496d6c7561585178634456334e3368334f5841326332706865574d79626a4e32646a41314e6e55314d474d31617a64785957553359584268617a6b694c434a77615735755a5751694f6d5a6862484e6c4c434a70596d4e666347397964434936626e567362483073496d3531625639306232746c626e4d694f6a4d304f444573496d3568625755694f694a555656704a4969776963336c74596d3973496a6f695646566153534973496d56346447567563326c7662694936626e56736248303d222c22746f6b656e496473223a5b2236303839225d2c22746f6b656e55726973223a5b22697066733a2f2f626166796265696679653671767664773435686533366c666f716f6c6678756e77766b336b33766834623261686c6f75627637636e7374743536692f36303839225d2c22746f6b656e44617461223a6e756c6c2c2273656e646572223a22696e6974313863643675666475666d3463727234746a7232337577686e3236717a366e6465613537617961222c227265636569766572223a22696e6974313863643675666475666d3463727234746a7232337577686e3236717a366e6465613537617961222c226d656d6f223a6e756c6c7d",
        },
        {
          index: true,
          key: "packet_timeout_height",
          value: "0-0",
        },
        {
          index: true,
          key: "packet_timeout_timestamp",
          value: "1746042009484000000",
        },
        {
          index: true,
          key: "packet_sequence",
          value: "1",
        },
        {
          index: true,
          key: "packet_src_port",
          value:
            "wasm.init1wug8sewp6cedgkmrmvhl3lf3tulagm9hnvy8p0rppz9yjw0g4wtq7947m6",
        },
        {
          index: true,
          key: "packet_src_channel",
          value: "channel-1",
        },
        {
          index: true,
          key: "packet_dst_port",
          value: "nft-transfer",
        },
        {
          index: true,
          key: "packet_dst_channel",
          value: "channel-67",
        },
        {
          index: true,
          key: "packet_ack",
          value:
            '{"app_acknowledgement":"eyJyZXN1bHQiOiJBUT09In0=","forward_relayer_address":"","underlying_app_success":true}',
        },
        {
          index: true,
          key: "packet_ack_hex",
          value:
            "7b226170705f61636b6e6f776c656467656d656e74223a2265794a795a584e31624851694f694a4255543039496e303d222c22666f72776172645f72656c617965725f61646472657373223a22222c22756e6465726c79696e675f6170705f73756363657373223a747275657d",
        },
        {
          index: true,
          key: "packet_channel_ordering",
          value: "ORDER_UNORDERED",
        },
        {
          index: true,
          key: "packet_connection",
          value: "connection-35",
        },
        {
          index: true,
          key: "connection_id",
          value: "connection-35",
        },
        {
          index: true,
          key: "msg_index",
          value: "1",
        },
      ],
      type: "write_acknowledgement",
    },
    {
      attributes: [
        {
          index: true,
          key: "module",
          value: "ibc_channel",
        },
        {
          index: true,
          key: "msg_index",
          value: "1",
        },
      ],
      type: "message",
    },
  ],
  gas_used: "419140",
  gas_wanted: "808187",
  height: "2090166",
  info: "",
  logs: [],
  raw_log: "",
  timestamp: "2025-04-30T19:24:53Z",
  tx: {
    "@type": "/cosmos.tx.v1beta1.Tx",
    auth_info: {
      fee: {
        amount: [
          {
            amount: "12123",
            denom: "uinit",
          },
        ],
        gas_limit: "808187",
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
            key: "A3yDdIUdmuc1kCOCqhszDWhRDLTl8/wUFz/CPr0IpTXa",
          },
          sequence: "1760",
        },
      ],
      tip: null,
    },
    body: {
      extension_options: [],
      memo: "Relayed by PublicAwesome 🤘 | rly(2.5.2)",
      messages: [
        {
          "@type": "/ibc.core.client.v1.MsgUpdateClient",
          client_id: "07-tendermint-35",
          client_message: {
            "@type": "/ibc.lightclients.tendermint.v1.Header",
            signed_header: {
              commit: {
                block_id: {
                  hash: "uBQQHQktNghLqUGMxGoId1ETeKRcX/qKiZNo6BJkefQ=",
                  part_set_header: {
                    hash: "JfoM7QwrChs77IrjPzdd/uSDajZ06kDdFMiGILwMCtU=",
                    total: 1,
                  },
                },
                height: "37709",
                round: 0,
                signatures: [
                  {
                    block_id_flag: "BLOCK_ID_FLAG_COMMIT",
                    signature:
                      "tEDqmgDnV87rvyIq2pthRwtyPPwiQmSVGv93ppOVp6uz3Jv4pFnFt0iT2lTT6KTY9gSMLvdEr/+Z63T9ZLL7Dg==",
                    timestamp: "2025-04-30T19:24:53.478299723Z",
                    validator_address: "/0dGQAi6jmIULk0eLoolohnOy/k=",
                  },
                ],
              },
              header: {
                app_hash: "9pnq3F0ROmo73KA+E1S7oxG8dkeAYh6oTb1NkkR2jmc=",
                chain_id: "intergaze-1",
                consensus_hash: "IuP6LRaVrn22LlVne/DJFLHsiNZM2NKAzy4psuBtCWU=",
                data_hash: "47DEQpj8HBSa+/TImW+5JCeuQeRkm5NMpJWZG3hSuFU=",
                evidence_hash: "47DEQpj8HBSa+/TImW+5JCeuQeRkm5NMpJWZG3hSuFU=",
                height: "37709",
                last_block_id: {
                  hash: "FpLtUhB/K6i99iHJImeLcNuBJuGFqs3+DuT2cgzOksI=",
                  part_set_header: {
                    hash: "08+xOQYMgFrGSUiwf+VpDa8blXh6rWXXiuFyfM4yLvQ=",
                    total: 1,
                  },
                },
                last_commit_hash:
                  "9N6myvcTTMyOgYaEA/AG/PL+p78ZH7latYwLrLZJMeY=",
                last_results_hash:
                  "vUly01a0NqLjlM8b2yccCnt3yfvUv0hLCjRShEJM304=",
                next_validators_hash:
                  "s6a6k2SbdroKHgi3GAU1Eqr/4ggDyL/hTMyYXsI2SqM=",
                proposer_address: "/0dGQAi6jmIULk0eLoolohnOy/k=",
                time: "2025-04-30T19:24:52.974733892Z",
                validators_hash: "s6a6k2SbdroKHgi3GAU1Eqr/4ggDyL/hTMyYXsI2SqM=",
                version: {
                  app: "0",
                  block: "11",
                },
              },
            },
            trusted_height: {
              revision_height: "37701",
              revision_number: "1",
            },
            trusted_validators: {
              proposer: {
                address: "/0dGQAi6jmIULk0eLoolohnOy/k=",
                proposer_priority: "0",
                pub_key: {
                  ed25519: "vfwL4GClw7u+Gi8aGKukOXpFmchyz/FYpeHPuL44hwU=",
                },
                voting_power: "1",
              },
              total_voting_power: "0",
              validators: [
                {
                  address: "/0dGQAi6jmIULk0eLoolohnOy/k=",
                  proposer_priority: "0",
                  pub_key: {
                    ed25519: "vfwL4GClw7u+Gi8aGKukOXpFmchyz/FYpeHPuL44hwU=",
                  },
                  voting_power: "1",
                },
              ],
            },
            validator_set: {
              proposer: {
                address: "/0dGQAi6jmIULk0eLoolohnOy/k=",
                proposer_priority: "0",
                pub_key: {
                  ed25519: "vfwL4GClw7u+Gi8aGKukOXpFmchyz/FYpeHPuL44hwU=",
                },
                voting_power: "1",
              },
              total_voting_power: "0",
              validators: [
                {
                  address: "/0dGQAi6jmIULk0eLoolohnOy/k=",
                  proposer_priority: "0",
                  pub_key: {
                    ed25519: "vfwL4GClw7u+Gi8aGKukOXpFmchyz/FYpeHPuL44hwU=",
                  },
                  voting_power: "1",
                },
              ],
            },
          },
          signer: "init1l94g4te0za07l2059634q6vl9pzj974cxfcgwy",
        },
        {
          "@type": "/ibc.core.channel.v1.MsgRecvPacket",
          packet: {
            data: "eyJjbGFzc0lkIjoiaW5pdDFrNnJhMDdjMGV1NHg0OGQ3ZHcwYzJodjc2bWN6c3ZnNDl4YzdhajltdjR1MnpqdXM3c2txYWd1ZXJsIiwiY2xhc3NVcmkiOm51bGwsImNsYXNzRGF0YSI6ImV5SnZkMjVsY2lJNkltbHVhWFF4ZDJNMU0zVTVjMjF1ZW5WM2NHdDZOekE0YTNkcU5YTXplR1YyY1hONE1qWXphakF3YUd4MU4yNWpiWE5qYTNveVoyTm1jelZxZURKdGF5SXNJbU52Ym5SeVlXTjBYMmx1Wm04aU9uc2lZMjlrWlY5cFpDSTZNVElzSW1OeVpXRjBiM0lpT2lKcGJtbDBNWGRqTlROMU9YTnRibnAxZDNCcmVqY3dPR3QzYWpWek0zaGxkbkZ6ZURJMk0yb3dNR2hzZFRkdVkyMXpZMnQ2TW1kalpuTTFhbmd5YldzaUxDSmhaRzFwYmlJNkltbHVhWFF4Y0RWM04zaDNPWEEyYzJwaGVXTXliak4yZGpBMU5uVTFNR00xYXpkeFlXVTNZWEJoYXpraUxDSndhVzV1WldRaU9tWmhiSE5sTENKcFltTmZjRzl5ZENJNmJuVnNiSDBzSW01MWJWOTBiMnRsYm5NaU9qTTBPREVzSW01aGJXVWlPaUpVVlZwSklpd2ljM2x0WW05c0lqb2lWRlZhU1NJc0ltVjRkR1Z1YzJsdmJpSTZiblZzYkgwPSIsInRva2VuSWRzIjpbIjYwODkiXSwidG9rZW5VcmlzIjpbImlwZnM6Ly9iYWZ5YmVpZnllNnF2dmR3NDVoZTM2bGZvcW9sZnh1bnd2azNrM3ZoNGIyYWhsb3VidjdjbnN0dDU2aS82MDg5Il0sInRva2VuRGF0YSI6bnVsbCwic2VuZGVyIjoiaW5pdDE4Y2Q2dWZkdWZtNGNycjR0anIyM3V3aG4yNnF6Nm5kZWE1N2F5YSIsInJlY2VpdmVyIjoiaW5pdDE4Y2Q2dWZkdWZtNGNycjR0anIyM3V3aG4yNnF6Nm5kZWE1N2F5YSIsIm1lbW8iOm51bGx9",
            destination_channel: "channel-67",
            destination_port: "nft-transfer",
            sequence: "1",
            source_channel: "channel-1",
            source_port:
              "wasm.init1wug8sewp6cedgkmrmvhl3lf3tulagm9hnvy8p0rppz9yjw0g4wtq7947m6",
            timeout_height: {
              revision_height: "0",
              revision_number: "0",
            },
            timeout_timestamp: "1746042009484000000",
          },
          proof_commitment:
            "CrQGCrEGCnVjb21taXRtZW50cy9wb3J0cy93YXNtLmluaXQxd3VnOHNld3A2Y2VkZ2ttcm12aGwzbGYzdHVsYWdtOWhudnk4cDBycHB6OXlqdzBnNHd0cTc5NDdtNi9jaGFubmVscy9jaGFubmVsLTEvc2VxdWVuY2VzLzESIL9BPI3ihLsMqNvdIxJbgMFHUIa8p/BSNfL3chf0zLbKGg0IARgBIAEqBQACmM0EIisIARInAgSYzQQglLjww6IIrsOx58IRbwo4PV1zf6iSQn7PeGMoHODBtLsgIisIARInBAiYzQQg/2yqLFZhsh8ghIzFyoExPFExs0LAxZdw674/n89jP/YgIisIARInBhCYzQQgRaWrvrkY7wAGJ2+GgtiJ5hGae3Q/D6clhrPYgdpK8BAgIisIARInCCCYzQQgkX72AsMcp9Lnnx64f+XtltX80TlE9BS1mHHqRFoaEyAgIisIARInCj6YzQQgMKf9z71gx5NaHH1K0GwxUbn4glk/2VHy2B3UWHoVBtQgIisIARInDGaYzQQgHlTkhjdFbaOkcxIoBLEwQyGgSqsZaKarCpdO6TMMTk8gIi4IARIHDpwBmM0EIBohILNz/QifNMJzD2GxqrthY5V8LZaihuxXkw9aY6jXPA3XIi4IARIHEtIDmM0EIBohIH1bJWXxJq3ZxnkGyAtujDwu5lrSaFsDiAk8qF0I7OLyIi4IARIHFLgHmM0EIBohINHx+GSKaRAmOjeDfVPu715K1gOxkHEgGRw5ML8viJOjIi4IARIHFt4LmM0EIBohIB3aCA9WXBKkIk0rI7VSF3neHQ3img7yED+YAYNn2Y8xIi4IARIHGM4UmM0EIBohIDXhyyB3U4hX9llSdYFGaCU+bXW/VIkDpjvnQolr7AIhIiwIARIoGowmmM0EIH2Cl1zyiJ0aYWt/+EXkDFRLEGYyzdkAMK3lc5C+jtztICIsCAESKBy8OpjNBCB7MICgH5SW4d1WF63pBn/Z2gWzsZlBEgVVKCdl7C+1WCAiLQgBEikemr8BmM0EIApkiPUbWXymMd/KCs8S6xoId3l/55xQHLcSo+RpEFWRIAr+AQr7AQoDaWJjEiA0nvh5YVYv0yUmlhUpqWfwf3hKWG5n8BBhlGrSM7YJgRoJCAEYASABKgEAIicIARIBARogLNi1BwCVBUYYCtl5E1qHCMLqIJj/9q3jG35A613PfAUiJwgBEgEBGiAOlgsmJVU3Ri7z2var07XtFQZgauAQsfiOlU6OrvN9IiIlCAESIQFiZU0ZSa9jbnm7TyMZ8CTy9FrXWbw3bkfglY5xxwNKAiIlCAESIQGZ5tkFosr5fmVGYZsHuDLUvC0ufL4iT5PCX/mQGyfWRSInCAESAQEaIPIOnNj3qwOb5n62JzChl3NSdYKmccB2ARxFqjvQ43QT",
          proof_height: {
            revision_height: "37709",
            revision_number: "1",
          },
          signer: "init1l94g4te0za07l2059634q6vl9pzj974cxfcgwy",
        },
      ],
      non_critical_extension_options: [],
      timeout_height: "0",
    },
    signatures: [
      "cOs3psvUBGVsiBa2NfrfaH5FI87MXkdR2zfvRkNIx7MOvhINVVLX+KhGFNgaFwZLea4x24GIWO8iGkv4pQpV5g==",
    ],
  },
  txhash: "718AFCF8FC3A9940295F8A2CC3FBB035A03D128CC190764946A539D0AE3DDFC1",
};

export const mockApiResponsesIbcReceiveNft = {
  "/initia/move/v1/accounts/0x5eab800f87ca40210f6905ac31341352575a44246302c5b27f438e978071bf73/resources":
    {
      pagination: { next_key: null, total: "0" },
      resources: [
        {
          address:
            "0x5eab800f87ca40210f6905ac31341352575a44246302c5b27f438e978071bf73",
          move_resource:
            '{"type":"0x1::nft::Nft","data":{"collection":{"inner":"0xfa4e6b1a87f3acefcf070ecee04eb1e0ce4c6c5c89b87fe026b99c6ac47b010c"},"description":"","token_id":"6089","uri":"ipfs://bafybeifye6qvvdw45he36lfoqolfxunwvk3k3vh4b2ahloubv7cnstt56i/6089"}}',
          raw_bytes:
            "+k5rGofzrO/PBw7O4E6x4M5MbFyJuH/gJrmcasR7AQwABDYwODlHaXBmczovL2JhZnliZWlmeWU2cXZ2ZHc0NWhlMzZsZm9xb2xmeHVud3ZrM2szdmg0YjJhaGxvdWJ2N2Nuc3R0NTZpLzYwODk=",
          struct_tag: "0x1::nft::Nft",
        },
        {
          address:
            "0x5eab800f87ca40210f6905ac31341352575a44246302c5b27f438e978071bf73",
          move_resource:
            '{"type":"0x1::object::ObjectCore","data":{"allow_ungated_transfer":true,"owner":"0x3e1bae25bc4eeb818eab90d51e3af356802d4db9","version":"1"}}',
          raw_bytes: "AAAAAAAAAAAAAAAAPhuuJbxO64GOq5DVHjrzVoAtTbkBAQAAAAAAAAA=",
          struct_tag: "0x1::object::ObjectCore",
        },
        {
          address:
            "0x5eab800f87ca40210f6905ac31341352575a44246302c5b27f438e978071bf73",
          move_resource:
            '{"type":"0x1::initia_nft::InitiaNft","data":{"burn_ref":{"delete_ref":{"self":"0x5eab800f87ca40210f6905ac31341352575a44246302c5b27f438e978071bf73","version":"1"}},"mutator_ref":null}}',
          raw_bytes: "AV6rgA+HykAhD2kFrDE0E1JXWkQkYwLFsn9DjpeAcb9zAQAAAAAAAAAA",
          struct_tag: "0x1::initia_nft::InitiaNft",
        },
      ],
    },
};
