import { EmployeeName } from '@/domain/values/EmployeeName'

describe('constructor', () => {
  test('create a vo', () => {
    expect(new EmployeeName('aaa')).toEqual({ name: 'aaa' })
  })

  test('given an empty employee name', () => {
    expect(() => new EmployeeName('')).toThrowError(new Error('社員名は必須です'))
  })
})
