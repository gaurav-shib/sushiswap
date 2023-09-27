import { ChainId } from '@sushiswap/chain'
import { Token } from '@sushiswap/currency'
import { CL_MAX_TICK, CL_MIN_TICK, CLTick, RToken, UniV3Pool } from '@sushiswap/tines'
import { expect } from 'chai'
import seedrandom from 'seedrandom'
import { Address, createPublicClient, custom, PublicClient, walletActions, WalletClient } from 'viem'
import { hardhat } from 'viem/chains'

import {
  AlgebraIntegralPeriphery,
  approveTestTokensToPerifery,
  balanceOf,
  createAlgebraIntegralPeriphery,
  createHardhatProviderEmptyBlockchain,
  createTestTokens,
  deployPoolAndMint,
  expectCloseValues,
  getRandomVariant,
  getRndLin,
  getRndLinInt,
  mint,
  Range,
  swap,
  TestTokens,
  tickLiquidityPrice,
  tryCallAsync,
  updateTinesPool,
} from '../src'

interface TestContext {
  chainId: ChainId
  client: PublicClient & WalletClient
  env: AlgebraIntegralPeriphery
  testTokens: TestTokens
  user: Address
}

interface PoolInfo {
  poolAddress: Address
  pool: UniV3Pool
  token0: Token
  token1: Token
}

let token0Index = 0,
  token1Index = 1 // each new pool needs a new pair of tokens
async function createPool(cntx: TestContext, fee: number, price: number, positions: Range[]): Promise<PoolInfo> {
  if (token1Index >= cntx.testTokens.tokens.length) throw new Error('Unsufficient tokens number')
  const t0 = cntx.testTokens.tokens[token0Index]
  const t1 = cntx.testTokens.tokens[token1Index]
  if (++token1Index >= cntx.testTokens.tokens.length) token1Index = ++token0Index + 1

  const [token0, token1] = t0.sortsBefore(t1) ? [t0, t1] : [t1, t0]
  const poolAddress = await deployPoolAndMint(cntx.client, cntx.env, token0, token1, fee, price)
  expect(poolAddress).not.equal('0x0000000000000000000000000000000000000000')

  const tickMap = new Map<number, bigint>()
  for (let i = 0; i < positions.length; ++i) {
    const position = positions[i]
    const liquidity = await mint(cntx.client, cntx.env, token0, token1, cntx.user, position)

    let tickLiquidity = tickMap.get(position.from) ?? 0n
    tickLiquidity = tickLiquidity === undefined ? liquidity : tickLiquidity + liquidity
    tickMap.set(position.from, tickLiquidity)

    tickLiquidity = tickMap.get(position.to) ?? 0n
    tickLiquidity = tickLiquidity - liquidity
    tickMap.set(position.to, tickLiquidity)
  }

  const ticks: CLTick[] = Array.from(tickMap.entries())
    .sort((a, b) => a[0] - b[0])
    .map(([index, DLiquidity]) => ({ index, DLiquidity }))

  const pool = new UniV3Pool(poolAddress, token0 as RToken, token1 as RToken, fee / 1e6, 0n, 0n, 0, 0n, 1n, ticks)
  await updateTinesPool(cntx.client, pool)

  return { poolAddress, pool, token0, token1 }
}

async function checkSwap(
  cntx: TestContext,
  pool: PoolInfo,
  amountIn: number | bigint,
  direction: boolean,
  printTick = false
) {
  const { tick } = await updateTinesPool(cntx.client, pool.pool)
  const expectedAmountOut = pool.pool.calcOutByIn(Number(amountIn), direction, false).out
  if (printTick) console.log('Tick:', tick)

  const [t0, t1] = direction ? [pool.token0, pool.token1] : [pool.token1, pool.token0]
  const actialAmountOut = await tryCallAsync(() => swap(cntx.client, cntx.env, t0, t1, cntx.user, BigInt(amountIn)))

  if (actialAmountOut === undefined) expect(expectedAmountOut).equal(0)
  else expectCloseValues(actialAmountOut, expectedAmountOut, 1e-10)
  // console.log(
  //   actialAmountOut,
  //   expectedAmountOut,
  //   expectedAmountOut !== 0 ? Math.abs(expectedAmountOut - Number(actialAmountOut)) / expectedAmountOut : ''
  // )
}

const E18 = 10n ** 18n

const minPrice = 1.0001 ** CL_MIN_TICK
const maxPrice = 1.0001 ** CL_MAX_TICK
async function getRandomSwapParams(
  rnd: () => number,
  client: PublicClient,
  pool: PoolInfo
): Promise<[number, boolean]> {
  const { price: sqrtPriceX96 } = await tickLiquidityPrice(client, pool.poolAddress)
  const sqrtPrice = Number(sqrtPriceX96) / 2 ** 96
  const price = sqrtPrice * sqrtPrice // res1/res0

  let direction = true
  if (price < minPrice * 10) direction = false
  else if (price > maxPrice / 10) direction = true
  else direction = rnd() > 0.5

  const res0 = Number(await balanceOf(client, pool.token0, pool.poolAddress))
  const res1 = Number(await balanceOf(client, pool.token1, pool.poolAddress))

  const maxRes = direction ? res1 / price : res0 * price
  const amount = Math.round(rnd() * maxRes) + 1000

  //console.log('current price:', price, 'amount:', amount, 'direction:', direction)

  return [amount, direction]
}

export async function createRandomPool(
  cntx: TestContext,
  seed: string,
  positionNumber: number,
  fee?: number,
  price?: number,
  minTick = CL_MIN_TICK,
  maxTick = CL_MAX_TICK
): Promise<PoolInfo> {
  const rnd: () => number = seedrandom(seed) // random [0, 1)

  const tickSpacing = 120
  const RANGE = Math.floor((maxTick - minTick) / tickSpacing)
  const SHIFT = -Math.floor(-minTick / tickSpacing) * tickSpacing

  const positions: Range[] = []
  for (let i = 0; i < positionNumber; ++i) {
    const pos1 = getRndLinInt(rnd, 0, RANGE)
    const pos2 = (pos1 + getRndLinInt(rnd, 1, RANGE - 1)) % RANGE
    const from = Math.min(pos1, pos2) * tickSpacing + SHIFT
    const to = Math.max(pos1, pos2) * tickSpacing + SHIFT
    console.assert(minTick <= from && from < to && to <= maxTick, `Wrong from-to range ${from} - ${to}`)
    positions.push({ from, to, val: BigInt(getRndLin(rnd, 0.01, 30) * 1e18) })
  }
  price = price ?? getRndLin(rnd, 0.01, 100)
  fee = fee ?? getRandomVariant(rnd, [500, 1000, 3000, 10000])
  //console.log(positions, price, fee)
  return await createPool(cntx, fee, price, positions)
}

async function monkeyTest(cntx: TestContext, pool: PoolInfo, seed: string, iterations: number, printTick = false) {
  const rnd: () => number = seedrandom(seed) // random [0, 1)
  for (let i = 0; i < iterations; ++i) {
    const [amount, direction] = await getRandomSwapParams(rnd, cntx.client, pool)
    await checkSwap(cntx, pool, amount, direction, printTick)
  }
}

describe('AlgebraIntegral test', () => {
  let cntx: TestContext

  before(async () => {
    const { provider, chainId } = await createHardhatProviderEmptyBlockchain()
    const client = createPublicClient({
      chain: {
        ...hardhat,
        contracts: {
          multicall3: {
            address: '0xca11bde05977b3631167028862be2a173976ca11',
            blockCreated: 25770160,
          },
        },
        id: chainId,
      },
      transport: custom(provider),
    }).extend(walletActions)
    const env = await createAlgebraIntegralPeriphery(client)
    const testTokens = await createTestTokens(client, 10)
    await approveTestTokensToPerifery(client, env, testTokens)
    cntx = {
      chainId,
      client,
      env,
      testTokens,
      user: testTokens.owner,
    }
  })

  it('Empty pool', async () => {
    const pool = await createPool(cntx, 3000, 1, [])
    await checkSwap(cntx, pool, E18, true)
    await checkSwap(cntx, pool, E18, false)
  })

  describe('One position', () => {
    it('No tick crossing', async () => {
      const pool = await createPool(cntx, 3000, 5, [{ from: -1200, to: 18000, val: E18 }])
      await checkSwap(cntx, pool, 1e16, true)
      await checkSwap(cntx, pool, 1e16, false)
    })

    it('Tick crossing', async () => {
      const pool = await createPool(cntx, 3000, 5, [{ from: -1200, to: 18000, val: E18 }])
      await checkSwap(cntx, pool, 1e18, true)
      const pool2 = await createPool(cntx, 3000, 4, [{ from: -1200, to: 18000, val: E18 }])
      await checkSwap(cntx, pool2, 1e20, false)
    })

    it('Swap exact to tick', async () => {
      const pool = await createPool(cntx, 3000, 5, [{ from: -1200, to: 18000, val: E18 }])
      await checkSwap(cntx, pool, 616469173272709204n, true) // before tick
      const pool2 = await createPool(cntx, 3000, 5, [{ from: -1200, to: 18000, val: E18 }])
      await checkSwap(cntx, pool2, 616469173272709205n, true) // after tick
      const pool3 = await createPool(cntx, 3000, 4, [{ from: -1200, to: 18000, val: E18 }])
      await checkSwap(cntx, pool3, 460875064077414607n, false) // before tick
      const pool4 = await createPool(cntx, 3000, 4, [{ from: -1200, to: 18000, val: E18 }])
      await checkSwap(cntx, pool4, 460875064077414607n, false) // after tick
    })

    it('From 0 zone to not 0 zone', async () => {
      const pool = await createPool(cntx, 3000, 50, [{ from: -1200, to: 18000, val: E18 }])
      await checkSwap(cntx, pool, 1e17, true)
    })

    it('From 0 zone through ticks to 0 zone', async () => {
      const pool = await createPool(cntx, 3000, 50, [{ from: -1200, to: 18000, val: E18 }])
      await checkSwap(cntx, pool, 1e18, true)
      const pool2 = await createPool(cntx, 3000, 0.1, [{ from: -1200, to: 18000, val: E18 }])
      await checkSwap(cntx, pool2, 1e19, false)
    })

    it.skip('Monkey test', async () => {
      const pool = await createPool(cntx, 3000, 5, [{ from: -1200, to: 18000, val: E18 }])
      await monkeyTest(cntx, pool, 'test1', 1000, true)
    })
  })

  describe('Two positions', () => {
    it('Special 1', async () => {
      const pool = await createPool(cntx, 3000, 12.310868067131443, [
        { from: -1200, to: 18000, val: E18 },
        { from: 24000, to: 48000, val: 5n * E18 },
      ])
      await checkSwap(cntx, pool, 85433172055732540, true)
    })
    it('Special 2', async () => {
      const pool = await createPool(cntx, 3000, 121.48126046130433, [
        { from: -1200, to: 18000, val: E18 },
        { from: 24000, to: 48000, val: 5n * E18 },
      ])
      await checkSwap(cntx, pool, BigInt('154350003013680480'), true)
    })
    it('Special 3', async () => {
      const pool = await createPool(cntx, 3000, 6.857889404362659, [
        { from: -1200, to: 18000, val: 2n * E18 },
        { from: 12000, to: 24000, val: 6n * E18 },
      ])
      await checkSwap(cntx, pool, BigInt('994664157591385500'), true)
    })
    it('No overlapping small monkey test', async () => {
      const pool = await createPool(cntx, 3000, 3, [
        { from: -1200, to: 18000, val: E18 },
        { from: 24000, to: 48000, val: 5n * E18 },
      ])
      await monkeyTest(cntx, pool, 'small', 10)
    })
    it.skip('No overlapping big monkey test', async () => {
      const pool = await createPool(cntx, 3000, 3, [
        { from: -1200, to: 18000, val: E18 },
        { from: 24000, to: 48000, val: 5n * E18 },
      ])
      await monkeyTest(cntx, pool, 'big', 1000, true)
    })
    it('Touching positions small monkey test', async () => {
      const pool = await createPool(cntx, 3000, 4, [
        { from: -1200, to: 18000, val: E18 },
        { from: 18000, to: 42000, val: 5n * E18 },
      ])
      await monkeyTest(cntx, pool, '_small', 10)
    })
    it.skip('Touching positions big monkey test', async () => {
      const pool = await createPool(cntx, 3000, 4, [
        { from: -1200, to: 18000, val: E18 },
        { from: 18000, to: 42000, val: 5n * E18 },
      ])
      await monkeyTest(cntx, pool, '_big', 1000, true)
    })
    it('Overlapped positions small monkey test', async () => {
      const pool = await createPool(cntx, 3000, 8, [
        { from: -1200, to: 18000, val: 2n * E18 },
        { from: 12000, to: 24000, val: 6n * E18 },
      ])
      await monkeyTest(cntx, pool, 'Small', 10)
    })
    it.skip('Overlapped positions small monkey test', async () => {
      const pool = await createPool(cntx, 3000, 8, [
        { from: -1200, to: 18000, val: 2n * E18 },
        { from: 12000, to: 24000, val: 6n * E18 },
      ])
      await monkeyTest(cntx, pool, 'Big', 1000, true)
    })
    it('Nested positions small monkey test', async () => {
      const pool = await createPool(cntx, 3000, 8, [
        { from: -1200, to: 24000, val: 2n * E18 },
        { from: 6000, to: 12000, val: 6n * E18 },
      ])
      await monkeyTest(cntx, pool, '_small_', 10)
    })
    it.skip('Nested positions big monkey test', async () => {
      const pool = await createPool(cntx, 3000, 8, [
        { from: -1200, to: 24000, val: 2n * E18 },
        { from: 6000, to: 12000, val: 6n * E18 },
      ])
      await monkeyTest(cntx, pool, '_big_', 1000, true)
    })
  })
  it.skip('Random pool monkey test', async () => {
    for (let i = 0; i < 10; ++i) {
      const pool = await createRandomPool(cntx, `pool${i}`, 10)
      await monkeyTest(cntx, pool, `monkey${i}`, 100, true)
    }
  })
})
