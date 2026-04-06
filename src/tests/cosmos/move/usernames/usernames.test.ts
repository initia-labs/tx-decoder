import { initialize, mockedAxios, resetMockApi } from "@/tests/_shared/helpers";

import { mock as mockExtendExpiration } from "./extend-expiration.fixture";
import { mock as mockSetName } from "./set-name.fixture";
import { mock as mockUnsetName } from "./unset-name.fixture";

jest.mock("axios");
const decoder = initialize();

describe("Username Messages", () => {
  beforeEach(() => {
    resetMockApi(mockedAxios);
  });

  it("should decode set_name with name from event", async () => {
    const decoded = await decoder.decodeCosmosTransaction(mockSetName);

    expect(decoded.messages).toHaveLength(1);
    expect(decoded.messages[0].decodedMessage.action).toBe("username_set_name");
    expect(decoded.messages[0].decodedMessage.data).toMatchObject({
      name: expect.any(String)
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
    expect(decoded.messages[0].decodedMessage.action).toBe(
      "username_unset_name"
    );
    expect(decoded.messages[0].decodedMessage.data).toMatchObject({
      name: expect.any(String)
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
    expect(decoded.messages[0].decodedMessage.action).toBe(
      "username_extend_expiration"
    );
    expect(decoded.messages[0].decodedMessage.data).toMatchObject({
      domainName: expect.any(String),
      expirationDate: expect.any(String)
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
});
