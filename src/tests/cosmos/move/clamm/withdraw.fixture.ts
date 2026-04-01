export const mockClammWithdraw = {
  code: 0,
  codespace: "",
  data: "12240A222F696E697469612E6D6F76652E76312E4D736745786563757465526573706F6E736512240A222F696E697469612E6D6F76652E76312E4D736745786563757465526573706F6E7365",
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
            '{"store_addr":"0x884a9cc49b8010124566bd2923a19723d6eee4361a6e08c68156f60f2f314d0f","metadata_addr":"0x8e4733bdabcf7d4afc3d14f0dd46c9bf52fb0fce9e4b996c939e195b8bc891d9","amount":"39869"}'
        },
        {
          index: true,
          key: "amount",
          value: "39869"
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
            "0x884a9cc49b8010124566bd2923a19723d6eee4361a6e08c68156f60f2f314d0f"
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
            '{"store_addr":"0x66a8cb0bfb991610dcffb8a6543ac0887c7c5405b8f985ebed6d628fe50c4686","metadata_addr":"0x8e4733bdabcf7d4afc3d14f0dd46c9bf52fb0fce9e4b996c939e195b8bc891d9","amount":"39869"}'
        },
        {
          index: true,
          key: "amount",
          value: "39869"
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
          value: "39869uinit"
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
          value: "39869uinit"
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
          value: "39869uinit"
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
          value: "39869uinit"
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
          value: "init1uc0y2rvw4asle7k8h8vezcuyh7n2le3uemrjfm/715"
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
            "EXWnJF7eIeDqbDSyIcP0uYlYBiCf2X3IyjMg/trOf10xusQI3eWqxcGLswUsEGoNx+TuAnyYAF3Ti/YaNmuIkw=="
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
          value: "0x1::object::CreateEvent"
        },
        {
          index: true,
          key: "data",
          value:
            '{"object":"0x29756c59a3e50b71f971c952915f716be16cae9ed7c94390c51cc675e6037bcc","owner":"0xec8881be8ba396d1c2de2a2e364118efaabd194b965980ae83b043c014881776","version":"1"}'
        },
        {
          index: true,
          key: "object",
          value:
            "0x29756c59a3e50b71f971c952915f716be16cae9ed7c94390c51cc675e6037bcc"
        },
        {
          index: true,
          key: "owner",
          value:
            "0xec8881be8ba396d1c2de2a2e364118efaabd194b965980ae83b043c014881776"
        },
        {
          index: true,
          key: "version",
          value: "1"
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
          value: "0x1::primary_fungible_store::PrimaryStoreCreatedEvent"
        },
        {
          index: true,
          key: "data",
          value:
            '{"owner_addr":"0xec8881be8ba396d1c2de2a2e364118efaabd194b965980ae83b043c014881776","store_addr":"0x29756c59a3e50b71f971c952915f716be16cae9ed7c94390c51cc675e6037bcc","metadata_addr":"0x6c69733a9e722f3660afb524f89fce957801fa7e4408b8ef8fe89db9627b570e"}'
        },
        {
          index: true,
          key: "metadata_addr",
          value:
            "0x6c69733a9e722f3660afb524f89fce957801fa7e4408b8ef8fe89db9627b570e"
        },
        {
          index: true,
          key: "owner_addr",
          value:
            "0xec8881be8ba396d1c2de2a2e364118efaabd194b965980ae83b043c014881776"
        },
        {
          index: true,
          key: "store_addr",
          value:
            "0x29756c59a3e50b71f971c952915f716be16cae9ed7c94390c51cc675e6037bcc"
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
            '{"incentive_obj":"0x3dd00738b16a8fa74ea9a05fd77661ed7e95113212c211be035f1a687a3eacf8","token_obj":"0xb61c9525b548ef50f8eb4310b42210580ac5575efc701aaf84b64d0ca7bf8dbc","reward_amount":"0","seconds_inside":"214297922092"}'
        },
        {
          index: true,
          key: "incentive_obj",
          value:
            "0x3dd00738b16a8fa74ea9a05fd77661ed7e95113212c211be035f1a687a3eacf8"
        },
        {
          index: true,
          key: "reward_amount",
          value: "0"
        },
        {
          index: true,
          key: "seconds_inside",
          value: "214297922092"
        },
        {
          index: true,
          key: "token_obj",
          value:
            "0xb61c9525b548ef50f8eb4310b42210580ac5575efc701aaf84b64d0ca7bf8dbc"
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
            '{"token_obj":"0xb61c9525b548ef50f8eb4310b42210580ac5575efc701aaf84b64d0ca7bf8dbc","reward_asset_metadata":"0x6c69733a9e722f3660afb524f89fce957801fa7e4408b8ef8fe89db9627b570e","recipient":"0xe61e450d8eaf61fcfac7b9d9916384bfa6afe63c","amount":"0"}'
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
            "0xb61c9525b548ef50f8eb4310b42210580ac5575efc701aaf84b64d0ca7bf8dbc"
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
            '{"token_obj":"0xb61c9525b548ef50f8eb4310b42210580ac5575efc701aaf84b64d0ca7bf8dbc","reward_asset_metadata":"0x8e4733bdabcf7d4afc3d14f0dd46c9bf52fb0fce9e4b996c939e195b8bc891d9","recipient":"0xe61e450d8eaf61fcfac7b9d9916384bfa6afe63c","amount":"0"}'
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
            "0xb61c9525b548ef50f8eb4310b42210580ac5575efc701aaf84b64d0ca7bf8dbc"
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
            '{"object":"0xb61c9525b548ef50f8eb4310b42210580ac5575efc701aaf84b64d0ca7bf8dbc","from":"0xec8881be8ba396d1c2de2a2e364118efaabd194b965980ae83b043c014881776","to":"0xe61e450d8eaf61fcfac7b9d9916384bfa6afe63c"}'
        },
        {
          index: true,
          key: "from",
          value:
            "0xec8881be8ba396d1c2de2a2e364118efaabd194b965980ae83b043c014881776"
        },
        {
          index: true,
          key: "object",
          value:
            "0xb61c9525b548ef50f8eb4310b42210580ac5575efc701aaf84b64d0ca7bf8dbc"
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
            '{"account_addr":"0xe61e450d8eaf61fcfac7b9d9916384bfa6afe63c","token_obj":"0xb61c9525b548ef50f8eb4310b42210580ac5575efc701aaf84b64d0ca7bf8dbc"}'
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
            "0xb61c9525b548ef50f8eb4310b42210580ac5575efc701aaf84b64d0ca7bf8dbc"
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
          value: "remove_liquidity"
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
          value:
            "0xd78a3b72c7ef0cfba7286bfb8c618aa4d6011dce05a832871cc9ab323c25f55e::pool::AccrueFeesEvent"
        },
        {
          index: true,
          key: "data",
          value:
            '{"pool_obj":"0xa83cdf62feab5f1a1e4c05005b14c534eb30266a5412522e2298a6506b3bf205","position_obj":"0xb61c9525b548ef50f8eb4310b42210580ac5575efc701aaf84b64d0ca7bf8dbc","amount_0":"0","amount_1":"0"}'
        },
        {
          index: true,
          key: "amount_0",
          value: "0"
        },
        {
          index: true,
          key: "amount_1",
          value: "0"
        },
        {
          index: true,
          key: "pool_obj",
          value:
            "0xa83cdf62feab5f1a1e4c05005b14c534eb30266a5412522e2298a6506b3bf205"
        },
        {
          index: true,
          key: "position_obj",
          value:
            "0xb61c9525b548ef50f8eb4310b42210580ac5575efc701aaf84b64d0ca7bf8dbc"
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
            "0xd78a3b72c7ef0cfba7286bfb8c618aa4d6011dce05a832871cc9ab323c25f55e::pool::RemoveLiquidityEvent"
        },
        {
          index: true,
          key: "data",
          value:
            '{"pool_obj":"0xa83cdf62feab5f1a1e4c05005b14c534eb30266a5412522e2298a6506b3bf205","metadata_0":"0x6c69733a9e722f3660afb524f89fce957801fa7e4408b8ef8fe89db9627b570e","metadata_1":"0xe0e9394b24e53775d6af87934ac02d73536ad58b7894f6ccff3f5e7c0d548e55","token_obj":"0xb61c9525b548ef50f8eb4310b42210580ac5575efc701aaf84b64d0ca7bf8dbc","tick_lower":{"bits":"18446744073709551514"},"tick_upper":{"bits":"98"},"amount_0":"994","amount_1":"1007","liquidity_delta":"200714","pool_balance_0":"302486726840","pool_balance_1":"90659802240"}'
        },
        {
          index: true,
          key: "amount_0",
          value: "994"
        },
        {
          index: true,
          key: "amount_1",
          value: "1007"
        },
        {
          index: true,
          key: "liquidity_delta",
          value: "200714"
        },
        {
          index: true,
          key: "metadata_0",
          value:
            "0x6c69733a9e722f3660afb524f89fce957801fa7e4408b8ef8fe89db9627b570e"
        },
        {
          index: true,
          key: "metadata_1",
          value:
            "0xe0e9394b24e53775d6af87934ac02d73536ad58b7894f6ccff3f5e7c0d548e55"
        },
        {
          index: true,
          key: "pool_balance_0",
          value: "302486726840"
        },
        {
          index: true,
          key: "pool_balance_1",
          value: "90659802240"
        },
        {
          index: true,
          key: "pool_obj",
          value:
            "0xa83cdf62feab5f1a1e4c05005b14c534eb30266a5412522e2298a6506b3bf205"
        },
        {
          index: true,
          key: "token_obj",
          value:
            "0xb61c9525b548ef50f8eb4310b42210580ac5575efc701aaf84b64d0ca7bf8dbc"
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
            '{"store_addr":"0xb307845876682be10eb78d9aff249d2ae9c579fd1ff4e2ce21f95714866b0aea","metadata_addr":"0x6c69733a9e722f3660afb524f89fce957801fa7e4408b8ef8fe89db9627b570e","amount":"994"}'
        },
        {
          index: true,
          key: "amount",
          value: "994"
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
            "0xb307845876682be10eb78d9aff249d2ae9c579fd1ff4e2ce21f95714866b0aea"
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
            '{"owner":"0xa83cdf62feab5f1a1e4c05005b14c534eb30266a5412522e2298a6506b3bf205"}'
        },
        {
          index: true,
          key: "owner",
          value:
            "0xa83cdf62feab5f1a1e4c05005b14c534eb30266a5412522e2298a6506b3bf205"
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
            '{"store_addr":"0xf9d4c545818788b58f60f89e16ec703b689c5a72c28e21ff1ad531eea3a2e81","metadata_addr":"0xe0e9394b24e53775d6af87934ac02d73536ad58b7894f6ccff3f5e7c0d548e55","amount":"1007"}'
        },
        {
          index: true,
          key: "amount",
          value: "1007"
        },
        {
          index: true,
          key: "metadata_addr",
          value:
            "0xe0e9394b24e53775d6af87934ac02d73536ad58b7894f6ccff3f5e7c0d548e55"
        },
        {
          index: true,
          key: "store_addr",
          value:
            "0xf9d4c545818788b58f60f89e16ec703b689c5a72c28e21ff1ad531eea3a2e81"
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
            '{"owner":"0xa83cdf62feab5f1a1e4c05005b14c534eb30266a5412522e2298a6506b3bf205"}'
        },
        {
          index: true,
          key: "owner",
          value:
            "0xa83cdf62feab5f1a1e4c05005b14c534eb30266a5412522e2298a6506b3bf205"
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
            '{"store_addr":"0x7d2e70ee15b1595c04787e936621bcf8ea37410e028eca24b5667f61a1ed3ba7","metadata_addr":"0x6c69733a9e722f3660afb524f89fce957801fa7e4408b8ef8fe89db9627b570e","amount":"994"}'
        },
        {
          index: true,
          key: "amount",
          value: "994"
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
            "0x7d2e70ee15b1595c04787e936621bcf8ea37410e028eca24b5667f61a1ed3ba7"
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
            '{"store_addr":"0xbbee4bcee4d84120b657706ebdd65097ee46234d910b31d852de14f016fe2472","metadata_addr":"0xe0e9394b24e53775d6af87934ac02d73536ad58b7894f6ccff3f5e7c0d548e55","amount":"1007"}'
        },
        {
          index: true,
          key: "amount",
          value: "1007"
        },
        {
          index: true,
          key: "metadata_addr",
          value:
            "0xe0e9394b24e53775d6af87934ac02d73536ad58b7894f6ccff3f5e7c0d548e55"
        },
        {
          index: true,
          key: "store_addr",
          value:
            "0xbbee4bcee4d84120b657706ebdd65097ee46234d910b31d852de14f016fe2472"
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
    }
  ],
  gas_used: "1877342",
  gas_wanted: "2657912",
  height: "15246802",
  info: "",
  logs: [],
  raw_log: "",
  timestamp: "2026-03-31T04:23:46Z",
  tx: {
    "@type": "/cosmos.tx.v1beta1.Tx",
    auth_info: {
      fee: {
        amount: [
          {
            amount: "39869",
            denom: "uinit"
          }
        ],
        gas_limit: "2657912",
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
            key: "AlAegIsdn+POmTqW6HJOuuXZBrhPHAqw0UGIP+AKdwjR"
          },
          sequence: "715"
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
          args: ["thyVJbVI71D460MQtCIQWArFV178cBqvhLZNDKe/jbw="],
          function_name: "unstake_then_withdraw",
          module_address:
            "0xcb2999c70a9b8db7cb473255bb01f956f0726087f08b04ece50844a6d8167351",
          module_name: "farming",
          sender: "init1uc0y2rvw4asle7k8h8vezcuyh7n2le3uemrjfm",
          type_args: []
        },
        {
          "@type": "/initia.move.v1.MsgExecute",
          args: [
            "thyVJbVI71D460MQtCIQWArFV178cBqvhLZNDKe/jbw=",
            "ChADAAAAAAA=",
            "3gMAAAAAAAA=",
            "6gMAAAAAAAA="
          ],
          function_name: "remove_liquidity",
          module_address:
            "0xd78a3b72c7ef0cfba7286bfb8c618aa4d6011dce05a832871cc9ab323c25f55e",
          module_name: "scripts",
          sender: "init1uc0y2rvw4asle7k8h8vezcuyh7n2le3uemrjfm",
          type_args: []
        }
      ],
      non_critical_extension_options: [],
      timeout_height: "0"
    },
    signatures: [
      "EXWnJF7eIeDqbDSyIcP0uYlYBiCf2X3IyjMg/trOf10xusQI3eWqxcGLswUsEGoNx+TuAnyYAF3Ti/YaNmuIkw=="
    ]
  },
  txhash: "E1EEBD2BCA793BAC4C4C30C19A26D9D9BCB62063F68AADA018B10BD0E2750A0D"
} as const;

export const mockApiResponsesForClamm = { GET: {}, POST: {} };
