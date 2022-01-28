import { EmployeeId } from '@/domain/values/EmployeeId'

describe('constructor', () => {
  test('create a vo', () => {
    expect(new EmployeeId('aaa')).toEqual({ id: 'aaa' })
  })

  test('given an invalid employee id', () => {
    expect(() => new EmployeeId('ccc')).toThrowError(new Error('社員IDの先頭は A, B, S のいずれかを指定してください'))
  })
})
