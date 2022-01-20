import type { Employee } from '@/domain/entities/Employee'
import type { EmployeeId } from '@/domain/values/EmployeeId'

export interface EmployeeRepository {
  find: (employeeId: EmployeeId) => Employee | null
}
