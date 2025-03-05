import { get } from '@vercel/edge-config'
import { NextResponse } from 'next/server'
import { z } from 'zod'

const schema = z.object({
  maintenance: z.boolean(),
})

export const runtime = 'edge'
export const revalidate = 60

export async function GET() {
  try {
    const data = await get('xswap')
    const result = schema.safeParse(data)
    
    if (!result.success) {
      return NextResponse.json({ success: false, error: 'Invalid config data' }, { status: 500 })
    }
    
    return NextResponse.json(result.data)
  } catch (error) {
    console.error('Error fetching xswap config:', error)
    return NextResponse.json({ success: false, error: 'Failed to fetch config' }, { status: 500 })
  }
}
