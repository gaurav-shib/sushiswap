import { ChainId } from '@sushiswap/chain'

export const DEFAULT_CHAIN_ID = ChainId.ETHEREUM

export const TRIDENT_ENABLED_NETWORKS = [
  ChainId.OPTIMISM,
  ChainId.POLYGON,
  ChainId.METIS,
  ChainId.KAVA,
  ChainId.BTTC,
  ChainId.ARBITRUM,
  ChainId.AVALANCHE,
  ChainId.BSC,
]

export const AMM_ENABLED_NETWORKS = [
  ChainId.ETHEREUM,
  ChainId.ARBITRUM,
  ChainId.AVALANCHE,
  ChainId.POLYGON,
  ChainId.FANTOM,
  ChainId.BSC,
  ChainId.GNOSIS,
  ChainId.MOONRIVER,
  ChainId.ARBITRUM_NOVA,
  ChainId.FUSE,
  ChainId.CELO,
  ChainId.MOONBEAM,
  ChainId.HECO,
  ChainId.PALM,
  ChainId.OKEX,
  ChainId.BOBA,
  ChainId.BOBA_AVAX,
  ChainId.HARMONY,
]

export const SUPPORTED_CHAIN_IDS = Array.from(new Set([...AMM_ENABLED_NETWORKS, ...TRIDENT_ENABLED_NETWORKS]))

export const STABLE_POOL_FACTORY_ADDRESS: Record<number, string> = {
  [ChainId.METIS]: '0x2f686751b19a9d91cc3d57d90150Bc767f050066',
  [ChainId.KAVA]: '0x9B3fF703FA9C8B467F5886d7b61E61ba07a9b51c',
  [ChainId.POLYGON]: '0x2A0Caa28331bC6a18FF195f06694f90671dE70f2',
  [ChainId.OPTIMISM]: '0x827179dD56d07A7eeA32e3873493835da2866976',
  [ChainId.BTTC]: '0x120140d0c1EBC938befc84840575EcDc5fE55aFe',
  [ChainId.ARBITRUM]: '0xc2fB256ABa36852DCcEA92181eC6b355f09A0288',
  [ChainId.AVALANCHE]: '0x7770978eED668a3ba661d51a773d3a992Fc9DDCB',
  [ChainId.BSC]: '0xA4C0363edD74F55AC8f316a3Bf447F8aa09607D3',
}

export const CONSTANT_PRODUCT_POOL_FACTORY_ADDRESS: Record<number, string> = {
  [ChainId.OPTIMISM]: '0x93395129bd3fcf49d95730D3C2737c17990fF328',
  [ChainId.POLYGON]: '0x28890e3C0aA9B4b48b1a716f46C9abc9B12abfab',
  [ChainId.METIS]: '0x0769fd68dFb93167989C6f7254cd0D766Fb2841F',
  [ChainId.KAVA]: '0x0769fd68dFb93167989C6f7254cd0D766Fb2841F',
  [ChainId.BTTC]: '0x752Dc00ABa9c930c84aC81D288dB5E2a02Afe633',
  [ChainId.ARBITRUM]: '0xc79Ae87E9f55761c08e346B98dDdf070C9872787',
  [ChainId.AVALANCHE]: '0xb84a043bc4fCA97B7a74eD7dAaB1Bf12A8DF929F',
  [ChainId.BSC]: '0x3D2f8ae0344d38525d2AE96Ab750B83480c0844F',
}
