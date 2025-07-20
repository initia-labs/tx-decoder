import { sha256 } from "@noble/hashes/sha2";
import crypto from "crypto";

export const denomToHex = (denom: string) => {
  return `0x${denom.split("/").pop()}`;
};

export function getIbcDenom(channelId: string, denom: string) {
  const fullTrace = `transfer/${channelId}/${denom}`;
  const shaSum = sha256(Buffer.from(fullTrace));
  const hash = Buffer.from(shaSum).toString("hex").toUpperCase();
  return `ibc/${hash}`;
}

function u64BE(num: bigint): Buffer {
  const b = be(num);
  return Buffer.from(
    Array(8 - b.length)
      .fill(0)
      .concat(b)
  );
}

function be(num: bigint): number[] {
  return num ? be(num >> 8n).concat([Number(num % 256n)]) : [];
}

export function getOpDenom(id: bigint, l1Denom: string) {
  const hash = crypto.createHash("SHA3-256");

  const sum = hash
    .update(Buffer.from([...u64BE(id), ...Buffer.from(l1Denom)]))
    .digest("hex");
  return `l2/${sum}`;
}
