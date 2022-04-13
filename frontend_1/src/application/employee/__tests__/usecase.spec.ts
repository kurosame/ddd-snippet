import { EmployeeFetchCommand } from '@/application/employee/command/EmployeeFetchCommand'
import { EmployeeUpdateCommand } from '@/application/employee/command/EmployeeUpdateCommand'
import { EmployeeDto } from '@/application/employee/dto/EmployeeDto'
import { fetchEmployees, updateEmployee } from '@/application/employee/usecase'
import { Employee } from '@/domain/entity/Employee'
import { mockCache, mockMutate } from '@/infrastructure/api/MockRepository'

describe('fetchEmployees', () => {
  let cache: { get: jest.Mock }
  let mutate: jest.Mock
  beforeEach(() => {
    cache = mockCache(`/api/employee?employee_id=S000`, { employee_id: 'S000' })
    mutate = mockMutate(`/api/employee`, [{ employee_id: 'A000', employee_name: 'テストA太郎' }])
  })

  test('return is entity[]', async () => {
    const command = new EmployeeFetchCommand(cache, mutate)
    const res = await fetchEmployees(command)
    expect(res).toStrictEqual([new EmployeeDto(new Employee('A000', 'テストA太郎'))])
  })
})

describe('updateEmployee', () => {
  let cache: { get: jest.Mock }
  let mutate: jest.Mock
  beforeEach(() => {
    cache = mockCache(`/api/employee?employee_id=S000`, { employee_id: 'S000' })
    mutate = mockMutate(`/api/employee?employee_id=A000`, { employee_id: 'A000' })
  })

  test('update employee', () => {
    const command = new EmployeeUpdateCommand(
      { employeeId: 'A111', employeeName: 'テストA太郎' },
      { companyName: '株式会社A' },
      cache,
      mutate
    )
    expect(() => updateEmployee(command)).not.toThrowError()
  })
})
