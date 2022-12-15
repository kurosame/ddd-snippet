export class EmployeeUpdateCommand {
  public employee: { employeeId: string; employeeName: string }
  public company: { companyName: string }

  public constructor(employee: { employeeId: string; employeeName: string }, company: { companyName: string }) {
    this.employee = employee
    this.company = company
  }
}
