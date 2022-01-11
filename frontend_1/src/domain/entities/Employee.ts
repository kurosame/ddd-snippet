import { EmployeeId } from '@/domain/values/EmployeeId'

export class Employee {
  public readonly employeeId: EmployeeId

  public constructor(employeeId: string) {
    this.employeeId = new EmployeeId(employeeId)
  }
}
