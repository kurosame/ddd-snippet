import type { Employee } from '@/domain/entities/Employee'
import type { EmployeeRepository } from '@/domain/repositories/EmployeeRepository'
import type { EmployeeId } from '@/domain/values/EmployeeId'

export class ApiEmployeeRepository implements EmployeeRepository {
  public find(employeeId: EmployeeId): Employee | null {
    const res = fetch('/user')
    console.info(res)
    console.info(employeeId)
    return null
  }
}
