import { toHex } from "@cosmjs/encoding";
import { sha256 } from "@noble/hashes/sha2";
import { sha3_256 } from "@noble/hashes/sha3";
import { toBytes } from "@noble/hashes/utils";

export const denomToHex = (denom: string) => {
  return `0x${denom.split("/").pop()}`;
};

export function getIbcDenom(channelId: string, denom: string) {
  const path = `transfer/${channelId}/${denom}`;
  return `ibc/${toHex(sha256(path)).toUpperCase()}`;
}

function u64BE(num: bigint): Uint8Array {
  // Ensure the number fits in 8 bytes
  if (num < 0n || num > 0xffffffffffffffffn) {
    throw new RangeError("u64BE: number out of range for 8 bytes");
  }
  const arr = new Uint8Array(8);
  for (let i = 7; i >= 0; i--) {
    arr[i] = Number(num & 0xffn);
    num >>= 8n;
  }
  return arr;
}

export function getOpDenom(id: bigint, l1Denom: string): string {
  // Concatenate the 8-byte big-endian id with the UTF-8 bytes of l1Denom
  const idBytes = u64BE(id);
  const denomBytes = toBytes(l1Denom);
  const input = new Uint8Array(idBytes.length + denomBytes.length);
  input.set(idBytes, 0);
  input.set(denomBytes, idBytes.length);

  // Hash using sha3_256 and convert to hex
  const hash = sha3_256(input);
  return `l2/${toHex(hash)}`;
}
