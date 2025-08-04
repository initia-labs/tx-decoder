import {
  mockApiResponsesForInitiateTokenDeposit,
  mockMsgInitiateTokenDeposit
} from "../fixtures/op-init/initiate-token-deposit.fixture";
import {
  initialize,
  mockedAxios,
  resetMockApi,
  setupMockApi
} from "../helpers";

jest.mock("axios");

const decoder = initialize();

describe("Initiate Token Deposit Message", () => {
  beforeEach(() => {
    resetMockApi(mockedAxios);
  });

  it("should decode an initiate token deposit message correctly", async () => {
    setupMockApi(mockedAxios, mockApiResponsesForInitiateTokenDeposit);

    const decoded = await decoder.decodeTransaction(
      mockMsgInitiateTokenDeposit
    );

    expect(decoded.messages).toHaveLength(1);
    expect(decoded.messages[0].decodedMessage).toEqual({
      action: "op_deposit",
      data: {
        amount: "360000000",
        bridgeId: "30",
        denom: "uinit",
        dstChainId: "rena-nuwa-1",
        from: "init1s3qauqxfmtqhmvpwpfgrka9944me2s0jn52qfe",
        to: "init1s3qauqxfmtqhmvpwpfgrka9944me2s0jn52qfe"
      },
      isIbc: false,
      isOp: true
    });
    expect(decoded.messages[0].balanceChanges).toEqual({
      ft: {
        init1qcvr0r09evj58nh50eejz8j4z4vt663rzrdresd5kdaxr73aldhqld3c0f: {
          uinit: "360000000"
        },
        init1s3qauqxfmtqhmvpwpfgrka9944me2s0jn52qfe: {
          uinit: "-360000000"
        }
      },
      object: {}
    });

    expect(decoded.totalBalanceChanges).toEqual({
      ft: {
        init1qcvr0r09evj58nh50eejz8j4z4vt663rzrdresd5kdaxr73aldhqld3c0f: {
          uinit: "360000000"
        },
        init1s3qauqxfmtqhmvpwpfgrka9944me2s0jn52qfe: {
          uinit: "-360000000"
        }
      },
      object: {}
    });
  });
});
