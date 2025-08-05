import {
  fromBech32,
  fromHex,
  toBech32 as toBech32Addr,
  toHex as toHexAddr
} from "@cosmjs/encoding";

const HEX_WALLET_ADDRESS_LENGTH = 40;
const HEX_MODULE_ADDRESS_LENGTH = 64;
const BECH32_PREFIX = "init";

const padHexAddress = (hexAddr: string, length: number): string =>
  `0x${hexAddr.slice(2).padStart(length, "0")}`;

const isHexAddress = (address: string, length: number): boolean => {
  const regex = new RegExp(`^0x[a-fA-F0-9]{1,${length}}$`);
  if (!regex.test(address)) {
    return false;
  }

  const strip = padHexAddress(address, length).slice(2);

  if (strip.trim() === "") return false;
  try {
    fromHex(strip);
  } catch {
    return false;
  }
  return true;
};

const isHexWalletAddress = (address: string) =>
  isHexAddress(address, HEX_WALLET_ADDRESS_LENGTH);

const isHexModuleAddress = (address: string) =>
  isHexAddress(address, HEX_MODULE_ADDRESS_LENGTH);

export const isAnyHexAddress = (address: string) =>
  isHexWalletAddress(address) || isHexModuleAddress(address);

const hexToBech32AddressByLength = (
  prefix: string,
  hexAddr: string,
  length: number
): string => {
  const strip = padHexAddress(hexAddr, length).slice(2);
  return toBech32Addr(prefix, fromHex(strip));
};

export const toHex = (addr: string): string =>
  "0x".concat(toHexAddr(fromBech32(addr).data));

export const toBech32 = (hexAddr: string): string => {
  if (isHexWalletAddress(hexAddr)) {
    return hexToBech32AddressByLength(
      BECH32_PREFIX,
      hexAddr,
      HEX_WALLET_ADDRESS_LENGTH
    );
  }
  if (isHexModuleAddress(hexAddr)) {
    return hexToBech32AddressByLength(
      BECH32_PREFIX,
      hexAddr,
      HEX_MODULE_ADDRESS_LENGTH
    );
  }
  throw new Error("Invalid hex address");
};
