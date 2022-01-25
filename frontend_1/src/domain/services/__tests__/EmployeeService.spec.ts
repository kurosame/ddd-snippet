import { Employee } from '@/domain/entities/Employee'
import { EmployeeService } from '@/domain/services/EmployeeService'
import { ApiEmployeeRepository } from '@/infrastructure/api/ApiEmployeeRepository'

let mockMutate: jest.Mock
beforeEach(() => {
  mockMutate = jest.fn().mockImplementation(
    (r: string) =>
      new Promise(resolve => {
        resolve(r === `/api/employee?employee_id=A000` ? { employee_id: 'A000' } : {})
      })
  )
})

describe('isExists', () => {
  test('employee is exists', async () => {
    const rep = new ApiEmployeeRepository(mockMutate)
    const service = new EmployeeService(rep)
    const res = await service.isExists(new Employee('A000'))
    expect(res).toBeTruthy()
  })

  test('employee is not exists', async () => {
    const rep = new ApiEmployeeRepository(mockMutate)
    const service = new EmployeeService(rep)
    const res = await service.isExists(new Employee('B000'))
    expect(res).toBeFalsy()
  })
})
