import {
  initialize,
  mockedAxios,
  resetMockApi,
  setupMockApi
} from "@/tests/_shared/helpers";

import { mock as mockExtendExpiration } from "./extend-expiration.fixture";
import { mock as mockSetName } from "./set-name.fixture";
import { mock as mockUnsetName } from "./unset-name.fixture";

jest.mock("axios");
const decoder = initialize();

describe("Username Messages", () => {
  beforeEach(() => {
    resetMockApi(mockedAxios);
    setupMockApi(mockedAxios, { GET: {} });
  });

  it("should decode set_name", async () => {
    const decoded = await decoder.decodeCosmosTransaction(mockSetName);

    expect(decoded.messages).toHaveLength(1);
    expect(decoded.messages[0].decodedMessage).toMatchObject({
      action: "username_set_name",
      isIbc: false,
      isOp: false
    });
  });

  it("should decode unset_name", async () => {
    const decoded = await decoder.decodeCosmosTransaction(mockUnsetName);

    expect(decoded.messages).toHaveLength(1);
    expect(decoded.messages[0].decodedMessage).toMatchObject({
      action: "username_unset_name",
      isIbc: false,
      isOp: false
    });
  });

  it("should decode extend_expiration", async () => {
    const decoded = await decoder.decodeCosmosTransaction(mockExtendExpiration);

    expect(decoded.messages).toHaveLength(1);
    expect(decoded.messages[0].decodedMessage).toMatchObject({
      action: "username_extend_expiration",
      isIbc: false,
      isOp: false
    });
  });
});
