import { getEvmDenom, getOpDenom } from "@/utils/denom";

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

describe("getEvmDenom", () => {
  it("normalizes the address and prefixes with evm/", () => {
    const address = "0xe1ff7038eaaaf027031688e1535a055b2bac2546";

    expect(getEvmDenom(address)).toBe(
      "evm/E1Ff7038eAAAF027031688E1535a055B2Bac2546"
    );
  });

  it("throws on invalid address input", () => {
    expect(() => getEvmDenom("not-an-address")).toThrow();
  });
});
