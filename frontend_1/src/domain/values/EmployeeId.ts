export default class EmployeeId {
  public id: string

  public constructor(id: string) {
    if (!['a', 'b', 's'].some(s => id.toLowerCase().startsWith(s))) throw new Error()
    this.id = id
  }
}
