export class EmployeeUpdateCommand {
  public employeeId: string
  public mutate: unknown

  public constructor(employeeId: string, mutate: unknown) {
    this.employeeId = employeeId
    this.mutate = mutate
  }
}
