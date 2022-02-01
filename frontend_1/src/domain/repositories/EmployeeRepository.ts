import type { Employee } from '@/domain/entities/Employee'
import type { ApiRepository } from '@/domain/repositories/Repository'
import type { EmployeeId } from '@/domain/values/EmployeeId'

export interface EmployeeRepository extends ApiRepository {
  find: (employeeId: EmployeeId) => Promise<Employee | null>
  findAll: () => Promise<Employee[]>
  save: (employee: Employee) => Promise<void>
}
