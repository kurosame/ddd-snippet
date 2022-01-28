import { Employee } from '@/domain/entities/Employee'
import { EmployeeId } from '@/domain/values/EmployeeId'
import { ApiEmployeeRepository } from '@/infrastructure/api/ApiEmployeeRepository'
import { mockCache, mockMutate } from '@/infrastructure/api/MockRepository'

let cacheFind: { get: jest.Mock }
let mutateFind: jest.Mock
let cacheFindAll: { get: jest.Mock }
let mutateFindAll: jest.Mock
let notCacheFindAll: { get: jest.Mock }
let notCacheMutateFindAll: jest.Mock
beforeEach(() => {
  cacheFind = mockCache(`/api/employee?employee_id=S000`, { employee_id: 'S000' })
  mutateFind = mockMutate(`/api/employee?employee_id=A000`, { employee_id: 'A000' })
  cacheFindAll = mockCache(`/api/employee`, [{ employee_id: 'A000' }, { employee_id: 'S000' }])
  mutateFindAll = mockMutate(`/api/employee`, [{ employee_id: 'B000' }])
  notCacheFindAll = mockCache(`/api/employee/not-cache`, [{ employee_id: 'A000' }, { employee_id: 'S000' }])
  notCacheMutateFindAll = mockMutate(`/api/employee`, [{ employee_id: 'B000' }])
})

describe('find', () => {
  test('cache is exists', async () => {
    const rep = new ApiEmployeeRepository(cacheFind, mutateFind)
    const res = await rep.find(new EmployeeId('S000'))
    expect(res).toStrictEqual(new Employee('S000'))
  })

  test('return is entity', async () => {
    const rep = new ApiEmployeeRepository(cacheFind, mutateFind)
    const res = await rep.find(new EmployeeId('A000'))
    expect(res).toStrictEqual(new Employee('A000'))
  })

  test('return is null', async () => {
    const rep = new ApiEmployeeRepository(cacheFind, mutateFind)
    const res = await rep.find(new EmployeeId('B000'))
    expect(res).toBeNull()
  })
})

describe('findAll', () => {
  test('cache is exists', async () => {
    const rep = new ApiEmployeeRepository(cacheFindAll, mutateFindAll)
    const res = await rep.findAll()
    expect(res).toStrictEqual([new Employee('A000'), new Employee('S000')])
  })

  test('return is entity[]', async () => {
    const rep = new ApiEmployeeRepository(notCacheFindAll, notCacheMutateFindAll)
    const res = await rep.findAll()
    expect(res).toStrictEqual([new Employee('B000')])
  })
})