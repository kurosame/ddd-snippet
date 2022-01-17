import { Employee } from '@/domain/entities/Employee'

describe('constructor', () => {
  test('create an entity', () => {
    expect(new Employee('aaa').employeeId.id).toBe('aaa')
  })
})
