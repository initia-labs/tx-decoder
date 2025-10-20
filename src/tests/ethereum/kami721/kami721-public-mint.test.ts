import {
  initialize,
  mockedAxios,
  resetMockApi,
  setupMockApi
} from "@/tests/_shared/helpers";

import { mockKami721PublicMintPayload } from "./kami721-public-mint.fixture";

jest.mock("axios");
const decoder = initialize();

describe("Kami721 - Public Mint", () => {
  beforeEach(() => {
    resetMockApi(mockedAxios);
  });

  it("should decode a Kami721 public mint transaction correctly", async () => {
    setupMockApi(mockedAxios, {});

    const decoded = await decoder.decodeEthereumTransaction(
      mockKami721PublicMintPayload
    );

    expect(decoded.decodedTransaction).toEqual({
      action: "kami721_public_mint",
      data: {
        contract: "0x014C4861F5f19b4c86f26657Dd40c1a18539D11A",
        minter: "0x563466Dec7F74Bcbe97cD3BED1CbAd3336c989ee",
        paymentAmount: "100000000000000000",
        paymentToken: "0xE1Ff7038eAAAF027031688E1535a055B2Bac2546",
        tokenId: "100"
      }
    });

    expect(decoded.totalBalanceChanges).toEqual({
      ft: {
        "0x014C4861F5f19b4c86f26657Dd40c1a18539D11A": {
          "evm/E1Ff7038eAAAF027031688E1535a055B2Bac2546": "100000000000000000"
        },
        "0x563466Dec7F74Bcbe97cD3BED1CbAd3336c989ee": {
          "evm/E1Ff7038eAAAF027031688E1535a055B2Bac2546": "-100000000000000000"
        }
      },
      nft: {
        "0x0000000000000000000000000000000000000000": {
          "0x014c4861f5f19b4c86f26657dd40c1a18539d11a": {
            "100": "-1"
          }
        },
        "0x563466Dec7F74Bcbe97cD3BED1CbAd3336c989ee": {
          "0x014c4861f5f19b4c86f26657dd40c1a18539d11a": {
            "100": "1"
          }
        }
      },
      vm: "evm"
    });

    expect(decoded.metadata).toEqual({ data: {}, type: "evm" });
  });
});
