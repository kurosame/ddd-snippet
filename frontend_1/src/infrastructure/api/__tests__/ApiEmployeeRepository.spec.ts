import { Employee } from '@/domain/entity/Employee'
import { EmployeeId } from '@/domain/vo/EmployeeId'
import { ApiEmployeeRepository } from '@/infrastructure/api/ApiEmployeeRepository'
import { mockCache, mockMutate } from '@/infrastructure/api/MockRepository'

describe('find', () => {
  let cache: { get: jest.Mock }
  let mutate: jest.Mock
  beforeEach(() => {
    cache = mockCache(`/api/employee?employee_id=S000`, { employee_id: 'S000', employee_name: 'テストS太郎' })
    mutate = mockMutate(`/api/employee?employee_id=A000`, { employee_id: 'A000', employee_name: 'テストA太郎' })
  })

  test('cache is exists', async () => {
    const rep = new ApiEmployeeRepository(cache, mutate)
    const res = await rep.find(new EmployeeId('S000'))
    expect(res).toStrictEqual(new Employee('S000', 'テストS太郎'))
  })

  test('return is entity', async () => {
    const rep = new ApiEmployeeRepository(cache, mutate)
    const res = await rep.find(new EmployeeId('A000'))
    expect(res).toStrictEqual(new Employee('A000', 'テストA太郎'))
  })

  test('return is null', async () => {
    const rep = new ApiEmployeeRepository(cache, mutate)
    const res = await rep.find(new EmployeeId('B000'))
    expect(res).toBeNull()
  })
})

describe('findAll', () => {
  let cache: { get: jest.Mock }
  let noCache: { get: jest.Mock }
  let mutate: jest.Mock
  beforeEach(() => {
    cache = mockCache(`/api/employee`, [
      { employee_id: 'A000', employee_name: 'テストA太郎' },
      { employee_id: 'S000', employee_name: 'テストS太郎' }
    ])
    noCache = mockCache(`/api/employee/no-cache`, [
      { employee_id: 'A000', employee_name: 'テストA太郎' },
      { employee_id: 'S000', employee_name: 'テストS太郎' }
    ])
    mutate = mockMutate(`/api/employee`, [{ employee_id: 'B000', employee_name: 'テストB太郎' }])
  })

  test('cache is exists', async () => {
    const rep = new ApiEmployeeRepository(cache, mutate)
    const res = await rep.findAll()
    expect(res).toStrictEqual([new Employee('A000', 'テストA太郎'), new Employee('S000', 'テストS太郎')])
  })

  test('return is entity[]', async () => {
    const rep = new ApiEmployeeRepository(noCache, mutate)
    const res = await rep.findAll()
    expect(res).toStrictEqual([new Employee('B000', 'テストB太郎')])
  })
})

describe('save', () => {
  let cache: { get: jest.Mock; delete: jest.Mock }
  let mutate: jest.Mock
  beforeEach(() => {
    cache = mockCache(`/api/employee?employee_id=S000`, { employee_id: 'S000', employee_name: 'テストS太郎' })
    mutate = mockMutate(`/api/employee?employee_id=A000`, { employee_id: 'A000', employee_name: 'テストA太郎' })
  })

  test('cache.delete is called', async () => {
    const rep = new ApiEmployeeRepository(cache, mutate)
    await rep.save(new Employee('S000', 'テストS太郎'))
    expect(cache.delete).toBeCalled()
  })
})
