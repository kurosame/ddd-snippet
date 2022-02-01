import { Employee } from '@/domain/entities/Employee'
import { EmployeeService } from '@/domain/services/EmployeeService'
import { EmployeeId } from '@/domain/values/EmployeeId'
import { ApiEmployeeRepository } from '@/infrastructure/api/ApiEmployeeRepository'
import { mockCache, mockMutate } from '@/infrastructure/api/MockRepository'

describe('fetchAll', () => {
  let cache: { get: jest.Mock }
  let mutate: jest.Mock
  beforeEach(() => {
    cache = mockCache(`/api/employee?employee_id=S000`, { employee_id: 'S000' })
    mutate = mockMutate(`/api/employee`, [{ employee_id: 'B000', employee_name: 'テストB太郎' }])
  })

  test('return is entity[]', async () => {
    const rep = new ApiEmployeeRepository(cache, mutate)
    const service = new EmployeeService(rep)
    const res = await service.fetchAll()
    expect(res).toStrictEqual([new Employee('B000', 'テストB太郎')])
  })
})

describe('isExists', () => {
  let cache: { get: jest.Mock }
  let mutate: jest.Mock
  beforeEach(() => {
    cache = mockCache(`/api/employee?employee_id=S000`, { employee_id: 'S000' })
    mutate = mockMutate(`/api/employee?employee_id=A000`, { employee_id: 'A000' })
  })

  test('employee is exists', async () => {
    const rep = new ApiEmployeeRepository(cache, mutate)
    const service = new EmployeeService(rep)
    const res = await service.isExists(new EmployeeId('A000'))
    expect(res).toBeTruthy()
  })

  test('employee is not exists', async () => {
    const rep = new ApiEmployeeRepository(cache, mutate)
    const service = new EmployeeService(rep)
    const res = await service.isExists(new EmployeeId('B000'))
    expect(res).toBeFalsy()
  })
})

describe('update', () => {
  let cache: { get: jest.Mock }
  let mutate: jest.Mock
  beforeEach(() => {
    cache = mockCache(`/api/employee?employee_id=S000`, { employee_id: 'S000' })
    mutate = mockMutate(`/api/employee?employee_id=A000`, { employee_id: 'A000' })
  })

  test('', async () => {
    const rep = new ApiEmployeeRepository(cache, mutate)
    const service = new EmployeeService(rep)
    await service.update(new Employee('B000', 'テストB太郎'))
  })
})
