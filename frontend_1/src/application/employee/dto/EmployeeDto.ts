import type { Employee } from '@/domain/entities/Employee'

export class EmployeeDto {
  public readonly employeeId: string
  public readonly employeeName: string

  public constructor(employee: Employee) {
    this.employeeId = employee.employeeId.id
    this.employeeName = employee.employeeName.name
  }
}
