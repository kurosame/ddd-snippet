import { rest } from 'msw'

export const employee = [
  rest.get('/api/employee', (req, res, ctx) => {
    const id = req.url.searchParams.get('employee_id')
    const employees = [
      {
        employee_id: 'A000',
        employee_name: 'テストA太郎'
      },
      {
        employee_id: 'B111',
        employee_name: 'テストB太郎'
      },
      {
        employee_id: 'S222',
        employee_name: 'テストS太郎'
      }
    ]

    return res(
      ctx.status(200),
      ctx.json(id ? employees.find(e => e.employee_id === id.toUpperCase()) ?? {} : employees)
    )
  }),
  rest.put('/api/employee', (_, res, ctx) => res(ctx.status(200), ctx.json({})))
]
