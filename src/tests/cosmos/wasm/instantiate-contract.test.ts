import { initialize, mockedAxios, resetMockApi } from "@/tests/_shared/helpers";

import {
  mockInstantiateContract,
  mockInstantiateContractFailed
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
        admin: "init1r2cwhxsspwa48aujwfvgy6lvg9ylc948t3874v",
        codeId: "2",
        contractAddress:
          "init1wug8sewp6cedgkmrmvhl3lf3tulagm9hnvy8p0rppz9yjw0g4wtq7947m6",
        funds: [],
        initMsg: {
          cw721_base_code_id: 1
        },
        label: "ics721",
        sender: "init1r2cwhxsspwa48aujwfvgy6lvg9ylc948t3874v"
      },
      isIbc: false,
      isOp: false
    });

    expect(decoded.metadata).toEqual({ data: {}, type: "wasm" });
  });

  it("should decode failed contract instantiation transaction with error details", async () => {
    const decoded = await decoder.decodeCosmosWasmTransaction(
      mockInstantiateContractFailed
    );

    expect(decoded.messages).toHaveLength(1);
    expect(decoded.messages[0].decodedMessage).toMatchObject({
      action: "instantiate_contract",
      data: {
        admin: "init1xyz123abc456def789ghi012jkl345mno678pqr",
        codeId: "5",
        error: {
          code: 5,
          codespace: "wasm",
          message:
            "failed to execute message; message index: 0: Error instantiating contract: Insufficient funds: required 1000000uinit, available 0uinit: instantiate wasm contract failed"
        },
        funds: [
          {
            amount: "1000000",
            denom: "uinit"
          }
        ],
        initMsg: {
          decimals: 6,
          initial_balances: [
            {
              address: "init1xyz123abc456def789ghi012jkl345mno678pqr",
              amount: "1000000000"
            }
          ],
          name: "My Token",
          symbol: "MTK"
        },
        label: "my-token-contract",
        sender: "init1xyz123abc456def789ghi012jkl345mno678pqr"
      },
      isIbc: false,
      isOp: false
    });

    expect(decoded.metadata).toEqual({ data: {}, type: "wasm" });
  });
});
