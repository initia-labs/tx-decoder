import {
  initialize,
  mockedAxios,
  resetMockApi,
  setupMockApi
} from "@/tests/_shared/helpers";

import { mockExtendExpiration } from "./extend-expiration.fixture";
import { mockSetName } from "./set-name.fixture";
import { mockUnsetName } from "./unset-name.fixture";

jest.mock("axios");
const decoder = initialize();

// Mirrors GET /initia/move/v1/denom?metadata=<addr> for uinit — the fee-paying
// denom on these txs, fetched by balance-change processors for WithdrawEvent /
// DepositEvent on the gas fee transfer.
const mockDenomResponses = {
  GET: {
    "/initia/move/v1/denom?metadata=0x8e4733bdabcf7d4afc3d14f0dd46c9bf52fb0fce9e4b996c939e195b8bc891d9":
      { denom: "uinit" }
  }
};

describe("Username Messages", () => {
  beforeEach(() => {
    resetMockApi(mockedAxios);
    setupMockApi(mockedAxios, mockDenomResponses);
  });

  it("should decode set_name with name from event", async () => {
    const decoded = await decoder.decodeCosmosTransaction(mockSetName);

    expect(decoded.messages).toHaveLength(1);
    expect(decoded.messages[0].decodedMessage).toEqual({
      action: "username_set_name",
      data: {
        addr: "0x6baa5dcfd050e9b85a4ddf214baee77884773ba4",
        from: "init1dw49mn7s2r5mskjdmus5hth80zz8wwaywycq06",
        name: "apple-good"
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

  it("should decode unset_name with domain name from event", async () => {
    const decoded = await decoder.decodeCosmosTransaction(mockUnsetName);

    expect(decoded.messages).toHaveLength(1);
    expect(decoded.messages[0].decodedMessage).toEqual({
      action: "username_unset_name",
      data: {
        addr: "0x6baa5dcfd050e9b85a4ddf214baee77884773ba4",
        from: "init1dw49mn7s2r5mskjdmus5hth80zz8wwaywycq06",
        name: "apple-good"
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

  it("should decode extend_expiration with domain name and expiration date", async () => {
    const decoded = await decoder.decodeCosmosTransaction(mockExtendExpiration);

    expect(decoded.messages).toHaveLength(1);
    expect(decoded.messages[0].decodedMessage).toEqual({
      action: "username_extend_expiration",
      data: {
        addr: "0x111fbf7b389e024d09f35fb091d7d4479b321b0a",
        domainName: "ballsdeep",
        expirationDate: "1808609749",
        from: "init1zy0m77ecncpy6z0nt7cfr475g7dnyxc2exccwq"
      },
      isIbc: false,
      isOp: false
    });
    expect(decoded.messages[0].balanceChanges).toEqual({
      ft: {
        init1hs6nf62mn53lx3vc6jpfph2txlk82yptsd4ljncv4tmrjp2x0v9szlk5zc: {
          uinit: "9993155"
        },
        init1zy0m77ecncpy6z0nt7cfr475g7dnyxc2exccwq: {
          uinit: "-9993155"
        }
      },
      object: {},
      vm: "move"
    });
    expect(decoded.metadata).toEqual({ data: {}, type: "move" });
    expect(decoded.totalBalanceChanges).toEqual({
      ft: {
        init1hs6nf62mn53lx3vc6jpfph2txlk82yptsd4ljncv4tmrjp2x0v9szlk5zc: {
          uinit: "9993155"
        },
        init1zy0m77ecncpy6z0nt7cfr475g7dnyxc2exccwq: {
          uinit: "-9993155"
        }
      },
      object: {},
      vm: "move"
    });
  });
});
