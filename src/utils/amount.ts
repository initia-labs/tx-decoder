import big, { Big } from "big.js";

const MAX_UINT256 = big(2).pow(256).minus(1);
// uint256 max has 78 digits.
const MIN_EXPONENT = -77;

// big.js accepts unbounded exponents such as "1e999999999" or "1e-999999999".
// toFixed(0) and plus() then allocate one element per digit of the exponent gap.
// No token amount comes close to these bounds, so such values are skipped before
// any arithmetic.
export const isAmountOutOfRange = (value: Big): boolean =>
  value.abs().gt(MAX_UINT256) || value.e < MIN_EXPONENT;
