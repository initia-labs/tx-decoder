import { initialize, mockedAxios, resetMockApi } from "@/tests/_shared/helpers";

import { mockInstantiateContract } from "./instantiate-contract.fixture";

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
});
