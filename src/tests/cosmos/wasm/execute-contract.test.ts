import { initialize, mockedAxios, resetMockApi } from "@/tests/_shared/helpers";

import { mockExecuteContract } from "./execute-contract.fixture";

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
        contract:
          "init1fuyxwxlsgjkfjmxfthq8427dm2am3ya3cwcdr8gls29l7jadtazswg0k5g",
        function: "mint",
        funds: [],
        msg: {
          mint: {
            amount: "5000000",
            recipient: "init1dw49mn7s2r5mskjdmus5hth80zz8wwaywycq06"
          }
        },
        sender: "init1dw49mn7s2r5mskjdmus5hth80zz8wwaywycq06"
      },
      isIbc: false,
      isOp: false
    });

    expect(decoded.metadata).toEqual({ data: {}, type: "wasm" });
  });
});
