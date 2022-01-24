import { rest } from 'msw'

export const employee = [
  rest.get('/user', (_, res, ctx) =>
    res(
      ctx.status(200),
      ctx.json({
        username: 'admin'
      })
    )
  )
]
