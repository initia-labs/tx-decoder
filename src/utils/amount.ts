import { Big } from "big.js";

// big.js accepts unbounded exponents such as "1e999999999" or "1e-999999999".
// toFixed(0) and plus() then allocate one element per digit of the exponent gap.
// This bounds that allocation; it is not a uint256 check. The limit sits far
// above any token amount or merged subtotal (uint256 has 78 digits), so real
// balances are never skipped.
const MAX_EXPONENT = 1000;

export const hasExtremeExponent = (value: Big): boolean =>
  Math.abs(value.e) > MAX_EXPONENT;
