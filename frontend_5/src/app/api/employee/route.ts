import { NextRequest, NextResponse } from 'next/server'

export const runtime = 'nodejs'

export const GET = () =>
  NextResponse.json([
    {
      employeeId: 'A000',
      employeeName: 'テストA太郎'
    },
    {
      employeeId: 'B111',
      employeeName: 'テストB太郎'
    },
    {
      employeeId: 'S222',
      employeeName: 'テストS太郎'
    }
  ])

export const PUT = async (req: NextRequest) => {
  const data = (await req.json()) as unknown
  console.info(data)

  return NextResponse.json('Update succeeded!')
}
