export class EmployeeId {
  public readonly id: string

  public constructor(id: string) {
    this.id = id
  }

  public validate() {
    if (!['a', 'b', 's'].some(s => this.id.toLowerCase().startsWith(s)))
      throw new Error('社員IDの先頭は A, B, S のいずれかを指定してください')
  }
}
