export class EmployeeId {
  public readonly id: string

  public constructor(id: string) {
    if (id === '') throw new Error('社員IDは必須です')
    if (!['a', 'b', 's'].some(s => id.toLowerCase().startsWith(s)))
      throw new Error('社員IDの先頭は A, B, S のいずれかを指定してください')
    this.id = id
  }
}
