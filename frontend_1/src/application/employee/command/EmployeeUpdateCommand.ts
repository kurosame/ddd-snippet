export class EmployeeUpdateCommand {
  public employee: { employeeId: string; employeeName: string }
  public company: { companyName: string }
  public cache: unknown
  public mutate: unknown

  public constructor(
    employee: { employeeId: string; employeeName: string },
    company: { companyName: string },
    cache: unknown,
    mutate: unknown
  ) {
    this.employee = employee
    this.company = company
    this.cache = cache
    this.mutate = mutate
  }
}
