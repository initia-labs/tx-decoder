import converter from 'bech32-converting'

export const toBech32 = (hexAddress: string) => {
  return converter('init').toBech32(hexAddress)
}

export const toHex = (bech32Address: string) => {
  return converter('init').toHex(bech32Address)
}

export const denomToHex = (denom: string) => {
  return `0x${denom.split('/').pop()}`
}
