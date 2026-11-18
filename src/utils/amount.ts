import big, { Big } from "big.js";

const MAX_UINT256 = big(2).pow(256).minus(1);

// big.js accepts unbounded exponents such as "1e999999999", and toFixed(0) then
// allocates every digit. No token amount exceeds uint256, so such values are
// skipped before they are expanded.
export const exceedsUint256 = (value: Big): boolean =>
  value.abs().gt(MAX_UINT256);
