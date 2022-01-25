import { EmployeeUpdateCommand } from '@/application/employee/command/EmployeeUpdateCommand'
import { updateEmployee } from '@/application/employee/usecase'

let mockMutate: jest.Mock
beforeEach(() => {
  mockMutate = jest.fn().mockImplementation(
    (r: string) =>
      new Promise(resolve => {
        resolve(r === `/api/employee?employee_id=A000` ? { employee_id: 'A000' } : {})
      })
  )
})

describe('updateEmployee', () => {
  test('duplicate employee', () => {
    const command = new EmployeeUpdateCommand('A000', mockMutate)
    expect(() => updateEmployee(command)).rejects.toThrowError(new Error('この社員はすでに登録済みです'))
  })
})
