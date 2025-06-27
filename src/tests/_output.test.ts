import { mockMsgUndelegateLocked } from "./fixtures/undelegate.fixture";
import { initialize } from "./helpers";

const decoder = initialize("https://rest.initia.xyz");

describe("Call actual api endpoint", () => {
  it("Call endpoint", async () => {
    await decoder.decodeTransaction(mockMsgUndelegateLocked);
  });
});
