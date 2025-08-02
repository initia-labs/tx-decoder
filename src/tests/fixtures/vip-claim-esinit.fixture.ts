export const mockMsgVipClaimEsinit = {
  code: 0,
  codespace: "",
  data: "12240A222F696E697469612E6D6F76652E76312E4D736745786563757465526573706F6E7365",
  events: [
    {
      attributes: [
        {
          index: true,
          key: "sender",
          value: "0x1,0xdcd776abe2567ebde2e3b6431071cae6e27492be",
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
            '{"store_addr":"0xaef66003dffb90244408298165002e552a76923d1aa510988fa2aad363b678bb","metadata_addr":"0x8e4733bdabcf7d4afc3d14f0dd46c9bf52fb0fce9e4b996c939e195b8bc891d9","amount":"27488"}',
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
            '{"store_addr":"0x66a8cb0bfb991610dcffb8a6543ac0887c7c5405b8f985ebed6d628fe50c4686","metadata_addr":"0x8e4733bdabcf7d4afc3d14f0dd46c9bf52fb0fce9e4b996c939e195b8bc891d9","amount":"27488"}',
        },
      ],
      type: "move",
    },
    {
      attributes: [
        {
          index: true,
          key: "spender",
          value: "init1mnthd2lz2eltmchrkep3quw2um38fy47qw43u6",
        },
        {
          index: true,
          key: "amount",
          value: "27488uinit",
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
          value: "27488uinit",
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
          value: "init1mnthd2lz2eltmchrkep3quw2um38fy47qw43u6",
        },
        {
          index: true,
          key: "amount",
          value: "27488uinit",
        },
      ],
      type: "transfer",
    },
    {
      attributes: [
        {
          index: true,
          key: "sender",
          value: "init1mnthd2lz2eltmchrkep3quw2um38fy47qw43u6",
        },
      ],
      type: "message",
    },
    {
      attributes: [
        {
          index: true,
          key: "fee",
          value: "27488uinit",
        },
        {
          index: true,
          key: "fee_payer",
          value: "init1mnthd2lz2eltmchrkep3quw2um38fy47qw43u6",
        },
      ],
      type: "tx",
    },
    {
      attributes: [
        {
          index: true,
          key: "acc_seq",
          value: "init1mnthd2lz2eltmchrkep3quw2um38fy47qw43u6/82",
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
            "iauU7JdGtka0nxrFIOnFdqno/AZGXu6wPIrZTiYdIrhhDhmrznS9ewoKehcg7bQb32upayEEicLE4jiApelyng==",
        },
      ],
      type: "tx",
    },
    {
      attributes: [
        {
          index: true,
          key: "action",
          value: "/initia.move.v1.MsgExecute",
        },
        {
          index: true,
          key: "sender",
          value: "init1mnthd2lz2eltmchrkep3quw2um38fy47qw43u6",
        },
        {
          index: true,
          key: "module",
          value: "move",
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
          value: "0xdcd776abe2567ebde2e3b6431071cae6e27492be",
        },
        {
          index: true,
          key: "module_addr",
          value:
            "0x3a886b32a802582f2e446e74d4a24d1d7ed01adf46d2a8f65c5723887e708789",
        },
        {
          index: true,
          key: "module_name",
          value: "vip",
        },
        {
          index: true,
          key: "function_name",
          value: "batch_claim_user_reward_script",
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
          value:
            "0x3a886b32a802582f2e446e74d4a24d1d7ed01adf46d2a8f65c5723887e708789::tvl_manager::TVLSnapshotEvent",
        },
        {
          index: true,
          key: "data",
          value:
            '{"stage":"7","bridge_id":"11","time":"1753930587","tvl":"7857748296"}',
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
          value:
            "0x3a886b32a802582f2e446e74d4a24d1d7ed01adf46d2a8f65c5723887e708789::tvl_manager::TVLSnapshotEvent",
        },
        {
          index: true,
          key: "data",
          value:
            '{"stage":"7","bridge_id":"12","time":"1753930587","tvl":"398726851000"}',
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
          value:
            "0x3a886b32a802582f2e446e74d4a24d1d7ed01adf46d2a8f65c5723887e708789::tvl_manager::TVLSnapshotEvent",
        },
        {
          index: true,
          key: "data",
          value:
            '{"stage":"7","bridge_id":"13","time":"1753930587","tvl":"7500001"}',
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
          value:
            "0x3a886b32a802582f2e446e74d4a24d1d7ed01adf46d2a8f65c5723887e708789::tvl_manager::TVLSnapshotEvent",
        },
        {
          index: true,
          key: "data",
          value:
            '{"stage":"7","bridge_id":"16","time":"1753930587","tvl":"4100193929672"}',
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
          value:
            "0x3a886b32a802582f2e446e74d4a24d1d7ed01adf46d2a8f65c5723887e708789::tvl_manager::TVLSnapshotEvent",
        },
        {
          index: true,
          key: "data",
          value:
            '{"stage":"7","bridge_id":"17","time":"1753930587","tvl":"759183802000"}',
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
          value:
            "0x3a886b32a802582f2e446e74d4a24d1d7ed01adf46d2a8f65c5723887e708789::tvl_manager::TVLSnapshotEvent",
        },
        {
          index: true,
          key: "data",
          value:
            '{"stage":"7","bridge_id":"27","time":"1753930587","tvl":"76224251187"}',
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
          value:
            "0x3a886b32a802582f2e446e74d4a24d1d7ed01adf46d2a8f65c5723887e708789::tvl_manager::TVLSnapshotEvent",
        },
        {
          index: true,
          key: "data",
          value:
            '{"stage":"7","bridge_id":"29","time":"1753930587","tvl":"152557897385"}',
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
          value:
            "0x3a886b32a802582f2e446e74d4a24d1d7ed01adf46d2a8f65c5723887e708789::tvl_manager::TVLSnapshotEvent",
        },
        {
          index: true,
          key: "data",
          value:
            '{"stage":"7","bridge_id":"31","time":"1753930587","tvl":"84962419187"}',
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
          value:
            "0x3a886b32a802582f2e446e74d4a24d1d7ed01adf46d2a8f65c5723887e708789::tvl_manager::TVLSnapshotEvent",
        },
        {
          index: true,
          key: "data",
          value:
            '{"stage":"7","bridge_id":"32","time":"1753930587","tvl":"3230635618647"}',
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
          value:
            "0x3a886b32a802582f2e446e74d4a24d1d7ed01adf46d2a8f65c5723887e708789::vesting::UserVestingCreateEvent",
        },
        {
          index: true,
          key: "data",
          value:
            '{"account":"0xdcd776abe2567ebde2e3b6431071cae6e27492be","bridge_id":"32","version":"1","start_stage":"1","end_stage":"27","l2_score":"7583744597","minimum_score":"3791872298","initial_reward":"54847913"}',
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
          value:
            "0x3a886b32a802582f2e446e74d4a24d1d7ed01adf46d2a8f65c5723887e708789::vesting::UserVestingCreateEvent",
        },
        {
          index: true,
          key: "data",
          value:
            '{"account":"0xdcd776abe2567ebde2e3b6431071cae6e27492be","bridge_id":"32","version":"1","start_stage":"2","end_stage":"28","l2_score":"0","minimum_score":"0","initial_reward":"0"}',
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
          value:
            "0x3a886b32a802582f2e446e74d4a24d1d7ed01adf46d2a8f65c5723887e708789::vesting::UserVestingFinalizedEvent",
        },
        {
          index: true,
          key: "data",
          value:
            '{"account":"0xdcd776abe2567ebde2e3b6431071cae6e27492be","bridge_id":"32","version":"1","start_stage":"2","penalty_reward":"0"}',
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
          value:
            "0x3a886b32a802582f2e446e74d4a24d1d7ed01adf46d2a8f65c5723887e708789::vesting::UserVestingCreateEvent",
        },
        {
          index: true,
          key: "data",
          value:
            '{"account":"0xdcd776abe2567ebde2e3b6431071cae6e27492be","bridge_id":"32","version":"1","start_stage":"3","end_stage":"29","l2_score":"0","minimum_score":"0","initial_reward":"0"}',
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
          value:
            "0x3a886b32a802582f2e446e74d4a24d1d7ed01adf46d2a8f65c5723887e708789::vesting::UserVestingFinalizedEvent",
        },
        {
          index: true,
          key: "data",
          value:
            '{"account":"0xdcd776abe2567ebde2e3b6431071cae6e27492be","bridge_id":"32","version":"1","start_stage":"3","penalty_reward":"0"}',
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
          value:
            "0x3a886b32a802582f2e446e74d4a24d1d7ed01adf46d2a8f65c5723887e708789::vesting::UserVestingCreateEvent",
        },
        {
          index: true,
          key: "data",
          value:
            '{"account":"0xdcd776abe2567ebde2e3b6431071cae6e27492be","bridge_id":"32","version":"1","start_stage":"4","end_stage":"30","l2_score":"12725422497","minimum_score":"6362711248","initial_reward":"42967878"}',
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
          value:
            "0x3a886b32a802582f2e446e74d4a24d1d7ed01adf46d2a8f65c5723887e708789::vesting::UserVestingCreateEvent",
        },
        {
          index: true,
          key: "data",
          value:
            '{"account":"0xdcd776abe2567ebde2e3b6431071cae6e27492be","bridge_id":"32","version":"1","start_stage":"5","end_stage":"31","l2_score":"11014089944","minimum_score":"5507044972","initial_reward":"40473846"}',
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
          value:
            "0x3a886b32a802582f2e446e74d4a24d1d7ed01adf46d2a8f65c5723887e708789::vesting::UserVestingCreateEvent",
        },
        {
          index: true,
          key: "data",
          value:
            '{"account":"0xdcd776abe2567ebde2e3b6431071cae6e27492be","bridge_id":"32","version":"1","start_stage":"6","end_stage":"32","l2_score":"14527841840","minimum_score":"7263920920","initial_reward":"33228394"}',
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
          value:
            "0x3a886b32a802582f2e446e74d4a24d1d7ed01adf46d2a8f65c5723887e708789::vesting::UserVestingChangedEvent",
        },
        {
          index: true,
          key: "data",
          value:
            '{"account":"0xdcd776abe2567ebde2e3b6431071cae6e27492be","bridge_id":"32","version":"1","start_stage":"1","initial_reward":"54847913","remaining_reward":"44300238","penalty_reward":"4219070"}',
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
          value:
            "0x3a886b32a802582f2e446e74d4a24d1d7ed01adf46d2a8f65c5723887e708789::vesting::UserVestingChangedEvent",
        },
        {
          index: true,
          key: "data",
          value:
            '{"account":"0xdcd776abe2567ebde2e3b6431071cae6e27492be","bridge_id":"32","version":"1","start_stage":"4","initial_reward":"42967878","remaining_reward":"39662658","penalty_reward":"0"}',
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
          value:
            "0x3a886b32a802582f2e446e74d4a24d1d7ed01adf46d2a8f65c5723887e708789::vesting::UserVestingChangedEvent",
        },
        {
          index: true,
          key: "data",
          value:
            '{"account":"0xdcd776abe2567ebde2e3b6431071cae6e27492be","bridge_id":"32","version":"1","start_stage":"5","initial_reward":"40473846","remaining_reward":"38917160","penalty_reward":"0"}',
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
            '{"store_addr":"0x523bd8fb61230d8b2bc9c070d684e3482cf9c4ef7d08ebfcc9f756c36b229558","metadata_addr":"0x8e4733bdabcf7d4afc3d14f0dd46c9bf52fb0fce9e4b996c939e195b8bc891d9","amount":"11190511"}',
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
            '{"store_addr":"0xaef66003dffb90244408298165002e552a76923d1aa510988fa2aad363b678bb","metadata_addr":"0x8e4733bdabcf7d4afc3d14f0dd46c9bf52fb0fce9e4b996c939e195b8bc891d9","amount":"11190511"}',
        },
        {
          index: true,
          key: "msg_index",
          value: "0",
        },
      ],
      type: "move",
    },
  ],
  gas_used: "1303950",
  gas_wanted: "1832490",
  height: "5626453",
  info: "",
  logs: [],
  raw_log: "",
  timestamp: "2025-07-31T02:56:27Z",
  tx: {
    "@type": "/cosmos.tx.v1beta1.Tx",
    auth_info: {
      fee: {
        amount: [
          {
            amount: "27488",
            denom: "uinit",
          },
        ],
        gas_limit: "1832490",
        granter: "",
        payer: "",
      },
      signer_infos: [
        {
          mode_info: {
            single: {
              mode: "SIGN_MODE_EIP_191",
            },
          },
          public_key: {
            "@type": "/initia.crypto.v1beta1.ethsecp256k1.PubKey",
            key: "A+q6op56ZFIrhiNMGZ/Ek38M7zlyN54MobX6Z9TNZ58m",
          },
          sequence: "82",
        },
      ],
      tip: null,
    },
    body: {
      extension_options: [],
      memo: "",
      messages: [
        {
          "@type": "/initia.move.v1.MsgExecute",
          args: [
            "IAAAAAAAAAA=",
            "AQAAAAAAAAA=",
            "BgEAAAAAAAAAAgAAAAAAAAADAAAAAAAAAAQAAAAAAAAABQAAAAAAAAAGAAAAAAAAAA==",
            "Bgsg8sAawdRAbd7eanjKXIhrmiruKn73DQSalCoItLM9NM0gMqxQa9qPRKEM+xYBAFfSENjnn2o6ZoaGjNl/wZvvnpwgUr8nqWIBK45xI91KPjc6Kp+amkCQ04CGEG+t6VQwTRUgRHk1+xygLNnRH833Wjd2IB3cYfSjy9X4GFHVo63NB0wgtI94az74SFha0wj8cpUCBujm1jKmlsjbSRbAwqo0kQAgcIyiWWvj8a52hSmtuFf3u/gIJAmK6YpdA0qHStTeX3sgIQMmyl9Qhtq/obJMR+kzc1Fd/E0PrS/WEtdjW9yEw8EgNrB4BLIO6D1bHhPem/XW4OKtavS/WYRLSfAn2GLYau4gALhAlhjZWC9ObL8ZIYvkoy9g+BhAsJzIiEyR+FaT5cIgSBT27diOi/T8NDGAfC8mqmhr0ZhuMnmrUojY99URoNEgbfrqlM/KTa+ffRREKuSIT/d9s6JkMBhme/1/Y4I8KQ8AAAwg2ITkk2BeNs6krw9API05Oln2O65ZgEClpD62GLd3wpwglox8Id7cgroSVYmOJThVgjrhna/9lrbT4Gp1M1t0bKUgDMS+NHSgX1YuVLC5l1mZAVhEIuG3HgFh0vzZpPtu2a8gjnJYnMa240jjausLI7EgtyBvIiNR/+dtF4QNbRiFyxUgTVAJH2KzcDxaHVPSt4eTGtiv2esLiLRa1qZYL7TWNn0gJH37n+Z1FY97Kwj7/5WchT9YEzc/P+8KPwGO8ueD3VkgDYGI4RFs/mrGJo4dvZqC+sSaq5Pkhd9yeBwUR6YuelIgVfBXq4QsDtnqNdsxkP/Zp+wr0i4tbpjstiJm8RR5m7EgweIKAhvMbNLhSLB7AyvNVzbp9eIkp/z1e5qPRSzyRNEgp54y6c1Oq/5b5mtTIRku5XRuzbjMeRUBq24qUg9KXeYgI/OxyWdbB/6n4v6/zQ4Kt8FO6CgQvar+ebUbPT4iKnsgrUGosHp4AYIMGuZ4QB/5zJbI8hguB4YqrwpKkI/WJ/8NIBwHGos7ylfDkXzRPAJiv3+9QafoKQLVIxxi+LzsojddIDk51lbMK/MjRdKYGzKsJ8BwhVxSXqn+HSTnzon3gF8GIEmjirhl9hnlW6MYf6Qu4bC5gGit7RRYCjdRILUTwSXuIIIew/Bp7ophwDB/MM0xAuCnjDnZIn2IUuuokgueuoz7IMt/2YZ+d+lJz4Kl2Q9gqg7Aqm8McE/sZvMXp63O9c3iIOXlhQdrhYqsL72SYUUlsZjKTFgf6CfWgaIPTP9uVUB0ICzJWcKNFlpXWN581BZWkWH94Gwe/90PuvA5E9kCPYSAIMEZb6vtMwV0FP/6saQ+d4AeoXyrdJObeYIPwcXVi5xJIEjV61G4ipql6x1jwjvGyFt6GckwbttTqsq4vhc/CQ1fIMl25EIAQRK3szmohcQqtHM32Bk+zpt8UF5tMPKCrLPnIO2iQ70F43bnheh2nrVBwQ9TEBgdh42k23D2QzRi+NgkIA2isDcfrUUNB5DEEmLCdn3z8rE5cd2LjUd5uE6ECdE/ILf4tJTcT0NesACaDYL+Mike222iuXmOGKUiromxH8qkCyC98inPP1f6tsKfH4TbjHqx7H0e9R2t1fqhBZwgDP0UqyDT7Tj/uKMI5X9VUwXrNFgEgpyX5dFqYcGZSaTiK4BDFCCz/GgE2x1R9VR7pYC4f1NXT324/3Fvxh7z//gW07ANPiBxab55G3Mi2i+BKiHpvSrUCGlDLWE8SBN9Kz+sDea8FCAmzPNmA1nxMbsZhzJlb0upC5acyWtn+rgdm3fIgBhMQCDPfx4yppngVDhcxkuIKlMh2AZKkD36+wG/xhh0FbJuxiDNw2nXeOoQ6HaxjYn/NEc++JzdjqGoNNiua7VRSGsgBiDRUqtsgbO1Zp5IdycnGF9IH2K7d6i75LWKWww9jkxFZSACWugiBN4h5AJyQ0sGCcKS5QLOIivhsxlEsR7IA6AyJiABA9s0dsrj0xe7/BBNIa+u8xPyJvJ0TOc1sfnjjlurdCBym4dgqKIHNSIq/AAJK4ZsuANvSLkMo+tdIFW8RBeNrw==",
            "BlXCBsQBAAAAAAAAAAAAAAAAAAAAAAAAAKGJfvYCAAAA2Kx9kAIAAAAwRu1hAwAAAA==",
          ],
          function_name: "batch_claim_user_reward_script",
          module_address:
            "0x3a886b32a802582f2e446e74d4a24d1d7ed01adf46d2a8f65c5723887e708789",
          module_name: "vip",
          sender: "init1mnthd2lz2eltmchrkep3quw2um38fy47qw43u6",
          type_args: [],
        },
      ],
      non_critical_extension_options: [],
      timeout_height: "0",
    },
    signatures: [
      "iauU7JdGtka0nxrFIOnFdqno/AZGXu6wPIrZTiYdIrhhDhmrznS9ewoKehcg7bQb32upayEEicLE4jiApelyng==",
    ],
  },
  txhash: "0B32D5143E4E763940501CC9BA4ED7F1A29E3F42E5DB00BBF13C3CC4D780CBE4",
};

export const mockMsgVipClaimEsinitZero = {
  code: 0,
  codespace: "",
  data: "12240A222F696E697469612E6D6F76652E76312E4D736745786563757465526573706F6E736512240A222F696E697469612E6D6F76652E76312E4D736745786563757465526573706F6E7365",
  events: [
    {
      attributes: [
        {
          index: true,
          key: "sender",
          value: "0x1,0xf990ff98af796c66fbc0af09252f478a636672ed",
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
            '{"store_addr":"0x363088eba325d34d3f5c4beb84cf82cff074a6624dfeec6905417c3f83fac148","metadata_addr":"0x8e4733bdabcf7d4afc3d14f0dd46c9bf52fb0fce9e4b996c939e195b8bc891d9","amount":"25527"}',
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
            '{"store_addr":"0x66a8cb0bfb991610dcffb8a6543ac0887c7c5405b8f985ebed6d628fe50c4686","metadata_addr":"0x8e4733bdabcf7d4afc3d14f0dd46c9bf52fb0fce9e4b996c939e195b8bc891d9","amount":"25527"}',
        },
      ],
      type: "move",
    },
    {
      attributes: [
        {
          index: true,
          key: "spender",
          value: "init1lxg0lx9009kxd77q4uyj2t683f3kvuhdxafwd5",
        },
        {
          index: true,
          key: "amount",
          value: "25527uinit",
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
          value: "25527uinit",
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
          value: "init1lxg0lx9009kxd77q4uyj2t683f3kvuhdxafwd5",
        },
        {
          index: true,
          key: "amount",
          value: "25527uinit",
        },
      ],
      type: "transfer",
    },
    {
      attributes: [
        {
          index: true,
          key: "sender",
          value: "init1lxg0lx9009kxd77q4uyj2t683f3kvuhdxafwd5",
        },
      ],
      type: "message",
    },
    {
      attributes: [
        {
          index: true,
          key: "fee",
          value: "25527uinit",
        },
        {
          index: true,
          key: "fee_payer",
          value: "init1lxg0lx9009kxd77q4uyj2t683f3kvuhdxafwd5",
        },
      ],
      type: "tx",
    },
    {
      attributes: [
        {
          index: true,
          key: "acc_seq",
          value: "init1lxg0lx9009kxd77q4uyj2t683f3kvuhdxafwd5/22",
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
            "q5tNNo3CrYTs0O+r3jiUSGH5U/XZNiSXLBX5F1IVvU0lQOml+1K8QimmY6K/VzhqZJ1z71iWlKh/Dyp8tyhvRA==",
        },
      ],
      type: "tx",
    },
    {
      attributes: [
        {
          index: true,
          key: "action",
          value: "/initia.move.v1.MsgExecute",
        },
        {
          index: true,
          key: "sender",
          value: "init1lxg0lx9009kxd77q4uyj2t683f3kvuhdxafwd5",
        },
        {
          index: true,
          key: "module",
          value: "move",
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
          value: "0xf990ff98af796c66fbc0af09252f478a636672ed",
        },
        {
          index: true,
          key: "module_addr",
          value:
            "0x3a886b32a802582f2e446e74d4a24d1d7ed01adf46d2a8f65c5723887e708789",
        },
        {
          index: true,
          key: "module_name",
          value: "vip",
        },
        {
          index: true,
          key: "function_name",
          value: "batch_claim_user_reward_script",
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
          value:
            "0x3a886b32a802582f2e446e74d4a24d1d7ed01adf46d2a8f65c5723887e708789::vesting::UserVestingCreateEvent",
        },
        {
          index: true,
          key: "data",
          value:
            '{"account":"0xf990ff98af796c66fbc0af09252f478a636672ed","bridge_id":"32","version":"1","start_stage":"6","end_stage":"32","l2_score":"2237510053","minimum_score":"1118755026","initial_reward":"5117681"}',
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
          key: "action",
          value: "/initia.move.v1.MsgExecute",
        },
        {
          index: true,
          key: "sender",
          value: "init1lxg0lx9009kxd77q4uyj2t683f3kvuhdxafwd5",
        },
        {
          index: true,
          key: "module",
          value: "move",
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
          value: "0xf990ff98af796c66fbc0af09252f478a636672ed",
        },
        {
          index: true,
          key: "module_addr",
          value:
            "0x3a886b32a802582f2e446e74d4a24d1d7ed01adf46d2a8f65c5723887e708789",
        },
        {
          index: true,
          key: "module_name",
          value: "vip",
        },
        {
          index: true,
          key: "function_name",
          value: "batch_lock_stake_script",
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
          value:
            "0x3a886b32a802582f2e446e74d4a24d1d7ed01adf46d2a8f65c5723887e708789::vesting::UserVestingChangedEvent",
        },
        {
          index: true,
          key: "data",
          value:
            '{"account":"0xf990ff98af796c66fbc0af09252f478a636672ed","bridge_id":"32","version":"1","start_stage":"6","initial_reward":"5117681","remaining_reward":"0","penalty_reward":"0"}',
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
          value:
            "0x3a886b32a802582f2e446e74d4a24d1d7ed01adf46d2a8f65c5723887e708789::vesting::UserVestingFinalizedEvent",
        },
        {
          index: true,
          key: "data",
          value:
            '{"account":"0xf990ff98af796c66fbc0af09252f478a636672ed","bridge_id":"32","version":"1","start_stage":"6","penalty_reward":"0"}',
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
          value: "0x1::fungible_asset::WithdrawEvent",
        },
        {
          index: true,
          key: "data",
          value:
            '{"store_addr":"0x523bd8fb61230d8b2bc9c070d684e3482cf9c4ef7d08ebfcc9f756c36b229558","metadata_addr":"0x8e4733bdabcf7d4afc3d14f0dd46c9bf52fb0fce9e4b996c939e195b8bc891d9","amount":"5117681"}',
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
          value:
            "0x3a886b32a802582f2e446e74d4a24d1d7ed01adf46d2a8f65c5723887e708789::vip::LockStakeEvent",
        },
        {
          index: true,
          key: "data",
          value:
            '{"account":"0xf990ff98af796c66fbc0af09252f478a636672ed","bridge_id":"32","version":"1","stage":"6","amount":"5117681"}',
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
          value: "0x1::fungible_asset::WithdrawEvent",
        },
        {
          index: true,
          key: "data",
          value:
            '{"store_addr":"0xb259bcbfcad49341519ebf11fb589663431a1f2e656b5a879c53203169213a98","metadata_addr":"0xe0e9394b24e53775d6af87934ac02d73536ad58b7894f6ccff3f5e7c0d548e55","amount":"544179"}',
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
          value: "0x1::dex::ProvideEvent",
        },
        {
          index: true,
          key: "data",
          value:
            '{"coin_a":"0xe0e9394b24e53775d6af87934ac02d73536ad58b7894f6ccff3f5e7c0d548e55","coin_b":"0x8e4733bdabcf7d4afc3d14f0dd46c9bf52fb0fce9e4b996c939e195b8bc891d9","liquidity_token":"0x543b35a39cfadad3da3c23249c474455d15efd2f94f849473226dee8a3c7a9e1","coin_a_amount":"544179","coin_b_amount":"5117681","liquidity":"4953682"}',
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
          value: "0x1::fungible_asset::DepositEvent",
        },
        {
          index: true,
          key: "data",
          value:
            '{"store_addr":"0x39e454a8b7b1b71b2c0c27bf4ce1fbe234652f2c40f1fc209b023beaa7ece013","metadata_addr":"0xe0e9394b24e53775d6af87934ac02d73536ad58b7894f6ccff3f5e7c0d548e55","amount":"544179"}',
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
          value: "0x1::fungible_asset::DepositEvent",
        },
        {
          index: true,
          key: "data",
          value:
            '{"store_addr":"0xd8d20f9cd225d52f126bd3f973cbb83de3212b1b3dae547f13dd01f593d537b3","metadata_addr":"0x8e4733bdabcf7d4afc3d14f0dd46c9bf52fb0fce9e4b996c939e195b8bc891d9","amount":"5117681"}',
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
          value: "0x1::fungible_asset::MintEvent",
        },
        {
          index: true,
          key: "data",
          value:
            '{"metadata_addr":"0x543b35a39cfadad3da3c23249c474455d15efd2f94f849473226dee8a3c7a9e1","amount":"4953682"}',
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
          value: "0x1::fungible_asset::DepositEvent",
        },
        {
          index: true,
          key: "data",
          value:
            '{"store_addr":"0x781a86c45e9607aa154d716ec950b8d50c552a17421cdfa0d63fdd2708611b8f","metadata_addr":"0x543b35a39cfadad3da3c23249c474455d15efd2f94f849473226dee8a3c7a9e1","amount":"4953682"}',
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
          value: "0x1,0x93354845030274cd4bf1686abd60ab28ec52e1a7",
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
          value: "0x1::fungible_asset::WithdrawEvent",
        },
        {
          index: true,
          key: "data",
          value:
            '{"store_addr":"0xba2a23251eb06923fadb03ea9856c66510fefc4dfa9abe92cfb2961c9145cfb3","metadata_addr":"0x8e4733bdabcf7d4afc3d14f0dd46c9bf52fb0fce9e4b996c939e195b8bc891d9","amount":"188279"}',
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
          value: "0x1::fungible_asset::DepositEvent",
        },
        {
          index: true,
          key: "data",
          value:
            '{"store_addr":"0x76fb902aa3450e5e63fe46a2a03b093ed9afcddbe113ee5485e2ceafe4828685","metadata_addr":"0x8e4733bdabcf7d4afc3d14f0dd46c9bf52fb0fce9e4b996c939e195b8bc891d9","amount":"188279"}',
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
          key: "spender",
          value: "init1jv65s3grqf6v6jl3dp4t6c9t9rk99cd8ffy0za",
        },
        {
          index: true,
          key: "amount",
          value: "188279uinit",
        },
        {
          index: true,
          key: "msg_index",
          value: "1",
        },
      ],
      type: "coin_spent",
    },
    {
      attributes: [
        {
          index: true,
          key: "receiver",
          value:
            "init1dwn2pf23n58d39let3xqvua787lmer9ej5cutxdlnslp7gtvmvnsfsr9cz",
        },
        {
          index: true,
          key: "amount",
          value: "188279uinit",
        },
        {
          index: true,
          key: "msg_index",
          value: "1",
        },
      ],
      type: "coin_received",
    },
    {
      attributes: [
        {
          index: true,
          key: "recipient",
          value:
            "init1dwn2pf23n58d39let3xqvua787lmer9ej5cutxdlnslp7gtvmvnsfsr9cz",
        },
        {
          index: true,
          key: "sender",
          value: "init1jv65s3grqf6v6jl3dp4t6c9t9rk99cd8ffy0za",
        },
        {
          index: true,
          key: "amount",
          value: "188279uinit",
        },
        {
          index: true,
          key: "msg_index",
          value: "1",
        },
      ],
      type: "transfer",
    },
    {
      attributes: [
        {
          index: true,
          key: "sender",
          value: "init1jv65s3grqf6v6jl3dp4t6c9t9rk99cd8ffy0za",
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
          value:
            "0x1,0x6ba6a0a5519d0ed897f95c4c0673be3fbfbc8cb99531c599bf9c3e1f216cdb27",
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
          value: "0x1::fungible_asset::WithdrawEvent",
        },
        {
          index: true,
          key: "data",
          value:
            '{"store_addr":"0x781a86c45e9607aa154d716ec950b8d50c552a17421cdfa0d63fdd2708611b8f","metadata_addr":"0x543b35a39cfadad3da3c23249c474455d15efd2f94f849473226dee8a3c7a9e1","amount":"4953682"}',
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
          value: "0x1::fungible_asset::DepositEvent",
        },
        {
          index: true,
          key: "data",
          value:
            '{"store_addr":"0xeae8f912db9acfb4901766874adc7f6dbb1d5fea4785a423671ba5afc59a710f","metadata_addr":"0x543b35a39cfadad3da3c23249c474455d15efd2f94f849473226dee8a3c7a9e1","amount":"4953682"}',
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
          key: "spender",
          value:
            "init1dwn2pf23n58d39let3xqvua787lmer9ej5cutxdlnslp7gtvmvnsfsr9cz",
        },
        {
          index: true,
          key: "amount",
          value:
            "4953682move/543b35a39cfadad3da3c23249c474455d15efd2f94f849473226dee8a3c7a9e1",
        },
        {
          index: true,
          key: "msg_index",
          value: "1",
        },
      ],
      type: "coin_spent",
    },
    {
      attributes: [
        {
          index: true,
          key: "receiver",
          value: "init1fl48vsnmsdzcv85q5d2q4z5ajdha8yu3mdfuj4",
        },
        {
          index: true,
          key: "amount",
          value:
            "4953682move/543b35a39cfadad3da3c23249c474455d15efd2f94f849473226dee8a3c7a9e1",
        },
        {
          index: true,
          key: "msg_index",
          value: "1",
        },
      ],
      type: "coin_received",
    },
    {
      attributes: [
        {
          index: true,
          key: "validator",
          value: "initvaloper1cmlx2pqfgt2kpshe2fmc40epzvg699eqv3ax66",
        },
        {
          index: true,
          key: "delegator",
          value:
            "init1dwn2pf23n58d39let3xqvua787lmer9ej5cutxdlnslp7gtvmvnsfsr9cz",
        },
        {
          index: true,
          key: "amount",
          value:
            "4953682move/543b35a39cfadad3da3c23249c474455d15efd2f94f849473226dee8a3c7a9e1",
        },
        {
          index: true,
          key: "new_shares",
          value:
            "4953682.000000000000000000move/543b35a39cfadad3da3c23249c474455d15efd2f94f849473226dee8a3c7a9e1",
        },
        {
          index: true,
          key: "msg_index",
          value: "1",
        },
      ],
      type: "delegate",
    },
    {
      attributes: [
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
      type: "submsg",
    },
    {
      attributes: [
        {
          index: true,
          key: "sender",
          value:
            "0x6ba6a0a5519d0ed897f95c4c0673be3fbfbc8cb99531c599bf9c3e1f216cdb27",
        },
        {
          index: true,
          key: "module_addr",
          value:
            "0x3a886b32a802582f2e446e74d4a24d1d7ed01adf46d2a8f65c5723887e708789",
        },
        {
          index: true,
          key: "module_name",
          value: "lock_staking",
        },
        {
          index: true,
          key: "function_name",
          value: "delegate_hook",
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
          value:
            "0x3a886b32a802582f2e446e74d4a24d1d7ed01adf46d2a8f65c5723887e708789::lock_staking::DepositDelegationEvent",
        },
        {
          index: true,
          key: "data",
          value:
            '{"staking_account":"0x6ba6a0a5519d0ed897f95c4c0673be3fbfbc8cb99531c599bf9c3e1f216cdb27","metadata":"0x543b35a39cfadad3da3c23249c474455d15efd2f94f849473226dee8a3c7a9e1","release_time":"1785388250","validator":"initvaloper1cmlx2pqfgt2kpshe2fmc40epzvg699eqv3ax66","locked_share":"4953682"}',
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
          value: "0x1::fungible_asset::WithdrawEvent",
        },
        {
          index: true,
          key: "data",
          value:
            '{"store_addr":"0x76fb902aa3450e5e63fe46a2a03b093ed9afcddbe113ee5485e2ceafe4828685","metadata_addr":"0x8e4733bdabcf7d4afc3d14f0dd46c9bf52fb0fce9e4b996c939e195b8bc891d9","amount":"188279"}',
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
          value: "0x1::fungible_asset::DepositEvent",
        },
        {
          index: true,
          key: "data",
          value:
            '{"store_addr":"0x363088eba325d34d3f5c4beb84cf82cff074a6624dfeec6905417c3f83fac148","metadata_addr":"0x8e4733bdabcf7d4afc3d14f0dd46c9bf52fb0fce9e4b996c939e195b8bc891d9","amount":"188279"}',
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
          key: "success",
          value: "true",
        },
        {
          index: true,
          key: "msg_index",
          value: "1",
        },
      ],
      type: "submsg",
    },
  ],
  gas_used: "1210563",
  gas_wanted: "1701752",
  height: "5630052",
  info: "",
  logs: [],
  raw_log: "",
  timestamp: "2025-07-31T05:10:50Z",
  tx: {
    "@type": "/cosmos.tx.v1beta1.Tx",
    auth_info: {
      fee: {
        amount: [
          {
            amount: "25527",
            denom: "uinit",
          },
        ],
        gas_limit: "1701752",
        granter: "",
        payer: "",
      },
      signer_infos: [
        {
          mode_info: {
            single: {
              mode: "SIGN_MODE_EIP_191",
            },
          },
          public_key: {
            "@type": "/initia.crypto.v1beta1.ethsecp256k1.PubKey",
            key: "Azjc3fgjQvWbiXKbqFOzfNboaEEp56ioGj1jLoH6DrmR",
          },
          sequence: "22",
        },
      ],
      tip: null,
    },
    body: {
      extension_options: [],
      memo: "",
      messages: [
        {
          "@type": "/initia.move.v1.MsgExecute",
          args: [
            "IAAAAAAAAAA=",
            "AQAAAAAAAAA=",
            "AQYAAAAAAAAA",
            "AQwgF1tAng1NrRQmJ05mI5x+EL1P/LP5yXI+Gy4qRHOTtEMgZZLO6F2D76uoJYBs/nkeKi4R3jbn5isc7nWi6qWaocYgFtf/yFGwBkkvFVYX1H85tRn3XiN4hTgHTGlvgoSEb/Ig25gGwmu+agOtjHELO6h4tVTxwwXJygzdcSZunPk4CHAgqpM8cBPmpR7OkzK8UYq+wlrMeCR7CEXORsw8u/m2HXYgqPhwfRkydxERnhoFZQI8K7EFQ15uJOQ0IOwP7nTWdYYgMt6IWu38VNty8FZn2KmKTHuVJRM2Ocs10qV65e5cZOsgBiOsdWH6WRJmit7T0MoQyX8HSCpGN5ROTb3qIk6ZfjYgKNTUX1m76dhi4OXHy0cNhW79r6dSIy44d8wiFywqTgkgPOmB242HyGRG61VYlAR/asW2Wfzq3GuroNwWgF/cQIkgoxo8dt1VcDQ+gG/q+tBc6dChNqhkgJi215bIJfqLna8gWx+Vs4JPDQE1+XQX05uIouahK2zQTJpRhUxi/7/RDYg=",
            "AaWxXYUAAAAA",
          ],
          function_name: "batch_claim_user_reward_script",
          module_address:
            "0x3a886b32a802582f2e446e74d4a24d1d7ed01adf46d2a8f65c5723887e708789",
          module_name: "vip",
          sender: "init1lxg0lx9009kxd77q4uyj2t683f3kvuhdxafwd5",
          type_args: [],
        },
        {
          "@type": "/initia.move.v1.MsgExecute",
          args: [
            "IAAAAAAAAAA=",
            "AQAAAAAAAAA=",
            "VDs1o5z62tPaPCMknEdEVdFe/S+U+ElHMibe6KPHqeE=",
            "AZI1SwAAAAAA",
            "MmluaXR2YWxvcGVyMWNtbHgycHFmZ3Qya3BzaGUyZm1jNDBlcHp2ZzY5OWVxdjNheDY2",
            "AQYAAAAAAAAA",
            "AfEWTgAAAAAA",
            "4Ok5SyTlN3XWr4eTSsAtc1Nq1Yt4lPbM/z9efA1UjlU=",
            "s00IAAAAAAA=",
            "AA==",
          ],
          function_name: "batch_lock_stake_script",
          module_address:
            "0x3a886b32a802582f2e446e74d4a24d1d7ed01adf46d2a8f65c5723887e708789",
          module_name: "vip",
          sender: "init1lxg0lx9009kxd77q4uyj2t683f3kvuhdxafwd5",
          type_args: [],
        },
      ],
      non_critical_extension_options: [],
      timeout_height: "0",
    },
    signatures: [
      "q5tNNo3CrYTs0O+r3jiUSGH5U/XZNiSXLBX5F1IVvU0lQOml+1K8QimmY6K/VzhqZJ1z71iWlKh/Dyp8tyhvRA==",
    ],
  },
  txhash: "3F61FCD8DCA9953F011590D082FAC9882F1C6FA390B39141C1722AEE64521758",
};

export const mockApiResponsesForVipClaimEsinit = {
  GET: {
    "/initia/move/v1/accounts/0x39e454a8b7b1b71b2c0c27bf4ce1fbe234652f2c40f1fc209b023beaa7ece013/resources":
      {
        pagination: {
          next_key: null,
          total: "0",
        },
        resources: [
          {
            address:
              "0x39e454a8b7b1b71b2c0c27bf4ce1fbe234652f2c40f1fc209b023beaa7ece013",
            move_resource:
              '{"type":"0x1::object::ObjectCore","data":{"allow_ungated_transfer":false,"owner":"0xf990ff98af796c66fbc0af09252f478a636672ed","version":"1"}}',
            raw_bytes:
              "8sAawdRAbd7eanjKXIhrmiruKn73DQSalCoItLM9NM0AAQAAAAAAAAA=",
            struct_tag: "0x1::object::ObjectCore",
          },
          {
            address:
              "0x39e454a8b7b1b71b2c0c27bf4ce1fbe234652f2c40f1fc209b023beaa7ece013",
            move_resource:
              '{"type":"0x1::fungible_asset::FungibleStore","data":{"balance":"0","frozen":false,"metadata":{"inner":"0x8e4733bdabcf7d4afc3d14f0dd46c9bf52fb0fce9e4b996c939e195b8bc891d9"}}}',
            raw_bytes:
              "jkczvavPfUr8PRTw3UbJv1L7D86eS5lsk54ZW4vIkdkAAAAAAAAAAA==",
            struct_tag: "0x1::fungible_asset::FungibleStore",
          },
        ],
      },
    "/initia/move/v1/accounts/0x76fb902aa3450e5e63fe46a2a03b093ed9afcddbe113ee5485e2ceafe4828685/resources":
      {
        pagination: {
          next_key: null,
          total: "0",
        },
        resources: [
          {
            address:
              "0x76fb902aa3450e5e63fe46a2a03b093ed9afcddbe113ee5485e2ceafe4828685",
            move_resource:
              '{"type":"0x1::object::ObjectCore","data":{"allow_ungated_transfer":false,"owner":"0xf990ff98af796c66fbc0af09252f478a636672ed","version":"1"}}',
            raw_bytes:
              "8sAawdRAbd7eanjKXIhrmiruKn73DQSalCoItLM9NM0AAQAAAAAAAAA=",
            struct_tag: "0x1::object::ObjectCore",
          },
          {
            address:
              "0x76fb902aa3450e5e63fe46a2a03b093ed9afcddbe113ee5485e2ceafe4828685",
            move_resource:
              '{"type":"0x1::fungible_asset::FungibleStore","data":{"balance":"0","frozen":false,"metadata":{"inner":"0x8e4733bdabcf7d4afc3d14f0dd46c9bf52fb0fce9e4b996c939e195b8bc891d9"}}}',
            raw_bytes:
              "jkczvavPfUr8PRTw3UbJv1L7D86eS5lsk54ZW4vIkdkAAAAAAAAAAA==",
            struct_tag: "0x1::fungible_asset::FungibleStore",
          },
        ],
      },
    "/initia/move/v1/accounts/0x523bd8fb61230d8b2bc9c070d684e3482cf9c4ef7d08ebfcc9f756c36b229558/resources":
      {
        pagination: {
          next_key: null,
          total: "0",
        },
        resources: [
          {
            address:
              "0x523bd8fb61230d8b2bc9c070d684e3482cf9c4ef7d08ebfcc9f756c36b229558",
            move_resource:
              '{"type":"0x1::object::ObjectCore","data":{"allow_ungated_transfer":false,"owner":"0x53cf2ef2c1173f340555a6f2c024c1de8e509e7b5baccb3153e3c05e2df537e7","version":"1"}}',
            raw_bytes:
              "U88u8sEXPzQFVabywCTB3o5QnntbrMsxU+PAXi31N+cAAQAAAAAAAAA=",
            struct_tag: "0x1::object::ObjectCore",
          },
          {
            address:
              "0x523bd8fb61230d8b2bc9c070d684e3482cf9c4ef7d08ebfcc9f756c36b229558",
            move_resource:
              '{"type":"0x1::fungible_asset::FungibleStore","data":{"balance":"15964127538441","frozen":false,"metadata":{"inner":"0x8e4733bdabcf7d4afc3d14f0dd46c9bf52fb0fce9e4b996c939e195b8bc891d9"}}}',
            raw_bytes:
              "jkczvavPfUr8PRTw3UbJv1L7D86eS5lsk54ZW4vIkdkJrSbwhA4AAAA=",
            struct_tag: "0x1::fungible_asset::FungibleStore",
          },
        ],
      },
    "/initia/move/v1/accounts/0x781a86c45e9607aa154d716ec950b8d50c552a17421cdfa0d63fdd2708611b8f/resources":
      {
        pagination: {
          next_key: null,
          total: "0",
        },
        resources: [
          {
            address:
              "0x781a86c45e9607aa154d716ec950b8d50c552a17421cdfa0d63fdd2708611b8f",
            move_resource:
              '{"type":"0x1::object::ObjectCore","data":{"allow_ungated_transfer":false,"owner":"0xf990ff98af796c66fbc0af09252f478a636672ed","version":"1"}}',
            raw_bytes:
              "8sAawdRAbd7eanjKXIhrmiruKn73DQSalCoItLM9NM0AAQAAAAAAAAA=",
            struct_tag: "0x1::object::ObjectCore",
          },
          {
            address:
              "0x781a86c45e9607aa154d716ec950b8d50c552a17421cdfa0d63fdd2708611b8f",
            move_resource:
              '{"type":"0x1::fungible_asset::FungibleStore","data":{"balance":"0","frozen":false,"metadata":{"inner":"0x8e4733bdabcf7d4afc3d14f0dd46c9bf52fb0fce9e4b996c939e195b8bc891d9"}}}',
            raw_bytes:
              "jkczvavPfUr8PRTw3UbJv1L7D86eS5lsk54ZW4vIkdkAAAAAAAAAAA==",
            struct_tag: "0x1::fungible_asset::FungibleStore",
          },
        ],
      },
    "/initia/move/v1/accounts/0x363088eba325d34d3f5c4beb84cf82cff074a6624dfeec6905417c3f83fac148/resources":
      {
        pagination: {
          next_key: null,
          total: "0",
        },
        resources: [
          {
            address:
              "0x363088eba325d34d3f5c4beb84cf82cff074a6624dfeec6905417c3f83fac148",
            move_resource:
              '{"type":"0x1::object::ObjectCore","data":{"allow_ungated_transfer":false,"owner":"0xf990ff98af796c66fbc0af09252f478a636672ed","version":"1"}}',
            raw_bytes:
              "8sAawdRAbd7eanjKXIhrmiruKn73DQSalCoItLM9NM0AAQAAAAAAAAA=",
            struct_tag: "0x1::object::ObjectCore",
          },
          {
            address:
              "0x363088eba325d34d3f5c4beb84cf82cff074a6624dfeec6905417c3f83fac148",
            move_resource:
              '{"type":"0x1::fungible_asset::FungibleStore","data":{"balance":"0","frozen":false,"metadata":{"inner":"0x8e4733bdabcf7d4afc3d14f0dd46c9bf52fb0fce9e4b996c939e195b8bc891d9"}}}',
            raw_bytes:
              "jkczvavPfUr8PRTw3UbJv1L7D86eS5lsk54ZW4vIkdkAAAAAAAAAAA==",
            struct_tag: "0x1::fungible_asset::FungibleStore",
          },
        ],
      },
    "/initia/move/v1/accounts/0xaef66003dffb90244408298165002e552a76923d1aa510988fa2aad363b678bb/resources":
      {
        pagination: {
          next_key: null,
          total: "0",
        },
        resources: [
          {
            address:
              "0xaef66003dffb90244408298165002e552a76923d1aa510988fa2aad363b678bb",
            move_resource:
              '{"type":"0x1::object::ObjectCore","data":{"allow_ungated_transfer":false,"owner":"0xdcd776abe2567ebde2e3b6431071cae6e27492be","version":"1"}}',
            raw_bytes:
              "AAAAAAAAAAAAAAAA3Nd2q+JWfr3i47ZDEHHK5uJ0kr4AAQAAAAAAAAA=",
            struct_tag: "0x1::object::ObjectCore",
          },
          {
            address:
              "0xaef66003dffb90244408298165002e552a76923d1aa510988fa2aad363b678bb",
            move_resource:
              '{"type":"0x1::fungible_asset::FungibleStore","data":{"balance":"10851014","frozen":false,"metadata":{"inner":"0x8e4733bdabcf7d4afc3d14f0dd46c9bf52fb0fce9e4b996c939e195b8bc891d9"}}}',
            raw_bytes:
              "jkczvavPfUr8PRTw3UbJv1L7D86eS5lsk54ZW4vIkdnGkqUAAAAAAAA=",
            struct_tag: "0x1::fungible_asset::FungibleStore",
          },
        ],
      },
    "/initia/move/v1/accounts/0xb259bcbfcad49341519ebf11fb589663431a1f2e656b5a879c53203169213a98/resources":
      {
        pagination: {
          next_key: null,
          total: "0",
        },
        resources: [
          {
            address:
              "0xb259bcbfcad49341519ebf11fb589663431a1f2e656b5a879c53203169213a98",
            move_resource:
              '{"type":"0x1::object::ObjectCore","data":{"allow_ungated_transfer":false,"owner":"0xf990ff98af796c66fbc0af09252f478a636672ed","version":"1"}}',
            raw_bytes:
              "8sAawdRAbd7eanjKXIhrmiruKn73DQSalCoItLM9NM0AAQAAAAAAAAA=",
            struct_tag: "0x1::object::ObjectCore",
          },
          {
            address:
              "0xb259bcbfcad49341519ebf11fb589663431a1f2e656b5a879c53203169213a98",
            move_resource:
              '{"type":"0x1::fungible_asset::FungibleStore","data":{"balance":"0","frozen":false,"metadata":{"inner":"0x8e4733bdabcf7d4afc3d14f0dd46c9bf52fb0fce9e4b996c939e195b8bc891d9"}}}',
            raw_bytes:
              "jkczvavPfUr8PRTw3UbJv1L7D86eS5lsk54ZW4vIkdkAAAAAAAAAAA==",
            struct_tag: "0x1::fungible_asset::FungibleStore",
          },
        ],
      },
    "/initia/move/v1/accounts/0xba2a23251eb06923fadb03ea9856c66510fefc4dfa9abe92cfb2961c9145cfb3/resources":
      {
        pagination: {
          next_key: null,
          total: "0",
        },
        resources: [
          {
            address:
              "0xba2a23251eb06923fadb03ea9856c66510fefc4dfa9abe92cfb2961c9145cfb3",
            move_resource:
              '{"type":"0x1::object::ObjectCore","data":{"allow_ungated_transfer":false,"owner":"0xf990ff98af796c66fbc0af09252f478a636672ed","version":"1"}}',
            raw_bytes:
              "8sAawdRAbd7eanjKXIhrmiruKn73DQSalCoItLM9NM0AAQAAAAAAAAA=",
            struct_tag: "0x1::object::ObjectCore",
          },
          {
            address:
              "0xba2a23251eb06923fadb03ea9856c66510fefc4dfa9abe92cfb2961c9145cfb3",
            move_resource:
              '{"type":"0x1::fungible_asset::FungibleStore","data":{"balance":"0","frozen":false,"metadata":{"inner":"0x8e4733bdabcf7d4afc3d14f0dd46c9bf52fb0fce9e4b996c939e195b8bc891d9"}}}',
            raw_bytes:
              "jkczvavPfUr8PRTw3UbJv1L7D86eS5lsk54ZW4vIkdkAAAAAAAAAAA==",
            struct_tag: "0x1::fungible_asset::FungibleStore",
          },
        ],
      },
    "/initia/move/v1/accounts/0xd8d20f9cd225d52f126bd3f973cbb83de3212b1b3dae547f13dd01f593d537b3/resources":
      {
        pagination: {
          next_key: null,
          total: "0",
        },
        resources: [
          {
            address:
              "0xd8d20f9cd225d52f126bd3f973cbb83de3212b1b3dae547f13dd01f593d537b3",
            move_resource:
              '{"type":"0x1::object::ObjectCore","data":{"allow_ungated_transfer":false,"owner":"0xf990ff98af796c66fbc0af09252f478a636672ed","version":"1"}}',
            raw_bytes:
              "8sAawdRAbd7eanjKXIhrmiruKn73DQSalCoItLM9NM0AAQAAAAAAAAA=",
            struct_tag: "0x1::object::ObjectCore",
          },
          {
            address:
              "0xd8d20f9cd225d52f126bd3f973cbb83de3212b1b3dae547f13dd01f593d537b3",
            move_resource:
              '{"type":"0x1::fungible_asset::FungibleStore","data":{"balance":"0","frozen":false,"metadata":{"inner":"0x8e4733bdabcf7d4afc3d14f0dd46c9bf52fb0fce9e4b996c939e195b8bc891d9"}}}',
            raw_bytes:
              "jkczvavPfUr8PRTw3UbJv1L7D86eS5lsk54ZW4vIkdkAAAAAAAAAAA==",
            struct_tag: "0x1::fungible_asset::FungibleStore",
          },
        ],
      },
    "/initia/move/v1/accounts/0xeae8f912db9acfb4901766874adc7f6dbb1d5fea4785a423671ba5afc59a710f/resources":
      {
        pagination: {
          next_key: null,
          total: "0",
        },
        resources: [
          {
            address:
              "0xeae8f912db9acfb4901766874adc7f6dbb1d5fea4785a423671ba5afc59a710f",
            move_resource:
              '{"type":"0x1::object::ObjectCore","data":{"allow_ungated_transfer":false,"owner":"0xf990ff98af796c66fbc0af09252f478a636672ed","version":"1"}}',
            raw_bytes:
              "8sAawdRAbd7eanjKXIhrmiruKn73DQSalCoItLM9NM0AAQAAAAAAAAA=",
            struct_tag: "0x1::object::ObjectCore",
          },
          {
            address:
              "0xeae8f912db9acfb4901766874adc7f6dbb1d5fea4785a423671ba5afc59a710f",
            move_resource:
              '{"type":"0x1::fungible_asset::FungibleStore","data":{"balance":"0","frozen":false,"metadata":{"inner":"0x8e4733bdabcf7d4afc3d14f0dd46c9bf52fb0fce9e4b996c939e195b8bc891d9"}}}',
            raw_bytes:
              "jkczvavPfUr8PRTw3UbJv1L7D86eS5lsk54ZW4vIkdkAAAAAAAAAAA==",
            struct_tag: "0x1::fungible_asset::FungibleStore",
          },
        ],
      },
    "/initia/move/v1/denom?metadata=0x8e4733bdabcf7d4afc3d14f0dd46c9bf52fb0fce9e4b996c939e195b8bc891d9":
      {
        denom: "uinit",
      },
    "/initia/move/v1/denom?metadata=0x543b35a39cfadad3da3c23249c474455d15efd2f94f849473226dee8a3c7a9e1":
      {
        denom:
          "move/0x3a886b32a802582f2e446e74d4a24d1d7ed01adf46d2a8f65c5723887e708789::ESESIN",
      },
    "/initia/move/v1/denom?metadata=0xe0e9394b24e53775d6af87934ac02d73536ad58b7894f6ccff3f5e7c0d548e55":
      {
        denom:
          "move/0x3a886b32a802582f2e446e74d4a24d1d7ed01adf46d2a8f65c5723887e708789::ESESIN",
      },
  },
};
