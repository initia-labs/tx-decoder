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

export const mockApiResponsesForVipClaimEsinit = {
  GET: {
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
    "/initia/move/v1/denom?metadata=0x8e4733bdabcf7d4afc3d14f0dd46c9bf52fb0fce9e4b996c939e195b8bc891d9":
      {
        denom: "uinit",
      },
  },
};
