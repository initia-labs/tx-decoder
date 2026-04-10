import {
  initialize,
  mockedAxios,
  resetMockApi,
  setupMockApi
} from "@/tests/_shared/helpers";

import { mock as mockCollectClaim } from "./collect-claim.fixture";
import { mock as mockIncreaseRestake } from "./increase-restake.fixture";
import { mockClammProvide } from "./provide.fixture";
import { mockClammStake } from "./stake.fixture";
import { mockClammWithdraw } from "./withdraw.fixture";

jest.mock("axios");
const decoder = initialize();

const mockDenomResponses = {
  GET: {
    // Pool resource for collect_fees (testnet)
    "/initia/move/v1/accounts/0x230fe97b25e39a631b534a83c5a115476a677bbc416fce3cf7b25ef9bb8d7803/resources":
      {
        pagination: { next_key: null, total: "1" },
        resources: [
          {
            address:
              "0x230fe97b25e39a631b534a83c5a115476a677bbc416fce3cf7b25ef9bb8d7803",
            move_resource: JSON.stringify({
              data: {
                metadata_0: {
                  inner:
                    "0x29824d952e035490fae7567deea5f15b504a68fa73610063c160ab1fa87dd609"
                },
                metadata_1: {
                  inner:
                    "0x8e4733bdabcf7d4afc3d14f0dd46c9bf52fb0fce9e4b996c939e195b8bc891d9"
                }
              },
              type: "0x6b41bf295bc31cd9bef75a9a5a67e5a8d6749b34a7ab3105808251fa2697823d::pool::Pool"
            }),
            raw_bytes: "",
            struct_tag:
              "0x6b41bf295bc31cd9bef75a9a5a67e5a8d6749b34a7ab3105808251fa2697823d::pool::Pool"
          }
        ]
      },
    // Pool resource for collect_fees (mainnet)
    "/initia/move/v1/accounts/0x336a6c9a07f6e7f96a3e3423ad6ac2827079c79c031198c3cca987239dde064/resources":
      {
        pagination: { next_key: null, total: "1" },
        resources: [
          {
            address:
              "0x336a6c9a07f6e7f96a3e3423ad6ac2827079c79c031198c3cca987239dde064",
            move_resource: JSON.stringify({
              data: {
                metadata_0: {
                  inner:
                    "0x6c69733a9e722f3660afb524f89fce957801fa7e4408b8ef8fe89db9627b570e"
                },
                metadata_1: {
                  inner:
                    "0x8e4733bdabcf7d4afc3d14f0dd46c9bf52fb0fce9e4b996c939e195b8bc891d9"
                }
              },
              type: "0xd78a3b72c7ef0cfba7286bfb8c618aa4d6011dce05a832871cc9ab323c25f55e::pool::Pool"
            }),
            raw_bytes: "",
            struct_tag:
              "0xd78a3b72c7ef0cfba7286bfb8c618aa4d6011dce05a832871cc9ab323c25f55e::pool::Pool"
          }
        ]
      },
    // iUSD metadata → denom (mainnet)
    "/initia/move/v1/denom?metadata=0x6c69733a9e722f3660afb524f89fce957801fa7e4408b8ef8fe89db9627b570e":
      {
        denom:
          "move/6c69733a9e722f3660afb524f89fce957801fa7e4408b8ef8fe89db9627b570e"
      },
    // INIT metadata → denom
    "/initia/move/v1/denom?metadata=0x8e4733bdabcf7d4afc3d14f0dd46c9bf52fb0fce9e4b996c939e195b8bc891d9":
      {
        denom: "uinit"
      },
    // USDC metadata → denom (testnet)
    "/initia/move/v1/denom?metadata=0x29824d952e035490fae7567deea5f15b504a68fa73610063c160ab1fa87dd609":
      {
        denom: "uusdc"
      },
    // USDC metadata → denom (mainnet)
    "/initia/move/v1/denom?metadata=0xe0e9394b24e53775d6af87934ac02d73536ad58b7894f6ccff3f5e7c0d548e55":
      {
        denom:
          "ibc/6490A7EAB61059BFC1CDDEB05917DD70BDF3A611654162A1A47DB930D40D8AF4"
      }
  }
};

describe("CLAMM Messages", () => {
  beforeEach(() => {
    resetMockApi(mockedAxios);
  });

  it("should decode unstake_then_withdraw + remove_liquidity", async () => {
    setupMockApi(mockedAxios, mockDenomResponses);

    const decoded = await decoder.decodeCosmosTransaction(mockClammWithdraw);

    expect(decoded.messages).toHaveLength(2);
    expect(decoded.messages[0].decodedMessage.action).toBe(
      "clamm_unstake_withdraw"
    );
    expect(decoded.messages[0].decodedMessage.data).toMatchObject({
      claimedRewards: expect.any(Array),
      tokenObj: expect.any(String)
    });
    expect(decoded.messages[1].decodedMessage.action).toBe(
      "clamm_remove_liquidity"
    );
    expect(decoded.messages[1].decodedMessage.data).toMatchObject({
      amount0: "994",
      amount1: "1007",
      from: "init1uc0y2rvw4asle7k8h8vezcuyh7n2le3uemrjfm",
      liquidityDelta: "200714"
    });
  });

  // provideConcentrated uses MsgScript (custom bytecode) instead of MsgExecute.
  // Detected via IncreaseLiquidityEvent in logs since function_name is unavailable.
  it("should decode provideConcentrated (MsgScript)", async () => {
    setupMockApi(mockedAxios, mockDenomResponses);

    const decoded = await decoder.decodeCosmosTransaction(mockClammProvide);

    expect(decoded.messages).toHaveLength(1);
    expect(decoded.messages[0].decodedMessage.action).toBe(
      "clamm_provide_and_stake"
    );
    expect(decoded.messages[0].decodedMessage.data).toMatchObject({
      amount0: "10",
      amount1: "10",
      denom0:
        "move/6c69733a9e722f3660afb524f89fce957801fa7e4408b8ef8fe89db9627b570e",
      denom1:
        "ibc/6490A7EAB61059BFC1CDDEB05917DD70BDF3A611654162A1A47DB930D40D8AF4",
      from: "init1uc0y2rvw4asle7k8h8vezcuyh7n2le3uemrjfm",
      liquidity: "1980"
    });
  });

  it("should decode stake_entry", async () => {
    setupMockApi(mockedAxios, mockDenomResponses);

    const decoded = await decoder.decodeCosmosTransaction(mockClammStake);

    expect(decoded.messages).toHaveLength(1);
    expect(decoded.messages[0].decodedMessage.action).toBe("clamm_stake");
    expect(decoded.messages[0].decodedMessage.data).toEqual({
      from: "init1uc0y2rvw4asle7k8h8vezcuyh7n2le3uemrjfm",
      stakes: [
        {
          liquidity: "2019",
          tokenObj:
            "0x46d951b17ee9fe294356599e06863d62d41e14179d21294df0d838d71d329694"
        }
      ]
    });
  });

  it("should decode unstake + increase_liquidity + stake_token_to_all", async () => {
    setupMockApi(mockedAxios, mockDenomResponses);

    const decoded = await decoder.decodeCosmosTransaction(mockIncreaseRestake);

    expect(decoded.messages).toHaveLength(3);
    expect(decoded.messages[0].decodedMessage.action).toBe(
      "clamm_unstake_withdraw"
    );
    expect(decoded.messages[1].decodedMessage.action).toBe(
      "clamm_increase_liquidity"
    );
    expect(decoded.messages[1].decodedMessage.data).toMatchObject({
      amount0: expect.any(String),
      amount1: expect.any(String),
      liquidity: expect.any(String)
    });
    // stake_token_to_all uses same action as stake_entry
    expect(decoded.messages[2].decodedMessage.action).toBe("clamm_stake");
  });

  it("should decode collect_fees + claim_token_reward (testnet)", async () => {
    setupMockApi(mockedAxios, mockDenomResponses);

    const decoded = await decoder.decodeCosmosTransaction(mockCollectClaim);

    expect(decoded.messages).toHaveLength(4);
    const actions = decoded.messages.map((m) => m.decodedMessage.action);
    expect(actions).toEqual([
      "clamm_unstake_withdraw",
      "clamm_collect_fees",
      "clamm_stake",
      "clamm_claim_reward"
    ]);

    const collectMsg = decoded.messages.find(
      (m) => m.decodedMessage.action === "clamm_collect_fees"
    );
    expect(collectMsg?.decodedMessage.data).toEqual({
      amount0: "30",
      amount1: "0",
      denom0: "uusdc",
      denom1: "uinit",
      from: "init10634qjl5yjz3yf6c5ehkv54gmwtpn6tjuwymwv"
    });

    const claimMsg = decoded.messages.find(
      (m) => m.decodedMessage.action === "clamm_claim_reward"
    );
    expect(claimMsg?.decodedMessage.data).toMatchObject({
      from: "init10634qjl5yjz3yf6c5ehkv54gmwtpn6tjuwymwv",
      rewards: expect.any(Array)
    });
  });
});
