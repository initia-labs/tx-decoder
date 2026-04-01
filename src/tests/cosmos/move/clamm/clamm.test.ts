import {
  initialize,
  mockedAxios,
  resetMockApi,
  setupMockApi
} from "@/tests/_shared/helpers";

import { mockClammProvide } from "./provide.fixture";
import { mockClammStake } from "./stake.fixture";
import { mockClammWithdraw } from "./withdraw.fixture";

jest.mock("axios");
const decoder = initialize();

const mockDenomResponses = {
  GET: {
    // iUSD metadata → denom
    "/initia/move/v1/denom?metadata=0x6c69733a9e722f3660afb524f89fce957801fa7e4408b8ef8fe89db9627b570e":
      {
        denom:
          "move/6c69733a9e722f3660afb524f89fce957801fa7e4408b8ef8fe89db9627b570e"
      },
    // USDC metadata → denom
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
    expect(decoded.messages[1].decodedMessage.action).toBe(
      "clamm_remove_liquidity"
    );
    expect(decoded.messages[1].decodedMessage.data).toMatchObject({
      amount0: "994",
      amount1: "1007",
      from: "init1uc0y2rvw4asle7k8h8vezcuyh7n2le3uemrjfm"
    });
  });

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
      from: "init1uc0y2rvw4asle7k8h8vezcuyh7n2le3uemrjfm"
    });
  });

  it("should decode stake_entry", async () => {
    setupMockApi(mockedAxios, mockDenomResponses);

    const decoded = await decoder.decodeCosmosTransaction(mockClammStake);

    expect(decoded.messages).toHaveLength(3);
    decoded.messages.forEach((msg) => {
      expect(msg.decodedMessage.action).toBe("clamm_stake");
    });
  });
});
