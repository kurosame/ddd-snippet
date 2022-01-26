import { EmployeeUpdateCommand } from '@/application/employee/command/EmployeeUpdateCommand'
import { updateEmployee } from '@/application/employee/usecase'
import { mockCache, mockMutate } from '@/infrastructure/api/MockRepository'

let cache: { get: jest.Mock }
let mutate: jest.Mock
beforeEach(() => {
  cache = mockCache(`/api/employee?employee_id=S000`, { employee_id: 'S000' })
  mutate = mockMutate(`/api/employee?employee_id=A000`, { employee_id: 'A000' })
})

describe('updateEmployee', () => {
  test('duplicate employee', () => {
    const command = new EmployeeUpdateCommand('A000', cache, mutate)
    expect(() => updateEmployee(command)).rejects.toThrowError(new Error('この社員はすでに登録済みです'))
  })
})
