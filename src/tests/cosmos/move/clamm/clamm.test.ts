import {
  initialize,
  mockedAxios,
  resetMockApi,
  setupMockApi
} from "@/tests/_shared/helpers";

import {
  mockApiResponsesForClammCollectClaim,
  mockCollectClaim
} from "./collect-claim.fixture";
import {
  mockApiResponsesForClammIncreaseRestake,
  mockClammIncreaseRestake
} from "./increase-restake.fixture";
import {
  mockApiResponsesForClammProvide,
  mockClammProvide
} from "./provide.fixture";
import { mockClammStake } from "./stake.fixture";
import {
  mockApiResponsesForClammWithdraw,
  mockClammWithdraw
} from "./withdraw.fixture";

jest.mock("axios");
const decoder = initialize();

// Shared across every CLAMM test in this file.
const SENDER = "init1uc0y2rvw4asle7k8h8vezcuyh7n2le3uemrjfm";
const IUSD_DENOM =
  "move/6c69733a9e722f3660afb524f89fce957801fa7e4408b8ef8fe89db9627b570e";
const USDC_DENOM =
  "ibc/6490A7EAB61059BFC1CDDEB05917DD70BDF3A611654162A1A47DB930D40D8AF4";

// The iUSD-USDC pool's NFT collection (used by provide/withdraw/increase-restake).
const IUSD_USDC_COLLECTION = {
  collection: {
    creator: "init14q7d7ch74d0358jvq5q9k9x9xn4nqfn22sf9yt3znzn9q6em7gzsf9e99e",
    description: "DexCL position collection",
    name: "DexCLSet-iUSD-ibc/6490A7EAB61059BFC1CDDEB05917DD70BDF3A611654162A1A47DB930D40D8AF4-1",
    uri: ""
  },
  collectionAddress:
    "init1x3aa0w6r9t9wj8kcwku2lu9u4lf3dprgazfg0w88f2urq3n7l4dshvcdly",
  tokenUri: ""
};

describe("CLAMM Messages", () => {
  beforeEach(() => {
    resetMockApi(mockedAxios);
  });

  it("should decode unstake_then_withdraw + remove_liquidity", async () => {
    setupMockApi(mockedAxios, mockApiResponsesForClammWithdraw);

    const decoded = await decoder.decodeCosmosTransaction(mockClammWithdraw);

    const positionObj =
      "init1kcwf2fd4frh4p78tgvgtggsstq9v2467l3cp4tuykexsefal3k7qp83g9w";
    const poolOwner =
      "init14q7d7ch74d0358jvq5q9k9x9xn4nqfn22sf9yt3znzn9q6em7gzsf9e99e";
    const stakingAddr =
      "init1ajygr05t5wtdrsk79ghrvsgca74t6x2tjevcpt5rkppuq9ygzamqwekzax";

    expect(decoded.messages).toHaveLength(2);

    expect(decoded.messages[0].decodedMessage).toEqual({
      action: "clamm_unstake_withdraw",
      data: {
        claimedRewards: [],
        from: SENDER,
        rewardAmount: "0",
        tokenObj:
          "0xb61c9525b548ef50f8eb4310b42210580ac5575efc701aaf84b64d0ca7bf8dbc"
      },
      isIbc: false,
      isOp: false
    });
    expect(decoded.messages[0].balanceChanges).toEqual({
      ft: {},
      object: {
        [SENDER]: { [positionObj]: "1" },
        [stakingAddr]: { [positionObj]: "-1" }
      },
      vm: "move"
    });

    expect(decoded.messages[1].decodedMessage).toEqual({
      action: "clamm_remove_liquidity",
      data: {
        amount0: "994",
        amount1: "1007",
        denom0: IUSD_DENOM,
        denom1: USDC_DENOM,
        from: SENDER,
        liquidityDelta: "200714"
      },
      isIbc: false,
      isOp: false
    });
    expect(decoded.messages[1].balanceChanges).toEqual({
      ft: {
        [poolOwner]: { [IUSD_DENOM]: "-994", [USDC_DENOM]: "-1007" },
        [SENDER]: { [IUSD_DENOM]: "994", [USDC_DENOM]: "1007" }
      },
      object: {},
      vm: "move"
    });

    expect(decoded.metadata).toEqual({
      data: {
        [positionObj]: {
          ...IUSD_USDC_COLLECTION,
          tokenId: "DexCLToken-156"
        }
      },
      type: "move"
    });
    expect(decoded.totalBalanceChanges).toEqual({
      ft: {
        [poolOwner]: { [IUSD_DENOM]: "-994", [USDC_DENOM]: "-1007" },
        [SENDER]: { [IUSD_DENOM]: "994", [USDC_DENOM]: "1007" }
      },
      object: {
        [SENDER]: { [positionObj]: "1" },
        [stakingAddr]: { [positionObj]: "-1" }
      },
      vm: "move"
    });
  });

  // provideConcentrated uses MsgScript (custom bytecode) instead of MsgExecute.
  // Detected via IncreaseLiquidityEvent in logs since function_name is unavailable.
  it("should decode provideConcentrated (MsgScript)", async () => {
    setupMockApi(mockedAxios, mockApiResponsesForClammProvide);

    const decoded = await decoder.decodeCosmosTransaction(mockClammProvide);

    const positionObj =
      "init10dkus9jaqk7wt88ux4szj4hu4rnurtnweqaq2t5wvh9alnwh4gcqzlhqvy";
    const poolOwner =
      "init14q7d7ch74d0358jvq5q9k9x9xn4nqfn22sf9yt3znzn9q6em7gzsf9e99e";
    const stakingAddr =
      "init1pf48ws5jxm9h0wrhp0v2ps0ecft23ctupqtudsgeu2dqqltgngqqkrcvqj";

    expect(decoded.messages).toHaveLength(1);
    expect(decoded.messages[0].decodedMessage).toEqual({
      action: "clamm_provide_and_stake",
      data: {
        amount0: "10",
        amount1: "10",
        denom0: IUSD_DENOM,
        denom1: USDC_DENOM,
        from: SENDER,
        liquidity: "1980"
      },
      isIbc: false,
      isOp: false
    });
    expect(decoded.messages[0].balanceChanges).toEqual({
      ft: {
        [poolOwner]: { [IUSD_DENOM]: "10", [USDC_DENOM]: "10" },
        [SENDER]: { [IUSD_DENOM]: "-10", [USDC_DENOM]: "-10" }
      },
      object: {
        [poolOwner]: { [positionObj]: "0" },
        [SENDER]: { [positionObj]: "0" },
        [stakingAddr]: { [positionObj]: "1" }
      },
      vm: "move"
    });

    expect(decoded.metadata).toEqual({
      data: {
        [positionObj]: {
          ...IUSD_USDC_COLLECTION,
          tokenId: "DexCLToken-169"
        }
      },
      type: "move"
    });
    expect(decoded.totalBalanceChanges).toEqual({
      ft: {
        [poolOwner]: { [IUSD_DENOM]: "10", [USDC_DENOM]: "10" },
        [SENDER]: { [IUSD_DENOM]: "-10", [USDC_DENOM]: "-10" }
      },
      object: {
        [poolOwner]: { [positionObj]: "0" },
        [SENDER]: { [positionObj]: "0" },
        [stakingAddr]: { [positionObj]: "1" }
      },
      vm: "move"
    });
  });

  it("should decode stake_entry", async () => {
    setupMockApi(mockedAxios, mockApiResponsesForClammProvide);

    const decoded = await decoder.decodeCosmosTransaction(mockClammStake);

    expect(decoded.messages).toHaveLength(1);
    expect(decoded.messages[0].decodedMessage).toEqual({
      action: "clamm_stake",
      data: {
        from: SENDER,
        stakes: [
          {
            liquidity: "2019",
            tokenObj:
              "0x46d951b17ee9fe294356599e06863d62d41e14179d21294df0d838d71d329694"
          }
        ]
      },
      isIbc: false,
      isOp: false
    });
    expect(decoded.messages[0].balanceChanges).toEqual({
      ft: {},
      object: {},
      vm: "move"
    });
    expect(decoded.metadata).toEqual({ data: {}, type: "move" });
    expect(decoded.totalBalanceChanges).toEqual({
      ft: {},
      object: {},
      vm: "move"
    });
  });

  it("should decode unstake + increase_liquidity + stake_token_to_all", async () => {
    setupMockApi(mockedAxios, mockApiResponsesForClammIncreaseRestake);

    const decoded = await decoder.decodeCosmosTransaction(
      mockClammIncreaseRestake
    );

    const positionObj =
      "init18n84dvgg9getxcp3rltpmp3lhhc93unmgutf6kc5dq55emxapdhq9flpak";
    const poolOwner =
      "init14q7d7ch74d0358jvq5q9k9x9xn4nqfn22sf9yt3znzn9q6em7gzsf9e99e";
    const stakingAddr =
      "init1dhz685glnmlqqy7a9yj8t9epswtchd4jp33mvklldc0r96u7uzhsmk40lt";
    const tokenObjHex =
      "0x3ccf56b1082a32b360311fd61d863fbdf058f27b47169d5b1468294cecdd0b6e";

    expect(decoded.messages).toHaveLength(3);

    expect(decoded.messages[0].decodedMessage).toEqual({
      action: "clamm_unstake_withdraw",
      data: {
        claimedRewards: [],
        from: SENDER,
        rewardAmount: "0",
        tokenObj: tokenObjHex
      },
      isIbc: false,
      isOp: false
    });
    expect(decoded.messages[0].balanceChanges).toEqual({
      ft: {},
      object: {
        [SENDER]: { [positionObj]: "1" },
        [stakingAddr]: { [positionObj]: "-1" }
      },
      vm: "move"
    });

    expect(decoded.messages[1].decodedMessage).toEqual({
      action: "clamm_increase_liquidity",
      data: {
        amount0: "140",
        amount1: "312",
        denom0: IUSD_DENOM,
        denom1: USDC_DENOM,
        from: SENDER,
        liquidity: "2254033"
      },
      isIbc: false,
      isOp: false
    });
    expect(decoded.messages[1].balanceChanges).toEqual({
      ft: {
        [poolOwner]: { [IUSD_DENOM]: "140", [USDC_DENOM]: "312" },
        [SENDER]: { [IUSD_DENOM]: "-140", [USDC_DENOM]: "-312" }
      },
      object: {},
      vm: "move"
    });

    // stake_token_to_all uses same action as stake_entry.
    expect(decoded.messages[2].decodedMessage).toEqual({
      action: "clamm_stake",
      data: {
        from: SENDER,
        stakes: [{ liquidity: "3685289", tokenObj: tokenObjHex }]
      },
      isIbc: false,
      isOp: false
    });
    expect(decoded.messages[2].balanceChanges).toEqual({
      ft: {},
      object: {
        [SENDER]: { [positionObj]: "-1" },
        [stakingAddr]: { [positionObj]: "1" }
      },
      vm: "move"
    });

    expect(decoded.metadata).toEqual({
      data: {
        [positionObj]: {
          ...IUSD_USDC_COLLECTION,
          tokenId: "DexCLToken-157"
        }
      },
      type: "move"
    });
    expect(decoded.totalBalanceChanges).toEqual({
      ft: {
        [poolOwner]: { [IUSD_DENOM]: "140", [USDC_DENOM]: "312" },
        [SENDER]: { [IUSD_DENOM]: "-140", [USDC_DENOM]: "-312" }
      },
      object: {
        [SENDER]: { [positionObj]: "0" },
        [stakingAddr]: { [positionObj]: "0" }
      },
      vm: "move"
    });
  });

  it("should decode collect_fees + claim_token_reward", async () => {
    setupMockApi(mockedAxios, mockApiResponsesForClammCollectClaim);

    const decoded = await decoder.decodeCosmosTransaction(mockCollectClaim);

    const positionObj =
      "init1hmhp6e2g9859myqa3gdpyjxhuep9rxc7cpy095gnae5tu4q3hdsqfvh9a9";
    const poolOwner =
      "init1qvm2djdq0ah8l94rudpr444v9qns08recqc3nrpue2v8ywwaupjqf53qp6";
    const stakingAddr =
      "init15pa4c37c4tvyj7mmkws8m88ca0v9z50gt8dw6agpakxanc24rhvs78u2v7";
    const farmingReserve =
      "init1w76rrnt68ldwrha0v7npxmlkgqyg0pwwlvchtyvde6hdes5thxnsg2jdj0";
    const tokenObjHex =
      "0xbeee1d654829e85d901d8a1a1248d7e642519b1ec048f2d113ee68be5411bb60";

    expect(decoded.messages).toHaveLength(4);

    expect(decoded.messages[0].decodedMessage).toEqual({
      action: "clamm_unstake_withdraw",
      data: {
        claimedRewards: [{ amount: "3881682", denom: "uinit" }],
        from: SENDER,
        rewardAmount: "3881682",
        tokenObj: tokenObjHex
      },
      isIbc: false,
      isOp: false
    });
    expect(decoded.messages[0].balanceChanges).toEqual({
      ft: {
        [farmingReserve]: { uinit: "-3881682" },
        [SENDER]: { uinit: "3881682" },
        [stakingAddr]: { uinit: "0" }
      },
      object: {
        [SENDER]: { [positionObj]: "1" },
        [stakingAddr]: { [positionObj]: "-1" }
      },
      vm: "move"
    });

    expect(decoded.messages[1].decodedMessage).toEqual({
      action: "clamm_collect_fees",
      data: {
        amount0: "24288",
        amount1: "400117",
        denom0: IUSD_DENOM,
        denom1: "uinit",
        from: SENDER
      },
      isIbc: false,
      isOp: false
    });
    expect(decoded.messages[1].balanceChanges).toEqual({
      ft: {
        [poolOwner]: { [IUSD_DENOM]: "-24288", uinit: "-400117" },
        [positionObj]: { [IUSD_DENOM]: "0", uinit: "0" },
        [SENDER]: { [IUSD_DENOM]: "24288", uinit: "400117" }
      },
      object: {},
      vm: "move"
    });

    expect(decoded.messages[2].decodedMessage).toEqual({
      action: "clamm_stake",
      data: {
        from: SENDER,
        stakes: [{ liquidity: "3472336140", tokenObj: tokenObjHex }]
      },
      isIbc: false,
      isOp: false
    });
    expect(decoded.messages[2].balanceChanges).toEqual({
      ft: {},
      object: {
        [SENDER]: { [positionObj]: "-1" },
        [stakingAddr]: { [positionObj]: "1" }
      },
      vm: "move"
    });

    expect(decoded.messages[3].decodedMessage).toEqual({
      action: "clamm_claim_reward",
      data: { from: SENDER, rewards: [] },
      isIbc: false,
      isOp: false
    });
    expect(decoded.messages[3].balanceChanges).toEqual({
      ft: {},
      object: {},
      vm: "move"
    });

    expect(decoded.metadata).toEqual({
      data: {
        [positionObj]: {
          collection: {
            creator: poolOwner,
            description: "DexCL position collection",
            name: "DexCLSet-iUSD-INIT-30",
            uri: ""
          },
          collectionAddress:
            "init156aa53glxmm8kfw59gerjdd8mtss6l2qkg5artgd9ltaune9zxasd0szsn",
          tokenId: "DexCLToken-267",
          tokenUri: ""
        }
      },
      type: "move"
    });
    expect(decoded.totalBalanceChanges).toEqual({
      ft: {
        [farmingReserve]: { uinit: "-3881682" },
        [poolOwner]: { [IUSD_DENOM]: "-24288", uinit: "-400117" },
        [positionObj]: { [IUSD_DENOM]: "0", uinit: "0" },
        [SENDER]: { [IUSD_DENOM]: "24288", uinit: "4281799" },
        [stakingAddr]: { uinit: "0" }
      },
      object: {
        [SENDER]: { [positionObj]: "0" },
        [stakingAddr]: { [positionObj]: "0" }
      },
      vm: "move"
    });
  });
});
