import { EmployeeFetchCommand } from '@/application/employee/command/EmployeeFetchCommand'
import { EmployeeUpdateCommand } from '@/application/employee/command/EmployeeUpdateCommand'
import { EmployeeDto } from '@/application/employee/dto/EmployeeDto'
import { fetchEmployees, updateEmployee } from '@/application/employee/usecase'
import { Employee } from '@/domain/entities/Employee'
import { mockCache, mockMutate } from '@/infrastructure/api/MockRepository'

let cache: { get: jest.Mock }
let mutate: jest.Mock
let mutateFetchAll: jest.Mock
beforeEach(() => {
  cache = mockCache(`/api/employee?employee_id=S000`, { employee_id: 'S000' })
  mutate = mockMutate(`/api/employee?employee_id=A000`, { employee_id: 'A000' })
  mutateFetchAll = mockMutate(`/api/employee`, [{ employee_id: 'A000', employee_name: 'テストA太郎' }])
})

describe('fetchEmployees', () => {
  test('return is entity[]', async () => {
    const command = new EmployeeFetchCommand(cache, mutateFetchAll)
    const res = await fetchEmployees(command)
    expect(res).toStrictEqual([new EmployeeDto(new Employee('A000', 'テストA太郎'))])
  })
})

describe('updateEmployee', () => {
  test('duplicate employee', () => {
    const command = new EmployeeUpdateCommand('A000', cache, mutate)
    expect(() => updateEmployee(command)).rejects.toThrowError(new Error('この社員はすでに登録済みです'))
  })
})
