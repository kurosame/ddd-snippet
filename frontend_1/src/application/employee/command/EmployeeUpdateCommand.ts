export class EmployeeUpdateCommand {
  public employeeId: string

  public constructor(employeeId: string) {
    this.employeeId = employeeId
  }
}
