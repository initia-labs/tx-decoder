import { getIbcDenom, getOpDenom } from "@/utils/denom";

describe("getIbcDenom", () => {
  it("should return correct ibc denom for channel-27 and l2/2b2d36f666e98b9eecf70d6ec24b882b79f2c8e2af73f54f97b8b670dbb87605", () => {
    const channelId = "channel-27";
    const denom =
      "l2/2b2d36f666e98b9eecf70d6ec24b882b79f2c8e2af73f54f97b8b670dbb87605";
    const expected =
      "ibc/9055D784E46926951D1FF95AA41245B291FA9AAFFAE5C9D0D515877F647D5226";
    const result = getIbcDenom(channelId, denom);
    expect(result).toBe(expected);
  });
});

describe("getOpDenom", () => {
  it("should return correct op denom for id 12 and uinit", () => {
    const id = 12n;
    const l1Denom = "uinit";
    const expected =
      "l2/2b2d36f666e98b9eecf70d6ec24b882b79f2c8e2af73f54f97b8b670dbb87605";
    const result = getOpDenom(id, l1Denom);
    expect(result).toBe(expected);
  });
});
