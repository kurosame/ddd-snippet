import { EmployeeId } from '@/domain/values/EmployeeId'
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

describe('find', () => {
  test('return is entity', async () => {
    const rep = new ApiEmployeeRepository(mockMutate)
    const res = await rep.find(new EmployeeId('A000'))
    expect(res?.employeeId.id).toBe('A000')
  })

  test('return is null', async () => {
    const rep = new ApiEmployeeRepository(mockMutate)
    const res = await rep.find(new EmployeeId('B000'))
    expect(res).toBeNull()
  })
})
