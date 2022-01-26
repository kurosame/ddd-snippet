import { EmployeeId } from '@/domain/values/EmployeeId'
import { ApiEmployeeRepository } from '@/infrastructure/api/ApiEmployeeRepository'
import { mockCache, mockMutate } from '@/infrastructure/api/MockRepository'

let cache: { get: jest.Mock }
let mutate: jest.Mock
beforeEach(() => {
  cache = mockCache(`/api/employee?employee_id=S000`, { employee_id: 'S000' })
  mutate = mockMutate(`/api/employee?employee_id=A000`, { employee_id: 'A000' })
})

describe('find', () => {
  test('cache is exists', async () => {
    const rep = new ApiEmployeeRepository(cache, mutate)
    const res = await rep.find(new EmployeeId('S000'))
    expect(res?.employeeId.id).toBe('S000')
  })

  test('return is entity', async () => {
    const rep = new ApiEmployeeRepository(cache, mutate)
    const res = await rep.find(new EmployeeId('A000'))
    expect(res?.employeeId.id).toBe('A000')
  })

  test('return is null', async () => {
    const rep = new ApiEmployeeRepository(cache, mutate)
    const res = await rep.find(new EmployeeId('B000'))
    expect(res).toBeNull()
  })
})
