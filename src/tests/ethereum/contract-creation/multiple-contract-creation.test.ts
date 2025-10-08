import {
  initialize,
  mockedAxios,
  resetMockApi,
  setupMockApi
} from "@/tests/_shared/helpers";

import {
  mockApiResponseForMultipleContractCreation,
  multipleContractCreationPayload
} from "./multiple-contract-creation.fixture";

jest.mock("axios");

const decoder = initialize();

describe("Multiple Contract Creation Decoder", () => {
  beforeEach(() => {
    resetMockApi(mockedAxios);
  });

  it("should decode multiple contract creation transaction correctly", async () => {
    setupMockApi(mockedAxios, mockApiResponseForMultipleContractCreation);

    const decoded = await decoder.decodeEthereumTransaction(
      multipleContractCreationPayload
    );

    expect(decoded.decodedTransaction.action).toBe("contract_creation");
    expect(decoded.decodedTransaction.data).toMatchObject({
      contractAddresses: [
        "0x4A8B41aC258aE5AAe054C10C8b475eB0Ce2465Ec",
        "0x4BaDFb501Ab304fF11217C44702bb9E9732E7CF4",
        "0x64B79841F0e59F17c1df269F84a51772d120724d"
      ],
      from: "0xc4e20271c77C193919011ac35c883E3cD0674D7c"
    });

    expect(decoded.totalBalanceChanges).toEqual({
      ft: {
        "0x0000000000000000000000000000000000000000": {
          "evm/4BaDFb501Ab304fF11217C44702bb9E9732E7CF4":
            "-1000000000000000000000000"
        },
        "0x4A8B41aC258aE5AAe054C10C8b475eB0Ce2465Ec": {
          "evm/4BaDFb501Ab304fF11217C44702bb9E9732E7CF4":
            "1000000000000000000000000"
        }
      },
      nft: {},
      vm: "evm"
    });
  });
});
