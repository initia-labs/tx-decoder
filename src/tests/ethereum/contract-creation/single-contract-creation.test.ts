import axios from "axios";

import { initialize, setupMockApi } from "@/tests/_shared/helpers";

import {
  contractDeploymentPayload,
  immutableContractDeploymentPayload,
  mockApiResponseForSingleContractCreation
} from "./single-contract-creation.fixture";

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

const decoder = initialize();

describe("Contract Creation Decoder", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should decode contract creation transaction correctly", async () => {
    setupMockApi(mockedAxios, mockApiResponseForSingleContractCreation);

    const decoded = await decoder.decodeEthereumTransaction(
      contractDeploymentPayload
    );

    expect(decoded.decodedTransaction.action).toBe("contract_creation");
    expect(decoded.decodedTransaction.data).toMatchObject({
      contractAddresses: ["0x014C4861F5f19b4c86f26657Dd40c1a18539D11A"],
      from: "0x6880dEbDc229E24c830476Ba835bD349530f98bC"
    });
  });

  it("should decode immutable contract deployment correctly", async () => {
    setupMockApi(mockedAxios, mockApiResponseForSingleContractCreation);

    const decoded = await decoder.decodeEthereumTransaction(
      immutableContractDeploymentPayload
    );

    expect(decoded.decodedTransaction.action).toBe("contract_creation");
    expect(decoded.decodedTransaction.data).toMatchObject({
      contractAddresses: ["0x5d4376b62fa8AC16dFabe6a9861E11c33A48C677"],
      from: "0x8C1a8745E9847027442f8B9C9070Ea6d6d7636A6"
    });
  });
});
