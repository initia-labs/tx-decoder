import {
  initialize,
  mockedAxios,
  resetMockApi,
  setupMockApi
} from "@/tests/_shared/helpers";

import {
  mockApiResponsesForDepositLiquidity,
  mockMsgDepositLiquidity
} from "./deposit-liquidity.fixture";
import {
  mockApiResponsesForDepositStakeLiquidity,
  mockMsgDepositStakeLiquidity
} from "./deposit-stake-liquidity.fixture";
import {
  mockApiResponsesForDepositStakeLockLiquidity,
  mockMsgDepositStakeLockLiquidity
} from "./deposit-stake-lock-liquidity.fixture";
import {
  mockApiResponsesForMainnetNewDexUtilsDepositStakeLiquidity,
  mockMsgMainnetNewDexUtilsDepositStakeLiquidity
} from "./mainnet-new-dex-utils-deposit-stake-liquidity.fixture";
import {
  mockApiResponsesForTestnetDepositStakeLiquidity,
  mockMsgTestnetDepositStakeLiquidity
} from "./testnet-deposit-stake-liquidity.fixture";

jest.mock("axios");
const decoder = initialize();

describe("Deposit Liquidity Message", () => {
  beforeEach(() => {
    resetMockApi(mockedAxios);
  });

  it("should decode a deposit liquidity move message correctly", async () => {
    setupMockApi(mockedAxios, mockApiResponsesForDepositLiquidity);

    const decoded = await decoder.decodeCosmosTransaction(
      mockMsgDepositLiquidity
    );

    expect(decoded.messages).toHaveLength(1);
    expect(decoded.messages[0].decodedMessage).toEqual({
      action: "deposit_liquidity",
      data: {
        amountA: "999999",
        amountB: "8415380",
        denomA:
          "ibc/6490A7EAB61059BFC1CDDEB05917DD70BDF3A611654162A1A47DB930D40D8AF4",
        denomB: "uinit",
        from: "init15j9nswsatns09fnru6ww9jjljg07r87kr56mdc",
        liquidity: "8372391",
        liquidityDenom:
          "move/543b35a39cfadad3da3c23249c474455d15efd2f94f849473226dee8a3c7a9e1"
      },
      isIbc: false,
      isOp: false
    });

    expect(decoded.messages[0].balanceChanges).toEqual({
      ft: {
        init12santguultdd8k3uyvjfc36y2hg4alf0jnuyj3ejym0w3g7848ssynvde3: {
          "ibc/6490A7EAB61059BFC1CDDEB05917DD70BDF3A611654162A1A47DB930D40D8AF4":
            "1000000",
          uinit: "8415380"
        },
        init15j9nswsatns09fnru6ww9jjljg07r87kr56mdc: {
          "ibc/6490A7EAB61059BFC1CDDEB05917DD70BDF3A611654162A1A47DB930D40D8AF4":
            "-1000000",
          "move/543b35a39cfadad3da3c23249c474455d15efd2f94f849473226dee8a3c7a9e1":
            "8372391",
          uinit: "-8415380"
        }
      },
      object: {},
      vm: "move"
    });

    expect(decoded.totalBalanceChanges).toEqual({
      ft: {
        init12santguultdd8k3uyvjfc36y2hg4alf0jnuyj3ejym0w3g7848ssynvde3: {
          "ibc/6490A7EAB61059BFC1CDDEB05917DD70BDF3A611654162A1A47DB930D40D8AF4":
            "1000000",
          uinit: "8415380"
        },
        init15j9nswsatns09fnru6ww9jjljg07r87kr56mdc: {
          "ibc/6490A7EAB61059BFC1CDDEB05917DD70BDF3A611654162A1A47DB930D40D8AF4":
            "-1000000",
          "move/543b35a39cfadad3da3c23249c474455d15efd2f94f849473226dee8a3c7a9e1":
            "8372391",
          uinit: "-8415380"
        }
      },
      object: {},
      vm: "move"
    });
  });

  it("should decode a deposit stake liquidity move message correctly", async () => {
    setupMockApi(mockedAxios, mockApiResponsesForDepositStakeLiquidity);

    const decoded = await decoder.decodeCosmosTransaction(
      mockMsgDepositStakeLiquidity
    );

    expect(decoded.messages).toHaveLength(1);
    expect(decoded.messages[0].decodedMessage).toEqual({
      action: "deposit_stake_liquidity",
      data: {
        amountA: "99747",
        amountB: "841538",
        denomA:
          "ibc/6490A7EAB61059BFC1CDDEB05917DD70BDF3A611654162A1A47DB930D40D8AF4",
        denomB: "uinit",
        from: "init15j9nswsatns09fnru6ww9jjljg07r87kr56mdc",
        liquidity: "836813",
        liquidityDenom:
          "move/543b35a39cfadad3da3c23249c474455d15efd2f94f849473226dee8a3c7a9e1",
        validator: {
          description: {
            details: "",
            identity: "A2879F08F59FB0AF",
            moniker: "Orbital Command",
            security_contact: "",
            website: "https://orbitalcommand.io"
          },
          operator_address: "initvaloper1qx6ghyv83caecuxgl77lvlnha9d9y6fntryc8a"
        },
        validatorAddress: "initvaloper1qx6ghyv83caecuxgl77lvlnha9d9y6fntryc8a"
      },
      isIbc: false,
      isOp: false
    });

    expect(decoded.messages[0].balanceChanges).toEqual({
      ft: {
        init1fl48vsnmsdzcv85q5d2q4z5ajdha8yu3mdfuj4: {
          "move/543b35a39cfadad3da3c23249c474455d15efd2f94f849473226dee8a3c7a9e1":
            "837235"
        },
        init12santguultdd8k3uyvjfc36y2hg4alf0jnuyj3ejym0w3g7848ssynvde3: {
          "ibc/6490A7EAB61059BFC1CDDEB05917DD70BDF3A611654162A1A47DB930D40D8AF4":
            "100000",
          uinit: "841538"
        },
        init15j9nswsatns09fnru6ww9jjljg07r87kr56mdc: {
          "ibc/6490A7EAB61059BFC1CDDEB05917DD70BDF3A611654162A1A47DB930D40D8AF4":
            "-100000",
          "move/543b35a39cfadad3da3c23249c474455d15efd2f94f849473226dee8a3c7a9e1":
            "0",
          uinit: "-841538"
        }
      },
      object: {},
      vm: "move"
    });

    expect(decoded.totalBalanceChanges).toEqual({
      ft: {
        init1fl48vsnmsdzcv85q5d2q4z5ajdha8yu3mdfuj4: {
          "move/543b35a39cfadad3da3c23249c474455d15efd2f94f849473226dee8a3c7a9e1":
            "837235"
        },
        init12santguultdd8k3uyvjfc36y2hg4alf0jnuyj3ejym0w3g7848ssynvde3: {
          "ibc/6490A7EAB61059BFC1CDDEB05917DD70BDF3A611654162A1A47DB930D40D8AF4":
            "100000",
          uinit: "841538"
        },
        init15j9nswsatns09fnru6ww9jjljg07r87kr56mdc: {
          "ibc/6490A7EAB61059BFC1CDDEB05917DD70BDF3A611654162A1A47DB930D40D8AF4":
            "-100000",
          "move/543b35a39cfadad3da3c23249c474455d15efd2f94f849473226dee8a3c7a9e1":
            "0",
          uinit: "-841538"
        }
      },
      object: {},
      vm: "move"
    });
  });

  it("should decode a deposit stake lock liquidity move message correctly", async () => {
    setupMockApi(mockedAxios, mockApiResponsesForDepositStakeLockLiquidity);

    const decoded = await decoder.decodeCosmosTransaction(
      mockMsgDepositStakeLockLiquidity
    );

    expect(decoded.messages).toHaveLength(1);
    expect(decoded.messages[0].decodedMessage).toEqual({
      action: "deposit_stake_lock_liquidity",
      data: {
        amountA: "995524",
        amountB: "8449282",
        denomA:
          "ibc/6490A7EAB61059BFC1CDDEB05917DD70BDF3A611654162A1A47DB930D40D8AF4",
        denomB: "uinit",
        from: "init15j9nswsatns09fnru6ww9jjljg07r87kr56mdc",
        liquidity: "8391799",
        liquidityDenom:
          "move/543b35a39cfadad3da3c23249c474455d15efd2f94f849473226dee8a3c7a9e1",
        lockTime: 2592593,
        releaseTimestamp: "1755418211",
        validator: {
          description: {
            details: "",
            identity: "A2879F08F59FB0AF",
            moniker: "Orbital Command",
            security_contact: "",
            website: "https://orbitalcommand.io"
          },
          operator_address: "initvaloper1qx6ghyv83caecuxgl77lvlnha9d9y6fntryc8a"
        },
        validatorAddress: "initvaloper1qx6ghyv83caecuxgl77lvlnha9d9y6fntryc8a"
      },
      isIbc: false,
      isOp: false
    });

    expect(decoded.messages[0].balanceChanges).toEqual({
      ft: {
        init1fl48vsnmsdzcv85q5d2q4z5ajdha8yu3mdfuj4: {
          "move/543b35a39cfadad3da3c23249c474455d15efd2f94f849473226dee8a3c7a9e1":
            "8399326"
        },
        init1fzny967x2nsn4mcp6t7azlrx4mxn97zdelgzlfnw39scs6vrwhcqglyesr: {
          "move/543b35a39cfadad3da3c23249c474455d15efd2f94f849473226dee8a3c7a9e1":
            "0"
        },
        init1jv65s3grqf6v6jl3dp4t6c9t9rk99cd8ffy0za: {
          uinit: "-11"
        },
        init12santguultdd8k3uyvjfc36y2hg4alf0jnuyj3ejym0w3g7848ssynvde3: {
          "ibc/6490A7EAB61059BFC1CDDEB05917DD70BDF3A611654162A1A47DB930D40D8AF4":
            "1000000",
          uinit: "8449282"
        },
        init15j9nswsatns09fnru6ww9jjljg07r87kr56mdc: {
          "ibc/6490A7EAB61059BFC1CDDEB05917DD70BDF3A611654162A1A47DB930D40D8AF4":
            "-1000000",
          "move/543b35a39cfadad3da3c23249c474455d15efd2f94f849473226dee8a3c7a9e1":
            "0",
          uinit: "-8449271"
        }
      },
      object: {},
      vm: "move"
    });

    expect(decoded.totalBalanceChanges).toEqual({
      ft: {
        init1fl48vsnmsdzcv85q5d2q4z5ajdha8yu3mdfuj4: {
          "move/543b35a39cfadad3da3c23249c474455d15efd2f94f849473226dee8a3c7a9e1":
            "8399326"
        },
        init1fzny967x2nsn4mcp6t7azlrx4mxn97zdelgzlfnw39scs6vrwhcqglyesr: {
          "move/543b35a39cfadad3da3c23249c474455d15efd2f94f849473226dee8a3c7a9e1":
            "0"
        },
        init1jv65s3grqf6v6jl3dp4t6c9t9rk99cd8ffy0za: {
          uinit: "-11"
        },
        init12santguultdd8k3uyvjfc36y2hg4alf0jnuyj3ejym0w3g7848ssynvde3: {
          "ibc/6490A7EAB61059BFC1CDDEB05917DD70BDF3A611654162A1A47DB930D40D8AF4":
            "1000000",
          uinit: "8449282"
        },
        init15j9nswsatns09fnru6ww9jjljg07r87kr56mdc: {
          "ibc/6490A7EAB61059BFC1CDDEB05917DD70BDF3A611654162A1A47DB930D40D8AF4":
            "-1000000",
          "move/543b35a39cfadad3da3c23249c474455d15efd2f94f849473226dee8a3c7a9e1":
            "0",
          uinit: "-8449271"
        }
      },
      object: {},
      vm: "move"
    });
  });

  it("should decode a testnet deposit stake liquidity (provide_stake) message correctly", async () => {
    setupMockApi(mockedAxios, mockApiResponsesForTestnetDepositStakeLiquidity);

    const decoded = await decoder.decodeCosmosTransaction(
      mockMsgTestnetDepositStakeLiquidity
    );

    expect(decoded.messages).toHaveLength(1);
    expect(decoded.messages[0].decodedMessage).toEqual({
      action: "provide_stake_liquidity",
      data: {
        amountA: "4000000",
        amountB: "17001940",
        denomA: "uusdc",
        denomB: "uinit",
        from: "init1ld5pcuj5xzv2gghjeq0snv23r5gu6xruz3mnq4",
        liquidity: "16606146",
        liquidityDenom:
          "move/dbf06c48af3984ec6d9ae8a9aa7dbb0bb1e784aa9b8c4a5681af660cf8558d7d",
        validator: {
          description: {
            details:
              "Polkachu is the trusted staking service provider for blockchain projects. 100% refund for downtime slash. Contact us at hello@polkachu.com",
            identity: "0A6AF02D1557E5B4",
            moniker: "polkachu.com",
            security_contact: "hello@polkachu.com",
            website: ""
          },
          operator_address: "initvaloper1jt9w26mpxxjsk63mvd4m2ynj0af09cslej8vvr"
        },
        validatorAddress: "initvaloper1jt9w26mpxxjsk63mvd4m2ynj0af09cslej8vvr"
      },
      isIbc: false,
      isOp: false
    });
  });

  it("should decode a mainnet new dex_utils deposit stake liquidity (provide_stake) message correctly", async () => {
    setupMockApi(
      mockedAxios,
      mockApiResponsesForMainnetNewDexUtilsDepositStakeLiquidity
    );

    const decoded = await decoder.decodeCosmosTransaction(
      mockMsgMainnetNewDexUtilsDepositStakeLiquidity
    );

    expect(decoded.messages).toHaveLength(1);
    expect(decoded.messages[0].decodedMessage).toEqual({
      action: "provide_stake_liquidity",
      data: {
        amountA: "122380",
        amountB: "5972586",
        denomA:
          "ibc/6490A7EAB61059BFC1CDDEB05917DD70BDF3A611654162A1A47DB930D40D8AF4",
        denomB: "uinit",
        from: "init14gxuzmm7q7a00vwlsaegrwxt0q4dx7ctugfy8v",
        liquidity: "3930137",
        liquidityDenom:
          "move/543b35a39cfadad3da3c23249c474455d15efd2f94f849473226dee8a3c7a9e1",
        validator: {
          description: {
            details:
              "The go-to blockchain security firm for top teams, specializing in Cosmos, EVM, ZK, Move (Aptos and Sui). We solve your hardest security problems.",
            identity: "609C091636D1330B",
            moniker: "Zellic",
            security_contact: "security@zellic.io",
            website: "https://zellic.io/"
          },
          operator_address: "initvaloper1r20z6zmlnqrea5p9cendrgeke35nxzfueqwaz6"
        },
        validatorAddress: "initvaloper1r20z6zmlnqrea5p9cendrgeke35nxzfueqwaz6"
      },
      isIbc: false,
      isOp: false
    });
  });
});
