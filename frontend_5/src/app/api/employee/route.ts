import { NextResponse } from 'next/server'

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
