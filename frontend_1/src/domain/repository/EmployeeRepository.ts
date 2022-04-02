import type { Employee } from '@/domain/entity/Employee'
import type { ApiRepository } from '@/domain/repository/Repository'
import type { EmployeeId } from '@/domain/vo/EmployeeId'

export interface EmployeeRepository extends ApiRepository {
  find: (employeeId: EmployeeId) => Promise<Employee | null>
  findAll: () => Promise<Employee[]>
  save: (employee: Employee) => Promise<void>
}
