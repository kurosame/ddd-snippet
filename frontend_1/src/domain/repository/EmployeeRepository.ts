import type { Employee } from '@/domain/entity/Employee'
import type { EmployeeId } from '@/domain/vo/EmployeeId'

export interface EmployeeRepository {
  find: (employeeId: EmployeeId) => Promise<Employee | null>
  findAll: () => Promise<Employee[]>
  save: (employee: Employee) => Promise<void>
}
