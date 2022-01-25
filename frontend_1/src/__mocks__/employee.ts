import { rest } from 'msw'

export const employee = [
  rest.get('/api/employee', (req, res, ctx) => {
    const id = (req.url.searchParams.get('employee_id') ?? '').toUpperCase()
    return res(
      ctx.status(200),
      ctx.json(
        ['A000', 'B111', 'S222'].includes(id)
          ? {
              employee_id: id,
              employee_name: 'テスト太郎'
            }
          : {}
      )
    )
  })
]
