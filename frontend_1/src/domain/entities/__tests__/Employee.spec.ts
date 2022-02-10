import { Employee } from '@/domain/entities/Employee'
import { EmployeeId } from '@/domain/values/EmployeeId'
import { EmployeeName } from '@/domain/values/EmployeeName'

describe('constructor', () => {
  test('create an entity', () => {
    expect(new Employee('aaa', 'テスト名')).toEqual({
      employeeId: new EmployeeId('aaa'),
      employeeName: new EmployeeName('テスト名')
    })
  })
})
