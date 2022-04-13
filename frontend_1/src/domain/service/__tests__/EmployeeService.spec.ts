import { Employee } from '@/domain/entity/Employee'
import { EmployeeService } from '@/domain/service/EmployeeService'
import { EmployeeId } from '@/domain/vo/EmployeeId'
import { ApiEmployeeRepository } from '@/infrastructure/api/ApiEmployeeRepository'
import { mockCache, mockMutate } from '@/infrastructure/api/MockRepository'

describe('fetch', () => {
  let cache: { get: jest.Mock }
  let mutate: jest.Mock
  beforeEach(() => {
    cache = mockCache(`/api/employee?employee_id=S000`, { employee_id: 'S000', employee_name: 'テストS太郎' })
    mutate = mockMutate(`/api/employee?employee_id=A000`, { employee_id: 'A000', employee_name: 'テストA太郎' })
  })

  test('employee is exists', async () => {
    const rep = new ApiEmployeeRepository(cache, mutate)
    const service = new EmployeeService(rep)
    const res = await service.fetch(new EmployeeId('A000'))

    expect(res).toStrictEqual(new Employee('A000', 'テストA太郎'))
  })

  test('employee is not exists', async () => {
    const rep = new ApiEmployeeRepository(cache, mutate)
    const service = new EmployeeService(rep)
    const res = await service.fetch(new EmployeeId('B000'))

    expect(res).toBeNull()
  })
})

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

describe('update', () => {
  let cache: { get: jest.Mock }
  let mutate: jest.Mock
  beforeEach(() => {
    cache = mockCache(`/api/employee?employee_id=S000`, { employee_id: 'S000' })
    mutate = mockMutate(`/api/employee?employee_id=A000`, { employee_id: 'A000' })
  })

  test('save employee', () => {
    const rep = new ApiEmployeeRepository(cache, mutate)
    const service = new EmployeeService(rep)

    expect(() => service.update(new Employee('B000', 'テストB太郎'))).not.toThrowError()
  })
})
