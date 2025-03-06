import { get } from '@vercel/edge-config'

interface CrossChainSwapEdgeConfig {
  maintenance: boolean
}

const getCrossChainSwapEdgeConfig = async () => {
  // Return default config without using Vercel Edge Config
  return { maintenance: false } as CrossChainSwapEdgeConfig
}

export { type CrossChainSwapEdgeConfig, getCrossChainSwapEdgeConfig }
