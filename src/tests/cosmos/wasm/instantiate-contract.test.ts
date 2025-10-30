import { initialize, mockedAxios, resetMockApi } from "@/tests/_shared/helpers";

import {
  mockInstantiateContract,
  mockInstantiateContractBase64
} from "./instantiate-contract.fixture";

jest.mock("axios");

const decoder = initialize();

describe("Instantiate Contract WASM", () => {
  beforeEach(() => {
    resetMockApi(mockedAxios);
  });

  it("should decode contract instantiation transaction on WASM VM", async () => {
    const decoded = await decoder.decodeCosmosWasmTransaction(
      mockInstantiateContract
    );

    expect(decoded.messages).toHaveLength(1);
    expect(decoded.messages[0].decodedMessage).toMatchObject({
      action: "instantiate_contract",
      data: {
        admin: "init1admin123456789abcdefghijklmnopqrs",
        codeId: "42",
        contractAddress: "init1newcontractaddress1234567890abcd",
        funds: [
          {
            amount: "1000",
            denom: "uinit"
          }
        ],
        initMsg: {
          decimals: 6,
          initial_balances: [
            {
              address: "init1sender123456789abcdefghijklmnopqr",
              amount: "1000000000"
            }
          ],
          name: "Test Token",
          symbol: "TEST"
        },
        label: "My CW20 Token",
        sender: "init1sender123456789abcdefghijklmnopqr"
      },
      isIbc: false,
      isOp: false
    });

    expect(decoded.metadata).toEqual({ data: {}, type: "wasm" });
  });

  it("should decode contract instantiation with base64 encoded message", async () => {
    const decoded = await decoder.decodeCosmosWasmTransaction(
      mockInstantiateContractBase64
    );

    expect(decoded.messages).toHaveLength(1);
    expect(decoded.messages[0].decodedMessage).toMatchObject({
      action: "instantiate_contract",
      data: {
        codeId: "99",
        contractAddress: "init1anothercontractaddr1234567890abc",
        funds: [],
        initMsg: {
          count: 0
        },
        label: "Simple Contract",
        sender: "init1sender123456789abcdefghijklmnopqr"
      },
      isIbc: false,
      isOp: false
    });

    // Admin is optional
    expect(decoded.messages[0].decodedMessage.data).not.toHaveProperty("admin");

    expect(decoded.metadata).toEqual({ data: {}, type: "wasm" });
  });
});
