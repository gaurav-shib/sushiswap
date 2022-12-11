'use client'

import { GlobalNav, NavLink } from '@sushiswap/ui13/components/GlobalNav'
import { APP_TYPE_LINKS } from '@sushiswap/ui13/constants'
import { AppType } from '@sushiswap/ui13/types'
import React, { FC } from 'react'

export const Header: FC = () => {
  return (
    <GlobalNav
      appType={AppType.Earn}
      rightElement={
        <>
          {/*Wallet profile here*/}
          0x....167a
        </>
      }
    >
      <NavLink title="Swap" href={APP_TYPE_LINKS[AppType.Swap]} />
      <NavLink title="xSwap" href={APP_TYPE_LINKS[AppType.xSwap]} />
    </GlobalNav>
  )
}
