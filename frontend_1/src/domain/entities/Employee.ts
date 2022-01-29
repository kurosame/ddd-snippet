import { EmployeeId } from '@/domain/values/EmployeeId'

export class Employee {
  public readonly employeeId: EmployeeId
  public readonly employeeName: string

  public constructor(employeeId: string, employeeName: string) {
    this.employeeId = new EmployeeId(employeeId)
    this.employeeName = employeeName
  }
}
