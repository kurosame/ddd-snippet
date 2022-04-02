import { Employee } from '@/domain/entity/Employee'
import { EmployeeId } from '@/domain/vo/EmployeeId'
import { EmployeeName } from '@/domain/vo/EmployeeName'

describe('constructor', () => {
  test('create an entity', () => {
    expect(new Employee('aaa', 'テスト名')).toEqual({
      employeeId: new EmployeeId('aaa'),
      employeeName: new EmployeeName('テスト名')
    })
  })
})
