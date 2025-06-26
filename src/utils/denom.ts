export const denomToHex = (denom: string) => {
  return `0x${denom.split("/").pop()}`;
};
