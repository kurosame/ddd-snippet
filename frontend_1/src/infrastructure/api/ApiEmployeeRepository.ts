import type { Employee } from '@/domain/entities/Employee'
import type { EmployeeRepository } from '@/domain/repositories/EmployeeRepository'
import type { EmployeeId } from '@/domain/values/EmployeeId'

export class ApiEmployeeRepository implements EmployeeRepository {
  public find(employeeId: EmployeeId): Employee | null {
    console.info(employeeId)
    return null
  }
}
