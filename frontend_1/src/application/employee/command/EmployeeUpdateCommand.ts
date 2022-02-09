export class EmployeeUpdateCommand {
  public employee: { employeeId: string; employeeName: string }
  public cache: unknown
  public mutate: unknown

  public constructor(employee: { employeeId: string; employeeName: string }, cache: unknown, mutate: unknown) {
    this.employee = employee
    this.cache = cache
    this.mutate = mutate
  }
}
