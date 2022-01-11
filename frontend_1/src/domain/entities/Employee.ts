import EmployeeId from '@/domain/values/EmployeeId'

export default class Employee {
  public readonly employeeId: EmployeeId

  public constructor(employeeId: string) {
    this.employeeId = new EmployeeId(employeeId)
  }
}
