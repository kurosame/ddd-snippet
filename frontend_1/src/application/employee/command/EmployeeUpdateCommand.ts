export class EmployeeUpdateCommand {
  public employeeId: string
  public cache: unknown
  public mutate: unknown

  public constructor(employeeId: string, cache: unknown, mutate: unknown) {
    this.employeeId = employeeId
    this.cache = cache
    this.mutate = mutate
  }
}
