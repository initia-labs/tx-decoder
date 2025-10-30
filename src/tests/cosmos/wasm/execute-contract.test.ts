import { initialize, mockedAxios, resetMockApi } from "@/tests/_shared/helpers";

import {
  mockExecuteContract,
  mockExecuteContractBase64
} from "./execute-contract.fixture";

jest.mock("axios");

const decoder = initialize();

describe("Execute Contract WASM", () => {
  beforeEach(() => {
    resetMockApi(mockedAxios);
  });

  it("should decode execute contract transaction with JSON msg on WASM VM", async () => {
    const decoded =
      await decoder.decodeCosmosWasmTransaction(mockExecuteContract);

    expect(decoded.messages).toHaveLength(1);
    expect(decoded.messages[0].decodedMessage).toMatchObject({
      action: "execute_contract",
      data: {
        contract: "init1contractaddress",
        function: "increase_allowance",
        funds: [
          {
            amount: "1000",
            denom: "uinit"
          }
        ],
        msg: {
          increase_allowance: {
            amount: "1000000",
            spender: "init1spender"
          }
        },
        sender: "init1abc123"
      },
      isIbc: false,
      isOp: false
    });

    expect(decoded.metadata).toEqual({ data: {}, type: "wasm" });
  });

  it("should decode execute contract with base64 encoded msg", async () => {
    const decoded = await decoder.decodeCosmosWasmTransaction(
      mockExecuteContractBase64
    );

    expect(decoded.messages).toHaveLength(1);
    expect(decoded.messages[0].decodedMessage).toMatchObject({
      action: "execute_contract",
      data: {
        contract: "init1anothercontract",
        function: "mint",
        funds: [],
        msg: {
          mint: {
            amount: "5000000",
            recipient: "init1receiver"
          }
        },
        sender: "init1xyz789"
      },
      isIbc: false,
      isOp: false
    });

    expect(decoded.metadata).toEqual({ data: {}, type: "wasm" });
  });
});
