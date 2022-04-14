import { General } from '@/core/General'

export class EmployeeName {
  public readonly name: string

  public constructor(name: string) {
    if (General.isEmpty(name)) throw new Error('社員名は必須です')
    this.name = name
  }
}
