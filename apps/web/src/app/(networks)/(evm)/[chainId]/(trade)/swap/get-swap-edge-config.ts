import { get } from '@vercel/edge-config'

interface SwapEdgeConfig {
  maintenance: boolean
}

const getSwapEdgeConfig = async () => {
  // Return default config without using Vercel Edge Config
  return { maintenance: false } as SwapEdgeConfig
}

export { type SwapEdgeConfig, getSwapEdgeConfig }
