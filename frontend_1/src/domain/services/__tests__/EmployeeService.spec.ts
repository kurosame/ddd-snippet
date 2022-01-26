import { Employee } from '@/domain/entities/Employee'
import { EmployeeService } from '@/domain/services/EmployeeService'
import { ApiEmployeeRepository } from '@/infrastructure/api/ApiEmployeeRepository'
import { mockCache, mockMutate } from '@/infrastructure/api/MockRepository'

let cache: { get: jest.Mock }
let mutate: jest.Mock
beforeEach(() => {
  cache = mockCache(`/api/employee?employee_id=S000`, { employee_id: 'S000' })
  mutate = mockMutate(`/api/employee?employee_id=A000`, { employee_id: 'A000' })
})

describe('isExists', () => {
  test('employee is exists', async () => {
    const rep = new ApiEmployeeRepository(cache, mutate)
    const service = new EmployeeService(rep)
    const res = await service.isExists(new Employee('A000'))
    expect(res).toBeTruthy()
  })

  test('employee is not exists', async () => {
    const rep = new ApiEmployeeRepository(cache, mutate)
    const service = new EmployeeService(rep)
    const res = await service.isExists(new Employee('B000'))
    expect(res).toBeFalsy()
  })
})
