import type { TxResponse } from "@/schema";

export const mockCollectClaim: TxResponse = {
  code: 0,
  codespace: "",
  data: "12240A222F696E697469612E6D6F76652E76312E4D736745786563757465526573706F6E736512240A222F696E697469612E6D6F76652E76312E4D736745786563757465526573706F6E736512240A222F696E697469612E6D6F76652E76312E4D736745786563757465526573706F6E736512240A222F696E697469612E6D6F76652E76312E4D736745786563757465526573706F6E7365",
  events: [
    {
      attributes: [
        {
          index: true,
          key: "sender",
          value: "0x1,0xe61e450d8eaf61fcfac7b9d9916384bfa6afe63c"
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
            '{"store_addr":"0xfd4feb47cf5ef003d15ead023551bbfddec3c523ab45dfb64461da662f1e3f73","metadata_addr":"0x8e4733bdabcf7d4afc3d14f0dd46c9bf52fb0fce9e4b996c939e195b8bc891d9","amount":"49663"}'
        },
        {
          index: true,
          key: "amount",
          value: "49663"
        },
        {
          index: true,
          key: "metadata_addr",
          value:
            "0x8e4733bdabcf7d4afc3d14f0dd46c9bf52fb0fce9e4b996c939e195b8bc891d9"
        },
        {
          index: true,
          key: "store_addr",
          value:
            "0xfd4feb47cf5ef003d15ead023551bbfddec3c523ab45dfb64461da662f1e3f73"
        }
      ],
      type: "move"
    },
    {
      attributes: [
        {
          index: true,
          key: "type_tag",
          value: "0x1::fungible_asset::WithdrawOwnerEvent"
        },
        {
          index: true,
          key: "data",
          value: '{"owner":"0xe61e450d8eaf61fcfac7b9d9916384bfa6afe63c"}'
        },
        {
          index: true,
          key: "owner",
          value: "0xe61e450d8eaf61fcfac7b9d9916384bfa6afe63c"
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
            '{"store_addr":"0x66a8cb0bfb991610dcffb8a6543ac0887c7c5405b8f985ebed6d628fe50c4686","metadata_addr":"0x8e4733bdabcf7d4afc3d14f0dd46c9bf52fb0fce9e4b996c939e195b8bc891d9","amount":"49663"}'
        },
        {
          index: true,
          key: "amount",
          value: "49663"
        },
        {
          index: true,
          key: "metadata_addr",
          value:
            "0x8e4733bdabcf7d4afc3d14f0dd46c9bf52fb0fce9e4b996c939e195b8bc891d9"
        },
        {
          index: true,
          key: "store_addr",
          value:
            "0x66a8cb0bfb991610dcffb8a6543ac0887c7c5405b8f985ebed6d628fe50c4686"
        }
      ],
      type: "move"
    },
    {
      attributes: [
        {
          index: true,
          key: "type_tag",
          value: "0x1::fungible_asset::DepositOwnerEvent"
        },
        {
          index: true,
          key: "data",
          value: '{"owner":"0xf1829676db577682e944fc3493d451b67ff3e29f"}'
        },
        {
          index: true,
          key: "owner",
          value: "0xf1829676db577682e944fc3493d451b67ff3e29f"
        }
      ],
      type: "move"
    },
    {
      attributes: [
        {
          index: true,
          key: "spender",
          value: "init1uc0y2rvw4asle7k8h8vezcuyh7n2le3uemrjfm"
        },
        {
          index: true,
          key: "amount",
          value: "49663uinit"
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
          value: "49663uinit"
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
          value: "init1uc0y2rvw4asle7k8h8vezcuyh7n2le3uemrjfm"
        },
        {
          index: true,
          key: "amount",
          value: "49663uinit"
        }
      ],
      type: "transfer"
    },
    {
      attributes: [
        {
          index: true,
          key: "sender",
          value: "init1uc0y2rvw4asle7k8h8vezcuyh7n2le3uemrjfm"
        }
      ],
      type: "message"
    },
    {
      attributes: [
        {
          index: true,
          key: "fee",
          value: "49663uinit"
        },
        {
          index: true,
          key: "fee_payer",
          value: "init1uc0y2rvw4asle7k8h8vezcuyh7n2le3uemrjfm"
        }
      ],
      type: "tx"
    },
    {
      attributes: [
        {
          index: true,
          key: "acc_seq",
          value: "init1uc0y2rvw4asle7k8h8vezcuyh7n2le3uemrjfm/216"
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
            "Hbqg3GhXvQsxBp5D8/V/CZSnZQ9m7wimbd2Xeyw/gPwul4uPUw+uiSZ45mkvFI2yBZQ3bnhg5tNNrvJlVBtoew=="
        }
      ],
      type: "tx"
    },
    {
      attributes: [
        {
          index: true,
          key: "action",
          value: "/initia.move.v1.MsgExecute"
        },
        {
          index: true,
          key: "sender",
          value: "init1uc0y2rvw4asle7k8h8vezcuyh7n2le3uemrjfm"
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
          value: "0xe61e450d8eaf61fcfac7b9d9916384bfa6afe63c"
        },
        {
          index: true,
          key: "module_addr",
          value:
            "0xcb2999c70a9b8db7cb473255bb01f956f0726087f08b04ece50844a6d8167351"
        },
        {
          index: true,
          key: "module_name",
          value: "farming"
        },
        {
          index: true,
          key: "function_name",
          value: "unstake_then_withdraw"
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
          value: "0x1::fungible_asset::WithdrawEvent"
        },
        {
          index: true,
          key: "data",
          value:
            '{"store_addr":"0xf1f2619643c0f71fa3eea9f12cedcc800efaa73ee7700e21b6724248897167d0","metadata_addr":"0x8e4733bdabcf7d4afc3d14f0dd46c9bf52fb0fce9e4b996c939e195b8bc891d9","amount":"3881682"}'
        },
        {
          index: true,
          key: "amount",
          value: "3881682"
        },
        {
          index: true,
          key: "metadata_addr",
          value:
            "0x8e4733bdabcf7d4afc3d14f0dd46c9bf52fb0fce9e4b996c939e195b8bc891d9"
        },
        {
          index: true,
          key: "store_addr",
          value:
            "0xf1f2619643c0f71fa3eea9f12cedcc800efaa73ee7700e21b6724248897167d0"
        },
        {
          index: true,
          key: "msg_index",
          value: "0"
        }
      ],
      type: "move"
    },
    {
      attributes: [
        {
          index: true,
          key: "type_tag",
          value: "0x1::fungible_asset::WithdrawOwnerEvent"
        },
        {
          index: true,
          key: "data",
          value:
            '{"owner":"0x77b431cd7a3fdae1dfaf67a6136ff640088785cefb3175918dceaedcc28bb9a7"}'
        },
        {
          index: true,
          key: "owner",
          value:
            "0x77b431cd7a3fdae1dfaf67a6136ff640088785cefb3175918dceaedcc28bb9a7"
        },
        {
          index: true,
          key: "msg_index",
          value: "0"
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
            '{"store_addr":"0x1b7d9503b1a7269988ffb026337a5220a773a2b22f818ea96124079701a7d88a","metadata_addr":"0x8e4733bdabcf7d4afc3d14f0dd46c9bf52fb0fce9e4b996c939e195b8bc891d9","amount":"3881682"}'
        },
        {
          index: true,
          key: "amount",
          value: "3881682"
        },
        {
          index: true,
          key: "metadata_addr",
          value:
            "0x8e4733bdabcf7d4afc3d14f0dd46c9bf52fb0fce9e4b996c939e195b8bc891d9"
        },
        {
          index: true,
          key: "store_addr",
          value:
            "0x1b7d9503b1a7269988ffb026337a5220a773a2b22f818ea96124079701a7d88a"
        },
        {
          index: true,
          key: "msg_index",
          value: "0"
        }
      ],
      type: "move"
    },
    {
      attributes: [
        {
          index: true,
          key: "type_tag",
          value: "0x1::fungible_asset::DepositOwnerEvent"
        },
        {
          index: true,
          key: "data",
          value:
            '{"owner":"0xa07b5c47d8aad8497b7bb3a07d9cf8ebd85151e859daed7501ed8dd9e1551dd9"}'
        },
        {
          index: true,
          key: "owner",
          value:
            "0xa07b5c47d8aad8497b7bb3a07d9cf8ebd85151e859daed7501ed8dd9e1551dd9"
        },
        {
          index: true,
          key: "msg_index",
          value: "0"
        }
      ],
      type: "move"
    },
    {
      attributes: [
        {
          index: true,
          key: "type_tag",
          value:
            "0xcb2999c70a9b8db7cb473255bb01f956f0726087f08b04ece50844a6d8167351::farming::UnstakeEvent"
        },
        {
          index: true,
          key: "data",
          value:
            '{"incentive_obj":"0x77b431cd7a3fdae1dfaf67a6136ff640088785cefb3175918dceaedcc28bb9a7","token_obj":"0xbeee1d654829e85d901d8a1a1248d7e642519b1ec048f2d113ee68be5411bb60","reward_amount":"3881682","seconds_inside":"3093310371448845054780"}'
        },
        {
          index: true,
          key: "incentive_obj",
          value:
            "0x77b431cd7a3fdae1dfaf67a6136ff640088785cefb3175918dceaedcc28bb9a7"
        },
        {
          index: true,
          key: "reward_amount",
          value: "3881682"
        },
        {
          index: true,
          key: "seconds_inside",
          value: "3093310371448845054780"
        },
        {
          index: true,
          key: "token_obj",
          value:
            "0xbeee1d654829e85d901d8a1a1248d7e642519b1ec048f2d113ee68be5411bb60"
        },
        {
          index: true,
          key: "msg_index",
          value: "0"
        }
      ],
      type: "move"
    },
    {
      attributes: [
        {
          index: true,
          key: "type_tag",
          value:
            "0xcb2999c70a9b8db7cb473255bb01f956f0726087f08b04ece50844a6d8167351::farming::ClaimTokenEvent"
        },
        {
          index: true,
          key: "data",
          value:
            '{"token_obj":"0xbeee1d654829e85d901d8a1a1248d7e642519b1ec048f2d113ee68be5411bb60","reward_asset_metadata":"0x6c69733a9e722f3660afb524f89fce957801fa7e4408b8ef8fe89db9627b570e","recipient":"0xe61e450d8eaf61fcfac7b9d9916384bfa6afe63c","amount":"0"}'
        },
        {
          index: true,
          key: "amount",
          value: "0"
        },
        {
          index: true,
          key: "recipient",
          value: "0xe61e450d8eaf61fcfac7b9d9916384bfa6afe63c"
        },
        {
          index: true,
          key: "reward_asset_metadata",
          value:
            "0x6c69733a9e722f3660afb524f89fce957801fa7e4408b8ef8fe89db9627b570e"
        },
        {
          index: true,
          key: "token_obj",
          value:
            "0xbeee1d654829e85d901d8a1a1248d7e642519b1ec048f2d113ee68be5411bb60"
        },
        {
          index: true,
          key: "msg_index",
          value: "0"
        }
      ],
      type: "move"
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
            '{"store_addr":"0x1b7d9503b1a7269988ffb026337a5220a773a2b22f818ea96124079701a7d88a","metadata_addr":"0x8e4733bdabcf7d4afc3d14f0dd46c9bf52fb0fce9e4b996c939e195b8bc891d9","amount":"3881682"}'
        },
        {
          index: true,
          key: "amount",
          value: "3881682"
        },
        {
          index: true,
          key: "metadata_addr",
          value:
            "0x8e4733bdabcf7d4afc3d14f0dd46c9bf52fb0fce9e4b996c939e195b8bc891d9"
        },
        {
          index: true,
          key: "store_addr",
          value:
            "0x1b7d9503b1a7269988ffb026337a5220a773a2b22f818ea96124079701a7d88a"
        },
        {
          index: true,
          key: "msg_index",
          value: "0"
        }
      ],
      type: "move"
    },
    {
      attributes: [
        {
          index: true,
          key: "type_tag",
          value: "0x1::fungible_asset::WithdrawOwnerEvent"
        },
        {
          index: true,
          key: "data",
          value:
            '{"owner":"0xa07b5c47d8aad8497b7bb3a07d9cf8ebd85151e859daed7501ed8dd9e1551dd9"}'
        },
        {
          index: true,
          key: "owner",
          value:
            "0xa07b5c47d8aad8497b7bb3a07d9cf8ebd85151e859daed7501ed8dd9e1551dd9"
        },
        {
          index: true,
          key: "msg_index",
          value: "0"
        }
      ],
      type: "move"
    },
    {
      attributes: [
        {
          index: true,
          key: "type_tag",
          value:
            "0xcb2999c70a9b8db7cb473255bb01f956f0726087f08b04ece50844a6d8167351::farming::ClaimTokenEvent"
        },
        {
          index: true,
          key: "data",
          value:
            '{"token_obj":"0xbeee1d654829e85d901d8a1a1248d7e642519b1ec048f2d113ee68be5411bb60","reward_asset_metadata":"0x8e4733bdabcf7d4afc3d14f0dd46c9bf52fb0fce9e4b996c939e195b8bc891d9","recipient":"0xe61e450d8eaf61fcfac7b9d9916384bfa6afe63c","amount":"3881682"}'
        },
        {
          index: true,
          key: "amount",
          value: "3881682"
        },
        {
          index: true,
          key: "recipient",
          value: "0xe61e450d8eaf61fcfac7b9d9916384bfa6afe63c"
        },
        {
          index: true,
          key: "reward_asset_metadata",
          value:
            "0x8e4733bdabcf7d4afc3d14f0dd46c9bf52fb0fce9e4b996c939e195b8bc891d9"
        },
        {
          index: true,
          key: "token_obj",
          value:
            "0xbeee1d654829e85d901d8a1a1248d7e642519b1ec048f2d113ee68be5411bb60"
        },
        {
          index: true,
          key: "msg_index",
          value: "0"
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
            '{"store_addr":"0xfd4feb47cf5ef003d15ead023551bbfddec3c523ab45dfb64461da662f1e3f73","metadata_addr":"0x8e4733bdabcf7d4afc3d14f0dd46c9bf52fb0fce9e4b996c939e195b8bc891d9","amount":"3881682"}'
        },
        {
          index: true,
          key: "amount",
          value: "3881682"
        },
        {
          index: true,
          key: "metadata_addr",
          value:
            "0x8e4733bdabcf7d4afc3d14f0dd46c9bf52fb0fce9e4b996c939e195b8bc891d9"
        },
        {
          index: true,
          key: "store_addr",
          value:
            "0xfd4feb47cf5ef003d15ead023551bbfddec3c523ab45dfb64461da662f1e3f73"
        },
        {
          index: true,
          key: "msg_index",
          value: "0"
        }
      ],
      type: "move"
    },
    {
      attributes: [
        {
          index: true,
          key: "type_tag",
          value: "0x1::fungible_asset::DepositOwnerEvent"
        },
        {
          index: true,
          key: "data",
          value: '{"owner":"0xe61e450d8eaf61fcfac7b9d9916384bfa6afe63c"}'
        },
        {
          index: true,
          key: "owner",
          value: "0xe61e450d8eaf61fcfac7b9d9916384bfa6afe63c"
        },
        {
          index: true,
          key: "msg_index",
          value: "0"
        }
      ],
      type: "move"
    },
    {
      attributes: [
        {
          index: true,
          key: "type_tag",
          value: "0x1::object::TransferEvent"
        },
        {
          index: true,
          key: "data",
          value:
            '{"object":"0xbeee1d654829e85d901d8a1a1248d7e642519b1ec048f2d113ee68be5411bb60","from":"0xa07b5c47d8aad8497b7bb3a07d9cf8ebd85151e859daed7501ed8dd9e1551dd9","to":"0xe61e450d8eaf61fcfac7b9d9916384bfa6afe63c"}'
        },
        {
          index: true,
          key: "from",
          value:
            "0xa07b5c47d8aad8497b7bb3a07d9cf8ebd85151e859daed7501ed8dd9e1551dd9"
        },
        {
          index: true,
          key: "object",
          value:
            "0xbeee1d654829e85d901d8a1a1248d7e642519b1ec048f2d113ee68be5411bb60"
        },
        {
          index: true,
          key: "to",
          value: "0xe61e450d8eaf61fcfac7b9d9916384bfa6afe63c"
        },
        {
          index: true,
          key: "msg_index",
          value: "0"
        }
      ],
      type: "move"
    },
    {
      attributes: [
        {
          index: true,
          key: "type_tag",
          value:
            "0xcb2999c70a9b8db7cb473255bb01f956f0726087f08b04ece50844a6d8167351::farming::WithdrawTokenEvent"
        },
        {
          index: true,
          key: "data",
          value:
            '{"account_addr":"0xe61e450d8eaf61fcfac7b9d9916384bfa6afe63c","token_obj":"0xbeee1d654829e85d901d8a1a1248d7e642519b1ec048f2d113ee68be5411bb60"}'
        },
        {
          index: true,
          key: "account_addr",
          value: "0xe61e450d8eaf61fcfac7b9d9916384bfa6afe63c"
        },
        {
          index: true,
          key: "token_obj",
          value:
            "0xbeee1d654829e85d901d8a1a1248d7e642519b1ec048f2d113ee68be5411bb60"
        },
        {
          index: true,
          key: "msg_index",
          value: "0"
        }
      ],
      type: "move"
    },
    {
      attributes: [
        {
          index: true,
          key: "action",
          value: "/initia.move.v1.MsgExecute"
        },
        {
          index: true,
          key: "sender",
          value: "init1uc0y2rvw4asle7k8h8vezcuyh7n2le3uemrjfm"
        },
        {
          index: true,
          key: "module",
          value: "move"
        },
        {
          index: true,
          key: "msg_index",
          value: "1"
        }
      ],
      type: "message"
    },
    {
      attributes: [
        {
          index: true,
          key: "sender",
          value: "0xe61e450d8eaf61fcfac7b9d9916384bfa6afe63c"
        },
        {
          index: true,
          key: "module_addr",
          value:
            "0xd78a3b72c7ef0cfba7286bfb8c618aa4d6011dce05a832871cc9ab323c25f55e"
        },
        {
          index: true,
          key: "module_name",
          value: "scripts"
        },
        {
          index: true,
          key: "function_name",
          value: "collect_fees"
        },
        {
          index: true,
          key: "msg_index",
          value: "1"
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
            '{"store_addr":"0x18d885eb85d05eb91f644a62c3dda593dbd38d1906b3dc75036bb39208afc432","metadata_addr":"0x6c69733a9e722f3660afb524f89fce957801fa7e4408b8ef8fe89db9627b570e","amount":"24288"}'
        },
        {
          index: true,
          key: "amount",
          value: "24288"
        },
        {
          index: true,
          key: "metadata_addr",
          value:
            "0x6c69733a9e722f3660afb524f89fce957801fa7e4408b8ef8fe89db9627b570e"
        },
        {
          index: true,
          key: "store_addr",
          value:
            "0x18d885eb85d05eb91f644a62c3dda593dbd38d1906b3dc75036bb39208afc432"
        },
        {
          index: true,
          key: "msg_index",
          value: "1"
        }
      ],
      type: "move"
    },
    {
      attributes: [
        {
          index: true,
          key: "type_tag",
          value: "0x1::fungible_asset::WithdrawOwnerEvent"
        },
        {
          index: true,
          key: "data",
          value:
            '{"owner":"0x336a6c9a07f6e7f96a3e3423ad6ac2827079c79c031198c3cca987239dde064"}'
        },
        {
          index: true,
          key: "owner",
          value:
            "0x336a6c9a07f6e7f96a3e3423ad6ac2827079c79c031198c3cca987239dde064"
        },
        {
          index: true,
          key: "msg_index",
          value: "1"
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
            '{"store_addr":"0x1a0e3fb6d01b167ab3437fb54bcd0688485f6a580e61a8d7d5b1655da07437b6","metadata_addr":"0x6c69733a9e722f3660afb524f89fce957801fa7e4408b8ef8fe89db9627b570e","amount":"24288"}'
        },
        {
          index: true,
          key: "amount",
          value: "24288"
        },
        {
          index: true,
          key: "metadata_addr",
          value:
            "0x6c69733a9e722f3660afb524f89fce957801fa7e4408b8ef8fe89db9627b570e"
        },
        {
          index: true,
          key: "store_addr",
          value:
            "0x1a0e3fb6d01b167ab3437fb54bcd0688485f6a580e61a8d7d5b1655da07437b6"
        },
        {
          index: true,
          key: "msg_index",
          value: "1"
        }
      ],
      type: "move"
    },
    {
      attributes: [
        {
          index: true,
          key: "type_tag",
          value: "0x1::fungible_asset::DepositOwnerEvent"
        },
        {
          index: true,
          key: "data",
          value:
            '{"owner":"0xbeee1d654829e85d901d8a1a1248d7e642519b1ec048f2d113ee68be5411bb60"}'
        },
        {
          index: true,
          key: "owner",
          value:
            "0xbeee1d654829e85d901d8a1a1248d7e642519b1ec048f2d113ee68be5411bb60"
        },
        {
          index: true,
          key: "msg_index",
          value: "1"
        }
      ],
      type: "move"
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
            '{"store_addr":"0x4f419e2780ba1cb4201d118e8784683072ee93b46fff9f998396875f5d3e9c71","metadata_addr":"0x8e4733bdabcf7d4afc3d14f0dd46c9bf52fb0fce9e4b996c939e195b8bc891d9","amount":"400117"}'
        },
        {
          index: true,
          key: "amount",
          value: "400117"
        },
        {
          index: true,
          key: "metadata_addr",
          value:
            "0x8e4733bdabcf7d4afc3d14f0dd46c9bf52fb0fce9e4b996c939e195b8bc891d9"
        },
        {
          index: true,
          key: "store_addr",
          value:
            "0x4f419e2780ba1cb4201d118e8784683072ee93b46fff9f998396875f5d3e9c71"
        },
        {
          index: true,
          key: "msg_index",
          value: "1"
        }
      ],
      type: "move"
    },
    {
      attributes: [
        {
          index: true,
          key: "type_tag",
          value: "0x1::fungible_asset::WithdrawOwnerEvent"
        },
        {
          index: true,
          key: "data",
          value:
            '{"owner":"0x336a6c9a07f6e7f96a3e3423ad6ac2827079c79c031198c3cca987239dde064"}'
        },
        {
          index: true,
          key: "owner",
          value:
            "0x336a6c9a07f6e7f96a3e3423ad6ac2827079c79c031198c3cca987239dde064"
        },
        {
          index: true,
          key: "msg_index",
          value: "1"
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
            '{"store_addr":"0x370f84a62229ec1100400f13248a8cec65e44d7ac20a0da4d9ba3a30fdf0295c","metadata_addr":"0x8e4733bdabcf7d4afc3d14f0dd46c9bf52fb0fce9e4b996c939e195b8bc891d9","amount":"400117"}'
        },
        {
          index: true,
          key: "amount",
          value: "400117"
        },
        {
          index: true,
          key: "metadata_addr",
          value:
            "0x8e4733bdabcf7d4afc3d14f0dd46c9bf52fb0fce9e4b996c939e195b8bc891d9"
        },
        {
          index: true,
          key: "store_addr",
          value:
            "0x370f84a62229ec1100400f13248a8cec65e44d7ac20a0da4d9ba3a30fdf0295c"
        },
        {
          index: true,
          key: "msg_index",
          value: "1"
        }
      ],
      type: "move"
    },
    {
      attributes: [
        {
          index: true,
          key: "type_tag",
          value: "0x1::fungible_asset::DepositOwnerEvent"
        },
        {
          index: true,
          key: "data",
          value:
            '{"owner":"0xbeee1d654829e85d901d8a1a1248d7e642519b1ec048f2d113ee68be5411bb60"}'
        },
        {
          index: true,
          key: "owner",
          value:
            "0xbeee1d654829e85d901d8a1a1248d7e642519b1ec048f2d113ee68be5411bb60"
        },
        {
          index: true,
          key: "msg_index",
          value: "1"
        }
      ],
      type: "move"
    },
    {
      attributes: [
        {
          index: true,
          key: "type_tag",
          value:
            "0xd78a3b72c7ef0cfba7286bfb8c618aa4d6011dce05a832871cc9ab323c25f55e::pool::AccrueFeesEvent"
        },
        {
          index: true,
          key: "data",
          value:
            '{"pool_obj":"0x336a6c9a07f6e7f96a3e3423ad6ac2827079c79c031198c3cca987239dde064","position_obj":"0xbeee1d654829e85d901d8a1a1248d7e642519b1ec048f2d113ee68be5411bb60","amount_0":"24288","amount_1":"400117"}'
        },
        {
          index: true,
          key: "amount_0",
          value: "24288"
        },
        {
          index: true,
          key: "amount_1",
          value: "400117"
        },
        {
          index: true,
          key: "pool_obj",
          value:
            "0x336a6c9a07f6e7f96a3e3423ad6ac2827079c79c031198c3cca987239dde064"
        },
        {
          index: true,
          key: "position_obj",
          value:
            "0xbeee1d654829e85d901d8a1a1248d7e642519b1ec048f2d113ee68be5411bb60"
        },
        {
          index: true,
          key: "msg_index",
          value: "1"
        }
      ],
      type: "move"
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
            '{"store_addr":"0x1a0e3fb6d01b167ab3437fb54bcd0688485f6a580e61a8d7d5b1655da07437b6","metadata_addr":"0x6c69733a9e722f3660afb524f89fce957801fa7e4408b8ef8fe89db9627b570e","amount":"24288"}'
        },
        {
          index: true,
          key: "amount",
          value: "24288"
        },
        {
          index: true,
          key: "metadata_addr",
          value:
            "0x6c69733a9e722f3660afb524f89fce957801fa7e4408b8ef8fe89db9627b570e"
        },
        {
          index: true,
          key: "store_addr",
          value:
            "0x1a0e3fb6d01b167ab3437fb54bcd0688485f6a580e61a8d7d5b1655da07437b6"
        },
        {
          index: true,
          key: "msg_index",
          value: "1"
        }
      ],
      type: "move"
    },
    {
      attributes: [
        {
          index: true,
          key: "type_tag",
          value: "0x1::fungible_asset::WithdrawOwnerEvent"
        },
        {
          index: true,
          key: "data",
          value:
            '{"owner":"0xbeee1d654829e85d901d8a1a1248d7e642519b1ec048f2d113ee68be5411bb60"}'
        },
        {
          index: true,
          key: "owner",
          value:
            "0xbeee1d654829e85d901d8a1a1248d7e642519b1ec048f2d113ee68be5411bb60"
        },
        {
          index: true,
          key: "msg_index",
          value: "1"
        }
      ],
      type: "move"
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
            '{"store_addr":"0x370f84a62229ec1100400f13248a8cec65e44d7ac20a0da4d9ba3a30fdf0295c","metadata_addr":"0x8e4733bdabcf7d4afc3d14f0dd46c9bf52fb0fce9e4b996c939e195b8bc891d9","amount":"400117"}'
        },
        {
          index: true,
          key: "amount",
          value: "400117"
        },
        {
          index: true,
          key: "metadata_addr",
          value:
            "0x8e4733bdabcf7d4afc3d14f0dd46c9bf52fb0fce9e4b996c939e195b8bc891d9"
        },
        {
          index: true,
          key: "store_addr",
          value:
            "0x370f84a62229ec1100400f13248a8cec65e44d7ac20a0da4d9ba3a30fdf0295c"
        },
        {
          index: true,
          key: "msg_index",
          value: "1"
        }
      ],
      type: "move"
    },
    {
      attributes: [
        {
          index: true,
          key: "type_tag",
          value: "0x1::fungible_asset::WithdrawOwnerEvent"
        },
        {
          index: true,
          key: "data",
          value:
            '{"owner":"0xbeee1d654829e85d901d8a1a1248d7e642519b1ec048f2d113ee68be5411bb60"}'
        },
        {
          index: true,
          key: "owner",
          value:
            "0xbeee1d654829e85d901d8a1a1248d7e642519b1ec048f2d113ee68be5411bb60"
        },
        {
          index: true,
          key: "msg_index",
          value: "1"
        }
      ],
      type: "move"
    },
    {
      attributes: [
        {
          index: true,
          key: "type_tag",
          value:
            "0xd78a3b72c7ef0cfba7286bfb8c618aa4d6011dce05a832871cc9ab323c25f55e::pool::CollectFeesEvent"
        },
        {
          index: true,
          key: "data",
          value:
            '{"pool_obj":"0x336a6c9a07f6e7f96a3e3423ad6ac2827079c79c031198c3cca987239dde064","token_obj":"0xbeee1d654829e85d901d8a1a1248d7e642519b1ec048f2d113ee68be5411bb60","amount_0":"24288","amount_1":"400117"}'
        },
        {
          index: true,
          key: "amount_0",
          value: "24288"
        },
        {
          index: true,
          key: "amount_1",
          value: "400117"
        },
        {
          index: true,
          key: "pool_obj",
          value:
            "0x336a6c9a07f6e7f96a3e3423ad6ac2827079c79c031198c3cca987239dde064"
        },
        {
          index: true,
          key: "token_obj",
          value:
            "0xbeee1d654829e85d901d8a1a1248d7e642519b1ec048f2d113ee68be5411bb60"
        },
        {
          index: true,
          key: "msg_index",
          value: "1"
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
            '{"store_addr":"0x199fbff2a7108e9c71470522014b22096f7233c1b28436e2502fc5b33dd006d3","metadata_addr":"0x6c69733a9e722f3660afb524f89fce957801fa7e4408b8ef8fe89db9627b570e","amount":"24288"}'
        },
        {
          index: true,
          key: "amount",
          value: "24288"
        },
        {
          index: true,
          key: "metadata_addr",
          value:
            "0x6c69733a9e722f3660afb524f89fce957801fa7e4408b8ef8fe89db9627b570e"
        },
        {
          index: true,
          key: "store_addr",
          value:
            "0x199fbff2a7108e9c71470522014b22096f7233c1b28436e2502fc5b33dd006d3"
        },
        {
          index: true,
          key: "msg_index",
          value: "1"
        }
      ],
      type: "move"
    },
    {
      attributes: [
        {
          index: true,
          key: "type_tag",
          value: "0x1::fungible_asset::DepositOwnerEvent"
        },
        {
          index: true,
          key: "data",
          value: '{"owner":"0xe61e450d8eaf61fcfac7b9d9916384bfa6afe63c"}'
        },
        {
          index: true,
          key: "owner",
          value: "0xe61e450d8eaf61fcfac7b9d9916384bfa6afe63c"
        },
        {
          index: true,
          key: "msg_index",
          value: "1"
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
            '{"store_addr":"0xfd4feb47cf5ef003d15ead023551bbfddec3c523ab45dfb64461da662f1e3f73","metadata_addr":"0x8e4733bdabcf7d4afc3d14f0dd46c9bf52fb0fce9e4b996c939e195b8bc891d9","amount":"400117"}'
        },
        {
          index: true,
          key: "amount",
          value: "400117"
        },
        {
          index: true,
          key: "metadata_addr",
          value:
            "0x8e4733bdabcf7d4afc3d14f0dd46c9bf52fb0fce9e4b996c939e195b8bc891d9"
        },
        {
          index: true,
          key: "store_addr",
          value:
            "0xfd4feb47cf5ef003d15ead023551bbfddec3c523ab45dfb64461da662f1e3f73"
        },
        {
          index: true,
          key: "msg_index",
          value: "1"
        }
      ],
      type: "move"
    },
    {
      attributes: [
        {
          index: true,
          key: "type_tag",
          value: "0x1::fungible_asset::DepositOwnerEvent"
        },
        {
          index: true,
          key: "data",
          value: '{"owner":"0xe61e450d8eaf61fcfac7b9d9916384bfa6afe63c"}'
        },
        {
          index: true,
          key: "owner",
          value: "0xe61e450d8eaf61fcfac7b9d9916384bfa6afe63c"
        },
        {
          index: true,
          key: "msg_index",
          value: "1"
        }
      ],
      type: "move"
    },
    {
      attributes: [
        {
          index: true,
          key: "action",
          value: "/initia.move.v1.MsgExecute"
        },
        {
          index: true,
          key: "sender",
          value: "init1uc0y2rvw4asle7k8h8vezcuyh7n2le3uemrjfm"
        },
        {
          index: true,
          key: "module",
          value: "move"
        },
        {
          index: true,
          key: "msg_index",
          value: "2"
        }
      ],
      type: "message"
    },
    {
      attributes: [
        {
          index: true,
          key: "sender",
          value: "0xe61e450d8eaf61fcfac7b9d9916384bfa6afe63c"
        },
        {
          index: true,
          key: "module_addr",
          value:
            "0xcb2999c70a9b8db7cb473255bb01f956f0726087f08b04ece50844a6d8167351"
        },
        {
          index: true,
          key: "module_name",
          value: "farming"
        },
        {
          index: true,
          key: "function_name",
          value: "stake_token_to_all_viable_incentives"
        },
        {
          index: true,
          key: "msg_index",
          value: "2"
        }
      ],
      type: "execute"
    },
    {
      attributes: [
        {
          index: true,
          key: "type_tag",
          value: "0x1::object::TransferEvent"
        },
        {
          index: true,
          key: "data",
          value:
            '{"object":"0xbeee1d654829e85d901d8a1a1248d7e642519b1ec048f2d113ee68be5411bb60","from":"0xe61e450d8eaf61fcfac7b9d9916384bfa6afe63c","to":"0xa07b5c47d8aad8497b7bb3a07d9cf8ebd85151e859daed7501ed8dd9e1551dd9"}'
        },
        {
          index: true,
          key: "from",
          value: "0xe61e450d8eaf61fcfac7b9d9916384bfa6afe63c"
        },
        {
          index: true,
          key: "object",
          value:
            "0xbeee1d654829e85d901d8a1a1248d7e642519b1ec048f2d113ee68be5411bb60"
        },
        {
          index: true,
          key: "to",
          value:
            "0xa07b5c47d8aad8497b7bb3a07d9cf8ebd85151e859daed7501ed8dd9e1551dd9"
        },
        {
          index: true,
          key: "msg_index",
          value: "2"
        }
      ],
      type: "move"
    },
    {
      attributes: [
        {
          index: true,
          key: "type_tag",
          value:
            "0xcb2999c70a9b8db7cb473255bb01f956f0726087f08b04ece50844a6d8167351::farming::DepositTokenEvent"
        },
        {
          index: true,
          key: "data",
          value:
            '{"account_addr":"0xe61e450d8eaf61fcfac7b9d9916384bfa6afe63c","token_obj":"0xbeee1d654829e85d901d8a1a1248d7e642519b1ec048f2d113ee68be5411bb60","position_obj":"0xa07b5c47d8aad8497b7bb3a07d9cf8ebd85151e859daed7501ed8dd9e1551dd9"}'
        },
        {
          index: true,
          key: "account_addr",
          value: "0xe61e450d8eaf61fcfac7b9d9916384bfa6afe63c"
        },
        {
          index: true,
          key: "position_obj",
          value:
            "0xa07b5c47d8aad8497b7bb3a07d9cf8ebd85151e859daed7501ed8dd9e1551dd9"
        },
        {
          index: true,
          key: "token_obj",
          value:
            "0xbeee1d654829e85d901d8a1a1248d7e642519b1ec048f2d113ee68be5411bb60"
        },
        {
          index: true,
          key: "msg_index",
          value: "2"
        }
      ],
      type: "move"
    },
    {
      attributes: [
        {
          index: true,
          key: "type_tag",
          value:
            "0xcb2999c70a9b8db7cb473255bb01f956f0726087f08b04ece50844a6d8167351::farming::StakeEvent"
        },
        {
          index: true,
          key: "data",
          value:
            '{"incentive_obj":"0x77b431cd7a3fdae1dfaf67a6136ff640088785cefb3175918dceaedcc28bb9a7","token_obj":"0xbeee1d654829e85d901d8a1a1248d7e642519b1ec048f2d113ee68be5411bb60","liquidity":"3472336140"}'
        },
        {
          index: true,
          key: "incentive_obj",
          value:
            "0x77b431cd7a3fdae1dfaf67a6136ff640088785cefb3175918dceaedcc28bb9a7"
        },
        {
          index: true,
          key: "liquidity",
          value: "3472336140"
        },
        {
          index: true,
          key: "token_obj",
          value:
            "0xbeee1d654829e85d901d8a1a1248d7e642519b1ec048f2d113ee68be5411bb60"
        },
        {
          index: true,
          key: "msg_index",
          value: "2"
        }
      ],
      type: "move"
    },
    {
      attributes: [
        {
          index: true,
          key: "action",
          value: "/initia.move.v1.MsgExecute"
        },
        {
          index: true,
          key: "sender",
          value: "init1uc0y2rvw4asle7k8h8vezcuyh7n2le3uemrjfm"
        },
        {
          index: true,
          key: "module",
          value: "move"
        },
        {
          index: true,
          key: "msg_index",
          value: "3"
        }
      ],
      type: "message"
    },
    {
      attributes: [
        {
          index: true,
          key: "sender",
          value: "0xe61e450d8eaf61fcfac7b9d9916384bfa6afe63c"
        },
        {
          index: true,
          key: "module_addr",
          value:
            "0xcb2999c70a9b8db7cb473255bb01f956f0726087f08b04ece50844a6d8167351"
        },
        {
          index: true,
          key: "module_name",
          value: "farming"
        },
        {
          index: true,
          key: "function_name",
          value: "claim_token_reward_entry"
        },
        {
          index: true,
          key: "msg_index",
          value: "3"
        }
      ],
      type: "execute"
    },
    {
      attributes: [
        {
          index: true,
          key: "type_tag",
          value:
            "0xcb2999c70a9b8db7cb473255bb01f956f0726087f08b04ece50844a6d8167351::farming::ClaimTokenEvent"
        },
        {
          index: true,
          key: "data",
          value:
            '{"token_obj":"0xbeee1d654829e85d901d8a1a1248d7e642519b1ec048f2d113ee68be5411bb60","reward_asset_metadata":"0x8e4733bdabcf7d4afc3d14f0dd46c9bf52fb0fce9e4b996c939e195b8bc891d9","recipient":"0xe61e450d8eaf61fcfac7b9d9916384bfa6afe63c","amount":"0"}'
        },
        {
          index: true,
          key: "amount",
          value: "0"
        },
        {
          index: true,
          key: "recipient",
          value: "0xe61e450d8eaf61fcfac7b9d9916384bfa6afe63c"
        },
        {
          index: true,
          key: "reward_asset_metadata",
          value:
            "0x8e4733bdabcf7d4afc3d14f0dd46c9bf52fb0fce9e4b996c939e195b8bc891d9"
        },
        {
          index: true,
          key: "token_obj",
          value:
            "0xbeee1d654829e85d901d8a1a1248d7e642519b1ec048f2d113ee68be5411bb60"
        },
        {
          index: true,
          key: "msg_index",
          value: "3"
        }
      ],
      type: "move"
    }
  ],
  gas_used: "2343709",
  gas_wanted: "3310825",
  height: "15729236",
  info: "",
  logs: [],
  raw_log: "",
  timestamp: "2026-04-12T00:38:58Z",
  tx: {
    "@type": "/cosmos.tx.v1beta1.Tx",
    auth_info: {
      fee: {
        amount: [
          {
            amount: "49663",
            denom: "uinit"
          }
        ],
        gas_limit: "3310825",
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
            key: "AuesX7gLRuYlnSWK4NNUMgvL3v2E/ZOv+20jMKoiekN/"
          },
          sequence: "216"
        }
      ],
      tip: null
    },
    body: {
      extension_options: [],
      memo: "",
      messages: [
        {
          "@type": "/initia.move.v1.MsgExecute",
          args: ["vu4dZUgp6F2QHYoaEkjX5kJRmx7ASPLRE+5ovlQRu2A="],
          function_name: "unstake_then_withdraw",
          module_address:
            "0xcb2999c70a9b8db7cb473255bb01f956f0726087f08b04ece50844a6d8167351",
          module_name: "farming",
          sender: "init1uc0y2rvw4asle7k8h8vezcuyh7n2le3uemrjfm",
          type_args: []
        },
        {
          "@type": "/initia.move.v1.MsgExecute",
          args: ["vu4dZUgp6F2QHYoaEkjX5kJRmx7ASPLRE+5ovlQRu2A="],
          function_name: "collect_fees",
          module_address:
            "0xd78a3b72c7ef0cfba7286bfb8c618aa4d6011dce05a832871cc9ab323c25f55e",
          module_name: "scripts",
          sender: "init1uc0y2rvw4asle7k8h8vezcuyh7n2le3uemrjfm",
          type_args: []
        },
        {
          "@type": "/initia.move.v1.MsgExecute",
          args: ["vu4dZUgp6F2QHYoaEkjX5kJRmx7ASPLRE+5ovlQRu2A="],
          function_name: "stake_token_to_all_viable_incentives",
          module_address:
            "0xcb2999c70a9b8db7cb473255bb01f956f0726087f08b04ece50844a6d8167351",
          module_name: "farming",
          sender: "init1uc0y2rvw4asle7k8h8vezcuyh7n2le3uemrjfm",
          type_args: []
        },
        {
          "@type": "/initia.move.v1.MsgExecute",
          args: [
            "vu4dZUgp6F2QHYoaEkjX5kJRmx7ASPLRE+5ovlQRu2A=",
            "jkczvavPfUr8PRTw3UbJv1L7D86eS5lsk54ZW4vIkdk="
          ],
          function_name: "claim_token_reward_entry",
          module_address:
            "0xcb2999c70a9b8db7cb473255bb01f956f0726087f08b04ece50844a6d8167351",
          module_name: "farming",
          sender: "init1uc0y2rvw4asle7k8h8vezcuyh7n2le3uemrjfm",
          type_args: []
        }
      ],
      non_critical_extension_options: [],
      timeout_height: "0"
    },
    signatures: [
      "Hbqg3GhXvQsxBp5D8/V/CZSnZQ9m7wimbd2Xeyw/gPwul4uPUw+uiSZ45mkvFI2yBZQ3bnhg5tNNrvJlVBtoew=="
    ]
  },
  txhash: "F65B83935165C60359BD5B52798AF5B00C6B77F71ACBFD076C9BD480575DDC31"
} as unknown as TxResponse;
