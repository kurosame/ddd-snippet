import { Employee } from '@/domain/entities/Employee'

describe('constructor', () => {
  test('create an entity', () => {
    expect(new Employee('aaa', 'テスト名')).toEqual({ employeeId: { id: 'aaa' }, employeeName: 'テスト名' })
  })
})
