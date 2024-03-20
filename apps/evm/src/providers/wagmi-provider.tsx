import {
  WagmiProvider,
  createProductionConfig,
  createTestConfig,
} from '@sushiswap/wagmi'
import { type FC, type ReactNode, useMemo } from 'react'

const isTest = process.env.NEXT_PUBLIC_APP_ENV === 'test'

// const config = !isTest ? createProductionConfig() : createTestConfig()

export const WagmiConfig: FC<{ children: ReactNode }> = ({ children }) => {
  const config = useMemo(
    () => (!isTest ? createProductionConfig() : createTestConfig()),
    [],
  )
  return <WagmiProvider config={config}>{children}</WagmiProvider>
}
