import { EmployeeId } from '@/domain/values/EmployeeId'
import { EmployeeName } from '@/domain/values/EmployeeName'

export class Employee {
  public readonly employeeId: EmployeeId
  public readonly employeeName: EmployeeName

  public constructor(employeeId: string, employeeName: string) {
    this.employeeId = new EmployeeId(employeeId)
    this.employeeName = new EmployeeName(employeeName)
  }
}
