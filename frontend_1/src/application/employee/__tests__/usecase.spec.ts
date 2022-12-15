import type { ActionConfigure } from '@/application/action'
import { EmployeeUpdateCommand } from '@/application/employee/command/EmployeeUpdateCommand'
import { EmployeeDto } from '@/application/employee/dto/EmployeeDto'
import { fetchEmployees, updateEmployee } from '@/application/employee/usecase'
import { createActionContextMock } from '@/core/mock'
import { Employee } from '@/domain/entity/Employee'
import { mockCache, mockMutate } from '@/infrastructure/api/MockRepository'

describe('fetchEmployees', () => {
  let mockContext: ActionConfigure
  beforeEach(() => {
    const cache = mockCache(`/api/employee?employee_id=S000`, { employee_id: 'S000' })
    const mutate = mockMutate(`/api/employee`, [{ employee_id: 'A000', employee_name: 'テストA太郎' }])
    mockContext = createActionContextMock(cache, mutate)
  })

  test('return is entity[]', async () => {
    const res = await fetchEmployees({ actionContext: mockContext })()
    expect(res).toStrictEqual([new EmployeeDto(new Employee('A000', 'テストA太郎'))])
  })
})

describe('updateEmployee', () => {
  let mockContext: ActionConfigure
  beforeEach(() => {
    const cache = mockCache(`/api/employee?employee_id=S000`, { employee_id: 'S000' })
    const mutate = mockMutate(`/api/employee?employee_id=A000`, { employee_id: 'A000' })
    mockContext = createActionContextMock(cache, mutate)
  })

  test('update employee', () => {
    const command = new EmployeeUpdateCommand(
      { employeeId: 'A111', employeeName: 'テストA太郎' },
      { companyName: '株式会社A' }
    )
    expect(() => updateEmployee({ actionContext: mockContext })(command)).not.toThrowError()
  })
})
