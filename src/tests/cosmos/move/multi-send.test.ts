import {
  initialize,
  mockedAxios,
  resetMockApi,
  setupMockApi
} from "@/tests/_shared/helpers";

import {
  mockApiResponsesForMultiSend,
  mockMultiSendTx
} from "./multi-send.fixture";

jest.mock("axios");

const decoder = initialize();

describe("Multi-send stampede dedup", () => {
  beforeEach(() => {
    resetMockApi(mockedAxios);
  });

  it("fetches the denom URL exactly once despite 71 concurrent lookups", async () => {
    setupMockApi(mockedAxios, mockApiResponsesForMultiSend);

    await decoder.decodeCosmosTransaction(mockMultiSendTx);

    const denomGetCalls = mockedAxios.get.mock.calls
      .map(([url]) => url as string)
      .filter((url) => url.includes("/initia/move/v1/denom?metadata="));

    const callsPerUrl = denomGetCalls.reduce<Record<string, number>>(
      (acc, url) => {
        acc[url] = (acc[url] ?? 0) + 1;
        return acc;
      },
      {}
    );

    // The tx fans out 71 DepositEvent + 71 WithdrawEvent pairs sharing one
    // metadata_addr. Without in-flight dedup this URL would be requested 71+
    // times; with dedup it lands exactly once.
    expect(callsPerUrl).toEqual({
      "https://rest.test.url/initia/move/v1/denom?metadata=0x13bab7c0ed9dd9f4609f7dee7a5f69c99e14eca507f77e088d9b429f77e47b81": 1
    });
  });

  it("computes the expected total balance changes", async () => {
    setupMockApi(mockedAxios, mockApiResponsesForMultiSend);

    const decoded = await decoder.decodeCosmosTransaction(mockMultiSendTx);

    // The tx is an `0x1::multisig_v2::execute_proposal` call which isn't a
    // recognized message decoder, so the single message resolves to
    // `not_supported`. Balance changes still come from event processing.
    expect(decoded.messages).toHaveLength(1);
    expect(decoded.messages[0].decodedMessage).toEqual({
      action: "not_supported",
      data: { msgType: "/initia.move.v1.MsgExecute" },
      isIbc: false,
      isOp: false
    });

    // Net totals across the whole tx sum to zero (pure transfers).
    const totals = decoded.totalBalanceChanges;
    expect(totals.vm).toBe("move");
    const sumByDenom: Record<string, bigint> = {};
    for (const addrBalances of Object.values(totals.ft)) {
      for (const [denom, amount] of Object.entries(addrBalances)) {
        sumByDenom[denom] = (sumByDenom[denom] ?? 0n) + BigInt(amount);
      }
    }
    expect(sumByDenom).toEqual({
      "ibc/B82A5B2051D2296EE838D076218D4F852A629C69B99E7430C4D388F37DB16A3A": 0n
    });
  });
});
